import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Why EBSOR", href: "#why-ebsor" },
    { name: "Facts & Figures", href: "#facts" },
    { name: "Services & Solutions", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Clients", href: "#clients" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <header className=" top-0 left-0 right-0 z-50 bg-[#113f5e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-16 md:h-20 flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative inline-block cursor-pointer"
            >
              <a href="#" aria-label="EBSOR Infosystems home">
                <img
                  src="/ebsor.jpeg"
                  alt="EBSOR Infosystems"
                  className="
        max-h-10
        md:max-h-12
        lg:max-h-14
        w-auto
        object-contain
      "
                />
              </a>
            </motion.div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10"
            >
              <span className="sr-only">Open menu</span>
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-white" />
                <span className="block w-5 h-0.5 bg-white" />
                <span className="block w-5 h-0.5 bg-white" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-slate-950 z-50 p-6"
            >
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-slate-300 hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
