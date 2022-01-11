import { Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

    

    const renderItems = ( {id, first_name, last_name, email, avatar}: Usuario ) => {
        return (
            <tr key={ id.toString() }>
                <td> 
                    <img 
                        src={ avatar } 
                        alt={ first_name } 
                        style={{ 
                            width: 35,
                            borderRadius: 100
                        }}

                    />
                </td>
                <td> { first_name } {last_name} </td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
          <h3>Usuarios: </h3> 
          <table className="table table-striped">
              <thead>
                    <tr>
                        <td>Avatar</td>
                        <th>Nombre</th>
                        <th>E-mail</th>
                    </tr>
              </thead>
              <tbody>
                   {
                       usuarios.map( renderItems )
                   }
              </tbody>
          </table>

          <button className="btn btn-primary" onClick={ paginaAnterior }>
              Anterior
          </button>

          &nbsp;

          <button className="btn btn-primary" onClick={ paginaSiguiente }>
              Siguientes
          </button>


        </>
    )
}
