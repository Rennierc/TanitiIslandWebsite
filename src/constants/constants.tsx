type CuisineCategory =
  | "Restaurant"
  | "Supermarket"
  | "Grocery Store"
  | "Convenience Store";

type LodgingCategory =
  | "Five-Star Resort"
  | "Boutique Resort"
  | "Luxury Hotel"
  | "Eco-Friendly Resort"
  | "Charming Bed & Breakfast"
  | "Exclusive Resort"
  | "Family-Friendly Resort"
  | "Romantic Retreat"
  | "Wellness and Spa Resort";
    

type TransportationCategory =
  | "Public Bus"
  | "Private Bus"
  | "Taxi"
  | "Rental Car"
  | "Bicycle"
  | "Walking";

export type DataEntry = {
  category: CuisineCategory | LodgingCategory | TransportationCategory;
  name: string;
  description: string;
  cuisine?: string;
  atmosphere?: string;
  specialFeatures?: string;
  image: string;
};

export const cuisineData: DataEntry[] = [
  {
    category: "Restaurant",
    name: "Tropical Garden Grille",
    cuisine: "Fresh Fruits and Grilled Meats",
    description:
      "Tropical Garden Grille brings you the vibrant flavors of Taniti's lush jungles and rich farmlands. Enjoy a diverse menu of freshly picked fruits paired with expertly grilled meats, all sourced from local farms.",
    atmosphere:
      "A serene garden setting with lush greenery and softly lit pathways, creating an intimate dining experience under the stars.",
    image: "../images/cuisine-1.png",
  },
  {
    category: "Restaurant",
    name: "Sunset Vista Café",
    cuisine: "Artisan Breads and Gourmet Coffee",
    description:
      "Sunset Vista Café offers breathtaking views of the setting sun while you indulge in freshly baked artisan breads and gourmet coffee. Each bite and sip celebrates the craft of local bakers and baristas.",
    atmosphere: "Cozy, with warm lighting and rustic décor, perfect for a relaxing evening with friends or a romantic date.",
    image: "../images/cuisine-placeholder.png",
  },
  {
    category: "Restaurant",
    name: "Island Spice Haven",
    cuisine: "Exotic Spices and Traditional Curries",
    description:
      "Island Spice Haven takes you on a culinary journey through Taniti's rich spice history. Savor traditional curries infused with exotic spices that are both bold and comforting.",
    atmosphere: "Vibrant and colorful, with intricate tapestries and ambient music that immerse you in the island’s cultural tapestry.",
    image: "../images/cuisine-9.png",
  },
  {
    category: "Restaurant",
    name: "Mountain Breeze Bistro",
    cuisine: "Alpine Cheeses and Hearty Soups",
    description:
      "Mountain Breeze Bistro offers a taste of Taniti's highlands with a menu featuring a variety of rich alpine cheeses and hearty, warming soups. It's a cozy retreat that brings the mountains to your table.",
    atmosphere:
      "Warm and rustic, with wooden furnishings and a crackling fireplace, ideal for a cozy, intimate meal.",
    image: "../images/cuisine-3.png",
  },
  {
    category: "Restaurant",
    name: "Coral Reef Delights",
    cuisine: "Tropical Fruits and Fresh Seafood",
    description:
      "Coral Reef Delights highlights the bounty of Taniti's coral reefs and tropical orchards. Enjoy an array of fresh seafood dishes complemented by vibrant, juicy fruits.",
    atmosphere: "Bright and airy, with large windows and ocean-themed décor, perfect for a lively family meal or a casual get-together.",
    image: "../images/cuisine-2.png",
  },
  {
    category: "Restaurant",
    name: "Coconut Grove Café",
    cuisine: "Coconut-Based Dishes and Fresh Juices",
    description:
      "Coconut Grove Café specializes in dishes that showcase the versatility of coconut, from savory entrees to refreshing beverages. Every meal here is a celebration of Taniti's most iconic fruit.",
    atmosphere: "Relaxed and casual, with coconut palms and bamboo accents, making it a great spot for a laid-back brunch or a light lunch.",
    image: "../images/cuisine-5.png",
  },
  {
    category: "Restaurant",
    name: " Lagoon's Edge Eatery",
    cuisine: "Fresh Catch and Citrus Delightsn",
    description:
      "Lagoon's Edge Eatery combines the freshest catches of the day with vibrant citrus flavors to create dishes that are both refreshing and satisfying. It's a tribute to Taniti's bountiful waters and zesty orchards.",
    atmosphere:
      "Relaxed and breezy, with waterfront seating that lets you enjoy the gentle lapping of the lagoon while you dine.",
    image: "../images/cuisine-6.png",
  },
  {
    category: "Restaurant",
    name: "Rainforest Retreat",
    cuisine: "Wild Game and Foraged Greens",
    description:
      "Rainforest Retreat brings the untamed beauty of Taniti’s rainforests to your plate with a menu featuring wild game and freshly foraged greens. Each dish is a nod to the island’s rich biodiversity.",
    atmosphere:
      "Enclosed in natural foliage with rustic wooden furniture, offering an immersive dining experience that feels like a true escape into nature.",
    image: "../images/cuisine-7.png",
  },
  {
    category: "Restaurant",
    name: "Volcano View Grill",
    cuisine: "Smoky BBQ and Roasted Veggies",
    description:
      "Volcano View Grill delivers bold, smoky flavors with its BBQ dishes and perfectly roasted vegetables, all inspired by the volcanic soils that enrich Taniti’s produce.",
    atmosphere:
      "Dramatic and dynamic, with a view of the island’s volcano, providing a unique backdrop for a memorable dining experience.",
    image: "../images/cuisine-8.png",
  },
  {
    category: "Restaurant",
    name: "Pearl Bay Café",
    cuisine: "Shellfish Specials and Fine Wines",
    description:
      "Pearl Bay Café is a haven for shellfish lovers, offering an exquisite selection of shellfish dishes paired with a curated list of fine wines. It’s the perfect place for a luxurious dining experience by the bay.",
    atmosphere: "Elegant and refined, with sophisticated décor and a tranquil bay view, ideal for special occasions and intimate gatherings.",
    image: "../images/cuisine-4.png",
  },
  {
    category: "Supermarket",
    name: "Ocean Breeze Grocers",
    description:
      "Ocean Breeze Grocers is the ideal place to find the freshest local produce, imported delicacies, and all your grocery essentials. Our knowledgeable staff is here to ensure you get the best quality products for your kitchen.",
    specialFeatures:
      "A comprehensive seafood section with daily catches, a wide range of organic vegetables and fruits, and a deli offering gourmet meats and cheeses.",
    image: "../images/supermarket-2.png",
  },
  {
    category: "Supermarket",
    name: "Tropical Harvest Mart",
    description:
      "Tropical Harvest Mart offers a vibrant selection of locally sourced produce, specialty international items, and handcrafted goods. Our friendly team is dedicated to helping you discover the best ingredients for every meal.",
    specialFeatures:
      "An abundant fruit and vegetable section, an extensive array of exotic spices and sauces, and an in-house bakery known for its delightful pastries and bread.",
    image: "../images/supermarket-1.png",
  },
  {
    category: "Grocery Store",
    name: "Treetop Market",
    description:
      "Nestled in the heart of Taniti’s lush jungle, Treetop Market provides a serene shopping experience with a diverse range of organic produce, local delights, and everyday essentials. Ideal for gathering fresh ingredients for a jungle picnic or a healthy meal.",
    specialFeatures:
      "A wide selection of exotic fruits and vegetables, and an array of handmade jungle-inspired snacks and beverages.",
    image: "../images/grocery-store-1.png",
  },
  {
    category: "Grocery Store",
    name: "Sunset Shores Market",
    description:
      "Located near the beautiful shores of Taniti, Sunset Shores Market offers a relaxing shopping atmosphere with a great selection of fresh produce, local favorites, and necessary staples. Perfect for gathering supplies for a sunset dinner or a seaside picnic.",
    specialFeatures:
      "A specialty section with tropical fruits and freshly squeezed juices, and a variety of island-themed snacks and desserts.",
    image: "../images/grocery-store-2.png",
  },
  {
    category: "Convenience Store",
    name: "Sunrise Express Mart",
    description:
      "Sunrise Express Mart caters to your convenience needs at any hour of the day. From early risers to night owls, we provide a range of snacks, beverages, and essential items to keep you going, no matter the time.",
    specialFeatures:
      "Microwave and seating area for quick meals, 24-hour pharmacy section, and a variety of travel-sized toiletries. Open 24 hours.",
    image: "../images/convenient-store-1.png",
  },
];

export const lodgingData: DataEntry[] = [
  {
    name: "Coral Reef Retreat",
    category: "Five-Star Resort",
    description:
      "Perched on the pristine sands of Coral Beach, Coral Reef Retreat provides opulent suites with panoramic sea views. Indulge in top-tier amenities, including a state-of-the-art wellness center, multiple swimming pools, fine dining options, and exclusive beach cabanas.",
    specialFeatures: "Wellness Center, Multiple Pools, Fine Dining, Exclusive Beach Cabanas",
    image: "../images/lodging-1.png",
  },
  {
    name: "Sunset Haven Villas",
    category: "Boutique Resort",
    description:
      "Located on the serene Sunset Bay, Sunset Haven Villas offers charming villas with stunning sunset views. Enjoy personalized services, an intimate spa, a serene lagoon pool, farm-to-table dining, and direct beach access.",
    specialFeatures: "Personalized Services, Intimate Spa, Lagoon Pool, Farm-to-Table Dining, Direct Beach Access",
    image: "../images/lodging-2.png",
  },
  {
    name: "Paradise Palms Hotel",
    category: "Luxury Hotel",
    description:
      "Situated in the heart of Taniti’s vibrant capital, Paradise Palms Hotel combines urban sophistication with island charm. Guests can experience an upscale rooftop bar, a heated rooftop pool, a gourmet restaurant, and easy access to city attractions.",
    specialFeatures:
      "Rooftop Bar, Heated Rooftop Pool, Gourmet Restaurant, City Access",
    image: "../images/lodging-10.png",
  },
  {
    name: "Ocean Breeze Bungalows",
    category: "Eco-Friendly Resort",
    description:
      "Nestled along the tranquil shores of Blue Lagoon, Ocean Breeze Bungalows offers eco-friendly accommodations with stunning lagoon views. The resort features a natural infinity pool, an organic restaurant, guided nature tours, and a private snorkeling area.",
    specialFeatures: "Natural Infinity Pool, Organic Restaurant, Guided Nature Tours, Private Snorkeling Area",
    image: "../images/lodging-3.png",
  },
  {
    name: "Tropical Bliss Inn",
    category: "Charming Bed & Breakfast",
    description:
      "Set in a lush tropical garden, Tropical Bliss Inn offers cozy rooms with garden or ocean views. Guests can enjoy a homemade breakfast, a relaxing garden lounge, complimentary bicycles, and close proximity to local attractions.",
    specialFeatures:
      "Homemade Breakfast, Garden Lounge, Complimentary Bicycles, Local Attractions",
    image: "../images/lodging-6.png",
  },
  {
    name: "Seaside Serenity Resort",
    category: "Exclusive Resort",
    description:
      "Located on the secluded Silver Sands Beach, Seaside Serenity Resort provides luxurious villas with private plunge pools. Experience world-class service, a seaside spa, gourmet beachside dining, and a private marina.",
    specialFeatures:
      "Private Plunge Pools, Seaside Spa, Gourmet Beachside Dining, Private Marina",
    image: "../images/lodging-9.png",
  },
  {
    name: "Coconut Grove Lodge",
    category: "Family-Friendly Resort",
    description:
      "Set amidst a coconut grove near Sunshine Beach, Coconut Grove Lodge offers spacious family suites with easy beach access. The lodge features a kids' club, a family pool, casual dining options, and organized family activities.",
    specialFeatures:
      "Kids' Club, Family Pool, Casual Dining, Family Activities",
    image: "../images/lodging-4.png",
  },
  {
    name: "Island Oasis Cottages",
    category: "Romantic Retreat",
    description:
      "Hidden in a secluded cove, Island Oasis Cottages provides intimate cottages perfect for couples. Enjoy private outdoor baths, a romantic beachfront restaurant, personalized in-room dining, and sunset boat tours.",
    specialFeatures:
      "Private Outdoor Baths, Beachfront Restaurant, Personalized In-Room Dining, Sunset Boat Tours",
    image: "../images/lodging-11.png",
  },
  {
    name: "Ocean Pearl Resort",
    category: "Wellness and Spa Resort",
    description:
      "Situated on the tranquil shores of Pearl Bay, Ocean Pearl Resort specializes in wellness and relaxation. The resort offers luxurious spa treatments, wellness programs, yoga classes, a saltwater pool, and a healthy gourmet restaurant.",
    specialFeatures:
      "Spa Treatments, Wellness Programs, Yoga Classes, Saltwater Pool, Healthy Gourmet Restaurant",
    image: "../images/lodging-7.png",
  },
];

export const transportationData: DataEntry[] = [
  {
    category: "Rental Car",
    name: "Island Adventurers",
    description:
      "Island Adventurers specializes in rugged vehicles and beach buggies perfect for exploring Taniti’s adventurous terrain. Rent a vehicle from Island Adventurers and discover hidden beaches and off-the-beaten-path treasures.",
    image: "../images/transportation-6.png",
    specialFeatures: "4x4 vehicles, dune buggies, GPS included, adventure-ready",
  },
  {
    category: "Rental Car",
    name: "Green Rides",
    description:
      "Green Rides offers compact and electric vehicles ideal for navigating Taniti City's busy streets. Rent from Green Rides for an eco-friendly, efficient way to explore the city and beyond.",
    image: "../images/transportation-7.png",
    specialFeatures:
      "Electric cars, fuel-efficient options, high-end models, environmentally friendly",
  },
  {
    category: "Taxi",
    name: "Rapid Rides",
    description:
      "Rapid Rides is Taniti's leading taxi service, offering prompt and reliable transportation for both tourists and locals. Whether you need a quick airport transfer, a city tour, or a ride to a remote beach, Rapid Rides has you covered.",
    image: "../images/transportation-4.png",
    specialFeatures: "24/7 availability, airport pickups, group bookings, clean vehicles",
  },
  {
    category: "Taxi",
    name: "Coastal Cabs",
    description:
      "Coastal Cabs provides scenic taxi tours along Taniti's picturesque coastal roads. Enjoy the stunning seaside views and the relaxed pace of the island as you travel with Coastal Cabs.",
    image: "../images/transportation-5.png",
    specialFeatures: "Experienced drivers, fast service, coastal routes, comfortable rides",
  },
  {
    category: "Private Bus",
    name: "Adventure Tours",
    description:
      "Adventure Tours offers private bus services for guided trips to Taniti's top adventure spots. Whether you're heading to the volcano, the rainforest, or the coastal cliffs, Adventure Tours will get you there in style and comfort.",
    image: "../images/transportation-2.png",
    specialFeatures: "Tailored tours, expert guides, luxury buses with reclining seats",
  },
  {
    category: "Private Bus",
    name: "Heritage Journeys",
    description:
      "Heritage Journeys provides private bus services for those keen on exploring Taniti's cultural and historical sites. Visit ancient temples, traditional villages, and cultural landmarks with guides who share the island’s rich history.",
    image: "../images/transportation-3.png",
    specialFeatures: "Insightful tours, cultural immersion, professional guides",
  },
  {
    category: "Public Bus",
    name: "Taniti Island Hopper",
    description:
      "The Island Hopper is Taniti's reliable public bus service, providing convenient and affordable transportation throughout the island. With frequent routes and stops at major attractions, it's an excellent way to see Taniti like a local.",
    image: "../images/transportation-1.png",
    specialFeatures:
      "Operates from 6 a.m. to 10 p.m. daily, onboard Wi-Fi, air-conditioned comfort",
  },
  {
    category: "Bicycle",
    name: "EcoCycles",
    description:
      "EcoCycles provides bicycle rentals for those looking to explore Taniti sustainably. Ride along coastal paths, through bustling city streets, or venture into less-traveled areas with an EcoCycles bike.",
    image: "../images/transportation-8.png",
    specialFeatures: "City bikes, beach cruisers, easy rentals, helmets provided",
  },
  {
    category: "Bicycle",
    name: "Trail Blazers",
    description:
      "Trail Blazers rents mountain and trail bikes for those eager to explore Taniti’s rugged rainforests and off-road trails. Rent a bike from Trail Blazers for an exhilarating adventure through nature.",
    image: "../images/transportation-9.png",
    specialFeatures: "Mountain bikes, trail bikes, safety gear included, quick rentals",
  }
];
