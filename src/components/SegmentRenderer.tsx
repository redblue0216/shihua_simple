import type { Segment } from '../data/projects'

interface SegmentRendererProps {
  segments: Segment[]
}

export function SegmentRenderer({ segments }: SegmentRendererProps) {
  return (
    <>
      {segments.map((segment, index) => {
        const key = `${segment.type}-${index}`

        if (segment.type === 'link') {
          return (
            <a
              key={key}
              href={segment.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-700 hover:decoration-indigo-600 dark:text-indigo-400 dark:decoration-indigo-500 dark:hover:text-indigo-300 dark:hover:decoration-indigo-400"
            >
              {segment.content}
            </a>
          )
        }

        return <span key={key}>{segment.content}</span>
      })}
    </>
  )
}
