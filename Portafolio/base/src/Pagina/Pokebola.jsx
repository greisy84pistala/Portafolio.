import {useEffect, useState} from 'react';

function Pokebola(){
  const[pokemones, setPokemon] =useState([])
  const[lista, setLista] =useState([])
  
  const traerPokemones = useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response)=> response.json())
    .then((data) => setPokemon(data.results))
  },[])
  
    function traer_Pokemones(){
      for(let i=0;i <=19;i++){
        console.log(pokemones[i].name)
        setLista((valor)=>[valor,<j>{pokemones[i].name}</j>])
      }
    }
  

    return (
      <div className="App">
        <header className="App-header">
      
          <button className ='button_class' onClick ={traer_Pokemones}></button>
          {lista}
        </header>
      </div>
    );
  }
  
export default Pokebola