import Navigation from './components/Navigation'
import Me from './components/Me'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import React from 'react'

export default function App() {

  const sections = [
    {text : 'Me', anchor : 'me', reference : React.createRef()},
    {text : 'Skills', anchor : 'skills', reference : React.createRef()},
    {text : 'Projects', anchor : 'projects', reference : React.createRef()},
    {text : 'Contact', anchor : 'contact', reference : React.createRef()}
  ]

  return (
    <div className='main-container'>
       <Navigation sections={sections}/>
       <Me sections={sections}/>
       <Skills sections={sections}/>
       <Projects sections={sections}/>
       <Contact sections={sections}/>
    </div>
  );
}