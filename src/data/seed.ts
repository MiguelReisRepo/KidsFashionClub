import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'fc-porto-principal-2024-25',
    name: { pt: 'FC Porto Principal 2024/25', en: 'FC Porto Home 2024/25' },
    team: 'FC Porto',
    season: '2024/25',
    kitType: 'home',
    version: 'adepto',
    price: 39.99,
    sizes: ['S', 'M', 'L', 'XL'],
    availability: 'in_stock',
    shippingDays: 2,
    images: ['/products/placeholder.svg'],
    description: {
      pt: 'Versão adepto da camisola principal do FC Porto. Réplica não oficial, materiais respiráveis.',
      en: 'Fan version of FC Porto’s home jersey. Unofficial replica, breathable fabric.',
    },
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'sl-benfica-principal-2024-25',
    name: { pt: 'SL Benfica Principal 2024/25', en: 'SL Benfica Home 2024/25' },
    team: 'SL Benfica',
    season: '2024/25',
    kitType: 'home',
    version: 'adepto',
    price: 39.99,
    sizes: ['M', 'L', 'XL'],
    availability: 'in_stock',
    shippingDays: 2,
    images: ['/products/placeholder.svg'],
    description: {
      pt: 'Camisola principal do Benfica, versão adepto. Réplica não oficial.',
      en: 'Benfica home jersey, fan version. Unofficial replica.',
    },
    isFeatured: true,
  },
  {
    id: '3',
    slug: 'sporting-cp-principal-2024-25',
    name: { pt: 'Sporting CP Principal 2024/25', en: 'Sporting CP Home 2024/25' },
    team: 'Sporting CP',
    season: '2024/25',
    kitType: 'home',
    version: 'adepto',
    price: 39.99,
    sizes: ['S', 'M', 'L'],
    availability: 'in_stock',
    shippingDays: 2,
    images: ['/products/placeholder.svg'],
    description: {
      pt: 'Sporting CP — equipamento principal, versão adepto. Réplica não oficial.',
      en: 'Sporting CP home kit, fan version. Unofficial replica.',
    },
    isNew: true,
  },
  {
    id: '4',
    slug: 'portugal-principal-euro-2024',
    name: { pt: 'Portugal Principal Euro 2024', en: 'Portugal Home Euro 2024' },
    team: 'Seleção Nacional',
    season: '2024',
    kitType: 'home',
    version: 'adepto',
    price: 44.99,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    availability: 'in_stock',
    shippingDays: 2,
    images: ['/products/placeholder.svg'],
    description: {
      pt: 'Camisola principal da Seleção, Euro 2024. Versão adepto, réplica não oficial.',
      en: 'Portugal home jersey, Euro 2024. Fan version, unofficial replica.',
    },
    isFeatured: true,
  },
  {
    id: '5',
    slug: 'real-madrid-principal-2024-25',
    name: { pt: 'Real Madrid Principal 2024/25', en: 'Real Madrid Home 2024/25' },
    team: 'Real Madrid',
    season: '2024/25',
    kitType: 'home',
    version: 'adepto',
    price: 42.99,
    sizes: ['M', 'L', 'XL'],
    availability: 'pre_order',
    shippingDays: 18,
    images: ['/products/placeholder.svg'],
    description: {
      pt: 'Real Madrid — equipamento principal 2024/25, por encomenda. Prazo aprox. 18 dias úteis.',
      en: 'Real Madrid home kit 2024/25, pre-order. Lead time ~18 business days.',
    },
  },
  {
    id: '6',
    slug: 'barcelona-principal-2024-25',
    name: { pt: 'FC Barcelona Principal 2024/25', en: 'FC Barcelona Home 2024/25' },
    team: 'FC Barcelona',
    season: '2024/25',
    kitType: 'home',
    version: 'adepto',
    price: 42.99,
    sizes: ['S', 'M', 'L', 'XL'],
    availability: 'pre_order',
    shippingDays: 18,
    images: ['/products/placeholder.svg'],
    description: {
      pt: 'FC Barcelona principal 2024/25, por encomenda. Versão adepto.',
      en: 'FC Barcelona home 2024/25, pre-order. Fan version.',
    },
  },
  {
    id: '7',
    slug: 'sc-braga-principal-2024-25',
    name: { pt: 'SC Braga Principal 2024/25', en: 'SC Braga Home 2024/25' },
    team: 'SC Braga',
    season: '2024/25',
    kitType: 'home',
    version: 'adepto',
    price: 37.99,
    sizes: ['M', 'L'],
    availability: 'in_stock',
    shippingDays: 2,
    images: ['/products/placeholder.svg'],
    description: {
      pt: 'SC Braga, equipamento principal. Versão adepto, réplica não oficial.',
      en: 'SC Braga home kit, fan version. Unofficial replica.',
    },
    isNew: true,
  },
  {
    id: '8',
    slug: 'argentina-principal-2024',
    name: { pt: 'Argentina Principal 2024', en: 'Argentina Home 2024' },
    team: 'Argentina',
    season: '2024',
    kitType: 'home',
    version: 'adepto',
    price: 44.99,
    sizes: ['S', 'M', 'L', 'XL'],
    availability: 'pre_order',
    shippingDays: 21,
    images: ['/products/placeholder.svg'],
    description: {
      pt: 'Argentina — equipamento principal 2024, por encomenda. Réplica não oficial.',
      en: 'Argentina home kit 2024, pre-order. Unofficial replica.',
    },
  },
];

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function inStockProducts(): Product[] {
  return products.filter((p) => p.availability === 'in_stock');
}

export function preOrderProducts(): Product[] {
  return products.filter((p) => p.availability === 'pre_order');
}

export function newProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function featuredProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}
