import { useState } from "react";
import Icon from "@/components/ui/icon";

const looks = [
  {
    id: 1,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/8f207591-bab6-47c3-ada7-2995d0489d5a.jpg",
    title: "Чёрный монохром",
    event: "Деловая встреча",
    season: "Весна / Осень",
    style: "Тёмный минимализм",
    items: ["Приталенный блейзер", "Широкие брюки", "Туфли с острым носом"],
    tag: "МОНО",
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
    items: ["Белое атласное платье", "Босоножки на каблуке", "Украшения"],
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
    title: "Капсула",
    event: "Повседневный",
    season: "Универсальный",
    style: "Базовый",
    items: ["Кашемировая водолазка", "Бежевое пальто", "Широкие брюки"],
    tag: "БАЗА",
  },
  {
    id: 7,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/657b14db-78d4-448c-b425-77cedeebc1a0.jpg",
    title: "Молочный нейтрал",
    event: "Прогулка / Встреча",
    season: "Весна / Лето",
    style: "Мягкий минимализм",
    items: ["Кремовый вязаный свитер", "Брюки цвета экрю", "Золотая цепочка"],
    tag: "НЕЙТРАЛ",
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
    items: ["Белое платье-рубашка", "Бежевые туфли", "Золотые серьги-кольца"],
    tag: "ЛЕТО",
  },
  {
    id: 11,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/44036e02-e5f1-426c-bbc8-b8aff6be40e3.jpg",
    title: "Асимметрия",
    event: "Прогулка / Кино",
    season: "Осень",
    style: "Парижская небрежность",
    items: ["Запашное пальто", "Чёрные брюки", "Белые кеды"],
    tag: "УЛИЦА",
  },
  {
    id: 12,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/3385126c-586b-4ee0-87d5-b66348cb6c53.jpg",
    title: "Шёлковое утро",
    event: "Дома / Будуар",
    season: "Всесезонный",
    style: "Интимная роскошь",
    items: ["Шёлковое платье-комбинация", "Нежные украшения"],
    tag: "ВЕЧЕР",
  },
  {
    id: 13,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/9dbfc990-7b4e-459d-bebe-ffac324094da.jpg",
    title: "Граффити-худи",
    event: "Скейт / Прогулка",
    season: "Весна / Осень",
    style: "Скейт культура",
    items: ["Оверсайз худи с графикой", "Широкие карго-штаны", "Кроссовки на платформе", "Кепка"],
    tag: "СТРИТ",
  },
  {
    id: 14,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/7fdc2658-d4c0-4b79-81ae-970ec41bb0a0.jpg",
    title: "Бомбер + шорты",
    event: "Вечеринка / Клуб",
    season: "Лето",
    style: "Токио-стрит",
    items: ["Оверсайз бомбер", "Байкерские шорты", "Платформа", "Цепной пояс"],
    tag: "КЛУБ",
  },
  {
    id: 15,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/433d7721-82c9-4bb7-87b1-f8ab5a16dfa2.jpg",
    title: "Деним с патчами",
    event: "Прогулка / Встреча",
    season: "Весна / Осень",
    style: "90-е хип-хоп",
    items: ["Оверсайз джинсовая куртка с нашивками", "Широкие джинсы", "Белая футболка", "Ретро-кеды"],
    tag: "СТРИТ",
  },
  {
    id: 16,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/2d8532f3-7792-4c98-8413-eb6d2a9517a8.jpg",
    title: "Тактический вест",
    event: "Повседневный",
    season: "Всесезонный",
    style: "Тактик урбан",
    items: ["Тактический жилет", "Белый лонгслив", "Широкие карго", "Берцы"],
    tag: "КАРГО",
  },
  {
    id: 17,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/a5504c02-18e4-445c-8527-003200920336.jpg",
    title: "Кожа + цепи",
    event: "Вечер / Клуб",
    season: "Осень / Зима",
    style: "Гранж стрит",
    items: ["Укороченная косуха", "Широкие джинсы с цепями", "Платформа", "Многослойные цепочки"],
    tag: "КЛУБ",
  },
  {
    id: 18,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/347754f6-b63f-4fe1-b95b-a4751062d2a0.jpg",
    title: "Флис + трек",
    event: "Повседневный",
    season: "Зима / Осень",
    style: "Атлетик стрит",
    items: ["Технический флис", "Трековые брюки с лампасами", "Кроссовки", "Бини"],
    tag: "СПОРТ",
  },
  {
    id: 19,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/4a5b6687-76ad-4771-8f11-60ee4654e91c.jpg",
    title: "Панк-сетка",
    event: "Концерт / Вечеринка",
    season: "Всесезонный",
    style: "Панк-2000-е",
    items: ["Оверсайз футболка группы", "Мини-юбка в клетку", "Рыбацкие колготки", "Высокие берцы"],
    tag: "КЛУБ",
  },
  {
    id: 20,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/ccd4ec77-aa63-4ae2-9d7c-2ed9054625ec.jpg",
    title: "Пуховик колорблок",
    event: "Зима / Прогулка",
    season: "Зима",
    style: "90-е стрит",
    items: ["Дутый пуховик колорблок", "Широкие джоггеры", "Ретро-кроссовки", "Снэпбэк"],
    tag: "СПОРТ",
  },
];

const allTags = ["ВСЕ", ...Array.from(new Set(looks.map((l) => l.tag)))];
const navItems = ["ОБРАЗЫ", "ГАРДЕРОБ"];

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
  { id: 1, name: "Чёрный блейзер", category: "Верх", color: "Чёрный", note: "Классика" },
  { id: 2, name: "Оверсайз худи", category: "Верх", color: "Серый", note: "Скейт-стиль" },
  { id: 3, name: "Карго-штаны", category: "Низ", color: "Чёрный", note: "Много карманов" },
  { id: 4, name: "Бомбер деним", category: "Верхняя одежда", color: "Синий", note: "Лето/весна" },
  { id: 5, name: "Трековые брюки", category: "Низ", color: "Чёрный", note: "Каждый день" },
  { id: 6, name: "Белая oversized футболка", category: "Верх", color: "Белый", note: "База" },
];

const tickerText = "ГАРДЕРОБ НА КАЖДЫЙ ДЕНЬ • ТВОЙ СТИЛЬ — ТВОИ ПРАВИЛА • УЛИЦА ГОВОРИТ • НЕТ ФОРМЕ — ЕСТЬ ОБРАЗ • ";

export default function Index() {
  const [activeTag, setActiveTag] = useState("ВСЕ");
  const [activeNav, setActiveNav] = useState("ОБРАЗЫ");
  const [selectedLook, setSelectedLook] = useState<(typeof looks)[0] | null>(null);
  const [savedLooks, setSavedLooks] = useState<number[]>([]);

  const [wardrobe, setWardrobe] = useState<WardrobeItem[]>(defaultWardrobe);
  const [wardrobeFilter, setWardrobeFilter] = useState("Все");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<WardrobeItem | null>(null);
  const [newItem, setNewItem] = useState({ name: "", category: "Верх", color: "Чёрный", note: "" });
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  const filtered = activeTag === "ВСЕ" ? looks : looks.filter((l) => l.tag === activeTag);
  const wardrobeCategories = ["Все", ...categoryOptions];
  const filteredWardrobe = wardrobeFilter === "Все" ? wardrobe : wardrobe.filter((w) => w.category === wardrobeFilter);

  function handleSaveLook(id: number) {
    setSavedLooks((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    setSelectedLook(null);
  }
  function handleAddItem() {
    if (!newItem.name.trim()) return;
    setWardrobe((prev) => [...prev, { ...newItem, id: Date.now() }]);
    setNewItem({ name: "", category: "Верх", color: "Чёрный", note: "" });
    setShowAddForm(false);
  }
  function handleEditSave() {
    if (!editingItem?.name.trim()) return;
    setWardrobe((prev) => prev.map((w) => (w.id === editingItem.id ? editingItem : w)));
    setEditingItem(null);
  }
  function handleDelete(id: number) {
    setWardrobe((prev) => prev.filter((w) => w.id !== id));
    setDeleteConfirm(null);
  }

  const catIcon: Record<string, string> = {
    "Верх": "👕", "Низ": "👖", "Платье": "👗",
    "Верхняя одежда": "🧥", "Обувь": "👟", "Аксессуар": "🔗",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14">
          <span className="font-bebas text-xl md:text-2xl tracking-widest text-neon leading-none">
            ГАРДЕРОБ НА КАЖДЫЙ ДЕНЬ
          </span>
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`nav-link font-oswald text-xs tracking-[0.25em] transition-colors ${
                  activeNav === item ? "text-neon active" : "text-white/40 hover:text-white"
                }`}
              >
                {item}
                {item === "ГАРДЕРОБ" && (
                  <span className="ml-1 text-white/20">({wardrobe.length})</span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* TICKER */}
      <div className="fixed top-14 left-0 right-0 z-40 bg-neon overflow-hidden h-7 flex items-center">
        <div className="animate-ticker flex whitespace-nowrap">
          <span className="font-bebas text-sm tracking-widest text-black">{tickerText}{tickerText}{tickerText}</span>
        </div>
      </div>

      {/* ── ОБРАЗЫ ── */}
      {activeNav === "ОБРАЗЫ" && (
        <div className="pt-[84px]">
          {/* HERO */}
          <section className="px-4 md:px-8 max-w-7xl mx-auto pt-10 pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="animate-fade-in-up">
                <p className="font-oswald text-xs tracking-[0.4em] text-white/30 mb-2">// КОЛЛЕКЦИЯ {new Date().getFullYear()}</p>
                <h1 className="font-bebas text-[clamp(3.5rem,13vw,10rem)] leading-none">
                  СТИЛЬ<br />
                  <span className="text-neon">БЕЗ</span> ПРАВИЛ
                </h1>
              </div>
              <div className="animate-fade-in-up delay-200 md:text-right">
                <p className="font-golos text-sm text-white/40 leading-relaxed mb-4 max-w-xs">
                  {looks.length} образов для тех, кто одевается по-своему.
                </p>
                <div className="flex md:justify-end gap-8">
                  {[["#" + looks.length, "образов"], [savedLooks.length > 0 ? "★" + savedLooks.length : "★0", "сохранено"]].map(([num, label]) => (
                    <div key={label}>
                      <p className="font-bebas text-4xl text-neon">{num}</p>
                      <p className="font-oswald text-[9px] tracking-widest uppercase text-white/30">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FILTERS */}
          <section className="px-4 md:px-8 max-w-7xl mx-auto mb-5">
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`font-oswald text-xs tracking-[0.25em] px-4 py-1.5 border transition-all duration-150 ${
                    activeTag === tag
                      ? "bg-neon text-black border-neon"
                      : "text-white/40 border-white/15 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>

          {/* GALLERY */}
          <section className="px-4 md:px-8 max-w-7xl mx-auto pb-20">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
              {filtered.map((look, i) => (
                <div
                  key={look.id}
                  className="break-inside-avoid look-card cursor-pointer group relative border border-white/8 bg-white/3"
                  onClick={() => setSelectedLook(look)}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: i % 5 === 0 ? "4/5" : i % 5 === 2 ? "1/1" : "2/3" }}
                  >
                    <img
                      src={look.image}
                      alt={look.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: "grayscale(15%) contrast(1.05)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-2 left-2 font-oswald text-[9px] tracking-[0.2em] bg-neon text-black px-2 py-0.5">
                      {look.tag}
                    </span>
                    {savedLooks.includes(look.id) && (
                      <span className="absolute top-2 right-2 w-6 h-6 bg-neon flex items-center justify-center">
                        <Icon name="Bookmark" size={10} className="text-black fill-black" />
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-oswald text-[9px] tracking-widest text-white/50 uppercase">{look.event}</p>
                      <p className="font-bebas text-lg text-white leading-tight">{look.title}</p>
                    </div>
                  </div>
                  <div className="px-3 py-2 border-t border-white/8">
                    <p className="font-bebas text-base leading-tight">{look.title}</p>
                    <p className="font-oswald text-[9px] tracking-widest uppercase text-white/25 mt-0.5">{look.style}</p>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-24">
                <p className="font-bebas text-5xl text-white/15">НИЧЕГО НЕТ</p>
              </div>
            )}
          </section>
        </div>
      )}

      {/* ── ГАРДЕРОБ ── */}
      {activeNav === "ГАРДЕРОБ" && (
        <div className="pt-[84px]">
          <section className="px-4 md:px-8 max-w-7xl mx-auto pt-10 pb-20 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="font-oswald text-xs tracking-[0.4em] text-white/30 mb-2">// МОИ ВЕЩИ</p>
                <h2 className="font-bebas text-[clamp(3rem,10vw,8rem)] leading-none">ГАРДЕРОБ</h2>
              </div>
              <button
                onClick={() => { setShowAddForm(true); setEditingItem(null); }}
                className="self-start flex items-center gap-2 bg-neon text-black px-5 py-2.5 font-oswald text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
              >
                <Icon name="Plus" size={14} />
                Добавить вещь
              </button>
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
              {categoryOptions.map((cat) => {
                const count = wardrobe.filter((w) => w.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setWardrobeFilter(wardrobeFilter === cat ? "Все" : cat)}
                    className={`border p-3 text-left transition-all ${
                      wardrobeFilter === cat ? "border-neon bg-neon/10" : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <p className="text-lg mb-1">{catIcon[cat]}</p>
                    <p className="font-bebas text-2xl text-neon">{count}</p>
                    <p className="font-oswald text-[9px] tracking-widest uppercase text-white/25 mt-0.5 leading-tight">{cat}</p>
                  </button>
                );
              })}
            </div>

            {/* filter pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {wardrobeCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setWardrobeFilter(c)}
                  className={`font-oswald text-xs tracking-[0.2em] px-3 py-1 border transition-all ${
                    wardrobeFilter === c ? "bg-neon text-black border-neon" : "text-white/40 border-white/15 hover:text-white hover:border-white/30"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* items grid */}
            {filteredWardrobe.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-white/10">
                <p className="font-bebas text-4xl text-white/15">ПУСТО</p>
                <p className="font-oswald text-xs tracking-widest text-white/20 mt-2 uppercase">Добавь первую вещь</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredWardrobe.map((item) => (
                  <div key={item.id} className="bg-white/4 border border-white/8 p-4 group look-card relative">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl">{catIcon[item.category] ?? "👔"}</span>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setEditingItem(item)} className="w-7 h-7 border border-white/10 flex items-center justify-center hover:border-neon hover:text-neon transition-all">
                          <Icon name="Pencil" size={11} />
                        </button>
                        <button onClick={() => setDeleteConfirm(item.id)} className="w-7 h-7 border border-white/10 flex items-center justify-center hover:border-red-500 hover:text-red-400 transition-all">
                          <Icon name="Trash2" size={11} />
                        </button>
                      </div>
                    </div>
                    <h3 className="font-bebas text-xl leading-tight mb-2">{item.name}</h3>
                    <div className="flex gap-2 flex-wrap mb-2">
                      <span className="font-oswald text-[9px] tracking-widest uppercase bg-neon text-black px-2 py-0.5">{item.category}</span>
                      <span className="font-oswald text-[9px] tracking-widest uppercase text-white/40 border border-white/10 px-2 py-0.5">{item.color}</span>
                    </div>
                    {item.note && (
                      <p className="font-golos text-xs text-white/30 border-t border-white/8 pt-2 mt-2">{item.note}</p>
                    )}
                    {deleteConfirm === item.id && (
                      <div className="absolute inset-0 bg-background/96 flex flex-col items-center justify-center gap-3 p-4">
                        <p className="font-oswald text-sm text-center uppercase tracking-wider">Удалить «{item.name}»?</p>
                        <div className="flex gap-2">
                          <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-4 py-1.5 font-oswald text-xs tracking-widest uppercase">Удалить</button>
                          <button onClick={() => setDeleteConfirm(null)} className="border border-white/20 text-white/50 px-4 py-1.5 font-oswald text-xs tracking-widest uppercase">Отмена</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* saved looks */}
            {savedLooks.length > 0 && (
              <div className="mt-14">
                <p className="font-oswald text-xs tracking-[0.3em] uppercase text-white/30 mb-5 flex items-center gap-3">
                  <span className="text-neon">▶</span> Сохранённые образы ({savedLooks.length})
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {looks.filter((l) => savedLooks.includes(l.id)).map((look) => (
                    <div key={look.id} className="look-card cursor-pointer group" onClick={() => setSelectedLook(look)}>
                      <div className="aspect-[2/3] overflow-hidden relative">
                        <img src={look.image} alt={look.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-2 left-2 font-oswald text-[9px] tracking-widest bg-neon text-black px-2 py-0.5">{look.tag}</span>
                      </div>
                      <div className="p-2 bg-white/5 border border-t-0 border-white/8">
                        <p className="font-bebas text-base">{look.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {/* MODAL: Look */}
      {selectedLook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in" onClick={() => setSelectedLook(null)}>
          <div className="bg-background border border-white/10 max-w-xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedLook.image} alt={selectedLook.title} className="w-full object-cover" style={{ maxHeight: "55vh" }} />
              <button onClick={() => setSelectedLook(null)} className="absolute top-3 right-3 w-8 h-8 bg-background border border-white/20 flex items-center justify-center hover:border-neon hover:text-neon transition-all">
                <Icon name="X" size={14} />
              </button>
              <span className="absolute top-3 left-3 font-oswald text-[10px] tracking-widest bg-neon text-black px-2.5 py-1">{selectedLook.tag}</span>
            </div>
            <div className="p-6">
              <h2 className="font-bebas text-4xl leading-tight">{selectedLook.title}</h2>
              <p className="font-oswald text-xs tracking-widest uppercase text-white/30 mb-5">{selectedLook.event} · {selectedLook.season}</p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="border border-white/8 p-3">
                  <p className="font-oswald text-[9px] tracking-widest uppercase text-white/25 mb-1">Стиль</p>
                  <p className="font-oswald text-sm">{selectedLook.style}</p>
                </div>
                <div className="border border-white/8 p-3">
                  <p className="font-oswald text-[9px] tracking-widest uppercase text-white/25 mb-1">Сезон</p>
                  <p className="font-oswald text-sm">{selectedLook.season}</p>
                </div>
              </div>
              <div className="mb-6">
                <p className="font-oswald text-[9px] tracking-[0.3em] uppercase text-neon mb-3">▶ СОСТАВ ОБРАЗА</p>
                <ul className="space-y-1.5">
                  {selectedLook.items.map((item) => (
                    <li key={item} className="font-golos text-sm text-white/55 flex items-center gap-3">
                      <span className="w-4 h-px bg-neon/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleSaveLook(selectedLook.id)}
                className={`w-full py-3 font-oswald text-xs tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-2 ${
                  savedLooks.includes(selectedLook.id)
                    ? "bg-white/8 text-white border border-white/20"
                    : "bg-neon text-black hover:opacity-90"
                }`}
              >
                <Icon name={savedLooks.includes(selectedLook.id) ? "BookmarkCheck" : "Bookmark"} size={14} />
                {savedLooks.includes(selectedLook.id) ? "Сохранено" : "Сохранить в гардероб"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Add/Edit */}
      {(showAddForm || editingItem) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in" onClick={() => { setShowAddForm(false); setEditingItem(null); }}>
          <div className="bg-background border border-white/10 max-w-md w-full animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bebas text-2xl">{editingItem ? "ИЗМЕНИТЬ ВЕЩЬ" : "НОВАЯ ВЕЩЬ"}</h3>
                <button onClick={() => { setShowAddForm(false); setEditingItem(null); }} className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-neon hover:text-neon transition-all">
                  <Icon name="X" size={14} />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="font-oswald text-[9px] tracking-widest uppercase text-white/30 block mb-1.5">Название*</label>
                  <input
                    type="text"
                    placeholder="Оверсайз худи Supreme"
                    value={editingItem ? editingItem.name : newItem.name}
                    onChange={(e) => editingItem ? setEditingItem({ ...editingItem, name: e.target.value }) : setNewItem({ ...newItem, name: e.target.value })}
                    className="w-full border border-white/10 bg-transparent px-4 py-2.5 font-golos text-sm text-white placeholder-white/20 focus:outline-none focus:border-neon transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-oswald text-[9px] tracking-widest uppercase text-white/30 block mb-1.5">Категория</label>
                    <select
                      value={editingItem ? editingItem.category : newItem.category}
                      onChange={(e) => editingItem ? setEditingItem({ ...editingItem, category: e.target.value }) : setNewItem({ ...newItem, category: e.target.value })}
                      className="w-full border border-white/10 bg-zinc-900 px-4 py-2.5 font-golos text-sm text-white focus:outline-none focus:border-neon transition-colors"
                    >
                      {categoryOptions.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-oswald text-[9px] tracking-widest uppercase text-white/30 block mb-1.5">Цвет</label>
                    <select
                      value={editingItem ? editingItem.color : newItem.color}
                      onChange={(e) => editingItem ? setEditingItem({ ...editingItem, color: e.target.value }) : setNewItem({ ...newItem, color: e.target.value })}
                      className="w-full border border-white/10 bg-zinc-900 px-4 py-2.5 font-golos text-sm text-white focus:outline-none focus:border-neon transition-colors"
                    >
                      {colorOptions.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-oswald text-[9px] tracking-widest uppercase text-white/30 block mb-1.5">Заметка</label>
                  <textarea
                    rows={2}
                    placeholder="С чем носить..."
                    value={editingItem ? editingItem.note : newItem.note}
                    onChange={(e) => editingItem ? setEditingItem({ ...editingItem, note: e.target.value }) : setNewItem({ ...newItem, note: e.target.value })}
                    className="w-full border border-white/10 bg-transparent px-4 py-2.5 font-golos text-sm text-white placeholder-white/20 focus:outline-none focus:border-neon transition-colors resize-none"
                  />
                </div>
                <button
                  onClick={editingItem ? handleEditSave : handleAddItem}
                  className="w-full bg-neon text-black py-3 font-oswald text-xs tracking-[0.3em] uppercase hover:opacity-90 transition-opacity"
                >
                  {editingItem ? "Сохранить" : "Добавить в гардероб"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/8 px-4 md:px-8 max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-bebas text-lg tracking-widest text-neon">ГАРДЕРОБ НА КАЖДЫЙ ДЕНЬ</span>
        <p className="font-oswald text-xs tracking-widest uppercase text-white/20">© {new Date().getFullYear()} · СТИЛЬ БЕЗ ПРАВИЛ</p>
        <div className="flex gap-5">
          {["TG", "VK", "IG"].map((s) => (
            <button key={s} className="font-bebas text-sm text-white/20 hover:text-neon transition-colors">{s}</button>
          ))}
        </div>
      </footer>
    </div>
  );
}
