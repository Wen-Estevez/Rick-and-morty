Está es una aplicación desarrollada en React que consume la API de The Rick and Morty API para mostrar los distintos personajes de la serie, su información, episodios en los que aparece y los datos del episodio.

Elegí esta API ya que fue la recomendada para la realizacion de la prueba.

 ### Instalación:
 npm install
<br>
### Ejecución: 
npm run start
<br>
### Aplicación para producción: 
npm run build

<br>

src/index.js: Punto de acceso a la App.

src/App.js: Conecta las url con las rutas.

<br>
src/Componentes: Contiene los componentes de la aplicación y sus respectivos estilos.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

src/Componentes/ContenedorPersonajes.js: Contenedor de cartas de personajes, trae la informacion de las paginas.

<br>

src/Vistas: Contiene vistas de la informacion de los personajes y sus respectivos estilos.

src/Vistas/Home.js: Pagina principal, recibe el estado cuando cambie de paginas.

src/Vistas/Extendida.js: Trae la informacion del personaje y crea la tarjeta del personaje.

src/Vistas/Episodios.js: Trae la informacion de los episodios en los que aparece el personaje y la informacion de cada episodio para crear la respectiva tarjeta.

<br>

src/Images: Contiene las imagenes de la aplicacion.
<br>

Una de las mejoras que de pueden implementar en la aplicación es incluir media queries para la que la aplicación pueda visualizarse de manera adecuada en todos los dispositivos de acuerdo a sus dimensiones.

En cuanto a las actualizaciones, una muy buena sería incluir todas las páginas de la API para mostrar y poder elegir a todos los personajes que almacena.
