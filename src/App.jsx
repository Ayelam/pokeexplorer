import {useState, useEffect} from 'react'
import {usePokemones} from './hooks/usePokemones'
import {TarjetaPkm} from './components/tarjetaPkm'
import {Barrabusqueda} from './components/Barrabusqueda'
import {TipoPkm} from './components/TipoPkm'
import {tipoPkm} from './services/serviciopk'

function App() 
{
  //el hook llama a la api
  const { pokemones, cargando, error } = usePokemones()
  const [busqueda, setBusqueda] = useState('') //texto de la barra
  const [tipo, setTipo] = useState('') //tipo elegido en el menu
  const [listaTipo, setListaTipo] = useState(null) //lista cuando se filtra por tipo

  //se ejecuta cada vez que cambia el tipo elegido
  useEffect(() => {
    //si no hay tipo se usa lista normal
    if (tipo === '') 
    {
      setListaTipo(null)
      return
    }
    //pedimos a la api los pokemon de ese tipo
    async function cargarTipo() 
    {
      const datos = await tipoPkm(tipo)
      const lista = datos.pokemon.map((p) => p.pokemon) 
      setListaTipo(lista)
    }
    cargarTipo()
  }, [tipo])

  if (cargando) 
  {
    return <p>Cargando pokemon...</p>
  }
  if (error) 
  {
    return <p>{error}</p>
  }

  //si hay un tipo elegido usamos esa lista, si no la normal
  const base = listaTipo ? listaTipo : pokemones

  //filtro de busqueda por nombre sobre la lista base
  const pokemonesFiltrados = base.filter((pokemon) => pokemon.name.includes(busqueda.toLowerCase()))

  //Mostar lista
  return (
    <div>
      <h1>PokeExplorer</h1>

      <Barrabusqueda valor={busqueda} alCambiar={setBusqueda} />
      <TipoPkm valor={tipo} alCambiar={setTipo} />

      <div className="lista">
        {pokemonesFiltrados.map((pokemon) => (
          <TarjetaPkm key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}

export default App