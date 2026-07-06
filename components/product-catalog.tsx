"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Product } from "@/data/products";

type CategoryFilter =
  | "Все товары"
  | "Для дома"
  | "Для спорта"
  | "Для красоты"
  | "Гаджеты"
  | "Подарки"
  | "Хиты продаж";

const categories: CategoryFilter[] = [
  "Все товары",
  "Для дома",
  "Для спорта",
  "Для красоты",
  "Гаджеты",
  "Подарки",
  "Хиты продаж"
];

const kaspiShopUrl = "https://kaspi.kz/shop/search/?text=YUNTEKO";

export function ProductCatalog({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Все товары");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [product.title, product.fullTitle, product.description, product.badge]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesCategory =
        activeCategory === "Все товары" ||
        product.category === activeCategory ||
        (activeCategory === "Подарки" &&
          /подар|комплект|сумка|пакет/i.test(product.badge)) ||
        (activeCategory === "Хиты продаж" && /хит/i.test(product.badge));

      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, products, search]);

  return (
    <main className="min-h-screen">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <Header />

        <section className="rounded-[2rem] border border-line bg-ink px-5 py-7 text-white shadow-premium sm:px-8 sm:py-9">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
            YUNTEKO mini-shop
          </p>
          <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl">
                Техника и гаджеты для дома, спорта и комфорта
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                Брендовый каталог YUNTEKO с быстрым переходом к покупке на Kaspi. Фото,
                цены, подарки и рассрочка собраны в одном удобном мобильном формате.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-4">
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">
                <span className="rounded-2xl bg-white/10 px-2 py-3">Доставка</span>
                <span className="rounded-2xl bg-white/10 px-2 py-3">Kaspi</span>
                <span className="rounded-2xl bg-accent px-2 py-3 text-white">0-0-24</span>
              </div>
              <a
                href={kaspiShopUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-5 text-sm font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-accent hover:text-white"
              >
                Перейти в Kaspi магазин
              </a>
            </div>
          </div>
        </section>

        <section className="sticky top-0 z-20 -mx-4 border-y border-line bg-soft/95 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-3xl sm:border sm:px-5">
          <div className="flex flex-col gap-4">
            <label className="relative block">
              <span className="sr-only">Поиск товара</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Найти товар"
                className="h-12 w-full rounded-2xl border border-line bg-white px-4 pr-12 text-base font-medium outline-none transition placeholder:text-neutral-400 focus:border-ink"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-neutral-400">
                ⌕
              </span>
            </label>

            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-white text-graphite hover:border-ink"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {filteredProducts.map((product, index) => (
            <article
              key={product.kaspiUrl}
              className="group overflow-hidden rounded-[1.65rem] border border-line bg-white shadow-[0_10px_40px_rgba(13,13,15,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src={product.image}
                  alt={product.fullTitle}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={index < 2}
                  className="object-cover transition duration-500 group-hover:scale-[1.035]"
                />
                <div className="absolute left-3 top-3 flex max-w-[88%] flex-wrap gap-2">
                  {product.badge.split("/").map((badge) => (
                    <span
                      key={badge.trim()}
                      className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-ink shadow-sm backdrop-blur"
                    >
                      {badge.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex min-h-[17rem] flex-col p-5">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                      {product.category}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink">
                      {product.title}
                    </h2>
                  </div>
                  <p className="shrink-0 rounded-2xl bg-soft px-3 py-2 text-right text-lg font-black text-ink">
                    {product.price}
                  </p>
                </div>

                <p className="line-clamp-3 text-sm leading-6 text-neutral-600">
                  {product.description}
                </p>
                <p className="mt-3 text-xs leading-5 text-neutral-400">{product.fullTitle}</p>

                <a
                  href={product.kaspiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex min-h-12 items-center justify-center rounded-2xl bg-accent px-5 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-ink"
                >
                  Купить на Kaspi
                </a>
              </div>
            </article>
          ))}
        </section>

        {filteredProducts.length === 0 && (
          <section className="rounded-3xl border border-line bg-white p-8 text-center">
            <h2 className="text-2xl font-semibold text-ink">Товар не найден</h2>
            <p className="mt-2 text-neutral-500">
              Попробуйте изменить запрос или выбрать другую категорию.
            </p>
          </section>
        )}
      </section>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-4 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-lg font-bold text-white shadow-premium transition hover:bg-accent"
        aria-label="Наверх"
      >
        ↑
      </button>
    </main>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between gap-3 rounded-full border border-line bg-white/85 p-2 pl-4 shadow-[0_12px_30px_rgba(13,13,15,0.06)] backdrop-blur">
      <a href="#" className="flex items-center gap-3" aria-label="YUNTEKO">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-black text-white">
          Y
        </span>
        <span>
          <span className="block text-sm font-black uppercase tracking-[0.2em] text-ink">
            YUNTEKO
          </span>
          <span className="hidden text-xs text-neutral-500 sm:block">Premium catalog</span>
        </span>
      </a>
      <a
        href={kaspiShopUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-ink px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-accent sm:px-5"
      >
        Kaspi
      </a>
    </header>
  );
}
