import { socialLinks } from '../data'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Hero() {
  return (
    <header
      id="hero"
      className="max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-32
                 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center"
    >
      {/* Columna de texto — va primero en el DOM, así en mobile queda arriba de la foto */}
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-6">
          Machine Learning Engineer
        </p>

        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-medium leading-[1.02] tracking-tight max-w-2xl">
          I build systems that{' '}
          <em className="italic text-primary font-normal">learn</em>,<br />
          not just calculate.
        </h1>

        <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/65">
          Machine Learning Engineer with a background in Software Engineering and Graphic Design. Based in Peru — open to
          remote international opportunities or relocation.
        </p>

        <div className="mt-10">
          <a
            href={socialLinks.resume}
            download
            className="inline-block bg-ink text-paper text-sm uppercase tracking-widest
                       px-8 py-4 rounded-full hover:bg-primary transition-colors"
          >
            Resume
          </a>
        </div>

        <div className="flex gap-3.5 mt-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 rounded-full border border-ink/20 flex items-center justify-center
                       hover:border-primary hover:text-primary transition-colors"
          >
            <GitHubIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 rounded-full border border-ink/20 flex items-center justify-center
                       hover:border-primary hover:text-primary transition-colors"
          >
            <LinkedInIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={socialLinks.email}
            aria-label="Email"
            className="w-11 h-11 rounded-full border border-ink/20 flex items-center justify-center
                       hover:border-primary hover:text-primary transition-colors"
          >
            <MailIcon className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>

      {/* Columna de foto — segunda en el DOM, por eso cae debajo del texto en mobile */}
      <div
        className="aspect-[3/4] w-full max-w-[320px] mx-auto md:max-w-none rounded overflow-hidden
                  border border-ink/10 bg-gradient-to-br from-[#d8d4cc] to-[#bdb8ae]"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/profile.png`}
          alt="Rose Ancco"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  )
}