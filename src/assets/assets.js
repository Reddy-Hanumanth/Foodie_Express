import P_img1 from './p_img1.jpg'
import P_img2 from './p_img2.jpg'
import P_img3 from './p_img3.jpg'
import P_img4 from './p_img4.jpg'
import P_img5 from './p_img5.jpg'
import P_img6 from './p_img6.jpg'
import P_img7 from './p_img7.jpg'
import P_img8 from './p_img8.jpg'




import logo from './logo.png';
import profilePic from './profile.png';
import backgroundImage from './Hero.png';
import Pizza_img1 from './img1.avif'
import Burgur_img2 from './Burgur_img2.jpg'
import Shushi from './Shushi.jpg'
import Drinks from './Drinks.jpg'
import The_Urban_Kitchen from './The_Urban_Kitchen.jpg'
import pasta from './pasta04.png'
import Tokos05 from './Takos05.jpg'

export const assets = {
    logo,
    profilePic,
    backgroundImage,
    Pizza_img1,
    Burgur_img2,
    Shushi,
    Drinks,
    The_Urban_Kitchen,
    pasta,
    Tokos05
};




















export const products = [
  {
    _id: "aaaaa",
    name: "Classic Veg Burger",
    description: "A soft toasted bun filled with a crispy vegetable patty, fresh lettuce, tomato slices, and creamy mayo sauce.",
    price: 99,
    image: [P_img1],
    category: "Fast Food",
    sizes: [],
    date: 1716634345448,
    bestseller: true
  },
  {
    _id: "aaaab",
    name: "Margherita Pizza",
    description: "Authentic Italian pizza topped with fresh mozzarella cheese, rich tomato sauce, and basil leaves.",
    price: 249,
    image: [P_img2],
    category: "Italian",
    sizes: ["Small", "Medium", "Large"],
    date: 1716621345448,
    bestseller: true
  },
  {
    _id: "aaaac",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken pieces, aromatic spices, and traditional dum style.",
    price: 199,
    image: [P_img3],
    category: "Indian",
    sizes: [],
    date: 1716234545448,
    bestseller: true
  },
  {
    _id: "aaaad",
    name: "Paneer Butter Masala",
    description: "Soft paneer cubes cooked in rich tomato-butter gravy with mild spices and fresh cream.",
    price: 189,
    image: [P_img4],
    category: "Indian",
    sizes: [],
    date: 1716621345448,
    bestseller: true
  },
  {
    _id: "aaaae",
    name: "Veg Hakka Noodles",
    description: "Stir-fried noodles tossed with fresh vegetables and flavorful Chinese sauces.",
    price: 149,
    image: [P_img5],
    category: "Chinese",
    sizes: [],
    date: 1716622345448,
    bestseller: true
  },
  {
    _id: "aaaaf",
    name: "Chocolate Truffle Cake",
    description: "Rich and moist chocolate cake layered with smooth chocolate ganache.",
    price: 399,
    image: [P_img6],
    category: "Desserts",
    sizes: ["Half Kg", "1 Kg"],
    date: 1716623423448,
    bestseller: true
  },
  {
    _id: "aaaag",
    name: "Cold Coffee",
    description: "Chilled creamy coffee blended with milk, sugar, and topped with chocolate drizzle.",
    price: 129,
    image: [P_img7],
    category: "Drinks",
    sizes: ["Regular", "Large"],
    date: 1716621542448,
    bestseller: false
  },
  {
    _id: "aaaah",
    name: "Farmhouse Pizza",
    description: "Loaded pizza topped with onions, capsicum, mushrooms, and olives over mozzarella cheese.",
    price: 329,
    image: [P_img3],
    category: "Italian",
    sizes: ["Small", "Medium", "Large"],
    date: 1716622345448,
    bestseller: false
  },
  {
    _id: "aaaai",
    name: "Masala Dosa",
    description: "Crispy South Indian dosa stuffed with spiced potato filling, served with chutney and sambar.",
    price: 120,
    image: [P_img4],
    category: "South Indian",
    sizes: [],
    date: 1716621235448,
    bestseller: true
  },
  {
    _id: "aaaaj",
    name: "Chicken Fried Rice",
    description: "Wok-tossed rice with juicy chicken pieces, vegetables, and soy-based sauces.",
    price: 179,
    image: [P_img3],
    category: "Chinese",
    sizes: [],
    date: 1716622235448,
    bestseller: false
  },
  {
    _id: "aaaak",
    name: "Grilled Sandwich",
    description: "Toasted sandwich stuffed with fresh vegetables and melted cheese.",
    price: 109,
    image: [P_img1],
    category: "Fast Food",
    sizes: [],
    date: 1716623345448,
    bestseller: false
  },
  {
    _id: "aaaal",
    name: "Strawberry Milkshake",
    description: "Fresh strawberries blended with chilled milk and topped with whipped cream.",
    price: 149,
    image: [P_img2],
    category: "Drinks",
    sizes: ["Regular", "Large"],
    date: 1716624445448,
    bestseller: false
  },
  {
    _id: "aaaam",
    name: "Gulab Jamun",
    description: "Soft fried dumplings soaked in warm sugar syrup flavored with cardamom.",
    price: 89,
    image: [P_img3],
    category: "Desserts",
    sizes: [],
    date: 1716625545448,
    bestseller: false
  },
  {
    _id: "aaaan",
    name: "Butter Chicken",
    description: "Tender chicken cooked in creamy tomato gravy with mild spices.",
    price: 229,
    image: [P_img4],
    category: "Indian",
    sizes: [],
    date: 1716626645448,
    bestseller: false
  },
  {
    _id: "aaaao",
    name: "Veg Manchurian",
    description: "Crispy vegetable balls tossed in spicy Indo-Chinese gravy.",
    price: 169,
    image: [P_img5],
    category: "Chinese",
    sizes: [],
    date: 1716627745448,
    bestseller: false
  },
  {
    _id: "aaaap",
    name: "Mango Juice",
    description: "Freshly blended mango juice served chilled.",
    price: 99,
    image: [P_img6],
    category: "Drinks",
    sizes: ["Regular", "Large"],
    date: 1716628845448,
    bestseller: false
  },
  {
    _id: "aaaaq",
    name: "Pepperoni Pizza",
    description: "Classic Italian pizza topped with spicy pepperoni and mozzarella cheese.",
    price: 379,
    image: [P_img7],
    category: "Italian",
    sizes: ["Small", "Medium", "Large"],
    date: 1716629945448,
    bestseller: false
  },
  {
    _id: "aaaar",
    name: "Brownie with Ice Cream",
    description: "Warm chocolate brownie served with a scoop of vanilla ice cream.",
    price: 179,
    image: [P_img8],
    category: "Desserts",
    sizes: [],
    date: 1716631045448,
    bestseller: false
  },
  {
    _id: "aaaas",
    name: "Veg Pulao",
    description: "Flavorful rice cooked with mixed vegetables and mild spices.",
    price: 149,
    image: [P_img1],
    category: "Indian",
    sizes: [],
    date: 1716632145448,
    bestseller: false
  },
  {
    _id: "aaaat",
    name: "Red Velvet Cake",
    description: "Soft red velvet sponge layered with rich cream cheese frosting.",
    price: 449,
    image: [P_img2],
    category: "Desserts",
    sizes: ["Half Kg", "1 Kg"],
    date: 1716633245448,
    bestseller: false
  },
  {
  _id: "aaaba",
  name: "BBQ Chicken Pizza",
  description: "Stone-baked pizza topped with smoky BBQ chicken, onions, capsicum, and mozzarella cheese.",
  price: 399,
  image: [P_img2],
  category: "Italian",
  sizes: ["Small", "Medium", "Large"],
  date: 1716640945448,
  bestseller: true
},
{
  _id: "aaabb",
  name: "Hyderabadi Mutton Biryani",
  description: "Authentic dum-cooked basmati rice layered with tender mutton and aromatic spices.",
  price: 299,
  image: [P_img8],
  category: "Indian",
  sizes: [],
  date: 1716641045448,
  bestseller: true
},
{
  _id: "aaabc",
  name: "Veg Spring Rolls",
  description: "Crispy golden rolls stuffed with seasoned vegetables and served with sweet chili sauce.",
  price: 139,
  image: [P_img2],
  category: "Chinese",
  sizes: [],
  date: 1716641145448,
  bestseller: false
},
{
  _id: "aaabd",
  name: "Tandoori Chicken",
  description: "Juicy chicken marinated in yogurt and spices, grilled in traditional tandoor.",
  price: 249,
  image: [P_img3],
  category: "Indian",
  sizes: ["Half", "Full"],
  date: 1716641245448,
  bestseller: false
},
{
  _id: "aaabe",
  name: "Oreo Milkshake",
  description: "Creamy milkshake blended with Oreo cookies and topped with whipped cream.",
  price: 169,
  image: [P_img1],
  category: "Drinks",
  sizes: ["Regular", "Large"],
  date: 1716641345448,
  bestseller: true
},
{
  _id: "aaabf",
  name: "Cheese Garlic Bread",
  description: "Freshly baked bread topped with garlic butter and melted cheese.",
  price: 129,
  image: [P_img2],
  category: "Fast Food",
  sizes: [],
  date: 1716641445448,
  bestseller: false
},
{
  _id: "aaabg",
  name: "Chilli Paneer",
  description: "Crispy fried paneer cubes tossed in spicy Indo-Chinese sauce.",
  price: 189,
  image: [P_img3],
  category: "Chinese",
  sizes: [],
  date: 1716641545448,
  bestseller: false
},
{
  _id: "aaabh",
  name: "Vanilla Ice Cream",
  description: "Classic creamy vanilla ice cream made with premium ingredients.",
  price: 89,
  image: [P_img4],
  category: "Desserts",
  sizes: ["Single Scoop", "Double Scoop"],
  date: 1716641645448,
  bestseller: false
},
{
  _id: "aaabi",
  name: "Paneer Tikka Pizza",
  description: "Fusion pizza topped with spicy paneer tikka chunks and mozzarella cheese.",
  price: 349,
  image: [P_img5],
  category: "Italian",
  sizes: ["Small", "Medium", "Large"],
  date: 1716641745448,
  bestseller: true
},
{
  _id: "aaabj",
  name: "Veg Fried Momos",
  description: "Steamed and lightly fried dumplings stuffed with seasoned vegetables.",
  price: 119,
  image: [P_img6],
  category: "Chinese",
  sizes: [],
  date: 1716641845448,
  bestseller: false
},
{
  _id: "aaabk",
  name: "Chicken Shawarma",
  description: "Middle Eastern wrap filled with grilled chicken, fresh veggies, and garlic sauce.",
  price: 179,
  image: [P_img3],
  category: "Fast Food",
  sizes: [],
  date: 1716641945448,
  bestseller: true
},
{
  _id: "aaabl",
  name: "Blueberry Cheesecake",
  description: "Smooth and creamy cheesecake topped with fresh blueberry compote.",
  price: 299,
  image: [P_img8],
  category: "Desserts",
  sizes: ["Slice", "Half Kg"],
  date: 1716642045448,
  bestseller: false
},
{
  _id: "aaabm",
  name: "Masala Lemon Soda",
  description: "Refreshing lemon soda mixed with Indian spices and black salt.",
  price: 79,
  image: [P_img3],
  category: "Drinks",
  sizes: ["Regular", "Large"],
  date: 1716642145448,
  bestseller: false
},
{
  _id: "aaabn",
  name: "Egg Fried Rice",
  description: "Wok-tossed rice with scrambled eggs, vegetables, and soy sauce.",
  price: 159,
  image: [P_img4],
  category: "Chinese",
  sizes: [],
  date: 1716642245448,
  bestseller: false
},
{
  _id: "aaabo",
  name: "Chocolate Lava Cake",
  description: "Warm chocolate cake with a gooey molten chocolate center.",
  price: 149,
  image: [P_img1],
  category: "Desserts",
  sizes: [],
  date: 1716642345448,
  bestseller: true
},
{
  _id: "aaabp",
  name: "Veg Club Sandwich",
  description: "Triple-layer sandwich filled with vegetables, cheese, and mint chutney.",
  price: 139,
  image: [P_img2],
  category: "Fast Food",
  sizes: [],
  date: 1716642445448,
  bestseller: false
},
{
  _id: "aaabq",
  name: "Mojito",
  description: "Refreshing mint and lime cooler served chilled with soda.",
  price: 119,
  image: [P_img3],
  category: "Drinks",
  sizes: ["Regular", "Large"],
  date: 1716642545448,
  bestseller: false
},
{
  _id: "aaabr",
  name: "Chicken Nuggets",
  description: "Crispy golden chicken nuggets served with dipping sauce.",
  price: 179,
  image: [P_img4],
  category: "Fast Food",
  sizes: ["6 pcs", "12 pcs"],
  date: 1716642645448,
  bestseller: true
},
{
  _id: "aaabs",
  name: "Rasmalai",
  description: "Soft cottage cheese patties soaked in sweetened thickened milk.",
  price: 129,
  image: [P_img4],
  category: "Desserts",
  sizes: [],
  date: 1716642745448,
  bestseller: false
},
{
  _id: "aaabt",
  name: "Veg Thali",
  description: "Complete Indian meal with roti, rice, dal, sabzi, pickle, and dessert.",
  price: 249,
  image: [P_img6],
  category: "Indian",
  sizes: [],
  date: 1716642845448,
  bestseller: true
}

];
