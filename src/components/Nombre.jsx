import "./Hola.css"
const Nombre=(props)=>{
    console.log(props)
  return<>
    <p class="text-[#220088]">Este es un texto {props.name} y tengo {props.edad} años</p>
    <h1>Hola mundo</h1>
  </>
}

export default Nombre
/* 




*/