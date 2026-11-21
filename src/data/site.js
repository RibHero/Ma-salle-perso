// Réglages globaux du site.
// INDEXABLE = false tant que les contenus ne sont pas validés (noindex + robots).
export const INDEXABLE = false;

export const SITE_NAME = 'Ma Salle Perso';
export const UPDATED = '21 novembre 2026';

// Phrase à copier mot pour mot depuis les conditions du Programme Partenaires d'Amazon.
export const AMAZON_DISCLOSURE = '[PHRASE OFFICIELLE AMAZON À INSÉRER]';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path = '/') => `${base}${path}`;
