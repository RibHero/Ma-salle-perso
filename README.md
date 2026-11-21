# Ma Salle Perso

Site d'affiliation : guides d'achat et comparatifs pour équiper sa salle de sport à la maison.

## Développement

```bash
npm install
npm run dev     # http://localhost:4321/Ma-salle-perso/
npm run build   # génère dist/
```

## Mise en ligne

Chaque push sur `main` déploie le site sur GitHub Pages (workflow `.github/workflows/deploy.yml`).
Prérequis, une seule fois : Settings › Pages › Source : **GitHub Actions**.

Adresse provisoire : https://ribhero.github.io/Ma-salle-perso/

## Avant l'ouverture publique

- `src/data/site.js` : passer `INDEXABLE` à `true` (retire le noindex) et insérer la phrase officielle Amazon.
- Compléter les `[PRIX À RELEVER]` dans `src/data/guide.js` et les mentions légales.
- Héberger les polices localement (au lieu de Google Fonts).

## Passage sur masalleperso.fr

1. `astro.config.mjs` : `site: 'https://masalleperso.fr'`, supprimer `base`.
2. Ajouter `public/CNAME` contenant `masalleperso.fr`.
3. Chez le registrar : enregistrements DNS vers GitHub Pages, puis Settings › Pages › Custom domain.
