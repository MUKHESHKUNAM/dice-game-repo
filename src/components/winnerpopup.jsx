export const Winner=(props)=>{
    return(<>
    <div className="overlay">
        <div className="winnrepopup">
        <h1>congratulation</h1>
        <h1>{props.name} WON THE GAME</h1>
        </div>
    </div>
    </>)
}