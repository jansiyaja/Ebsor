import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "Why EBSOR", href: "#why-ebsor" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Clients", href: "#clients" },
      { name: "Contact Us", href: "#contact" },
    ],
    Services: [
      { name: "ERP Solutions", href: "#services" },
      { name: "CRM Software", href: "#services" },
      { name: "HR Management", href: "#services" },
      { name: "Custom Solutions", href: "#services" },
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Support", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#0c2f47] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* LOGO + ABOUT */}
          <div className="space-y-4">
            <img
              src="/ebsor.jpeg"
              alt="EBSOR Infosystems"
              className="h-12 w-auto"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              EBSOR Infosystems delivers scalable ERP and digital solutions
              empowering businesses to grow smarter and faster.
            </p>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-3 text-sm text-white/70">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-14"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-1">
                Subscribe to our Newsletter
              </h3>
              <p className="text-white/70 text-sm">
                Get product updates, insights & company news directly to your
                inbox.
              </p>
            </div>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white"
              />
              <button className="px-6 py-3 rounded-lg bg-white text-[#113f5e] font-semibold hover:bg-white/90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <span>© {year} EBSOR Infosystems Pvt. Ltd. All rights reserved.</span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
