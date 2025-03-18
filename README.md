# Juego de Amigo Secreto

Este proyecto es una aplicación web para ejercitar la logica de programacion en JavaScript del programa AluraLatam; permite a los usuarios ingresar nombres de amigos,
agregarlos a una lista y realizar un sorteo aleatorio para determinar quién es el "amigo secreto" elegido.

## Características
- Agregar nombres a una lista donde participa cada uno.
- Visualizar la lista de amigos ingresados en la parte de abajo  .
- Realizar un sorteo aleatorio.
- Reiniciar el juego para comenzar de nuevo.

##  Instalación
### 1️**Clonar el repositorio**
```bash
[ git clone https://github.com/tu-usuario/amigo-secreto.git](https://github.com/HuberTique/amigoSecretoAlura.git)
```
### 2️ **Abrir el proyecto en un navegador**
No se necesita instalar dependencias, ya que es un proyecto con **HTML, CSS y JavaScript puro**.

### 3️ **Ejecutar en un servidor local **
Si quieres ejecutarlo en un entorno de desarrollo local, puedes usar **Live Server** **live previou** en VS Code:
1. Instalar la extensión **Live Server** o **live previou** en Visual Studio Code.
2. Hacer clic derecho en `index.html` y seleccionar `Open with Live Server o **live previou**`.

---

##  Uso
1. Ingresa nombres en el campo de texto y haz clic en **Añadir**.
2. Los nombres se mostrarán en una lista en la parte inferior.
3. Para sortear, haz clic en **Sortear amigo**.
4. Para reiniciar el juego, haz clic en **Reiniciar juego**.

---

##  Dependencias
- No se requieren dependencias externas. Todo el código está basado en **HTML, CSS y JavaScript puro**.

---

##  Posibles Problemas y Soluciones
### ❌ **El botón "Añadir" no funciona**
✔️ Verifica que `app.js` esté correctamente referenciado en `index.html`:
```html
<script src="app.js" defer></script>
```

### ❌ **El botón "Sortear amigo" no hace nada**
✔️ Asegúrate de haber ingresado al menos **dos nombres** antes de sortear.

### ❌ **El botón "Reiniciar juego" no funciona**
✔️ Abre la consola (`F12` → "Consola") y verifica si hay errores en rojo.
✔️ Asegúrate de que la función `reiniciarJuego()` esté bien definida en `app.js`.

---

## Licencia
Este proyecto es de código abierto y puedes modificarlo y compartirlo libremente.

---

## 📩 Contacto
Si tienes dudas o sugerencias, puedes escribirme a [tu-email@example.com].

