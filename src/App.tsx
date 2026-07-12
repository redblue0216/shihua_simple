import { Header } from './components/Header'
import { ProjectList } from './components/ProjectList'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main>
        <ProjectList />
      </main>
      <Footer />
    </div>
  )
}

export default App
