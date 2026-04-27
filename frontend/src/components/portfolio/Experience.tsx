import { motion } from 'framer-motion'

export function Experience() {
    return (
        <section id="experience" className="py-12 px-4 border-t border-zinc-800/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative pl-8 border-l border-zinc-800"
                    >
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-zinc-950"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <h3 className="text-lg font-medium text-white">Software Development Engineer Intern</h3>
                            <span className="text-sm text-zinc-500">Sep 2021 - Feb 2023</span>
                        </div>
                        <p className="text-blue-400 text-sm mb-3">Hexmos</p>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            Deeply involved in building LiveAPI, an API documentation generation system that ingests code repositories. Implemented scalable backends using Python (Django), Go, and Node.js.
                        </p>
                        <ul className="text-zinc-400 text-sm list-disc pl-4 space-y-2">
                            <li>Designed and built secure payment and licensing infrastructure.</li>
                            <li>Optimized AI prompts using regex preprocessing to reduce token usage and improve efficiency.</li>
                            <li>Mentored 4 students into full-stack web developers over a year.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
