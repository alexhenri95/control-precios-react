import Producto from "./Producto"

const Listado = ({productos, eliminarProducto, setProducto}) => {

    let totalPC = 0;
    let totalPV = 0;
    let totalGA = 0;


    let resultadoGA = productos.reduce( (totalGA, producto) => totalGA + (producto.precioVenta - producto.precioCompra), 0 );

    let resultadoPV = productos.reduce( (totalPV, producto) => totalPV + producto.precioVenta, 0 );

    let resultadoPC = productos.reduce( (totalPC, producto) => totalPC + producto.precioCompra, 0 );

    return (
        <div className="md:w-3/5 mt-10 md:mt-0">
            <h2 className="text-center text-2xl uppercase font-bold">Detalle de Productos</h2>
   
            { productos && productos.length ? (
                <>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 h-96 overflow-y-scroll">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Producto
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    P. Compra
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    P. Venta
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ganancia
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Opciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            productos.map( producto => (
                            
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                    eliminarProducto={eliminarProducto}
                                    setProducto={setProducto}
                                />

                            ) )
                        }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4">
                                    <span>$ {resultadoPC.toFixed(2)}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span>$ {resultadoPV.toFixed(2)}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span>$ {resultadoGA.toFixed(2)}</span>
                                </td>
                                <td className="px-6 py-4"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                </>
            ) : (
                <div className="text-center bg-gray-700 mt-5 rounded-md p-5 font-bold">
                    No hay productos registrados...
                    <div className="flex items-center justify-center mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                    </div>
                </div>
            ) }
                    
        </div>
    )
}

export default Listado