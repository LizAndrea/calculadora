# calculadora
Calculadora con reconocimiento de voz, usando la web speech API

#requisitos
1. Asegúrate de que tu navegador soporte la Web Speech API: La Web Speech API está soportada en la mayoría de los navegadores modernos, pero asegúrate de que tu navegador la soporte.
2. Permisos de micrófono: Asegúrate de que tu navegador tenga permisos para acceder al micrófono.
3. Prueba la funcionalidad: Abre tu proyecto en el navegador y prueba el botón de reconocimiento de voz para asegurarte de que funciona correctamente.

# probar la aplicacion
Para levantar tu proyecto en un navegador, sigue estos pasos:

1. Navega a tu directorio donde está guardado tu proyecto.
cd /opt/calculadora

2. Inicia un servidor web simple: Puedes usar python3 para iniciar un servidor web simple. Ejecuta el siguiente comando:
python3 -m http.server

4. Esto iniciará un servidor web en el puerto 8000 por defecto.

5. Abre tu navegador: Abre tu navegador web en Windows y navega a la siguiente URL:
http://localhost:8000
Esto debería mostrar tu proyecto de calculadora.

6. Si prefieres usar otro puerto, puedes especificarlo al iniciar el servidor:
python3 -m http.server 8080
Y luego navega a:
http://localhost:8080


