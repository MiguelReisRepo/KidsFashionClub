export type Lang = 'pt' | 'en';
export const LANGS: Lang[] = ['pt', 'en'];
export const DEFAULT_LANG: Lang = 'pt';

export function isLang(value: string | undefined): value is Lang {
  return value === 'pt' || value === 'en';
}

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return isLang(seg) ? seg : DEFAULT_LANG;
}

const dict = {
  // nav
  'nav.home':           { pt: 'Início',                  en: 'Home' },
  'nav.stock':          { pt: 'Em Stock',                en: 'In Stock' },
  'nav.order':          { pt: 'Por Encomenda',           en: 'Pre-Order' },
  'nav.about':          { pt: 'Sobre Nós',               en: 'About' },
  'nav.faq':            { pt: 'FAQ',                     en: 'FAQ' },
  'nav.shipping':       { pt: 'Envios e Devoluções',     en: 'Shipping & Returns' },
  'nav.how':            { pt: 'Como Funciona',           en: 'How It Works' },

  // home
  'home.hero.kicker':   { pt: 'Camisolas de futebol',     en: 'Football jerseys' },
  'home.hero.title':    { pt: 'Veste as cores. Joga em casa.', en: 'Wear the colours. Play at home.' },
  'home.hero.subtitle': { pt: 'Stock real, envio rápido, e o que não tens, encomendamos por ti.', en: 'Real stock, fast shipping, and we source whatever isn’t in store.' },
  'home.hero.cta':      { pt: 'Ver em stock',             en: 'Browse stock' },
  'home.hero.cta2':     { pt: 'Encomendar específica',    en: 'Custom order' },

  'home.stock.title':   { pt: 'Em Stock',                 en: 'In Stock' },
  'home.stock.sub':     { pt: 'Envio em 24-48h',          en: 'Ships in 24-48h' },
  'home.new.title':     { pt: 'Novidades da Semana',      en: "This Week's Drops" },
  'home.all.title':     { pt: 'Catálogo Completo',         en: 'Full Catalog' },
  'home.all.sub':       { pt: 'Todas as camisolas e conjuntos disponíveis', en: 'Every jersey and kit we have' },
  'home.order.title':   { pt: 'Encomendar Camisola Específica', en: 'Order a Specific Jersey' },
  'home.order.body':    { pt: 'Não vês a tua camisola? Diz-nos qual é via WhatsApp e tratamos da disponibilidade.', en: 'Can’t find your jersey? Tell us via WhatsApp and we’ll source it.' },
  'home.how.title':     { pt: 'Como Funciona',            en: 'How It Works' },
  'home.how.s1':        { pt: 'Escolhe a camisola',       en: 'Pick the jersey' },
  'home.how.s2':        { pt: 'Fala connosco no WhatsApp', en: 'Message us on WhatsApp' },
  'home.how.s3':        { pt: 'Confirmamos disponibilidade', en: 'We confirm availability' },
  'home.how.s4':        { pt: 'Pagas (MB WAY ou transferência)', en: 'You pay (MB WAY or bank transfer)' },
  'home.how.s5':        { pt: 'Enviamos para casa',       en: 'We ship to your door' },

  // product / catalog
  'cat.stock.title':    { pt: 'Camisolas em Stock',       en: 'In-Stock Jerseys' },
  'cat.order.title':    { pt: 'Camisolas por Encomenda',  en: 'Pre-Order Jerseys' },
  'product.size':       { pt: 'Tamanho',                  en: 'Size' },
  'product.sizes':      { pt: 'Tamanhos disponíveis',     en: 'Available sizes' },
  'product.shipping':   { pt: 'Envio',                    en: 'Shipping' },
  'product.shipping.days': { pt: 'dias úteis',            en: 'business days' },
  'product.in_stock':   { pt: 'Em stock',                 en: 'In stock' },
  'product.pre_order':  { pt: 'Por encomenda',            en: 'Pre-order' },
  'product.sold_out':   { pt: 'Esgotado',                 en: 'Sold out' },
  'product.buy':        { pt: 'Comprar via WhatsApp',     en: 'Buy via WhatsApp' },
  'product.ask':        { pt: 'Pedir disponibilidade',    en: 'Ask availability' },
  'product.new':        { pt: 'Novidade',                 en: 'New' },
  'product.season':     { pt: 'Época',                    en: 'Season' },

  // audience
  'audience.all':       { pt: 'Todos',                    en: 'All' },
  'audience.adult':     { pt: 'Adultos',                  en: 'Adults' },
  'audience.kids':      { pt: 'Kids',                     en: 'Kids' },
  'product.kids':       { pt: 'Kids',                     en: 'Kids' },

  // form
  'product.size.pick':  { pt: 'Seleciona um tamanho',     en: 'Pick a size' },
  'product.personalize': { pt: 'Personalizar com nome e número', en: 'Add name & number' },
  'product.personalize.name':   { pt: 'Nome',             en: 'Name' },
  'product.personalize.number': { pt: 'Número',           en: 'Number' },
  'product.personalize.hint':   { pt: 'Ex.: SILVA 10',    en: 'e.g. SILVA 10' },
  'product.total':      { pt: 'Total',                    en: 'Total' },

  // generic
  'cta.viewAll':        { pt: 'Ver todos',                en: 'View all' },
  'footer.tagline':     { pt: 'Camisolas para verdadeiros adeptos.', en: 'Jerseys for real fans.' },
  'footer.rights':      { pt: 'Todos os direitos reservados', en: 'All rights reserved' },
} as const;

type Key = keyof typeof dict;

export function t(key: Key, lang: Lang): string {
  return dict[key][lang];
}

export const ROUTES = {
  pt: { stock: '/pt/stock', order: '/pt/order', jersey: '/pt/jersey', about: '/pt/about', faq: '/pt/faq', shipping: '/pt/shipping', how: '/pt/how-it-works' },
  en: { stock: '/en/stock', order: '/en/order', jersey: '/en/jersey', about: '/en/about', faq: '/en/faq', shipping: '/en/shipping', how: '/en/how-it-works' },
} as const;

export function localizedPath(path: string, lang: Lang): string {
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}
