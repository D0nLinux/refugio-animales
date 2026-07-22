import { useEffect, useState } from "react";

function GestionForm({agregarSol, editarSol}) {
    const [form, setForm] = useState({
        nombreSol: "",
        rut: "",
        telefono: "",
        email: "",
        animal: "",
        fecha: "",
        estado: "Pendiente"
    });

    useEffect(() => {
        if (editarSol) {
            setForm(editarSol);
        }
    }, [editarSol]);

    function onChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    function onSubmit(e) {
        e.preventDefault();
        if (
            !form.nombreSol ||
            !form.rut ||
            !form.telefono ||
            !form.email ||
            !form.animal ||
            !form.fecha
        ) {
            alert("Complete todos los campos.");
            return;
        }
        agregarSol(form);
        setForm({
            nombreSol: "",
            rut: "",
            telefono: "",
            email: "",
            animal: "",
            fecha: "",
            estado: "Pendiente"
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Nueva Solicitud</h2>
            <input
                type="text"
                name="nombreSol"
                placeholder="Nombre"
                value={form.nombreSol}
                onChange={onChange}
            />
            <input
                type="text"
                name="rut"
                placeholder="RUT"
                value={form.rut}
                onChange={onChange}
            />
            <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={onChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Correo"
                value={form.email}
                onChange={onChange}
            />
            <input
                type="text"
                name="animal"
                placeholder="Nombre del animal"
                value={form.animal}
                onChange={onChange}
            />
            <input
                type="date"
                name="fecha"
                value={form.fecha}
                onChange={onChange}
            />
            <button type="submit">
                Guardar
            </button>
        </form>
    );
}

export default GestionForm;