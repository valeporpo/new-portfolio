import React from "react"

export default function Navigation(props) {

    const navigationRef = React.createRef()
    const menuBars = [
      {name : 'me', reference: React.createRef()},
      {name : 'skills', reference : React.createRef()},
      {name : 'projects', reference : React.createRef()},
      {name : 'contact', reference : React.createRef()}
    ]
    

    function scrollToSection(event) {
      let sectionTarget = props.sections.filter(
        (section) => section.anchor === event.target.dataset.target
      )[0].reference
      window.scroll({
        left: 0,
        top: sectionTarget.current.offsetTop,
        behavior: "smooth"
      })
    }

    function changeBar(referenceId, color) {
      let item = menuBars.filter(
        (menuBar) => menuBar.name === referenceId
      )[0]
        item.reference.current.style.borderColor = color
    }

    function getSectionPosition(userPosition) {
      let currentSection
      props.sections.forEach(function(section) {
        let sectionOffset = section.reference.current.offsetTop
        console.log(sectionOffset +  " " + userPosition)
        // Se la distanza tra l'inizio del documento e la posizione
        // della parte estremo-alta della view-port è maggiore o uguale
        // alla distanza tra l'inizio della sezione corrente e l'inizio del documento
        if(userPosition >= sectionOffset) {
          currentSection = section
          return
        }
         
      })
      return currentSection
    }

    React.useEffect(() => {
      window.addEventListener("scroll", function(){
        //console.log(navigationRef.current.offsetHeight)
        
        let scrollVertPosition = this.scrollY + navigationRef.current.offsetHeight + navigationRef.current.offsetTop
        //console.log(scrollVertPosition +" "+this.scrollY)
        let currentSection = getSectionPosition(scrollVertPosition)
        let currentSectionIndex = props.sections.indexOf(currentSection)
        menuBars.forEach(function(menuBar) {
          let color = menuBar.name === currentSection.reference.current.id ?
                      (currentSectionIndex % 2 === 0 ? "#0F3D3E" : "#100F0F") :
                      (currentSectionIndex % 2 === 0 ? "#100F0F" : "#0F3D3E")
          changeBar(menuBar.name, color) 

        })
        })}, [])

    return (
        <div className="navigation" ref={navigationRef}>
          <div className="navigation-menu">
          {
            props.sections.map((section) =>
                <div data-target={section.anchor}
                     onClick={scrollToSection}>
                  {section.text}
                </div>
            )
          }
          </div>
          <div className="navigation-bar">
            {
              props.sections.map((section) =>
                  
                  <div className="menu-voice-bar"
                       ref={menuBars.filter((menuBar) => 
                              menuBar.name === section.anchor
                            )[0].reference
                       }
                       data-section={section.anchor}
                  >
                  </div>
              )
            }
          </div>
        </div>
    );
}