export type Availability = 'in_stock' | 'pre_order' | 'sold_out';
export type KitType = 'home' | 'away' | 'third' | 'goalkeeper' | 'special';
export type Version = 'adepto' | 'player' | 'retro';
export type Audience = 'adult' | 'kids';

export type Product = {
  id: string;
  slug: string;
  name: { pt: string; en: string };
  team: string;
  season: string;
  kitType: KitType;
  version: Version;
  audience: Audience;
  price: number;
  sizes: string[];
  availability: Availability;
  shippingDays: number;
  images: string[];
  description: { pt: string; en: string };
  isNew?: boolean;
  isFeatured?: boolean;
};
