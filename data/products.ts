export type ProductCategory = "Для дома" | "Для спорта" | "Для красоты" | "Гаджеты";

export type Product = {
  title: string;
  fullTitle: string;
  description: string;
  price: string;
  image: string;
  category: ProductCategory;
  kaspiUrl: string;
  badge: string;
};

export const products: Product[] = [
  {
    title: "Вакууматор AirLock",
    fullTitle: "Вакуумный упаковщик YUNTEKO AirLock серый",
    description:
      "Вакууматор для хранения продуктов, заготовок и экономии места в холодильнике. В подарок - 50 пакетов.",
    price: "17 880 ₸",
    image: "/products/airlock.jpg",
    category: "Для дома",
    kaspiUrl:
      "https://l.kaspi.kz/shop/2HT255ZfZ62yq21?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783343691",
    badge: "Хит / 50 пакетов в подарок / 0-0-24"
  },
  {
    title: "Виброплатформа YUNTEKO",
    fullTitle: "Виброплатформа YUNTEKO горизонтальная",
    description:
      "Домашний тренажер для коротких тренировок, тонуса тела, лимфодренажа и расслабления мышц.",
    price: "49 880 ₸",
    image: "/products/vibroplatform.jpg",
    category: "Для спорта",
    kaspiUrl:
      "https://l.kaspi.kz/shop/4Wz7HYsihYxji4e?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783343691",
    badge: "Хит / Сумка в подарок / 0-0-24"
  },
  {
    title: "Утюжок Silk",
    fullTitle: "YUNTEKO выпрямитель Silk утюжок",
    description:
      "Утюжок для быстрой укладки и выпрямления волос с быстрым нагревом и звуковым сигналом.",
    price: "20 980 ₸",
    image: "/products/silk.jpg",
    category: "Для красоты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/FidobkwVc9o8GSE?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783343691",
    badge: "Beauty / 0-0-24"
  },
  {
    title: "Смарт-часы Gi20",
    fullTitle: "Смарт-часы YUNTEKO Gi20 47 мм розовые",
    description:
      "Женские смарт-часы для повседневной носки, звонков, активности и стильного образа.",
    price: "15 880 ₸",
    image: "/products/gi20.jpg",
    category: "Гаджеты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/FWXGtjKzEKRHkuc?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783343691",
    badge: "Для подарка / 0-0-24"
  },
  {
    title: "Наушники MovePro",
    fullTitle: "Наушники YUNTEKO спортивные MovePro черные",
    description:
      "Спортивные наушники удобной формы для тренировок, прогулок и повседневного использования.",
    price: "15 880 ₸",
    image: "/products/movepro.jpg",
    category: "Гаджеты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/6Vy7SEFtwYeEmgU?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783343691",
    badge: "Для спорта / 0-0-24"
  },
  {
    title: "Массажер Relax+",
    fullTitle: "Массажер YUNTEKO Relax+ напольный",
    description:
      "Напольный массажер для ног с 3D-массажем, разогревом, шиацу и воздушно-компрессионным воздействием.",
    price: "69 880 ₸",
    image: "/products/relax-plus.jpeg",
    category: "Для дома",
    kaspiUrl:
      "https://l.kaspi.kz/shop/7DSiPqSp6upshcs?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783343691",
    badge: "Премиум / Сумка в подарок / 0-0-12"
  },
  {
    title: "УФ-облучатель Ultra-V",
    fullTitle: "YUNTEKO облучатель Ultra-V без озона",
    description: "УФ-облучатель для обработки помещений и поверхностей без озона.",
    price: "18 870 ₸",
    image: "/products/ultra-v.jpg",
    category: "Для дома",
    kaspiUrl:
      "https://l.kaspi.kz/shop/4MGEQb5VEZLTVgQ?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783343691",
    badge: "Для чистоты / 0-0-12"
  },
  {
    title: "Смарт-часы Active S100",
    fullTitle: "Смарт-часы YUNTEKO Active S100 47 мм графитовый-черный",
    description:
      "Смарт-часы со звонками, сообщениями, спортивными функциями и стильным прочным корпусом.",
    price: "24 880 ₸",
    image: "/products/active-s100.jpg",
    category: "Гаджеты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/EurDivwKWQgwNzo?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783343691",
    badge: "Хит / 0-0-24"
  },
  {
    title: "Active S100 + наушники",
    fullTitle: "Смарт-часы YUNTEKO Active S100 47 мм + подарок",
    description:
      "Смарт-часы Active S100 с подарком - спортивными наушниками YUNTEKO MovePro.",
    price: "35 880 ₸",
    image: "/products/active-s100-bundle.jpg",
    category: "Гаджеты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/9CEuDG7KwPFKo1B?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783343691",
    badge: "Комплект / Подарок / 0-0-24"
  },
  {
    title: "Смарт-часы Gi20 черные",
    fullTitle: "Смарт-часы YUNTEKO Gi20 47 мм черные",
    description:
      "Стильные смарт-часы для повседневной носки, звонков, активности и контроля уведомлений.",
    price: "Цена в Kaspi",
    image: "/products/gi20-black.jpg",
    category: "Гаджеты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/2LQGu45uCrghTqg?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783348608",
    badge: "Для подарка / 0-0-24"
  },
  {
    title: "YUNTEKO Fresh",
    fullTitle: "YUNTEKO Fresh белый",
    description:
      "Компактный гаджет для дома и личного ухода. Подойдет как практичный подарок на каждый день.",
    price: "Цена в Kaspi",
    image: "/products/fresh.jpg",
    category: "Для дома",
    kaspiUrl:
      "https://l.kaspi.kz/shop/7b9b9bxFHEQu5qB?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783348608",
    badge: "Новинка / 0-0-24"
  },
  {
    title: "Смарт-часы DKS10",
    fullTitle: "Смарт-часы YUNTEKO DKS10 47 мм черные",
    description:
      "Прочные смарт-часы с брутальным дизайном, звонками, уведомлениями и функциями для активности.",
    price: "Цена в Kaspi",
    image: "/products/dks10.jpg",
    category: "Гаджеты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/7rRsLxxFUEBYrYN?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783348608",
    badge: "Мужской выбор / 0-0-24"
  },
  {
    title: "Стайлер Luxe Style",
    fullTitle: "YUNTEKO Luxe Style стайлер черный-золотой",
    description:
      "Стайлер для быстрой укладки волос дома: подходит для аккуратного образа без похода в салон.",
    price: "Цена в Kaspi",
    image: "/products/luxe-style.jpg",
    category: "Для красоты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/J6uoUEV1svavqiy?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783348608",
    badge: "Beauty / 0-0-24"
  },
  {
    title: "Смарт-часы ZWI39",
    fullTitle: "Смарт-часы YUNTEKO ZWI39 бежевые",
    description:
      "Аккуратные смарт-часы в светлом оттенке для повседневной носки, уведомлений и активности.",
    price: "Цена в Kaspi",
    image: "/products/zwi39.jpg",
    category: "Гаджеты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/HTPHPQ14CcuV43T?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783348608",
    badge: "Для подарка / 0-0-12"
  },
  {
    title: "Смарт-часы ZWI67",
    fullTitle: "Смарт-часы YUNTEKO ZWI67 44 мм графитовый-черный",
    description:
      "Смарт-часы в графитовом цвете для звонков, уведомлений, спорта и ежедневного использования.",
    price: "Цена в Kaspi",
    image: "/products/zwi67.jpg",
    category: "Гаджеты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/9MeJGaVa98P1Lde?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783348608",
    badge: "Универсальный выбор / 0-0-24"
  },
  {
    title: "Смарт-часы DMI50",
    fullTitle: "Смарт-часы YUNTEKO DMI50 графитовый-черный",
    description:
      "Стильные смарт-часы с темным корпусом для звонков, уведомлений, активности и повседневного образа.",
    price: "Цена в Kaspi",
    image: "/products/dmi50.jpg",
    category: "Гаджеты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/5xKvkFdM7sN7i5x?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783348608",
    badge: "Хит / 0-0-24"
  },
  {
    title: "Смарт-часы i58 розовые",
    fullTitle: "Смарт-часы YUNTEKO i58 44 мм розовые / белые",
    description:
      "Женские смарт-часы в нежном цвете для звонков, уведомлений, активности и стильного образа.",
    price: "Цена в Kaspi",
    image: "/products/i58-pink.jpg",
    category: "Гаджеты",
    kaspiUrl:
      "https://l.kaspi.kz/shop/GcL2FqQQFu5hxvh?sessionId=c94ef87f-66b7-49a2-bcda-6d00326fa0041783348608",
    badge: "Для подарка / 0-0-24"
  }
];
