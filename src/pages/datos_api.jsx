import { useEffect, useState } from "react";
import TarjetaAnimal from "../components/tarjeta-animal";
import { obtenerAnimales } from "../services/api";

function DatosAPI() {
    const [animales, setAnimales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function cargarAnimales() {
            try {
                const datos = await obtenerAnimales();
                setAnimales(datos.animales);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        cargarAnimales();
    }, []);

    if (loading) {
        return <h2>Cargando animales...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <main className="inicio">
            <h1>Criaturitas en busca de una segunda oportunidad</h1>
            <section className="tarjetas">
                {animales.map(
                    (animal)=>(
                        <TarjetaAnimal key={animal.id} animal={animal}/>
                    )
                )}
            </section>
        </main>
    );
}

export default DatosAPI;