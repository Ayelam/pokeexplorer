const url_api = 'https://pokeapi.co/api/v2' //Direccion de la api

//Solicitud de la lista pokemon, de 0 a 100
export async function listaPkm(cantidad = 100, desde = 0) 
{
  const respuesta = await fetch(`${url_api}/pokemon?limit=${cantidad}&offset=${desde}`) //Peticion a la api
  const datos = await respuesta.json() //respuesta

  return datos
}
//Informacion de Pokemon por nombre
export async function infPkm(nombre) 
{
  const respuesta = await fetch(`${url_api}/pokemon/${nombre}`)
  const datos = await respuesta.json()

  return datos
}
//Tipo de Pkm
export async function tipoPkm(tipo) 
{
  const respuesta = await fetch(`${url_api}/type/${tipo}`)
  const datos = await respuesta.json()

  return datos
}