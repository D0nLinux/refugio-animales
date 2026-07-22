import { useEffect, useState } from "react";
import { obtenerAnimales } from "../services/api";

function Inicio() {
    return (
        <main className="inicio">
            <section id="hero">
                <h1>Refugio de Animales DonLinux</h1>
                <p>Rescatamos animalitos de la calle para conseguirles una oportunidad con dueños deseosos de compartir sus vidas con ellos.</p>
            </section>
        </main>
    );
}

export default Inicio;