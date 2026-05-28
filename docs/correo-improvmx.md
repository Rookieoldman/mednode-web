# Correo MedNode con ImprovMX

[ImprovMX](https://improvmx.com/) reenvía correos de `info@mednode.es` (y otros alias) a tu buzón personal (Gmail, etc.) sin mantener un servidor de correo propio.

La web ya usa `mailto:info@mednode.es`. Aquí solo se configura **ImprovMX** + **DNS en Hostinger**.

Guía oficial: [Generic DNS Configuration](https://improvmx.com/guides/generic-dns-configuration/)

---

## 1. Cuenta y dominio en ImprovMX

1. Regístrate en [improvmx.com](https://improvmx.com/).
2. **Dashboard** → **Add domain** → `mednode.es`.
3. Crea el alias:
   - **Alias:** `info`
   - **Forward to:** tu correo destino (p. ej. `tu@gmail.com`)
4. ImprovMX enviará un email de confirmación al destino; hay que aceptarlo.

Opcional: añade también `mednode.cat` como segundo dominio si quieres `info@mednode.cat`.

---

## 2. DNS en Hostinger (junto con la web)

hPanel → **Dominios** → `mednode.es` → **DNS / Zona DNS**.

### 2.1 Eliminar MX antiguos

Borra cualquier registro **MX** previo (Hostinger Email, Zoho, etc.). ImprovMX **no admite** MX de otro proveedor a la vez en el mismo dominio.

### 2.2 Correo — ImprovMX

| Tipo | Nombre / Host | Prioridad | Valor |
|------|----------------|-----------|--------|
| MX | `@` | 10 | `mx1.improvmx.com` |
| MX | `@` | 20 | `mx2.improvmx.com` |
| TXT | `@` | — | `v=spf1 include:spf.improvmx.com ~all` |

En Hostinger el host suele ser `@` o dejarse en blanco para el apex.

### 2.3 Web — GitHub Pages (no tocar si ya funciona)

| Tipo | Nombre | Valor |
|------|--------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `rookieoldman.github.io` |

Web (A/CNAME) y correo (MX) pueden convivir en el mismo dominio.

### 2.4 Dominio `mednode.cat` (opcional)

Si quieres correo en `.cat`, repite los mismos MX + TXT en la zona DNS de `mednode.cat` y añade el dominio en ImprovMX.

---

## 3. Verificación

1. Espera propagación DNS (a menudo &lt; 1 h; hasta 48 h).
2. En ImprovMX: el dominio debe mostrar **Email forwarding active** (o pulsa **Check again**).
3. Comprueba registros en vivo: [ImprovMX Inspector](https://inspector.improvmx.com/mednode.es)
4. Envía un correo de prueba desde Gmail a `info@mednode.es` → debe llegar al destino del alias.

---

## 4. Enviar correo *desde* `@mednode.es` (opcional)

ImprovMX permite reenvío **gratis**; para **enviar** como `info@mednode.es` hace falta su SMTP (planes de pago / configuración SMTP en el panel). La landing solo necesita recibir contactos vía `mailto:`.

---

## 5. Problemas frecuentes

| Síntoma | Qué revisar |
|---------|-------------|
| DNS no valida | Solo MX de ImprovMX; host `@` correcto en Hostinger |
| No llega el correo | Alias confirmado en el buzón destino |
| Va a spam (correo normal) | SPF TXT aplicado; ver `docs/formulario-contacto.md` → bandeja principal |
| Avisos del formulario web en spam | FormSubmit + reenvío: marcar «No es spam» y filtro Gmail asunto `[MedNode]` |
| Web caída | No poner CNAME en `@` si usas A de GitHub + MX |

---

## Resumen

| Qué | Dónde |
|-----|--------|
| `mailto:info@mednode.es` | Repo `mednode` |
| Alias `info` → tu Gmail | [ImprovMX Dashboard](https://app.improvmx.com/) |
| MX + SPF | Hostinger DNS |
| HTTPS web | GitHub Pages |
