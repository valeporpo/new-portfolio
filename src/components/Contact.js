export default function Contact(props) {

    let currentSection = props.sections.filter(
        (section) => section.text === "Contact"
    )

    return (
        <div id="contact" className="section" ref={currentSection[0].reference}>
            <div id="navigation-container-contact" className="navigation-container">
            </div>
            <div id="contact-content" className="section-content">
              Contact
            </div>
        </div>
        
    )
}