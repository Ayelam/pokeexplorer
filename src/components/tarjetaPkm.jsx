export function TarjetaPkm({pokemon}) //Tarjeta de los datos de cada Pokemon
{
  const partes = pokemon.url.split('/') //cortamos la url por cada "/"
  const id = partes[partes.length - 2] //el numero esta en la penultima posicion

  //usando el id traemos la imagen del pokm
  const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  return (
    <div className="tarjeta">
      <img src={imagen} alt={pokemon.name} />
      <p>#{id}</p>
      <h3>{pokemon.name}</h3>
    </div>
  )
}