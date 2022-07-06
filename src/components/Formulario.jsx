import Error from './Error'
import { useEffect, useState } from "react"

const Formulario = ({productos, setProductos, producto, setProducto}) => {

    const [nombre, setNombre] = useState('');
    const [precioCompra, setPrecioCompra] = useState('');
    const [precioVenta, setPrecioVenta] = useState('');
    const [error, setError] = useState(false);

    useEffect( () => {
        if (Object.keys(producto).length > 0) {
            setNombre(producto.nombre);
            setPrecioCompra(producto.precioCompra);
            setPrecioVenta(producto.precioVenta);
        }
    },[producto] );

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, precioCompra, precioVenta].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        const objProducto = {
            nombre,
            precioCompra: Number(precioCompra),
            precioVenta: Number(precioVenta)
        }

        if (producto.id) {
            objProducto.id = producto.id;
            const actualizarArrayProductos = productos.map( productoState => productoState.id === producto.id ? objProducto : productoState );

            console.log(actualizarArrayProductos);
            setProductos(actualizarArrayProductos);
            setProducto({});
        }else{
            objProducto.id = generarId();
            setProductos([ objProducto, ...productos ]);
        }

        setNombre('');
        setPrecioCompra('');
        setPrecioVenta('');

    }

    return (
        <div className="md:w-2/5">

            <h2 className="text-center text-2xl uppercase font-bold">Registra tu Producto</h2>

            <form onSubmit={ handleSubmit } className="text-white mt-4 bg-gray-700 p-5 rounded-lg">

                { error && <Error mensaje="(*) Todos los campos son requeridos." /> }

                <div className="mb-4">
                    <label htmlFor="nombre">Producto</label>
                    <input 
                        type="text"
                        placeholder="Producto ABC"
                        id="nombre"
                        className="w-full p-2 rounded text-gray-800 border" 
                        value={ nombre }
                        onChange={ e => setNombre(e.target.value) }
                    />
                </div>
                
                <div className="flex gap-4">
                    <div className="mb-4">
                        <label htmlFor="precioCompra">Precio de compra</label>
                        <input 
                            type="number"
                            placeholder="1.00"
                            id="precioCompra"
                            className="w-full p-2 rounded text-gray-800 border" 
                            value={ precioCompra }
                            onChange={ e => setPrecioCompra(e.target.value) }
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="precioVenta">Precio de Venta</label>
                        <input 
                            type="number"
                            placeholder="1.50"
                            id="precioVenta"
                            className="w-full p-2 rounded text-gray-800 border" 
                            value={ precioVenta }
                            onChange={ e => setPrecioVenta(e.target.value) }
                        />
                    </div>
                </div>

                <div className="mt-3">
                    <input 
                        type="submit" 
                        value={ producto.id ? 'Actualizar Producto' : 'Registrar Producto' }
                        className="w-full p-3 rounded bg-blue-600 hover:bg-blue-700 cursor-pointer uppercase font-bold"    
                    />
                </div>

            </form>
        </div>
    )
}

export default Formulario