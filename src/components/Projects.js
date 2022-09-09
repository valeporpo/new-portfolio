import React from 'react'

export default function Projects() {

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
    console.log(projects)

    function fetchProject(pathComponent) {
        fetch(basePath+"/"+pathComponent+"/"+method)
        .then((data) => data.json())
        .then((data) => {setProjects(data)})
    }
    
    return (
      <div className="projects">
        <div className="first-project">Lorem ipsum</div>
        <div className="second-project">Lorem ipsum</div>
        <div className="third-project">Lorem ipsum</div>
      </div>
    )
}