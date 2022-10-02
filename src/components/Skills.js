import Technology from './Technology'
import SideSelector from './SideSelector'
import cssLogo from '../skills/css.svg';
import htmlLogo from '../skills/html.svg';
import jqueryLogo from '../skills/jquery.svg';
import jsLogo from '../skills/js.svg';
import mysqlLogo from '../skills/mysql.svg';
import phpLogo from '../skills/php.svg';
import reactLogo from '../skills/react.svg';
import React from 'react'

export default function Skills(props) {

    const [technologies, setTechnologies] = React.useState([
        {name : 'php', logo : phpLogo, side: 'backEnd', selected: true},
        {name : 'html', logo : htmlLogo, side: 'frontEnd', selected: false},
        {name : 'mysql', logo : mysqlLogo, side: 'backEnd', selected: false},
        {name : 'js', logo : jsLogo, side: 'frontEnd', selected: false},
        {name : 'jquery', logo : jqueryLogo, side: 'frontEnd', selected: false},
        {name : 'css', logo : cssLogo, side: 'frontEnd', selected: false},
        {name : 'react', logo : reactLogo, side: 'frontEnd', selected: false}
    ])

    let currentSection = props.sections.filter(
        (section) => section.text === "Skills"
    )

    function changeTechnology() {
      setTechnologies((items) => items.map(function(item, index, array) {
        let itemSwitched = {...item, ...{selected : !item.selected}}
        if(item.selected)
          return itemSwitched
        else {
          if(index === 0 && array[array.length-1].selected)
            return itemSwitched
          else if(index > 0 && array[index-1].selected)
            return itemSwitched
        }
        return item
      }))
    }

    return (
        <div id="skills" className="section" ref={currentSection[0].reference}>
          <div id="navigation-container-me" className="navigation-container"></div>
          <p onClick={changeTechnology}>click</p>  
          <div id="skills-content" className="section-content">
            <div className="subsection">
              {technologies
               .filter((technology) => technology.selected) 
               .map((technology) => <Technology logo={technology.logo}
                                                name={technology.name}
                                                key={technology.name}
                                    />
              )}
            </div>
            <div className="subsection">
                Dynamic
            </div>
          </div>
        </div>
        
    )
}