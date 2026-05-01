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
  /** When present the product can be personalized with name + number for an extra fee. */
  personalization?: { price: number };
  isNew?: boolean;
  isFeatured?: boolean;
  /** Marks a product as a clearance / promotional sale (renders a "Promoção" badge). */
  isClearance?: boolean;
};
