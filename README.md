# MedNode Web (Astro v2)

Landing corporativa multiidioma (CA, ES, EU, GL) amb **Astro 6** + **Tailwind CSS 4**, desplegada a GitHub Pages (`mednode.es`).

## Branques

| Branca | Descripció |
|--------|------------|
| `main` | Versió estàtica HTML (legacy) |
| `feat/astro-v2` | Nova versió Astro + Tailwind |

La versió anterior HTML es conserva a `legacy-static/`.

## Desenvolupament

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sortida a dist/
npm run preview  # previsualitzar build
```

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

## Desplegament

Push a `main` (quan es fusioni aquesta branca) → GitHub Actions construeix `dist/` i publica a Pages.

## Contacte

Botons `mailto:info@mednode.es` (sense formulari, segons especificació Astro).

## DNS (Hostinger)

Registres A de `@` cap a GitHub Pages + CNAME `www` → `rookieoldman.github.io`. Vegeu `docs/correo-improvmx.md` per correu.
