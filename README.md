# MedNode Web (Astro)

Landing corporativa multiidioma (CA, ES, EU, GL) amb **Astro 6** + **Tailwind CSS 4**, desplegada a GitHub Pages (`mednode.es`).

La versió HTML anterior es conserva a `legacy-static/` (referència).

## Requisitos

- **Node.js ≥ 22.12.0** (Astro 6). En local: `nvm use` (lee `.nvmrc` → 22).

## Desenvolupament local

```bash
npm install          # o npm ci (recomanat en CI)
npm run dev          # http://localhost:4321
npm run build        # genera dist/ (mismo comando que GitHub Actions)
npm run preview      # previsualizar dist/
```

## GitHub Actions (build y despliegue)

En cada push a `main`, el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) ejecuta:

```bash
npm ci
npm run build
```

y publica la carpeta `dist/` en GitHub Pages.

**Configuración obligatoria en GitHub:** *Settings → Pages → Build and deployment → Source* = **GitHub Actions** (no «Deploy from a branch»).

Workflows:

| Archivo | Cuándo | Qué hace |
|---------|--------|----------|
| `deploy.yml` | push a `main` | `npm ci` + `npm run build` + deploy `dist/` |
| `ci.yml` | PRs y otras ramas | `npm ci` + `npm run build` (sin desplegar) |

## Estructura

```
src/
├── components/     # Navbar, Hero, Products, Advantages, Contact, Footer
├── i18n/           # ca.json, es.json, eu.json, gl.json
├── layouts/        # Layout.astro
├── pages/          # /, /ca/, /es/, /eu/, /gl/
└── styles/         # global.css (Tailwind + paleta MedNode)
public/
├── CNAME           # mednode.es
└── img/og-image.svg
```

## Contacto

Modal de contacto con FormSubmit → `info@mednode.es` (activar dominio en el primer envío; ver `docs/formulario-contacto.md`).

## DNS (Hostinger)

Registres A de `@` cap a GitHub Pages + CNAME `www` → `rookieoldman.github.io`. Vegeu `docs/correo-improvmx.md` per correu.
