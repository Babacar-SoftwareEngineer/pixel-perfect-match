# FAST IMMO — structure et direction artistique

## Intention

Créer une plateforme immobilière contemporaine pour Dakar et le Sénégal, centrée sur la recherche de biens et la prise de contact. Le logo fourni reste intact et constitue la référence visuelle.

**Cette proposition précède le développement : aucune page ne sera développée avant votre validation.**

## Direction artistique

- **Blanc dominant `#FFFFFF`** : espaces de respiration et fonds de lecture.
- **Rouge FAST IMMO `#9B080E`** : boutons principaux, transaction active, liens et détails interactifs.
- **Noir architectural `#171717`** : titres et structure visuelle.
- **Gris ivoire `#F4F3F1`** : alternance de sections et fonds secondaires.
- **Gris `#777777`** : informations secondaires, avec contraste vérifié pour les petits textes.
- **Manrope** : titres et prix ; **Inter** : paragraphes, navigation et formulaires.
- Photographies nettes de villas et résidences contemporaines, composition architecturale, grands cadrages. Les photos d’annonces doivent représenter les biens réels ; les images d’ambiance restent distinctes du catalogue.
- Grilles régulières, cartes sobres aux angles légèrement arrondis, bordures fines, ombres légères. Aucun bleu nuit, doré ou dégradé décoratif.

### Composition de l’accueil

Une grande photographie occupe le premier écran. Le logo demeure sur une surface blanche pour préserver sa lisibilité ; la navigation s’intègre au haut de page et devient blanche au défilement. Le texte est aligné à gauche, sur une zone de l’image laissant la lecture libre.

Le titre demandé reste inchangé : **« Votre prochain chez-vous commence ici. »** Le nom FAST IMMO est clairement visible dès le premier écran, avec son slogan. La recherche se place au bas de la photographie, avant un aperçu de la section suivante.

```text
Logo FAST IMMO    Accueil  Nos biens  Nos services  À propos  Contact    CTA
┌──────────────────── photographie architecturale ────────────────────┐
│ FAST IMMO                                                          │
│ Votre prochain chez-vous commence ici.                             │
│ Sous-titre et slogan                                               │
│ Découvrir nos biens                                                │
│                                                                    │
│ Acheter / Louer   Type   Localisation   Budget maximum   Rechercher  │
└────────────────────────────────────────────────────────────────────┘
Accompagnement personnalisé   Sélection de biens   Proximité et écoute
Biens à la une                                           Voir les biens
Photographie / prix / localisation / caractéristiques
```

Sur mobile : logo et menu compact, texte sur plusieurs lignes, recherche empilée, cartes sur une colonne et actions de contact faciles à atteindre.

### Cohérence avec votre brief

Le caractère distinctif vient des photographies architecturales, du logo original et du rouge employé avec retenue, plutôt que d’effets décoratifs. L’accueil ne sera pas une succession de panneaux flottants : les sections seront ouvertes, les cartes réservées aux biens et catégories.

## Structure des pages

| Page | Contenu et action principale |
| --- | --- |
| `/` | Photographie immersive, recherche, réassurance, 4 à 6 biens à la une lorsqu’ils sont disponibles, catégories, présentation de l’agence, services confirmés, étapes d’accompagnement et contact final. |
| `/biens` | Filtres combinables : transaction, type, localisation, prix minimum et maximum, chambres ; tri par prix, pagination et résultats adaptés au mobile. |
| `/biens/[slug]` | Galerie, prix en FCFA, description, caractéristiques, équipements, biens similaires et demande de visite ; WhatsApp prérempli avec le nom et l’URL du bien. |
| `/a-propos` | Présentation éditoriale de FAST IMMO et slogan, sans histoire inventée. |
| `/services` | Structure pour achat, vente, location, gestion et conseil, avec publication uniquement des prestations confirmées. |
| `/contact` | Coordonnées réelles et formulaire : nom, téléphone, email, objet, message. |
| `/mentions-legales` | Informations juridiques fournies par l’agence, sans données fictives. |
| `/admin` | Accès réservé aux administrateurs : catalogue, photos, prix, statuts, mise en avant et demandes clients. |

Un même en-tête et un même pied de page relient toutes les pages. Le pied de page reprend le logo plus grand, le slogan, la navigation et les coordonnées et réseaux effectivement fournis.

L’emplacement des témoignages sera préparé mais masqué tant qu’aucun avis authentique n’est fourni ou approuvé.

## Déroulement proposé

1. **Direction et structure** : valider cette proposition, puis établir les styles communs, la navigation et le pied de page.
2. **Accueil** : construire la photographie d’ouverture et la recherche, puis les sections prévues dans le brief.
3. **Catalogue** : mettre en place cartes, filtres, tri, pagination et états sans résultat.
4. **Fiches** : développer galerie, caractéristiques et parcours de contact.
5. **Pages institutionnelles** : intégrer les contenus validés et le formulaire de contact.
6. **Données sécurisées** : connecter Lovable Cloud avant toute gestion persistante ou authentification.
7. **Administration** : construire l’accès sécurisé, la gestion des biens et le suivi des demandes.
8. **Vérification** : tester les parcours réels, les permissions, l’affichage mobile et le référencement.

La connexion des données précède ici l’administration fonctionnelle pour que celle-ci soit sécurisée dès sa création. Avant chaque étape, les éléments déjà réalisés seront vérifiés.

## Contenus à obtenir au fil des étapes

- Annonces réelles : photos, prix, surfaces, localisation, disponibilité et caractéristiques.
- Téléphone et numéro WhatsApp, email, adresse et réseaux sociaux.
- Services confirmés et texte de présentation de l’agence.
- Informations légales et témoignages approuvés, s’il y en a.

Des exemples peuvent servir à la validation du catalogue uniquement s’ils sont explicitement signalés comme démonstration ; aucune annonce fictive ne sera présentée comme une offre réelle.

## Organisation technique

- **Socle** : React, TypeScript et TanStack Start, les technologies de ce projet ; il ne s’agit pas d’un site Next.js natif.
- **Séparation** : styles communs, éléments réutilisables, pages, types, accès aux données et configuration.
- **Données** : propriétés, photographies ordonnées et demandes de contact, dans Lovable Cloud, avec droits d’accès limités et secrets uniquement côté serveur.
- **Accès** : catalogue public limité aux biens publiés ; gestion réservée aux administrateurs ; demandes clients privées.
- **Médias** : logo original conservé, favicon dérivé du même logo, images optimisées.
- **Référencement** : titres et descriptions propres à chaque page, Open Graph, URLs descriptives, sitemap, robots.txt et données structurées fondées sur les informations réelles. Les URLs définitives seront utilisées lorsque le domaine sera connu.
- **Évolutivité** : logique métier isolée pour faciliter un export GitHub et une éventuelle adaptation ultérieure à Next.js, sans promettre une conversion automatique.

## Validation attendue

Votre approbation autorisera le début du développement avec cette direction artistique et cette structure, sans publication du site ni invention des contenus manquants.