import { motion } from 'framer-motion'

export function Skills() {
    const categories = [
        { name: 'Languages', skills: ['Python', 'Go', 'JavaScript', 'TypeScript', 'Java'] },
        { name: 'Frontend', skills: ['React', 'React Native', 'Astro', 'Tailwind CSS'] },
        { name: 'Backend', skills: ['Node.js', 'Django', 'PostgreSQL', 'Parse'] },
        { name: 'Cloud/Tools', skills: ['Docker', 'Meilisearch', 'Git', 'Prompt Engineering'] },
    ]

    return (
        <section className="py-12 px-4 border-t border-zinc-800/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-6">Skills & Languages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4 border-b border-zinc-900 pb-2">
                                {cat.name}
                            </h3>
                          
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
