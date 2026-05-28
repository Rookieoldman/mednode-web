# MedNode — Web corporativa

Landing page estàtica per a [mednode.cat](https://mednode.cat) (i redirecció des de mednode.es).

## Estructura

- `index.html` — redirecció per domini (`mednode.cat` → `/ca/`, `mednode.es` → `/es/`)
- `ca/`, `es/`, `eu/`, `gl/` — versions per idioma
- `css/style.css`, `js/main.js`, `img/og-image.svg`
- `CNAME` — domini personalitzat GitHub Pages (`mednode.es`)
- `docs/correo-improvmx.md` — reenviament de `info@mednode.es` amb ImprovMX + DNS Hostinger

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

**Web (GitHub Pages)** — domini `mednode.es` (fitxer `CNAME` del repo)

| Tipus | Nom | Valor |
|-------|-----|--------|
| A | @ | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |
| CNAME | www | `rookieoldman.github.io` |

**Correu (ImprovMX)** — reenviament de `info@mednode.es`:

| Tipus | Nom | Valor |
|-------|-----|--------|
| MX | @ | 10 → `mx1.improvmx.com`, 20 → `mx2.improvmx.com` |
| TXT | @ | `v=spf1 include:spf.improvmx.com ~all` |

Guia: **[docs/correo-improvmx.md](docs/correo-improvmx.md)** · [Inspector DNS](https://inspector.improvmx.com/mednode.es)

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

- Web: `mailto:info@mednode.es` (enllaços a les pàgines CA/ES/EU/GL)
- Operativa: reenviament ImprovMX → veure [docs/correo-improvmx.md](docs/correo-improvmx.md)

## Llicència

Propietat de MedNode. Tots els drets reservats.
