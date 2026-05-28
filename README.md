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

## SEO i Google Search Console

- `robots.txt` i `sitemap.xml` a l’arrel (URLs canòniques `https://mednode.cat/...`).
- Cada idioma: `hreflang`, Open Graph, Twitter Card i JSON-LD (`Organization`, `WebSite`, `WebPage`, `MedSign`/`MedFlow`).
- La pàgina arrel (`index.html`) té `noindex` (només redirigeix).

**Després de tenir `mednode.cat` actiu:**

1. [Google Search Console](https://search.google.com/search-console) → Afegeix la propietat `https://mednode.cat`.
2. Verifica el domini (DNS TXT a Hostinger o fitxer HTML).
3. **Sitemaps** → envia `https://mednode.cat/sitemap.xml`.
4. **Inspecció d’URL** → sol·licita indexació de `/ca/` i `/es/`.

Opcional: afegir una imatge OG en PNG 1200×630 (`img/og-image.png`) per a xarxes socials que no accepten SVG.

## Contacte

info@mednode.es

## Llicència

Propietat de MedNode. Tots els drets reservats.
