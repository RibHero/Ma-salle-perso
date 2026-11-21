// Données du guide par budget. Prix relevés en 2026 sur les sites marchands :
// à revérifier avant publication. price: null = à relever.
export const tiers = [
  {
    id: 'b500', amount: '500 €', title: "L'essentiel pour débuter",
    intro: 'Un banc réglable et des haltères : de quoi travailler tout le corps sans rack.',
    rows: [
      { item: 'Banc inclinable et déclinable', example: 'Corength, charge max 300 kg', price: '149,99 €', href: 'https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tirez-le-meilleur-votre-equipement-avec-freeletics' },
      { item: 'Haltères réglables', example: 'Kit 20 kg (2 × 10 kg)', price: '97,99 €', href: 'https://www.decathlon.fr/vc/haltere-reglable' },
      { item: 'Kit barre + haltères', example: 'Kit 50 kg Decathlon (barre 155 cm)', price: null, href: 'https://www.decathlonpro.fr/kit-halteres-et-barres-50-kg-musculation-id-8655649.html' },
      { item: 'Sol', example: 'Dalles caoutchouc 100 × 100 cm, 11 mm', price: null, href: 'https://www.decathlon.fr/p/mp/dalle-de-sol-sportive-100-x-100-cm-11-mm-noire/442d4711-03a2-48a3-ba23-4b793a828ced/c1' },
    ],
    note: 'Gamme Decathlon : barres de 28 mm de diamètre, quand le standard non olympique est de 30 mm. Vérifiez la compatibilité avant de mélanger les marques.',
  },
  {
    id: 'b1000', amount: '1 000 €', title: 'Le setup polyvalent',
    intro: 'On ajoute un rack et une barre olympique pour squatter et développer en sécurité.',
    rows: [
      { item: 'Rack à squat réglable', example: 'Gorilla Sports, avec poignées dips', price: '189,99 €', href: 'https://www.achatmoinscher.com/comparateur-de-prix-Accessoires-de-Musculation-Fitness/rack-a-squat-et-developpe-couche-reglable-gorilla-sports.html' },
      { item: 'Banc inclinable et déclinable', example: 'Corength, charge max 300 kg', price: '149,99 €', href: 'https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tirez-le-meilleur-votre-equipement-avec-freeletics' },
      { item: 'Barre olympique + disques', example: 'Kit Marbo Sport 45 kg', price: '264,24 €', href: 'https://www.decathlon.fr/deals/bons-plans-musculation?from=400' },
      { item: 'Haltères réglables', example: 'Kit 20 kg (2 × 10 kg)', price: '97,99 €', href: 'https://www.decathlon.fr/vc/haltere-reglable' },
      { item: 'Sol', example: 'Dalles caoutchouc 15 à 20 mm', price: null, href: 'https://www.decathlon.fr/p/mp/dalle-de-sol-sportive-100x100cm-20mm-grain-fin-noire/a920bc52-f2d9-454c-9cd1-777e3a342438/c1' },
    ],
  },
  {
    id: 'b2000', amount: '2 000 €', title: 'La vraie salle avec cage',
    intro: 'Cage complète, barre robuste et assez de fonte pour progresser des années.',
    rows: [
      { item: 'Cage de musculation', example: 'Decathlon Power Rack 900', price: '399,99 € (promo)', href: 'https://www.dealabs.com/bons-plans/bundle-cage-de-musculation-polyvalente-power-rack-900-banc-de-musculation-inclinable-et-declinable-300kg-cage-seule-a-39999eur-3348825' },
      { item: 'Barre olympique 2,20 m', example: 'Heubozen, charge max 300 kg', price: '149 €', href: 'https://www.fitnessboutique.fr/collections/barre-et-poids' },
      { item: 'Disques olympiques fonte 51 mm', example: 'Heubozen, de 2,5 à 25 kg', price: 'dès 7 € le disque', href: 'https://www.fitnessboutique.fr/collections/barre-et-poids' },
      { item: 'Banc inclinable et déclinable', example: 'Corength, charge max 300 kg', price: '149,99 €', href: 'https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tirez-le-meilleur-votre-equipement-avec-freeletics' },
      { item: 'Haltères réglables lourds', example: 'Kit 40 kg Athler Lion', price: null, href: 'https://www.decathlon.fr/vc/haltere-reglable' },
      { item: 'Sol', example: 'Dalles caoutchouc 20 mm, 20 kg pièce', price: null, href: 'https://www.decathlon.fr/p/mp/dalle-de-sol-sportive-100x100cm-20mm-grain-fin-noire/a920bc52-f2d9-454c-9cd1-777e3a342438/c1' },
    ],
  },
];

export const checks = [
  { title: "L'espace au sol.", text: 'Comptez la place pour bouger autour du banc et de la barre, pas seulement l\'emprise du matériel.' },
  { title: 'La hauteur sous plafond.', text: 'Comparez-la à la hauteur du rack sur sa fiche, avec de la marge pour les tractions.' },
  { title: 'Le sol.', text: 'Béton et carrelage n\'amortissent rien : prévoyez des dalles caoutchouc dès le départ.' },
  { title: 'Votre objectif.', text: 'Renforcement général : banc et haltères. Charges lourdes : rack et barre olympique.' },
];

export const buyOrder = ['Le sol', 'Le banc réglable', 'Les haltères', 'Le rack ou la cage', 'Barre et disques'];

export const faq = [
  { q: 'Faut-il forcément un rack ?', a: "Non. Pour du renforcement général, un banc et des haltères suffisent. Le rack devient utile, et important pour la sécurité, dès qu'on squatte ou développe lourd sans partenaire." },
  { q: 'Quelle épaisseur de sol choisir ?', a: 'Des dalles de 11 à 15 mm conviennent pour des haltères posés au sol. Pour des barres chargées qui peuvent tomber, visez 20 mm.' },
  { q: "Acheter d'occasion ?", a: "C'est souvent rentable pour la fonte et les racks, qui s'usent peu. Vérifiez la rouille, les soudures et le diamètre des disques." },
];
