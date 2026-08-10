import { motion } from 'framer-motion'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/LinceMathew' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/lincemathew' },
]

export function Hero() {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-blue-500">Lince Mathew</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Full-stack software engineer with a product-oriented mindset, specializing in scalable backend systems, robust APIs, and modern frontend experiences.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-full px-4 py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
