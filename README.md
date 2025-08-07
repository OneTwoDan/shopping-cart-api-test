# Prueba Técnica – API y Carrito de Compras

API y frontend en Next.js para listar productos, agregar al carrito y calcular la mejor combinación de productos según un presupuesto.

## Demo en Vivo
[Ver aplicación desplegada](https://shopping-cart-api-test.vercel.app/)

## Tecnologías

- Next.js (frontend y backend)
- Tailwind CSS

## Instalación

```bash
git clone https://github.com/OneTwoDan/shopping-cart-api-test.git
cd shopping-cart-api-test
npm install
npm run dev
```

Disponible en: [http://localhost:3000](http://localhost:3000)

## Endpoints

**GET /api/products** → Lista de productos  
**POST /api/cart** → Agregar producto al carrito  
**GET /api/cart** → Ver carrito
**DELETE /api/cart** → Vacía el carrito

Ejemplo de `/api/products`:

```json
[
  {
    "id": 1,
    "name": "Cozy Knit Sweater",
    "price": 49.99,
    "image": "/products/sweater.png"
  },
  {
    "id": 2,
    "name": "Classic Denim Jeans",
    "price": 59.99,
    "image": "/products/jeans.png"
  }
]
```

## Funciones

- Listar y agregar productos al carrito.
- Calcular mejor combinación de productos sin exceder presupuesto.
