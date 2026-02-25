import { ArrowRight } from "lucide-react";

const prices = [
  { name: "Шиномонтаж / ремонт шин", price: "от 200 ₽" },
  { name: "Сход-развал (3D)", price: "от 1000 ₽" },
  { name: "Обслуживание тормозной системы", price: "от 1000 ₽" },
  { name: "Компьютерная диагностика", price: "от 800 ₽" },
  { name: "Замена масла в двигателе", price: "от 600 ₽" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Прайс-<span className="text-red-600">лист</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
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
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-zinc-500 text-sm mb-6">
            * Цены указаны для ознакомления и могут меняться в зависимости от
            марки автомобиля и сложности работ.
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
