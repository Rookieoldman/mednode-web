# Formulario de contacto (web)

La landing envía mensajes con [FormSubmit](https://formsubmit.co/) a `info@mednode.es` (AJAX, sin backend propio).

## Activación (solo la primera vez)

1. Envía un mensaje de prueba desde la web (botón **Contáctanos** / **Escríbenos**).
2. Revisa la bandeja de `info@mednode.es` (y spam).
3. Abre el correo de FormSubmit y pulsa el enlace de **activación**.
4. A partir de ahí, los envíos llegarán directamente.

Si el envío automático falla, el modal muestra error y el botón **Abrir en Gmail** rellena asunto y cuerpo con los datos del formulario.

## Archivos

| Archivo | Rol |
|---------|-----|
| `js/contact-modal.js` | Modal, validación, FormSubmit + Gmail |
| `css/style.css` | Estilos del modal |
| Páginas `*/index.html` | Botones con `data-open-contact` |
