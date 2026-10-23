import { education, technicalSkills, languages, softSkills, experience } from '../data'

function InfoCard({ title, children }) {
  return (
    <div className="bg-white/55 border border-ink/10 rounded p-6 mb-5">
      <h4 className="text-[11px] uppercase tracking-widest text-primary mb-3.5">{title}</h4>
      {children}
    </div>
  )
}

function PillGroup({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="text-xs border border-ink/15 bg-white/50 px-3 py-1.5 rounded-full">
          {item}
        </span>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-ink/10">
      <div className="flex items-baseline gap-5 mb-14">
        <span className="font-[family-name:var(--font-display)] text-sm text-primary">02</span>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium">About me</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-14">
        {/* Bio + experiencia */}
        <div>
          <p className="text-[17px] leading-relaxed text-ink/70 mb-5">
            My path started in Software Engineering. For three years, 
            I built software for startups and the banking sector — writing clean code, 
            solving technical problems, thinking in systems.
          </p>
          <p className="text-[17px] leading-relaxed text-ink/70 mb-5">
            Then I took a gap year. It turned out to be the year I discovered a 
            side of myself I hadn't paid attention to: I'm deeply creative, and I have 
            a real eye for visual work. I came back to my career as a graphic designer, 
            and later combined design with community management for a year.
          </p>
          <p className="text-[17px] leading-relaxed text-ink/70 mb-5">
            Today, my curiosity keeps pulling me toward Artificial 
            Intelligence and Machine Learning.
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mt-10 mb-4">
            Experience
          </p>

          {experience.map((job, i) => (
            <div key={i} className={`py-5 ${i !== 0 ? 'border-t border-ink/10' : ''}`}>
              <div className="flex justify-between items-baseline flex-wrap gap-1.5 mb-1.5">
                <h4 className="font-[family-name:var(--font-display)] text-lg font-medium">
                  {job.company}
                </h4>
                <span className="text-xs uppercase tracking-wide text-primary">{job.date}</span>
              </div>
              <p className="text-[13px] uppercase tracking-wide text-ink/55 mb-2">{job.role}</p>
              <ul className="list-disc pl-4">
                {job.bullets.map((b, j) => (
                  <li key={j} className="text-sm leading-relaxed text-ink/65 mb-1">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tarjetas de datos */}
        <div>
          <InfoCard title="Education">
            <p className="text-sm text-ink/75 py-1.5">{education.degree}</p>
            <p className="text-sm text-ink/50 py-1.5">{education.school}</p>
          </InfoCard>

          <InfoCard title="Technical Skills">
            <PillGroup items={technicalSkills} />
          </InfoCard>

          <InfoCard title="Languages">
            {languages.map((lang) => (
              <div key={lang.name} className="flex justify-between text-sm py-1.5 text-ink/75">
                <span>{lang.name}</span>
                <span className="text-ink/50">{lang.level}</span>
              </div>
            ))}
          </InfoCard>

          <InfoCard title="Soft Skills">
            <PillGroup items={softSkills} />
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
