import {
  MonitorPlay,
  Disc,
  CarFront,
  Droplet,
  Wrench,
  Settings,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: MonitorPlay,
    title: "Компьютерная диагностика",
    desc: "Точное выявление неисправностей с помощью современного сканера.",
  },
  {
    icon: Disc,
    title: "Шиномонтаж и балансировка",
    desc: "Быстрая замена резины, ремонт проколов, точная балансировка колес.",
  },
  {
    icon: CarFront,
    title: "Сход-развал (3D)",
    desc: "Регулировка углов установки колес на высокоточном 3D-стенде.",
  },
  {
    icon: Droplet,
    title: "Замена масла",
    desc: "Включая аппаратную замену масла в АКПП и двигателе.",
  },
  {
    icon: Wrench,
    title: "Ремонт ходовой и тормозов",
    desc: "Диагностика и ремонт подвески, замена колодок и дисков.",
  },
  {
    icon: Settings,
    title: "Ремонт двигателей",
    desc: "Капитальный и текущий ремонт бензиновых и дизельных ДВС.",
  },
  {
    icon: Zap,
    title: "Автоэлектрик и кондиционеры",
    desc: "Ремонт проводки, заправка и обслуживание систем кондиционирования.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-zinc-950 relative border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Наши <span className="text-red-600">Услуги</span>
          </h2>
          <div className="w-20 h-1 bg-red-600"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-zinc-900 border border-zinc-800 p-8 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-300 transform -skew-x-6">
                <service.icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide leading-tight">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-red-600 p-8 flex flex-col justify-center items-start transform transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
              Нужна другая услуга?
            </h3>
            <p className="text-red-100 mb-6 text-sm font-medium">
              Оставьте заявку, и мы проконсультируем вас по стоимости и срокам
              ремонта.
            </p>
            <a
              href="#contacts"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-bold uppercase tracking-wider text-sm hover:bg-zinc-100 transition-colors"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
