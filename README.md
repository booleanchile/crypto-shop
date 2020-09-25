# CryptoShop

Tienda en línea que tiene como objetivo conectarse a diversos proveedores
de productos que acepten pagos a través de Criptomonedas.
Para construir esta aplicación Boolean Academia ha convocado a diversos personajes del rubro TI que aportarán con sus conocimientos para hablar de temas relevantes en la construcción de un producto digital.

Objetivos:
- Enseñar como debe ser un proceso de desarrollo moderno desde el punto de vista del flujo de trabajo hasta las herramientas técnicas que le permitirán al auditor de los videos y/o lector de este repositorio; conocer algunas de las mejores prácticas de desarrollo relatadas y desarrolladas por expertos.
- Fomentar el uso de las plataformas digitales para la venta de productos y mostrar las ventajas y desventajas de utilizar la tecnlogía de criptomonedas para generar una alternativa para pagos internacionales.
- Generar comunidad para continuar aportando y manteniendo este repositorio en el tiempo generando un canal para que más personas se integren a aportar y aprender a través de este repositorio enseñando y guíando a todos los entusiastas a aportar


#### STAGING
   https://crypto-shop-staging.herokuapp.com/

Cronograma Capítulo 1:

- Conversación (10 minutos)
   - Presentar relatores del video
   - Presentar que es Boolean y los amigos de DreamBox
   - Mostrar la API que consumiremos
   - Hablar de desarrollo moderno

- Next create app, agregar proyecto "with-react-motion" (Leo 10 minutos)
    - Adaptación creando página para productos adaptando los links
    - Utilizando SEMANTIC HTML Y AGREGANDO SEO
    - Utilizar imagen por defecto (utilizando CDN y explicando porque) para productos
    - Commit pase a NICO

- Como utilizar git y Semantic commit, changelog etc (NICO 10 minutos)
  - Ejemplo como se instala las librerias y como se configuran
  - rebase para dejar toda la historia con el formato correcto
  - mejorar documentación
  - Commit pase a GONZALO

  https://github.com/jeko2000/git-style-guide#branches

  
- Stubby y no depender del backend + Jest testing --> utilización de API https://dreampay-guuz2y3uia-uc.a.run.app/api/v1/products/list (Gonzalo 20 minutos)
  - instalación y configuraciín de Stubby
  - integración de endpoint
  - Creación de Servicio usando Axios
  - Creación de Unit Test ---> JEST ERROR CON IMPORT
  - Commit pase a LEO

- Crear la galería usando Framer motion (Leo 20 minutos)
  - que es framer motion
  - sharedLayout
  - animaciones en bloques de descripción
  - Mejora de los stubs y como "exigirle" al backend (o modelar BFF)
  - Commit pase a NICO

- Integración Continua (Gonzalo 10 minutos)
  - Archivo de manifiesto y conexión con github (Build, Test, Staging, Deploy)
  - Heroku y Docker (imagen de producción previamente configurada oculta al público)
  - CodeFactor + Snyk
  - Mejora Documentación

- Cierre capítulo
 - Spoilers siguiente capitulo
 - Palabra finales invitado
 - Palabras finales LEO y Gonza
