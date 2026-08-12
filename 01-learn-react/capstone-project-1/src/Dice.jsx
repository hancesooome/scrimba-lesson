export default function Dice(props){
    return (
        <button onClick={props.handleClick} style={{ backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF" }}>
            {props.value}
        </button>
    )
}