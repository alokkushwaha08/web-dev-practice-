export default function MsgBox({username,textColor}){
    let styles={color:textColor};
    return (
        <div >
            
            <h2 style={styles}>Hello:{username}</h2>

        </div>
    )
}