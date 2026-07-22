function GestionTarjeta({ solicitud, editar, eliminar }) {
    return (
        <article className="gestion-tarjeta">
            <h3>{solicitud.nombreSol}</h3>
            <p>Animal: {solicitud.animal}</p>
            <p>Fono: {solicitud.telefono}</p>
            <p>Email: {solicitud.email}</p>
            <p>Fecha: {solicitud.fecha}</p>
            <p>Estado: {solicitud.estado}</p>
            <button onClick={() => editar(solicitud)}>
                Editar
            </button>
            <button onClick={() => eliminar(solicitud.id)}>
                Eliminar
            </button>
        </article>
    );
}

export default GestionTarjeta;