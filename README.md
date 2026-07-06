# YUNTEKO Taplink Catalog

Мобильный сайт-витрина в стиле premium mini-shop для перехода из Instagram/TikTok в Kaspi.

## Запуск локально

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Как добавить новый товар

Откройте `data/products.ts` и добавьте объект в массив `products`:

```ts
{
  title: "Название",
  fullTitle: "Полное название товара",
  description: "Короткое описание 1-2 строки",
  price: "12 990 ₸",
  image: "/products/photo.jpg",
  category: "Для дома",
  kaspiUrl: "https://l.kaspi.kz/shop/...",
  badge: "Хит / 0-0-24"
}
```

Доступные категории сейчас: `Для дома`, `Для спорта`, `Для красоты`, `Гаджеты`.

## Как загрузить фото

1. Скопируйте фото в папку `public/products`.
2. Используйте короткое имя файла латиницей, например `new-product.jpg`.
3. В поле `image` укажите путь `/products/new-product.jpg`.

## Деплой на Vercel

1. Загрузите проект в GitHub.
2. Откройте Vercel и нажмите `Add New Project`.
3. Выберите GitHub-репозиторий.
4. Framework preset: `Next.js`.
5. Нажмите `Deploy`.

## Как подключить GitHub

```bash
git init
git add .
git commit -m "Initial YUNTEKO catalog"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Замените `USERNAME` и `REPOSITORY` на свои данные.
