import React from "react";
import { Link } from "react-router-dom";


const Inicio=()=>{
    return(<div>
       <p>Bienvenidos A Nuestros Datos Personales</p>
       <Link to="/"> 
       <img src='./icono.png'width={100}></img>
       </Link> {"\n"}
       <p>Nombres: Greisy Pistala</p>
       <p>Edad: 20</p>
       <p>📧 Coreo: greisypistala@itp.edu.con</p>
       <p>📞 Telefono: 3125568471</p>

    </div>

    )
}
export default Inicio