export default function SideSelector(props) {

    function changeSide(event) {
        props.handleSelection(event.target.dataset.side)
    }

    return (
        <div>
            <button data-side="frontEnd" onClick={changeSide}>
              Front-end
            </button>
            <button data-side="backEnd" onClick={changeSide}>
              Back-end
            </button>
        </div>
    )
}