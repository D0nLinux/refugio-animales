const API_URL = "http://localhost:8000/api/animales";

export async function obtenerAnimales() {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
        throw new Error("No fue posible obtener los animales.");
    }

    return await respuesta.json();
}