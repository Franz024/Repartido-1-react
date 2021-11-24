import React from 'react';

function Prueba(props){
    return(
        <main>
                
            <div className="carta">
                <img src={props.imagen}></img>
                <h3>{props.nombre}</h3>
                <p>{props.edad}</p>
                <p>{props.club}</p>
                <p>{props.país}</p>
            </div>
        </main>
    )
}
const PER = [
    {
        id:1,
        nombre:"Cristiano Ronaldo",
        edad:36,
        club:"Manchested United",
        país:"Portugal",
        imagen:"https://pbs.twimg.com/media/E-DEhR6XEAUMKwQ.jpg"

    },
   
    { 
        id:2,
        nombre:"Lionel Messi",
        edad:34,
        club:"París Saint-Germain",
        país:"Argentina",
        imagen:"https://besthqwallpapers.com/Uploads/5-9-2021/178141/thumb2-lionel-messi-paris-saint-germain-leo-messi-psg-grunge-art-blue-stone-fo.jpg"
        },
    
    { 
        id:3,
        nombre:"Neymar Júnior",
        edad:29,
        club:"París Saint-Germain",
        país:"Brasil",
        imagen:"https://images.ctfassets.net/3mv54pzvptwz/G8eHjwQp5BF1WB0Se1IOy/3f5ee50bfe30d9407fcd091c89284cb4/WALLPAPERS_001.png"
        },
    
    { 
        id:4,
        nombre:"Robert Lewandoski",
        edad:33,
        club:"Bayern de Múnich",
        país:"Polonia",
        imagen:"https://i.pinimg.com/originals/d1/8a/a1/d18aa1741a85d1dcc27e5bc19eae9810.png"
        },             
                
    { 
        id:5,
        nombre:"Luis Suárez",
        edad:34,
        club:"Atlético de Madrid",
        país:"Uruguay",
        imagen:"https://w0.peakpx.com/wallpaper/411/964/HD-wallpaper-luis-suarez-atletico-de-madrid-fifa-21-futbol-lucho-sports-uruguayo.jpg"
                }    
        
]


export default function App(){
return(


        <div className="Blanka">
          <h1>Repartido 1</h1>
          <Lista array= {PER}/>  
        </div>
)}

function Lista(datos){
    return(
<>      
            {datos.array.map((personas)=>{
                const {nombre,imagen,id,edad,club,país}=personas;
                return(
                    <Prueba nombre={nombre} imagen=
                    {imagen} key={id}  edad={edad} club= {club} país={país}/>

                )
            })}
    </>
    )
}


