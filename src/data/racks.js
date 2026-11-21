// Comparatif rack à squat. Données relevées le 21/11/2026 sur les fiches Decathlon / Decathlon Pro
// et les pages d'assistance Decathlon. price: null = prix France à relever.
export const racks = [
  {
    id: 'rack-120',
    badge: 'Petit budget et compact',
    name: 'Corength Rack pliable 120 kg',
    type: 'Rack pliable sur roulettes',
    price: '149,99 €',
    maxLoad: '120 kg (supports de barre)',
    dims: '127,5 × 77 × 174,5 cm ouvert ; 45 cm d\'épaisseur plié',
    who: 'Débuter, pièce partagée',
    why: 'Le moins cher et le plus compact : il se replie et se range sur ses roulettes.',
    pros: [
      'Se replie en 45 cm d\'épaisseur et se range sur roulettes',
      'Ouverture et fermeture par simple pression d\'un bouton',
      'Léger : 25 kg',
    ],
    cons: [
      'Charge maximale de 120 kg : vite limitant au squat',
      'Barre à 160 cm de hauteur au maximum, utilisateurs jusqu\'à 1,95 m',
    ],
    href: 'https://www.decathlonpro.fr/rack-de-musculation-pliable-en-2-sec-et-ultra-compact-id-8861148.html',
    sources: [
      { label: 'Fiche Decathlon Pro', url: 'https://www.decathlonpro.fr/rack-de-musculation-pliable-en-2-sec-et-ultra-compact-id-8861148.html' },
      { label: 'Assistance Decathlon', url: 'https://support.decathlon.fr/rack-pliable-120-kg-notice-reparation' },
    ],
  },
  {
    id: 'rack-500',
    badge: 'Polyvalent qui se range',
    name: 'Corength Rack 500 pliable',
    type: 'Rack pliable, avec barre de traction',
    price: null,
    maxLoad: '200 kg (repose-barre) ; traction 130 kg',
    dims: '128 × 111 × 214 cm ; 47 cm de long plié',
    who: 'Squat, développé et tractions dans une pièce partagée',
    why: 'Squat, développé couché et tractions, puis il se replie contre le mur.',
    pros: [
      'Se replie de 128 à 47 cm de long en moins d\'une minute',
      'Squat, développé couché et tractions sur le même appareil',
      'Repose-barres adaptables aux barres de 28 ou 50 mm',
      'Accessoires disponibles : kit dips, poulie',
    ],
    cons: [
      '214 cm de haut : vérifier la hauteur sous plafond',
      'Charge limitée à 200 kg sur les repose-barres',
    ],
    href: 'https://www.decathlonpro.fr/rack-de-musculation-compact-pliable-retractable-squat-traction-id-8616805.html',
    sources: [
      { label: 'Fiche Decathlon Pro', url: 'https://www.decathlonpro.fr/rack-de-musculation-compact-pliable-retractable-squat-traction-id-8616805.html' },
      { label: 'Assistance Decathlon', url: 'https://support.decathlon.fr/rack-500-pliable' },
      { label: 'Fiche Decathlon Irlande (compatibilité barres)', url: 'https://www.decathlon.ie/home-gym/330482-162364-fold-downslashretracting-compact-weight-training-rack-for-squats-and-pull-ups.html' },
    ],
  },
  {
    id: 'power-rack-900',
    badge: 'Le plus complet',
    name: 'Corength Power Rack 900',
    type: 'Cage complète',
    price: '449,99 €',
    maxLoad: 'Testée jusqu\'à 200 kg ; traction 150 kg',
    dims: '121 × 166 × 216 cm',
    who: 'Charges lourdes, sans partenaire',
    why: 'Une cage fermée, base de toute une salle, pour soulever lourd en sécurité.',
    pros: [
      'Cage fermée : on peut soulever lourd seul',
      'Supports de barre repositionnables selon l\'exercice',
      'Barre de traction en prise large ou standard',
    ],
    cons: [
      'Grande emprise au sol : 121 × 166 cm',
      'Vendue seule : barre, disques et banc en plus',
      'Poids maximal utilisateur : 130 kg',
    ],
    href: 'https://www.decathlonpro.fr/cage-de-musculation-power-rack-900-id-8902450.html',
    sources: [
      { label: 'Fiche Decathlon Pro', url: 'https://www.decathlonpro.fr/cage-de-musculation-power-rack-900-id-8902450.html' },
      { label: 'Assistance Decathlon', url: 'https://support.decathlon.fr/cage-de-musculation-power-rack-900-notice-reparation' },
    ],
  },
];

export const criteria = [
  { n: '01', title: 'Le type', text: 'Rack pliable, rack ouvert ou cage fermée : plus c\'est fermé, plus on peut soulever lourd seul.' },
  { n: '02', title: 'La charge max', text: 'Votre charge de travail, avec de la marge pour progresser : 120 kg suffisent pour débuter, pas pour des années.' },
  { n: '03', title: 'La hauteur et l\'emprise', text: 'Un rack avec barre de traction dépasse 2,10 m : mesurez le plafond, et la surface pour charger la barre.' },
  { n: '04', title: 'La compatibilité', text: 'Barre de 28 ou 50 mm, longueur minimale : vérifiez sur la fiche que votre barre et vos disques conviennent.' },
];

export const faq = [
  { q: 'Rack ou cage : que choisir ?', a: 'Une cage fermée permet de soulever lourd seul, grâce aux sécurités des deux côtés. Un rack pliable convient si la pièce sert à autre chose.' },
  { q: 'Quelle hauteur sous plafond prévoir ?', a: 'Comparez la hauteur du rack sur sa fiche à votre plafond : 214 cm pour le Rack 500, 216 cm pour le Power Rack 900. Ajoutez de la marge pour les tractions.' },
  { q: 'Faut-il acheter la barre en même temps ?', a: 'Oui, pour garantir la compatibilité : diamètre (28 ou 50 mm) et longueur doivent correspondre aux supports du rack.' },
];
