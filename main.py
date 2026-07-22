"""
API: Animales del refugio
Alumno: Iván Alejandro Paredes González  ·  Sección: C2  ·  Tema 16: Refugio de animales
Proyecto EV3 (UA3) — API asignada por el docente.

Ejecutar:
    pip install -r requirements.txt
    uvicorn main:app --host 0.0.0.0 --port 8000

Endpoint principal:  GET /api/animales
Documentación:       http://127.0.0.1:8000/docs
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="API Animales del refugio")

# CORS abierto para que el frontend (React/Vite) pueda consumir la API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# "Base de datos" en memoria (arreglo de objetos).
DATOS = [{'id': 1,
  'nombre': 'Rocky',
  'especie': 'Perro',
  'edad': '2 años',
  'tamanio': 'Mediano',
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Perro'},
 {'id': 2,
  'nombre': 'Michi',
  'especie': 'Gato',
  'edad': '1 año',
  'tamanio': 'Pequeño',
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Gato'},
 {'id': 3,
  'nombre': 'Luna',
  'especie': 'Perro',
  'edad': '4 años',
  'tamanio': 'Grande',
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Perro'},
 {'id': 4,
  'nombre': 'Simba',
  'especie': 'Gato',
  'edad': '3 años',
  'tamanio': 'Mediano',
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Gato'},
 {'id': 5,
  'nombre': 'Toby',
  'especie': 'Perro',
  'edad': '6 meses',
  'tamanio': 'Pequeño',
  'disponible': False,
  'imagen': 'https://placehold.co/400x300?text=Perro'}]


@app.get("/")
def inicio():
    return {
        "mensaje": "API Animales del refugio",
        "endpoint": "GET /api/animales",
        "docs": "/docs",
    }


@app.get("/api/animales")
def listar():
    """Devuelve el JSON con todos los registros."""
    return {"total": len(DATOS), "animales": DATOS}


@app.get("/api/animales/{item_id}")
def obtener(item_id: int):
    """Devuelve un registro por su id (404 si no existe)."""
    for item in DATOS:
        if item["id"] == item_id:
            return item
    raise HTTPException(status_code=404, detail="No encontrado")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
