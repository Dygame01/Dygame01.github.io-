const questions = [

  // ==== BLOC 1 – Coordonner, réguler et contrôler l’activité liée aux flux de marchandises dans l’entrepôt ====

{
  texte: "Quel est l’objectif d’un 'packing list' à l’expédition ?",
  reponses: ["Tracer les temps de conduite", "Détailler le contenu (colis, poids, dimensions)", "Remplacer la facture", "Servir de bon de transport CMR"],
  bonne: 1,
  explication: "Inventaire du contenu utile au contrôle et aux douanes.",
  image: ""
},
  {
    texte: "selon le contrat type routier général, pour les envois inférieurs à trois tonnes, qui est responsable des opération de chargement, de calage, d'arrimage et du déchargement de l'envoi ?",
    reponses: ["Le Transporteur", "Le Destinataire", "L'éxpediteur", "au pif"],
    bonne: 0,
    explication: "c’est l’article 7.1 (annexe au décret type D.3222‑1 / D.3222‑3) du Code des transports qui mentionne cette règle. Pour les envois inférieurs à 3 tonnes, le transporteur exécute sous sa responsabilité les opérations de chargement, de calage, d'arrimage et de déchargement ",
    image: ""
  },
  {
    texte: "selon le contrat type routier général, pour les envois supérieurs à trois tonnes, qui est responsable des opération de chargement, de calage, d'arrimage et de s'assuré de la possibilité du déchargement de l'envoi ?",
    reponses: ["Le Transporteur", "Le Destinataire", "L'éxpediteur", "au pif"],
    bonne: 2,
    explication: "c’est l’article 7.2.1 (annexe au décret type D.3222‑1 / D.3222‑3) du Code des transports qui mentionne cette règle. Pour les envois supérieurs ou égaux à trois tonnes, le donneur d’ordre (expéditeur) est responsable du chargement/calage/arrimage, tandis que le transporteur doit vérifier et peut refuser un chargement mal fait",
    image: ""
  },
  {
    texte: "selon le contrat type routier général, Sous la responsabilité de quel partie le déchargement se fait t-il si l'envoi est supérieur ou égal à 3 tonnes ?",
    reponses: ["Le Transporteur", "Le Destinataire", "L'éxpediteur", "au pif"],
    bonne: 1,
    explication: "c’est l’article 7.2.2 (annexe au décret type D.3222‑1 / D.3222‑3) du Code des transports qui mentionne cette règle. Pour les envois supérieurs ou égaux à trois tonnes,le donneur Destinataire est responsable du déchargement/calage/arrimage",
    image: ""
  },
  {
    texte: "selon le contrat type routier général, Sous la responsabilité de quel partie le bâchage et dêbachage se fait t-il ? ",
    reponses: ["Le Transporteur", "Le Destinataire", "L'éxpediteur", "au pif"],
    bonne: 0,
    explication: "D’après l’article 8 du contrat type général, le bâchage ou débâchage du véhicule ainsi que le montage ou démontage des ridelles sont à la charge du transporteur. Toutefois, l'expéditeur ou le destinataire doit fournir au transporteur les moyens nécessaires (personnel ou matériel) pour la réalisation de ces opérations.",
    image: ""
  },
  {
    texte: "en cas de dépassement des durées d'immobilisation, que le transport peut-il demandé ?",
    reponses: ["Le remboursement total du transport", "Une réduction de sa responsabilité", "Une indemnité d’immobilisation", "L’annulation du contrat de transport"],
    bonne: 2,
    explication: "En cas de dépassement des délais d’immobilisation convenus ou raisonnables, le transporteur a le droit de demander une indemnité (également appelée indemnité d’immobilisation).",
    image: ""
  },
  {
    texte: "selon le contrat type routier général, Qui paie le coût du pesage si une des parties demande cette opération ?",
    reponses: ["Le Transporteur", "Le Destinataire", "L'éxpediteur", "Le demandeur"],
    bonne: 3,
    explication: "c’est Selon l’article 12 du contrat type routier général, si l’une des parties demande une pesée, elle en supporte le coût (pesage + déchargement éventuel).",
    image: ""
  },
  {
    texte: "Que signifie 'réserve' sur la lettre de voiture lors de la réception ou de l'expédition ?",
    reponses: ["Une demande de paiement faite au transporteur en cas de retard.", "Une remarque écrite sur la lettre de voiture pour signaler un problème à la réception ou à l'expédition.", "Une signature obligatoire de l’expéditeur avant le départ du camion.", "Une garantie que la marchandise sera livrée dans les délais."],
    bonne: 1,
    explication: "Une réserve, c’est une remarque écrite faite par le destinataire (ou parfois l’expéditeur) sur la lettre de voiture, au moment de la livraison, pour signaler un problème constaté.",
    image: ""
  },
{
  texte: "Lors d'une réception, quel document compare-t-on en priorité au bon de livraison ?",
  reponses: ["Le bon de commande", "La facture fournisseur", "La lettre de voiture", "Le plan d'implantation"],
  bonne: 0,
  explication: "Le bon de commande sert de référence pour vérifier que la livraison correspond à la commande passée.",
  image: ""
},
{
  texte: "Que signifie 'BL' dans la documentation logistique ?",
  reponses: ["Bon de Livraison", "Bordereau de Localisation", "Bon de Location", "Bilan Logistique"],
  bonne: 0,
  explication: "BL = Bon de Livraison, document qui accompagne la marchandise et décrit son contenu.",
  image: ""
},
{
  texte: "En expédition, que doit-on vérifier avant de fermer le camion ?",
  reponses: ["Que la marchandise est filmée", "Que le plomb ou scellé est posé si requis", "Que le moteur est coupé", "Que le chauffeur a mangé"],
  bonne: 1,
  explication: "Le scellé ou plombage est posé pour garantir l’intégrité du chargement jusqu’à destination.",
  image: ""
},
{
  texte: "Quelle est la première étape du contrôle qualitatif à la réception ?",
  reponses: ["Comptage des unités", "Inspection visuelle de l’état des colis", "Scan des codes-barres", "Pesage des colis"],
  bonne: 1,
  explication: "On inspecte visuellement pour détecter toute avarie avant de décharger ou d'accepter.",
  image: ""
},
{
  texte: "Lors d'un écart entre stock physique et informatique, quelle action est prioritaire ?",
  reponses: ["Mettre à jour le stock informatique sans justification", "Corriger physiquement le stock", "Enquêter sur la cause et corriger", "Ignorer l'écart s'il est faible"],
  bonne: 2,
  explication: "L'origine de l'écart doit être trouvée pour éviter qu'il ne se reproduise, puis mise à jour des données.",
  image: ""
},
{
  texte: "Quel système informatique centralise les informations de stock et de flux en entrepôt ?",
  reponses: ["ERP", "CRM", "WMS", "SCADA"],
  bonne: 2,
  explication: "Le WMS (Warehouse Management System) gère les opérations en entrepôt.",
  image: ""
},
{
  texte: "Que signifie FIFO en gestion des flux ?",
  reponses: ["First In First Out", "Fast In Fast Out", "File In File Out", "Fixed Input Fixed Output"],
  bonne: 0,
  explication: "Les premières marchandises entrées sont les premières sorties.",
  image: ""
},
{
  texte: "Dans l’implantation d’un stock, quel est l’intérêt des zones ABC ?",
  reponses: ["Limiter l'accès", "Réduire les déplacements pour les produits à forte rotation", "Faire du stockage aléatoire", "Gérer les déchets"],
  bonne: 1,
  explication: "Les articles les plus utilisés sont placés au plus près des zones de préparation pour optimiser le temps.",
  image: ""
},
{
  texte: "Quelle est la largeur minimale réglementaire d'une allée piétonne en entrepôt ?",
  reponses: ["0,60 m", "0,80 m", "1,20 m", "2,00 m"],
  bonne: 2,
  explication: "Pour des raisons de sécurité et d’accessibilité, elle doit être d’au moins 1,20 m.",
  image: ""
},
{
  texte: "Quel contrôle visuel est obligatoire sur un rack de stockage ?",
  reponses: ["Vérifier la couleur", "Vérifier l’absence de déformation ou choc", "Vérifier l'alignement parfait des palettes", "Vérifier le poids des étiquettes"],
  bonne: 1,
  explication: "Les racks doivent être inspectés pour repérer toute déformation qui compromettrait la sécurité.",
  image: ""
},
{
  texte: "Pourquoi limiter la hauteur de gerbage d'une palette ?",
  reponses: ["Pour respecter les règles esthétiques", "Pour éviter le basculement et respecter la résistance des emballages", "Pour réduire la hauteur de levage", "Pour gagner du temps"],
  bonne: 1,
  explication: "Un gerbage excessif fragilise la stabilité et dépasse la résistance prévue.",
  image: ""
},
{
  texte: "Quel est l'objectif d'un quai nivelant ?",
  reponses: ["Ranger les palettes", "Compenser la différence de hauteur entre le quai et le véhicule", "Peser les camions", "Servir de pont pour piétons"],
  bonne: 1,
  explication: "Il permet de charger/décharger en sécurité malgré la différence de hauteur.",
  image: ""
},
{
  texte: "Pourquoi caler les roues d'un camion à quai ?",
  reponses: ["Pour éviter le vol", "Pour éviter qu'il parte accidentellement", "Pour vérifier les freins", "Pour aligner la remorque"],
  bonne: 1,
  explication: "C’est une mesure de sécurité pour empêcher tout mouvement pendant le chargement/déchargement.",
  image: ""
},
{
  texte: "Que signifie 'cross docking' ?",
  reponses: ["Stockage prolongé", "Flux direct réception→expédition", "Stockage frigorifique", "Chargement croisé de palettes"],
  bonne: 1,
  explication: "La marchandise passe directement du quai de réception au quai d’expédition, sans stockage.",
  image: ""
},
{
  texte: "En cas de colis manquant à la réception, quelle action est correcte ?",
  reponses: ["Signer sans réserve", "Faire des réserves précises sur le document de transport", "Refuser toute la livraison", "Appeler le fournisseur immédiatement sans écrire"],
  bonne: 1,
  explication: "Les réserves écrites sont essentielles pour tout recours.",
  image: ""
},
{
  texte: "Pourquoi séparer les flux piétons et engins en entrepôt ?",
  reponses: ["Pour éviter la fatigue", "Pour éviter les chocs et accidents", "Pour réduire les déplacements", "Pour mieux ranger les palettes"],
  bonne: 1,
  explication: "La séparation physique réduit fortement le risque de heurts.",
  image: ""
},
{
  texte: "Que signifie LIFO en gestion des stocks ?",
  reponses: ["Last In First Out", "Long In Fast Out", "Logistics Input for Output", "Level In Flow Out"],
  bonne: 0,
  explication: "Les dernières marchandises entrées sortent les premières.",
  image: ""
},
{
  texte: "Que représente le terme 'stock de sécurité' ?",
  reponses: ["Stock pour cas d'urgence", "Stock invendable", "Stock cassé", "Stock réservé aux employés"],
  bonne: 0,
  explication: "Le stock de sécurité permet d’absorber les imprévus de la demande ou des délais d’approvisionnement.",
  image: ""
},
{
  texte: "Quel indicateur mesure la précision des stocks ?",
  reponses: ["Taux d'exactitude d'inventaire", "Taux de casse", "Taux de rotation", "Taux de service"],
  bonne: 0,
  explication: "C’est le pourcentage de concordance entre le stock physique et le stock informatique.",
  image: ""
},
{
  texte: "Quelle est la fonction d'un convoyeur à rouleaux ?",
  reponses: ["Déplacer la marchandise sur une pente ou motorisé", "Peser les colis", "Empiler les palettes", "Scanner les codes-barres"],
  bonne: 0,
  explication: "Les convoyeurs à rouleaux transportent les charges d’un point à un autre.",
  image: ""
},
{
  texte: "En entrepôt, quel principe d’implantation limite le nombre de déplacements lors du picking ?",
  reponses: ["LIFO", "ABC (Pareto)", "FEFO", "Cross-docking"],
  bonne: 1,
  explication: "La méthode ABC place les références les plus 'A' (80/20) dans les zones les plus accessibles.",
  image: ""
},
{
  texte: "Quelle est la dimension d’une palette Europe (EUR/EPAL) standard ?",
  reponses: ["1200 × 1000 mm", "1000 × 800 mm", "1200 × 800 mm", "1140 × 1140 mm"],
  bonne: 2,
  explication: "La palette Europe classique mesure 1200 × 800 mm (ISO 1 = 1200 × 1000).",
  image: ""
},
{
  texte: "Quel marquage d’emballage signifie 'garder au sec' ?",
  reponses: ["Parapluie", "Verre 'Fragile'", "Thermomètre", "Flammes barrées"],
  bonne: 0,
  explication: "L’icône parapluie indique 'keep dry'.",
  image: ""
},
{
  texte: "Quelle règle s’applique au filmage d’une palette pour la stabilité ?",
  reponses: ["Toujours filmer du haut vers le bas", "Créer un 'cordon' de liaison palette/charge", "Ne pas recouvrir les angles", "Le filmage n’influe pas la stabilité"],
  bonne: 1,
  explication: "Un cordon de liaison verrouille la charge à la semelle de la palette.",
  image: ""
},
{
  texte: "Quel document atteste la prise en charge de la marchandise en transport international routier ?",
  reponses: ["CMR", "BL maritime", "LTA (AWB)", "Lettre de voiture nationale"],
  bonne: 0,
  explication: "La lettre de voiture CMR régit le transport international routier.",
  image: ""
},
{
  texte: "Quelle méthode de gestion de stock est la plus adaptée aux denrées périssables ?",
  reponses: ["LIFO", "FEFO", "FIFO uniquement", "ABC"],
  bonne: 1,
  explication: "FEFO = First Expired, First Out : on sort d’abord ce qui expire le plus tôt.",
  image: ""
},
{
  texte: "En réception, que vérifie-t-on d’abord avant déchargement à quai ?",
  reponses: ["La couleur du tracteur", "Calage roues/immobilisation véhicule", "Nom du chauffeur", "Numéro de téléphone du transporteur"],
  bonne: 1,
  explication: "Sécuriser le véhicule (cale, système d’arrimage de quai) avant toute intervention.",
  image: ""
},
{
  texte: "En inventaire tournant, l’avantage principal est…",
  reponses: ["Moins de précision qu’un inventaire annuel", "Arrêt complet de l’activité", "Fiabilité continue sans arrêt global", "Aucun intérêt par rapport à l’annuel"],
  bonne: 2,
  explication: "On étale le contrôle sur l’année tout en gardant l’exploitation ouverte.",
  image: ""
},
{
  texte: "Quel EPI est typiquement requis en entrepôt ?",
  reponses: ["Gants anti-coupure, chaussures S3, gilet HV", "Casque intégral obligatoirement", "Bouchons d’oreille en permanence", "Aucun EPI nécessaire"],
  bonne: 0,
  explication: "Les EPI dépendent du risque mais HV + chaussures de sécurité sont des standards.",
  image: ""
},
{
  texte: "Pour la préparation par 'batch picking', le principe est…",
  reponses: ["Un préparateur = une commande", "Un préparateur prépare plusieurs commandes en une tournée", "Préparation par zones fixes", "Préparation uniquement vocale"],
  bonne: 1,
  explication: "Le 'batch' regroupe plusieurs commandes pour réduire les déplacements.",
  image: ""
},
{
  texte: "Quel code-barres est souvent utilisé pour les unités logistiques internes (étiquettes SSCC/expédition) ?",
  reponses: ["EAN-13", "QR Code", "Code 128", "UPC-A"],
  bonne: 2,
  explication: "Le Code 128 (notamment GS1-128) encode des identifiants comme SSCC.",
  image: ""
},
{
  texte: "Que signifie OTIF dans un KPI logistique ?",
  reponses: ["On Time In Full", "Overall Truck Idle Factor", "Order Time Is Fine", "On Track in Freight"],
  bonne: 0,
  explication: "Livré à l’heure et complet : mesure clé du service.",
  image: ""
},
{
  texte: "Sur un quai avec niveleur, quelle séquence est sûre ?",
  reponses: ["Niveleur d’abord, puis calage", "Calage/immobilisation puis niveleur", "Niveleur seul suffit", "Déchargement avant calage"],
  bonne: 1,
  explication: "Immobilliser le véhicule avant de mettre en œuvre le niveleur.",
  image: ""
},
{
  texte: "Qu’indique le pictogramme 'deux flèches vers le haut' sur un colis ?",
  reponses: ["Ouvrir ici", "Tenir au sec", "Sens de manutention vertical", "Produit corrosif"],
  bonne: 2,
  explication: "Indique le sens 'haut' à respecter pour la stabilité/produit.",
  image: ""
},
{
  texte: "Quel est l’objectif du cross-docking ?",
  reponses: ["Stockage long", "Transformation produit", "Flux direct réception→expédition", "Comptage fiscal"],
  bonne: 2,
  explication: "Transit sans stockage pour réduire délais et manutentions.",
  image: ""
},
{
  texte: "En préparation par 'zone picking', cela signifie…",
  reponses: ["Chaque préparateur couvre tout l’entrepôt", "Chaque préparateur reste dans une zone définie", "Préparation par ordre alphabétique", "Préparation uniquement au chariot tridirectionnel"],
  bonne: 1,
  explication: "On découpe l’entrepôt en zones pour limiter les parcours et spécialiser.",
  image: ""
},
{
  texte: "Que faire en cas de palette endommagée à la réception ?",
  reponses: ["Accepter sans réserve", "Refuser la totalité systématiquement", "Faire des réserves précises et tracer l’écart", "Défilmer et reconditionner sans mention"],
  bonne: 2,
  explication: "Réserves caractérisées + traçabilité pour recours et sécurité.",
  image: ""
},
{
  texte: "Quel est le risque principal des palettes en surplomb ('overhang') sur racks ?",
  reponses: ["Gain de stabilité", "Rien si filmées", "Risque d’arrachement/instabilité et choc", "Améliore la lecture des codes-barres"],
  bonne: 2,
  explication: "Le surplomb fragilise la tenue mécanique et l’interface avec lisse/rack.",
  image: ""
},
{
  texte: "Que signifie 'slotting' en entrepôt ?",
  reponses: ["Mise en rack cantilever", "Optimisation de l’emplacement des SKU", "Rangement à la verticale", "Tri par couleur d’emballage"],
  bonne: 1,
  explication: "On attribue les emplacements pour réduire temps et parcours.",
  image: ""
},
{
  texte: "En expédition, quel contrôle documentaire est essentiel avant départ ?",
  reponses: ["Police d’assurance du chauffeur", "Concordance BL/commande/étiquettes", "Couleur du film", "Marque du tracteur"],
  bonne: 1,
  explication: "Conformité des quantités et références évite litiges et retours.",
  image: ""
},
{
  texte: "Quel est l’objectif d’un kanban en logistique interne ?",
  reponses: ["Sur-stocker en sécurité", "Piloter le réappro en flux tiré", "Suppression des inventaires", "Numéroter les allées"],
  bonne: 1,
  explication: "Signal de réapprovisionnement basé sur la consommation réelle.",
  image: ""
},
{
  texte: "En ADR, que signifie l’absence de code de danger sur un colis ?",
  reponses: ["Toujours dangereux", "Non soumis ADR (marchandise non dangereuse)", "Réservé à l’aérien", "Produit périssable"],
  bonne: 1,
  explication: "Sans étiquetage de danger, le colis n’est pas ADR (ou exempté).",
  image: ""
},
{
  texte: "Dans un WMS, la 'traçabilité ascendante' permet…",
  reponses: ["De retrouver le fournisseur et le lot d’origine", "D’identifier le prochain client", "De calculer le coût transport", "De créer un BL automatiquement"],
  bonne: 0,
  explication: "Remonter du produit fini vers les lots/fournisseurs.",
  image: ""
},
{
  texte: "Quel est le but d’une 'zone tampon' (buffer) à l’expédition ?",
  reponses: ["Stock long terme", "Séparer flux préparé des quais", "Stationnement personnel", "Rebut matière"],
  bonne: 1,
  explication: "Zone d’attente ordonnée avant chargement (contrôle, séquencement).",
  image: ""
},
{
  texte: "Sur une préparation vocale (voice picking), le bénéfice principal est…",
  reponses: ["Moins de sécurité", "Mains et yeux libres → ergonomie/qualité", "Plus d’erreurs de lecture", "Incompatible avec WMS"],
  bonne: 1,
  explication: "Réduit les consultations visuelles et garde les mains libres.",
  image: ""
},

{
  texte: "Au contrôle quantitatif réception, quel écart déclenche une alerte ?",
  reponses: ["Colis manquant ou abîmé", "Film trop serré", "Palette propre", "Étiquettes propres"],
  bonne: 0,
  explication: "Écart de quantité/état = réserve/constat immédiat.",
  image: ""
},
{
  texte: "Quelle stratégie réduit les trajets de réappro picking ?",
  reponses: ["Réappro aléatoire", "Réappro planifié hors pics", "Réappro en plein rush", "Réappro sans consigne"],
  bonne: 1,
  explication: "Fenêtres dédiées = moins de conflits de flux et de ruptures.",
  image: ""
},
{
  texte: "Le 'taux de rotation' d’un stock mesure…",
  reponses: ["Le pourcentage d’employés mobiles", "La vitesse d’écoulement des stocks", "La vitesse des chariots", "Le nombre d’allées parcourues"],
  bonne: 1,
  explication: "Ventes/consommations rapportées au stock moyen.",
  image: ""
},
{
  texte: "Quel indicateur suit la fiabilité du stock dans le WMS ?",
  reponses: ["Taux d’absentéisme", "Taux d’exactitude d’inventaire (IE)", "Taux d’occupation quais", "Taux de casse chariots"],
  bonne: 1,
  explication: "Mesure l’écart entre stock théorique et physique.",
  image: ""
},
{
  texte: "Quelle mesure réduit le risque de chute d’objets en picking hauteur ?",
  reponses: ["Travailler sans lisse anti-chute", "Mettre des butées/rebords et filets", "Augmenter la vitesse", "Retirer les lisses supérieures"],
  bonne: 1,
  explication: "Barrières/renforts empêchent la chute depuis les niveaux.",
  image: ""
},




// ==== Bloc 2 │ Planifier et encadrer les activités d’une équipe d’opérateurs en entrepôt ====




{
  texte: "Quel est l'objectif principal d'un planning d'activité pour une équipe d'entrepôt ?",
  reponses: ["Optimiser l'utilisation des ressources et répartir les tâches", "Limiter les heures supplémentaires", "Surveiller la consommation électrique", "Contrôler le stock de sécurité"],
  bonne: 0,
  explication: "Un planning d'activité permet de planifier les ressources humaines et matérielles afin de répondre aux besoins de production et aux flux prévus.",
  image: ""
},
{
  texte: "Quel indicateur est le plus adapté pour suivre la productivité d'une équipe en préparation de commandes ?",
  reponses: ["Nombre de colis préparés par heure", "Nombre de réceptions par semaine", "Nombre d'accidents", "Taux d'exactitude d'inventaire"],
  bonne: 0,
  explication: "La productivité en préparation se mesure souvent en unités préparées par heure ou par opérateur.",
  image: ""
},
{
  texte: "Que doit faire un chef d'équipe en cas d'absence imprévue d'un préparateur ?",
  reponses: ["Rien, la production s'adapte seule", "Répartir la charge de travail entre les présents", "Annuler toutes les expéditions", "Préparer lui-même toutes les commandes"],
  bonne: 1,
  explication: "Une absence doit être compensée par une réorganisation temporaire pour maintenir le flux.",
  image: ""
},
{
  texte: "Quel document permet de visualiser l'avancement des tâches en temps réel dans l'entrepôt ?",
  reponses: ["Planning", "Tableau de bord", "Ordre de transport", "Plan d'implantation"],
  bonne: 1,
  explication: "Le tableau de bord donne un suivi instantané des indicateurs d'activité et des tâches en cours.",
  image: ""
},
{
  texte: "Pourquoi organiser un briefing quotidien en début de poste avec l'équipe ?",
  reponses: ["Pour vérifier la présence", "Pour présenter les objectifs et consignes de sécurité", "Pour discuter des promotions commerciales", "Pour planifier les congés"],
  bonne: 1,
  explication: "Le briefing fixe les objectifs de la journée et rappelle les règles de sécurité.",
  image: ""
},
{
  texte: "Dans un planning, quelle méthode permet de visualiser rapidement les chevauchements de tâches ?",
  reponses: ["Diagramme de Gantt", "Tableur simple", "Plan d'implantation", "Diagramme de Pareto"],
  bonne: 0,
  explication: "Le diagramme de Gantt permet de visualiser les tâches dans le temps et de repérer les chevauchements.",
  image: ""
},
{
  texte: "Quelle est la première étape pour établir un planning d'équipe efficace ?",
  reponses: ["Lister les ressources disponibles", "Commander les fournitures", "Affecter les pauses", "Préparer le rapport de fin de journée"],
  bonne: 0,
  explication: "Il faut d'abord connaître les ressources humaines et matérielles disponibles avant d'attribuer les tâches.",
  image: ""
},
{
  texte: "Comment s'appelle la méthode visant à améliorer les processus par petites étapes continues ?",
  reponses: ["Lean management", "Méthode ABC", "FIFO", "Cross-docking"],
  bonne: 0,
  explication: "Le lean management et le kaizen visent à optimiser en continu les processus pour réduire les gaspillages.",
  image: ""
},
{
  texte: "Pourquoi un tableau de polyvalence est-il utile en entrepôt ?",
  reponses: ["Pour savoir qui est formé à quelles tâches", "Pour surveiller les heures de pause", "Pour contrôler les stocks", "Pour gérer la maintenance"],
  bonne: 0,
  explication: "Le tableau de polyvalence indique rapidement quelles personnes peuvent remplacer un absent ou renforcer une activité.",
  image: ""
},
{
  texte: "Que faut-il inclure dans un rapport d'activité d'équipe en fin de journée ?",
  reponses: ["Les objectifs atteints, incidents, et suggestions d'amélioration", "Les prévisions météo", "Les informations personnelles des opérateurs", "La liste des jours fériés"],
  bonne: 0,
  explication: "Un rapport d'activité inclut les résultats, les problèmes rencontrés et des pistes d'amélioration pour la suite.",
  image: ""
},
{
  texte: "Quel outil permet de suivre le nombre de palettes préparées par opérateur chaque jour ?",
  reponses: ["Tableau de suivi", "CMR", "Ordre de transport", "Plan de prévention"],
  bonne: 0,
  explication: "Un tableau de suivi, souvent intégré au WMS, permet de suivre la production par opérateur.",
  image: ""
},
{
  texte: "Pourquoi est-il important d’équilibrer la charge de travail entre les équipes ?",
  reponses: ["Pour éviter la fatigue et optimiser la productivité", "Pour respecter la législation sur les congés", "Pour réduire le bruit en entrepôt", "Pour améliorer la rotation des stocks"],
  bonne: 0,
  explication: "Une charge équilibrée limite les risques de blessure et améliore l’efficacité globale.",
  image: ""
},
{
  texte: "Que doit prévoir un planning hebdomadaire pour anticiper les pics d’activité ?",
  reponses: ["Des renforts ou heures supplémentaires planifiées", "Des jours de fermeture", "Des réductions de commandes", "Une diminution du stock"],
  bonne: 0,
  explication: "Les pics d’activité doivent être anticipés par plus de personnel ou d’horaires élargis.",
  image: ""
},
{
  texte: "Quel document interne sert à répartir les tâches entre préparateurs en début de journée ?",
  reponses: ["Feuille de répartition", "Bon de livraison", "Procédure qualité", "Plan de prévention"],
  bonne: 0,
  explication: "La feuille de répartition liste les tâches attribuées à chaque préparateur.",
  image: ""
},
{
  texte: "Quel est l’avantage de faire un point d’avancement à mi-journée avec l’équipe ?",
  reponses: ["Identifier les retards et réajuster le planning", "Vérifier les stocks de fournitures", "Préparer la réunion mensuelle", "Contrôler les badges d’accès"],
  bonne: 0,
  explication: "Cela permet de corriger rapidement les écarts et de respecter les délais.",
  image: ""
},
{
  texte: "Quel indicateur permet de mesurer le respect des délais de préparation et d’expédition ?",
  reponses: ["OTIF", "FIFO", "CMR", "ABC"],
  bonne: 0,
  explication: "OTIF (On Time In Full) mesure la ponctualité et la complétude des commandes livrées.",
  image: ""
},
{
  texte: "Pourquoi est-il important d’impliquer l’équipe dans les décisions d’amélioration continue ?",
  reponses: ["Ils connaissent mieux les contraintes du terrain", "Pour éviter de changer les procédures", "Pour respecter le planning des congés", "Pour réduire les investissements"],
  bonne: 0,
  explication: "Les opérateurs ont une expérience pratique qui permet de proposer des améliorations réalistes.",
  image: ""
},
{
  texte: "Comment appelle-t-on la répartition du personnel sur différentes zones selon le besoin ?",
  reponses: ["Polyvalence opérationnelle", "Kanban", "FIFO", "Batch picking"],
  bonne: 0,
  explication: "La polyvalence opérationnelle permet d’adapter les ressources là où la charge est la plus forte.",
  image: ""
},
{
  texte: "Quel est le rôle principal d’un tableau de bord en management d’équipe ?",
  reponses: ["Fournir des données pour piloter l’activité", "Remplacer le planning", "Servir de rapport unique pour la direction", "Donner les objectifs commerciaux"],
  bonne: 0,
  explication: "Il synthétise les indicateurs clés pour ajuster l’activité en temps réel.",
  image: ""
},
{
  texte: "Pourquoi utiliser un code couleur sur un planning d’équipe ?",
  reponses: ["Pour identifier rapidement les rôles et tâches", "Pour décorer le document", "Pour indiquer les promotions en cours", "Pour classer les produits en stock"],
  bonne: 0,
  explication: "Les codes couleurs permettent une lecture plus rapide des affectations et priorités.",
  image: ""
},
{
  texte: "Quel outil de communication interne est le plus adapté pour informer rapidement toute l’équipe d’un changement de priorité ?",
  reponses: ["Réunion flash", "E-mail hebdomadaire", "Rapport annuel", "Tableau d’affichage en salle de pause"],
  bonne: 0,
  explication: "Une réunion flash permet de diffuser une information importante immédiatement et à tous les opérateurs concernés.",
  image: ""
},
{
  texte: "Que faut-il indiquer dans une fiche de poste en entrepôt ?",
  reponses: ["Les missions, responsabilités et compétences requises", "Le montant du salaire des collègues", "La liste des congés", "Les horaires de pause"],
  bonne: 0,
  explication: "La fiche de poste définit clairement le rôle et les attentes associées à une fonction.",
  image: ""
},
{
  texte: "Pourquoi est-il important de former un remplaçant pour chaque poste clé ?",
  reponses: ["Pour assurer la continuité d’activité en cas d’absence", "Pour réduire le nombre de postes", "Pour éviter de recruter", "Pour augmenter les primes"],
  bonne: 0,
  explication: "La polyvalence garantit la continuité des opérations même en cas d’imprévu.",
  image: ""
},
{
  texte: "Quel est le rôle d’un responsable d’équipe dans la gestion des conflits ?",
  reponses: ["Écouter, analyser et trouver une solution équitable", "Ignorer le problème", "Transmettre au service RH uniquement", "Prendre parti pour un salarié"],
  bonne: 0,
  explication: "Le responsable doit régler les tensions de manière impartiale pour préserver la cohésion de l’équipe.",
  image: ""
},
{
  texte: "Pourquoi un manager doit-il suivre régulièrement les indicateurs de sécurité ?",
  reponses: ["Pour prévenir les accidents et améliorer les conditions de travail", "Pour respecter le budget annuel", "Pour réduire les inventaires", "Pour planifier les congés"],
  bonne: 0,
  explication: "Le suivi des indicateurs de sécurité permet d’identifier les risques et de mettre en place des actions correctives.",
  image: ""
},




// ==== Bloc transversal │ Hygiène, sécurité, ergonomie, bureautique, égalité, développement durable, anglais pro ====




{
  texte: "Quelle est la hauteur idéale de travail pour limiter les troubles musculosquelettiques (TMS) ?",
  reponses: ["Entre les genoux et les épaules", "Au-dessus de la tête", "En dessous des genoux", "Bras tendus en permanence"],
  bonne: 0,
  explication: "La zone entre les genoux et les épaules est appelée zone de confort et limite les contraintes physiques.",
  image: ""
},
{
  texte: "Pourquoi est-il déconseillé de tordre le dos en portant une charge ?",
  reponses: ["Cela augmente fortement le risque de blessure", "Cela permet de soulever plus vite", "Cela renforce les muscles", "Cela réduit le poids de la charge"],
  bonne: 0,
  explication: "La torsion sous charge augmente la pression sur les disques intervertébraux et le risque de blessure.",
  image: ""
},
{
  texte: "Quel outil bureautique est le plus adapté pour créer un tableau de suivi de commandes ?",
  reponses: ["Tableur (Excel ou équivalent)", "Traitement de texte", "Logiciel de retouche photo", "Lecteur vidéo"],
  bonne: 0,
  explication: "Un tableur permet de saisir, calculer et analyser des données liées aux commandes.",
  image: ""
},
{
  texte: "Pourquoi l’égalité professionnelle hommes-femmes est-elle importante en entreprise ?",
  reponses: ["Elle améliore la cohésion, la performance et respecte la loi", "Elle permet de réduire les stocks", "Elle facilite la manutention", "Elle augmente la taille de l’entrepôt"],
  bonne: 0,
  explication: "L’égalité professionnelle est un droit et contribue à un meilleur climat social et à la performance collective.",
  image: ""
},
{
  texte: "Quelle pratique réduit l’empreinte carbone d’un entrepôt ?",
  reponses: ["Optimiser les trajets des engins et limiter les déplacements à vide", "Augmenter la vitesse des chariots", "Refroidir toutes les zones en été", "Laisser les éclairages allumés en continu"],
  bonne: 0,
  explication: "Limiter les trajets inutiles et optimiser les flux réduit la consommation d’énergie et les émissions.",
  image: ""
},
{
  texte: "Que signifie le pictogramme représentant deux mains tenant un colis avec un cœur ?",
  reponses: ["Manipuler avec soin", "Produit inflammable", "Fragile", "Interdit de gerber"],
  bonne: 0,
  explication: "Ce pictogramme indique que la marchandise doit être manipulée avec précaution.",
  image: ""
},
{
  texte: "Dans le cadre du développement durable, que faire des palettes bois cassées ?",
  reponses: ["Les envoyer en filière de recyclage ou réparation", "Les jeter en décharge", "Les brûler sur place", "Les enterrer"],
  bonne: 0,
  explication: "Les palettes peuvent être réparées ou recyclées en bois de chauffage ou copeaux.",
  image: ""
},
{
  texte: "Comment dire 'quai de chargement' en anglais logistique ?",
  reponses: ["Loading dock", "Delivery table", "Storage bay", "Freight room"],
  bonne: 0,
  explication: "En anglais, quai de chargement se traduit par 'loading dock'.",
  image: ""
},
{
  texte: "Comment dire 'stock de sécurité' en anglais logistique ?",
  reponses: ["Safety stock", "Emergency pile", "Backup storage", "Protection load"],
  bonne: 0,
  explication: "'Safety stock' est l'expression utilisée pour désigner le stock de sécurité en logistique.",
  image: ""
},
{
  texte: "Pourquoi utiliser un casque antibruit dans certaines zones d’entrepôt ?",
  reponses: ["Pour protéger l’audition contre les nuisances sonores", "Pour mieux entendre les collègues", "Pour améliorer la concentration", "Pour réduire la fatigue visuelle"],
  bonne: 0,
  explication: "L’exposition prolongée au bruit peut causer des pertes auditives irréversibles.",
  image: ""
},
{
  texte: "Quelle est la bonne position pour lever une charge lourde ?",
  reponses: ["Plier les genoux et garder le dos droit", "Se pencher en avant dos rond", "Tourner le buste en portant", "Lever uniquement avec les bras"],
  bonne: 0,
  explication: "Il faut plier les genoux, rapprocher la charge du corps et garder le dos droit pour protéger la colonne vertébrale.",
  image: ""
},
{
  texte: "Quel est l’avantage d’un éclairage LED dans un entrepôt ?",
  reponses: ["Consomme moins d’énergie et dure plus longtemps", "Réduit le bruit ambiant", "Augmente la vitesse de préparation", "Élimine tous les risques d’accident"],
  bonne: 0,
  explication: "Les LED permettent de réduire la consommation électrique et les coûts de maintenance.",
  image: ""
},
{
  texte: "Quel outil bureautique permet de rédiger une procédure interne ?",
  reponses: ["Logiciel de traitement de texte", "Lecteur audio", "Logiciel de CAO", "Tableur"],
  bonne: 0,
  explication: "Un traitement de texte est adapté pour créer et mettre en forme des documents écrits comme des procédures.",
  image: ""
},
{
  texte: "Quelle action contribue directement à la prévention des TMS en entrepôt ?",
  reponses: ["Former le personnel aux gestes et postures", "Augmenter le rythme de travail", "Limiter les pauses", "Réduire la rotation des postes"],
  bonne: 0,
  explication: "La formation aux gestes et postures permet d’adopter des mouvements qui réduisent le risque de blessure.",
  image: ""
},
{
  texte: "Pourquoi est-il important de signaler immédiatement un danger constaté sur un poste de travail ?",
  reponses: ["Pour éviter les accidents et permettre une action corrective rapide", "Pour augmenter le rendement", "Pour remplir le rapport annuel", "Pour réduire les coûts"],
  bonne: 0,
  explication: "Signaler un danger permet de prévenir un accident et de corriger la situation rapidement.",
  image: ""
},
{
  texte: "Que signifie le pictogramme de danger représentant une flamme ?",
  reponses: ["Produit inflammable", "Produit corrosif", "Produit explosif", "Produit radioactif"],
  bonne: 0,
  explication: "Ce pictogramme CLP signale une substance ou un mélange inflammable.",
  image: ""
},
{
  texte: "Quel est le numéro d’appel d’urgence unique en Europe ?",
  reponses: ["112", "15", "18", "17"],
  bonne: 0,
  explication: "Le 112 est le numéro unique d’urgence européen, valable dans tous les pays de l’UE.",
  image: ""
},
{
  texte: "Quel EPI protège contre les projections oculaires ?",
  reponses: ["Casque", "Lunettes de sécurité", "Chaussures S3", "Gants anti-coupure"],
  bonne: 1,
  explication: "Les lunettes de sécurité ou visières protègent contre projections et éclats.",
  image: ""
},
{
  texte: "En cas de départ de feu sur un carton, quel extincteur utiliser ?",
  reponses: ["Eau pulvérisée", "CO₂", "Poudre D", "Aucun, fuir"],
  bonne: 0,
  explication: "Les feux de classe A (solides comme le carton) se traitent à l’eau pulvérisée ou mousse.",
  image: ""
},
{
  texte: "Quel est l’objectif d’un plan de prévention en entreprise ?",
  reponses: ["Réduire les coûts", "Coordonner et prévenir les risques liés aux interventions d’entreprises extérieures", "Planifier la production", "Former au premier secours"],
  bonne: 1,
  explication: "Il identifie les risques et définit les mesures de prévention pour les interventions multi-entreprises.",
  image: ""
},
{
  texte: "Pour limiter un TMS, quelle règle appliquer lors du port manuel ?",
  reponses: ["Garder la charge près du corps", "Tendre les bras au maximum", "Port sur l’épaule uniquement", "Lever bras tendus au-dessus de la tête"],
  bonne: 0,
  explication: "Proximité du centre de gravité réduit la contrainte sur le dos et les épaules.",
  image: ""
},
{
  texte: "Lors d’un soulèvement, quelle articulation plier en priorité ?",
  reponses: ["Genoux", "Dos", "Cou", "Chevilles uniquement"],
  bonne: 0,
  explication: "On plie les genoux pour préserver le dos et utiliser la puissance des jambes.",
  image: ""
},
{
  texte: "Quelle durée prolongée debout augmente le risque de TMS membres inférieurs ?",
  reponses: ["Moins de 15 min", "Plus de 2 heures", "30 secondes", "Jamais"],
  bonne: 1,
  explication: "La station debout prolongée sans mouvement favorise les troubles circulatoires et musculaires.",
  image: ""
},
{
  texte: "Quel outil réduit la torsion du tronc lors du picking au sol ?",
  reponses: ["Transpalette pivotant", "Escabeau", "Film étirable", "Diable"],
  bonne: 0,
  explication: "Un transpalette pivotant ou plateau tournant évite la torsion excessive.",
  image: ""
},
{
  texte: "Dans Excel, quelle fonction compte les cellules contenant uniquement des nombres ?",
  reponses: ["SOMME", "NB", "NBCAR", "COMPTER.VIDE"],
  bonne: 1,
  explication: "NB() compte les cellules contenant des valeurs numériques.",
  image: ""
},
{
  texte: "Dans Word, quel raccourci clavier permet de copier un texte ?",
  reponses: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
  bonne: 1,
  explication: "Ctrl + C copie la sélection dans le presse-papiers.",
  image: ""
},
{
  texte: "Dans Outlook, que signifie 'CC' ?",
  reponses: ["Copie Conforme", "Contact Client", "Copie Cachette", "Coordination Centrale"],
  bonne: 0,
  explication: "CC = Copie Conforme, destinataires informés mais non principaux.",
  image: ""
},
{
  texte: "Que signifie 'forklift' ?",
  reponses: ["Convoyeur", "Chariot élévateur", "Palette", "Rampe"],
  bonne: 1,
  explication: "'Forklift' désigne un chariot élévateur.",
  image: ""
},
{
  texte: "Que veut dire 'loading dock' ?",
  reponses: ["Quai de chargement", "Stock tampon", "Rampe mobile", "Convoyeur"],
  bonne: 0,
  explication: "'Loading dock' = quai de chargement/déchargement.",
  image: ""
},
{
  texte: "Comment traduit-on 'stock rotation' ?",
  reponses: ["Inventaire permanent", "Rotation des stocks", "Stock bloqué", "Réapprovisionnement"],
  bonne: 1,
  explication: "'Stock rotation' désigne le renouvellement des stocks selon méthode FIFO/FEFO.",
  image: ""
},
{
  texte: "Que garantit la loi en matière de salaire hommes/femmes ?",
  reponses: ["Une égalité de principe uniquement", "Un salaire égal pour un travail de valeur égale", "Une prime plus élevée pour les hommes", "Une prime plus élevée pour les femmes"],
  bonne: 1,
  explication: "Le Code du travail impose un salaire égal à compétences et responsabilités équivalentes.",
  image: ""
},
{
  texte: "Quel est l’objectif de l’Index Égalité professionnelle ?",
  reponses: ["Noter la performance commerciale", "Mesurer et corriger les écarts H/F", "Classer les salariés par ancienneté", "Attribuer les primes annuelles"],
  bonne: 1,
  explication: "Index sur 100 points, publié chaque année, pour évaluer et corriger les écarts H/F.",
  image: ""
},
{
  texte: "Quel affichage est obligatoire en entreprise concernant l’égalité ?",
  reponses: ["Affiche des sanctions", "Affiche sur le harcèlement moral/sexuel", "Affiche météo", "Affiche de résultats sportifs"],
  bonne: 1,
  explication: "Affichage des textes sur harcèlement moral/sexuel et égalité pro.",
  image: ""
},
{
  texte: "Que signifie 'tri à la source' ?",
  reponses: ["Tri après incinération", "Tri des déchets directement sur le lieu de production", "Tri par une entreprise spécialisée", "Pas de tri"],
  bonne: 1,
  explication: "On sépare les déchets recyclables/non recyclables dès leur production.",
  image: ""
},
{
  texte: "Quel est le principal impact des palettes perdues sur l’environnement ?",
  reponses: ["Amélioration de la biodiversité", "Augmentation de la consommation de bois", "Réduction de CO₂", "Rien"],
  bonne: 1,
  explication: "Les palettes perdues entraînent une surexploitation des ressources bois.",
  image: ""
},
{
  texte: "Quelle pratique réduit le plus l’empreinte carbone d’un entrepôt ?",
  reponses: ["Éclairage LED + capteurs présence", "Repeindre les murs", "Mettre la radio", "Augmenter la climatisation"],
  bonne: 0,
  explication: "LED et détection présence réduisent drastiquement la consommation électrique.",
  image: ""
},
{
  texte: "Que signifie 'économie circulaire' ?",
  reponses: ["Produire et jeter", "Recycler, réemployer, réparer pour limiter déchets", "Produire plus vite", "Vendre en boucle"],
  bonne: 1,
  explication: "L’économie circulaire vise à prolonger la durée de vie des produits et réduire les déchets.",
  image: ""
},
{
  texte: "En logistique, que désigne 'reverse logistics' ?",
  reponses: ["Flux aller", "Flux retour (retours clients, recyclage)", "Livraison rapide", "Approvisionnement en urgence"],
  bonne: 1,
  explication: "Reverse logistics = gestion des flux retour, recyclage, SAV.",
  image: ""
},



// ==== Bloc CACES ====




{
    texte: "de quel catégorie de la recommandation R489 fait partie ce véhicule ?",
    reponses: ["catégorie 1a", "catégorie 1b", "catégorie 2a", "catégorie 3"],
    bonne: 0,
    explication: "ce chariot fait partie de la Catégorie 1a, Transpalettes à conducteur porté avec hauteur de levée inférieure ou égal à 1,20m ",
    image: "./img/cat1a.png"
  },
  {
    texte: "de quel catégorie de la recommandation R489 fait partie ce véhicule ?",
    reponses: ["catégorie 5", "catégorie 1b", "catégorie 2a", "catégorie 3"],
    bonne: 1,
    explication: "ce chariot fait partie de la Catégorie 1b, Gerbeur à conducteur porté d'une hauteur de levée supérieur à 1,20m",
    image: "./img/cat1b.png"
  },
  {
    texte: "de quel catégorie de la recommandation R489 fait partie ce véhicule ?",
    reponses: ["catégorie 5", "catégorie 2a", "catégorie 6", "catégorie 3"],
    bonne: 1,
    explication: "ce chariot fait partie de la catégorie 2a, Chariot à plateau porteur d'une capacité de charge inférieur ou égal à 2 tonnes",
    image: "./img/cat2a.png"
  },
    {
    texte: "de quel catégorie de la recommandation R489 fait partie ce véhicule ?",
    reponses: ["catégorie 1b", "catégorie 2b", "catégorie 2a", "catégorie 3"],
    bonne: 1,
    explication: "ce chariot fait partie de la catégorie 2b, Chariot tracteur industriels d'une capacité de traction inférieure ou égal à 25 tonnes",
    image: "./img/cat2b.png"
  },
    {
    texte: "de quel catégorie de la recommandation R489 fait partie ce véhicule ?",
    reponses: ["catégorie 1a", "catégorie 1b", "catégorie 2a", "catégorie 3"],
    bonne: 3,
    explication: "ce chariot fait partie de la catégorie 3, Chariots élévateurs frontaux en porte-à-faux d'une capacité nominale inférieur ou égale à 6 tonnes",
    image: "./img/cat3.png"
  },
    {
    texte: "de quel catégorie de la recommandation R489 fait partie ce véhicule ?",
    reponses: ["catégorie 1a", "catégorie 1b", "catégorie 4", "catégorie 3"],
    bonne: 2,
    explication: "ce chariot fait partie de la catégorie 4, Chariots élévateurs frontaux en porte-à-faux d'une capacité nominale supérieure à 6 tonnes",
    image: "./img/cat4.png"
  },
    {
    texte: "de quel catégorie de la recommandation R489 fait partie ce véhicule ?",
    reponses: ["catégorie 5", "catégorie 1b", "catégorie 2a", "catégorie 3"],
    bonne: 0,
    explication: "ce chariot fait partie de la catégorie 5, Chariots élévateurs à mât rétractable",
    image: "./img/cat5.png"
  },
    {
    texte: "de quel catégorie de la recommandation R489 fait partie ce véhicule ?",
    reponses: ["catégorie 5", "catégorie 6", "catégorie 2a", "catégorie 3"],
    bonne: 1,
    explication: "ce chariot fait partie de la catégorie 6, Chariots élévateurs à poste de conduite élevable avec une hauteur de plancher supérieur à 1,20m",
    image: "./img/cat6.png"
  },
      {
    texte: "de quel catégorie de la recommandation R489 permet de conduire tout ces véhicules ?",
    reponses: ["catégorie 1a", "catégorie 3", "catégorie 2a", "catégorie 7"],
    bonne: 3,
    explication: "La catégorie 7 ne permet la conduite des chariots que hors production, comme le chargement et déchargement sur porte engins, démonstrations, maintenance etc...",
    image: "./img/cat7.png"
  },    
  {
    texte: "de quel type de la recommandation R486 fait partie ces véhicule ?",
    reponses: ["type 1", "type 2", "type 3", "Aucun"],
    bonne: 1,
    explication: "Ces véhicules font partie du type 2, la translation avec la plate-forme de travail en position haute peut être commandé par un organe situé sur la plate-forme de travail, donc en hauteur",
    image: "./img/Type2.png"
  },
  {
    texte: "de quel type de la recommandation R486 fait partie ces véhicule ?",
    reponses: ["type 1", "type 2", "type 3", "Aucun"],
    bonne: 0,
    explication: "Ces véhicules font partie du type 1, la translation n'est admise qu'avec la plate-forme de travail en position de transport, donc replié",
    image: "./img/Type1.png"
  },
  {
    texte: "de quel groupe de la recommandation R486 fait partie ces véhicule ?",
    reponses: ["groupe A", "groupe B", "groupe C", "groupe D"],
    bonne: 0,
    explication: "Ces véhicules font partie du Groupe A qui concerne les PEMP à élévation verticale",
    image: "./img/GroupeA.png"
  },
  {
    texte: "de quel groupe de la recommandation R486 fait partie ces véhicule ?",
    reponses: ["groupe A", "groupe C", "groupe B", "groupe D"],
    bonne: 2,
    explication: "Ces véhicules font partie du Groupe B qui concerne les PEMP à élévation Multidirectionelle",
    image: "./img/GroupeB.png"
  },
  {
    texte: "Que signifie CACES ?",
    reponses: ["Certificat d'Aptitude à la Conduite des Engins de Sécurité", "Carte d'Agrément des Conducteurs d'Équipements de Stockage", "Certificat d'Aptitude à la Conduite En Sécurité", "Contrôle d'Aptitude des Conducteurs d'Engins Spécialisés"],
    bonne: 2,
    explication: "le CACES est l'acronyme de Certificat d'Aptitude à la Conduite En Sécurité",
    image: ""
  },
    {
    texte: "Que signifie PEMP ?",
    reponses: ["Pont Électrique Mobile de Positionnement", "Programme Européen de Manutention Professionnelle", "Plateforme Extensible pour Maintenance de Portiques", "Plateforme Élévatrice Mobile de Personnel"],
    bonne: 3,
    explication: "Concernant la recommandation R.486 PEMP veut dire : Plateforme Élévatrice Mobile de Personnel ",
    image: ""
  },
        {
    texte: "ce véhicules fait t-il partie d'une catégorie de la recommandation R.489 ?",
    reponses: ["catégorie 1a", "catégorie 3", "catégorie 2a", "catégorie 7"],
    bonne: 1,
    explication: "Ce véhicule fait partie de la catégorie 3, Chariots élévateurs frontaux en porte-à-faux d'une capacité nominale inférieur ou égale à 6 tonnes",
    image: "./img/cat3.png"
  },  
        {
    texte: "ce véhicules fait t-il partie d'une catégorie de la recommandation R.489 ?",
    reponses: ["catégorie 5", "catégorie 3", "catégorie 1b", "Non"],
    bonne: 3,
    explication: "Ce véhicule fait partie de la recommandation R.485, gerbeur à conducteur accompagnant à hauteur de levée au dessus de 1,20m",
    image: "./img/r485.png"
  },  
        {
    texte: "ce véhicules fait t-il partie d'une catégorie de la recommandation R.489 ?",
    reponses: ["catégorie 5", "catégorie 3", "catégorie 1b", "Non"],
    bonne: 3,
    explication: "Ce véhicule fait partie de la recommandation R.366, Transpalettes",
    image: "./img/r366.png"
  },  
        {
    texte: "ce véhicules fait t-il partie d'une catégorie de la recommandation R.489 ?",
    reponses: ["catégorie 5", "catégorie 3", "catégorie 1b", "Non"],
    bonne: 3,
    explication: "Ce véhicule fait partie de la recommandation R.482, Chariots tout-terrain",
    image: "./img/r482.png"
  },  
{
  texte: "Sur un chariot élévateur, à quelle hauteur doit-on circuler fourches en charge ?",
  reponses: ["À 10–15 cm du sol", "À 40–50 cm du sol", "Au ras du sol (0–2 cm)", "À hauteur d’axe de roue"],
  bonne: 0,
  explication: "Fourches basses (≈10–15 cm) pour conserver le centre de gravité bas et éviter tout heurt/prise au sol.",
  image: ""
},
{
  texte: "Que représente la 'capacité résiduelle' indiquée sur la plaque de charge d’un chariot ?",
  reponses: ["La masse maximale à vide du chariot", "La capacité réelle selon hauteur et déport", "Le poids nominal constant du constructeur", "La charge maximale d’un rack standard"],
  bonne: 1,
  explication: "La capacité chute quand la hauteur de levée et/ou le déport de charge augmentent.",
  image: ""
},
{
  texte: "Quelle action est correcte lors d’un déplacement en rampe avec un chariot chargé ?",
  reponses: ["Monter et descendre en marche avant", "Monter en marche avant, descendre en marche arrière", "Toujours en marche arrière", "Toujours fourches en l’air pour ne pas frotter"],
  bonne: 1,
  explication: "Chargé : monter en marche avant (charge vers l’amont), descendre en marche arrière pour garder la charge côté pente.",
  image: ""
},
{
  texte: "Dans une zone piétons/chariots, quelle mesure réduit le risque principal de heurt ?",
  reponses: ["Klaxon obligatoire seulement", "Marquage au sol sans séparation", "Séparation physique (barrières/portiques)", "Éclairage plus fort uniquement"],
  bonne: 2,
  explication: "La séparation physique réduit l’exposition en supprimant la coactivité.",
  image: ""
},
{
  texte: "Avant prise de poste chariot, quel contrôle est prioritaire ?",
  reponses: ["Niveau de lave-glace", "État fourches, chaîne, vérins et fuites", "Couleur de la peinture", "Présence d’un autoradio"],
  bonne: 1,
  explication: "Contrôles visuels/fonctionnels de sécurité et absence de fuites.",
  image: ""
},
{
  texte: "Quelle affirmation est vraie pour tourner avec un chariot en charge ?",
  reponses: ["Tourner vite pour finir la manœuvre", "Tourner lentement, charge basse et stable", "Monter la charge pour éviter le basculement", "Toujours tourner sur pente"],
  bonne: 1,
  explication: "Vitesse réduite et centre de gravité bas limitent le risque de renversement latéral.",
  image: ""
},
{
  texte: "Au poste batteries (chariots électriques), quelle précaution est correcte ?",
  reponses: ["Zone close sans ventilation", "Flammes nues autorisées", "Douches/lave-yeux et ventilation recommandées", "Remplir à l’acide pur"],
  bonne: 2,
  explication: "Hydrogène/électrolyte : ventilation, incompatibilité flammes, moyens de rinçage.",
  image: ""
},
{
  texte: "Quelle bonne pratique réduit les TMS au picking ?",
  reponses: ["Porter loin du corps", "Travailler entre genoux et épaules", "Torsion du dos pour aller vite", "Saisir par le coin inférieur"],
  bonne: 1,
  explication: "Zone de confort + proximité du corps limitent les contraintes biomécaniques.",
  image: ""
},
{
  texte: "Quel est le bon comportement aux intersections d’allées ?",
  reponses: ["Accélérer pour dégager", "Klaxon + ralentir/arrêt marqué si masqué", "Priorité aux chariots", "Regarder à droite seulement"],
  bonne: 1,
  explication: "Visibilité, signal sonore et maîtrise de la vitesse.",
  image: ""
},
{
  texte: "Pour une charge décentrée sur fourches, l’effet principal est…",
  reponses: ["Aucun si filmée", "Augmentation du déport → baisse de capacité", "Diminution du déport → hausse de capacité", "Réduction du risque de renversement"],
  bonne: 1,
  explication: "Centre de gravité s’éloigne du tablier → capacité résiduelle chute.",
  image: ""
},
{
  texte: "Quelle règle s’applique au gerbage (stacking) de palettes hétérogènes ?",
  reponses: ["Possible sans condition", "Interdit sauf stabilité prouvée", "Toujours autorisé si filmées", "Uniquement si palette haute en bas"],
  bonne: 1,
  explication: "Gerbage conditionné à la résistance/planéité ; sinon interdit.",
  image: ""
},
{
  texte: "Quel contrôle simple valide la compatibilité palette/rack ?",
  reponses: ["Couleur palette", "Type de semelle et état", "Présence d’étiquettes", "Hauteur filmage"],
  bonne: 1,
  explication: "Semelles continues/état bois crucial pour appuis sûrs sur lisses.",
  image: ""
},
{
  texte: "En chargement latéral au quai, quelle pratique est correcte ?",
  reponses: ["Ouvrir portes avant calage", "Caler/immobiliser puis ouvrir portes", "Pas besoin de calage", "Lever le niveleur avant d’ouvrir"],
  bonne: 1,
  explication: "On sécurise d’abord le véhicule contre tout mouvement.",
  image: ""
},
{
  texte: "Quelle est la cause fréquente de chute de charge au levage ?",
  reponses: ["Fourches parfaitement parallèles", "Écartement inadapté ou insertion insuffisante", "Charge centrée", "Vitesse lente"],
  bonne: 1,
  explication: "Fourches trop rapprochées/peu engagées → basculement/casse palette.",
  image: ""
},
{
  texte: "Quel est l’effet d’une humidité élevée sur carton/palette bois ?",
  reponses: ["Aucun", "Résistance accrue", "Perte de rigidité et affaissement", "Améliore la lisibilité des codes-barres"],
  bonne: 2,
  explication: "L’humidité dégrade la tenue mécanique du carton et du bois.",
  image: ""
},
{
  texte: "Sur un transpalette manuel avec charge, quelle pratique est correcte ?",
  reponses: ["Tirer plutôt que pousser en ligne droite", "Toujours pousser, sauf besoin spécifique", "Lever au maximum pendant la marche", "Rouler fourches levées pour passer les seuils"],
  bonne: 1,
  explication: "Pousser contrôle mieux la trajectoire et réduit l’effort lombaire.",
  image: ""
},
{
  texte: "Quel est l’effet d’un accessoire (pince/porte-bobines) non pris en compte sur la plaque de charge ?",
  reponses: ["Aucun", "Augmente la capacité", "Diminue la capacité résiduelle", "N’affecte que la vitesse"],
  bonne: 2,
  explication: "Accessoire = masse/déport supplémentaires → capacité réduite.",
  image: ""
},
{
  texte: "Quelle est la priorité lors d’un déversement mineur de batterie (électrolyte) ?",
  reponses: ["Rincer/neutraliser et baliser", "Balayer à sec", "Évacuer en poubelle classique", "Continuer la charge sans arrêt"],
  bonne: 0,
  explication: "Neutralisation (kit déversement), EPI et mise en sécurité de la zone.",
  image: ""
},

{
  texte: "Pour limiter le bruit et les chocs, on installe aux quais…",
  reponses: ["Des gyros bleus", "Des butoirs et guides-roues", "Des ralentisseurs seulement", "Des miroirs convexes uniquement"],
  bonne: 1,
  explication: "Butoirs absorbeurs + guides-roues = centrage/absorption chocs.",
  image: ""
},

];


