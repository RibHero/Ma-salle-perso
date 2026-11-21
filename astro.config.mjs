import { defineConfig } from 'astro/config';

// Adresse provisoire. Au passage sur masalleperso.fr :
// site: 'https://masalleperso.fr' et supprimer la ligne base.
export default defineConfig({
  site: 'https://ribhero.github.io',
  base: '/Ma-salle-perso',
  trailingSlash: 'always',
});
