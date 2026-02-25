import { Send, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm transform -skew-x-12">
                <span className="text-white font-black italic">КК</span>
              </div>
              <span className="text-white font-black text-xl tracking-tighter uppercase italic">
                КубКар
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Комплексный ремонт вашего авто. Современное оборудование. Запчасти
              в наличии и под заказ.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-red-600 transition-all"
              >
                <Send className="w-4 h-4" /> {/* Telegram */}
              </a>
              <a
                href="https://vk.com/public174086919"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-red-600 transition-all font-bold"
              >
                VK
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-red-600 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> {/* WhatsApp */}
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">
              Навигация
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-zinc-500 hover:text-red-500 transition-colors text-sm"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#store"
                  className="text-zinc-500 hover:text-red-500 transition-colors text-sm"
                >
                  Магазин запчастей
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-zinc-500 hover:text-red-500 transition-colors text-sm"
                >
                  Прайс-лист
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-zinc-500 hover:text-red-500 transition-colors text-sm"
                >
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">
              Информация
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>Автосервис "КубКар"</li>
              <li>г. Краснодар, улица им. В.Н. Мачуги, 48</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Автосервис "КубКар". Все права
            защищены.
          </p>
          <p className="text-zinc-600 text-xs">
            Разработано с любовью к автомобилям.
          </p>
        </div>
      </div>
    </footer>
  );
}
