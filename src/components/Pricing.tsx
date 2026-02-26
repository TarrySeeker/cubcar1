import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

interface PriceItem {
  name: string;
  price: string;
}

interface PriceCategory {
  title: string;
  items: PriceItem[];
}

const priceCategories: PriceCategory[] = [
  {
    title: "Фильтры и жидкости",
    items: [
      { name: "Замена масла и масляного фильтра двигателя", price: "от 690 ₽" },
      { name: "Замена воздушного фильтра", price: "от 340 ₽" },
      { name: "Замена салонного фильтра", price: "от 340 ₽" },
      { name: "Замена топливного фильтра", price: "от 1 000 ₽" },
      { name: "Замена тормозной жидкости", price: "от 1 100 ₽" },
      { name: "Замена охлаждающей жидкости", price: "от 1 000 ₽" },
      { name: "Замена ОЖ с промывкой системы", price: "от 6 000 ₽" },
      { name: "Замена жидкости ГУР", price: "от 1 100 ₽" },
      { name: "Замена масла в АКПП без снятия поддона", price: "от 900 ₽" },
      { name: "Замена масла в АКПП со снятием поддона", price: "от 3 000 ₽" },
      { name: "Замена масла в МКПП", price: "от 800 ₽" },
      { name: "Замена масла в переднем редукторе", price: "от 400 ₽" },
      { name: "Замена масла в заднем редукторе", price: "от 400 ₽" },
      { name: "Замена масла раздаточной коробки", price: "от 500 ₽" },
      { name: "Замена жидкости вариатора без снятия поддона", price: "от 900 ₽" },
      { name: "Замена масла в вариаторе со снятием поддона", price: "от 3 000 ₽" },
    ],
  },
  {
    title: "Ходовая часть",
    items: [
      { name: "Диагностика ходовой части", price: "от 730 ₽" },
      { name: "Компьютерная диагностика", price: "от 1 000 ₽" },
      { name: "Замена передних амортизаторов", price: "от 4 400 ₽" },
      { name: "Замена задних амортизаторов", price: "от 3 500 ₽" },
      { name: "Замена пружин/рессоры подвески", price: "от 4 400 ₽" },
      { name: "Замена пыльника/отбойника амортизатора", price: "от 4 400 ₽" },
      { name: "Замена подшипника ступицы", price: "от 2 500 ₽" },
      { name: "Замена ШРУСа приводного вала", price: "от 3 000 ₽" },
      { name: "Замена пыльника ШРУСа (внутр./наружн.)", price: "от 2 000 ₽" },
      { name: "Замена передних колодок", price: "от 1 000 ₽" },
      { name: "Замена задних колодок", price: "от 1 000 ₽" },
      { name: "Замена колодок (электронный ручник)", price: "от 1 700 ₽" },
      { name: "Замена тормозных дисков", price: "от 2 000 ₽" },
      { name: "Развал-схождение", price: "от 2 000 ₽" },
    ],
  },
  {
    title: "Рулевое управление",
    items: [
      { name: "Замена пыльника рулевой рейки", price: "от 3 000 ₽" },
      { name: "Замена рулевой тяги (правой/левой)", price: "от 3 000 ₽" },
    ],
  },
  {
    title: "Тормозная система",
    items: [
      { name: "Диагностика тормозной системы", price: "от 730 ₽" },
      { name: "Замена тормозной жидкости", price: "от 900 ₽" },
      { name: "Замена тормозных колодок (передняя ось)", price: "от 2 500 ₽" },
      { name: "Замена тормозных колодок (задняя ось)", price: "от 2 500 ₽" },
      { name: "Замена задних барабанных колодок", price: "от 3 000 ₽" },
      { name: "Замена тормозного суппорта", price: "от 1 750 ₽" },
      { name: "Замена тормозного шланга", price: "от 800 ₽" },
    ],
  },
  {
    title: "Кондиционирование",
    items: [
      { name: "Диагностика системы кондиционирования", price: "от 1 750 ₽" },
      { name: "Диагностика системы отопления", price: "от 1 750 ₽" },
      { name: "Заправка автокондиционеров", price: "от 1 750 ₽" },
      { name: "Дезинфекция системы кондиционирования", price: "от 3 000 ₽" },
    ],
  },
  {
    title: "Двигатель и стекло",
    items: [
      { name: "Диагностика двигателя", price: "от 1 500 ₽" },
      { name: "Проверка углов установки колёс", price: "от 900 ₽" },
      { name: "Регулировка углов установки колёс", price: "от 2 000 ₽" },
      { name: "Замена лобового стекла", price: "от 3 000 ₽" },
      { name: "Замена боковых стёкол", price: "от 2 000 ₽" },
      { name: "Замена заднего стекла", price: "от 3 000 ₽" },
    ],
  },
];

function CategoryBlock({ category }: { category: PriceCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const preview = category.items.slice(0, 3);
  const rest = category.items.slice(3);

  return (
    <div className="bg-zinc-900 border border-zinc-800 overflow-hidden">
      <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900">
        <h3 className="text-white font-bold uppercase tracking-wider text-sm">
          {category.title}
          <span className="text-zinc-600 ml-2 text-xs font-normal normal-case">
            ({category.items.length})
          </span>
        </h3>
      </div>
      <div>
        {preview.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center px-6 py-4 border-b border-zinc-800/50 last:border-0 hover:bg-zinc-800/50 transition-colors"
          >
            <span className="text-zinc-300 text-sm pr-4">{item.name}</span>
            <span className="text-white font-bold text-sm whitespace-nowrap">
              {item.price}
            </span>
          </div>
        ))}
        {isOpen &&
          rest.map((item, idx) => (
            <div
              key={idx + 3}
              className="flex justify-between items-center px-6 py-4 border-b border-zinc-800/50 last:border-0 hover:bg-zinc-800/50 transition-colors"
            >
              <span className="text-zinc-300 text-sm pr-4">{item.name}</span>
              <span className="text-white font-bold text-sm whitespace-nowrap">
                {item.price}
              </span>
            </div>
          ))}
      </div>
      {rest.length > 0 && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-3 text-zinc-500 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 border-t border-zinc-800/50"
        >
          {isOpen ? "Свернуть" : `Ещё ${rest.length} услуг`}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Прайс-<span className="text-red-600">лист</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-zinc-500 text-sm">
            Обновлено 14 августа 2025 · Цены не являются публичной офертой
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-1">
          {prices.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-6 border-b border-zinc-800 last:border-0 hover:bg-zinc-800/50 transition-colors group"
            >
              <span className="text-zinc-300 font-medium md:text-lg group-hover:text-white transition-colors">
                {item.name}
              </span>
              <div className="flex items-center gap-4">
                <span className="text-white font-bold md:text-xl tracking-wide">
                  {item.price}
                </span>
              </div>
            </div>
        <div className="grid md:grid-cols-2 gap-6">
          {priceCategories.map((cat, idx) => (
            <CategoryBlock key={idx} category={cat} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-zinc-500 text-sm mb-6">
            * Цена может быть изменена в зависимости от типа кузова вашего авто.
          </p>
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-wider hover:text-red-400 transition-colors"
          >
            Узнать точную стоимость <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
