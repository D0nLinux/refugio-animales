# API — Animales del refugio

**Alumno:** Iván Alejandro Paredes González  ·  **Sección:** C2
**Tema:** Tema 16: Refugio de animales

API asignada por el docente para la **Evaluación 3 (UA3)**. Tu frontend en React debe
**consumir** esta API con `fetch` o `axios`, mostrando los estados de ⏳ carga, ✅ datos y ❌ error.

## Endpoint

- `GET /api/animales` → lista todos los registros (`{ total, animales: [...] }`)
- `GET /api/animales/{id}` → un registro por id

## Cómo la usarás en el frontend

GET /api/animales muestra los animales en adopción; el CRUD (LocalStorage) registra solicitudes de adopción.

> Tu **CRUD con Local Storage** (Solicitudes de adopción) es lo que tú administras (crear/editar/eliminar).
> La **API** entrega datos de referencia que muestras y usas para llenar los selectores del formulario.

## Cómo correr la API

```bash
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

Prueba: <http://127.0.0.1:8000/api/animales>  ·  Docs: <http://127.0.0.1:8000/docs>

## Cómo consumirla desde React (ejemplo)

```javascript
useEffect(() => {
  fetch("http://127.0.0.1:8000/api/animales")
    .then((res) => {
      if (!res.ok) throw new Error("Error " + res.status)
      return res.json()
    })
    .then((data) => setDatos(data.animales))   // ✅ datos
    .catch((err) => setError(err.message))        // ❌ error
    .finally(() => setCargando(false))            // fin de ⏳ carga
}, [])
```
## Uso de IA

Se usó el chatbot ChatGPT como guía para el diseño de las rutas de los directorios del proyecto, además para redactar el estilo del sitio y la llamada a la API.
