import {useState,useEffect} from 'react'
import {listaPkm} from '../services/serviciopk'

export const mostrados = 25 //muestra de pkm por pagina

//El hook trae y guarda la lista de los pokemon
export function usePokemones() 
{
  const [pokemones, setPokemones] = useState([]) //Almacen de los datos pokemon
  const [cargando, setCargando] = useState(true) //true mientras la api responde
  const [error, setError] = useState(null) //Guarda el error si algo falla

  //Se ejecuta una sola vez cuando aparece en pantalla
  useEffect(() => {
    //funcion para pedir los datos a la api
    async function cargarPkm() 
    {
      try 
      {
        const datos = await listaPkm(100000, 0) //pedimos todos de una
        setPokemones(datos.results) //Guarda solo la lista
      } 
      catch (fallo) 
      {
        setError('Error, no se cargaron los Pokemon')
      } 
      finally 
      {
        setCargando(false) //se deja de cargar
      }
    }

    cargarPkm()
  }, []) //se ejecuta una vez

  return { pokemones, cargando, error }//se devuelven las variables
}