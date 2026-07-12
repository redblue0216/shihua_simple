import type { Project } from '../data/projects'
import { SegmentRenderer } from './SegmentRenderer'

interface ProjectItemProps {
  project: Project
  index: number
}

export function ProjectItem({ project, index }: ProjectItemProps) {
  return (
    <article className="group relative flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-900">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
        {index + 1}
      </span>
      <p className="leading-relaxed text-slate-700 dark:text-slate-300">
        <SegmentRenderer segments={project.segments} />
      </p>
    </article>
  )
}
