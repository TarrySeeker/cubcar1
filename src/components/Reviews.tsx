import { Star } from "lucide-react";

const reviews = [
  {
    name: "Наталья Ф.",
    text: "Мне не стали сразу предлагать менять пол-машины. Мастер вместе со мной поднял автомобиль на подъёмники, показал все проблемные узлы, подробно объяснил, что нужно решать срочно, а что может подождать. Чувствовалось, что заинтересованы в решении проблемы, а не в выкачивании денег.",
    date: "31 октября 2025",
  },
  {
    name: "Сергей",
    text: "Автосервис отличный! Мастера нашли поломку быстро, ремонт сделали хорошо и вовремя. Никаких лишних услуг не предлагали, цены нормальные. Ожидал машину в удобной зоне отдыха. Обратился бы ещё и другим советую!",
    date: "29 октября 2025",
  },
  {
    name: "Анна И.",
    text: "Мне очень понравился салон. Я приехала на диагностику, мою машину проверили, указали на изъяны и уже моё дело было исправлять или нет. Всё чётко, понятно, клиентоориентировано. Для девушки, которая не понимает во внутренностях машины, мне очень понравилось. Советую всем!",
    date: "19 августа 2025",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 bg-zinc-900 border-y border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              Отзывы <span className="text-red-600">Клиентов</span>
            </h2>
            <div className="w-20 h-1 bg-red-600"></div>
          </div>

          <div className="flex items-center gap-4 bg-zinc-950 px-6 py-4 border border-zinc-800">
            <div className="text-4xl font-black text-white">4.6</div>
            <div>
              <div className="flex text-red-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i === 4 ? "text-zinc-700" : "fill-current"}`}
                  />
                ))}
              </div>
              <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
                На основе 28 оценок в 2ГИС
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-800 p-8 hover:border-zinc-700 transition-colors"
            >
              <div className="flex text-red-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-white font-bold">{review.name}</span>
                <span className="text-zinc-600 text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
