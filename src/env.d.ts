/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_WHATSAPP_NUMBER: string;
  readonly PUBLIC_INSTAGRAM_URL: string;
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_GA_ID?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
  readonly PUBLIC_GOOGLE_REVIEWS_URL?: string;
  readonly PUBLIC_GOOGLE_PROFILE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
