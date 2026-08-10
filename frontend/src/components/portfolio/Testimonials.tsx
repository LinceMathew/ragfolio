import { motion } from 'framer-motion'

export function Testimonials() {
  return (
    <section className="py-12 px-4 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800"
          >
            <p className="text-sm text-zinc-400 leading-relaxed">"Lince consistently delivers clean, well-tested code and takes full ownership of features end to end."</p>
            <div className="mt-4 text-sm font-medium text-white">Priya Sharma</div>
            <div className="text-xs text-zinc-500">Engineering Manager</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800"
          >
            <p className="text-sm text-zinc-400 leading-relaxed">"One of the most reliable engineers I've worked with - great at bridging backend and frontend concerns."</p>
            <div className="mt-4 text-sm font-medium text-white">Arjun Mehta</div>
            <div className="text-xs text-zinc-500">Senior Developer</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800"
          >
            <p className="text-sm text-zinc-400 leading-relaxed">"Great communicator and problem solver. Always brings thoughtful suggestions to the table."</p>
            <div className="mt-4 text-sm font-medium text-white">Sara Chen</div>
            <div className="text-xs text-zinc-500">Product Manager</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
