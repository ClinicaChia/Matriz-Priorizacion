
const Colorear = (op)=>{

    if(op == "bajo"){
        return  { ["background-color"] : "Lime",["color"] : "white" , ["font-weight"] : "bold", ["text-align"] : "center"};
    }

    if(op == "medio"){
        return  { ["background-color"] : "#FFD700",["color"] : "white" , ["font-weight"] : "bold", ["text-align"] : "center"};
    }

    if(op == "alto"){
        return  { ["background-color"] : "#FF4500",["color"] : "white" , ["font-weight"] : "bold", ["text-align"] : "center"};
    }

    if(op == "muy alto"){
        return  { ["background-color"] : "Crimson" ,["color"] : "white" , ["font-weight"] : "bold", ["text-align"] : "center"};
    }

    return "";

}

function Tabla({data}){
    //get keys of data[0]
    const headers = Object.keys(data[0]);
    
    return(
        <table>
            <thead>
                <tr>
                    {headers.map((key, index) => {
                        return <th key={index}>{key}</th>
                    })}
                </tr>
            </thead>
            <tbody>

                {data.map((item, index) => {
                    
                    return <tr  key={index}>
                        {headers.map((key, index) => {
                            if(key == "priorizacion"){
                                return <td key={index} style={item.estado == "en proceso"? Colorear(item.priorizacion) : {}} >{item[key]}</td>
                            }
                            return <td  key={index}>{item[key]}</td>
                        })}
                    </tr>
                })}

            </tbody>
        </table>
    )


}


export default Tabla;