import type { APIRoute } from 'astro';

const SITE = import.meta.env.PUBLIC_SITE_URL ?? 'https://kidsfashionclub.com';

const body = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap-index.xml
`;

export const GET: APIRoute = () => new Response(body, {
  headers: { 'Content-Type': 'text/plain' },
});
