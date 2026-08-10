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
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs px-2.5 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-300 hover:border-blue-500/50 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-3 text-[11px] text-zinc-600">
                                {cat.skills.length} skill{cat.skills.length !== 1 ? 's' : ''}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
