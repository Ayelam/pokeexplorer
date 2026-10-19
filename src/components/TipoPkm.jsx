//Lista de type, la api contiene valor
const tipos = [
  {valor: 'normal', nombre: 'Normal'},
  {valor: 'fire', nombre: 'Fireo'},
  {valor: 'water', nombre: 'Water'},
  {valor: 'grass', nombre: 'Grass'},
  {valor: 'electric', nombre: 'Electric'},
  {valor: 'ice', nombre: 'Ice'},
  {valor: 'fighting', nombre: 'Fighting'},
  {valor: 'poison', nombre: 'Poison'},
  {valor: 'ground', nombre: 'Ground'},
  {valor: 'flying', nombre: 'Flying'},
  {valor: 'psychic', nombre: 'Psychic'},
  {valor: 'bug', nombre: 'Bug'},
  {valor: 'rock', nombre: 'Rock'},
  {valor: 'ghost', nombre: 'Ghost'},
  {valor: 'dragon', nombre: 'Dragon'},
  {valor: 'dark', nombre: 'Dark'},
  {valor: 'steel', nombre: 'Steel'},
  {valor: 'fairy', nombre: 'Fairy'}
]

//Filtro por tipo de pkm
export function TipoPkm({valor,alCambiar}) 
{
  return (
    <select value={valor} onChange={(evento) => alCambiar(evento.target.value)}>
      <option value="">Todos los tipos</option>
      {tipos.map((tipo) => (
        <option key={tipo.valor} value={tipo.valor}>{tipo.nombre}</option>
      ))}
    </select>
  )
}