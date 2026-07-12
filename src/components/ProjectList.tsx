import { projects, githubProjectsLink } from '../data/projects'
import { ProjectItem } from './ProjectItem'

export function ProjectList() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 md:pb-24">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Projects
        </h2>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {projects.length} items
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href={githubProjectsLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-indigo-900 dark:hover:bg-indigo-950 dark:hover:text-indigo-400"
        >
          {githubProjectsLink.text}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
