export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ambience' | 'Views' | 'Cuisine' | 'Moments';
  image: string;
  caption: string;
  aspect: 'tall' | 'wide' | 'square';
  isRealPhoto?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Iconic Night Entrance & Fairy Lights',
    category: 'Ambience',
    image: '/images/uploaded/hero-night.jpg',
    caption: 'Our illuminated 3rd-floor stairway and fine dine lounge glowing against the Jaipur night sky.',
    aspect: 'tall',
    isRealPhoto: true
  },
  {
    id: 'gal-2',
    title: 'Rooftop Terrace Overlooking Hawa Mahal',
    category: 'Views',
    image: '/images/uploaded/rooftop-hawa-mahal.jpg',
    caption: 'Unparalleled panoramic views of the Palace of Winds right opposite our open-air terrace.',
    aspect: 'wide',
    isRealPhoto: true
  },
  {
    id: 'gal-3',
    title: 'Authentic Pink City Pure Ghee Thali',
    category: 'Cuisine',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Traditional Rajasthani flavours with baati, churma, dal, kadhi and gatta masala.',
    aspect: 'wide'
  },
  {
    id: 'gal-4',
    title: 'Artisanal Wood-Fired Pizza',
    category: 'Cuisine',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    caption: 'Crisp crust, golden mozzarella and farm-fresh toppings baked to perfection.',
    aspect: 'square'
  },
  {
    id: 'gal-5',
    title: 'Intimate Lounge & Candlelit Evenings',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Cozy artistic seating designed for heartfelt conversations and memorable evenings.',
    aspect: 'tall'
  },
  {
    id: 'gal-6',
    title: 'Golden Hour at the Terrace',
    category: 'Views',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    caption: 'The golden warmth of Rajasthan cascading over Jaipur’s historic monuments.',
    aspect: 'wide'
  },
  {
    id: 'gal-7',
    title: 'Celebrations & Birthday Moments',
    category: 'Moments',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Creating cherished memories with friends and family high above the Pink City.',
    aspect: 'tall'
  },
  {
    id: 'gal-8',
    title: 'Signature Mezze & Falafel Delights',
    category: 'Cuisine',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    caption: 'Fresh pita, creamy hummus, crisp falafel and house tzatziki crafted with care.',
    aspect: 'square'
  },
  {
    id: 'gal-9',
    title: 'Gourmet Burgers with Crispy Wedges',
    category: 'Cuisine',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Our signature loaded burgers crafted with freshly baked buns and secret sauces.',
    aspect: 'wide'
  }
];
