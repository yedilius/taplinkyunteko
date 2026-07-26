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
const whatsappUrl =
  "https://wa.me/77075383501?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B0%D0%BC%20YUNTEKO.";

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
        (product.category as CategoryFilter) === activeCategory ||
        (activeCategory === "Для спорта" && isSportProduct(product)) ||
        (activeCategory === "Подарки" &&
          /подар|комплект|сумка|пакет/i.test(product.badge)) ||
        (activeCategory === "Хиты продаж" && /хит/i.test(product.badge));

      return matchesSearch && matchesCategory;
    }).sort((first, second) => productRank(first, activeCategory) - productRank(second, activeCategory));
  }, [activeCategory, products, search]);

  return (
    <main className="min-h-screen font-[var(--font-manrope)]">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <Header />

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink px-5 py-7 text-white shadow-premium sm:px-8 sm:py-9">
          <Image
            src="/brand/yunteko-hero-bg.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.12),transparent_32rem),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.86))]" />

          <div className="relative">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black/60">
                  <Image
                    src="/brand/yunteko-mark.png"
                    alt="YUNTEKO"
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </span>
                <div>
                  <p className="font-[var(--font-unbounded)] text-[11px] font-semibold uppercase tracking-[0.34em] text-white">
                    YUNTEKO
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/55">Official mini catalog</p>
                </div>
              </div>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                Kaspi витрина
              </span>
            </div>

            <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                  Premium selection
                </p>
                <h1 className="max-w-3xl font-[var(--font-unbounded)] text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.06em] sm:text-6xl">
                  Техника и гаджеты для дома, спорта и комфорта
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/74 sm:text-lg">
                  Брендовый каталог YUNTEKO с быстрым переходом к покупке на Kaspi.
                  Фото, цены, подарки и рассрочка собраны в одном удобном мобильном формате.
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">
                  <span className="rounded-2xl bg-white/10 px-2 py-3">Доставка</span>
                  <span className="rounded-2xl bg-white/10 px-2 py-3">Kaspi</span>
                  <span className="rounded-2xl bg-accent px-2 py-3 text-white">0-0-24</span>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <a
                    href={kaspiShopUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-5 text-center text-sm font-extrabold uppercase tracking-[0.16em] text-ink transition hover:bg-accent hover:text-white"
                  >
                    Перейти в Kaspi
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 text-center text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-ink"
                  >
                    Связаться
                  </a>
                </div>
              </div>
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

        <section className="grid gap-4 rounded-[1.65rem] border border-line bg-white p-5 shadow-[0_10px_40px_rgba(13,13,15,0.06)] sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Консультация
            </p>
            <h2 className="mt-2 font-[var(--font-unbounded)] text-2xl font-semibold tracking-[-0.04em] text-ink">
              Поможем выбрать товар YUNTEKO
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
              Напишите в WhatsApp, если нужно подобрать модель, уточнить комплект или быстро перейти к покупке.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-ink px-6 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-accent"
          >
            Связаться в WhatsApp
          </a>
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
                    <h2 className="mt-2 font-[var(--font-unbounded)] text-xl font-semibold leading-tight tracking-[-0.04em] text-ink">
                      {product.title}
                    </h2>
                  </div>
                  <p className="shrink-0 rounded-2xl bg-soft px-3 py-2 text-right text-lg font-black text-ink">
                    {formatInstallments(product.price)}
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
                <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                  0-0-12 / 0-0-24
                </p>
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
    <header className="flex items-center justify-between gap-3 rounded-full border border-neutral-200 bg-white/90 p-2 pr-2 shadow-[0_12px_30px_rgba(13,13,15,0.06)] backdrop-blur">
      <a href="#" className="flex items-center gap-3" aria-label="YUNTEKO">
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-ink">
          <Image
            src="/brand/yunteko-mark.png"
            alt=""
            fill
            sizes="44px"
            className="object-contain p-1"
          />
        </span>
        <span>
          <span className="block font-[var(--font-unbounded)] text-xs font-semibold uppercase tracking-[0.24em] text-ink">
            YUNTEKO
          </span>
          <span className="hidden text-xs font-medium text-neutral-500 sm:block">
            Premium catalog
          </span>
        </span>
      </a>
      <div className="flex shrink-0 items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-line bg-white px-3 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-ink transition hover:border-ink sm:px-4"
        >
          Связаться
        </a>
        <a
          href={kaspiShopUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-ink px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-accent sm:px-5"
        >
          Kaspi
        </a>
      </div>
    </header>
  );
}

function productText(product: Product) {
  return `${product.title} ${product.fullTitle} ${product.description} ${product.badge}`.toLowerCase();
}

function isWatch(product: Product) {
  return /смарт-часы|active s100|gi20|dks10|dmi50|zwi39|zwi67|i58/i.test(productText(product));
}

function isHeadphones(product: Product) {
  return /наушники|movepro/i.test(productText(product));
}

function isSportProduct(product: Product) {
  return (product.category as CategoryFilter) === "Для спорта" || isWatch(product) || isHeadphones(product);
}

function productRank(product: Product, activeCategory: CategoryFilter) {
  const text = productText(product);

  if (activeCategory === "Для спорта") {
    if (/active s100/i.test(text)) return 0;
    if (isWatch(product)) return 1;
    if (isHeadphones(product)) return 2;
    if (/виброплатформа/i.test(text)) return 3;
    return 20;
  }

  if (/лапшерез|pastamaker/i.test(text)) return 0;
  if (/утюжок|выпрямитель|gold/i.test(text)) return 1;
  if (/вакууматор|вакуумный упаковщик/i.test(text)) return 2;
  if (/массажер|массаж/i.test(text)) return 3;
  if (/active s100/i.test(text)) return 4;
  return 20;
}

function formatInstallments(price: string) {
  const amount = Number.parseInt(price.replace(/[^\d]/g, ""), 10);
  if (!Number.isFinite(amount) || amount <= 0) return price;

  return `${Math.round(amount / 12)}*12 / ${Math.round(amount / 24)}*24`;
}
