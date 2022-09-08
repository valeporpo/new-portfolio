import React from 'react'
import Skills from './Skills'
import Projects from './Projects'
import Loader from './Loader'

export default function Content() {

    const [section, setSection] = React.useState()
    
    React.useEffect(
        function() {
          const timer = setTimeout(() => changeSection(), 1000)
        }, []
    )

    function changeSection() {
        let newSection = section === "skills" ? "projects" : "skills"
        setSection(newSection)
    }

    return (
      <div className="content">
        <div className="carousel">
          <div onClick={changeSection}>
            <span>&larr;</span>
          </div>
            {typeof section === "undefined" ? <Loader /> :
            section === "skills" ? <Skills /> : <Projects />}
          <div onClick={changeSection}>
            <span>&rarr;</span>
          </div>
        </div>
      </div>
    );
}