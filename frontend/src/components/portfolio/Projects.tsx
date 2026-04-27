import { motion } from 'framer-motion'

export function Projects() {
  return (
    <section id="projects" className="py-12 px-4 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default"
          >
            <h3 className="font-medium text-white text-lg">LiveAPI Documentation System</h3>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              Automated system that parses code repositories to generate up-to-date API documentation. Features AI optimizations for token reduction. 
              <br /><br />
              <span className="text-zinc-500">Stack: Python, Go, Node.js, React, PostgreSQL</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default"
          >
            <h3 className="font-medium text-white text-lg">FreeDevTools</h3>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              Open-source developer resource platform serving over 125,000 SEO-optimized static pages with fast search via Meilisearch, achieving 8M+ impressions.
              <br /><br />
              <span className="text-zinc-500">Stack: Astro, HTML/CSS, Meilisearch</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
