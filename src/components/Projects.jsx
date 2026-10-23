import { projects } from '../data'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-ink/10">
      <div className="flex items-baseline gap-5 mb-14">
        <span className="font-[family-name:var(--font-display)] text-sm text-primary">03</span>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
