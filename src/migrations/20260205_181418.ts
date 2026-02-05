import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_footer_options_quick_actions_variant" AS ENUM('default', 'icon', 'icon-text');
  CREATE TYPE "public"."enum_footer_options_quick_actions_color" AS ENUM('primary', 'accent', 'secondary', 'white', 'red');
  CREATE TYPE "public"."enum_footer_options_quick_actions_action" AS ENUM('link', 'form');
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'chat';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'star';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'chart-no-axes-column';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'chart-column-big';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'phone-call';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'smile';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'mail';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'message-circle';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'map-pin';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'armchair';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'microscope';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'handshake';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'award';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'heart-handshake';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'clipboard-check';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'quote';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'x';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'check';
  ALTER TYPE "public"."enum_pages_blocks_why_are_we_items_icon" ADD VALUE 'hand-platter';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'chat';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'star';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'chart-no-axes-column';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'chart-column-big';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'phone-call';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'smile';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'mail';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'message-circle';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'map-pin';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'armchair';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'microscope';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'handshake';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'award';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'heart-handshake';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'clipboard-check';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'quote';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'x';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'check';
  ALTER TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" ADD VALUE 'hand-platter';
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"short_url" varchar NOT NULL,
  	"target_url" varchar NOT NULL,
  	"title" varchar,
  	"active" boolean DEFAULT true,
  	"clicks" numeric DEFAULT 0,
  	"last_click" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone,
  	"utm_source" varchar,
  	"utm_medium" varchar,
  	"utm_campaign" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "forms_hidden_fields" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"amo_id" numeric NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "footer_options_quick_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"icon" varchar,
  	"variant" "enum_footer_options_quick_actions_variant" DEFAULT 'default',
  	"color" "enum_footer_options_quick_actions_color" DEFAULT 'primary',
  	"action" "enum_footer_options_quick_actions_action" DEFAULT 'link',
  	"url" varchar DEFAULT '#',
  	"form_id" integer
  );
  
  CREATE TABLE "amo_crm" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"subdomain" varchar NOT NULL,
  	"integration_id" varchar NOT NULL,
  	"integration_secret" varchar NOT NULL,
  	"status" varchar DEFAULT '❌ CRM не подключена',
  	"contact_phone_field" numeric,
  	"utm_source" numeric,
  	"utm_medium" numeric,
  	"utm_content" numeric,
  	"utm_term" numeric,
  	"utm_campaign" numeric,
  	"_ga" numeric,
  	"_ym_uid" numeric,
  	"access_token" varchar,
  	"refresh_token" varchar,
  	"server_time" numeric,
  	"expires_in" numeric,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "redirect_options" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"default_redirect_id" integer,
  	"track_clicks" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "forms_fields_select_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_fields" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "forms_fields_select_options" CASCADE;
  DROP TABLE "forms_fields" CASCADE;
  ALTER TABLE "pages_blocks_hero_actions" ALTER COLUMN "icon" SET DATA TYPE varchar;
  ALTER TABLE "staff" ALTER COLUMN "experience" SET DATA TYPE varchar;
  ALTER TABLE "forms" ALTER COLUMN "form_id" SET DEFAULT 'b29959c3-b72d-4a39-a119-bb2a77037bd6';
  ALTER TABLE "header_options_action_buttons" ALTER COLUMN "icon" SET DATA TYPE varchar;
  ALTER TABLE "footer_options_action_buttons" ALTER COLUMN "icon" SET DATA TYPE varchar;
  ALTER TABLE "pages_blocks_advantages_advantages" ADD COLUMN "icon" varchar;
  ALTER TABLE "pages_blocks_installment" ADD COLUMN "form_id" integer;
  ALTER TABLE "pages_blocks_gbt_subscribe" ADD COLUMN "subscribe_form_id" integer;
  ALTER TABLE "forms" ADD COLUMN "img_id" integer NOT NULL;
  ALTER TABLE "forms" ADD COLUMN "admin_title" varchar;
  ALTER TABLE "forms" ADD COLUMN "submit_text" varchar DEFAULT 'Отправить' NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "redirects_id" integer;
  ALTER TABLE "seo_options" ADD COLUMN "head_script" varchar;
  ALTER TABLE "forms_hidden_fields" ADD CONSTRAINT "forms_hidden_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_options_quick_actions" ADD CONSTRAINT "footer_options_quick_actions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_options_quick_actions" ADD CONSTRAINT "footer_options_quick_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirect_options" ADD CONSTRAINT "redirect_options_default_redirect_id_pages_id_fk" FOREIGN KEY ("default_redirect_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  CREATE UNIQUE INDEX "redirects_short_url_idx" ON "redirects" USING btree ("short_url");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "forms_hidden_fields_order_idx" ON "forms_hidden_fields" USING btree ("_order");
  CREATE INDEX "forms_hidden_fields_parent_id_idx" ON "forms_hidden_fields" USING btree ("_parent_id");
  CREATE INDEX "footer_options_quick_actions_order_idx" ON "footer_options_quick_actions" USING btree ("_order");
  CREATE INDEX "footer_options_quick_actions_parent_id_idx" ON "footer_options_quick_actions" USING btree ("_parent_id");
  CREATE INDEX "footer_options_quick_actions_form_idx" ON "footer_options_quick_actions" USING btree ("form_id");
  CREATE INDEX "redirect_options_default_redirect_idx" ON "redirect_options" USING btree ("default_redirect_id");
  ALTER TABLE "pages_blocks_installment" ADD CONSTRAINT "pages_blocks_installment_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gbt_subscribe" ADD CONSTRAINT "pages_blocks_gbt_subscribe_subscribe_form_id_forms_id_fk" FOREIGN KEY ("subscribe_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "forms" ADD CONSTRAINT "forms_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_installment_form_idx" ON "pages_blocks_installment" USING btree ("form_id");
  CREATE INDEX "pages_blocks_gbt_subscribe_subscribe_form_idx" ON "pages_blocks_gbt_subscribe" USING btree ("subscribe_form_id");
  CREATE INDEX "forms_img_idx" ON "forms" USING btree ("img_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  ALTER TABLE "pages_blocks_reviews" DROP COLUMN "yandex_iframe_code";
  ALTER TABLE "pages_blocks_reviews" DROP COLUMN "two_gis_iframe_code";
  ALTER TABLE "forms" DROP COLUMN "webhook";
  ALTER TABLE "seo_options" DROP COLUMN "yandex_metrika_enabled";
  ALTER TABLE "seo_options" DROP COLUMN "yandex_metrika_counter_id";
  ALTER TABLE "seo_options" DROP COLUMN "yandex_metrika_webvisor";
  ALTER TABLE "seo_options" DROP COLUMN "yandex_metrika_clickmap";
  ALTER TABLE "seo_options" DROP COLUMN "yandex_metrika_track_links";
  ALTER TABLE "seo_options" DROP COLUMN "yandex_metrika_accurate_track_bounce";
  ALTER TABLE "seo_options" DROP COLUMN "meta_tags_default_title";
  ALTER TABLE "seo_options" DROP COLUMN "meta_tags_default_description";
  ALTER TABLE "seo_options" DROP COLUMN "meta_tags_default_keywords";
  DROP TYPE "public"."enum_pages_blocks_hero_actions_icon";
  DROP TYPE "public"."enum_forms_fields_type";
  DROP TYPE "public"."enum_forms_fields_text_options_validation";
  DROP TYPE "public"."enum_header_options_action_buttons_icon";
  DROP TYPE "public"."enum_footer_options_action_buttons_icon";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_hero_actions_icon" AS ENUM('clipboard-list', 'cog', 'instagram', 'headhunter');
  CREATE TYPE "public"."enum_forms_fields_type" AS ENUM('text', 'textarea', 'number', 'checkbox', 'select');
  CREATE TYPE "public"."enum_forms_fields_text_options_validation" AS ENUM('off', 'phone', 'email', 'url');
  CREATE TYPE "public"."enum_header_options_action_buttons_icon" AS ENUM('clipboard-list', 'cog', 'instagram', 'headhunter');
  CREATE TYPE "public"."enum_footer_options_action_buttons_icon" AS ENUM('clipboard-list', 'cog', 'instagram', 'headhunter');
  CREATE TABLE "forms_fields_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "forms_fields" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"type" "enum_forms_fields_type" NOT NULL,
  	"label" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"text_options_validation" "enum_forms_fields_text_options_validation" DEFAULT 'off',
  	"text_options_min_length" numeric DEFAULT 0,
  	"text_options_max_length" numeric DEFAULT 0,
  	"number_options_min" numeric,
  	"number_options_max" numeric
  );
  
  ALTER TABLE "redirects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_hidden_fields" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_options_quick_actions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "amo_crm" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "redirect_options" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "forms_hidden_fields" CASCADE;
  DROP TABLE "footer_options_quick_actions" CASCADE;
  DROP TABLE "amo_crm" CASCADE;
  DROP TABLE "redirect_options" CASCADE;
  ALTER TABLE "pages_blocks_installment" DROP CONSTRAINT "pages_blocks_installment_form_id_forms_id_fk";
  
  ALTER TABLE "pages_blocks_gbt_subscribe" DROP CONSTRAINT "pages_blocks_gbt_subscribe_subscribe_form_id_forms_id_fk";
  
  ALTER TABLE "forms" DROP CONSTRAINT "forms_img_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_redirects_fk";
  
  ALTER TABLE "pages_blocks_why_are_we_items" ALTER COLUMN "icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_why_are_we_items_icon";
  CREATE TYPE "public"."enum_pages_blocks_why_are_we_items_icon" AS ENUM('clipboard-list', 'cog', 'instagram', 'headhunter');
  ALTER TABLE "pages_blocks_why_are_we_items" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_pages_blocks_why_are_we_items_icon" USING "icon"::"public"."enum_pages_blocks_why_are_we_items_icon";
  ALTER TABLE "pages_blocks_gbt_subscribe_included" ALTER COLUMN "icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon";
  CREATE TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" AS ENUM('clipboard-list', 'cog', 'instagram', 'headhunter');
  ALTER TABLE "pages_blocks_gbt_subscribe_included" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" USING "icon"::"public"."enum_pages_blocks_gbt_subscribe_included_icon";
  DROP INDEX "pages_blocks_installment_form_idx";
  DROP INDEX "pages_blocks_gbt_subscribe_subscribe_form_idx";
  DROP INDEX "forms_img_idx";
  DROP INDEX "payload_locked_documents_rels_redirects_id_idx";
  ALTER TABLE "pages_blocks_hero_actions" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_pages_blocks_hero_actions_icon" USING "icon"::"public"."enum_pages_blocks_hero_actions_icon";
  ALTER TABLE "staff" ALTER COLUMN "experience" SET DATA TYPE numeric;
  ALTER TABLE "forms" ALTER COLUMN "form_id" SET DEFAULT '89455525-5e09-4dcc-9518-aa8985ab0087';
  ALTER TABLE "header_options_action_buttons" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_header_options_action_buttons_icon" USING "icon"::"public"."enum_header_options_action_buttons_icon";
  ALTER TABLE "footer_options_action_buttons" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_footer_options_action_buttons_icon" USING "icon"::"public"."enum_footer_options_action_buttons_icon";
  ALTER TABLE "pages_blocks_reviews" ADD COLUMN "yandex_iframe_code" varchar;
  ALTER TABLE "pages_blocks_reviews" ADD COLUMN "two_gis_iframe_code" varchar;
  ALTER TABLE "forms" ADD COLUMN "webhook" varchar;
  ALTER TABLE "seo_options" ADD COLUMN "yandex_metrika_enabled" boolean DEFAULT false;
  ALTER TABLE "seo_options" ADD COLUMN "yandex_metrika_counter_id" varchar;
  ALTER TABLE "seo_options" ADD COLUMN "yandex_metrika_webvisor" boolean DEFAULT true;
  ALTER TABLE "seo_options" ADD COLUMN "yandex_metrika_clickmap" boolean DEFAULT true;
  ALTER TABLE "seo_options" ADD COLUMN "yandex_metrika_track_links" boolean DEFAULT true;
  ALTER TABLE "seo_options" ADD COLUMN "yandex_metrika_accurate_track_bounce" boolean DEFAULT true;
  ALTER TABLE "seo_options" ADD COLUMN "meta_tags_default_title" varchar;
  ALTER TABLE "seo_options" ADD COLUMN "meta_tags_default_description" varchar;
  ALTER TABLE "seo_options" ADD COLUMN "meta_tags_default_keywords" varchar;
  ALTER TABLE "forms_fields_select_options" ADD CONSTRAINT "forms_fields_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_fields"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_fields" ADD CONSTRAINT "forms_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "forms_fields_select_options_order_idx" ON "forms_fields_select_options" USING btree ("_order");
  CREATE INDEX "forms_fields_select_options_parent_id_idx" ON "forms_fields_select_options" USING btree ("_parent_id");
  CREATE INDEX "forms_fields_order_idx" ON "forms_fields" USING btree ("_order");
  CREATE INDEX "forms_fields_parent_id_idx" ON "forms_fields" USING btree ("_parent_id");
  ALTER TABLE "pages_blocks_advantages_advantages" DROP COLUMN "icon";
  ALTER TABLE "pages_blocks_installment" DROP COLUMN "form_id";
  ALTER TABLE "pages_blocks_gbt_subscribe" DROP COLUMN "subscribe_form_id";
  ALTER TABLE "forms" DROP COLUMN "img_id";
  ALTER TABLE "forms" DROP COLUMN "admin_title";
  ALTER TABLE "forms" DROP COLUMN "submit_text";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "redirects_id";
  ALTER TABLE "seo_options" DROP COLUMN "head_script";
  DROP TYPE "public"."enum_footer_options_quick_actions_variant";
  DROP TYPE "public"."enum_footer_options_quick_actions_color";
  DROP TYPE "public"."enum_footer_options_quick_actions_action";`)
}
