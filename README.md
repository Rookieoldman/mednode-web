# MedNode — Web corporativa

Landing page estàtica per a [mednode.cat](https://mednode.cat) (i redirecció des de mednode.es).

## Estructura

- `index.html` — redirecció per domini (`mednode.cat` → `/ca/`, `mednode.es` → `/es/`)
- `ca/`, `es/`, `eu/`, `gl/` — versions per idioma
- `css/style.css`, `js/main.js`, `img/mednode-logo.svg`
- `CNAME` — domini personalitzat GitHub Pages (`mednode.cat`)

## Desenvolupament local

Des del directori del projecte:

```bash
python3 -m http.server 8080
```

Obre [http://localhost:8080/ca/](http://localhost:8080/ca/) (amb `python3 -m http.server` des de l’arrel del projecte).

A **GitHub Pages** el repo es publica sota `/mednode-web/`; `js/site-base.js` ajusta la base automàticament. Amb domini `mednode.cat` la base és `/`.

## Desplegament (GitHub Pages)

1. Crea un repositori a GitHub (p. ex. `mednode` o `mednode-web`).
2. Puja aquest directori i activa **Pages** → Source: **GitHub Actions**.
3. A **Settings → Pages → Custom domain**, confirma `mednode.cat` (el fitxer `CNAME` ja el declara).
4. Cada push a `main` desplega via `.github/workflows/deploy.yml`.

### DNS (Hostinger)

**mednode.cat**

| Tipus | Nom | Valor |
|-------|-----|--------|
| CNAME | www | `<usuari>.github.io` |
| A | @ | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |

**mednode.es** — redirecció 301 cap a mednode.cat (configuració al panell Hostinger).

## Idiomes

| Ruta | Idioma |
|------|--------|
| `/ca/` | Català (per defecte a mednode.cat) |
| `/es/` | Castellà |
| `/eu/` | Euskera |
| `/gl/` | Gallec |

Selector manual: capçalera i peu (CA | ES | EU | GL).

## Contacte

info@mednode.es

## Llicència

Propietat de MedNode. Tots els drets reservats.
