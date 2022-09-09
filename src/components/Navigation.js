export default function Navigation(props) {
    return (
        <div className="navigation">
          {
            props.sections.map((section) => <div>{section}</div>)
          }
        </div>
    );
}