import { Star } from "lucide-react";

const reviews = [
  {
    name: "Алексей С.",
    text: "Самый лучший сервис в городе Сочи. Быстро и качественно. Делал сход-развал и менял масло, все на высшем уровне.",
    date: "2 недели назад",
  },
  {
    name: "Марина В.",
    text: "Грамотный персонал, адекватные цены, современное оборудование. Запчасти нашли быстро, цены не кусаются.",
    date: "1 месяц назад",
  },
  {
    name: "Дмитрий К.",
    text: "Отличный автосервис! Ребята знают свое дело. Приехал с проблемой по электрике, нашли причину за 15 минут.",
    date: "2 месяца назад",
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
                На основе 119+ оценок в 2ГИС
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
