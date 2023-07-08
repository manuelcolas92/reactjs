# Dexter's PetShop!
___

### Proyecto E-commerce

Si bien Dexter's PetShop! es un e-commerce creado como proyecto de un curso de CODERHOUSE, es una App adaptable en un futuro a un e-commerce real.

### Instalación

Para clonar e instalar el proyecto seguir los siguientes pasos:

```sh
git clone https://github.com/manuelcolas92/reactjs
```
```sh
npm install
```
```sh
npm run dev
```

Luego Ctrl + Click en el link del server local.

### Estructura

La App está creada y desarrollada en ReactJS bajo la tecnología de Vite, junto a Firebase como plataforma para almacenar los datos de los productos y las órdenes generadas.

En cuanto a la estructura de archivos, en el repositorio encontramos:

- src
- .eslintrc.cjs
- .gitignore
- README.md
- index.html
- package-lock.json
- package.json
- vite.config.js

Dentro de la carpeta **src** se pueden encontrar los diferentes componentes en la carpeta **Components**, la lógica del carrito dentro de **context**, y la carpeta **services** que contiene los datos para vincular al servicio de firebase.
También tenemos el archivo **App.jsx** y **main.jsx** jnto a sus hojas de estilos, como generadores del DOM.

### Navegación

Una vez dentro de la App, se puede observar una navbar en la parte superior, la cual contiene:
- El logo del comercio que nos redirigirá a la sección principal donde se listan los productos
- Una searchbar que aún no está en funcionamiento
- Los botones que nos llevan a las diferentes secciones
- El carrito de compras con el número de productos que contiene

Luego de seleccionado el producto, se muestra en pantalla el detalle, con la cantidad en stock, y la posibilidad de agregar las cantidades deseadas.

A través del botón "Añadir al carrito" y posteriormente "Ir al carrito", se accede al componente Cart, donde vemos los productos agregados, con su precio, cantidad, subtotal, la posibilidad de eliminarlos, y al final un total de todos los precios con la posibilidad de limpiar el carrito, o dirigirse al checkout para generar la orden.

En la sección Checkout encontramos un formulario en el cuál nos pide los datos del comprador y luego la opción de generar la orden de compra.

Esta última se añade en la base de datos de Firebase con un ID el cuál se le informa al comprador.

### Estado del proyecto

Este proyecto está desarrollado al momento con los requisitos del curso, pero todavía falta el agregado de algunas funcionalidades como:

- La generación de un Dashboard para agregar productos desde la misma App a través de un panel de admin
- La opción de abonar a través de una plataforma como Mercado Pago

### Demo de la App subida a Vercel

https://dexterspetshop.vercel.app/

### Personas involucradas
**Institución:** CODERHOUSE - Curso ReactJS - Comisión 43235
**Profesor:** Sebastian Zuviria
**Tutor regular:** Lucia Dias
**Tutor adjunto:** Andres Nazzari
**Alumno:** Manuel Colás