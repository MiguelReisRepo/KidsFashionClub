import type { Lang } from './i18n';
import type { Product } from '@/data/types';

const SITE = import.meta.env.PUBLIC_SITE_URL ?? 'https://kidsfashionclub.com';

export type SeoMeta = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
};

export function buildPageSeo({
  lang,
  path,
  title,
  description,
  ogImage,
}: {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  ogImage?: string;
}): SeoMeta {
  const canonical = `${SITE}${path}`;
  return {
    title: `${title} · Kids Fashion Club`,
    description,
    canonical,
    ogImage,
  };
}

export function productJsonLd(product: Product, lang: Lang, path: string) {
  const url = `${SITE}${path}`;
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name[lang],
    image: product.images,
    description: product.description[lang],
    sku: product.id,
    brand: { '@type': 'Brand', name: product.team },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'EUR',
      price: product.price.toFixed(2),
      availability:
        product.availability === 'in_stock'
          ? 'https://schema.org/InStock'
          : product.availability === 'pre_order'
          ? 'https://schema.org/PreOrder'
          : 'https://schema.org/OutOfStock',
    },
  };
}
