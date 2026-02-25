import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-sm transform -skew-x-12">
              <span className="text-white font-black text-xl italic">КК</span>
            </div>
            <span className="text-white font-black text-2xl tracking-tighter uppercase italic">
              КубКар
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-zinc-300 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Услуги
            </a>
            <a
              href="#store"
              className="text-zinc-300 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Магазин
            </a>
            <a
              href="#pricing"
              className="text-zinc-300 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Цены
            </a>
            <a
              href="#reviews"
              className="text-zinc-300 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Отзывы
            </a>
            <a
              href="#contacts"
              className="text-zinc-300 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Контакты
            </a>
          </nav>

          {/* Phone */}
          <div className="hidden md:flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-600" />
            <a
              href="tel:+79615181616"
              className="text-white font-bold hover:text-red-500 transition-colors"
            >
              +7 961 518-16-16
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-bold uppercase text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md"
            >
              Услуги
            </a>
            <a
              href="#store"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-bold uppercase text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md"
            >
              Магазин
            </a>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-bold uppercase text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md"
            >
              Цены
            </a>
            <a
              href="#reviews"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-bold uppercase text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md"
            >
              Отзывы
            </a>
            <a
              href="#contacts"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-bold uppercase text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md"
            >
              Контакты
            </a>
            <a
              href="tel:+79615181616"
              className="block px-3 py-2 text-base font-bold text-red-500"
            >
              +7 961 518-16-16
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
