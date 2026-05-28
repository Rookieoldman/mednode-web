# Formulario de contacto (web)

La landing envía mensajes con [FormSubmit](https://formsubmit.co/) a `info@mednode.es` (POST clásico, sin backend propio).

## Activación (solo la primera vez)

1. Envía un mensaje de prueba desde la web (botón **Contáctanos** / **Escríbenos**).
2. Revisa la bandeja de `info@mednode.es` (y spam).
3. Abre el correo de FormSubmit y pulsa **ACTIVATE FORM**.
4. A partir de ahí, los envíos y la **respuesta automática** al visitante funcionan.

El formulario usa la clave opaca `1b11f3f7b22760ae01e4c7d13e05d2b1` en la URL (no el email en claro).

## Respuesta automática (noreply)

Tras cada envío correcto, FormSubmit envía al visitante un correo con el texto de `_autoresponse` (personalizado por idioma CA/ES/EU/GL). El mensaje indica que es **automático y no debe responderse** a esa dirección; para consultas debe usarse `info@mednode.es`.

> FormSubmit envía la autorespuesta desde sus servidores; no se puede fijar `noreply@mednode.es` como remitente en el plan gratuito. El texto del correo deja claro que no hay que contestar.

## Flujo técnico

- `POST` a `https://formsubmit.co/{clave}` (no AJAX: necesario para `_autoresponse`).
- Campos ocultos: `_subject` (prefijo `[MedNode]`), `_template`, `_autoresponse`, `_next`.
- Tras enviar, FormSubmit redirige a la misma página con `?contacto=ok#contacto-enviado` y se abre el modal con mensaje de éxito.

Si falla el envío, el modal muestra error y **Abrir en Gmail** rellena asunto y cuerpo.

## Archivos

| Archivo | Rol |
|---------|-----|
| `public/js/contact-modal.js` | Modal, validación, FormSubmit + Gmail |
| `src/styles/contact-modal.css` | Estilos del modal |
| Botones con `data-open-contact` en la landing Astro |

## noreply@ en Hostinger (opcional)

Si quieres una dirección `noreply@mednode.es` solo para mostrar en documentación, créala en ImprovMX como alias sin reenvío. La autorespuesta real la sigue enviando FormSubmit.

---

## Recibir avisos en la bandeja principal (no en spam)

FormSubmit envía el aviso **desde sus servidores** hacia `info@mednode.es` → ImprovMX lo reenvía a tu Gmail/Outlook. Ese reenvío suele ir a spam la primera vez. **No se arregla solo con código del sitio**: hace falta enseñar al filtro de tu buzón que esos correos son legítimos.

### Paso 1 — Una vez (importante)

1. Abre un correo de contacto que esté en **Spam**.
2. Pulsa **No es spam** / **Reportar como no spam**.
3. (Gmail) Menú ⋮ → **Añadir a contactos** el remitente que aparezca (p. ej. `formsubmit.co` o el nombre que muestre FormSubmit).

### Paso 2 — Filtro en Gmail (recomendado)

Los avisos usan asunto **`[MedNode]`** (p. ej. `[MedNode] Consulta web`).

1. Gmail → **Configuración** (engranaje) → **Ver toda la configuración** → pestaña **Filtros y direcciones bloqueadas** → **Crear un filtro nuevo**.
2. En **Asunto**, escribe: `[MedNode]`
3. **Crear filtro** → marca:
   - **Nunca enviarlo a Spam**
   - **Marcar como importante** (opcional)
   - **Aplicar la etiqueta** → crea «MedNode web» (opcional)
4. Guardar.

Si el remitente es siempre el mismo, puedes añadir también en el filtro: **De** → `formsubmit.co` (o el dominio que veas en «Mostrar original»).

### Paso 3 — Outlook / otros

- Mueve un mensaje a la bandeja de entrada y marca **No es correo no deseado**.
- Crea regla: asunto contiene `[MedNode]` → mover a bandeja de entrada.

### Por qué no usamos `_replyto`

El formulario **no** envía `_replyto` con el email del visitante: mezclar «enviado por FormSubmit» + «responder a un correo aleatorio» dispara filtros anti-spoofing. En el aviso verás el campo **email** en la tabla; responde copiando esa dirección o pulsando el enlace del correo del visitante.

### Si sigue yendo a spam

| Revisar | Acción |
|--------|--------|
| SPF en Hostinger | TXT `v=spf1 include:spf.improvmx.com ~all` (ver `docs/correo-improvmx.md`) |
| Alias ImprovMX | `info` confirmado en el buzón destino |
| Formulario activado | Enlace **ACTIVATE FORM** del correo de FormSubmit |
| Alternativa | Reenviar `info@mednode.es` directamente a Gmail (sin cadena extra) o valorar otro backend con dominio propio (Formspree Pro, Resend, etc.) |
