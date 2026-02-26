import { Wrench, ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop"
          alt="Auto Service"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-zinc-300 text-sm font-medium tracking-wide">
              Комплексный ремонт вашего авто
            </span>
          </div>

          <h1 className="text-[2.6rem] sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
            Надежный <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
              автосервис
            </span>
            <br />
            в Краснодаре
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl font-medium leading-relaxed">
            Современное оборудование. Запчасти в наличии и под заказ. Рейтинг
            4.6 ⭐️ в 2ГИС. Гарантия качества на все виды работ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacts"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.7)]"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <Wrench className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Записаться на ремонт</span>
            </a>

            <a
              href="#store"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold uppercase tracking-wider border border-zinc-700 overflow-hidden transform transition-all hover:-translate-y-1 hover:border-zinc-500"
            >
              <div className="absolute inset-0 w-full h-full bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <ShoppingCart className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Подобрать запчасти</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
