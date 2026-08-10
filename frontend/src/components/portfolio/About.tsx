const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Shipped', value: '10+' },
  { label: 'Page Impressions', value: '8M+' },
]

export function About() {
  return (
    <section className="py-12 px-4 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
        <p className="text-zinc-400 leading-relaxed">
          I'm a product-oriented full-stack engineer with hands-on experience in backend, frontend, and DevOps. I've built real-world systems spanning developer tooling, AI-assisted documentation, and search-driven platforms. I thrive on full ownership of features, deep-diving into performance optimization, and bridging the gap between robust backends and intuitive user interfaces.
        </p>
        <div className="flex flex-wrap gap-8 mt-8 pt-6 border-t border-zinc-900">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-xl font-semibold text-white">{stat.value}</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
