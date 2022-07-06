
import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Listado from "./components/Listado"

const App = () => {

    const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('productos')) ?? []);
    const [producto, setProducto] = useState({});

    useEffect( () => {
        localStorage.setItem('productos', JSON.stringify(productos));
    }, [productos]);

    const eliminarProducto = (id) => {
        console.log('Eliminando producto ', id);
        const actualizarArrayProductos = productos.filter( producto => producto.id !== id );
        setProductos(actualizarArrayProductos);
    }

    return (
        <div>
            <Header />
            
            <div className="md:flex mt-16 gap-6">
                <Formulario 
                    productos={productos}
                    setProductos={setProductos}
                    producto={producto}
                    setProducto={setProducto}
                />
                <Listado 
                    productos={productos}
                    eliminarProducto={eliminarProducto}
                    setProducto={setProducto}
                />
            </div>

        </div>
    )
}

export default App