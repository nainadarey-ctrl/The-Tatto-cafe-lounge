export interface MenuItem {
  id: string;
  name: string;
  category: 'Pasta' | 'Jain' | 'Platters' | 'Lebanese' | 'Pizzeria' | 'Burgers' | 'Wraps';
  price: number;
  formattedPrice: string;
  description?: string;
  isVegetarian: boolean;
  isJain: boolean;
  isVeganOption?: boolean;
  isChefSpecial?: boolean;
  image: string;
  tag?: string;
}

export const MENU_CATEGORIES = [
  'All',
  'Pizzeria',
  'Pasta',
  'Platters',
  'Lebanese',
  'Burgers',
  'Wraps',
  'Jain'
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // --- PIZZERIA ---
  {
    id: 'piz-1',
    name: 'Tattoo Café Loaded Pizza',
    category: 'Pizzeria',
    price: 850,
    formattedPrice: '₹850',
    description: 'Loaded with veggies, cottage cheese, soft crust topped with garlic sauce.',
    isVegetarian: true,
    isJain: false,
    isChefSpecial: true,
    tag: "Chef's Signature",
    image: '/images/food/loaded-pizza.jpg'
  },
  {
    id: 'piz-2',
    name: 'Margherita Pizza',
    category: 'Pizzeria',
    price: 650,
    formattedPrice: '₹650',
    description: 'Fresh tomato sauce, melted mozzarella cheese and a touch of basil on a perfectly crispy crust.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/margherita-pizza.jpg'
  },
  {
    id: 'piz-3',
    name: 'Farm House Pizza',
    category: 'Pizzeria',
    price: 700,
    formattedPrice: '₹700',
    description: 'Freshly garden picked vegetables showered on pizza base with cheezy mozzarella, sprinkled with spicy seasoning.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/farmhouse-pizza.jpg'
  },
  {
    id: 'piz-4',
    name: 'Fungi Pizza',
    category: 'Pizzeria',
    price: 750,
    formattedPrice: '₹750',
    description: 'Loaded mushrooms and olives flavoured with oregano topped on pizza base with plenty of mozzarella cheese dressing.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/mushroom-pizza.jpg'
  },
  {
    id: 'piz-5',
    name: 'Mediterranean Pizza',
    category: 'Pizzeria',
    price: 700,
    formattedPrice: '₹700',
    description: 'Crispy pizza topped with bubbly flavourful mozzarella cheese and piled high with toppings of roasted aubergine, bell pepper, onion and olives.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/mediterranean-pizza.jpg'
  },
  {
    id: 'piz-6',
    name: 'Garlic Bread With Cheese',
    category: 'Pizzeria',
    price: 300,
    formattedPrice: '₹300',
    description: 'Crisp-baked garlic flavoured bread with mozzarella cheese toppings.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/garlic-bread-with-cheese.jpg'
  },
  {
    id: 'piz-7',
    name: 'Garlic Bread Supreme',
    category: 'Pizzeria',
    price: 400,
    formattedPrice: '₹400',
    description: 'Crisp baked garlic flavoured bread with finely chopped olive, capsicum, sweet corn and mozzarella cheese toppings.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/garlic-bread-supreme.jpg'
  },
  {
    id: 'piz-8',
    name: 'Bruschetta',
    category: 'Pizzeria',
    price: 400,
    formattedPrice: '₹400',
    description: 'Chopped fresh tomatoes with garlic, basil, olive oil and vinegar served on toasted slices of french bread with balsamic glaze.',
    isVegetarian: true,
    isJain: false,
    isVeganOption: true,
    tag: 'Vegan Option',
    image: '/images/food/bruschetta.jpg'
  },

  // --- PASTA ---
  {
    id: 'pas-1',
    name: 'Tattoo Café Loaded Pasta (Pink Sauce)',
    category: 'Pasta',
    price: 550,
    formattedPrice: '₹550',
    description: 'Freshly seasoned veggies and mushrooms, tossed in creamy pink sauce and garnished with flavourful barbecued parmesan cheese.',
    isVegetarian: true,
    isJain: false,
    isChefSpecial: true,
    tag: "Chef's Signature",
    image: '/images/food/pink-sauce-pasta.jpg'
  },
  {
    id: 'pas-2',
    name: 'Arrabiata Pasta (Red Sauce Pasta)',
    category: 'Pasta',
    price: 500,
    formattedPrice: '₹500',
    description: 'Delicious pasta infused in tangy sauce made from garlic tomatoes and dried red chili peppers cooked in olive oil along with sautéed veggies.',
    isVegetarian: true,
    isJain: false,
    tag: 'Red Sauce Special',
    image: '/images/food/penne-arrabiata.jpg'
  },
  {
    id: 'pas-3',
    name: 'Alfredo Pasta (White Sauce Pasta)',
    category: 'Pasta',
    price: 500,
    formattedPrice: '₹500',
    description: 'Pasta infused in authentic white sauce with butter sauteed veggies.',
    isVegetarian: true,
    isJain: false,
    tag: 'White Sauce Creamy',
    image: '/images/food/alfredo-pasta.jpg'
  },
  {
    id: 'pas-4',
    name: 'Spaghetti Aglio - Olio',
    category: 'Pasta',
    price: 500,
    formattedPrice: '₹500',
    description: 'Smooth spaghetti tossed in olive oil with fresh herbs sun-dried tomatoes olives and parmesan.',
    isVegetarian: true,
    isJain: false,
    isVeganOption: true,
    tag: 'Vegan Option',
    image: '/images/food/spaghetti-aglio-olio.jpg'
  },
  {
    id: 'pas-5',
    name: 'Mac & Cheese',
    category: 'Pasta',
    price: 500,
    formattedPrice: '₹500',
    description: 'Creamy sauce infused into macaroni pasta topped with cheddar cheese.',
    isVegetarian: true,
    isJain: true,
    tag: 'Jain Option',
    image: '/images/food/mac-and-cheese.jpg'
  },

  // --- PLATTERS ---
  {
    id: 'plt-1',
    name: 'Pink City Thali (In Pure Desi Ghee)',
    category: 'Platters',
    price: 850,
    formattedPrice: '₹850',
    description: '2 pieces baati, daal, kadhi, gatta masala, two missi roti, lehsun ki chutney, papad, 2 types of churma, zeera rice, onion & chilli, glass of butter milk, papad.',
    isVegetarian: true,
    isJain: false,
    isChefSpecial: true,
    tag: 'Authentic Rajasthani',
    image: '/images/food/rajasthani-thali.jpg'
  },
  {
    id: 'plt-2',
    name: 'Tattoo Café Thali',
    category: 'Platters',
    price: 750,
    formattedPrice: '₹750',
    description: 'Dal makhni, paneer butter masala, mix. Veg, raita, jeera rice, two tandoori roti, one butter naan, salad, pickle, papad, gulab jamun, garlic chutney, jal jeera.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/punjabi-thali.jpg'
  },
  {
    id: 'plt-3',
    name: 'Paneer Steak Platter',
    category: 'Platters',
    price: 700,
    formattedPrice: '₹700',
    description: 'Peri peri paneer steak, herbed riced, sauteed veggies, mushroom sauce.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/paneer-tikka.jpg'
  },
  {
    id: 'plt-4',
    name: 'Tattoo Café Tandoori Platter',
    category: 'Platters',
    price: 700,
    formattedPrice: '₹700',
    description: 'Assortment of chef special spiced tandoori delicacies served with fresh mint chutney and onion relish.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/paneer-tikka.jpg'
  },
  {
    id: 'plt-5',
    name: 'Alloo Parantha',
    category: 'Platters',
    price: 300,
    formattedPrice: '₹300',
    description: 'Mildly spiced mashed potatoes stuffed in whole wheat bread. Served with curd, pickle, green chutney & salad.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/aloo-paratha.jpg'
  },
  {
    id: 'plt-6',
    name: 'Paneer Parantha',
    category: 'Platters',
    price: 350,
    formattedPrice: '₹350',
    description: 'Parantha with Indian cottage cheese stuffing. Served with curd, pickle, green chutney & salad.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/paneer-paratha.jpg'
  },

  // --- LEBANESE ---
  {
    id: 'leb-1',
    name: 'Mezze Platter',
    category: 'Lebanese',
    price: 750,
    formattedPrice: '₹750',
    description: 'Toasted pita bread, veg. Seekh kebab, french fry, finger veggies, falafel balls with hummus & tzatziki and garlic sauce.',
    isVegetarian: true,
    isJain: false,
    isChefSpecial: true,
    tag: 'Signature Mezze',
    image: '/images/food/mezze-platter.jpg'
  },
  {
    id: 'leb-2',
    name: 'Falafel Platter',
    category: 'Lebanese',
    price: 400,
    formattedPrice: '₹400',
    description: '4 pieces of falafel, pita bread, hummus, garlic sauce, salad.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/falafel-platter.jpg'
  },
  {
    id: 'leb-3',
    name: 'Pita Pockets (2 Pieces)',
    category: 'Lebanese',
    price: 450,
    formattedPrice: '₹450',
    description: 'Pita halwe are stuffed with falafel balls, crunchy lettuce, sauce, pickles, hummus & garlic sauce.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/pita-pockets.jpg'
  },
  {
    id: 'leb-4',
    name: 'Baba Ghanoush Platter',
    category: 'Lebanese',
    price: 550,
    formattedPrice: '₹550',
    description: 'Baba ghanoush served with pita bread, salad, pickles.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/baba-ghanoush.jpg'
  },
  {
    id: 'leb-5',
    name: 'Lebanese Wrap',
    category: 'Lebanese',
    price: 400,
    formattedPrice: '₹400',
    description: 'Falafel wrap with veggies & hummus & tahini sauce.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/falafel-wrap.jpg'
  },
  {
    id: 'leb-6',
    name: 'Pita Bread Portion',
    category: 'Lebanese',
    price: 150,
    formattedPrice: '₹150',
    description: 'Warm, soft freshly-baked pita bread serving.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/pita-bread.jpg'
  },

  // --- BURGERS ---
  {
    id: 'brg-1',
    name: 'Tattoo Café Special Burger',
    category: 'Burgers',
    price: 400,
    formattedPrice: '₹400',
    description: 'Pattie made of chickpeas, topped with pickled onions café special sauces with potato wedges.',
    isVegetarian: true,
    isJain: false,
    isChefSpecial: true,
    tag: 'House Special',
    image: '/images/food/burger-special.jpg'
  },
  {
    id: 'brg-2',
    name: 'Creamy Cheesy Burger',
    category: 'Burgers',
    price: 350,
    formattedPrice: '₹350',
    description: 'Mashed potato pattie burger with caramalize, crunchy lettuce, fresh onion and tomatoes seasoned with herbs, mild sauce, mayonnaise and lots of cheese, served with fries.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/burger-cheese.jpg'
  },
  {
    id: 'brg-3',
    name: 'Veggie BBQ Burger',
    category: 'Burgers',
    price: 350,
    formattedPrice: '₹350',
    description: 'Delicious burger with seasoned mashed potato pattie flavoured with BBQ sauce and chipotle sauce, slices of fresh veggies and cheese, served with fries.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/burger-bbq.jpg'
  },
  {
    id: 'brg-4',
    name: 'Hawa Mahal Burger',
    category: 'Burgers',
    price: 400,
    formattedPrice: '₹400',
    description: "Two's double potato patties burger with cheese slices, flavoured with sauce of your choice and served with two cottage cheese sandwich and fries.",
    isVegetarian: true,
    isJain: false,
    tag: 'Jaipur Special',
    image: '/images/food/burger-special.jpg'
  },

  // --- WRAPS ---
  {
    id: 'wrp-1',
    name: 'Tattoo Café Special Wrap',
    category: 'Wraps',
    price: 450,
    formattedPrice: '₹450',
    description: "Crunchy veggies, smoked tofu, paneer and chef's special sauce.",
    isVegetarian: true,
    isJain: false,
    isChefSpecial: true,
    tag: "Chef's Special",
    image: '/images/food/paneer-tikka-wrap.jpg'
  },
  {
    id: 'wrp-2',
    name: 'Paneer Tikka Wrap',
    category: 'Wraps',
    price: 400,
    formattedPrice: '₹400',
    description: 'Filled with spiced paneer tikka, veggies and coriander chutney.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/paneer-tikka-wrap.jpg'
  },
  {
    id: 'wrp-3',
    name: 'Tandoori Soya Chaap Wrap',
    category: 'Wraps',
    price: 400,
    formattedPrice: '₹400',
    description: 'Filled with tandoori soya chap, veggies and coriander sauce.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/paneer-tikka-wrap.jpg'
  },
  {
    id: 'wrp-4',
    name: 'Caesar Wrap',
    category: 'Wraps',
    price: 400,
    formattedPrice: '₹400',
    description: 'Filled with crisp caesar salad and herbs.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/caesar-wrap.jpg'
  },
  {
    id: 'wrp-5',
    name: 'Lebanese Wrap',
    category: 'Wraps',
    price: 400,
    formattedPrice: '₹400',
    description: 'Falafel wrap with veggies & hummus, tahini sauce & garlic sauce.',
    isVegetarian: true,
    isJain: false,
    image: '/images/food/falafel-wrap.jpg'
  },

  // --- JAIN SPECIALITIES ---
  {
    id: 'jn-1',
    name: 'Jain Thali',
    category: 'Jain',
    price: 750,
    formattedPrice: '₹750',
    description: 'Paneer lababdar, daal makhni, mix veg, boondi raita, roti, jeera rice, salad 2 pcs chhena, papad, serve in authentic jain style.',
    isVegetarian: true,
    isJain: true,
    isChefSpecial: true,
    tag: 'Authentic Jain',
    image: '/images/food/jain-thali.jpg'
  },
  {
    id: 'jn-2',
    name: 'Chilli Paneer Dry/Gravy (Jain)',
    category: 'Jain',
    price: 500,
    formattedPrice: '₹500',
    description: 'Fresh cottage cheese cubes tossed in spicy Jain-compliant sauce with crisp bell peppers.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/chilli-paneer.jpg'
  },
  {
    id: 'jn-3',
    name: 'Margherita Pizza (Jain)',
    category: 'Jain',
    price: 650,
    formattedPrice: '₹650',
    description: 'Crispy base topped with fresh Jain tomato sauce, herbs and melted mozzarella cheese.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/margherita-pizza.jpg'
  },
  {
    id: 'jn-4',
    name: 'Farm House Pizza (Jain)',
    category: 'Jain',
    price: 700,
    formattedPrice: '₹700',
    description: 'Jain-friendly vegetables showered on crispy crust with golden mozzarella.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/farmhouse-pizza.jpg'
  },
  {
    id: 'jn-5',
    name: 'Paneer Tikka (Jain)',
    category: 'Jain',
    price: 450,
    formattedPrice: '₹450',
    description: 'Tender cottage cheese cubes marinated in aromatic spices roasted to perfection.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/paneer-tikka.jpg'
  },
  {
    id: 'jn-6',
    name: 'Soya Chaap (Jain)',
    category: 'Jain',
    price: 450,
    formattedPrice: '₹450',
    description: 'Succulent soya chaap skewers seasoned with delicate spices.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/paneer-tikka.jpg'
  },
  {
    id: 'jn-7',
    name: 'Noodles (Jain)',
    category: 'Jain',
    price: 400,
    formattedPrice: '₹400',
    description: 'Wok-tossed noodles with crunchy bell peppers and Jain seasoning.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/hakka-noodles.jpg'
  },
  {
    id: 'jn-8',
    name: 'Chinese Fried Rice (Jain)',
    category: 'Jain',
    price: 350,
    formattedPrice: '₹350',
    description: 'Fragrant basmati rice stir-fried with permitted garden vegetables.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/fried-rice.jpg'
  },
  {
    id: 'jn-9',
    name: 'Jain Burger With Paneer Pattie',
    category: 'Jain',
    price: 350,
    formattedPrice: '₹350',
    description: 'Special soft burger bun stuffed with golden spiced paneer patty and mild herbs.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/burger-special.jpg'
  },
  {
    id: 'jn-10',
    name: 'Vegetable Cheese Sandwich (Jain)',
    category: 'Jain',
    price: 295,
    formattedPrice: '₹295',
    description: 'Toasted sandwich loaded with melted cheese and crisp bell peppers.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/cheese-sandwich.jpg'
  },
  {
    id: 'jn-11',
    name: 'Cheese Sandwich (Jain)',
    category: 'Jain',
    price: 250,
    formattedPrice: '₹250',
    description: 'Simple, comforting grilled sandwich with gooey melted cheese.',
    isVegetarian: true,
    isJain: true,
    image: '/images/food/cheese-sandwich.jpg'
  }
];

export const AUTHENTIC_MENU_CARDS = [
  {
    title: 'Pasta & Jain Specialities',
    subtitle: 'Original Menu Card • Page 1',
    image: '/images/uploaded/menu-pasta-jain.jpg',
    category: 'Pasta & Jain'
  },
  {
    title: 'Platters & Lebanese Fare',
    subtitle: 'Original Menu Card • Page 2',
    image: '/images/uploaded/menu-platter-lebanese.jpg',
    category: 'Platters & Lebanese'
  },
  {
    title: 'Artisanal Pizzeria',
    subtitle: 'Original Menu Card • Page 3',
    image: '/images/uploaded/menu-pizzeria.jpg',
    category: 'Pizzeria'
  },
  {
    title: 'Gourmet Burgers & Wraps',
    subtitle: 'Original Menu Card • Page 4',
    image: '/images/uploaded/menu-burgers-wraps.jpg',
    category: 'Burgers & Wraps'
  }
];
