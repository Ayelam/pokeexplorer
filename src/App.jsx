import { usePokemones } from './hooks/usePokemones'
import { TarjetaPkm } from './components/tarjetaPkm'

function App() 
{
  //el hook llama a la api
  const { pokemones, cargando, error } = usePokemones()

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

  //Ya con los datos listos, mostramos la lista
  return (
    <div>
      <h1>PokeExplorer</h1>

      <div className="lista">
        {pokemones.map((pokemon) => (
          <TarjetaPkm key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}

export default App