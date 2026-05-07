/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShoppingCart, Zap, Shield, Trophy, ChevronRight, Menu, X, Instagram, Twitter, Facebook } from "lucide-react";
import { useState } from "react";

// Mude este link manualmente quando quiser alterar o destino do botão de compra
const PURCHASE_LINK = "https://produto.mercadolivre.com.br/MLB-3884431477-tnis-nike-precision-7-unissex-_JM#reco_item_pos=0&reco_backend=item_decorator&reco_backend_type=function&reco_client=home_items-decorator-legacy&reco_id=c1ec3c17-bbfd-4b80-b234-08f2a6c3aa8a&reco_model=&c_id=/home/navigation-recommendations-seed/element&c_uid=82204754-c276-48b3-aee5-9f3142d37848&da_id=navigation&da_position=0&id_origin=/home/dynamic_access&da_sort_algorithm=ranker";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const shoes = [
    {
      id: 1,
      name: "Air Impact Pro v2",
      price: "R$ 899,90",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
      color: "border-orange-500"
    },
    {
      id: 2,
      name: "Gravity Defier Elite",
      price: "R$ 1.249,00",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop",
      color: "border-blue-500"
    },
    {
      id: 3,
      name: "Triple Threat Zero",
      price: "R$ 759,00",
      image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop",
      color: "border-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-accent-orange selection:text-white overflow-x-hidden relative flex flex-col">
      {/* Background Text Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="font-display text-[20vw] lg:text-[26rem] leading-none text-stroke select-none opacity-20 lg:opacity-100"
        >
          ELITE
        </motion.h1>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 lg:px-12 py-8 z-50 relative">
        <div className="text-2xl lg:text-3xl font-display tracking-tighter uppercase italic">
          HOOP<span className="text-accent-orange">LAB</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
          <a href="#colecao" className="hover:text-white transition-colors">Performance</a>
          <a href="#tecnologia" className="hover:text-white transition-colors">Tecnologia</a>
          <a href="#colecao" className="hover:text-white transition-colors">Coleções</a>
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border-2 border-white/20 rounded-full flex items-center justify-center text-[10px] font-bold italic">
            PT
          </div>
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed inset-0 z-40 bg-[#050505] p-12 flex flex-col gap-8 text-center justify-center"
        >
          <a href="#colecao" className="text-4xl font-display uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Performance</a>
          <a href="#tecnologia" className="text-4xl font-display uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Tecnologia</a>
          <a href="#colecao" className="text-4xl font-display uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Coleções</a>
          <a 
            href={PURCHASE_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="bg-cta-yellow text-black p-6 font-display text-2xl uppercase"
          >
            Comprar Agora
          </a>
        </motion.div>
      )}

      <main className="flex-1 flex flex-col lg:flex-row px-6 lg:px-12 relative z-10">
        {/* Left Info Pane */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center py-12 lg:pb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 px-3 py-1 border border-white/20 w-fit text-[10px] uppercase tracking-[0.3em] font-bold text-white/60"
          >
            Edição Limitada
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl lg:text-[8rem] font-display leading-[0.85] uppercase mb-8"
          >
            Precision <br/><span className="text-accent-orange">VII</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-400 max-w-sm lg:max-w-[280px] leading-relaxed mb-10"
          >
            Tração multidirecional e amortecimento responsivo para jogadores que dominam cada centímetro da quadra.
          </motion.p>
          
          {/* Price and CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-sm text-gray-500 line-through font-bold">R$ 599,99</span>
              <span className="text-4xl font-display tracking-tight text-white">R$ 379,99</span>
            </div>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={PURCHASE_LINK} 
              target="_blank"
              rel="noreferrer"
              className="bg-cta-yellow text-[#050505] w-fit px-10 py-5 font-display text-xl uppercase tracking-wider flex items-center gap-4 shadow-[0_15px_30px_rgba(255,230,0,0.2)]"
            >
              COMPRAR AQUI
              <ChevronRight className="w-6 h-6 stroke-[3]" />
            </motion.a>
          </motion.div>
        </div>

        {/* Central Shoe Image */}
        <div className="flex-1 relative flex items-center justify-center py-20 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -25 }}
            animate={{ opacity: 1, scale: 1.25, rotate: -25 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src="https://http2.mlstatic.com/D_NQ_NP_2X_684652-MLB100874871493_122025-F-tnis-nike-precision-7-unissex.webp" 
              alt="Precision VII Basketball Shoe" 
              className="w-full max-w-[600px] h-auto drop-shadow-[0_45px_45px_rgba(0,0,0,0.8)] relative z-20"
              referrerPolicy="no-referrer"
            />
            {/* Decorative Glow */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-orange/20 blur-[100px] rounded-full z-10"></div>
          </motion.div>
        </div>

        {/* Right Specs Pane */}
        <div className="w-full lg:w-1/4 flex flex-row lg:flex-col justify-center items-center lg:items-end text-center lg:text-right gap-12 lg:gap-16 pb-20 mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Amortecimento</h4>
            <p className="font-display text-2xl lg:text-3xl">ZOOM AIR SYSTEM</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Material</h4>
            <p className="font-display text-2xl lg:text-3xl">MESH RESPIRÁVEL</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Peso</h4>
            <p className="font-display text-2xl lg:text-3xl">340G ULTRA LIGHT</p>
          </motion.div>
        </div>
      </main>

      {/* Decorative Vertical Text */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 opacity-10 text-[10px] font-bold uppercase tracking-[0.5em] z-20" style={{ writingMode: 'vertical-rl' }}>
        Built for the streets & the court // 2024 Series
      </div>

      {/* Bottom Gallery / Navigation */}
      <footer className="w-full border-t border-white/10 flex flex-col lg:flex-row items-center px-6 lg:px-12 py-8 lg:h-32 bg-[#050505] relative z-20 gap-8 lg:gap-0">
        <div className="flex gap-6 lg:gap-8 items-center flex-1">
          <div className="w-16 h-16 bg-white/5 border border-white/10 p-2 flex items-center justify-center grayscale opacity-30 hover:opacity-100 transition-all cursor-pointer">
             <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Angle 1" />
          </div>
          <div className="w-16 h-16 bg-white/5 border border-white/20 p-2 flex items-center justify-center ring-2 ring-accent-orange shadow-[0_0_20px_rgba(255,77,0,0.3)]">
             <img src="https://http2.mlstatic.com/D_NQ_NP_2X_684652-MLB100874871493_122025-F-tnis-nike-precision-7-unissex.webp" className="w-full h-full object-cover" alt="Featured" />
          </div>
          <div className="w-16 h-16 bg-white/5 border border-white/10 p-2 flex items-center justify-center grayscale opacity-30 hover:opacity-100 transition-all cursor-pointer">
             <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Angle 2" />
          </div>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-4 hidden sm:inline">Explore Ângulos</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-cta-yellow" />
            <span>Frete Grátis</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-cta-yellow" />
            <span>12x sem Juros</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-3 h-3 text-cta-yellow" />
            <span>Troca Fácil</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
