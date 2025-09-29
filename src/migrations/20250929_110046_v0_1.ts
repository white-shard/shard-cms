import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_documents_folder" AS ENUM('first', 'right');
  CREATE TYPE "public"."enum_pages_blocks_hero_actions_icon" AS ENUM('clipboard-list', 'cog', 'instagram', 'headhunter');
  CREATE TYPE "public"."enum_pages_blocks_hero_actions_variant" AS ENUM('default', 'icon', 'icon-text');
  CREATE TYPE "public"."enum_pages_blocks_hero_actions_color" AS ENUM('primary', 'accent', 'secondary', 'white', 'red');
  CREATE TYPE "public"."enum_pages_blocks_hero_actions_action" AS ENUM('link', 'form');
  CREATE TYPE "public"."enum_pages_blocks_hero_variant" AS ENUM('default', 'service', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_why_are_we_items_icon" AS ENUM('clipboard-list', 'cog', 'instagram', 'headhunter');
  CREATE TYPE "public"."enum_pages_blocks_documents_folder" AS ENUM('first', 'right');
  CREATE TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon" AS ENUM('clipboard-list', 'cog', 'instagram', 'headhunter');
  CREATE TYPE "public"."enum_forms_fields_type" AS ENUM('text', 'textarea', 'number', 'checkbox', 'select');
  CREATE TYPE "public"."enum_forms_fields_text_options_validation" AS ENUM('off', 'phone', 'email', 'url');
  CREATE TYPE "public"."enum_header_options_navigation_color" AS ENUM('default', 'accent');
  CREATE TYPE "public"."enum_header_options_action_buttons_icon" AS ENUM('clipboard-list', 'cog', 'instagram', 'headhunter');
  CREATE TYPE "public"."enum_header_options_action_buttons_variant" AS ENUM('default', 'icon', 'icon-text');
  CREATE TYPE "public"."enum_header_options_action_buttons_color" AS ENUM('primary', 'accent', 'secondary', 'white', 'red');
  CREATE TYPE "public"."enum_header_options_action_buttons_action" AS ENUM('link', 'form');
  CREATE TYPE "public"."enum_footer_options_action_buttons_icon" AS ENUM('clipboard-list', 'cog', 'instagram', 'headhunter');
  CREATE TYPE "public"."enum_footer_options_action_buttons_variant" AS ENUM('default', 'icon', 'icon-text');
  CREATE TYPE "public"."enum_footer_options_action_buttons_color" AS ENUM('primary', 'accent', 'secondary', 'white', 'red');
  CREATE TYPE "public"."enum_footer_options_action_buttons_action" AS ENUM('link', 'form');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_lg_url" varchar,
  	"sizes_lg_width" numeric,
  	"sizes_lg_height" numeric,
  	"sizes_lg_mime_type" varchar,
  	"sizes_lg_filesize" numeric,
  	"sizes_lg_filename" varchar,
  	"sizes_md_url" varchar,
  	"sizes_md_width" numeric,
  	"sizes_md_height" numeric,
  	"sizes_md_mime_type" varchar,
  	"sizes_md_filesize" numeric,
  	"sizes_md_filename" varchar,
  	"sizes_sm_url" varchar,
  	"sizes_sm_width" numeric,
  	"sizes_sm_height" numeric,
  	"sizes_sm_mime_type" varchar,
  	"sizes_sm_filesize" numeric,
  	"sizes_sm_filename" varchar
  );
  
  CREATE TABLE "documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"folder" "enum_documents_folder" DEFAULT 'first' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "pages_blocks_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"icon" "enum_pages_blocks_hero_actions_icon",
  	"variant" "enum_pages_blocks_hero_actions_variant" DEFAULT 'default',
  	"color" "enum_pages_blocks_hero_actions_color" DEFAULT 'primary',
  	"action" "enum_pages_blocks_hero_actions_action" DEFAULT 'link',
  	"url" varchar DEFAULT '#',
  	"form_id" integer
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_hero_variant" DEFAULT 'default',
  	"img_id" integer,
  	"logo_id" integer,
  	"before_heading" varchar,
  	"heading" varchar NOT NULL,
  	"thesis" varchar,
  	"price" varchar,
  	"old_price" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_founder" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_id" integer,
  	"heading" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"quote" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_advantages_advantages" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_advantages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_services_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"before_heading" varchar DEFAULT 'СТОМАТОЛОГИЯ',
  	"heading" varchar DEFAULT 'DR.KOSHAKOV' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_installment" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_advantages_challenges_advantages_advantages" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_advantages_challenges_challenges_challenges" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_advantages_challenges" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"advantages_img_id" integer,
  	"advantages_heading" varchar NOT NULL,
  	"advantages_description" varchar,
  	"challenges_img_id" integer,
  	"challenges_heading" varchar NOT NULL,
  	"challenges_description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_indications_contraindications_indications" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_indications_contraindications_contraindications" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_indications_contraindications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_methods_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_id" integer,
  	"heading" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_stages_stages" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_stages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_services_cost_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_services_cost" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'СТОИМОСТЬ УСЛУГ В КЛИНИКЕ  DR.KOSHAKOV' NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_works_photos_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"before_img_id" integer NOT NULL,
  	"after_img_id" integer NOT NULL,
  	"heading" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_works_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Фото наших работ' NOT NULL,
  	"description" varchar DEFAULT 'Посмотрите на впечатляющие результаты наших пациентов до и после лечения' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_staff" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"staff_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_heading" varchar,
  	"img_id" integer,
  	"heading" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_expert_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'DR.KOSHAKOV' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Пространство, где приятно лечиться' NOT NULL,
  	"description" varchar DEFAULT 'Мы создали пространство, в котором каждая деталь продумана для вашего удобства и спокойствия — от мягкого освещения до изысканных деталей интерьера.' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cert_list_certificates" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_id" integer NOT NULL,
  	"doc_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cert_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_why_are_we_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_why_are_we_items_icon",
  	"heading" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_why_are_we" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Почему вы выбираете именно нас?' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_history" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_id" integer,
  	"heading" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"quote" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gbt_hello" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"staff_id" integer NOT NULL,
  	"quote" varchar,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_what_do_your_get_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_what_do_your_get" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"text" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"folder" "enum_pages_blocks_documents_folder" DEFAULT 'first' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_reviews_video_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"video_url" varchar NOT NULL,
  	"thumbnail_id" integer,
  	"author" varchar,
  	"avatar_id" integer,
  	"procedure" varchar,
  	"rating" numeric
  );
  
  CREATE TABLE "pages_blocks_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"show_only_positive" boolean DEFAULT true,
  	"yandex_iframe_code" varchar,
  	"two_gis_iframe_code" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gbt_subscribe_included" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_gbt_subscribe_included_icon",
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_gbt_subscribe" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar NOT NULL,
  	"price" varchar NOT NULL,
  	"old_price" varchar,
  	"motivation" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "pages_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"staff_id" integer
  );
  
  CREATE TABLE "services_advantages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"img_id" integer,
  	"title" varchar NOT NULL,
  	"url" varchar,
  	"description" varchar,
  	"price" varchar,
  	"old_price" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "staff_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE "staff" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"img_id" integer NOT NULL,
  	"fullname" varchar NOT NULL,
  	"experience" numeric NOT NULL,
  	"description" varchar,
  	"alternative_specialty" varchar,
  	"staff_page_id" integer,
  	"booking_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "staff_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"specialties_id" integer
  );
  
  CREATE TABLE "specialties" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
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
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" varchar DEFAULT '89455525-5e09-4dcc-9518-aa8985ab0087' NOT NULL,
  	"webhook" varchar,
  	"heading" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"documents_id" integer,
  	"pages_id" integer,
  	"services_id" integer,
  	"staff_id" integer,
  	"specialties_id" integer,
  	"forms_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_options_navigation_categories_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "header_options_navigation_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"has_items" boolean DEFAULT false
  );
  
  CREATE TABLE "header_options_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"color" "enum_header_options_navigation_color" DEFAULT 'default',
  	"url" varchar,
  	"has_categories" boolean DEFAULT false
  );
  
  CREATE TABLE "header_options_action_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"icon" "enum_header_options_action_buttons_icon",
  	"variant" "enum_header_options_action_buttons_variant" DEFAULT 'default',
  	"color" "enum_header_options_action_buttons_color" DEFAULT 'primary',
  	"action" "enum_header_options_action_buttons_action" DEFAULT 'link',
  	"url" varchar DEFAULT '#',
  	"form_id" integer
  );
  
  CREATE TABLE "header_options" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_options_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"page_id" integer NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "footer_options_document_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"document_id" integer NOT NULL
  );
  
  CREATE TABLE "footer_options_action_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"icon" "enum_footer_options_action_buttons_icon",
  	"variant" "enum_footer_options_action_buttons_variant" DEFAULT 'default',
  	"color" "enum_footer_options_action_buttons_color" DEFAULT 'primary',
  	"action" "enum_footer_options_action_buttons_action" DEFAULT 'link',
  	"url" varchar DEFAULT '#',
  	"form_id" integer
  );
  
  CREATE TABLE "footer_options_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "footer_options" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"thesis" varchar DEFAULT 'Европейское лечение в Екатеринбурге',
  	"warning" varchar,
  	"rights" varchar DEFAULT '© 2024 Dr.Koshakov. Все права защищены.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "options_phones" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phone" varchar NOT NULL,
  	"has_telegram" boolean DEFAULT false NOT NULL,
  	"has_whatsapp" boolean DEFAULT false NOT NULL
  );
  
  CREATE TABLE "options_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"mail" varchar NOT NULL
  );
  
  CREATE TABLE "options" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"org_name_short" varchar DEFAULT 'Dr.Koshakov',
  	"org_name_full" varchar DEFAULT 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ДОКТОР КОШАКОВ"',
  	"address_short" varchar DEFAULT 'г. Екатеринбург, метро ДинамоОлимпийская Набережная,  9/1 ',
  	"address_full" varchar DEFAULT '620027, РОССИЯ, обл СВЕРДЛОВСКАЯ, г  ЕКАТЕРИНБУРГ, наб ОЛИМПИЙСКАЯ, ДОМ 9/1, оф ЭТАЖ 1,2',
  	"ogrn" varchar DEFAULT '1226600081718',
  	"inn" varchar DEFAULT '6678126210',
  	"kpp" varchar DEFAULT '667801001',
  	"okpo" varchar DEFAULT '79321316',
  	"work_time_start" varchar DEFAULT '09:00',
  	"work_time_end" varchar DEFAULT '21:00',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "seo_options" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"yandex_metrika_enabled" boolean DEFAULT false,
  	"yandex_metrika_counter_id" varchar,
  	"yandex_metrika_webvisor" boolean DEFAULT true,
  	"yandex_metrika_clickmap" boolean DEFAULT true,
  	"yandex_metrika_track_links" boolean DEFAULT true,
  	"yandex_metrika_accurate_track_bounce" boolean DEFAULT true,
  	"meta_tags_default_title" varchar,
  	"meta_tags_default_description" varchar,
  	"meta_tags_default_keywords" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_actions" ADD CONSTRAINT "pages_blocks_hero_actions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_actions" ADD CONSTRAINT "pages_blocks_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_founder" ADD CONSTRAINT "pages_blocks_founder_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_founder" ADD CONSTRAINT "pages_blocks_founder_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_advantages_advantages" ADD CONSTRAINT "pages_blocks_advantages_advantages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_advantages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_advantages" ADD CONSTRAINT "pages_blocks_advantages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_services" ADD CONSTRAINT "pages_blocks_services_services_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_services" ADD CONSTRAINT "pages_blocks_services_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services" ADD CONSTRAINT "pages_blocks_services_main_id_services_id_fk" FOREIGN KEY ("main_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_services" ADD CONSTRAINT "pages_blocks_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_installment" ADD CONSTRAINT "pages_blocks_installment_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_installment" ADD CONSTRAINT "pages_blocks_installment_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_advantages_challenges_advantages_advantages" ADD CONSTRAINT "pages_blocks_advantages_challenges_advantages_advantages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_advantages_challenges"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_advantages_challenges_challenges_challenges" ADD CONSTRAINT "pages_blocks_advantages_challenges_challenges_challenges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_advantages_challenges"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_advantages_challenges" ADD CONSTRAINT "pages_blocks_advantages_challenges_advantages_img_id_media_id_fk" FOREIGN KEY ("advantages_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_advantages_challenges" ADD CONSTRAINT "pages_blocks_advantages_challenges_challenges_img_id_media_id_fk" FOREIGN KEY ("challenges_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_advantages_challenges" ADD CONSTRAINT "pages_blocks_advantages_challenges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_indications_contraindications_indications" ADD CONSTRAINT "pages_blocks_indications_contraindications_indications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_indications_contraindications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_indications_contraindications_contraindications" ADD CONSTRAINT "pages_blocks_indications_contraindications_contraindications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_indications_contraindications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_indications_contraindications" ADD CONSTRAINT "pages_blocks_indications_contraindications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_methods_methods" ADD CONSTRAINT "pages_blocks_methods_methods_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_methods_methods" ADD CONSTRAINT "pages_blocks_methods_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_methods"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_methods" ADD CONSTRAINT "pages_blocks_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stages_stages" ADD CONSTRAINT "pages_blocks_stages_stages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stages" ADD CONSTRAINT "pages_blocks_stages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_cost_services" ADD CONSTRAINT "pages_blocks_services_cost_services_item_id_services_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_cost_services" ADD CONSTRAINT "pages_blocks_services_cost_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_services_cost"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_cost" ADD CONSTRAINT "pages_blocks_services_cost_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_works_photos_photos" ADD CONSTRAINT "pages_blocks_works_photos_photos_before_img_id_media_id_fk" FOREIGN KEY ("before_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_works_photos_photos" ADD CONSTRAINT "pages_blocks_works_photos_photos_after_img_id_media_id_fk" FOREIGN KEY ("after_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_works_photos_photos" ADD CONSTRAINT "pages_blocks_works_photos_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_works_photos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_works_photos" ADD CONSTRAINT "pages_blocks_works_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_staff" ADD CONSTRAINT "pages_blocks_staff_staff_id_staff_id_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_staff" ADD CONSTRAINT "pages_blocks_staff_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team" ADD CONSTRAINT "pages_blocks_team_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_team" ADD CONSTRAINT "pages_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_expert_team" ADD CONSTRAINT "pages_blocks_expert_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cert_list_certificates" ADD CONSTRAINT "pages_blocks_cert_list_certificates_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cert_list_certificates" ADD CONSTRAINT "pages_blocks_cert_list_certificates_doc_id_documents_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cert_list_certificates" ADD CONSTRAINT "pages_blocks_cert_list_certificates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cert_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cert_list" ADD CONSTRAINT "pages_blocks_cert_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_are_we_items" ADD CONSTRAINT "pages_blocks_why_are_we_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_why_are_we"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_are_we" ADD CONSTRAINT "pages_blocks_why_are_we_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_history" ADD CONSTRAINT "pages_blocks_history_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_history" ADD CONSTRAINT "pages_blocks_history_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gbt_hello" ADD CONSTRAINT "pages_blocks_gbt_hello_staff_id_staff_id_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gbt_hello" ADD CONSTRAINT "pages_blocks_gbt_hello_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_what_do_your_get_items" ADD CONSTRAINT "pages_blocks_what_do_your_get_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_what_do_your_get"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_what_do_your_get" ADD CONSTRAINT "pages_blocks_what_do_your_get_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video" ADD CONSTRAINT "pages_blocks_video_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_video" ADD CONSTRAINT "pages_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text" ADD CONSTRAINT "pages_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_documents" ADD CONSTRAINT "pages_blocks_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_reviews_video_reviews" ADD CONSTRAINT "pages_blocks_reviews_video_reviews_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_reviews_video_reviews" ADD CONSTRAINT "pages_blocks_reviews_video_reviews_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_reviews_video_reviews" ADD CONSTRAINT "pages_blocks_reviews_video_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_reviews"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_reviews" ADD CONSTRAINT "pages_blocks_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gbt_subscribe_included" ADD CONSTRAINT "pages_blocks_gbt_subscribe_included_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gbt_subscribe"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gbt_subscribe" ADD CONSTRAINT "pages_blocks_gbt_subscribe_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_texts" ADD CONSTRAINT "pages_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_staff_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_advantages" ADD CONSTRAINT "services_advantages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "staff_features" ADD CONSTRAINT "staff_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "staff" ADD CONSTRAINT "staff_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "staff" ADD CONSTRAINT "staff_staff_page_id_pages_id_fk" FOREIGN KEY ("staff_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "staff_rels" ADD CONSTRAINT "staff_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "staff_rels" ADD CONSTRAINT "staff_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_fields_select_options" ADD CONSTRAINT "forms_fields_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_fields"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_fields" ADD CONSTRAINT "forms_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_staff_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_options_navigation_categories_items" ADD CONSTRAINT "header_options_navigation_categories_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_options_navigation_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_options_navigation_categories" ADD CONSTRAINT "header_options_navigation_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_options_navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_options_navigation" ADD CONSTRAINT "header_options_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_options_action_buttons" ADD CONSTRAINT "header_options_action_buttons_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_options_action_buttons" ADD CONSTRAINT "header_options_action_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_options_services" ADD CONSTRAINT "footer_options_services_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_options_services" ADD CONSTRAINT "footer_options_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_options_document_links" ADD CONSTRAINT "footer_options_document_links_document_id_documents_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_options_document_links" ADD CONSTRAINT "footer_options_document_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_options_action_buttons" ADD CONSTRAINT "footer_options_action_buttons_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_options_action_buttons" ADD CONSTRAINT "footer_options_action_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_options_footer_links" ADD CONSTRAINT "footer_options_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "options_phones" ADD CONSTRAINT "options_phones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "options_emails" ADD CONSTRAINT "options_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."options"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_lg_sizes_lg_filename_idx" ON "media" USING btree ("sizes_lg_filename");
  CREATE INDEX "media_sizes_md_sizes_md_filename_idx" ON "media" USING btree ("sizes_md_filename");
  CREATE INDEX "media_sizes_sm_sizes_sm_filename_idx" ON "media" USING btree ("sizes_sm_filename");
  CREATE INDEX "documents_updated_at_idx" ON "documents" USING btree ("updated_at");
  CREATE INDEX "documents_created_at_idx" ON "documents" USING btree ("created_at");
  CREATE UNIQUE INDEX "documents_filename_idx" ON "documents" USING btree ("filename");
  CREATE INDEX "pages_blocks_hero_actions_order_idx" ON "pages_blocks_hero_actions" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_actions_parent_id_idx" ON "pages_blocks_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_actions_form_idx" ON "pages_blocks_hero_actions" USING btree ("form_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_img_idx" ON "pages_blocks_hero" USING btree ("img_id");
  CREATE INDEX "pages_blocks_hero_logo_idx" ON "pages_blocks_hero" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_founder_order_idx" ON "pages_blocks_founder" USING btree ("_order");
  CREATE INDEX "pages_blocks_founder_parent_id_idx" ON "pages_blocks_founder" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_founder_path_idx" ON "pages_blocks_founder" USING btree ("_path");
  CREATE INDEX "pages_blocks_founder_img_idx" ON "pages_blocks_founder" USING btree ("img_id");
  CREATE INDEX "pages_blocks_advantages_advantages_order_idx" ON "pages_blocks_advantages_advantages" USING btree ("_order");
  CREATE INDEX "pages_blocks_advantages_advantages_parent_id_idx" ON "pages_blocks_advantages_advantages" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_advantages_order_idx" ON "pages_blocks_advantages" USING btree ("_order");
  CREATE INDEX "pages_blocks_advantages_parent_id_idx" ON "pages_blocks_advantages" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_advantages_path_idx" ON "pages_blocks_advantages" USING btree ("_path");
  CREATE INDEX "pages_blocks_services_services_order_idx" ON "pages_blocks_services_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_services_parent_id_idx" ON "pages_blocks_services_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_services_service_idx" ON "pages_blocks_services_services" USING btree ("service_id");
  CREATE INDEX "pages_blocks_services_order_idx" ON "pages_blocks_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_parent_id_idx" ON "pages_blocks_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_path_idx" ON "pages_blocks_services" USING btree ("_path");
  CREATE INDEX "pages_blocks_services_main_idx" ON "pages_blocks_services" USING btree ("main_id");
  CREATE INDEX "pages_blocks_contact_order_idx" ON "pages_blocks_contact" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_parent_id_idx" ON "pages_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_path_idx" ON "pages_blocks_contact" USING btree ("_path");
  CREATE INDEX "pages_blocks_installment_order_idx" ON "pages_blocks_installment" USING btree ("_order");
  CREATE INDEX "pages_blocks_installment_parent_id_idx" ON "pages_blocks_installment" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_installment_path_idx" ON "pages_blocks_installment" USING btree ("_path");
  CREATE INDEX "pages_blocks_installment_img_idx" ON "pages_blocks_installment" USING btree ("img_id");
  CREATE INDEX "pages_blocks_advantages_challenges_advantages_advantages_order_idx" ON "pages_blocks_advantages_challenges_advantages_advantages" USING btree ("_order");
  CREATE INDEX "pages_blocks_advantages_challenges_advantages_advantages_parent_id_idx" ON "pages_blocks_advantages_challenges_advantages_advantages" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_advantages_challenges_challenges_challenges_order_idx" ON "pages_blocks_advantages_challenges_challenges_challenges" USING btree ("_order");
  CREATE INDEX "pages_blocks_advantages_challenges_challenges_challenges_parent_id_idx" ON "pages_blocks_advantages_challenges_challenges_challenges" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_advantages_challenges_order_idx" ON "pages_blocks_advantages_challenges" USING btree ("_order");
  CREATE INDEX "pages_blocks_advantages_challenges_parent_id_idx" ON "pages_blocks_advantages_challenges" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_advantages_challenges_path_idx" ON "pages_blocks_advantages_challenges" USING btree ("_path");
  CREATE INDEX "pages_blocks_advantages_challenges_advantages_advantages_idx" ON "pages_blocks_advantages_challenges" USING btree ("advantages_img_id");
  CREATE INDEX "pages_blocks_advantages_challenges_challenges_challenges_idx" ON "pages_blocks_advantages_challenges" USING btree ("challenges_img_id");
  CREATE INDEX "pages_blocks_indications_contraindications_indications_order_idx" ON "pages_blocks_indications_contraindications_indications" USING btree ("_order");
  CREATE INDEX "pages_blocks_indications_contraindications_indications_parent_id_idx" ON "pages_blocks_indications_contraindications_indications" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_indications_contraindications_contraindications_order_idx" ON "pages_blocks_indications_contraindications_contraindications" USING btree ("_order");
  CREATE INDEX "pages_blocks_indications_contraindications_contraindications_parent_id_idx" ON "pages_blocks_indications_contraindications_contraindications" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_indications_contraindications_order_idx" ON "pages_blocks_indications_contraindications" USING btree ("_order");
  CREATE INDEX "pages_blocks_indications_contraindications_parent_id_idx" ON "pages_blocks_indications_contraindications" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_indications_contraindications_path_idx" ON "pages_blocks_indications_contraindications" USING btree ("_path");
  CREATE INDEX "pages_blocks_methods_methods_order_idx" ON "pages_blocks_methods_methods" USING btree ("_order");
  CREATE INDEX "pages_blocks_methods_methods_parent_id_idx" ON "pages_blocks_methods_methods" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_methods_methods_img_idx" ON "pages_blocks_methods_methods" USING btree ("img_id");
  CREATE INDEX "pages_blocks_methods_order_idx" ON "pages_blocks_methods" USING btree ("_order");
  CREATE INDEX "pages_blocks_methods_parent_id_idx" ON "pages_blocks_methods" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_methods_path_idx" ON "pages_blocks_methods" USING btree ("_path");
  CREATE INDEX "pages_blocks_stages_stages_order_idx" ON "pages_blocks_stages_stages" USING btree ("_order");
  CREATE INDEX "pages_blocks_stages_stages_parent_id_idx" ON "pages_blocks_stages_stages" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stages_order_idx" ON "pages_blocks_stages" USING btree ("_order");
  CREATE INDEX "pages_blocks_stages_parent_id_idx" ON "pages_blocks_stages" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stages_path_idx" ON "pages_blocks_stages" USING btree ("_path");
  CREATE INDEX "pages_blocks_services_cost_services_order_idx" ON "pages_blocks_services_cost_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_cost_services_parent_id_idx" ON "pages_blocks_services_cost_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_cost_services_item_idx" ON "pages_blocks_services_cost_services" USING btree ("item_id");
  CREATE INDEX "pages_blocks_services_cost_order_idx" ON "pages_blocks_services_cost" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_cost_parent_id_idx" ON "pages_blocks_services_cost" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_cost_path_idx" ON "pages_blocks_services_cost" USING btree ("_path");
  CREATE INDEX "pages_blocks_works_photos_photos_order_idx" ON "pages_blocks_works_photos_photos" USING btree ("_order");
  CREATE INDEX "pages_blocks_works_photos_photos_parent_id_idx" ON "pages_blocks_works_photos_photos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_works_photos_photos_before_img_idx" ON "pages_blocks_works_photos_photos" USING btree ("before_img_id");
  CREATE INDEX "pages_blocks_works_photos_photos_after_img_idx" ON "pages_blocks_works_photos_photos" USING btree ("after_img_id");
  CREATE INDEX "pages_blocks_works_photos_order_idx" ON "pages_blocks_works_photos" USING btree ("_order");
  CREATE INDEX "pages_blocks_works_photos_parent_id_idx" ON "pages_blocks_works_photos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_works_photos_path_idx" ON "pages_blocks_works_photos" USING btree ("_path");
  CREATE INDEX "pages_blocks_staff_order_idx" ON "pages_blocks_staff" USING btree ("_order");
  CREATE INDEX "pages_blocks_staff_parent_id_idx" ON "pages_blocks_staff" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_staff_path_idx" ON "pages_blocks_staff" USING btree ("_path");
  CREATE INDEX "pages_blocks_staff_staff_idx" ON "pages_blocks_staff" USING btree ("staff_id");
  CREATE INDEX "pages_blocks_team_order_idx" ON "pages_blocks_team" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_parent_id_idx" ON "pages_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_path_idx" ON "pages_blocks_team" USING btree ("_path");
  CREATE INDEX "pages_blocks_team_img_idx" ON "pages_blocks_team" USING btree ("img_id");
  CREATE INDEX "pages_blocks_expert_team_order_idx" ON "pages_blocks_expert_team" USING btree ("_order");
  CREATE INDEX "pages_blocks_expert_team_parent_id_idx" ON "pages_blocks_expert_team" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_expert_team_path_idx" ON "pages_blocks_expert_team" USING btree ("_path");
  CREATE INDEX "pages_blocks_gallery_images_order_idx" ON "pages_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_images_parent_id_idx" ON "pages_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_images_img_idx" ON "pages_blocks_gallery_images" USING btree ("img_id");
  CREATE INDEX "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX "pages_blocks_cert_list_certificates_order_idx" ON "pages_blocks_cert_list_certificates" USING btree ("_order");
  CREATE INDEX "pages_blocks_cert_list_certificates_parent_id_idx" ON "pages_blocks_cert_list_certificates" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cert_list_certificates_img_idx" ON "pages_blocks_cert_list_certificates" USING btree ("img_id");
  CREATE INDEX "pages_blocks_cert_list_certificates_doc_idx" ON "pages_blocks_cert_list_certificates" USING btree ("doc_id");
  CREATE INDEX "pages_blocks_cert_list_order_idx" ON "pages_blocks_cert_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_cert_list_parent_id_idx" ON "pages_blocks_cert_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cert_list_path_idx" ON "pages_blocks_cert_list" USING btree ("_path");
  CREATE INDEX "pages_blocks_why_are_we_items_order_idx" ON "pages_blocks_why_are_we_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_are_we_items_parent_id_idx" ON "pages_blocks_why_are_we_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_are_we_order_idx" ON "pages_blocks_why_are_we" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_are_we_parent_id_idx" ON "pages_blocks_why_are_we" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_are_we_path_idx" ON "pages_blocks_why_are_we" USING btree ("_path");
  CREATE INDEX "pages_blocks_history_order_idx" ON "pages_blocks_history" USING btree ("_order");
  CREATE INDEX "pages_blocks_history_parent_id_idx" ON "pages_blocks_history" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_history_path_idx" ON "pages_blocks_history" USING btree ("_path");
  CREATE INDEX "pages_blocks_history_img_idx" ON "pages_blocks_history" USING btree ("img_id");
  CREATE INDEX "pages_blocks_gbt_hello_order_idx" ON "pages_blocks_gbt_hello" USING btree ("_order");
  CREATE INDEX "pages_blocks_gbt_hello_parent_id_idx" ON "pages_blocks_gbt_hello" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gbt_hello_path_idx" ON "pages_blocks_gbt_hello" USING btree ("_path");
  CREATE INDEX "pages_blocks_gbt_hello_staff_idx" ON "pages_blocks_gbt_hello" USING btree ("staff_id");
  CREATE INDEX "pages_blocks_what_do_your_get_items_order_idx" ON "pages_blocks_what_do_your_get_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_what_do_your_get_items_parent_id_idx" ON "pages_blocks_what_do_your_get_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_what_do_your_get_order_idx" ON "pages_blocks_what_do_your_get" USING btree ("_order");
  CREATE INDEX "pages_blocks_what_do_your_get_parent_id_idx" ON "pages_blocks_what_do_your_get" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_what_do_your_get_path_idx" ON "pages_blocks_what_do_your_get" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_order_idx" ON "pages_blocks_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_parent_id_idx" ON "pages_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_path_idx" ON "pages_blocks_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_img_idx" ON "pages_blocks_image" USING btree ("img_id");
  CREATE INDEX "pages_blocks_video_order_idx" ON "pages_blocks_video" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_parent_id_idx" ON "pages_blocks_video" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_path_idx" ON "pages_blocks_video" USING btree ("_path");
  CREATE INDEX "pages_blocks_video_video_idx" ON "pages_blocks_video" USING btree ("video_id");
  CREATE INDEX "pages_blocks_text_order_idx" ON "pages_blocks_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_parent_id_idx" ON "pages_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_path_idx" ON "pages_blocks_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_documents_order_idx" ON "pages_blocks_documents" USING btree ("_order");
  CREATE INDEX "pages_blocks_documents_parent_id_idx" ON "pages_blocks_documents" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_documents_path_idx" ON "pages_blocks_documents" USING btree ("_path");
  CREATE INDEX "pages_blocks_reviews_video_reviews_order_idx" ON "pages_blocks_reviews_video_reviews" USING btree ("_order");
  CREATE INDEX "pages_blocks_reviews_video_reviews_parent_id_idx" ON "pages_blocks_reviews_video_reviews" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_reviews_video_reviews_thumbnail_idx" ON "pages_blocks_reviews_video_reviews" USING btree ("thumbnail_id");
  CREATE INDEX "pages_blocks_reviews_video_reviews_avatar_idx" ON "pages_blocks_reviews_video_reviews" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_reviews_order_idx" ON "pages_blocks_reviews" USING btree ("_order");
  CREATE INDEX "pages_blocks_reviews_parent_id_idx" ON "pages_blocks_reviews" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_reviews_path_idx" ON "pages_blocks_reviews" USING btree ("_path");
  CREATE INDEX "pages_blocks_gbt_subscribe_included_order_idx" ON "pages_blocks_gbt_subscribe_included" USING btree ("_order");
  CREATE INDEX "pages_blocks_gbt_subscribe_included_parent_id_idx" ON "pages_blocks_gbt_subscribe_included" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gbt_subscribe_order_idx" ON "pages_blocks_gbt_subscribe" USING btree ("_order");
  CREATE INDEX "pages_blocks_gbt_subscribe_parent_id_idx" ON "pages_blocks_gbt_subscribe" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gbt_subscribe_path_idx" ON "pages_blocks_gbt_subscribe" USING btree ("_path");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages_texts_order_parent_idx" ON "pages_texts" USING btree ("order","parent_id");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_staff_id_idx" ON "pages_rels" USING btree ("staff_id");
  CREATE INDEX "services_advantages_order_idx" ON "services_advantages" USING btree ("_order");
  CREATE INDEX "services_advantages_parent_id_idx" ON "services_advantages" USING btree ("_parent_id");
  CREATE INDEX "services_img_idx" ON "services" USING btree ("img_id");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "staff_features_order_idx" ON "staff_features" USING btree ("_order");
  CREATE INDEX "staff_features_parent_id_idx" ON "staff_features" USING btree ("_parent_id");
  CREATE INDEX "staff_img_idx" ON "staff" USING btree ("img_id");
  CREATE INDEX "staff_staff_page_idx" ON "staff" USING btree ("staff_page_id");
  CREATE INDEX "staff_updated_at_idx" ON "staff" USING btree ("updated_at");
  CREATE INDEX "staff_created_at_idx" ON "staff" USING btree ("created_at");
  CREATE INDEX "staff_rels_order_idx" ON "staff_rels" USING btree ("order");
  CREATE INDEX "staff_rels_parent_idx" ON "staff_rels" USING btree ("parent_id");
  CREATE INDEX "staff_rels_path_idx" ON "staff_rels" USING btree ("path");
  CREATE INDEX "staff_rels_specialties_id_idx" ON "staff_rels" USING btree ("specialties_id");
  CREATE INDEX "specialties_updated_at_idx" ON "specialties" USING btree ("updated_at");
  CREATE INDEX "specialties_created_at_idx" ON "specialties" USING btree ("created_at");
  CREATE INDEX "forms_fields_select_options_order_idx" ON "forms_fields_select_options" USING btree ("_order");
  CREATE INDEX "forms_fields_select_options_parent_id_idx" ON "forms_fields_select_options" USING btree ("_parent_id");
  CREATE INDEX "forms_fields_order_idx" ON "forms_fields" USING btree ("_order");
  CREATE INDEX "forms_fields_parent_id_idx" ON "forms_fields" USING btree ("_parent_id");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_documents_id_idx" ON "payload_locked_documents_rels" USING btree ("documents_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_staff_id_idx" ON "payload_locked_documents_rels" USING btree ("staff_id");
  CREATE INDEX "payload_locked_documents_rels_specialties_id_idx" ON "payload_locked_documents_rels" USING btree ("specialties_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_options_navigation_categories_items_order_idx" ON "header_options_navigation_categories_items" USING btree ("_order");
  CREATE INDEX "header_options_navigation_categories_items_parent_id_idx" ON "header_options_navigation_categories_items" USING btree ("_parent_id");
  CREATE INDEX "header_options_navigation_categories_order_idx" ON "header_options_navigation_categories" USING btree ("_order");
  CREATE INDEX "header_options_navigation_categories_parent_id_idx" ON "header_options_navigation_categories" USING btree ("_parent_id");
  CREATE INDEX "header_options_navigation_order_idx" ON "header_options_navigation" USING btree ("_order");
  CREATE INDEX "header_options_navigation_parent_id_idx" ON "header_options_navigation" USING btree ("_parent_id");
  CREATE INDEX "header_options_action_buttons_order_idx" ON "header_options_action_buttons" USING btree ("_order");
  CREATE INDEX "header_options_action_buttons_parent_id_idx" ON "header_options_action_buttons" USING btree ("_parent_id");
  CREATE INDEX "header_options_action_buttons_form_idx" ON "header_options_action_buttons" USING btree ("form_id");
  CREATE INDEX "footer_options_services_order_idx" ON "footer_options_services" USING btree ("_order");
  CREATE INDEX "footer_options_services_parent_id_idx" ON "footer_options_services" USING btree ("_parent_id");
  CREATE INDEX "footer_options_services_page_idx" ON "footer_options_services" USING btree ("page_id");
  CREATE INDEX "footer_options_document_links_order_idx" ON "footer_options_document_links" USING btree ("_order");
  CREATE INDEX "footer_options_document_links_parent_id_idx" ON "footer_options_document_links" USING btree ("_parent_id");
  CREATE INDEX "footer_options_document_links_document_idx" ON "footer_options_document_links" USING btree ("document_id");
  CREATE INDEX "footer_options_action_buttons_order_idx" ON "footer_options_action_buttons" USING btree ("_order");
  CREATE INDEX "footer_options_action_buttons_parent_id_idx" ON "footer_options_action_buttons" USING btree ("_parent_id");
  CREATE INDEX "footer_options_action_buttons_form_idx" ON "footer_options_action_buttons" USING btree ("form_id");
  CREATE INDEX "footer_options_footer_links_order_idx" ON "footer_options_footer_links" USING btree ("_order");
  CREATE INDEX "footer_options_footer_links_parent_id_idx" ON "footer_options_footer_links" USING btree ("_parent_id");
  CREATE INDEX "options_phones_order_idx" ON "options_phones" USING btree ("_order");
  CREATE INDEX "options_phones_parent_id_idx" ON "options_phones" USING btree ("_parent_id");
  CREATE INDEX "options_emails_order_idx" ON "options_emails" USING btree ("_order");
  CREATE INDEX "options_emails_parent_id_idx" ON "options_emails" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "documents" CASCADE;
  DROP TABLE "pages_blocks_hero_actions" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_founder" CASCADE;
  DROP TABLE "pages_blocks_advantages_advantages" CASCADE;
  DROP TABLE "pages_blocks_advantages" CASCADE;
  DROP TABLE "pages_blocks_services_services" CASCADE;
  DROP TABLE "pages_blocks_services" CASCADE;
  DROP TABLE "pages_blocks_contact" CASCADE;
  DROP TABLE "pages_blocks_installment" CASCADE;
  DROP TABLE "pages_blocks_advantages_challenges_advantages_advantages" CASCADE;
  DROP TABLE "pages_blocks_advantages_challenges_challenges_challenges" CASCADE;
  DROP TABLE "pages_blocks_advantages_challenges" CASCADE;
  DROP TABLE "pages_blocks_indications_contraindications_indications" CASCADE;
  DROP TABLE "pages_blocks_indications_contraindications_contraindications" CASCADE;
  DROP TABLE "pages_blocks_indications_contraindications" CASCADE;
  DROP TABLE "pages_blocks_methods_methods" CASCADE;
  DROP TABLE "pages_blocks_methods" CASCADE;
  DROP TABLE "pages_blocks_stages_stages" CASCADE;
  DROP TABLE "pages_blocks_stages" CASCADE;
  DROP TABLE "pages_blocks_services_cost_services" CASCADE;
  DROP TABLE "pages_blocks_services_cost" CASCADE;
  DROP TABLE "pages_blocks_works_photos_photos" CASCADE;
  DROP TABLE "pages_blocks_works_photos" CASCADE;
  DROP TABLE "pages_blocks_staff" CASCADE;
  DROP TABLE "pages_blocks_team" CASCADE;
  DROP TABLE "pages_blocks_expert_team" CASCADE;
  DROP TABLE "pages_blocks_gallery_images" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "pages_blocks_cert_list_certificates" CASCADE;
  DROP TABLE "pages_blocks_cert_list" CASCADE;
  DROP TABLE "pages_blocks_why_are_we_items" CASCADE;
  DROP TABLE "pages_blocks_why_are_we" CASCADE;
  DROP TABLE "pages_blocks_history" CASCADE;
  DROP TABLE "pages_blocks_gbt_hello" CASCADE;
  DROP TABLE "pages_blocks_what_do_your_get_items" CASCADE;
  DROP TABLE "pages_blocks_what_do_your_get" CASCADE;
  DROP TABLE "pages_blocks_image" CASCADE;
  DROP TABLE "pages_blocks_video" CASCADE;
  DROP TABLE "pages_blocks_text" CASCADE;
  DROP TABLE "pages_blocks_documents" CASCADE;
  DROP TABLE "pages_blocks_reviews_video_reviews" CASCADE;
  DROP TABLE "pages_blocks_reviews" CASCADE;
  DROP TABLE "pages_blocks_gbt_subscribe_included" CASCADE;
  DROP TABLE "pages_blocks_gbt_subscribe" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_texts" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "services_advantages" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "staff_features" CASCADE;
  DROP TABLE "staff" CASCADE;
  DROP TABLE "staff_rels" CASCADE;
  DROP TABLE "specialties" CASCADE;
  DROP TABLE "forms_fields_select_options" CASCADE;
  DROP TABLE "forms_fields" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_options_navigation_categories_items" CASCADE;
  DROP TABLE "header_options_navigation_categories" CASCADE;
  DROP TABLE "header_options_navigation" CASCADE;
  DROP TABLE "header_options_action_buttons" CASCADE;
  DROP TABLE "header_options" CASCADE;
  DROP TABLE "footer_options_services" CASCADE;
  DROP TABLE "footer_options_document_links" CASCADE;
  DROP TABLE "footer_options_action_buttons" CASCADE;
  DROP TABLE "footer_options_footer_links" CASCADE;
  DROP TABLE "footer_options" CASCADE;
  DROP TABLE "options_phones" CASCADE;
  DROP TABLE "options_emails" CASCADE;
  DROP TABLE "options" CASCADE;
  DROP TABLE "seo_options" CASCADE;
  DROP TYPE "public"."enum_documents_folder";
  DROP TYPE "public"."enum_pages_blocks_hero_actions_icon";
  DROP TYPE "public"."enum_pages_blocks_hero_actions_variant";
  DROP TYPE "public"."enum_pages_blocks_hero_actions_color";
  DROP TYPE "public"."enum_pages_blocks_hero_actions_action";
  DROP TYPE "public"."enum_pages_blocks_hero_variant";
  DROP TYPE "public"."enum_pages_blocks_why_are_we_items_icon";
  DROP TYPE "public"."enum_pages_blocks_documents_folder";
  DROP TYPE "public"."enum_pages_blocks_gbt_subscribe_included_icon";
  DROP TYPE "public"."enum_forms_fields_type";
  DROP TYPE "public"."enum_forms_fields_text_options_validation";
  DROP TYPE "public"."enum_header_options_navigation_color";
  DROP TYPE "public"."enum_header_options_action_buttons_icon";
  DROP TYPE "public"."enum_header_options_action_buttons_variant";
  DROP TYPE "public"."enum_header_options_action_buttons_color";
  DROP TYPE "public"."enum_header_options_action_buttons_action";
  DROP TYPE "public"."enum_footer_options_action_buttons_icon";
  DROP TYPE "public"."enum_footer_options_action_buttons_variant";
  DROP TYPE "public"."enum_footer_options_action_buttons_color";
  DROP TYPE "public"."enum_footer_options_action_buttons_action";`)
}
