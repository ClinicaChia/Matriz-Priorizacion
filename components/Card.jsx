
 function Card({titulo, valor, clase,color,...props}) {
    //titulo y la clase
    return(
        <div className={clase} style={{"--tam": "100px"}}>
            
            <h3>{titulo}</h3>
            
            {props.children}
        </div>
    )
}


export default Card;


