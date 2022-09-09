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

export default function Skills() {

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

    return (
        <div className="section skills">
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
        
    )
}