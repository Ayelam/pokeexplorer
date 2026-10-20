import {useState,useEffect} from 'react'
import {infPkm} from '../services/serviciopk'
import {coloresTp} from '../utils/coloresTp'

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
      try 
      {
        const datos = await infPkm(pokemon.name) //detalle completo del pokemon
        const lista = datos.types.map((t) => t.type.name) //se extrae el nombre de cada tipo
        setTipos(lista)
      } 
      catch (fallo) 
      {
        setTipos([]) //si falla, la tarjeta se queda sin tipos (pero no rompe la app)
      }
    }
    cargarTipos()
  }, [pokemon.name])

  //color del primer tipo para el borde y el encabezado
  const colorPrincipal = tipos.length > 0 ? coloresTp[tipos[0]] : '#ccc'

  return (
    <div className="tarjeta" style={{ borderColor: colorPrincipal }}>
      <div className="tarjeta-top" style={{ backgroundColor: colorPrincipal }}>
        <span className="nombre">{pokemon.name}</span>
        <span className="numero">#{id}</span>
      </div>

      <img src={imagen} alt={pokemon.name} />

      <div className="tipos">
        {tipos.map((tipo) => (
          <span key={tipo} className="pill" style={{backgroundColor: coloresTp[tipo] }}>
            {tipo}
          </span>
        ))}
      </div>
    </div>
  )
}