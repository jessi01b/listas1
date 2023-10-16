import { electronics } from './List.jsx';

function Dictionary(){

    const tipo = electronics.filter(electronics =>
        electronics.tipo === 'smartphone');

    const lista = tipo.map(electronics =>
        <li>
                <p>
                    <b> {electronics.sku}:</b><br />
                    {' ' + electronics.tipo + ' '} 
                    {' ' + electronics.nombre + ' '} 
                    {' ' + electronics.descripcion + ' '} 
                    {' ' + electronics.precio + ' '} 
                    {' ' + electronics.ram + ' '} 
                    {' ' + electronics.procesador + ' '} 
                    {' ' + electronics.pantalla + ' '} 
                    {' ' + electronics.resolucion + ' '} 
                    <br />
                </p>
             </li>
        );

    return(
        <>
             <p>Electrónicos</p>
             <div>
                <ul>{lista}</ul>
             </div>
        </>
    )

}
export default Dictionary;