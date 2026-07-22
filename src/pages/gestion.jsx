import { useEffect, useState } from "react";

import GestionForm from "../components/gestion-form";
import GestionLista from "../components/gestion-lista";

function Gestion() {
    const [solicitudes, setSolicitudes] = useState([]);
    const [solicitudEditar, setSolicitudEditar] = useState(null);
    useEffect(() => {
        const datos = JSON.parse(
            localStorage.getItem("solicitudes")
        ) || [];
        setSolicitudes(datos);
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "solicitudes",
            JSON.stringify(solicitudes)
        );
    }, [solicitudes]);

    function agregarSol(solicitud) {
        if (solicitud.id) {
            const actualizadas = solicitudes.map((item) =>
                item.id === solicitud.id ? solicitud : item
            );
            setSolicitudes(actualizadas);
            setSolicitudEditar(null);
        } else {
            solicitud.id = Date.now();
            setSolicitudes([
                ...solicitudes,
                solicitud
            ]);
        }
    }

    function editarSol(solicitud) {
        setSolicitudEditar(solicitud);
    }

    // Eliminar una solicitud
    function eliminarSol(id) {
        const confirmar = window.confirm(
            "¿Desea eliminar esta solicitud?"
        );
        if (!confirmar) return;
        const nuevas = solicitudes.filter(
            (item) => item.id !== id
        );
        setSolicitudes(nuevas);
    }

    return (
        <main className="gestion">
            <h1>Gestión de Solicitudes de Adopción</h1>
            <GestionForm
                agregarSol={agregarSol}
                editarSol={solicitudEditar}
            />
            <hr />
            <GestionLista
                solicitudes={solicitudes}
                editar={editarSol}
                eliminar={eliminarSol}
            />
        </main>
    );
}

export default Gestion;