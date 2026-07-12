export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          About shihua's personal introduction, details can be viewed on his personal website--
          <a
            href="https://shihua.netlify.app/"
            className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
          >
            https://shihua.netlify.app/
          </a>
        </p>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
          Last update: July 12, 2026 · Modernized by React + TypeScript + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
