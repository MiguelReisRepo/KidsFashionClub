import type { Audience, Product } from './types';

const KIDS_SIZES = ['4-5', '6-7', '8-9', '10-11', '12-13'];
const KIDS_BIG_ONLY = ['8-9', '10-11', '12-13'];

export const products: Product[] = [
  // ─── KIDS · IN-STOCK (pré-personalizados — sem opção de customizar) ──
  {
    id: '106',
    slug: 'barcelona-yamal-kids-2024-25',
    name: { pt: 'FC Barcelona Lamine Yamal #10 Kids 2025/26', en: 'FC Barcelona Lamine Yamal #10 Kids 2025/26' },
    team: 'FC Barcelona',
    season: '2025/26',
    kitType: 'home',
    version: 'adepto',
    audience: 'kids',
    price: 18.00,
    sizes: KIDS_BIG_ONLY,
    availability: 'in_stock',
    shippingDays: 2,
    images: ['/products/BarcelonaKidsFront.jpg', '/products/BarcelonaKidsBack.jpg'],
    description: {
      pt: 'Conjunto kids FC Barcelona principal 2025/26 — t-shirt + calções, já personalizado com LAMINE YAMAL #10.',
      en: 'FC Barcelona 2025/26 home kids kit — t-shirt + shorts, pre-printed with LAMINE YAMAL #10.',
    },
    isNew: true,
    isFeatured: true,
  },
  {
    id: '107',
    slug: 'portugal-ronaldo-principal-kids-2024-25',
    name: { pt: 'Portugal Ronaldo #7 Principal Kids 2025/26', en: 'Portugal Ronaldo #7 Home Kids 2025/26' },
    team: 'Seleção Nacional',
    season: '2025/26',
    kitType: 'home',
    version: 'adepto',
    audience: 'kids',
    price: 18.00,
    sizes: KIDS_BIG_ONLY,
    availability: 'in_stock',
    shippingDays: 2,
    images: ['/products/PortugalRedKidsFront.jpg', '/products/PortugalRedKidsBack.jpg'],
    description: {
      pt: 'Conjunto kids Portugal principal 2025/26 — t-shirt + calções, já personalizado com RONALDO #7.',
      en: 'Portugal 2025/26 home kids kit — t-shirt + shorts, pre-printed with RONALDO #7.',
    },
    isNew: true,
    isFeatured: true,
  },
  {
    id: '108',
    slug: 'portugal-ronaldo-alternativa-kids-2024-25',
    name: { pt: 'Portugal Ronaldo #7 Alternativa Kids 2025/26', en: 'Portugal Ronaldo #7 Away Kids 2025/26' },
    team: 'Seleção Nacional',
    season: '2025/26',
    kitType: 'away',
    version: 'adepto',
    audience: 'kids',
    price: 18.00,
    sizes: KIDS_BIG_ONLY,
    availability: 'in_stock',
    shippingDays: 2,
    images: ['/products/PortugalWhiteKidsFront.jpg', '/products/PortugalWhiteKidsBack.jpg'],
    description: {
      pt: 'Conjunto kids Portugal alternativa 2025/26 — t-shirt + calções, já personalizado com RONALDO #7.',
      en: 'Portugal 2025/26 away kids kit — t-shirt + shorts, pre-printed with RONALDO #7.',
    },
    isNew: true,
  },

  // ─── KIDS · PRE-ORDER (com personalização customizável a +3€) ────────
  {
    id: '109',
    slug: 'sporting-kids-2024-25-encomenda',
    name: { pt: 'Sporting CP Principal Kids 2025/26', en: 'Sporting CP Home Kids 2025/26' },
    team: 'Sporting CP',
    season: '2025/26',
    kitType: 'home',
    version: 'adepto',
    audience: 'kids',
    price: 15.00,
    sizes: KIDS_SIZES,
    availability: 'pre_order',
    shippingDays: 18,
    images: ['/products/SportingKidsFront.jpg', '/products/SportingKidsBack.jpg'],
    description: {
      pt: 'Conjunto kids Sporting CP 2025/26 — t-shirt + calções, por encomenda. Versão adepto.',
      en: 'Sporting CP 2025/26 kids kit — t-shirt + shorts, pre-order. Fan version.',
    },
    personalization: { price: 3 },
    isNew: true,
  },
  {
    id: '110',
    slug: 'porto-kids-2024-25-encomenda',
    name: { pt: 'FC Porto Principal Kids 2025/26', en: 'FC Porto Home Kids 2025/26' },
    team: 'FC Porto',
    season: '2025/26',
    kitType: 'home',
    version: 'adepto',
    audience: 'kids',
    price: 15.00,
    sizes: KIDS_SIZES,
    availability: 'pre_order',
    shippingDays: 18,
    images: ['/products/PortoKidsFront.jpg', '/products/PortoKidsBack.jpg'],
    description: {
      pt: 'Conjunto kids FC Porto 2025/26 — t-shirt + calções, por encomenda. Versão adepto.',
      en: 'FC Porto 2025/26 kids kit — t-shirt + shorts, pre-order. Fan version.',
    },
    personalization: { price: 3 },
    isNew: true,
  },
  {
    id: '111',
    slug: 'benfica-kids-2024-25-encomenda',
    name: { pt: 'SL Benfica Principal Kids 2025/26', en: 'SL Benfica Home Kids 2025/26' },
    team: 'SL Benfica',
    season: '2025/26',
    kitType: 'home',
    version: 'adepto',
    audience: 'kids',
    price: 15.00,
    sizes: KIDS_SIZES,
    availability: 'pre_order',
    shippingDays: 18,
    images: ['/products/BenficaKidsFront.jpg', '/products/BenficaKidsBack.jpg'],
    description: {
      pt: 'Conjunto kids SL Benfica 2025/26 — t-shirt + calções, por encomenda. Versão adepto.',
      en: 'SL Benfica 2025/26 kids kit — t-shirt + shorts, pre-order. Fan version.',
    },
    personalization: { price: 3 },
    isNew: true,
  },
  {
    id: '112',
    slug: 'brasil-principal-kids-encomenda',
    name: { pt: 'Brasil Principal Kids 2025/26', en: 'Brazil Home Kids 2025/26' },
    team: 'Brasil',
    season: '2025/26',
    kitType: 'home',
    version: 'adepto',
    audience: 'kids',
    price: 15.00,
    sizes: KIDS_SIZES,
    availability: 'pre_order',
    shippingDays: 18,
    images: ['/products/BrasilKidsFront.jpg', '/products/BrasilKidsBack.jpg'],
    description: {
      pt: 'Conjunto kids Brasil principal 2025/26 — t-shirt amarela + calções azuis, por encomenda. Versão adepto.',
      en: 'Brazil home kids kit 2025/26 — yellow t-shirt + blue shorts, pre-order. Fan version.',
    },
    personalization: { price: 3 },
    isNew: true,
  },
  {
    id: '113',
    slug: 'brasil-alternativa-kids-encomenda',
    name: { pt: 'Brasil Alternativa Kids 2025/26', en: 'Brazil Away Kids 2025/26' },
    team: 'Brasil',
    season: '2025/26',
    kitType: 'away',
    version: 'adepto',
    audience: 'kids',
    price: 15.00,
    sizes: KIDS_SIZES,
    availability: 'pre_order',
    shippingDays: 18,
    images: ['/products/BrasilKidsAlternativeFront.jpg', '/products/BrasilKidsAlternativeBack.jpg'],
    description: {
      pt: 'Conjunto kids Brasil alternativa 2025/26 — t-shirt + calções azuis-escuros, por encomenda. Versão adepto.',
      en: 'Brazil away kids kit 2025/26 — dark blue t-shirt + shorts, pre-order. Fan version.',
    },
    personalization: { price: 3 },
    isNew: true,
  },
];

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function inStockProducts(audience?: Audience): Product[] {
  return products.filter((p) => p.availability === 'in_stock' && (!audience || p.audience === audience));
}

export function preOrderProducts(audience?: Audience): Product[] {
  return products.filter((p) => p.availability === 'pre_order' && (!audience || p.audience === audience));
}

export function newProducts(audience?: Audience): Product[] {
  return products.filter((p) => p.isNew && (!audience || p.audience === audience));
}

export function featuredProducts(audience?: Audience): Product[] {
  return products.filter((p) => p.isFeatured && (!audience || p.audience === audience));
}
