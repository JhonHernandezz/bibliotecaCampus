# **BIBLIOTECA CAMPUS**

Se desarrolla la prueba de campus, haciendo las consultas correspondientes.

Se utilizar Node Express, MySQL, Typescript



##### CONSULTAS

1. Obtener todos los autores y su nacionalidad. 
2. Listar todas las categorías disponibles. 
3. Mostrar todas las editoriales y sus direcciones.
4. Obtener los estados de los libros y sus descripciones.
5. Mostrar todos los libros con su título, autor y editorial. 
6.  Listar los préstamos realizados con fecha de préstamo,  fecha de devolución y estado. 
7. Obtener todas las reservas realizadas con su fecha de  reserva y estado. 
8.  Mostrar los libros disponibles para préstamo con su título y  autor.
9. Obtener los libros prestados y su fecha de devolución.
10. Listar los usuarios y sus correos electrónicos. 
11. Mostrar los libros escritos por un autor específico (ejemplo:  Gabriel García
12. Obtener los libros de cierta categoría (ejemplo: Novela). 
13. Listar los préstamos realizados por un usuario (ejemplo:  Juan Pérez).
14. Mostrar los libros con más de 500 páginas y su autor.
15. Obtener los libros prestados a un usuario específico  (ejemplo: María Gómez). 
16. Listar los autores de nacionalidad española. 
17. Mostrar los libros que están en reserva actualmente. 
18. Obtener los libros de cierta editorial (ejemplo: Editorial  Planeta).
19. Listar los préstamos con fecha de préstamo y usuario que  los realizó. 
20. Mostrar los libros con título que contengan la palabra  "Tokio".



#### BASE DE DATOS

[![IMG Base de datos](./assets/img/Diagrama%20libros.png)



## Instalación

1. Para descargar Node.js ve a la siguiente página "[Download | Node.js (nodejs.org)](https://nodejs.org/en/download)".

2. Descarga la versión de Node.js correspondiente a su sistema operativo.

3. Clona este repositorio en tu máquina local.

4. Abre una terminal en el editor de código de tu preferencia, se recomienda "Visual Studio Code".

5. Ejecuta el siguiente comando para instalar las dependencias:

   `NOTA:` Las dependencias a utilizar ya vienen dentro del proyecto, solo clone el repositorio y abra la terminal e ingrese el siguiente comando.

```
npm install;
```

1. Una vez instaladas las dependencias, tienes que ejecutar el nodemon de la siguiente manera y también ejecutar el tsc.

   `npm run dev;`

   `npm run tsc;`



## Configuración

1. Asegurarse de tener creada la base de datos, si no cuentas con una base de datos, este proyecto ya trae una por defecto en la ruta `db/db.sql`
2. Crea un archivo `.env` en el directorio raíz de la aplicación.
3. Dentro del archivo `.env` , define las siguientes variables de entorno:

```
MY_CONFIG={"hostname": "", "port": }
MY_CONNECT={"host": "", "user": "", "password": "", "database": "", "port": "3306"}
MY_JWT="";
```



#### IMPORTANTE

Antes de empezar a utilizar las diferentes rutas y endPoints debemos generar un token de acceso, que debemos colocar en nuestro **header/Autorization**, este token tiene un limite de **10h**, en ese rango de tiempo podremos acceder a las rutas y endPoints de nuestra Api.

- para generar nuestro token, debemos acceder a nuestra extencion de visual estudio llamada **Thunder-Client**, colocar la siguiente ruta:
- `GET: http://"hostname":"port"/generarToken/id/name`

y en header, lo siguiente:

```
`GET: http://"hostname":"port"/generarToken/123/jhon`
```



## Uso

Puedes probar diferentes rutas accediendo a:

- `http://"hostname":"port"/user` ruta relacionada con todas las consultas.





#### RUTAS 

http://127.10.10.10:5500/user/autores/nacionalidad -->

http://127.10.10.10:5500/user/categorias -->

http://127.10.10.10:5500/user/editoriales/direcciones -->

http://127.10.10.10:5500/user/estados/descripciones -->

http://127.10.10.10:5500/user/titulo/autor/editorial -->

http://127.10.10.10:5500/user/prestamo/starDate/endDate -->

http://127.10.10.10:5500/user/reserva/starDate/estado -->

http://127.10.10.10:5500/user/reserva/starDate/estado -->

http://127.10.10.10:5500/user/prestados/devolucion -->

http://127.10.10.10:5500/user/usuarios/email -->

http://127.10.10.10:5500/user/autor/Gabriel -->

http://127.10.10.10:5500/user/categoria/Novela -->

http://127.10.10.10:5500/user/prestamos/Juan -->

http://127.10.10.10:5500/user/libros/paginas -->

http://127.10.10.10:5500/user/usuario/Ana -->

http://127.10.10.10:5500/user/autores -->

http://127.10.10.10:5500/user/reservados -->

http://127.10.10.10:5500/user/editorial/Novela -->

http://127.10.10.10:5500/user/prestamoss/usuario -->

http://127.10.10.10:5500/user/titulo