import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Lince consistently delivers clean, well-tested code and takes full ownership of features end to end.',
    name: 'Priya Sharma',
    title: 'Engineering Manager',
  },
  {
    quote: "One of the most reliable engineers I've worked with - great at bridging backend and frontend concerns.",
    name: 'Arjun Mehta',
    title: 'Senior Developer',
  },
  {
    quote: 'Great communicator and problem solver. Always brings thoughtful suggestions to the table.',
    name: 'Sara Chen',
    title: 'Product Manager',
  },
]

export function Testimonials() {
  return (
    <section className="py-12 px-4 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800"
            >
              <p className="text-sm text-zinc-400 leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 text-sm font-medium text-white">{t.name}</div>
              <div className="text-xs text-zinc-500">{t.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
