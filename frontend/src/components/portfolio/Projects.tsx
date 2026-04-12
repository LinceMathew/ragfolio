import { motion } from 'framer-motion'

export function Projects() {
  const projects = [
    {
      id: 'liveapi',
      title: 'LiveAPI',
      description: 'Automated API documentation system that parses repositories. Features payment handling, license management, and optimized AI prompt engineering to reduce token usage.',
      tags: ['Python (Django)', 'Node.js', 'Go', 'React', 'PostgreSQL']
    },
    {
      id: 'freedevtools',
      title: 'FreeDevTools',
      description: 'Large-scale developer resource platform with 125,000+ static pages. Achieved 8M+ search impressions through deep SEO optimization and Meilisearch integration.',
      tags: ['Astro', 'Meilisearch', 'SEO', 'SSG']
    }
  ]

  return (
    <section id="projects" className="py-12 px-4 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default"
            >
              <h3 className="font-medium text-white text-lg">{project.title}</h3>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700/50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
