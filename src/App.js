import Navigation from './components/Navigation'
import Me from './components/Me'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {

  const sections = [
    'Me',
    'Skills',
    'Projects',
    'Contact'
  ]

  return (
    <div className='main-container'>
       <Navigation sections={sections}/>
       <Me />
       <Skills />
       <Projects />
       <Contact />
    </div>
  );
}