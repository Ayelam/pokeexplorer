import {useState, useEffect} from 'react'
import {usePokemones, mostrados} from './hooks/usePokemones'
import {TarjetaPkm} from './components/tarjetaPkm'
import {Barrabusqueda} from './components/Barrabusqueda'
import {TipoPkm} from './components/TipoPkm'
import {Paginacion} from './components/Paginacion'
import {tipoPkm} from './services/serviciopk'

function App() 
{
  const [pagina, setPagina] = useState(0) //pagina actual

  //el hook llama a la api
  const { pokemones, cargando, error } = usePokemones()
  const [busqueda, setBusqueda] = useState('') //texto de la barra
  const [tipo, setTipo] = useState('') //tipo elegido en el menu
  const [listaTipo, setListaTipo] = useState(null) //lista cuando se filtra por tipo
  const [errorTipo,setErrorTipo] = useState(null) 

  //cuando el usuario busca, reiniciamos a la primera pagina
  function cambiarBusqueda(valor) 
  {
    setBusqueda(valor)
    setPagina(0)
  }

  //cuando el usuario cambia el tipo, reiniciamos a la primera pagina
  function cambiarTipo(valor) 
  {
    setTipo(valor)
    setPagina(0)
  }

  //se ejecuta cada vez que cambia el tipo elegido, Fallo
  useEffect(() => {
    if (tipo === '') 
    {
      setListaTipo(null)
      return
    }
    //se pide a la api los pkm de ese tipo
    async function cargarTipo() 
    {
      try 
      {
        const datos = await tipoPkm(tipo)
        const lista = datos.pokemon.map((p) => p.pokemon)
        setListaTipo(lista)
        setErrorTipo(null) //si funciona limpia el error
      } 
      catch (fallo) 
      {
        setErrorTipo('No se pudo cargar ese tipo')
      }
    }
    cargarTipo()
  }, [tipo])

  //esperando a que la api responda
  if (cargando) 
  {
    return <p>Cargando pokemon...</p>
  }

  //Si falla mostrar error
  if (error) 
  {
    return <p>{error}</p>
  }

  //si hay un tipo elegido usamos esa lista
  const base = listaTipo ? listaTipo : pokemones

  //filtro de busqueda por nombre sobre la lista base
  const pokemonesFiltrados = base.filter((pokemon) => 
  {
    const partes = pokemon.url.split('/')
    const id = partes[partes.length - 2]
    const texto = busqueda.toLowerCase()
    return pokemon.name.includes(texto) || id.includes(texto)
  })

  //cortamos solo los pokemon de la pagina actual
  const inicio = pagina * mostrados
  const paginaActual = pokemonesFiltrados.slice(inicio, inicio + mostrados)

  //Mostar lista
  return (
    <div>
      <h1>PokeExplorer</h1>

      <Barrabusqueda valor={busqueda} alCambiar={cambiarBusqueda} />

      <TipoPkm valor={tipo} alCambiar={cambiarTipo} />
      {errorTipo && <p>{errorTipo}</p>}

      {pokemonesFiltrados.length === 0 ? (
        <p>No se encontraron pokemon</p>
      ) : (
        <>
          <div className="lista">
            {paginaActual.map((pokemon) => (
              <TarjetaPkm key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>

          <Paginacion pagina={pagina} total={pokemonesFiltrados.length} alCambiar={setPagina} />
        </>
      )}
    </div>
  )
}

export default App