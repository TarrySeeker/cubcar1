/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Store from "./components/Store";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-red-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Store />
        <Pricing />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
