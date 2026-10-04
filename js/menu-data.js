const RESTAURANT = {
  name: "Dawn Barbecue",
  nameUrdu: "ڈان باربی کیو",
  logoImg: "Dawn.png",
  nameFont: "Bebas Neue",
  tagline: "BBQ & Grills • Est. 1971",
  whatsapp: "923327120000",
  address: "",
  currency: "Rs",
  poweredBy: "Qalbi Studio",

  delivery: {
    charge: 150,
    freeAbove: 3000,
    note: "5 km radius tak free delivery above Rs 3,000"
  },

  categories: [
    "BBQ",
    "Karahi & Handi",
    "Biryani & Rice",
    "Fast Food",
    "Breads",
    "Drinks",
    "Desserts"
  ],

  items: [
    { id: 1,  cat: "BBQ",            emoji: "🍢", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Tandoorimumbai.jpg/330px-Tandoorimumbai.jpg", name: "Chicken Tikka",      nameUrdu: "چکن تکہ",        desc: "Charcoal grilled, half kg",   price: 450,  popular: true },
    { id: 2,  cat: "BBQ",            emoji: "🥩", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Lula_kebab_2.jpg/330px-Lula_kebab_2.jpg", name: "Beef Bihari Kabab",  nameUrdu: "بیف بہاری کباب",  desc: "Tender, marinated overnight", price: 550 },
    { id: 3,  cat: "BBQ",            emoji: "🍡", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Pakistani_Food_Beef_Kabobs.jpg/330px-Pakistani_Food_Beef_Kabobs.jpg", name: "Seekh Kabab (4 pc)", nameUrdu: "سیخ کباب",        desc: "Juicy minced beef skewers",   price: 400 },
    { id: 4,  cat: "BBQ",            emoji: "🍗", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Tavuk_%C5%9Ei%C5%9F.jpg/330px-Tavuk_%C5%9Ei%C5%9F.jpg", name: "Malai Boti",         nameUrdu: "ملائی بوٹی",      desc: "Creamy, mildly spiced",       price: 500,  popular: true },

    { id: 5,  cat: "Karahi & Handi", emoji: "🍲", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/330px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg", name: "Chicken Karahi",     nameUrdu: "چکن کڑاہی",       desc: "Fresh tomato masala, full",   price: 1200, popular: true },
    { id: 6,  cat: "Karahi & Handi", emoji: "🥘", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Goat_meat.jpg/330px-Goat_meat.jpg", name: "Mutton Karahi",      nameUrdu: "مٹن کڑاہی",       desc: "Slow cooked, full",           price: 1800 },
    { id: 7,  cat: "Karahi & Handi", emoji: "🍛", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken_Korma.JPG/330px-Chicken_Korma.JPG", name: "Chicken Handi",      nameUrdu: "چکن ہانڈی",       desc: "Creamy white handi",          price: 1100 },
    { id: 8,  cat: "Karahi & Handi", emoji: "🫕", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Punjabi_style_Dal_Makhani.jpg/330px-Punjabi_style_Dal_Makhani.jpg", name: "Daal Makhani",       nameUrdu: "دال مکھنی",       desc: "Slow cooked black lentils",   price: 450 },

    { id: 9,  cat: "Biryani & Rice", emoji: "🍚", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/330px-%22Hyderabadi_Dum_Biryani%22.jpg", name: "Chicken Biryani",    nameUrdu: "چکن بریانی",      desc: "Sindhi style, one plate",     price: 450,  popular: true },
    { id: 10, cat: "Biryani & Rice", emoji: "🍚", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Afghan_Palo.jpg/330px-Afghan_Palo.jpg", name: "Beef Pulao",         nameUrdu: "بیف پلاؤ",        desc: "Yakhni flavor, one plate",    price: 500 },
    { id: 11, cat: "Biryani & Rice", emoji: "🍛", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Koh_Mak%2C_Thailand%2C_Fried_rice_with_seafood%2C_Thai_fried_rice.jpg/330px-Koh_Mak%2C_Thailand%2C_Fried_rice_with_seafood%2C_Thai_fried_rice.jpg", name: "Egg Fried Rice",     nameUrdu: "ایگ فرائیڈ رائس", desc: "With Chinese sauce",         price: 400 },

    { id: 12, cat: "Fast Food",      emoji: "🍔", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/330px-RedDot_Burger.jpg", name: "Zinger Burger",      nameUrdu: "زنگر برگر",       desc: "Crispy chicken, with fries",  price: 650,  popular: true },
    { id: 13, cat: "Fast Food",      emoji: "🍕", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/330px-Pizza-3007395.jpg", name: "Chicken Pizza (L)",  nameUrdu: "چکن پیزا",        desc: "Large, 8 slices",             price: 1100 },
    { id: 14, cat: "Fast Food",      emoji: "🍟", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/French_Fries.JPG/330px-French_Fries.JPG", name: "French Fries",       nameUrdu: "فرائیز",          desc: "Crispy salted, large",        price: 300 },

    { id: 15, cat: "Breads",         emoji: "🫓", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Annapurna_Naan.jpg/330px-Annapurna_Naan.jpg", name: "Tandoori Naan",      nameUrdu: "تندوری نان",      desc: "Fresh from tandoor",          price: 60 },
    { id: 16, cat: "Breads",         emoji: "🫓", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Chole_Kulcha_Meal_-_Order_Food_Online_in_Mumbai_%2831013272937%29.jpg/330px-Chole_Kulcha_Meal_-_Order_Food_Online_in_Mumbai_%2831013272937%29.jpg", name: "Garlic Naan",        nameUrdu: "گارلک نان",       desc: "Butter garlic topped",        price: 120 },
    { id: 17, cat: "Breads",         emoji: "🫓", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Annapurna_Naan.jpg/330px-Annapurna_Naan.jpg", name: "Roghni Naan",        nameUrdu: "روغنی نان",       desc: "Sesame seed topping",         price: 100 },

    { id: 18, cat: "Drinks",         emoji: "🥤", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Glass_of_Cola.jpg/330px-Glass_of_Cola.jpg", name: "Soft Drink",         nameUrdu: "کولڈ ڈرنک",       desc: "Regular 345ml",               price: 100 },
    { id: 19, cat: "Drinks",         emoji: "🥛", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Salt_lassi.jpg/330px-Salt_lassi.jpg", name: "Sweet Lassi",        nameUrdu: "میٹھی لسی",       desc: "Glass, chilled",              price: 250,  popular: true },
    { id: 20, cat: "Drinks",         emoji: "🧋", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/The_Great_Kashmiri_Salt_tea.png/330px-The_Great_Kashmiri_Salt_tea.png", name: "Kashmiri Chai",      nameUrdu: "کشمیری چائے",     desc: "Pink tea with nuts",          price: 300 },
    { id: 21, cat: "Drinks",         emoji: "💧", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Stilles_Mineralwasser.jpg/330px-Stilles_Mineralwasser.jpg", name: "Mineral Water",      nameUrdu: "منرل واٹر",       desc: "1.5 litre bottle",            price: 150 },

    { id: 22, cat: "Desserts",       emoji: "🍮", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Gulab-jamun-wallpaper-1.jpg/330px-Gulab-jamun-wallpaper-1.jpg", name: "Gulab Jamun (2 pc)", nameUrdu: "گلاب جامن",       desc: "Warm with syrup",             price: 250 },
    { id: 23, cat: "Desserts",       emoji: "🍨", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Faluda.JPG/330px-Faluda.JPG", name: "Kulfa Falooda",      nameUrdu: "کلفہ فالودہ",     desc: "Special house dessert",       price: 350,  popular: true },
    { id: 24, cat: "Desserts",       emoji: "🍰", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Chocolate_fudge_cake.jpg/330px-Chocolate_fudge_cake.jpg", name: "Chocolate Cake",     nameUrdu: "چاکلیٹ کیک",      desc: "Slice with cream",            price: 400 }
  ]
};
