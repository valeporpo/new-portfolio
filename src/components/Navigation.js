export default function Navigation(props) {

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

    return (
        <div className="navigation">
          {
            props.sections.map((section) =>
                <div data-target={section.anchor}
                     onClick={scrollToSection}>
                  {section.text}
                </div>
            )
          }
        </div>
    );
}