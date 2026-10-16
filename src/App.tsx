
import './App.css'
import { useState } from 'react'
import me from './assets/me.jpeg'


const GITHUB = 'https://github.com/YOURUSERNAME'

// PROJECTS 
const projects = [
  {
    name: 'Asana_API',
    repo: 'Asana_API',
    language: 'C#',
    description:
      'ASP.NET Core Web API for project and task management, with CRUD endpoints, project expansion with related to-dos, and Swagger UI integration.',
  },
  {
    name: 'Asana_API.Maui',
    repo: 'Asana_API.Maui-',
    language: 'C#',
    description: 'A .NET MAUI app version of the Asana project and task manager.',
  },
  {
    name: 'Clock.asm',
    repo: 'Clock.asm-',
    language: 'Assembly',
    description:
      'A clock program in MIPS assembly. The user enters a time and it determines whether it is morning, noon, or night.',
  },
  {
    name: 'Sequence_Sum.asm',
    repo: 'Sequence_Sum.asm-',
    language: 'Assembly',
    description:
      'A sequence sum calculator in MIPS assembly. The user enters a starting number and a sequence length, and the program sums the consecutive numbers.',
  },
  {
    name: 'Grid.cpp',
    repo: 'Grid.cpp-',
    language: 'C++',
    description:
      'Generates a random maze from the rows and columns the user enters. A mover icon navigates the maze until it reaches the border and escapes.',
  },
  {
    name: 'appstarter',
    repo: 'appstarter',
    language: 'PHP',
    description: 'A fork of the CodeIgniter 4 app starter, used to explore PHP web development.',
  },
]

// Buttons  project cards
const filters = ['All', 'C#', 'Assembly', 'C++', 'PHP']

export default function App() {
  const [filter, setFilter] = useState('All')

  // Only keep the projects that match the selected filter
  const shownProjects = projects.filter(
    (p) => filter === 'All' || p.language === filter
  )

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container">
          <h1 className="site-name">Sarah Fieg</h1>
          <p className="site-subtitle">Computer Science · Florida State University</p>
        </div>
      </header>

      {/* NAV BAR */}
      <nav className="site-nav">
        <div className="container">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/*PAGE BODY */}
      <div className="container layout">
        <main>
          {/* ABOUT ME */}
          <section id="about">
            <h2 className="headline">
              Building software that makes technology easier for the people who use it.
            </h2>

            <div className="about">
              <img src={me} alt="Picture of Sarah Fieg" className="headshot" />
              <div>
                <p>
                  <strong>Sarah Fieg</strong> is a Computer Science student at Florida
                  State University. She is interested in UI/UX and web development. She currently
                  works as a Desktop Support Intern with FSU ITS, where she assist with integrating the ServiceNow platform into the NWRDC's systems 
                </p>
                <p>
                  Her projects range from web APIs in C# to low-level programs in MIPS
                  assembly. Outside of class, she enjoys music , going t the gym, and playing video games.
                </p>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education">
            <h2 className="section-title">Education</h2>
            <div className="card">
              <h3>B.S. Computer Science</h3>
              <p className="org">Florida State University · Fall 2022 – present</p>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience">
            <h2 className="section-title">Experience</h2>
            <div className="card">
              <h3>Desktop Support Intern</h3>
              <p className="org">Florida State University ITS NWRDC · Fall 2026 – present</p>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <h2 className="section-title">Projects</h2>

            <details className="card">
              <summary>Stuff I'm working on right now</summary>
              <ul>
                <li><strong>Personal Website:</strong> this site, built with React and Vite</li>
              </ul>
            </details>

            {/* Filter Buttons */}
            <div className="filters">
              {filters.map((f) => (
                <button
                  key={f}
                  className={filter === f ? 'filter active' : 'filter'}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Project Cards */}
            <div className="project-grid">
              {shownProjects.map((p) => (
                <a
                  key={p.name}
                  className="project-card"
                  href={`${GITHUB}/${p.repo}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <span className="language">
                    <span className={'dot ' + p.language.replace('#', 'sharp').replace(/\+/g, 'p')}></span>
                    {p.language}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </main>

        {/* SIDEBAR */}
        <aside>
          <div className="side-box" id="contact">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:you@example.com">Email</a></li>
              <li><a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/you" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          <div className="side-box">
            <h4>Quick facts</h4>
            <ul>
              <li>📍 Tallahassee, FL</li>
              <li>💻 C#, C++, MIPS Assembly, PHP</li>
              <li>🎮 Currently playing : Super Mario 3D</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">© 2026 Sarah Fieg · Built with React and Vite</div>
      </footer>
    </>
  )
}