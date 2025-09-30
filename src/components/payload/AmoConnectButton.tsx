"use client"

import { Button, useFormFields } from "@payloadcms/ui"
import React from "react"

const AmoConnectButton: React.FC = () => {
  const [subdomain, integrationId, integrationSecret] = useFormFields(
    ([{ subdomain, integrationId, integrationSecret }]) => [
      subdomain.value,
      integrationId.value,
      integrationSecret.value,
    ],
  )

  if (!subdomain || !integrationId || !integrationSecret) {
    return null
  }

  const handleSubmit = () => {
    window.location.href = `https://amocrm.ru/oauth?client_id=${integrationId}&state=random_state&mode=post_message`
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <Button onClick={handleSubmit} type="submit">
        Подключить AmoCRM
      </Button>
    </div>
  )
}

export default AmoConnectButton
