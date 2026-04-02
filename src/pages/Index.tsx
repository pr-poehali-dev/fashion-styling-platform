import { useState } from "react";
import Icon from "@/components/ui/icon";

const looks = [
  {
    id: 1,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/8f207591-bab6-47c3-ada7-2995d0489d5a.jpg",
    title: "Чёрный монохром",
    event: "Деловая встреча",
    season: "Весна / Осень",
    style: "Минимализм",
    items: ["Tailored blazer", "Wide-leg trousers", "Pointed-toe heels"],
    tag: "EDITORIAL",
  },
  {
    id: 2,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/d1fd1edb-64eb-4e23-871b-aae7ca453ee1.jpg",
    title: "Парижское утро",
    event: "Прогулка / Кофе",
    season: "Осень",
    style: "Casual chic",
    items: ["Camel trench coat", "Black turtleneck", "Slim trousers"],
    tag: "STREET",
  },
  {
    id: 3,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/54feb0e2-0163-4fe5-860c-0b8a73d57b60.jpg",
    title: "Вечерний шёлк",
    event: "Ужин / Вечеринка",
    season: "Всесезонный",
    style: "Гламур",
    items: ["White satin dress", "Strappy heels", "Minimal jewelry"],
    tag: "EVENING",
  },
  {
    id: 4,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/7146ef04-3e5d-41c8-aad2-93bdd55e478a.jpg",
    title: "Офисная элегантность",
    event: "Работа / Переговоры",
    season: "Весна",
    style: "Smart casual",
    items: ["Oversized grey blazer", "Black turtleneck", "Tailored pants"],
    tag: "OFFICE",
  },
  {
    id: 5,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/9ec6d3cd-f606-4c1e-8627-d2e911a3faf4.jpg",
    title: "Власть акцента",
    event: "Коктейль / Презентация",
    season: "Всесезонный",
    style: "Avant-garde",
    items: ["Black structured jacket", "Gold statement earrings", "Dark lips"],
    tag: "POWER",
  },
  {
    id: 6,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/13733e35-6ce4-407d-8dd4-7d198fd47e53.jpg",
    title: "Капсульный гардероб",
    event: "Повседневный",
    season: "Универсальный",
    style: "Базовый",
    items: ["Cashmere turtleneck", "Camel coat", "Wide trousers"],
    tag: "CAPSULE",
  },
];

const filters = ["Все", "EDITORIAL", "STREET", "EVENING", "OFFICE", "POWER", "CAPSULE"];

const navItems = ["Образы", "Гардероб", "Стилист", "Обо мне"];

export default function Index() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [activeNav, setActiveNav] = useState("Образы");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedLook, setSelectedLook] = useState<(typeof looks)[0] | null>(null);

  const filtered = activeFilter === "Все" ? looks : looks.filter((l) => l.tag === activeFilter);

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-foreground grain">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F2]/90 backdrop-blur-sm border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <span className="font-cormorant text-2xl font-light tracking-[0.3em] uppercase">
            NOIR
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`nav-link font-golos text-xs tracking-[0.2em] uppercase transition-colors ${
                  activeNav === item ? "text-foreground active" : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          <button className="w-8 h-8 flex flex-col justify-center gap-1.5 md:hidden">
            <span className="w-full h-px bg-foreground" />
            <span className="w-2/3 h-px bg-foreground" />
            <span className="w-full h-px bg-foreground" />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-16 min-h-[55vh] flex items-end pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="animate-fade-in-up">
              <p className="font-golos text-xs tracking-[0.4em] uppercase text-foreground/40 mb-4">
                Умный стилист
              </p>
              <h1 className="font-cormorant text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.9] tracking-tight">
                Твой стиль —<br />
                <em className="italic">твоя сила</em>
              </h1>
            </div>
            <div className="animate-fade-in-up delay-300 max-w-xs">
              <p className="font-golos text-sm text-foreground/50 leading-relaxed mb-6">
                Персональная галерея образов под любое событие, сезон и настроение.
              </p>
              <button className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-golos hover:gap-5 transition-all duration-300">
                <span className="w-8 h-px bg-foreground group-hover:w-12 transition-all duration-300" />
                Собрать образ
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-3 gap-6 md:gap-0 md:flex md:items-center md:gap-16 border-t border-black/10 pt-8 animate-fade-in-up delay-500">
            {[
              { num: "6", label: "Образов" },
              { num: "4", label: "Сезона" },
              { num: "∞", label: "Вариаций" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-cormorant text-4xl font-light">{s.num}</p>
                <p className="font-golos text-xs tracking-[0.2em] uppercase text-foreground/40 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 font-golos text-xs tracking-[0.2em] uppercase border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/50 border-black/15 hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((look, i) => (
            <div
              key={look.id}
              className="break-inside-avoid look-card cursor-pointer relative overflow-hidden group bg-white"
              style={{ animationDelay: `${i * 80}ms` }}
              onMouseEnter={() => setHoveredCard(look.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedLook(look)}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden" style={{ aspectRatio: i % 3 === 1 ? "3/4" : "2/3" }}>
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* TAG */}
                <span className="absolute top-4 left-4 font-golos text-[10px] tracking-[0.25em] uppercase bg-background/90 px-2.5 py-1">
                  {look.tag}
                </span>
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <ul className="space-y-1 mb-3">
                    {look.items.map((item) => (
                      <li key={item} className="font-golos text-xs text-white/80 flex items-center gap-2">
                        <span className="w-3 h-px bg-white/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="font-golos text-xs tracking-[0.2em] uppercase text-white flex items-center gap-2">
                    Подробнее
                    <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </div>

              {/* CARD FOOTER */}
              <div className="p-4 border-t border-black/6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-cormorant text-xl font-light leading-tight">{look.title}</h3>
                    <p className="font-golos text-xs text-foreground/40 mt-0.5 tracking-wide">{look.event}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-golos text-xs text-foreground/30 tracking-wide">{look.season}</p>
                    <p className="font-golos text-xs text-foreground/50 mt-0.5">{look.style}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-cormorant text-3xl text-foreground/30">Образов не найдено</p>
          </div>
        )}
      </section>

      {/* MODAL */}
      {selectedLook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedLook(null)}
        >
          <div
            className="bg-background max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedLook.image}
                alt={selectedLook.title}
                className="w-full object-cover"
                style={{ maxHeight: "60vh" }}
              />
              <button
                onClick={() => setSelectedLook(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-background/90 flex items-center justify-center"
              >
                <Icon name="X" size={16} />
              </button>
              <span className="absolute top-4 left-4 font-golos text-[10px] tracking-[0.25em] uppercase bg-background/90 px-2.5 py-1">
                {selectedLook.tag}
              </span>
            </div>
            <div className="p-8">
              <h2 className="font-cormorant text-4xl font-light mb-1">{selectedLook.title}</h2>
              <p className="font-golos text-sm text-foreground/40 tracking-wide mb-6">{selectedLook.event}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-black/8 p-4">
                  <p className="font-golos text-[10px] tracking-[0.2em] uppercase text-foreground/30 mb-1">Сезон</p>
                  <p className="font-golos text-sm">{selectedLook.season}</p>
                </div>
                <div className="border border-black/8 p-4">
                  <p className="font-golos text-[10px] tracking-[0.2em] uppercase text-foreground/30 mb-1">Стиль</p>
                  <p className="font-golos text-sm">{selectedLook.style}</p>
                </div>
              </div>

              <div>
                <p className="font-golos text-[10px] tracking-[0.3em] uppercase text-foreground/30 mb-3">Состав образа</p>
                <ul className="space-y-2">
                  {selectedLook.items.map((item) => (
                    <li key={item} className="font-golos text-sm flex items-center gap-3 text-foreground/70">
                      <span className="w-5 h-px bg-foreground/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 w-full bg-foreground text-background py-3.5 font-golos text-xs tracking-[0.3em] uppercase hover:opacity-90 transition-opacity">
                Сохранить в гардероб
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-black/8 px-6 md:px-12 max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-cormorant text-xl font-light tracking-[0.3em] uppercase text-foreground/50">
          NOIR
        </span>
        <p className="font-golos text-xs tracking-widest uppercase text-foreground/30">
          Умный стилист — {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          {["Instagram", "Pinterest", "Telegram"].map((s) => (
            <button key={s} className="font-golos text-xs tracking-[0.15em] uppercase text-foreground/30 hover:text-foreground transition-colors">
              {s}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
