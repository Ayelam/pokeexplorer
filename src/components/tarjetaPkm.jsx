import {useState,useEffect} from 'react'
import {infPkm} from '../services/serviciopk'

//Tarjeta de los datos de cada Pokemon
export function TarjetaPkm({pokemon}) 
{
  const partes = pokemon.url.split('/') //cortamos la url por cada "/"
  const id = partes[partes.length - 2] //el numero esta en la penultima posicion

  //el id se usa para sacar la direccion de la imagen del pkm
  const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  const [tipos, setTipos] = useState([]) //guarda los tipos pokemon

  //pedimos el detalle del pokemon para sacar sus tipos
  useEffect(() => {
    async function cargarTipos() 
    {
      const datos = await infPkm(pokemon.name) //detalle completo del pokemon
      const lista = datos.types.map((t) => t.type.name) //se extrae el nobre de cada tipo
      setTipos(lista)
    }
    cargarTipos()
  }, [pokemon.name])

  return (
    <div className="tarjeta">
      <img src={imagen} alt={pokemon.name} />
      <p>#{id}</p>
      <h3>{pokemon.name}</h3>
      <p>{tipos.join(', ')}</p>
    </div>
  )
}