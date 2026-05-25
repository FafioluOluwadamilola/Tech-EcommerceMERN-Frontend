const products = [
    {
        id: 1,
        name: "Samsung Galaxy Z Fold 5",
        image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=1000&auto=format&fit=crop",
        description: "Experience the ultimate productivity tool with a massive folding screen and powerful multitasking capabilities.",
        price: 1799.99,
        category: "Phones",
        ratings: 4.8,
        reviews: Math.floor(Math.random() * 100)
    },

    {
        id: 2,
        name: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
        description: "Apple’s most advanced iPhone with titanium build, A17 Pro chip, and incredible cameras.",
        price: 1499.99,
        category: "Phones",
        ratings: 4.9,
        reviews: Math.floor(Math.random() * 100)
    },

    {
        id: 3,
        name: "MacBook Pro M3",
        image: "https://images.unsplash.com/photo-1717865499857-ec35ce6e65fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
        description: "Powerful laptop designed for developers, creatives, and professional workflows.",
        price: 2399.99,
        category: "Laptop",
        ratings: 4.9,
        reviews: Math.floor(Math.random() * 100)
    },

    {
        id: 4,
        name: "Sony WH-1000XM5",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
        description: "Industry-leading noise cancellation headphones with premium sound quality.",
        price: 399.99,
        category: "Headset",
        ratings: 4.8,
        reviews: Math.floor(Math.random() * 100)
    },

    {
        id: 5,
        name: "Apple Watch Ultra 2",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop",
        description: "Rugged smartwatch built for adventure, fitness, and everyday productivity.",
        price: 899.99,
        category: "Smartwatch",
        ratings: 4.7,
        reviews: Math.floor(Math.random() * 100)
    },

    {
        id: 6,
        name: "iPad Pro 12.9-inch (M2)",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
        description: "Astonishing performance and a brilliant Liquid Retina XDR display. The ultimate iPad experience.",
        price: 1099.00,
        category: "Tablet",
        ratings: 4.9,
        reviews: Math.floor(Math.random() * 100)
    },

    {
        id: 7,
        name: "Bose QuietComfort Ultra",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop",
        description: "Breakthrough spatialized audio for more immersive listening and world-class noise cancellation.",
        price: 429.00,
        category: "Headset",
        ratings: 4.7,
        reviews: Math.floor(Math.random() * 100)
    },

    {
        id: 8,
        name: "Logitech MX Master 3S",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1000&auto=format&fit=crop",
        description: "Premium wireless productivity mouse with ultra-fast scrolling and ergonomic comfort.",
        price: 129.99,
        category: "Accessories",
        ratings: 4.8,
        reviews: Math.floor(Math.random() * 100)
    },

    {
        id: 9,
        name: "Belkin MagSafe Charger",
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop",
        description: "Reliable 20,000mAh portable charger with USB-C PD to keep your devices running all day.",
        price: 89.99,
        category: "Powerbank",
        ratings: 4.4,
        reviews: Math.floor(Math.random() * 100)
    },

    {
        id: 10,
        name: "PlayStation 5",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1000&auto=format&fit=crop",
        description: "Next-gen gaming console with lightning-fast load times and immersive gameplay.",
        price: 599.99,
        category: "Gaming",
        ratings: 4.9,
        reviews: Math.floor(Math.random() * 100)
    },

    {
        id: 11,
        name: "Samsung Odyssey G9",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop",
        description: "Massive curved gaming monitor with ultra-smooth refresh rate and stunning visuals.",
        price: 1299.99,
        category: "Monitor",
        ratings: 4.8,
        reviews: Math.floor(Math.random() * 100)
    },

    {
        id: 12,
        name: "Canon EOS R6",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
        description: "Professional mirrorless camera with exceptional autofocus and video capabilities.",
        price: 2499.99,
        category: "Camera",
        ratings: 4.9,
        reviews: Math.floor(Math.random() * 100)
    }
]

export default products


export const categories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'phones', name: 'Phones', icon: '📱' },
  { id: 'tablets', name: 'Tablets', icon: '💻' },
  { id: 'earbuds', name: 'Earbuds', icon: '🎧' },
  { id: 'headsets', name: 'Headsets', icon: '🎮' },
  { id: 'powerbanks', name: 'Power Banks', icon: '🔋' },
];