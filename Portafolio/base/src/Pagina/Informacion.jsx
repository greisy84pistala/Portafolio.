import { Link } from "react-router-dom";
import headerImg from "../assets/img/header-img.svg";

const Informacion=()=>{
    return(<div>

      <p>Descripcion:</p>
      <p className="tex"> Me llamo Greisy Jisella Pistala Castillo, tengo 20 años y estudio desarrollo de software en el Instituto Tecnologico Del Putumayo, 
      actualmente vivo con mi madre, tengo una mascota que se llama Sasha, mi color favorito es el rosa,me gustan las fresas con chocolate, 
      soy una persona honesta,recervada, callada, amigable, no soy rencorosa o posesiva ni controladora,aprecio la simpleza de las cosas.
      </p>
      <img className="img1" src={headerImg}/>
      
    
    </div>
       
    )
}
export default Informacion