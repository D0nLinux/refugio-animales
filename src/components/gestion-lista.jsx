import GestionTarjeta from "./gestion-tarjeta";

function GestionLista({solicitudes, editar, eliminar}) {
    if (solicitudes.length === 0) {
        return <p>No hay solicitudes de adopción registradas.</p>;
    }

    return(
        <section className="tarjetas">
            {
                solicitudes.map((solicitud)=> (
                    <GestionTarjeta key={solicitud.id} solicitud={solicitud} editar={editar} eliminar={eliminar} />
                ))
            }
        </section>
    );
}

export default GestionLista;