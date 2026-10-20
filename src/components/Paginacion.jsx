import {mostrados} from '../hooks/usePokemones'

//Control de pagina
export function Paginacion({pagina, total, alCambiar}) 
{
  const ultimaPagina = Math.ceil(total/mostrados)-1 //numero de la ultima pagina

  return (
    <div className="paginacion">
      <button onClick={() => alCambiar(pagina - 1)} disabled={pagina === 0}>Anterior
      </button>
      <span>Pagina {pagina + 1} de {ultimaPagina + 1}</span>
      <button onClick={() => alCambiar(pagina + 1)} disabled={pagina >= ultimaPagina}>Siguiente
      </button>
    </div>
  )
}