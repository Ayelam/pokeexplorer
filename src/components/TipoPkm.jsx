//Lista de type, la api contiene valor
const tipos = [
  {valor: 'normal', nombre: 'Normal'},
  {valor: 'fire', nombre: 'Fuego'},
  {valor: 'water', nombre: 'Agua'},
  {valor: 'grass', nombre: 'Planta'},
  {valor: 'electric', nombre: 'Electrico'},
  {valor: 'ice', nombre: 'Hielo'},
  {valor: 'fighting', nombre: 'Lucha'},
  {valor: 'poison', nombre: 'Veneno'},
  {valor: 'ground', nombre: 'Tierra'},
  {valor: 'flying', nombre: 'Volador'},
  {valor: 'psychic', nombre: 'Psiquico'},
  {valor: 'bug', nombre: 'Bicho'},
  {valor: 'rock', nombre: 'Roca'},
  {valor: 'ghost', nombre: 'Fantasma'},
  {valor: 'dragon', nombre: 'Dragon'},
  {valor: 'dark', nombre: 'Siniestro'},
  {valor: 'steel', nombre: 'Acero'},
  {valor: 'fairy', nombre: 'Hada'}
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