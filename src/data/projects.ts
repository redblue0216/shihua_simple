/**
 * Structured data extracted from https://shihua.netlify.app/
 * Each project entry is a sequence of text and link segments,
 * preserving the original mixed content.
 */

export interface TextSegment {
  type: 'text'
  content: string
}

export interface LinkSegment {
  type: 'link'
  content: string
  href: string
}

export type Segment = TextSegment | LinkSegment

export interface Project {
  id: string
  segments: Segment[]
}

export const projects: Project[] = [
  {
    id: 'SeaWave',
    segments: [
      { type: 'link', content: 'SeaWave', href: 'https://github.com/redblue0216' },
      { type: 'text', content: 'is a time series library based on JAX. The engineering aspect includes operator arrangement SeaFlow, specific operator SeaWater, serialization SeaWind, cache management SeaBottle, and formatted output SeaFront. In terms of algorithm, it adopts the paradigm of time series decomposition (trend, cycle, residual), and the main architecture is decoupled dual-channel (coupling offset), hierarchical nesting (multi-cycle), projection constraints (physical rationality), and the auxiliary architecture is forward-backward symmetric decomposition (endpoint problem), sparse events (artificial features).' },
    ],
  },  
  {
    id: 'StatJAX',
    segments: [
      { type: 'link', content: 'StatJAX', href: 'https://github.com/redblue0216/StatJAX' },
      { type: 'text', content: 'is a statistical model algorithm package based on the jax technology stack starting from the matrix calculation level and implemented from the bottom up.' },
    ],
  },
  {
    id: 'FirstMatrixC',
    segments: [
      { type: 'link', content: 'FirstMatrixC', href: 'https://github.com/redblue0216/FirstMatrixC' },
      { type: 'text', content: 'is a matrix calculation library based on C language. Its main functions include basic matrix operations, matrix decomposition operations, matrix transformation operations and matrix special operations. Its main technologies include modular programming of two-level architecture, dynamic memory management, conditional compilation, defensive programming and new matrix data structures.' },
    ],
  },  
  {
    id: 'PangFlow',
    segments: [
      { type: 'link', content: 'PangFlow', href: 'https://github.com/redblue0216/PangFlow' },
      { type: 'text', content: 'is an Algorithm OPS orchestration framework for algorithm engineers. It is built on Prefect and uses a decorator-driven DSL to make DAG orchestration as easy as writing ordinary Python functions. It provides full life cycle support from algorithm development, training scheduling, model version management to online inference services, and has built-in data lineage tracking, Conda environment isolation and WebUI dashboard.' },
    ],
  },  
  {
    id: 'MeteoCube',
    segments: [
      { type: 'link', content: 'MeteoCube', href: 'https://github.com/redblue0216/MeteoCube' },
      { type: 'text', content: 'is a weather data service based on Open-Meteo and MeteoAlarm. Supports real-time weather query, forecast (including historical automatic routing), weather warning, batch query, data export, log persistence, IP current limiting, and fuse protection.' },
    ],
  },  
  {
    id: 'Book_ProbablityStatistics100Tips',
    segments: [
      { type: 'link', content: 'Book_ProbablityStatistics100Tips', href: 'https://github.com/redblue0216/Book_ProbablityStatistics100Tips' },
      { type: 'text', content: "is an advanced version of probability statistics knowledge point understanding book. The relevant content is based on the author's understanding in his personal study work. If readers have relevant questions and suggestions, they can submit them in the form of issues in the corresponding github library. The author welcomes all kinds of criticisms and corrections, but in view of limited personal time, the current update cycle is uncertain, please understand. The author's personal details can be found on the author's personal website" },
    ],
  },  
]

export const githubProjectsLink = {
  text: 'github',
  href: 'https://github.com/redblue0216',
}
