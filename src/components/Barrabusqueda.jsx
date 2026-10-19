//Barra de busqueda de pkm
export function Barrabusqueda({valor,alCambiar}) 
{
  return (
    <input
      type="text"
      placeholder="Buscar pokemon..."
      value={valor}
      onChange={(evento) => alCambiar(evento.target.value)}
    />
  )
}