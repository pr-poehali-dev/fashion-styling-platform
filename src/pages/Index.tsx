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
    items: ["Приталенный блейзер", "Широкие брюки", "Туфли с острым носом"],
    tag: "РЕДАКЦИЯ",
  },
  {
    id: 2,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/d1fd1edb-64eb-4e23-871b-aae7ca453ee1.jpg",
    title: "Парижское утро",
    event: "Прогулка / Кофе",
    season: "Осень",
    style: "Кэжуал шик",
    items: ["Бежевый тренч", "Чёрная водолазка", "Зауженные брюки"],
    tag: "УЛИЦА",
  },
  {
    id: 3,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/54feb0e2-0163-4fe5-860c-0b8a73d57b60.jpg",
    title: "Вечерний шёлк",
    event: "Ужин / Вечеринка",
    season: "Всесезонный",
    style: "Гламур",
    items: ["Белое атласное платье", "Босоножки на каблуке", "Минималистичные украшения"],
    tag: "ВЕЧЕР",
  },
  {
    id: 4,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/7146ef04-3e5d-41c8-aad2-93bdd55e478a.jpg",
    title: "Офисная элегантность",
    event: "Работа / Переговоры",
    season: "Весна",
    style: "Смарт кэжуал",
    items: ["Оверсайз блейзер", "Чёрная водолазка", "Прямые брюки"],
    tag: "ОФИС",
  },
  {
    id: 5,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/9ec6d3cd-f606-4c1e-8627-d2e911a3faf4.jpg",
    title: "Власть акцента",
    event: "Коктейль / Презентация",
    season: "Всесезонный",
    style: "Авангард",
    items: ["Чёрный структурированный жакет", "Массивные золотые серьги", "Тёмная помада"],
    tag: "СИЛА",
  },
  {
    id: 6,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/13733e35-6ce4-407d-8dd4-7d198fd47e53.jpg",
    title: "Капсульный гардероб",
    event: "Повседневный",
    season: "Универсальный",
    style: "Базовый",
    items: ["Кашемировая водолазка", "Бежевое пальто", "Широкие брюки"],
    tag: "КАПСУЛА",
  },
  {
    id: 7,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/657b14db-78d4-448c-b425-77cedeebc1a0.jpg",
    title: "Молочный нейтрал",
    event: "Прогулка / Встреча",
    season: "Весна / Лето",
    style: "Мягкий минимализм",
    items: ["Кремовый вязаный свитер", "Брюки цвета экрю", "Золотая цепочка"],
    tag: "УЛИЦА",
  },
  {
    id: 8,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/48b2c80c-c430-4d86-bbbd-8a317f03e168.jpg",
    title: "Кожаный силуэт",
    event: "Ужин / Выход",
    season: "Осень / Зима",
    style: "Элегантная сила",
    items: ["Чёрная водолазка", "Кожаная юбка-миди", "Туфли с острым носом", "Клатч"],
    tag: "ВЕЧЕР",
  },
  {
    id: 9,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/794a1f90-acef-47fd-b69f-b0364036a77c.jpg",
    title: "Серый костюм",
    event: "Переговоры / Офис",
    season: "Всесезонный",
    style: "Строгая роскошь",
    items: ["Двубортный серый костюм", "Шёлковая рубашка", "Минимум аксессуаров"],
    tag: "ОФИС",
  },
  {
    id: 10,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/5212865f-fc8b-4319-9c63-f53975a49eef.jpg",
    title: "Белое платье",
    event: "Обед / Лёгкий выход",
    season: "Лето",
    style: "Чистая элегантность",
    items: ["Белое платье-рубашка", "Бежевые туфли", "Золотые серьги-кольца", "Пояс"],
    tag: "РЕДАКЦИЯ",
  },
  {
    id: 11,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/44036e02-e5f1-426c-bbc8-b8aff6be40e3.jpg",
    title: "Асимметрия",
    event: "Прогулка / Кино",
    season: "Осень",
    style: "Парижская небрежность",
    items: ["Пальто запашное", "Чёрные брюки", "Белые кеды"],
    tag: "УЛИЦА",
  },
  {
    id: 12,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/3385126c-586b-4ee0-87d5-b66348cb6c53.jpg",
    title: "Шёлковое утро",
    event: "Дома / Будуар",
    season: "Всесезонный",
    style: "Интимная роскошь",
    items: ["Шёлковое платье-комбинация цвета слоновой кости", "Открытая кожа", "Нежные украшения"],
    tag: "ВЕЧЕР",
  },
];

const filters = ["Все", "РЕДАКЦИЯ", "УЛИЦА", "ВЕЧЕР", "ОФИС", "СИЛА", "КАПСУЛА"];
const navItems = ["Образы", "Гардероб", "Стилист", "Обо мне"];

type WardrobeItem = {
  id: number;
  name: string;
  category: string;
  color: string;
  note: string;
};

const categoryOptions = ["Верх", "Низ", "Платье", "Верхняя одежда", "Обувь", "Аксессуар"];
const colorOptions = ["Чёрный", "Белый", "Бежевый", "Серый", "Коричневый", "Синий", "Другой"];

const defaultWardrobe: WardrobeItem[] = [
  { id: 1, name: "Чёрный блейзер", category: "Верх", color: "Чёрный", note: "Классика, носится с чем угодно" },
  { id: 2, name: "Белая шёлковая блуза", category: "Верх", color: "Белый", note: "Для особых случаев" },
  { id: 3, name: "Бежевое пальто", category: "Верхняя одежда", color: "Бежевый", note: "Осень/весна, оверсайз" },
  { id: 4, name: "Чёрные прямые брюки", category: "Низ", color: "Чёрный", note: "Капсульная вещь" },
  { id: 5, name: "Кашемировый водолазка", category: "Верх", color: "Серый", note: "Носить с юбкой или брюками" },
  { id: 6, name: "Белое платье-миди", category: "Платье", color: "Белый", note: "На лето и вечеринки" },
];

export default function Index() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [activeNav, setActiveNav] = useState("Образы");
  const [selectedLook, setSelectedLook] = useState<(typeof looks)[0] | null>(null);
  const [savedLooks, setSavedLooks] = useState<number[]>([]);

  // Wardrobe state
  const [wardrobe, setWardrobe] = useState<WardrobeItem[]>(defaultWardrobe);
  const [wardrobeFilter, setWardrobeFilter] = useState("Все");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<WardrobeItem | null>(null);
  const [newItem, setNewItem] = useState({ name: "", category: "Верх", color: "Чёрный", note: "" });
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  const filtered = activeFilter === "Все" ? looks : looks.filter((l) => l.tag === activeFilter);

  const wardrobeCategories = ["Все", ...categoryOptions];
  const filteredWardrobe =
    wardrobeFilter === "Все" ? wardrobe : wardrobe.filter((w) => w.category === wardrobeFilter);

  function handleSaveLook(id: number) {
    setSavedLooks((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    setSelectedLook(null);
  }

  function handleAddItem() {
    if (!newItem.name.trim()) return;
    setWardrobe((prev) => [
      ...prev,
      { ...newItem, id: Date.now() },
    ]);
    setNewItem({ name: "", category: "Верх", color: "Чёрный", note: "" });
    setShowAddForm(false);
  }

  function handleEditSave() {
    if (!editingItem || !editingItem.name.trim()) return;
    setWardrobe((prev) => prev.map((w) => (w.id === editingItem.id ? editingItem : w)));
    setEditingItem(null);
  }

  function handleDelete(id: number) {
    setWardrobe((prev) => prev.filter((w) => w.id !== id));
    setDeleteConfirm(null);
  }

  const categoryEmoji: Record<string, string> = {
    "Верх": "👕",
    "Низ": "👖",
    "Платье": "👗",
    "Верхняя одежда": "🧥",
    "Обувь": "👠",
    "Аксессуар": "💍",
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-foreground grain">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F2]/90 backdrop-blur-sm border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <span className="font-cormorant text-2xl font-light tracking-[0.3em] uppercase">NOIR</span>
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
                {item === "Гардероб" && wardrobe.length > 0 && (
                  <span className="ml-1.5 text-[10px] text-foreground/30">({wardrobe.length})</span>
                )}
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

      {/* ─── ОБРАЗЫ ─── */}
      {activeNav === "Образы" && (
        <>
          {/* HERO */}
          <section className="pt-16 min-h-[55vh] flex items-end pb-16 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="w-full">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div className="animate-fade-in-up">
                  <p className="font-golos text-xs tracking-[0.4em] uppercase text-foreground/40 mb-4">Умный стилист</p>
                  <h1 className="font-cormorant text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.9] tracking-tight">
                    Твой стиль —<br />
                    <em className="italic">твоя сила</em>
                  </h1>
                </div>
                <div className="animate-fade-in-up delay-300 max-w-xs">
                  <p className="font-golos text-sm text-foreground/50 leading-relaxed mb-6">
                    Персональная галерея образов под любое событие, сезон и настроение.
                  </p>
                  <button
                    onClick={() => setActiveNav("Гардероб")}
                    className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-golos hover:gap-5 transition-all duration-300"
                  >
                    <span className="w-8 h-px bg-foreground group-hover:w-12 transition-all duration-300" />
                    Мой гардероб
                  </button>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-3 gap-6 md:gap-0 md:flex md:items-center md:gap-16 border-t border-black/10 pt-8 animate-fade-in-up delay-500">
                {[
                  { num: String(looks.length), label: looks.length === 12 ? "Образов" : "Образов" },
                  { num: String(wardrobe.length), label: "Вещей" },
                  { num: String(savedLooks.length), label: "Сохранено" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-cormorant text-4xl font-light">{s.num}</p>
                    <p className="font-golos text-xs tracking-[0.2em] uppercase text-foreground/40 mt-1">{s.label}</p>
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
                  onClick={() => setSelectedLook(look)}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: i % 3 === 1 ? "3/4" : "2/3" }}>
                    <img
                      src={look.image}
                      alt={look.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 font-golos text-[10px] tracking-[0.25em] uppercase bg-background/90 px-2.5 py-1">
                      {look.tag}
                    </span>
                    {savedLooks.includes(look.id) && (
                      <span className="absolute top-4 right-4 w-7 h-7 bg-foreground flex items-center justify-center">
                        <Icon name="Bookmark" size={12} className="text-background fill-background" />
                      </span>
                    )}
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
                        Подробнее <Icon name="ArrowRight" size={12} />
                      </button>
                    </div>
                  </div>
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
        </>
      )}

      {/* ─── ГАРДЕРОБ ─── */}
      {activeNav === "Гардероб" && (
        <section className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="font-golos text-xs tracking-[0.4em] uppercase text-foreground/40 mb-3">Личный архив</p>
              <h2 className="font-cormorant text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.9]">
                Мой гардероб
              </h2>
            </div>
            <button
              onClick={() => { setShowAddForm(true); setEditingItem(null); }}
              className="self-start md:self-auto flex items-center gap-2.5 bg-foreground text-background px-6 py-3 font-golos text-xs tracking-[0.2em] uppercase hover:opacity-85 transition-opacity"
            >
              <Icon name="Plus" size={14} />
              Добавить вещь
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {categoryOptions.slice(0, 4).map((cat) => {
              const count = wardrobe.filter((w) => w.category === cat).length;
              return (
                <div key={cat} className="border border-black/8 p-4 bg-white">
                  <p className="font-golos text-xs tracking-widest uppercase text-foreground/30 mb-1">{cat}</p>
                  <p className="font-cormorant text-3xl font-light">{count}</p>
                </div>
              );
            })}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {wardrobeCategories.map((c) => (
              <button
                key={c}
                onClick={() => setWardrobeFilter(c)}
                className={`px-4 py-1.5 font-golos text-xs tracking-[0.2em] uppercase border transition-all duration-200 ${
                  wardrobeFilter === c
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground/50 border-black/15 hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Items grid */}
          {filteredWardrobe.length === 0 ? (
            <div className="text-center py-24 border border-dashed border-black/15">
              <p className="font-cormorant text-3xl text-foreground/30 mb-3">Пока пусто</p>
              <p className="font-golos text-xs text-foreground/30 tracking-widest uppercase">
                Добавьте первую вещь
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredWardrobe.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-black/6 p-5 group look-card relative"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{categoryEmoji[item.category] ?? "👔"}</span>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => setEditingItem(item)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-black/5 transition-colors"
                      >
                        <Icon name="Pencil" size={12} />
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(item.id)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-red-50 transition-colors"
                      >
                        <Icon name="Trash2" size={12} className="text-red-400" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-cormorant text-xl font-light leading-tight mb-1">{item.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-golos text-[10px] tracking-[0.2em] uppercase text-foreground/40 border border-black/10 px-2 py-0.5">
                      {item.category}
                    </span>
                    <span className="font-golos text-[10px] tracking-[0.2em] uppercase text-foreground/40 border border-black/10 px-2 py-0.5">
                      {item.color}
                    </span>
                  </div>
                  {item.note && (
                    <p className="font-golos text-xs text-foreground/40 leading-relaxed border-t border-black/6 pt-2 mt-2">
                      {item.note}
                    </p>
                  )}

                  {/* Delete confirm */}
                  {deleteConfirm === item.id && (
                    <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center gap-3 p-4">
                      <p className="font-golos text-sm text-center">Удалить «{item.name}»?</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-foreground text-background px-4 py-2 font-golos text-xs tracking-widest uppercase"
                        >
                          Удалить
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="border border-black/20 px-4 py-2 font-golos text-xs tracking-widest uppercase"
                        >
                          Отмена
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Saved looks */}
          {savedLooks.length > 0 && (
            <div className="mt-16">
              <p className="font-golos text-xs tracking-[0.3em] uppercase text-foreground/40 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-foreground/20" />
                Сохранённые образы ({savedLooks.length})
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {looks.filter((l) => savedLooks.includes(l.id)).map((look) => (
                  <div key={look.id} className="group relative overflow-hidden cursor-pointer look-card" onClick={() => setSelectedLook(look)}>
                    <div className="aspect-[2/3] overflow-hidden">
                      <img src={look.image} alt={look.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-3 bg-white border border-t-0 border-black/6">
                      <p className="font-cormorant text-base font-light">{look.title}</p>
                      <p className="font-golos text-[10px] text-foreground/40 uppercase tracking-widest">{look.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ─── СТИЛИСТ / ОБО МНЕ ─── */}
      {(activeNav === "Стилист" || activeNav === "Обо мне") && (
        <section className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in">
          <div className="max-w-xl">
            <p className="font-golos text-xs tracking-[0.4em] uppercase text-foreground/40 mb-4">
              {activeNav === "Стилист" ? "AI помощник" : "Профиль"}
            </p>
            <h2 className="font-cormorant text-[clamp(2.5rem,7vw,5rem)] font-light leading-[0.9] mb-8">
              {activeNav === "Стилист" ? "Скоро" : "Обо мне"}
            </h2>
            <p className="font-golos text-sm text-foreground/50 leading-relaxed">
              {activeNav === "Стилист"
                ? "Умный стилист на основе AI — подбор образов по мероприятию, погоде и настроению. Находится в разработке."
                : "Ваш персональный профиль и настройки стиля появятся здесь."}
            </p>
          </div>
        </section>
      )}

      {/* ─── MODAL: Look detail ─── */}
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
              <img src={selectedLook.image} alt={selectedLook.title} className="w-full object-cover" style={{ maxHeight: "60vh" }} />
              <button onClick={() => setSelectedLook(null)} className="absolute top-4 right-4 w-8 h-8 bg-background/90 flex items-center justify-center">
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
              <div className="mb-8">
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
              <button
                onClick={() => handleSaveLook(selectedLook.id)}
                className={`w-full py-3.5 font-golos text-xs tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-2 ${
                  savedLooks.includes(selectedLook.id)
                    ? "bg-background text-foreground border border-foreground/30"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                <Icon name={savedLooks.includes(selectedLook.id) ? "BookmarkCheck" : "Bookmark"} size={14} />
                {savedLooks.includes(selectedLook.id) ? "Сохранено в гардероб" : "Сохранить в гардероб"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── MODAL: Add item ─── */}
      {(showAddForm || editingItem) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => { setShowAddForm(false); setEditingItem(null); }}
        >
          <div
            className="bg-background max-w-md w-full animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-cormorant text-2xl font-light">
                  {editingItem ? "Редактировать" : "Новая вещь"}
                </h3>
                <button onClick={() => { setShowAddForm(false); setEditingItem(null); }}>
                  <Icon name="X" size={16} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="font-golos text-[10px] tracking-[0.2em] uppercase text-foreground/40 block mb-1.5">
                    Название*
                  </label>
                  <input
                    type="text"
                    placeholder="Белая рубашка oversize"
                    value={editingItem ? editingItem.name : newItem.name}
                    onChange={(e) =>
                      editingItem
                        ? setEditingItem({ ...editingItem, name: e.target.value })
                        : setNewItem({ ...newItem, name: e.target.value })
                    }
                    className="w-full border border-black/15 px-4 py-2.5 font-golos text-sm bg-transparent focus:outline-none focus:border-foreground/40 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-golos text-[10px] tracking-[0.2em] uppercase text-foreground/40 block mb-1.5">
                      Категория
                    </label>
                    <select
                      value={editingItem ? editingItem.category : newItem.category}
                      onChange={(e) =>
                        editingItem
                          ? setEditingItem({ ...editingItem, category: e.target.value })
                          : setNewItem({ ...newItem, category: e.target.value })
                      }
                      className="w-full border border-black/15 px-4 py-2.5 font-golos text-sm bg-transparent focus:outline-none focus:border-foreground/40 transition-colors appearance-none"
                    >
                      {categoryOptions.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-golos text-[10px] tracking-[0.2em] uppercase text-foreground/40 block mb-1.5">
                      Цвет
                    </label>
                    <select
                      value={editingItem ? editingItem.color : newItem.color}
                      onChange={(e) =>
                        editingItem
                          ? setEditingItem({ ...editingItem, color: e.target.value })
                          : setNewItem({ ...newItem, color: e.target.value })
                      }
                      className="w-full border border-black/15 px-4 py-2.5 font-golos text-sm bg-transparent focus:outline-none focus:border-foreground/40 transition-colors appearance-none"
                    >
                      {colorOptions.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-golos text-[10px] tracking-[0.2em] uppercase text-foreground/40 block mb-1.5">
                    Заметка
                  </label>
                  <textarea
                    placeholder="С чем носить, особенности..."
                    rows={2}
                    value={editingItem ? editingItem.note : newItem.note}
                    onChange={(e) =>
                      editingItem
                        ? setEditingItem({ ...editingItem, note: e.target.value })
                        : setNewItem({ ...newItem, note: e.target.value })
                    }
                    className="w-full border border-black/15 px-4 py-2.5 font-golos text-sm bg-transparent focus:outline-none focus:border-foreground/40 transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={editingItem ? handleEditSave : handleAddItem}
                  className="w-full bg-foreground text-background py-3.5 font-golos text-xs tracking-[0.3em] uppercase hover:opacity-90 transition-opacity mt-2"
                >
                  {editingItem ? "Сохранить" : "Добавить в гардероб"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-black/8 px-6 md:px-12 max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-cormorant text-xl font-light tracking-[0.3em] uppercase text-foreground/50">NOIR</span>
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