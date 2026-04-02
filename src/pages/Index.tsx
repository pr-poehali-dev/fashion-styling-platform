import { useState } from "react";
import Icon from "@/components/ui/icon";

const looks = [
  // ── Классика / Элегантность ──
  {
    id: 1,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/8f207591-bab6-47c3-ada7-2995d0489d5a.jpg",
    title: "Чёрный монохром",
    event: "Деловая встреча",
    season: "Весна / Осень",
    style: "Минимализм",
    items: ["Приталенный блейзер", "Широкие брюки", "Туфли с острым носом"],
    tag: "КЛАССИКА",
    emoji: "🖤",
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
    emoji: "☕",
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
    emoji: "✨",
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
    emoji: "💼",
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
    emoji: "💫",
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
    emoji: "🤍",
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
    emoji: "🌾",
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
    emoji: "🖤",
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
    emoji: "🩶",
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
    emoji: "🌼",
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
    emoji: "🍂",
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
    emoji: "🕯️",
  },
  // ── Streetwear ──
  {
    id: 13,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/9dbfc990-7b4e-459d-bebe-ffac324094da.jpg",
    title: "Граффити-худи",
    event: "Скейт / Прогулка",
    season: "Весна / Осень",
    style: "Скейт культура",
    items: ["Оверсайз худи с графикой", "Широкие карго-штаны", "Кроссовки на платформе", "Кепка"],
    tag: "СТРИТ",
    emoji: "🛹",
  },
  {
    id: 14,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/7fdc2658-d4c0-4b79-81ae-970ec41bb0a0.jpg",
    title: "Бомбер + шорты",
    event: "Вечеринка / Клуб",
    season: "Лето",
    style: "Токио-стрит",
    items: ["Оверсайз бомбер", "Байкерские шорты", "Платформа", "Цепной пояс"],
    tag: "СТРИТ",
    emoji: "⚡",
  },
  {
    id: 15,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/433d7721-82c9-4bb7-87b1-f8ab5a16dfa2.jpg",
    title: "Деним с патчами",
    event: "Прогулка / Встреча",
    season: "Весна / Осень",
    style: "90-е хип-хоп",
    items: ["Оверсайз джинсовая куртка с нашивками", "Широкие джинсы", "Белая футболка"],
    tag: "СТРИТ",
    emoji: "🎵",
  },
  {
    id: 16,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/2d8532f3-7792-4c98-8413-eb6d2a9517a8.jpg",
    title: "Тактический вест",
    event: "Повседневный",
    season: "Всесезонный",
    style: "Тактик урбан",
    items: ["Тактический жилет", "Белый лонгслив", "Широкие карго", "Берцы"],
    tag: "СТРИТ",
    emoji: "🎯",
  },
  {
    id: 17,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/a5504c02-18e4-445c-8527-003200920336.jpg",
    title: "Кожа + цепи",
    event: "Вечер / Клуб",
    season: "Осень / Зима",
    style: "Гранж стрит",
    items: ["Укороченная косуха", "Широкие джинсы с цепями", "Платформа"],
    tag: "СТРИТ",
    emoji: "⛓️",
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
    emoji: "🏃",
  },
  {
    id: 19,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/4a5b6687-76ad-4771-8f11-60ee4654e91c.jpg",
    title: "Панк-сетка",
    event: "Концерт / Вечеринка",
    season: "Всесезонный",
    style: "Панк-2000-е",
    items: ["Оверсайз футболка группы", "Мини-юбка в клетку", "Рыбацкие колготки", "Берцы"],
    tag: "СТРИТ",
    emoji: "🎸",
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
    emoji: "🌨️",
  },
  // ── Soft Girl ──
  {
    id: 21,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/f34fc90b-22c3-4a87-b70d-a2c1c54473f0.jpg",
    title: "Клубничный кардиган",
    event: "Прогулка / Свидание",
    season: "Весна / Лето",
    style: "Kawaii",
    items: ["Пышный розовый кардиган", "Юбка с принтом клубники", "Белые гольфы", "Мэри-джейны", "Клипсы-сердечки"],
    tag: "SOFT GIRL",
    emoji: "🍓",
  },
  {
    id: 22,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/a7de8779-2e4a-498a-9712-8f987119d00e.jpg",
    title: "Лиловый оверсайз",
    event: "Кампус / Кофе",
    season: "Осень",
    style: "Cute casual",
    items: ["Оверсайз худи лилового цвета", "Розовая юбка в клетку", "Белые платформы", "Жемчужное колье", "Клипсы-бабочки"],
    tag: "SOFT GIRL",
    emoji: "🦋",
  },
  {
    id: 23,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/38528a26-54e9-4e9d-ad9b-e58d7e222b60.jpg",
    title: "Атласный романтик",
    event: "Свидание / Вечер",
    season: "Всесезонный",
    style: "Cottagecore",
    items: ["Розовое атласное платье-комбинация", "Кружевной кардиган поверх", "Белые балетки", "Жемчужные серьги"],
    tag: "SOFT GIRL",
    emoji: "🌷",
  },
  {
    id: 24,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/5fd7a4e8-d51e-40f9-a618-7bf8e0800ca7.jpg",
    title: "Y2K Вишня",
    event: "Прогулка / Фото",
    season: "Лето",
    style: "Y2K Cute",
    items: ["Вязаный свитер с вишнями", "Светлые мом-джинсы", "Розовые кроссовки", "Розовая сумка-тоут", "Сердечко-очки"],
    tag: "SOFT GIRL",
    emoji: "🍒",
  },
  {
    id: 25,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/8a119bc2-6ebb-4c93-a523-5d94a510de69.jpg",
    title: "Бэбидолл в цветах",
    event: "Свидание / Пикник",
    season: "Лето",
    style: "Cottagecore",
    items: ["Розовое платье бэбидолл с пышными рукавами", "Кружевная отделка", "Белые колготки", "Розовые мэри-джейны", "Цветы в волосах"],
    tag: "SOFT GIRL",
    emoji: "🌸",
  },
  {
    id: 26,
    image: "https://cdn.poehali.dev/projects/841346e5-20bd-4b12-a951-7351a699ab91/files/8dd7c0fb-905d-4dd8-8640-796b7075b706.jpg",
    title: "Розовый велюр",
    event: "Прогулка / Тусовка",
    season: "Весна / Осень",
    style: "Y2K Bratz",
    items: ["Розовый велюровый спортивный костюм", "Укороченный топ", "Мини-сумочка", "Платформа", "Клипсы-бабочки"],
    tag: "SOFT GIRL",
    emoji: "💖",
  },
];

const allTags = ["ВСЕ", ...Array.from(new Set(looks.map((l) => l.tag)))];
const navItems = ["Образы", "Гардероб"];

type WardrobeItem = {
  id: number;
  name: string;
  category: string;
  color: string;
  note: string;
};

const categoryOptions = ["Верх", "Низ", "Платье", "Верхняя одежда", "Обувь", "Аксессуар"];
const colorOptions = ["Розовый", "Белый", "Лиловый", "Бежевый", "Чёрный", "Серый", "Другой"];

const defaultWardrobe: WardrobeItem[] = [
  { id: 1, name: "Розовый кардиган", category: "Верх", color: "Розовый", note: "Пушистый, kawaii ✨" },
  { id: 2, name: "Белое платье-миди", category: "Платье", color: "Белый", note: "На свидание 🌷" },
  { id: 3, name: "Юбка в клетку", category: "Низ", color: "Розовый", note: "С кроссовками или балетками" },
  { id: 4, name: "Жемчужное колье", category: "Аксессуар", color: "Белый", note: "К любому образу" },
  { id: 5, name: "Оверсайз худи лиловый", category: "Верх", color: "Лиловый", note: "Осень / зима" },
  { id: 6, name: "Белые гольфы", category: "Обувь", color: "Белый", note: "Soft girl must have" },
];

const tickerText = "Гардероб на каждый день 🌸 мой стиль — моё настроение 🎀 soft girl 🍓 cottagecore 🌷 y2k 💖 каждый день красиво 🦋 ";

export default function Index() {
  const [activeTag, setActiveTag] = useState("ВСЕ");
  const [activeNav, setActiveNav] = useState("Образы");
  const [selectedLook, setSelectedLook] = useState<(typeof looks)[0] | null>(null);
  const [savedLooks, setSavedLooks] = useState<number[]>([]);

  const [wardrobe, setWardrobe] = useState<WardrobeItem[]>(defaultWardrobe);
  const [wardrobeFilter, setWardrobeFilter] = useState("Все");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<WardrobeItem | null>(null);
  const [newItem, setNewItem] = useState({ name: "", category: "Верх", color: "Розовый", note: "" });
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
    setNewItem({ name: "", category: "Верх", color: "Розовый", note: "" });
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
    "Верх": "👕", "Низ": "🩱", "Платье": "👗",
    "Верхняя одежда": "🧥", "Обувь": "👟", "Аксессуар": "💎",
  };

  const tagColors: Record<string, string> = {
    "SOFT GIRL": "bg-pink-400 text-white",
    "СТРИТ": "bg-foreground text-background",
    "СПОРТ": "bg-foreground text-background",
    "ВЕЧЕР": "bg-accent text-white",
    "ОФИС": "bg-secondary text-foreground",
    default: "bg-secondary text-foreground",
  };
  function tagClass(tag: string) {
    return tagColors[tag] ?? tagColors.default;
  }

  return (
    <div className="min-h-screen bg-background text-foreground dot-bg">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16">
          <span className="font-pacifico text-xl text-primary leading-none">
            Гардероб на каждый день
          </span>
          <nav className="flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`nav-link font-nunito text-sm font-600 transition-colors ${
                  activeNav === item ? "text-primary active" : "text-foreground/45 hover:text-foreground"
                }`}
              >
                {item}
                {item === "Гардероб" && (
                  <span className="ml-1 text-foreground/30 text-xs">({wardrobe.length})</span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* TICKER */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-primary/90 overflow-hidden h-7 flex items-center">
        <div className="animate-ticker flex whitespace-nowrap">
          <span className="font-nunito text-xs font-semibold text-white tracking-wide px-4">
            {tickerText}{tickerText}
          </span>
        </div>
      </div>

      {/* ── ОБРАЗЫ ── */}
      {activeNav === "Образы" && (
        <div className="pt-[88px]">

          {/* HERO */}
          <section className="px-5 md:px-10 max-w-7xl mx-auto pt-10 pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="animate-fade-in-up">
                <p className="font-nunito text-xs tracking-widest uppercase text-primary/60 mb-3">
                  🌸 твой стиль — твоё настроение
                </p>
                <h1 className="font-playfair text-[clamp(3rem,11vw,8.5rem)] leading-none font-light">
                  Одевайся<br />
                  <em className="italic text-primary">красиво</em>
                </h1>
              </div>
              <div className="animate-fade-in-up delay-200 max-w-sm">
                <p className="font-nunito text-sm text-foreground/50 leading-relaxed mb-6">
                  {looks.length} образов — от нежного soft girl до уличного стрита. Сохраняй любимые в гардероб! 💖
                </p>
                <div className="flex gap-8">
                  {[
                    { num: looks.length, label: "образов", emoji: "👗" },
                    { num: looks.filter(l => l.tag === "SOFT GIRL").length, label: "soft girl", emoji: "🌸" },
                    { num: savedLooks.length, label: "сохранено", emoji: "🎀" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-playfair text-3xl text-primary">{s.emoji}</p>
                      <p className="font-nunito font-bold text-lg leading-tight">{s.num}</p>
                      <p className="font-nunito text-[10px] uppercase tracking-widest text-foreground/35">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FILTERS */}
          <section className="px-5 md:px-10 max-w-7xl mx-auto mb-6">
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`font-nunito text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 ${
                    activeTag === tag
                      ? "bg-primary text-white border-primary shadow-sm shadow-primary/30"
                      : "bg-card text-foreground/50 border-border hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {tag}
                  {tag === "SOFT GIRL" && " 🌸"}
                  {tag === "СТРИТ" && " 🛹"}
                  {tag === "СПОРТ" && " ⚡"}
                </button>
              ))}
            </div>
          </section>

          {/* GALLERY */}
          <section className="px-5 md:px-10 max-w-7xl mx-auto pb-20">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {filtered.map((look, i) => (
                <div
                  key={look.id}
                  className="break-inside-avoid look-card cursor-pointer group relative bg-card border border-border rounded-2xl overflow-hidden"
                  onClick={() => setSelectedLook(look)}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: i % 5 === 0 ? "4/5" : i % 5 === 2 ? "1/1" : "2/3" }}
                  >
                    <img
                      src={look.image}
                      alt={look.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                    <span className={`absolute top-2.5 left-2.5 font-nunito text-[9px] font-bold tracking-wide px-2.5 py-1 rounded-full ${tagClass(look.tag)}`}>
                      {look.tag}
                    </span>
                    <span className="absolute top-2.5 right-2.5 text-base">{look.emoji}</span>
                    {savedLooks.includes(look.id) && (
                      <span className="absolute bottom-2.5 right-2.5 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                        <Icon name="Heart" size={13} className="text-primary fill-primary" />
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-playfair text-white text-base font-medium leading-tight">{look.title}</p>
                      <p className="font-nunito text-white/70 text-[10px] mt-0.5">{look.event}</p>
                    </div>
                  </div>
                  <div className="px-3 py-2.5">
                    <p className="font-playfair text-base font-medium leading-tight">{look.title}</p>
                    <p className="font-nunito text-[10px] text-foreground/40 mt-0.5 tracking-wide">{look.style}</p>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-24">
                <p className="text-4xl mb-3">🌸</p>
                <p className="font-playfair text-2xl text-foreground/30">Образов не найдено</p>
              </div>
            )}
          </section>
        </div>
      )}

      {/* ── ГАРДЕРОБ ── */}
      {activeNav === "Гардероб" && (
        <div className="pt-[88px]">
          <section className="px-5 md:px-10 max-w-7xl mx-auto pt-10 pb-20 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="font-nunito text-xs tracking-widest uppercase text-primary/60 mb-3">💗 мои вещи</p>
                <h2 className="font-playfair text-[clamp(3rem,10vw,7rem)] leading-none font-light">Гардероб</h2>
              </div>
              <button
                onClick={() => { setShowAddForm(true); setEditingItem(null); }}
                className="self-start flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-nunito text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-primary/25"
              >
                <Icon name="Plus" size={15} />
                Добавить вещь
              </button>
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
              {categoryOptions.map((cat) => {
                const count = wardrobe.filter((w) => w.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setWardrobeFilter(wardrobeFilter === cat ? "Все" : cat)}
                    className={`border p-3 rounded-2xl text-left transition-all ${
                      wardrobeFilter === cat
                        ? "border-primary bg-primary/10 shadow-sm shadow-primary/20"
                        : "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <p className="text-xl mb-1">{catIcon[cat]}</p>
                    <p className="font-playfair text-2xl text-primary">{count}</p>
                    <p className="font-nunito text-[9px] tracking-wide uppercase text-foreground/35 mt-0.5 leading-tight">{cat}</p>
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
                  className={`font-nunito text-xs font-semibold px-4 py-1.5 rounded-full border transition-all ${
                    wardrobeFilter === c
                      ? "bg-primary text-white border-primary"
                      : "text-foreground/45 border-border hover:border-primary/50 hover:text-foreground bg-card"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* items */}
            {filteredWardrobe.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-primary/20 rounded-3xl">
                <p className="text-4xl mb-3">🛍️</p>
                <p className="font-playfair text-2xl text-foreground/30">Пока пусто</p>
                <p className="font-nunito text-xs text-foreground/30 mt-2">Добавь первую вещь! 🌸</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredWardrobe.map((item) => (
                  <div key={item.id} className="bg-card border border-border rounded-2xl p-4 group look-card relative overflow-hidden">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl">{catIcon[item.category] ?? "👔"}</span>
                      <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setEditingItem(item)} className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                          <Icon name="Pencil" size={11} />
                        </button>
                        <button onClick={() => setDeleteConfirm(item.id)} className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:border-destructive hover:text-destructive transition-all">
                          <Icon name="Trash2" size={11} />
                        </button>
                      </div>
                    </div>
                    <h3 className="font-playfair text-lg font-medium leading-tight mb-2">{item.name}</h3>
                    <div className="flex gap-2 flex-wrap mb-2">
                      <span className="font-nunito text-[9px] font-bold uppercase bg-primary text-white px-2.5 py-0.5 rounded-full">{item.category}</span>
                      <span className="font-nunito text-[9px] font-semibold uppercase text-foreground/45 border border-border px-2.5 py-0.5 rounded-full">{item.color}</span>
                    </div>
                    {item.note && (
                      <p className="font-nunito text-xs text-foreground/40 border-t border-border pt-2 mt-2">{item.note}</p>
                    )}
                    {deleteConfirm === item.id && (
                      <div className="absolute inset-0 bg-card/97 rounded-2xl flex flex-col items-center justify-center gap-3 p-4">
                        <p className="text-2xl">🥺</p>
                        <p className="font-nunito text-sm text-center font-medium">Удалить «{item.name}»?</p>
                        <div className="flex gap-2">
                          <button onClick={() => handleDelete(item.id)} className="bg-destructive text-white px-4 py-1.5 rounded-full font-nunito text-xs font-semibold">Удалить</button>
                          <button onClick={() => setDeleteConfirm(null)} className="border border-border text-foreground/60 px-4 py-1.5 rounded-full font-nunito text-xs font-semibold">Отмена</button>
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
                <p className="font-playfair text-xl text-primary mb-5 flex items-center gap-2">
                  🎀 Сохранённые образы <span className="font-nunito text-sm text-foreground/40">({savedLooks.length})</span>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {looks.filter((l) => savedLooks.includes(l.id)).map((look) => (
                    <div key={look.id} className="look-card cursor-pointer group rounded-2xl overflow-hidden border border-border bg-card" onClick={() => setSelectedLook(look)}>
                      <div className="aspect-[2/3] overflow-hidden relative">
                        <img src={look.image} alt={look.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className={`absolute top-2 left-2 font-nunito text-[9px] font-bold px-2 py-0.5 rounded-full ${tagClass(look.tag)}`}>{look.tag}</span>
                      </div>
                      <div className="p-3">
                        <p className="font-playfair text-sm font-medium">{look.title}</p>
                        <p className="text-sm">{look.emoji}</p>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 backdrop-blur-md p-4 animate-fade-in" onClick={() => setSelectedLook(null)}>
          <div className="bg-card border border-border rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-pop-in shadow-2xl shadow-primary/10" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedLook.image} alt={selectedLook.title} className="w-full object-cover rounded-t-3xl" style={{ maxHeight: "55vh" }} />
              <button onClick={() => setSelectedLook(null)} className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
                <Icon name="X" size={15} className="text-foreground" />
              </button>
              <span className={`absolute top-4 left-4 font-nunito text-[10px] font-bold px-3 py-1 rounded-full ${tagClass(selectedLook.tag)}`}>
                {selectedLook.tag}
              </span>
              <span className="absolute bottom-4 right-4 text-3xl">{selectedLook.emoji}</span>
            </div>
            <div className="p-6">
              <h2 className="font-playfair text-3xl font-medium leading-tight">{selectedLook.title}</h2>
              <p className="font-nunito text-sm text-foreground/40 mt-1 mb-5">{selectedLook.event} · {selectedLook.season}</p>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="border border-border rounded-xl p-3 bg-secondary/50">
                  <p className="font-nunito text-[9px] uppercase tracking-widest text-foreground/35 mb-1">Стиль</p>
                  <p className="font-nunito text-sm font-semibold">{selectedLook.style}</p>
                </div>
                <div className="border border-border rounded-xl p-3 bg-secondary/50">
                  <p className="font-nunito text-[9px] uppercase tracking-widest text-foreground/35 mb-1">Сезон</p>
                  <p className="font-nunito text-sm font-semibold">{selectedLook.season}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-nunito text-[9px] uppercase tracking-widest text-primary mb-3">🌸 Состав образа</p>
                <ul className="space-y-2">
                  {selectedLook.items.map((item) => (
                    <li key={item} className="font-nunito text-sm text-foreground/60 flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleSaveLook(selectedLook.id)}
                className={`w-full py-3.5 rounded-full font-nunito text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  savedLooks.includes(selectedLook.id)
                    ? "bg-secondary text-foreground border border-primary/30"
                    : "bg-primary text-white shadow-md shadow-primary/30 hover:opacity-90"
                }`}
              >
                <Icon name={savedLooks.includes(selectedLook.id) ? "HeartOff" : "Heart"} size={15} />
                {savedLooks.includes(selectedLook.id) ? "Убрать из гардероба" : "Сохранить в гардероб 💖"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Add/Edit */}
      {(showAddForm || editingItem) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 backdrop-blur-md p-4 animate-fade-in" onClick={() => { setShowAddForm(false); setEditingItem(null); }}>
          <div className="bg-card border border-border rounded-3xl max-w-md w-full animate-pop-in shadow-xl shadow-primary/10" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-playfair text-2xl">{editingItem ? "Изменить" : "Новая вещь 🌸"}</h3>
                <button onClick={() => { setShowAddForm(false); setEditingItem(null); }} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                  <Icon name="X" size={15} />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="font-nunito text-xs font-semibold text-foreground/50 block mb-1.5">Название*</label>
                  <input
                    type="text"
                    placeholder="Розовый кардиган с цветами"
                    value={editingItem ? editingItem.name : newItem.name}
                    onChange={(e) => editingItem ? setEditingItem({ ...editingItem, name: e.target.value }) : setNewItem({ ...newItem, name: e.target.value })}
                    className="w-full border border-border rounded-xl px-4 py-2.5 font-nunito text-sm bg-background focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-nunito text-xs font-semibold text-foreground/50 block mb-1.5">Категория</label>
                    <select
                      value={editingItem ? editingItem.category : newItem.category}
                      onChange={(e) => editingItem ? setEditingItem({ ...editingItem, category: e.target.value }) : setNewItem({ ...newItem, category: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-2.5 font-nunito text-sm bg-background focus:outline-none focus:border-primary transition-colors"
                    >
                      {categoryOptions.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-nunito text-xs font-semibold text-foreground/50 block mb-1.5">Цвет</label>
                    <select
                      value={editingItem ? editingItem.color : newItem.color}
                      onChange={(e) => editingItem ? setEditingItem({ ...editingItem, color: e.target.value }) : setNewItem({ ...newItem, color: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-2.5 font-nunito text-sm bg-background focus:outline-none focus:border-primary transition-colors"
                    >
                      {colorOptions.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-nunito text-xs font-semibold text-foreground/50 block mb-1.5">Заметка</label>
                  <textarea
                    rows={2}
                    placeholder="С чем носить, где купила..."
                    value={editingItem ? editingItem.note : newItem.note}
                    onChange={(e) => editingItem ? setEditingItem({ ...editingItem, note: e.target.value }) : setNewItem({ ...newItem, note: e.target.value })}
                    className="w-full border border-border rounded-xl px-4 py-2.5 font-nunito text-sm bg-background focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  onClick={editingItem ? handleEditSave : handleAddItem}
                  className="w-full bg-primary text-white py-3.5 rounded-full font-nunito text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-primary/25"
                >
                  {editingItem ? "Сохранить" : "Добавить в гардероб 💖"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-border px-5 md:px-10 max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-pacifico text-lg text-primary">Гардероб на каждый день</span>
        <p className="font-nunito text-xs text-foreground/30">🌸 {new Date().getFullYear()} · с любовью к стилю</p>
        <div className="flex gap-5">
          {[["TG", "💬"], ["VK", "💙"], ["IG", "📸"]].map(([s, e]) => (
            <button key={s} className="font-nunito text-xs text-foreground/30 hover:text-primary transition-colors">{e} {s}</button>
          ))}
        </div>
      </footer>
    </div>
  );
}
