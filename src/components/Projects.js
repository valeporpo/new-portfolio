import React from 'react'

export default function Projects(props) {

    const pathComponents = [
        'bouncing-letters',
        'flipping-letters',
        'spinner',
        'circles',
        'bulletin-board'
    ]
    const basePath = "https://api.github.com/repos/valeporpo"
    const method = "languages"
    const [projects, setProjects] = React.useState()


    React.useEffect(
        () => { 
         for(let i = 0; i < pathComponents.length; i++) {
            fetchProject(pathComponents[i])
         }
    }, []
    )

    function fetchProject(pathComponent) {
        fetch(basePath+"/"+pathComponent+"/"+method)
        .then((data) => data.json())
        .then((data) => {setProjects(data)})
    }

    let currentSection = props.sections.filter(
        (section) => section.text === "Projects"
    )
    
    return (
      <div id="projects" className="section" ref={currentSection[0].reference}>
        <div id="navigation-container-projects" className="navigation-container">
        </div>
        <div id="projects-content" className="section-content">
            <div className="current-project">
            </div>
            <div className="projects-menu-bar">
                Lorem ipsum
            </div>
        </div>
      </div>
    )
}