export default function ProjectCard({ project }) {
  return (
    <div className="bg-white/60 border border-ink/10 rounded p-8 transition-all hover:-translate-y-1 hover:border-primary">
      <div className="h-[180px] rounded-sm mb-6 flex items-center justify-center bg-gradient-to-br from-primary to-ink">
        <span className="font-[family-name:var(--font-display)] text-paper/85 text-sm">
          Project preview
        </span>
      </div>
      <div className="mb-6">
        <h3 className="font-[family-name:var(--font-display)] text-xl mb-2.5">{project.title}</h3>
        <p className="text-sm text-ink/60 leading-relaxed mb-2.5">{project.description}</p>
        <a className="text-sm text-ink/60 leading-relaxed mb-2.5" href={project.link} target="_blank">
          Go to Project 🔗
        </a>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] uppercase tracking-wide text-primary border border-primary/30 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}