
const Producto = ({producto, eliminarProducto, setProducto}) => {
    const { id, nombre, precioCompra, precioVenta } = producto;

    const handleEliminar = () => {
        const respuesta = confirm(`¿Desear eliminar el producto ${nombre}?`);

        if (respuesta) {
            eliminarProducto(id);
        }
    }

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    { nombre }
                </th>
                <td className="px-6 py-4">
                    { precioCompra }
                </td>
                <td className="px-6 py-4">
                    { precioVenta }
                </td>
                <td className="px-6 py-4">
                    { (precioVenta - precioCompra).toFixed(2) }
                </td>
                <td className="px-6 py-4 text-center flex items-center gap-4">
                    <button onClick={ e => setProducto(producto) } className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</button>
                    <button onClick={ handleEliminar } className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Eliminar</button>
                </td>
            </tr>
        </>
    )
}

export default Producto