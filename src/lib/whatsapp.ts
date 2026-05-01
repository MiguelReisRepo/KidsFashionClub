import type { Lang } from './i18n';
import type { Product } from '@/data/types';

const PHONE = import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '351924455685';

type MessageContext = {
  product: Product;
  lang: Lang;
  size?: string;
};

const buyTemplates: Record<Lang, (ctx: MessageContext) => string> = {
  pt: ({ product, size }) =>
    `Olá! Tenho interesse na *${product.name.pt}* (${product.season}, tamanho ${size ?? 'a confirmar'}) — ${product.price.toFixed(2)}€. Está disponível?`,
  en: ({ product, size }) =>
    `Hi! I'd like the *${product.name.en}* (${product.season}, size ${size ?? 'TBD'}) — €${product.price.toFixed(2)}. Is it available?`,
};

const askTemplates: Record<Lang, (ctx: MessageContext) => string> = {
  pt: ({ product }) =>
    `Olá! Queria saber a disponibilidade e prazo da *${product.name.pt}* (${product.season}). Obrigado!`,
  en: ({ product }) =>
    `Hi! I'd like to check availability and lead time on *${product.name.en}* (${product.season}). Thanks!`,
};

const customOrderTemplates: Record<Lang, () => string> = {
  pt: () => `Olá! Quero encomendar uma camisola específica:\n• Equipa:\n• Época:\n• Tamanho:\n• Versão (adepto/player):\nObrigado!`,
  en: () => `Hi! I'd like to order a specific jersey:\n• Team:\n• Season:\n• Size:\n• Version (fan/player):\nThanks!`,
};

function build(text: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

export function buyLink(product: Product, lang: Lang, size?: string): string {
  return build(buyTemplates[lang]({ product, lang, size }));
}

export function askLink(product: Product, lang: Lang): string {
  return build(askTemplates[lang]({ product, lang }));
}

export function customOrderLink(lang: Lang): string {
  return build(customOrderTemplates[lang]());
}

export function plainLink(lang: Lang): string {
  const greet = lang === 'pt' ? 'Olá! Quero saber mais sobre a Kids Fashion Club.' : 'Hi! I’d like to know more about Kids Fashion Club.';
  return build(greet);
}
