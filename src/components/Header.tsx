export function Header() {
  return (
    <header className="flex flex-col items-center gap-4 py-16 text-center md:py-24">
      <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
        shihua’s personal projects summary
      </div>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
        shihua
      </h1>
      <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
        This is a collection of shihua’s personal projects, which mainly includes algorithm packages (probability statistics, time series and matrix calculations), algorithm engineering tools, and knowledge blogger content
      </p>
      <a
        href="https://shihua.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
      >
        https://shihua.netlify.app/
      </a>
    </header>
  )
}
