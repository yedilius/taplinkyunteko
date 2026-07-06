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
  }
];
