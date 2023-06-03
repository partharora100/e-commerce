import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Ubtan Face Wash",
    bestseller: false,
    quantity: "300ml",
    tags: "Removes Tan, Repairs Sun Damage",
    price: "259",
    rating: 4.8,
    reviews: 1531,
    categoryName: "face",
    image:
      "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_1.jpg?fit=contain&width=400&height=400",
  },
  {
    _id: uuid(),
    title: "Multani Mitti Face Wash",
    bestseller: true,
    quantity: "300ml",
    tags: "Controls Oil & Acne, Promotes Hydration",
    price: "259",
    rating: 4.8,
    reviews: 1531,
    categoryName: "face",
    image:
      "https://images.mamaearth.in/catalog/product/m/u/multani_mitti_face_wash_1.jpg?fit=contain&width=400&height=400",
  },
  {
    _id: uuid(),
    title: "Sunscreen Body Lotion SPF-30 ",
    bestseller: true,
    quantity: "300ml",
    tags: "SPF 30 Sunn Protection",
    price: "598",
    rating: 4.6,
    reviews: 153,
    categoryName: "beauty",
    image:
      "https://images.mamaearth.in/catalog/product/m/u/multani_mitti_face_wash_1.jpg?fit=contain&width=400&height=400",
  },
  {
    _id: uuid(),
    title: "Baby Body Wash",
    bestseller: true,
    quantity: "400ml",
    tags: "Natural Cleansers",
    price: "398",
    rating: 4.3,
    reviews: 78,
    categoryName: "baby",
    image:
      "https://images.mamaearth.in/catalog/product/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?fit=contain&width=400&height=400",
  },
];
