const url_api = 'https://pokeapi.co/api/v2' //Direccion de la api

//Solicitud de la lista pokemon
export async function listaPkm(cantidad = 1400, desde = 0) 
{
  const respuesta = await fetch(`${url_api}/pokemon?limit=${cantidad}&offset=${desde}`) //Peticion a la api

  //si no hay respuesta de exito, se arrojja un errores HTTP
  if (!respuesta.ok) 
  {
    throw new Error(`Error al cargar la lista (estado ${respuesta.status})`)
  }

  const datos = await respuesta.json() //respuesta

  return datos
}

//Informacion de Pokemon por nombre
export async function infPkm(nombre) 
{
  const respuesta = await fetch(`${url_api}/pokemon/${nombre}`)

  if (!respuesta.ok) 
  {
    throw new Error(`No se encontro el pokemon "${nombre}" (estado ${respuesta.status})`)
  }

  const datos = await respuesta.json()

  return datos
}

//Tipo de Pkm
export async function tipoPkm(tipo) 
{
  const respuesta = await fetch(`${url_api}/type/${tipo}`)

  if (!respuesta.ok) 
  {
    throw new Error(`No se encontro el tipo "${tipo}" (estado ${respuesta.status})`)
  }

  const datos = await respuesta.json()

  return datos
}