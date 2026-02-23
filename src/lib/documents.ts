export interface DocumentInfo {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  category: "securite" | "hygiene" | "personnel" | "clientele" | "reglementation";
  categoryLabel: string;
  legalBasis: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  penalties: string;
  content: {
    intro: string;
    sections: Array<{
      heading: string;
      text: string;
    }>;
  };
  pdfTitle: string;
  pdfSections: Array<{
    heading?: string;
    lines: string[];
  }>;
}

export const DOCUMENTS: DocumentInfo[] = [
  {
    id: "interdiction-fumer",
    title: "Affiche d'interdiction de fumer",
    shortTitle: "Interdiction de fumer",
    description:
      "Signalétique obligatoire rappelant l'interdiction de fumer dans tous les lieux publics fermés, incluant les restaurants et bars.",
    icon: "🚭",
    category: "securite",
    categoryLabel: "Sécurité",
    legalBasis: "Décret n°2006-1386 du 15 novembre 2006 – Article R3512-2 du Code de la santé publique",
    slug: "interdiction-de-fumer",
    metaTitle: "Affiche Interdiction de Fumer Restaurant – Obligatoire",
    metaDescription:
      "Téléchargez l'affiche d'interdiction de fumer obligatoire pour votre restaurant ou bar. Conforme au décret 2006-1386. Document prêt à imprimer.",
    penalties: "Amende de 68 € pour le fumeur, jusqu'à 750 € en cas de non-affichage pour l'exploitant.",
    content: {
      intro:
        "Depuis le 1er février 2007, il est interdit de fumer dans tous les lieux fermés et couverts accueillant du public, y compris les restaurants et les bars. L'exploitant a l'obligation d'afficher une signalétique visible rappelant cette interdiction.",
      sections: [
        {
          heading: "Que dit la loi ?",
          text: "Le décret n°2006-1386 du 15 novembre 2006 fixe les conditions d'application de l'interdiction de fumer dans les lieux affectés à un usage collectif. L'article R3512-2 du Code de la santé publique impose l'affichage d'une signalisation apparente rappelant le principe de l'interdiction de fumer. Cette signalisation doit être apposée aux entrées de l'établissement et dans les espaces concernés.",
        },
        {
          heading: "Où afficher le panneau ?",
          text: "Le panneau d'interdiction de fumer doit être placé à chaque entrée de l'établissement (entrée principale, entrées de service, terrasses couvertes) ainsi qu'à l'intérieur de la salle de restaurant ou du bar. Il doit être visible et lisible par tous les clients et le personnel.",
        },
        {
          heading: "Que doit contenir l'affiche ?",
          text: "L'affiche doit comporter le symbole international d'interdiction de fumer (cigarette barrée dans un cercle rouge), le rappel de l'interdiction de fumer, la référence aux textes de loi applicables (décret n°2006-1386), ainsi que les sanctions encourues en cas d'infraction.",
        },
        {
          heading: "Cas particulier : la terrasse",
          text: "Les terrasses ouvertes (non couvertes) sont exclues de l'interdiction. En revanche, les terrasses couvertes ou fermées sont soumises à la même interdiction que l'intérieur de l'établissement. En cas de doute, il est recommandé d'afficher le panneau sur toutes les terrasses.",
        },
        {
          heading: "Sanctions en cas de non-respect",
          text: "Le fumeur qui ne respecte pas l'interdiction encourt une amende forfaitaire de 68 €. L'exploitant qui ne met pas en place la signalisation ou qui ne fait pas respecter l'interdiction risque une amende de 135 €. En cas de récidive ou de manquement grave, les sanctions peuvent être alourdies.",
        },
      ],
    },
    pdfTitle: "INTERDICTION DE FUMER",
    pdfSections: [
      {
        lines: [
          "Il est interdit de fumer dans l'ensemble",
          "de cet établissement",
        ],
      },
      {
        heading: "Rappel réglementaire",
        lines: [
          "Décret n°2006-1386 du 15 novembre 2006",
          "Article R3512-2 du Code de la santé publique",
          "",
          "Amende forfaitaire : 68 € pour le contrevenant",
          "Amende pour l'exploitant : 135 € en cas de non-respect",
        ],
      },
    ],
  },
  {
    id: "protection-mineurs",
    title: "Affiche de protection des mineurs – Vente d'alcool",
    shortTitle: "Protection des mineurs",
    description:
      "Affiche obligatoire rappelant l'interdiction de vente d'alcool aux mineurs de moins de 18 ans dans les débits de boissons.",
    icon: "🔞",
    category: "reglementation",
    categoryLabel: "Réglementation",
    legalBasis: "Article L3342-1 et L3353-3 du Code de la santé publique – Loi n°2009-87 du 21 juillet 2009",
    slug: "protection-des-mineurs-alcool",
    metaTitle: "Affiche Protection des Mineurs Alcool – Restaurant & Bar",
    metaDescription:
      "Affiche obligatoire d'interdiction de vente d'alcool aux mineurs pour restaurant et bar. Conforme à la loi. Téléchargement et impression.",
    penalties: "Amende de 7 500 € pour vente d'alcool à un mineur. Jusqu'à 1 an de prison en cas de récidive.",
    content: {
      intro:
        "La vente de boissons alcoolisées à des mineurs de moins de 18 ans est strictement interdite en France. Tout exploitant de restaurant, bar ou débit de boissons doit afficher de manière visible un avis rappelant cette interdiction.",
      sections: [
        {
          heading: "Que dit la loi ?",
          text: "L'article L3342-1 du Code de la santé publique interdit la vente de boissons alcoolisées aux mineurs de moins de 18 ans. La loi n°2009-87 du 21 juillet 2009 a renforcé cette interdiction en supprimant la distinction entre mineurs de 16 et 18 ans. L'affichage de cette interdiction est obligatoire dans tous les débits de boissons à consommer sur place ou à emporter.",
        },
        {
          heading: "Où afficher cette information ?",
          text: "L'affiche doit être apposée de manière visible à proximité immédiate de chaque point de vente de boissons alcoolisées : au comptoir, au bar, sur la carte des boissons et à l'entrée de l'établissement. Elle doit être lisible sans effort depuis le point de commande.",
        },
        {
          heading: "Contenu obligatoire de l'affiche",
          text: "L'affiche doit mentionner clairement : « La vente d'alcool à des mineurs de moins de 18 ans est interdite ». Elle doit rappeler les sanctions prévues par la loi et être conforme au modèle défini par arrêté. Il est recommandé d'ajouter la mention « Une pièce d'identité pourra être exigée ».",
        },
        {
          heading: "Vérification de l'âge",
          text: "L'exploitant peut exiger une pièce d'identité pour vérifier l'âge du client. En cas de doute, il est fortement recommandé de demander une pièce d'identité. Le refus de servir un mineur ne constitue pas une discrimination et est conforme à la loi.",
        },
        {
          heading: "Sanctions",
          text: "La vente d'alcool à un mineur est punie d'une amende de 7 500 €. L'offre gratuite d'alcool à un mineur dans un cadre commercial est également sanctionnée. En cas de récidive, la peine peut être portée à 15 000 € d'amende et 1 an d'emprisonnement. Le manquement à l'obligation d'affichage est sanctionné par une amende de 1 500 €.",
        },
      ],
    },
    pdfTitle: "PROTECTION DES MINEURS",
    pdfSections: [
      {
        lines: [
          "LA VENTE D'ALCOOL À DES MINEURS",
          "DE MOINS DE 18 ANS EST INTERDITE",
        ],
      },
      {
        heading: "Article L3342-1 du Code de la santé publique",
        lines: [
          "La vente de boissons alcoolisées à des mineurs",
          "de moins de dix-huit ans est interdite.",
          "",
          "Une pièce d'identité pourra être exigée.",
        ],
      },
      {
        heading: "Sanctions",
        lines: [
          "Amende de 7 500 € (Article L3353-3 du CSP)",
          "Récidive : 15 000 € d'amende et 1 an de prison",
        ],
      },
    ],
  },
  {
    id: "origine-viandes",
    title: "Affichage de l'origine des viandes bovines",
    shortTitle: "Origine des viandes",
    description:
      "Obligation d'informer les consommateurs sur l'origine des viandes bovines servies en restauration commerciale.",
    icon: "🥩",
    category: "hygiene",
    categoryLabel: "Hygiène & Traçabilité",
    legalBasis:
      "Décret n°2002-1465 du 17 décembre 2002 – Règlement CE 1760/2000",
    slug: "origine-des-viandes-bovines",
    metaTitle: "Affichage Origine Viandes Bovines Restaurant – Obligatoire",
    metaDescription:
      "Obligation d'affichage de l'origine des viandes bovines en restaurant. Modèle conforme à télécharger. Décret 2002-1465.",
    penalties:
      "Amende de 450 € à 1 500 € par infraction constatée (contravention de 3e et 5e classe).",
    content: {
      intro:
        "Depuis 2002, tous les restaurants et débits de boissons servant de la viande bovine ont l'obligation d'informer les consommateurs sur l'origine de cette viande. Cette traçabilité concerne le lieu de naissance, d'élevage et d'abattage de l'animal.",
      sections: [
        {
          heading: "Que dit la réglementation ?",
          text: "Le décret n°2002-1465 du 17 décembre 2002 impose à tout établissement de restauration commerciale d'indiquer l'origine des viandes bovines proposées à la vente. Cette obligation découle du règlement européen CE 1760/2000 relatif à l'étiquetage de la viande bovine, étendu à la restauration hors domicile.",
        },
        {
          heading: "Quelles informations afficher ?",
          text: "Vous devez indiquer pour chaque plat contenant de la viande bovine : le pays de naissance de l'animal, le pays d'élevage et le pays d'abattage. Si ces trois étapes ont lieu dans le même pays, vous pouvez simplement indiquer « Origine : France » (ou le pays concerné). Ces informations doivent être visibles par le consommateur avant sa commande.",
        },
        {
          heading: "Où et comment afficher ?",
          text: "L'information peut être affichée sur la carte ou le menu, sur un panneau visible dans la salle du restaurant, ou sur un support adapté (tableau, affiche, écran). L'essentiel est que le client puisse prendre connaissance de l'origine avant de passer commande. L'information doit être lisible et compréhensible.",
        },
        {
          heading: "Viandes concernées",
          text: "L'obligation porte sur toutes les viandes bovines : bœuf, veau, et toutes les pièces issues de bovins. Cela inclut les steaks, les rôtis, les plats en sauce, les burgers et tout plat contenant de la viande bovine comme ingrédient principal. Les viandes de porc, volaille, agneau ne sont pas soumises à cette obligation spécifique, bien que la mention de leur origine soit recommandée.",
        },
        {
          heading: "Sanctions",
          text: "Le non-respect de l'obligation d'affichage de l'origine des viandes bovines est passible d'une amende de 450 € (contravention de 3e classe). En cas de fausse déclaration sur l'origine, l'amende peut atteindre 1 500 € (contravention de 5e classe). Les services de la DGCCRF sont compétents pour effectuer les contrôles.",
        },
      ],
    },
    pdfTitle: "ORIGINE DES VIANDES BOVINES",
    pdfSections: [
      {
        heading: "Information du consommateur",
        lines: [
          "Conformément au décret n°2002-1465 du 17 décembre 2002,",
          "nous vous informons de l'origine des viandes bovines",
          "servies dans notre établissement :",
        ],
      },
      {
        heading: "Nos viandes bovines",
        lines: [
          "Pays de naissance : ................................",
          "Pays d'élevage : ................................",
          "Pays d'abattage : ................................",
          "",
          "(À compléter par l'établissement)",
        ],
      },
    ],
  },
  {
    id: "allergenes",
    title: "Affichage des 14 allergènes alimentaires",
    shortTitle: "Allergènes alimentaires",
    description:
      "Information obligatoire sur les 14 allergènes majeurs présents dans les plats servis au restaurant.",
    icon: "⚠️",
    category: "hygiene",
    categoryLabel: "Hygiène & Traçabilité",
    legalBasis:
      "Règlement UE n°1169/2011 (INCO) – Décret n°2015-447 du 17 avril 2015",
    slug: "allergenes-alimentaires",
    metaTitle: "Affichage Allergènes Restaurant – Les 14 Allergènes Obligatoires",
    metaDescription:
      "Liste des 14 allergènes à afficher obligatoirement en restaurant. Affiche conforme au règlement INCO à télécharger et imprimer.",
    penalties:
      "Amende de 1 500 € (contravention de 5e classe). Jusqu'à 3 000 € en cas de récidive.",
    content: {
      intro:
        "Le règlement européen INCO (n°1169/2011) impose à tous les restaurants, bars et établissements de restauration d'informer leurs clients sur la présence des 14 allergènes majeurs dans les plats proposés. Cette obligation est en vigueur depuis le 13 décembre 2014.",
      sections: [
        {
          heading: "Les 14 allergènes à déclarer",
          text: "Les 14 allergènes majeurs sont : 1) Gluten (blé, seigle, orge, avoine, épeautre) – 2) Crustacés – 3) Œufs – 4) Poissons – 5) Arachides – 6) Soja – 7) Lait et produits laitiers (lactose) – 8) Fruits à coque (amandes, noisettes, noix, etc.) – 9) Céleri – 10) Moutarde – 11) Graines de sésame – 12) Sulfites (SO2 > 10 mg/kg) – 13) Lupin – 14) Mollusques. Chacun de ces allergènes doit être identifiable par le consommateur.",
        },
        {
          heading: "Comment informer les clients ?",
          text: "L'information peut être donnée par écrit (sur la carte, le menu, ou une affiche) ou oralement à condition qu'un support écrit soit disponible sur demande. La méthode la plus courante est d'indiquer les allergènes directement sur la carte à côté de chaque plat, ou de mettre à disposition un tableau récapitulatif. Un panneau visible doit indiquer au minimum que l'information sur les allergènes est disponible sur demande.",
        },
        {
          heading: "Affichage obligatoire minimum",
          text: "Au minimum, un panneau visible doit être présent dans l'établissement ou sur la carte, indiquant que les informations relatives aux allergènes sont disponibles auprès du personnel. Si vous choisissez l'information orale, le personnel doit être formé et un document écrit doit être consultable sur simple demande du client.",
        },
        {
          heading: "Bonnes pratiques",
          text: "Il est fortement recommandé de tenir un tableau des allergènes à jour pour chaque plat et recette, de former régulièrement le personnel sur les allergènes, de vérifier les fiches techniques des fournisseurs, et de prendre en compte les risques de contamination croisée en cuisine.",
        },
        {
          heading: "Sanctions",
          text: "Le non-respect de l'obligation d'information sur les allergènes est sanctionné par une amende de 1 500 € (contravention de 5e classe). En cas de récidive, l'amende peut atteindre 3 000 €. Au-delà de l'amende, un accident allergique grave peut engager la responsabilité pénale de l'exploitant.",
        },
      ],
    },
    pdfTitle: "INFORMATION SUR LES ALLERGÈNES",
    pdfSections: [
      {
        lines: [
          "Conformément au règlement UE n°1169/2011,",
          "nous vous informons de la présence des allergènes",
          "suivants dans nos préparations :",
        ],
      },
      {
        heading: "Les 14 allergènes majeurs",
        lines: [
          "1. Gluten (blé, seigle, orge, avoine, épeautre)",
          "2. Crustacés",
          "3. Œufs",
          "4. Poissons",
          "5. Arachides",
          "6. Soja",
          "7. Lait et produits laitiers (lactose)",
          "8. Fruits à coque (amandes, noisettes, noix...)",
          "9. Céleri",
          "10. Moutarde",
          "11. Graines de sésame",
          "12. Sulfites (SO₂ > 10 mg/kg)",
          "13. Lupin",
          "14. Mollusques",
        ],
      },
      {
        lines: [
          "",
          "Pour toute question sur la composition de nos plats,",
          "veuillez vous adresser à notre personnel.",
        ],
      },
    ],
  },
  {
    id: "affichage-prix",
    title: "Affichage des prix des boissons et consommations",
    shortTitle: "Affichage des prix",
    description:
      "Obligation d'afficher les prix des boissons et consommations de manière visible depuis l'extérieur de l'établissement.",
    icon: "💰",
    category: "clientele",
    categoryLabel: "Information client",
    legalBasis:
      "Arrêté du 27 mars 1987 – Articles L112-1 à L112-4 du Code de la consommation",
    slug: "affichage-des-prix",
    metaTitle: "Affichage des Prix Restaurant & Bar – Réglementation Obligatoire",
    metaDescription:
      "Règles d'affichage des prix obligatoire pour restaurant et bar. Modèle conforme à l'arrêté du 27 mars 1987. Document à télécharger.",
    penalties:
      "Amende de 1 500 € pour défaut d'affichage des prix (contravention de 5e classe).",
    content: {
      intro:
        "L'affichage des prix est une obligation fondamentale pour tout restaurant, bar ou débit de boissons. Les prix doivent être visibles de l'extérieur de l'établissement et à l'intérieur, afin que le consommateur puisse faire un choix éclairé avant d'entrer et de commander.",
      sections: [
        {
          heading: "Les obligations d'affichage extérieur",
          text: "Tout restaurant ou bar doit afficher à l'extérieur, de manière visible et lisible, les prix pratiqués. Pour les restaurants : les menus et cartes doivent être affichés à l'entrée pendant toute la durée du service, avec les prix TTC. Pour les bars et cafés : les prix d'au moins 5 boissons couramment servies doivent être affichés à l'extérieur (un café, un demi de bière, un jus de fruit, un soda, une eau minérale). Les prix doivent être TTC, service compris.",
        },
        {
          heading: "Les obligations d'affichage intérieur",
          text: "À l'intérieur de l'établissement, la carte ou le menu doit être accessible à chaque client avant la commande. Les prix doivent être TTC et indiquer si le service est compris ou non. Si le service n'est pas compris, le pourcentage doit être clairement indiqué. La carte doit mentionner les prix au comptoir et en salle si ceux-ci diffèrent.",
        },
        {
          heading: "Mentions obligatoires",
          text: "Chaque prix doit être exprimé en euros TTC. La mention « prix nets » indique que le service est compris. Si le prix du service n'est pas inclus, il faut mentionner « prix service non compris, service X% ». Les boissons alcoolisées doivent être distinguées des boissons non alcoolisées sur la carte.",
        },
        {
          heading: "Règles pour les menus et formules",
          text: "Les menus et formules doivent indiquer clairement : le prix global, le détail des plats proposés dans chaque formule, et les éventuels suppléments. Le nombre de plats composant chaque formule doit être lisible. Les formules midi et soir peuvent avoir des prix différents si clairement indiqué.",
        },
        {
          heading: "Sanctions",
          text: "Le défaut d'affichage des prix constitue une contravention de 5e classe, punie d'une amende de 1 500 €. En cas de récidive, l'amende est portée à 3 000 €. La DGCCRF et les services municipaux sont habilités à contrôler le respect de ces obligations.",
        },
      ],
    },
    pdfTitle: "AFFICHAGE DES PRIX",
    pdfSections: [
      {
        heading: "Tarif des consommations",
        lines: [
          "Conformément à l'arrêté du 27 mars 1987",
          "",
          "                          Comptoir    Salle",
          "Café expresso            ......€    ......€",
          "Demi pression            ......€    ......€",
          "Jus de fruit             ......€    ......€",
          "Soda / Cola              ......€    ......€",
          "Eau minérale             ......€    ......€",
          "",
          "(À compléter par l'établissement)",
        ],
      },
      {
        lines: ["", "Prix TTC – Service compris"],
      },
    ],
  },
  {
    id: "licence-debit-boissons",
    title: "Panonceau de licence de débit de boissons",
    shortTitle: "Licence de débit de boissons",
    description:
      "Affichage obligatoire du type de licence de débit de boissons détenue par l'établissement (Licence III ou IV).",
    icon: "🍷",
    category: "reglementation",
    categoryLabel: "Réglementation",
    legalBasis:
      "Articles L3331-1 à L3331-3 et L3332-1 du Code de la santé publique",
    slug: "licence-debit-boissons",
    metaTitle: "Panonceau Licence Débit de Boissons – Licence III et IV",
    metaDescription:
      "Panonceau de licence de débit de boissons obligatoire pour restaurant et bar. Licence III, Licence IV. Modèle à télécharger.",
    penalties:
      "Amende de 3 750 € pour exploitation sans licence et fermeture administrative possible.",
    content: {
      intro:
        "Tout établissement servant des boissons alcoolisées doit détenir une licence adaptée et afficher de manière visible le type de licence dont il dispose. Le panonceau de licence doit être apposé à l'extérieur de l'établissement, visible depuis la voie publique.",
      sections: [
        {
          heading: "Les différentes licences",
          text: "Il existe plusieurs types de licences : la Licence III (licence restreinte) qui autorise la vente de boissons des groupes 1 à 3 (vins, bières, cidres, vins doux, liqueurs de moins de 18°) ; la Licence IV (grande licence ou licence de plein exercice) qui autorise la vente de toutes les boissons alcoolisées, y compris les spiritueux. La petite licence restaurant permet de servir des boissons des groupes 1 à 3 uniquement en accompagnement des repas. La licence restaurant permet de servir tous les alcools en accompagnement des repas.",
        },
        {
          heading: "Obligation d'affichage",
          text: "Le panonceau indiquant le type de licence doit être affiché à l'extérieur de l'établissement, visible de la voie publique. Il doit être apposé de manière permanente et indiquer clairement le numéro de la licence (III ou IV) ainsi que les catégories de boissons autorisées à la vente. Ce panonceau est délivré par la mairie lors de l'obtention de la licence.",
        },
        {
          heading: "Classement des boissons",
          text: "Les boissons sont classées en 5 groupes : Groupe 1 – Boissons sans alcool ; Groupe 2 – Boissons fermentées non distillées (vin, bière, cidre, poiré, hydromel) jusqu'à 3° ; Groupe 3 – Vins doux naturels, vins de liqueur, apéritifs à base de vin, liqueurs de moins de 18° ; Groupe 4 – Rhums, tafias, alcools de fruits ; Groupe 5 – Tous les autres alcools (whisky, vodka, gin, etc.).",
        },
        {
          heading: "Obtention et transfert",
          text: "L'obtention d'une licence nécessite une déclaration préalable en mairie au moins 15 jours avant l'ouverture. Le demandeur doit avoir suivi une formation spécifique sur les droits et obligations liés à la vente d'alcool (permis d'exploitation). La licence IV est contingentée : il n'est plus possible d'en créer de nouvelles, mais on peut en transférer une existante dans la même commune ou dans le département sous conditions.",
        },
        {
          heading: "Sanctions",
          text: "L'exploitation d'un débit de boissons sans licence est punie d'une amende de 3 750 €. Le non-affichage du panonceau peut entraîner une amende et une fermeture administrative. La vente de boissons d'un groupe non couvert par la licence est passible de poursuites pénales.",
        },
      ],
    },
    pdfTitle: "LICENCE DE DÉBIT DE BOISSONS",
    pdfSections: [
      {
        heading: "Établissement titulaire de la licence",
        lines: [
          "Nom de l'établissement : ................................",
          "Adresse : ................................",
          "",
          "Type de licence : □ Licence III  □ Licence IV",
          "                  □ Petite licence restaurant",
          "                  □ Licence restaurant",
        ],
      },
      {
        heading: "Catégories de boissons autorisées",
        lines: [
          "Groupe 1 : Boissons sans alcool",
          "Groupe 2 : Boissons fermentées non distillées",
          "Groupe 3 : Vins doux, apéritifs à base de vin",
          "Groupe 4 : Rhums, tafias, alcools de fruits",
          "Groupe 5 : Tous les autres alcools",
          "",
          "N° de licence : ................................",
        ],
      },
    ],
  },
  {
    id: "horaires-ouverture",
    title: "Affichage des horaires d'ouverture",
    shortTitle: "Horaires d'ouverture",
    description:
      "Obligation d'afficher les horaires et jours d'ouverture de l'établissement de manière visible depuis l'extérieur.",
    icon: "🕐",
    category: "clientele",
    categoryLabel: "Information client",
    legalBasis:
      "Arrêté préfectoral – Article L3332-15 du Code de la santé publique",
    slug: "horaires-ouverture",
    metaTitle: "Affichage Horaires Ouverture Restaurant – Obligatoire",
    metaDescription:
      "Modèle d'affichage des horaires d'ouverture obligatoire pour restaurant et bar. Conforme à la réglementation. Téléchargement immédiat.",
    penalties:
      "Amende de 750 € et fermeture administrative possible en cas de non-respect des horaires autorisés.",
    content: {
      intro:
        "Tout restaurant, bar ou débit de boissons doit afficher de manière visible ses horaires d'ouverture et de fermeture. Ces horaires doivent être conformes à l'arrêté préfectoral en vigueur dans le département et visibles depuis la voie publique.",
      sections: [
        {
          heading: "Réglementation des horaires",
          text: "Les horaires d'ouverture et de fermeture des débits de boissons sont fixés par arrêté préfectoral. En règle générale, les restaurants peuvent rester ouverts jusqu'à 1h30 du matin et les bars jusqu'à 2h. Des dérogations peuvent être accordées par le préfet pour des événements spécifiques. L'exploitant doit respecter strictement ces horaires sous peine de sanctions.",
        },
        {
          heading: "Où et comment afficher ?",
          text: "Les horaires doivent être affichés à l'extérieur de l'établissement, visibles depuis la voie publique. L'affichage doit mentionner les jours et heures d'ouverture et de fermeture. En cas de fermeture hebdomadaire (jour de repos), celle-ci doit être clairement indiquée. Les horaires doivent être lisibles et à jour.",
        },
        {
          heading: "Contenu de l'affichage",
          text: "L'affichage doit indiquer pour chaque jour de la semaine : l'heure d'ouverture et l'heure de fermeture. Les jours de fermeture doivent être mentionnés. Si les horaires du service du midi et du soir diffèrent, les deux plages horaires doivent apparaître. Les périodes de congés annuels doivent également être communiquées.",
        },
        {
          heading: "Sanctions",
          text: "Le non-respect des horaires d'ouverture autorisés peut entraîner une amende de 750 €. En cas de récidive ou de trouble à l'ordre public, le préfet peut ordonner la fermeture administrative de l'établissement pour une durée maximale de 6 mois. Le non-affichage des horaires peut également donner lieu à un rappel à l'ordre des autorités.",
        },
      ],
    },
    pdfTitle: "HORAIRES D'OUVERTURE",
    pdfSections: [
      {
        heading: "Horaires de l'établissement",
        lines: [
          "Lundi :      de ......h...... à ......h......",
          "Mardi :      de ......h...... à ......h......",
          "Mercredi :   de ......h...... à ......h......",
          "Jeudi :      de ......h...... à ......h......",
          "Vendredi :   de ......h...... à ......h......",
          "Samedi :     de ......h...... à ......h......",
          "Dimanche :   de ......h...... à ......h......",
        ],
      },
      {
        heading: "Jour(s) de fermeture hebdomadaire",
        lines: [
          "................................................................",
        ],
      },
    ],
  },
  {
    id: "numeros-urgence",
    title: "Affichage des numéros d'urgence",
    shortTitle: "Numéros d'urgence",
    description:
      "Affichage obligatoire des numéros d'urgence (SAMU, pompiers, police) accessibles depuis l'établissement.",
    icon: "🚨",
    category: "securite",
    categoryLabel: "Sécurité",
    legalBasis:
      "Code du travail – Article R4224-16",
    slug: "numeros-urgence",
    metaTitle: "Affiche Numéros d'Urgence Restaurant – Obligatoire",
    metaDescription:
      "Affiche des numéros d'urgence obligatoire en restaurant et bar. SAMU, Pompiers, Police, Centre antipoison. Document prêt à imprimer.",
    penalties:
      "Amende de 1 500 € en cas de contrôle de l'inspection du travail.",
    content: {
      intro:
        "Tout établissement recevant du public, y compris les restaurants et bars, doit afficher de manière visible les numéros d'urgence. Cette obligation relève à la fois du droit du travail (protection des salariés) et de la sécurité des établissements recevant du public (ERP).",
      sections: [
        {
          heading: "Numéros à afficher obligatoirement",
          text: "Les numéros suivants doivent être affichés : le 15 (SAMU – urgences médicales), le 18 (Pompiers – incendie et secours), le 17 (Police / Gendarmerie), le 112 (Numéro d'urgence européen), le 114 (Numéro d'urgence par SMS pour les personnes sourdes et malentendantes). Il est également recommandé d'afficher le numéro du centre antipoison le plus proche.",
        },
        {
          heading: "Où afficher ?",
          text: "Les numéros d'urgence doivent être affichés dans des endroits facilement accessibles et visibles : à proximité du téléphone fixe de l'établissement, en cuisine, dans la salle de restaurant, dans les locaux du personnel, et à proximité de la trousse de premiers secours. Il est recommandé de placer l'affiche à hauteur des yeux.",
        },
        {
          heading: "Informations complémentaires recommandées",
          text: "En plus des numéros d'urgence, il est recommandé d'afficher : l'adresse exacte de l'établissement (pour la communiquer rapidement aux secours), le nom et les coordonnées du médecin du travail, l'emplacement de la trousse de premiers secours, et la liste des sauveteurs secouristes du travail (SST) présents dans l'établissement.",
        },
        {
          heading: "Obligations employeur",
          text: "L'article R4224-16 du Code du travail impose à l'employeur de mettre en place les moyens de secours et de premiers soins. Cela inclut l'affichage des numéros d'urgence, la disponibilité d'une trousse de premiers secours, et la formation de personnel aux premiers secours. Dans un restaurant, au moins un membre du personnel devrait être formé au PSC1 ou SST.",
        },
      ],
    },
    pdfTitle: "NUMÉROS D'URGENCE",
    pdfSections: [
      {
        heading: "En cas d'urgence, appelez :",
        lines: [
          "",
          "SAMU (urgences médicales) ............... 15",
          "",
          "POMPIERS (incendie / secours) ........... 18",
          "",
          "POLICE / GENDARMERIE .................... 17",
          "",
          "NUMÉRO D'URGENCE EUROPÉEN .............. 112",
          "",
          "URGENCE SMS (sourds/malentendants) ...... 114",
          "",
          "CENTRE ANTIPOISON ...................... .........",
        ],
      },
      {
        heading: "Adresse de l'établissement",
        lines: [
          "................................................................",
          "................................................................",
          "",
          "(À communiquer aux services de secours)",
        ],
      },
    ],
  },
  {
    id: "droit-travail",
    title: "Affichage des informations de droit du travail",
    shortTitle: "Droit du travail",
    description:
      "Affichages obligatoires liés au droit du travail : inspection du travail, médecine du travail, convention collective.",
    icon: "⚖️",
    category: "personnel",
    categoryLabel: "Personnel & Droit du travail",
    legalBasis:
      "Articles D4711-1, R4228-21 et L2262-5 du Code du travail",
    slug: "affichage-droit-du-travail",
    metaTitle: "Affichage Obligatoire Droit du Travail Restaurant",
    metaDescription:
      "Affichages obligatoires du droit du travail en restaurant : inspection du travail, médecine du travail, convention collective. Documents conformes.",
    penalties:
      "Amende de 1 500 € par salarié concerné par infraction constatée.",
    content: {
      intro:
        "Tout employeur, y compris les restaurateurs et gérants de bars, a l'obligation d'afficher certaines informations relatives au droit du travail dans les locaux accessibles aux salariés. Ces affichages visent à informer les employés de leurs droits et des recours disponibles.",
      sections: [
        {
          heading: "Coordonnées de l'inspection du travail",
          text: "L'employeur doit afficher l'adresse, le numéro de téléphone et le nom de l'inspecteur du travail compétent pour l'établissement. Ces informations permettent aux salariés de contacter directement l'inspection du travail en cas de besoin. L'affichage doit être placé dans un endroit accessible à tous les salariés (salle de pause, vestiaire, couloir).",
        },
        {
          heading: "Coordonnées de la médecine du travail",
          text: "Les coordonnées du service de santé au travail (adresse et numéro de téléphone) doivent être affichées. Tout salarié doit pouvoir identifier et contacter le médecin du travail compétent. Cette information est particulièrement importante dans la restauration où les conditions de travail (chaleur, station debout, port de charges) peuvent avoir un impact sur la santé.",
        },
        {
          heading: "Convention collective applicable",
          text: "L'employeur doit afficher un avis indiquant la convention collective applicable dans l'établissement. Pour la restauration, il s'agit généralement de la Convention Collective Nationale des Hôtels, Cafés, Restaurants (HCR) – IDCC 1979. L'avis doit préciser où la convention peut être consultée par les salariés. Un exemplaire à jour doit être tenu à disposition.",
        },
        {
          heading: "Autres affichages obligatoires",
          text: "D'autres informations doivent être affichées dans les locaux du personnel : les consignes de sécurité et d'incendie, l'interdiction de fumer, les horaires collectifs de travail, l'ordre des départs en congés, le règlement intérieur (obligatoire à partir de 50 salariés), et les coordonnées du Défenseur des droits (lutte contre les discriminations).",
        },
        {
          heading: "Sanctions",
          text: "Le défaut d'affichage des informations obligatoires est sanctionné par une amende de 1 500 € par salarié concerné (contravention de 5e classe). L'inspecteur du travail peut dresser un procès-verbal en cas de manquement constaté lors d'un contrôle. Ces obligations sont strictement contrôlées dans le secteur de la restauration.",
        },
      ],
    },
    pdfTitle: "AFFICHAGE DROIT DU TRAVAIL",
    pdfSections: [
      {
        heading: "Inspection du travail",
        lines: [
          "Nom de l'inspecteur : ................................",
          "Adresse : ................................",
          "Téléphone : ................................",
        ],
      },
      {
        heading: "Médecine du travail",
        lines: [
          "Service : ................................",
          "Adresse : ................................",
          "Téléphone : ................................",
        ],
      },
      {
        heading: "Convention collective applicable",
        lines: [
          "Convention Collective Nationale des",
          "Hôtels, Cafés, Restaurants (HCR)",
          "IDCC 1979 – Brochure JO n°3292",
          "",
          "Un exemplaire est consultable",
          "auprès de la direction.",
        ],
      },
    ],
  },
  {
    id: "accessibilite",
    title: "Affichage accessibilité PMR",
    shortTitle: "Accessibilité PMR",
    description:
      "Information sur l'accessibilité de l'établissement aux personnes en situation de handicap et obligations de registre d'accessibilité.",
    icon: "♿",
    category: "reglementation",
    categoryLabel: "Réglementation",
    legalBasis:
      "Loi n°2005-102 du 11 février 2005 – Arrêté du 19 avril 2017",
    slug: "accessibilite-pmr",
    metaTitle: "Affichage Accessibilité PMR Restaurant – Obligations",
    metaDescription:
      "Obligations d'accessibilité PMR pour restaurant et bar. Registre d'accessibilité, signalétique obligatoire. Guide complet et documents.",
    penalties:
      "Amende de 45 000 € et jusqu'à 225 000 € pour une personne morale en cas de non-conformité.",
    content: {
      intro:
        "Depuis la loi du 11 février 2005, tous les établissements recevant du public (ERP) doivent être accessibles aux personnes en situation de handicap. Les restaurants et bars sont des ERP de 5e catégorie et sont soumis à des obligations spécifiques d'accessibilité et d'information.",
      sections: [
        {
          heading: "Obligations d'accessibilité",
          text: "Les restaurants et bars doivent être accessibles à tous les types de handicap : moteur, visuel, auditif et mental. Cela implique une entrée accessible (rampe si marche), une circulation intérieure adaptée, des sanitaires accessibles, et un espace d'accueil conforme. Si l'établissement ne peut pas être rendu totalement accessible, il doit déposer un Ad'AP (Agenda d'Accessibilité Programmée) ou obtenir une dérogation.",
        },
        {
          heading: "Le registre public d'accessibilité",
          text: "Depuis le 30 septembre 2017, tous les ERP doivent tenir un registre public d'accessibilité. Ce registre doit être consultable par le public (à l'accueil ou en ligne) et contenir : l'attestation d'accessibilité ou le calendrier de mise en accessibilité (Ad'AP), les formations du personnel à l'accueil des personnes handicapées, les éventuelles dérogations obtenues, et les prestations fournies si l'établissement n'est pas totalement accessible.",
        },
        {
          heading: "Signalétique obligatoire",
          text: "L'établissement doit disposer d'une signalétique adaptée : pictogrammes d'accessibilité à l'entrée, signalisation des sanitaires adaptés, bandes de guidage si nécessaire, et contraste visuel suffisant. Le symbole international d'accessibilité (fauteuil roulant sur fond bleu) doit être affiché si l'établissement est accessible.",
        },
        {
          heading: "Sanctions",
          text: "Le non-respect des obligations d'accessibilité est passible d'une amende de 45 000 € pour une personne physique et 225 000 € pour une personne morale. Le défaut de registre d'accessibilité peut donner lieu à une mise en demeure. Des sanctions pénales sont prévues en cas de discrimination liée au handicap (refus d'accès).",
        },
      ],
    },
    pdfTitle: "ACCESSIBILITÉ DE L'ÉTABLISSEMENT",
    pdfSections: [
      {
        lines: [
          "Cet établissement est accessible",
          "aux personnes en situation de handicap.",
        ],
      },
      {
        heading: "Informations",
        lines: [
          "Conformément à la loi du 11 février 2005,",
          "notre établissement s'engage à accueillir",
          "toute personne en situation de handicap.",
          "",
          "Le registre public d'accessibilité",
          "est disponible sur simple demande à l'accueil.",
          "",
          "Pour toute difficulté d'accès, merci de",
          "vous adresser à notre personnel.",
        ],
      },
    ],
  },
  {
    id: "hygiene-haccp",
    title: "Affichage des règles d'hygiène – HACCP",
    shortTitle: "Hygiène & HACCP",
    description:
      "Affichage des règles d'hygiène et de sécurité alimentaire obligatoires en restauration, incluant les principes HACCP.",
    icon: "🧼",
    category: "hygiene",
    categoryLabel: "Hygiène & Traçabilité",
    legalBasis:
      "Règlement CE n°852/2004 – Arrêté du 21 décembre 2009",
    slug: "hygiene-haccp",
    metaTitle: "Affichage Hygiène HACCP Restaurant – Règles Obligatoires",
    metaDescription:
      "Règles d'hygiène HACCP obligatoires en restaurant. Affichage lavage des mains, températures, marche en avant. Documents conformes.",
    penalties:
      "Fermeture administrative et amende de 1 500 € à 15 000 €. Responsabilité pénale en cas d'intoxication.",
    content: {
      intro:
        "La sécurité alimentaire est une obligation majeure pour tout restaurant ou bar servant de la nourriture. Les règles d'hygiène reposent sur la méthode HACCP (Hazard Analysis Critical Control Points) et doivent être rappelées par des affichages visibles en cuisine et dans les zones de préparation.",
      sections: [
        {
          heading: "Le plan HACCP",
          text: "Tout restaurant doit mettre en place un Plan de Maîtrise Sanitaire (PMS) basé sur les principes HACCP. Ce plan comprend 7 principes : identifier les dangers, déterminer les points critiques, établir les limites critiques, mettre en place un système de surveillance, définir les actions correctives, vérifier le système, et documenter toutes les procédures. Le PMS doit être consultable à tout moment par les services vétérinaires.",
        },
        {
          heading: "Affichage lavage des mains",
          text: "Un affichage rappelant le protocole de lavage des mains doit être placé à proximité de chaque point d'eau en cuisine et dans les sanitaires du personnel. Le lavage des mains doit être effectué : en arrivant au travail, après être allé aux toilettes, après avoir touché des aliments crus, après s'être mouché, et régulièrement pendant le service. L'affiche doit détailler les étapes du lavage (mouiller, savonner, frotter 30 secondes, rincer, sécher).",
        },
        {
          heading: "Températures de conservation",
          text: "Un tableau des températures de conservation doit être affiché en cuisine : produits frais entre 0°C et +4°C, produits laitiers entre +4°C et +8°C, produits surgelés à -18°C minimum. Les relevés de température doivent être effectués quotidiennement et consignés. Un affichage des températures de cuisson minimales est également recommandé (viandes, poissons, œufs).",
        },
        {
          heading: "Formation obligatoire",
          text: "Au moins une personne dans l'établissement doit avoir suivi une formation en hygiène alimentaire (14 heures minimum). Cette obligation est en vigueur depuis le 1er octobre 2012. L'attestation de formation doit être conservée dans l'établissement et présentée lors des contrôles. Un affichage indiquant que le personnel est formé aux bonnes pratiques d'hygiène est recommandé.",
        },
        {
          heading: "Sanctions",
          text: "Le non-respect des règles d'hygiène peut entraîner : une mise en demeure de la DDPP (Direction départementale de la protection des populations), une fermeture administrative temporaire ou définitive, une amende de 1 500 € à 15 000 €, et en cas d'intoxication alimentaire grave, des poursuites pénales pouvant aller jusqu'à 2 ans d'emprisonnement et 150 000 € d'amende.",
        },
      ],
    },
    pdfTitle: "RÈGLES D'HYGIÈNE",
    pdfSections: [
      {
        heading: "Protocole de lavage des mains",
        lines: [
          "1. Mouiller les mains à l'eau tiède",
          "2. Appliquer du savon bactéricide",
          "3. Frotter pendant 30 secondes minimum",
          "   (paumes, dos, entre les doigts, ongles)",
          "4. Rincer abondamment",
          "5. Sécher avec un essuie-mains à usage unique",
        ],
      },
      {
        heading: "Quand se laver les mains ?",
        lines: [
          "• En arrivant au travail",
          "• Après être allé aux toilettes",
          "• Après avoir touché des aliments crus",
          "• Après s'être mouché ou avoir toussé",
          "• Après avoir manipulé des déchets",
          "• Entre chaque changement de tâche",
        ],
      },
      {
        heading: "Températures de conservation",
        lines: [
          "Produits frais : 0°C à +4°C",
          "Produits laitiers : +4°C à +8°C",
          "Produits surgelés : -18°C minimum",
        ],
      },
    ],
  },
  {
    id: "videosurveillance",
    title: "Panneau d'information vidéosurveillance",
    shortTitle: "Vidéosurveillance",
    description:
      "Panneau obligatoire informant clients et salariés de la présence d'un système de vidéosurveillance dans l'établissement.",
    icon: "📹",
    category: "securite",
    categoryLabel: "Sécurité",
    legalBasis:
      "Article L252-2 du Code de la sécurité intérieure – RGPD (Règlement UE 2016/679)",
    slug: "videosurveillance",
    metaTitle: "Panneau Vidéosurveillance Restaurant – Affichage Obligatoire",
    metaDescription:
      "Panneau d'information vidéosurveillance obligatoire pour restaurant et bar. Conforme RGPD et Code de la sécurité intérieure.",
    penalties:
      "Amende de 45 000 € et jusqu'à 3 ans d'emprisonnement pour vidéosurveillance non déclarée.",
    content: {
      intro:
        "Si votre restaurant ou bar est équipé d'un système de vidéosurveillance, vous avez l'obligation d'en informer toute personne pénétrant dans l'établissement. Un panneau d'information doit être installé à l'entrée et dans chaque zone surveillée.",
      sections: [
        {
          heading: "Obligation d'information",
          text: "L'article L252-2 du Code de la sécurité intérieure impose d'informer de manière claire et permanente toute personne de l'existence d'un système de vidéosurveillance. Cette obligation est renforcée par le RGPD qui exige une information détaillée sur le traitement des données personnelles, y compris les images vidéo. Le panneau doit être visible avant que la personne ne pénètre dans la zone filmée.",
        },
        {
          heading: "Contenu du panneau",
          text: "Le panneau doit comporter au minimum : un pictogramme de caméra, la mention de l'existence du dispositif de vidéosurveillance, la base juridique du traitement (sécurité des biens et des personnes), l'identité du responsable du traitement, la durée de conservation des images, les droits des personnes (accès, effacement), et les coordonnées pour exercer ces droits ou déposer une réclamation auprès de la CNIL.",
        },
        {
          heading: "Autorisation préfectorale",
          text: "L'installation d'un système de vidéosurveillance dans un lieu ouvert au public nécessite une autorisation préfectorale. La demande doit être adressée à la préfecture du lieu d'implantation. L'autorisation est délivrée pour une durée de 5 ans renouvelable. Les images ne peuvent être conservées plus de 30 jours (sauf procédure judiciaire). Le système ne doit pas filmer les locaux syndicaux, les zones de repos des salariés, ni la voie publique.",
        },
        {
          heading: "Sanctions",
          text: "La mise en place d'un système de vidéosurveillance sans autorisation ou sans information des personnes filmées est punie de 45 000 € d'amende et 3 ans d'emprisonnement. Le non-respect du RGPD peut entraîner des sanctions de la CNIL pouvant atteindre 20 millions d'euros ou 4% du chiffre d'affaires annuel.",
        },
      ],
    },
    pdfTitle: "ÉTABLISSEMENT SOUS VIDÉOSURVEILLANCE",
    pdfSections: [
      {
        lines: [
          "Cet établissement est placé sous",
          "vidéosurveillance pour la sécurité",
          "des biens et des personnes.",
        ],
      },
      {
        heading: "Informations RGPD",
        lines: [
          "Responsable du traitement :",
          "................................................................",
          "",
          "Durée de conservation : 30 jours maximum",
          "",
          "Vos droits : Vous disposez d'un droit d'accès",
          "aux images vous concernant.",
          "",
          "Contact / Exercice des droits :",
          "................................................................",
          "",
          "Réclamation : www.cnil.fr",
          "",
          "Base légale : Article L252-2 du CSI",
          "Autorisation préfectorale n° .............",
        ],
      },
    ],
  },
  {
    id: "ethylotest",
    title: "Mise à disposition d'éthylotests",
    shortTitle: "Éthylotests",
    description:
      "Obligation pour les débits de boissons de mettre des éthylotests à disposition de la clientèle.",
    icon: "🚗",
    category: "securite",
    categoryLabel: "Sécurité",
    legalBasis:
      "Arrêté du 24 août 2011 – Article L3341-4 du Code de la santé publique",
    slug: "ethylotests",
    metaTitle: "Éthylotests Obligatoires Bar & Restaurant – Réglementation",
    metaDescription:
      "Obligation de mise à disposition d'éthylotests dans les bars et restaurants. Réglementation, affichage et bonnes pratiques.",
    penalties:
      "Amende de 750 € pour l'exploitant en cas de non-mise à disposition.",
    content: {
      intro:
        "Depuis 2012, les débits de boissons à consommer sur place vendant de l'alcool entre 2h et 7h du matin ont l'obligation de mettre des éthylotests à disposition de leur clientèle. Cette mesure vise à lutter contre l'alcool au volant et à responsabiliser les consommateurs.",
      sections: [
        {
          heading: "Qui est concerné ?",
          text: "L'obligation concerne les établissements de nuit et les débits de boissons dont l'heure de fermeture est postérieure à 2 heures du matin. Les restaurants classiques fermant avant 2h ne sont pas soumis à cette obligation mais il est fortement recommandé de proposer des éthylotests à leur clientèle, notamment lors d'événements avec consommation d'alcool.",
        },
        {
          heading: "Types d'éthylotests",
          text: "Les éthylotests peuvent être chimiques (à usage unique) ou électroniques. Ils doivent être conformes à la norme NF et porter le marquage correspondant. Les éthylotests chimiques doivent être dans leur date de validité. L'exploitant peut les proposer à la vente ou les mettre à disposition gratuitement. Leur emplacement doit être signalé par un affichage clair.",
        },
        {
          heading: "Affichage obligatoire",
          text: "Un affichage doit indiquer la mise à disposition des éthylotests et leur emplacement dans l'établissement. Il est recommandé de rappeler les limites légales d'alcoolémie : 0,5 g/l de sang (0,25 mg/l d'air expiré) pour les conducteurs standard, et 0,2 g/l de sang pour les jeunes conducteurs (permis probatoire). L'affichage peut également rappeler les sanctions encourues en cas de conduite en état d'ivresse.",
        },
        {
          heading: "Sanctions",
          text: "Le défaut de mise à disposition d'éthylotests est passible d'une amende de 750 €. Au-delà de l'amende, l'exploitant qui ne respecte pas cette obligation peut voir sa responsabilité engagée en cas d'accident impliquant un client en état d'ébriété sortant de son établissement.",
        },
      ],
    },
    pdfTitle: "ÉTHYLOTESTS À DISPOSITION",
    pdfSections: [
      {
        lines: [
          "Des éthylotests sont mis à votre disposition",
          "dans cet établissement.",
          "",
          "Demandez-les au comptoir.",
        ],
      },
      {
        heading: "Rappel des limites légales",
        lines: [
          "Taux d'alcoolémie maximal autorisé :",
          "",
          "Conducteur : 0,5 g/l de sang",
          "             (0,25 mg/l d'air expiré)",
          "",
          "Jeune conducteur (permis probatoire) :",
          "             0,2 g/l de sang",
          "             (0,10 mg/l d'air expiré)",
          "",
          "Ne prenez pas le volant en cas de doute.",
        ],
      },
    ],
  },
  {
    id: "gaspillage-alimentaire",
    title: "Lutte contre le gaspillage alimentaire – Doggy bag",
    shortTitle: "Anti-gaspillage / Doggy bag",
    description:
      "Obligation de proposer un contenant pour emporter les restes du repas (doggy bag) et information sur la lutte contre le gaspillage.",
    icon: "🥡",
    category: "hygiene",
    categoryLabel: "Hygiène & Traçabilité",
    legalBasis:
      "Loi n°2020-105 du 10 février 2020 (AGEC) – Article L541-15-6 du Code de l'environnement",
    slug: "gaspillage-alimentaire-doggy-bag",
    metaTitle: "Doggy Bag Obligatoire Restaurant – Loi Anti-Gaspillage",
    metaDescription:
      "Le doggy bag est obligatoire en restaurant depuis 2021. Loi AGEC, obligations, affichage. Guide complet et affiche à télécharger.",
    penalties:
      "Amende de 1 500 € en cas de non-proposition de contenant réutilisable.",
    content: {
      intro:
        "Depuis le 1er juillet 2021, tous les restaurants ont l'obligation de proposer à leurs clients un contenant réutilisable ou recyclable pour emporter les restes de leur repas (le « doggy bag »). Cette obligation découle de la loi AGEC (Anti-Gaspillage pour une Économie Circulaire) du 10 février 2020.",
      sections: [
        {
          heading: "Que dit la loi AGEC ?",
          text: "L'article L541-15-6 du Code de l'environnement impose aux établissements de restauration commerciale de mettre à disposition de leurs clients, à leur demande, des contenants réutilisables ou recyclables permettant d'emporter les aliments ou boissons non consommés sur place. Cette mesure vise à réduire le gaspillage alimentaire qui représente environ 10 millions de tonnes de nourriture gaspillée par an en France.",
        },
        {
          heading: "Obligations du restaurateur",
          text: "Le restaurateur doit : disposer de contenants adaptés (réutilisables ou recyclables), proposer systématiquement ce service aux clients en fin de repas (ou à leur demande), informer la clientèle de cette possibilité par un affichage visible. Les contenants en plastique à usage unique sont interdits depuis le 1er janvier 2023, il faut privilégier les contenants réutilisables, en carton ou en matériaux compostables.",
        },
        {
          heading: "L'affichage",
          text: "Un affichage bien visible doit informer les clients de la possibilité d'emporter les restes de leur repas. L'affiche peut être placée dans la salle, sur la carte, ou à la caisse. Elle doit être claire et inciter les clients à ne pas hésiter à demander un contenant. Une formulation positive et engageante est recommandée.",
        },
        {
          heading: "Sanctions",
          text: "Le non-respect de cette obligation est passible d'une amende de 1 500 € (contravention de 5e classe). Les contrôles sont effectués par la DGCCRF. Au-delà de l'amende, ne pas proposer de doggy bag peut nuire à l'image de l'établissement auprès d'une clientèle de plus en plus sensible aux enjeux environnementaux.",
        },
      ],
    },
    pdfTitle: "LUTTE CONTRE LE GASPILLAGE ALIMENTAIRE",
    pdfSections: [
      {
        lines: [
          "Vous n'avez pas terminé votre repas ?",
          "",
          "Nous vous proposons un contenant",
          "pour emporter vos restes !",
        ],
      },
      {
        heading: "Le saviez-vous ?",
        lines: [
          "En France, 10 millions de tonnes de nourriture",
          "sont gaspillées chaque année.",
          "",
          "En emportant vos restes, vous participez",
          "à la lutte contre le gaspillage alimentaire.",
          "",
          "N'hésitez pas à demander un contenant",
          "à notre personnel !",
          "",
          "Loi AGEC du 10 février 2020",
          "Article L541-15-6 du Code de l'environnement",
        ],
      },
    ],
  },
];

export const CATEGORIES = [
  { id: "securite", label: "Sécurité", icon: "🛡️" },
  { id: "hygiene", label: "Hygiène & Traçabilité", icon: "🧪" },
  { id: "personnel", label: "Personnel & Droit du travail", icon: "👥" },
  { id: "clientele", label: "Information client", icon: "📋" },
  { id: "reglementation", label: "Réglementation", icon: "📜" },
] as const;

export function getDocumentBySlug(slug: string): DocumentInfo | undefined {
  return DOCUMENTS.find((doc) => doc.slug === slug);
}

export function getDocumentById(id: string): DocumentInfo | undefined {
  return DOCUMENTS.find((doc) => doc.id === id);
}

export function getDocumentsByCategory(category: string): DocumentInfo[] {
  return DOCUMENTS.filter((doc) => doc.category === category);
}
