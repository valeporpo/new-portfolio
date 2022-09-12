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

    const [side, setSide] = React.useState("backEnd")

    const technologies = [
        {name : 'php', logo : phpLogo, side: 'backEnd'},
        {name : 'html', logo : htmlLogo, side: 'frontEnd'},
        {name : 'mysql', logo : mysqlLogo, side: 'backEnd'},
        {name : 'js', logo : jsLogo, side: 'frontEnd'},
        {name : 'jquery', logo : jqueryLogo, side: 'frontEnd'},
        {name : 'css', logo : cssLogo, side: 'frontEnd'},
        {name : 'react', logo : reactLogo, side: 'frontEnd'}
    ]

    let currentSection = props.sections.filter(
        (section) => section.text === "Skills"
    )

    return (
        <div id="skills" className="section" ref={currentSection[0].reference}>
          <div id="navigation-container-skills" className="navigation-container"></div>
          <div id="skills-content" className="section-content">
            <div className="subsection frontend">
            {technologies
                    .filter((technology) => technology.side === "frontEnd")
                    .map((technology) => <Technology name={technology.name}
                                                                logo={technology.logo}
                                                    />)}
            </div>
            <div className="subsection backend">
            {technologies
                    .filter((technology) => technology.side === "backEnd")
                    .map((technology) => <Technology name={technology.name}
                                                                logo={technology.logo}
                                                    />)}
            </div>
          </div>
        </div>
        
    )
}