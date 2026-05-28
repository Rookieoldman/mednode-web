# Variante «Hospital Pro» — rama `feat/design-hospital-pro`

Diseño alternativo de la landing MedNode: tono **clínico, serio y dinámico**, orientado a decisores hospitalarios.

## Cómo verla en local

```bash
git checkout feat/design-hospital-pro
npm install
npm run dev
```

Abre `http://localhost:4321/es/` (o `/ca/`, `/eu/`, `/gl/`).

## Cambios respecto a `main`

| Área | Enfoque |
|------|---------|
| **Paleta** | Azul clínico profundo (`clinical-*`), acentos teal hospitalario |
| **Tipografía** | DM Sans (titulares) + Source Sans 3 |
| **Hero** | Fondo oscuro con rejilla, animación de entrada, red de nodos en marco glass |
| **Navbar** | Barra oscura semitransparente (sticky) |
| **TrustBar** | Franja RGPD · eIDAS · On-premise · HIS |
| **Productos** | Tarjetas numeradas con barra lateral de color |
| **Ventajas** | Grid claro con badges numerados |
| **Contacto** | Bloque CTA en panel oscuro |
| **Motion** | Fade-in, hover en tarjetas, red animada (sin JS extra) |

## Despliegue

Esta rama **no** despliega a producción automáticamente. Para publicarla:

1. Revisar en PR contra `main`.
2. Fusionar cuando se apruebe, o configurar preview en GitHub Pages desde la rama.

## Volver al diseño anterior

```bash
git checkout main
```
