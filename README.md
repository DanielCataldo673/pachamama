React + Vite - Pachamama
Este es un proyecto de React creado con Vite, que funciona como un e-commerce dedicado a la venta de plantas y servicios relacionados con el cuidado de espacios verdes.

Descripción del Proyecto
En Pachamama somos una empresa familiar apasionada por la naturaleza y el cuidado del medio ambiente. Desde nuestros orígenes, hemos dedicado nuestro esfuerzo a ofrecer un amplio catálogo de plantas que enriquecen y embellecen los hogares, jardines y espacios de todos nuestros clientes.

En nuestro vivero, encontrarás una variedad de plantas: frutales, medicinales, aromáticas, suculentas y ornamentales, todas cultivadas con esmero y dedicación para garantizar su salud y belleza. Creemos en la importancia de conectar con la naturaleza, promover la biodiversidad y aportar bienestar a las vidas de quienes nos eligen.

Nuestro compromiso es brindarte productos de calidad y un asesoramiento cercano, porque en Pachamama, plantamos más que plantas: sembramos confianza y respeto por la naturaleza.

Visión
Ser líderes en la venta de plantas, y en el diseño y mantenimiento de espacios verdes, ofreciendo productos de alta calidad y sostenibles para el planeta.

Misión
Ofrecer productos que realcen las vidas de nuestros clientes, cuidando y protegiendo el medio ambiente en cada paso de nuestra cadena de suministro.

Valores
Nos comprometemos a ofrecer productos y servicios de la más alta calidad para satisfacer las necesidades de nuestros clientes.

Servicios
Pachamama ofrece los siguientes servicios especializados:

Paisajismo: Diseño, planificación y ejecución de espacios exteriores atractivos y funcionales, incluyendo creación de jardines temáticos, implementación de céspedes, selección de plantas nativas y ornamentales, y diseño de caminos y elementos decorativos. El objetivo es transformar espacios vacíos en ambientes armoniosos, ecológicos y estéticamente agradables, adaptados a las necesidades y gustos del cliente.

Mantenimiento de Jardines: Tareas esenciales para mantener la belleza y salud de las áreas verdes, como poda de árboles y arbustos, riego programado, fertilización, control de plagas, limpieza de céspedes y eliminación de maleza. Aseguramos que los jardines permanezcan en perfectas condiciones durante todo el año, brindando un aspecto cuidado y saludable.

Fumigaciones: Aplicaciones de productos químicos o biológicos de manera segura y efectiva para el control de plagas, insectos y enfermedades que afectan plantas y espacios exteriores, siguiendo las normas ambientales y de salud. Esto ayuda a proteger los jardines y áreas verdes, asegurando un entorno libre de plagas.

Instalación
Para ejecutar este proyecto localmente, sigue los siguientes pasos:

Clona el repositorio:

git clone https://github.com/DanielCataldo673/pachamama.git

Navega al directorio del proyecto:

cd pachamama

Instala las dependencias:

npm install
# o si usas yarn
# yarn install

Uso
Una vez que hayas instalado las dependencias, puedes iniciar la aplicación:

Inicia el servidor de desarrollo:

npm run dev
# o si usas yarn
# yarn dev

Esto iniciará la aplicación en modo de desarrollo, generalmente accesible en http://localhost:5173/ (o un puerto similar que te indique la consola).

Explora la aplicación:
Abre tu navegador y ve a la URL indicada para interactuar con la aplicación.

Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

npm run dev: Inicia la aplicación en modo de desarrollo. Abre http://localhost:5173 para verla en tu navegador.
La página se recargará si haces ediciones. También verás cualquier error de lint en la consola.

npm run build: Compila la aplicación para producción en la carpeta dist.
Construye React en modo de producción y optimiza el rendimiento.
La construcción está minificada y los nombres de archivo incluyen los hashes.
Tu aplicación está lista para ser desplegada.

npm run lint: Ejecuta ESLint para revisar el código en busca de problemas.

npm run preview: Sirve la construcción de producción localmente.

Configuración de ESLint (Opcional, si aplicas cambios)
Si estás desarrollando una aplicación de producción, te recomendamos usar TypeScript y habilitar reglas de linting conscientes del tipo. Consulta la plantilla TS para integrar TypeScript y typescript-eslint en tu proyecto.

Plugins Oficiales (Información de Vite)
Actualmente, hay dos plugins oficiales disponibles:

@vitejs/plugin-react utiliza Babel para Fast Refresh

@vitejs/plugin-react-swc utiliza SWC para Fast Refresh
