import { Package, Battery, Droplets, ShieldCheck } from "lucide-react";

const brands = [
  "Audi",
  "BMW",
  "Toyota",
  "Kia",
  "Hyundai",
  "Chery",
  "Haval",
  "Exeed",
  "OMODA",
];

export default function Store() {
  return (
    <section id="store" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Магазин <span className="text-red-600">Запчастей</span>
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-6"></div>
              <p className="text-zinc-400 text-lg">
                В наличии и под заказ оригинальные запчасти и качественные
                аналоги для большинства марок автомобилей.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Package className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">
                    Кузовные детали
                  </h4>
                  <p className="text-zinc-500 text-sm">
                    Бампера, крылья, капоты, оптика.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Droplets className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">
                    Масла и химия
                  </h4>
                  <p className="text-zinc-500 text-sm">
                    Моторные масла, антифризы, смазки.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Battery className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">
                    Аккумуляторы
                  </h4>
                  <p className="text-zinc-500 text-sm">
                    Новые АКБ с приемом старых.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">
                    Оригиналы
                  </h4>
                  <p className="text-zinc-500 text-sm">
                    Гарантия на все запчасти.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-4 text-sm text-zinc-500">
                Обслуживаем марки:
              </h4>
              <div className="flex flex-wrap gap-3">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm font-bold uppercase tracking-wider"
                  >
                    {brand}
                  </span>
                ))}
                <span className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-500 text-sm font-bold uppercase tracking-wider">
                  И другие
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 transform translate-x-4 translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1555626906-fcf10d6851b4?q=80&w=1000&auto=format&fit=crop"
              alt="Auto Parts Store"
              className="relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
