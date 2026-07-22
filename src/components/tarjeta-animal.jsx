function TarjetaAnimal({ animal }) {
    return (
        <article className="tarjeta-animal">
            <img src={animal.imagen} alt="" />
            <div className="info-animal">
                <h2>{animal.nombre}</h2>
                <p>{animal.especie}, {animal.edad}</p>
                <p>Tamaño: {animal.tamanio}</p>
                <p>Disponible: {animal.disponible ? "Sí" : "No"}</p>
            </div>
        </article>
    );
}

export default TarjetaAnimal;