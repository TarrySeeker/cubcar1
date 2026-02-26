import React, { useEffect } from "react";
import { MapPin, Phone, Mail, Clock, CreditCard } from "lucide-react";

export default function Contacts() {
  useEffect(() => {
    let map;

    const initMap = () => {
      if (window.DG) {
        window.DG.then(() => {
          // Координаты из вашего iframe
          const coords = [45.019468, 39.063186];

          // Инициализация карты
          map = window.DG.map("map-root", {
            center: coords,
            zoom: 16,
            fullscreenControl: false,
            zoomControl: false, // Скрываем контролы, чтобы не мешали кнопке
            scrollWheelZoom: false, // Отключаем зум колесиком, так как сверху оверлей
          });

          // Добавляем маркер
          window.DG.marker(coords).addTo(map);
        });
      }
    };

    // Проверяем, загружен ли уже скрипт
    if (!window.DG) {
      const script = document.createElement("script");
      script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    // Очистка при размонтировании
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <section id="contacts" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info & Form */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Наши <span className="text-red-600">Контакты</span>
              </h2>
              <div className="w-20 h-1 bg-red-600"></div>
            </div>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">
                    Адрес
                  </h4>
                  <p className="text-zinc-400">
                    Краснодар,
                    <br />
                    улица им. В.Н. Мачуги, 48
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">
                    Режим работы
                  </h4>
                  <p className="text-zinc-400">Ежедневно с 08:00 до 19:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">
                    Телефон
                  </h4>
                  <a
                    href="tel:+79615181616"
                    className="text-zinc-400 hover:text-red-500 transition-colors text-lg"
                  >
                    +7 961 518-16-16
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:zebel2007@mail.ru"
                    className="text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    zebel2007@mail.ru
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">
                    Оплата
                  </h4>
                  <p className="text-zinc-400">
                    Карты, Наличные, QR-код, Переводы
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              className="bg-zinc-900 border border-zinc-800 p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6">
                Записаться на ремонт
              </h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Опишите проблему или укажите нужные запчасти"
                    rows={3}
                    className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-bold uppercase tracking-wider py-4 hover:bg-red-700 transition-colors"
                >
                  Отправить заявку
                </button>
                <p className="text-zinc-600 text-xs text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с политикой
                  конфиденциальности.
                </p>
              </div>
            </form>
          </div>

          {/* 2GIS Map Custom Widget */}
          <div className="h-full min-h-[400px] bg-zinc-900 border border-zinc-800 relative overflow-hidden group">

            {/* Контейнер для самой карты */}
            <div id="map-root" className="w-full h-full absolute inset-0 z-0"></div>

            {/* Оверлей затемнения с кнопкой, который вы просили */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 pointer-events-none transition-colors duration-300">
              <a
                href="https://2gis.ru/krasnodar/firm/70000001022289758"
                target="_blank"
                rel="noopener noreferrer"
                // pointer-events-auto возвращает кликабельность самой кнопке
                className="pointer-events-auto bg-red-600 text-white font-bold uppercase tracking-wider py-4 px-8 hover:bg-red-700 transition-colors shadow-lg"
              >
                Открыть в 2ГИС
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
