export class AmoCRMService {
  constructor(
    private readonly subdomain: string,
    private readonly integrationId: string,
    private readonly integrationSecret: string,
    private status: boolean = false,
  ) {}

  public async fetchTokens(code: string) {
    const response = await fetch(
      `https://${this.subdomain}.amocrm.ru/oauth2/access_token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          client_id: this.integrationId,
          client_secret: this.integrationSecret,
          grant_type: "authorization_code",
          redirect_uri: `${process.env.NEXT_PUBLIC_ORIGIN}/admin/amo-setup`,
        }),
      },
    )

    if (!response.ok) {
      const message = await response.text()
      throw new Error(`Ошибка AmoCRM API (${response.status}): ${message}`)
    }

    const data = await response.json()
    this.status = true

    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      server_time: data.server_time,
      expires_in: data.expires_in,
    }
  }

  private async refreshTokens(auth: CRMAuth) {
    if (!this.status) return null

    const response = await fetch(
      `https://${this.subdomain}.amocrm.ru/oauth2/access_token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: auth.refresh_token,
          client_id: this.integrationId,
          client_secret: this.integrationSecret,
          grant_type: "refresh_token",
          redirect_uri: `${process.env.NEXT_PUBLIC_ORIGIN}/admin/amo-setup`,
        }),
      },
    )

    if (!response.ok) {
      const message = await response.text()
      throw new Error(`Ошибка AmoCRM API (${response.status}): ${message}`)
    }

    const data = await response.json()
    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      server_time: data.server_time,
      expires_in: data.expires_in,
    }
  }

  public async addContact(auth: CRMAuth, contact: CRMEntity) {
    if (!this.status) return null

    const accessToken: string = await this.getActualToken(auth)

    const response = await fetch(
      `https://${this.subdomain}.amocrm.ru/api/v4/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify([
          {
            name: contact.name,
            custom_fields_values: contact.fields,
            tags_to_add: [
              {
                name: `Источник: ${process.env.NEXT_PUBLIC_ORIGIN}`,
              },
            ],
          },
        ]),
      },
    )

    if (!response.ok) {
      const message = await response.text()
      throw new Error(`Ошибка AmoCRM API (${response.status}): ${message}`)
    }

    const data = (await response.json()) as CRMContactResponse
    return data._embedded.contacts[0].id
  }

  public async addLead(auth: CRMAuth, lead: CRMEntity, contactId: number = -1) {
    if (!this.status) return null

    const accessToken: string = await this.getActualToken(auth)

    const response = await fetch(
      `https://${this.subdomain}.amocrm.ru/api/v4/leads`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify([
          {
            name: lead.name,
            custom_fields_values: lead.fields,
            tags_to_add: [
              {
                name: `Источник: ${process.env.NEXT_PUBLIC_ORIGIN}`,
              },
            ],
            _embedded: {
              contacts: contactId >= 0 ? [{ id: contactId }] : [],
            },
          },
        ]),
      },
    )

    if (!response.ok) {
      const message = await response.text()
      throw new Error(`Ошибка AmoCRM API (${response.status}): ${message}`)
    }

    const data = (await response.json()) as CRMLeadResponse
    return data._embedded.leads[0].id
  }

  private async getActualToken(auth: CRMAuth) {
    return this.hasTokenExpired(auth)
      ? (await this.refreshTokens(auth))?.access_token
      : auth.access_token
  }

  public hasTokenExpired(auth: CRMAuth) {
    const currentTime = Math.floor(Date.now() / 1000)
    const tokenExpiryTime = auth.server_time + auth.expires_in
    return currentTime >= tokenExpiryTime
  }

  public createSetupLink(): string {
    return `https://amocrm.ru/oauth?client_id=${this.integrationId}&state=random_state&mode=post_message`
  }
}

export type CRMAuth = {
  access_token: string
  refresh_token: string
  server_time: number
  expires_in: number
}

export type CRMEntity = {
  name: string
  fields: {
    field_id: number
    values: {
      value: string
    }[]
  }[]
}

export type CRMContactResponse = {
  _embedded: {
    contacts: {
      id: number
    }[]
  }
}

export type CRMLeadResponse = {
  _embedded: {
    leads: {
      id: number
    }[]
  }
}
