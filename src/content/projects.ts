import type { L } from "@/lib/i18n";

/**
 * Project case studies. Facts (numbers, tool names) are written once; prose is written per language.
 * Sources: project repositories, reports and presentations in the OneDrive workspace.
 * Anything marked PLACEHOLDER must be confirmed by Yassmine before publishing.
 */

export type Img = { src: string; width: number; height: number; alt: L; caption?: L; paper?: boolean; fill?: boolean }; // fill: show the whole image at its own ratio, no padding
export type StepStatus = "done" | "partial" | "next" | "planned";
export type Step = { tag?: L; label: L; detail?: L; status?: StepStatus };

export type Project = {
  slug: string;
  title: L;
  shortTitle: L;
  category: L;
  period: L;
  context: L;
  team: L;
  role: L;
  status: L;
  summary: L; // homepage card
  lede: L; // project page intro
  tags: string[]; // 4–6 key technologies for the card
  cover: Img;
  overview: L<string[]>;
  overviewTitle?: L; // replaces the default "Overview" heading
  objectives: L<string[]>;
  architecture: { intro: L; steps: Step[]; note?: L };
  stack: { label: L; items: string[] }[];
  implementation: { title: L; body: L }[];
  contribution: { intro: L; items: L<string[]>; placeholder?: L };
  results: {
    metrics: { value: string; label: L }[];
    table?: { caption: L; head: L<string[]>; rows: (string | L)[][]; highlight?: number };
    notes: L<string[]>;
  };
  gallery: Img[];
  lessons: L<string[]>;
  links: { label: L; href?: string; placeholder?: boolean }[];
};

// Every case study written so far. Which ones are published, and in what order, is set by `published` below.
const allProjects: Project[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "industrial-defect-detection",
    title: {
      en: "Visual Defect Detection for Quality Control",
      fr: "Détection de défauts visuels pour le contrôle qualité",
    },
    shortTitle: { en: "Defect detection", fr: "Détection de défauts" },
    category: { en: "Computer vision · Anomaly detection", fr: "Vision par ordinateur · Détection d'anomalies" },
    period: { en: "Jun – Aug 2026", fr: "juin – août 2026" },
    context: { en: "Internship · SOMEF, R&D department", fr: "Stage · SOMEF, département R&D" },
    team: { en: "Individual, supervised by SOMEF R&D", fr: "Individuel, encadré par la R&D de SOMEF" },
    role: { en: "Computer Vision & AI Intern", fr: "Stagiaire Vision par ordinateur & IA" },
    status: { en: "Completed", fr: "Terminé" },
    summary: {
      en: "An inspection bench and an OK/NOK prototype for a white wall plate. Four approaches compared on the same test set; the retained hybrid catches 97.4% of defective parts.",
      fr: "Un banc d'inspection et un prototype OK/NOK pour une plaque murale blanche. Quatre approches comparées sur le même jeu de test ; l'architecture hybride retenue détecte 97,4 % des pièces défectueuses.",
    },
    lede: {
      en: "At SOMEF, wall plates coming out of injection moulding are checked by eye. I built a reproducible inspection bench and a prototype that gives the same OK/NOK verdict at every pass, then compared four detection approaches under one evaluation protocol.",
      fr: "Chez SOMEF, les plaques murales qui sortent de l'injection plastique sont contrôlées à l'œil. J'ai construit un banc d'inspection reproductible et un prototype qui rend le même verdict OK/NOK à chaque passage, puis comparé quatre approches de détection avec un protocole d'évaluation unique.",
    },
    tags: ["PyTorch", "PaDiM", "ResNet18", "SVM", "OpenCV", "Streamlit"],
    cover: {
      src: "/images/projects/defect-detection/streamlit-camera.webp",
      width: 1840,
      height: 699,
      fill: true,
      alt: {
        en: "Streamlit demonstrator: vision quality control of the LUMINA plate, in real-time camera acquisition mode",
        fr: "Démonstrateur Streamlit : contrôle qualité par vision de la plaque LUMINA, en mode acquisition caméra temps réel",
      },
    },
    overview: {
      en: [
        "SOMEF manufactures electrical wiring devices. After plastic injection, plates, switches and sockets are inspected visually. It works, but the verdict varies from one inspector to another and from one hour to the next: the eye gets tired, and subtle defects such as a slight yellowing of the white are easy to miss.",
        "The study part was the LUMINA plate: a white, three-module finishing plate, inspected on its visible front face. Four defect families were retained: black spots, scratches and burrs (shape defects) and yellowing (a colour defect). The aim was not to replace the inspector but to make the verdict consistent: same lighting, same criteria, same decision.",
        "Line integration, connection to PLCs or the MES, 3D dimensional control and formal certification were out of scope.",
      ],
      fr: [
        "SOMEF fabrique de l'appareillage électrique. Après l'injection plastique, plaques, interrupteurs et prises sont contrôlés visuellement. Cela fonctionne, mais le verdict varie d'un contrôleur à l'autre et d'une heure à l'autre : l'œil fatigue, et des défauts subtils comme un léger jaunissement du blanc passent facilement inaperçus.",
        "La pièce d'étude était la plaque LUMINA : une plaque de finition blanche à trois modules, contrôlée sur sa face avant visible. Quatre familles de défauts ont été retenues : points noirs, rayures et bavures (défauts de forme) et jaunissement (défaut de couleur). Le but n'était pas de remplacer le contrôleur mais de fixer le verdict : même éclairage, mêmes critères, même décision.",
        "L'intégration sur ligne, la connexion aux automates ou au MES, le contrôle dimensionnel 3D et toute certification formelle étaient hors périmètre.",
      ],
    },
    objectives: {
      en: [
        "A reproducible acquisition bench with a documented capture protocol.",
        "An annotated dataset of conforming and defective plates under two lighting modes.",
        "Several detection methods compared on the same test set, with metrics that reflect the cost of a missed defect.",
        "A demonstrator that runs on a standard workstation.",
      ],
      fr: [
        "Un banc d'acquisition reproductible avec un protocole de capture documenté.",
        "Un jeu de données annoté de plaques conformes et défectueuses sous deux modes d'éclairage.",
        "Plusieurs méthodes de détection comparées sur le même jeu de test, avec des métriques qui reflètent le coût d'un défaut manqué.",
        "Un démonstrateur exécutable sur un poste de travail standard.",
      ],
    },
    architecture: {
      intro: {
        en: "The final system is hybrid: each defect family goes through the method that handles it best, and the plate is rejected as soon as either path flags it.",
        fr: "Le système final est hybride : chaque famille de défauts passe par la méthode la plus adaptée, et la plaque est rejetée dès que l'un des deux chemins signale un défaut.",
      },
      steps: [
        {
          tag: { en: "Bench", fr: "Banc" },
          label: { en: "Fixed acquisition", fr: "Acquisition fixe" },
          detail: {
            en: "Webcam, ring light for diffuse light, side LED for raking light, diffusion tent against daylight.",
            fr: "Webcam, lampe annulaire pour l'éclairage diffus, LED latérale pour l'éclairage rasant, tente diffusante contre la lumière du jour.",
          },
        },
        {
          tag: { en: "Capture", fr: "Capture" },
          label: { en: "Two shots per plate", fr: "Deux prises par plaque" },
          detail: {
            en: "The corners are selected; a shot is taken under each lighting.",
            fr: "Les coins sont sélectionnés ; la prise est faite sous chaque éclairage.",
          },
        },
        {
          tag: { en: "Comparison", fr: "Comparaison" },
          label: { en: "Method comparison", fr: "Comparaison des méthodes" },
          detail: {
            en: "Four approaches evaluated on the same test set: a rule-based baseline (OpenCV), an RBF-kernel SVM, a fine-tuned ResNet18 CNN and PaDiM.",
            fr: "Quatre approches évaluées sur le même jeu de test : baseline par règles (OpenCV), SVM à noyau RBF, CNN ResNet18 affiné et PaDiM.",
          },
        },
        {
          tag: { en: "Shape", fr: "Forme" },
          label: { en: "PaDiM anomaly score", fr: "Score d'anomalie PaDiM" },
          detail: {
            en: "ResNet18 patch features, compared with a Gaussian model of conforming plates. Black spots, scratches, burrs.",
            fr: "Descripteurs de patchs ResNet18, comparés à un modèle gaussien des plaques conformes. Points noirs, rayures, bavures.",
          },
        },
        {
          tag: { en: "Colour", fr: "Couleur" },
          label: { en: "Δb* threshold", fr: "Seuil sur Δb*" },
          detail: {
            en: "Mean b* in CIELAB against a white reference from conforming plates. Yellowing.",
            fr: "b* moyen en CIELAB comparé à une référence blanche issue des plaques conformes. Jaunissement.",
          },
        },
        {
          tag: { en: "Verdict", fr: "Verdict" },
          label: { en: "OK / NOK", fr: "OK / NOK" },
          detail: {
            en: "NOK if either path flags a defect, with type and location. OK only if both validate.",
            fr: "NOK si l'un des chemins signale un défaut, avec type et localisation. OK seulement si les deux valident.",
          },
        },
      ],
    },
    stack: [
      { label: { en: "Vision & ML", fr: "Vision & ML" }, items: ["PyTorch", "anomalib (PaDiM)", "ResNet18", "scikit-learn (SVM)", "OpenCV"] },
      { label: { en: "Analysis", fr: "Analyse" }, items: ["NumPy", "pandas", "Grad-CAM", "Jupyter"] },
      { label: { en: "Demonstrator", fr: "Démonstrateur" }, items: ["Streamlit", "OpenCV camera capture"] },
      { label: { en: "Hardware", fr: "Matériel" }, items: ["HP 625 webcam", "Ring light", "Side LED panel", "Diffusion tent"] },
    ],
    implementation: [
      {
        title: { en: "The bench before the model", fr: "Le banc avant le modèle" },
        body: {
          en: "If images vary from one day to the next, a model learns that variation as if it were a defect, so the bench came first. Two tests validated it: a stillness test (at least 99.5% of pixels within two grey levels between consecutive shots, to catch auto-exposure or flicker) and a ten-reposition test measuring how far the plate shifts when it is put back in the jig.",
          fr: "Si les images varient d'un jour à l'autre, le modèle apprend cette variation comme un défaut : le banc est donc venu en premier. Deux tests l'ont validé : un test d'immobilité (au moins 99,5 % des pixels à deux niveaux de gris près entre deux prises, pour détecter une exposition automatique ou un scintillement) et un test des dix reposes qui mesure le décalage de la plaque remise dans son gabarit.",
        },
      },
      {
        title: { en: "Rule-based baseline", fr: "Baseline par règles" },
        body: {
          en: "Fixed thresholds on OpenCV features, with exclusion masks for the frame geometry. Recall was acceptable (0.957) but precision fell to 0.347: reflections and edges triggered alerts that fixed rules cannot tell apart from defects. Yellowing was the exception, handled almost perfectly by one threshold on b*.",
          fr: "Des seuils fixes sur des descripteurs OpenCV, avec des masques d'exclusion pour la géométrie du cadre. Le rappel était correct (0,957) mais la précision tombait à 0,347 : reflets et arêtes déclenchaient des alertes que des règles fixes ne distinguent pas d'un défaut. Le jaunissement faisait exception, traité presque parfaitement par un seul seuil sur b*.",
        },
      },
      {
        title: { en: "Supervised models", fr: "Modèles supervisés" },
        body: {
          en: "An RBF-kernel SVM on selected descriptors, and a ResNet18 fine-tuned in two phases (classifier head, then the last block with low, differentiated learning rates). The CNN's threshold was calibrated on validation at 0.402 rather than left at 0.5. Grad-CAM, loss curves and global colour statistics were used to rule out a shortcut.",
          fr: "Un SVM à noyau RBF sur des descripteurs sélectionnés, et un ResNet18 affiné en deux phases (tête de classification, puis dernier bloc avec des taux faibles et différenciés). Le seuil du CNN a été calibré sur la validation à 0,402 au lieu de 0,5. Grad-CAM, courbes de perte et statistiques globales de couleur ont servi à écarter un raccourci d'apprentissage.",
        },
      },
      {
        title: { en: "Anomaly detection with PaDiM", fr: "Détection d'anomalies avec PaDiM" },
        body: {
          en: "PaDiM learns only from conforming plates, which matters because defective parts are scarce. I versioned each run (backbone, resolution, lighting mode). The most decisive lever was the threshold, not the model: calibrating it with a margin raised recall from 0.636 to 0.909 during tuning. ResNet18 generalised better than wide_resnet50_2 on this small dataset, and diffuse light beat raking light, which produced too many false alerts.",
          fr: "PaDiM n'apprend que sur des plaques conformes, ce qui compte puisque les pièces défectueuses sont rares. J'ai versionné chaque essai (backbone, résolution, mode d'éclairage). Le levier le plus décisif était le seuil, pas le modèle : un calibrage par marge a fait passer le rappel de 0,636 à 0,909 pendant le réglage. ResNet18 généralisait mieux que wide_resnet50_2 sur ce petit jeu, et l'éclairage diffus l'emportait sur le rasant, trop riche en fausses alertes.",
        },
      },
      {
        title: { en: "Streamlit demonstrator", fr: "Démonstrateur Streamlit" },
        body: {
          en: "Two modes, image upload and live camera capture with the same cropping method as the bench. The app loads the saved PaDiM checkpoint and thresholds, never retrains, and returns OK/NOK with the defect type and its location on the plate.",
          fr: "Deux modes : import d'image et capture caméra en direct avec la même méthode de cadrage que le banc. L'application charge le checkpoint PaDiM et les seuils enregistrés, ne réentraîne jamais, et renvoie OK/NOK avec le type de défaut et sa localisation sur la plaque.",
        },
      },
    ],
    contribution: {
      intro: {
        en: "This was an individual internship project, supervised by SOMEF's R&D department.",
        fr: "C'était un projet de stage individuel, encadré par le département R&D de SOMEF.",
      },
      items: {
        en: [
          "Designed and assembled the inspection bench; wrote the acquisition protocol and its validation tests.",
          "Collected and annotated the dataset; wrote the capture, calibration and cropping scripts.",
          "Implemented and evaluated the four approaches, including threshold calibration and versioned PaDiM experiments.",
          "Built the Streamlit demonstrator and wrote the internship report.",
        ],
        fr: [
          "Conception et montage du banc d'inspection ; rédaction du protocole d'acquisition et de ses tests de validation.",
          "Collecte et annotation du jeu de données ; scripts de capture, de calibrage et de recadrage.",
          "Implémentation et évaluation des quatre approches, dont le calibrage des seuils et les essais PaDiM versionnés.",
          "Développement du démonstrateur Streamlit et rédaction du rapport de stage.",
        ],
      },
    },
    results: {
      metrics: [
        { value: "97.4%", label: { en: "recall on defective plates (PaDiM)", fr: "rappel sur les plaques défectueuses (PaDiM)" } },
        { value: "94.9%", label: { en: "precision on defective plates", fr: "précision sur les plaques défectueuses" } },
        { value: "96.1%", label: { en: "F1-score, defective class", fr: "F1-score, classe défectueuse" } },
        { value: "~190 ms", label: { en: "per image, PaDiM inference", fr: "par image, inférence PaDiM" } },
      ],
      table: {
        caption: {
          en: "OK/NOK detection, defective class (NOK) as positive",
          fr: "Détection OK/NOK, classe défectueuse (NOK) comme positive",
        },
        head: {
          en: ["Approach", "Precision", "Recall", "F1", "Needs defect samples"],
          fr: ["Approche", "Précision", "Rappel", "F1", "Besoin de pièces défectueuses"],
        },
        rows: [
          [{ en: "Rules (OpenCV)", fr: "Règles (OpenCV)" }, "0.347", "0.957", "0.509", "—"],
          ["SVM (RBF)", "1.000", "0.958", "0.979", "✓"],
          [{ en: "ResNet18 (transfer)", fr: "ResNet18 (transfert)" }, "0.958", "0.958", "0.958", "✓"],
          [{ en: "PaDiM (ResNet18, diffuse)", fr: "PaDiM (ResNet18, diffus)" }, "0.949", "0.974", "0.961", "—"],
        ],
        highlight: 3,
      },
      notes: {
        en: [
          "The SVM has the best F1, but both supervised models owe their scores to a campaign to collect defective parts. PaDiM performs comparably while training on conforming plates only, and flags by construction a defect type it has never seen. That is why it was retained for shape defects, with the b* threshold for yellowing.",
          "Supervised models were tested on 102 images (51 plates, two lighting modes). PaDiM was evaluated on a reinforced split with 52 conforming and 38 defective images.",
        ],
        fr: [
          "Le SVM a le meilleur F1, mais les deux modèles supervisés doivent leurs scores à une campagne de collecte de pièces défectueuses. PaDiM obtient des performances comparables en n'apprenant que sur des plaques conformes, et signale par construction un type de défaut jamais vu. C'est pourquoi il a été retenu pour les défauts de forme, avec le seuil sur b* pour le jaunissement.",
          "Les modèles supervisés ont été testés sur 102 images (51 plaques, deux modes d'éclairage). PaDiM a été évalué sur un découpage renforcé de 52 images conformes et 38 défectueuses.",
        ],
      },
    },
    gallery: [
      {
        src: "/images/projects/defect-detection/padim-anomaly-map.webp",
        width: 768,
        height: 256,
        alt: { en: "Plate image, PaDiM anomaly map and predicted defect mask", fr: "Image de plaque, carte d'anomalie PaDiM et masque de défaut prédit" },
        caption: {
          en: "Output of the demonstrator: input, anomaly map, predicted mask.",
          fr: "Sortie du démonstrateur : image, carte d'anomalie, masque prédit.",
        },
      },
      {
        src: "/images/projects/defect-detection/bench-top.webp",
        width: 686,
        height: 914,
        alt: { en: "Top view of the bench through the ring light", fr: "Vue de dessus du banc à travers la lampe annulaire" },
        caption: { en: "Top view of the bench through the ring light.", fr: "Vue de dessus du banc à travers la lampe annulaire." },
      },
      {
        src: "/images/projects/defect-detection/confusion-cnn.webp",
        width: 713,
        height: 653,
        paper: true,
        alt: { en: "Confusion matrix of the ResNet18 classifier", fr: "Matrice de confusion du classifieur ResNet18" },
        caption: {
          en: "ResNet18 on the 102-image test set, threshold 0.402: two errors.",
          fr: "ResNet18 sur le jeu de test de 102 images, seuil 0,402 : deux erreurs.",
        },
      },
      {
        src: "/images/projects/defect-detection/gradcam.webp",
        width: 1600,
        height: 646,
        paper: true,
        alt: { en: "Grad-CAM heatmaps over defective plates", fr: "Cartes Grad-CAM sur des plaques défectueuses" },
        caption: {
          en: "Grad-CAM on defective plates correctly detected by the ResNet18 classifier.",
          fr: "Grad-CAM sur des plaques défectueuses correctement détectées par le classifieur ResNet18.",
        },
      },
    ],
    lessons: {
      en: [
        "Most of what made the models good happened before training: fixing the camera, the light and the framing.",
        "The threshold is a design decision. Calibrating it for recall on defects changed results more than switching backbones.",
        "The best metric is not always the right choice: PaDiM was retained over a slightly better SVM because it does not depend on collecting defective parts.",
        "Some problems do not need deep learning. Yellowing is one number per plate.",
      ],
      fr: [
        "L'essentiel de ce qui a rendu les modèles bons s'est joué avant l'entraînement : fixer la caméra, la lumière et le cadrage.",
        "Le seuil est une décision de conception. Le calibrer pour le rappel sur les défauts a plus changé les résultats que le choix du backbone.",
        "La meilleure métrique n'est pas toujours le bon choix : PaDiM a été préféré à un SVM légèrement meilleur parce qu'il ne dépend pas de la collecte de pièces défectueuses.",
        "Certains problèmes n'ont pas besoin de deep learning. Le jaunissement tient en un nombre par plaque.",
      ],
    },
    links: [
      { label: { en: "Code: private (SOMEF internship)", fr: "Code : privé (stage SOMEF)" } },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "smart-demand-response",
    title: {
      en: "Smart Demand Response Platform for Tunisian Households",
      fr: "Plateforme intelligente de Demand Response pour les foyers tunisiens",
    },
    shortTitle: { en: "Demand response", fr: "Demand Response" },
    category: { en: "Time-series forecasting · Energy", fr: "Prévision de séries temporelles · Énergie" },
    period: { en: "Sep – Oct 2026", fr: "sept. – oct. 2026" },
    context: { en: "Academic project · SUP'COM", fr: "Projet académique · SUP'COM" },
    team: { en: "Team of four", fr: "Équipe de quatre" },
    role: { en: "DR orchestration and pricing", fr: "Orchestration DR et tarification" },
    status: { en: "Research prototype · synthetic data", fr: "Prototype de recherche · données synthétiques" },
    summary: {
      en: "A smart digital platform that encourages Tunisian households to adapt their electricity use to signals from the STEG grid. A day-ahead forecast detects the peaks when consumption exceeds production, then a NILM module identifies the appliance to switch off. Customer profiling by clustering then targets priority households, and an orchestrator with a chatbot sends them personalised notifications.",
      fr: "Une plateforme numérique intelligente pour inciter les ménages tunisiens à adapter leur consommation électrique aux signaux du réseau STEG. Une prévision J+1 détecte les pics où la consommation dépasse la production, puis un module NILM identifie l'appareil à couper. Un profilage client par clustering cible ensuite les ménages prioritaires, et un orchestrateur doté d'un chatbot leur envoie des notifications personnalisées.",
    },
    lede: {
      en: "Demand response asks households to cut or shift consumption when supply runs short. We built a research platform around a synthetic 50-household neighbourhood in Tunis, with an operator view and a household view. My part was the orchestrator that turns a forecast peak into an event, targets households, alerts them and bills the result.",
      fr: "La Demand Response demande aux foyers de réduire ou décaler leur consommation quand l'offre manque. Nous avons construit une plateforme de recherche autour d'un quartier synthétique de 50 foyers à Tunis, avec une vue opérateur et une vue foyer. Ma part : l'orchestrateur qui transforme un pic prévu en événement, cible les foyers, les alerte et facture le résultat.",
    },
    tags: ["Python", "Energy-TTM", "Ridge", "TCN (NILM)", "K-means", "Streamlit"],
    cover: {
      src: "/images/projects/demand-response/cover-assistant.webp",
      width: 800,
      height: 500,
      alt: {
        en: "Consumer dashboard of the platform: peak-pricing reminders, a summary of yesterday's peak and an alert with the recommended action",
        fr: "Tableau de bord consommateur de la plateforme : rappels de tarification de pointe, bilan de la pointe de la veille et alerte avec l'action recommandée",
      },
    },
    overview: {
      en: [
        "During summer peaks, demand can exceed the supply allocated to a neighbourhood. Demand response (DR) shifts part of that load: the operator announces a peak window, households reduce or delay specific appliances, and pricing makes it worth their while.",
        "The platform runs on a synthetic one-minute dataset for 50 households, ten of them with appliance-level sub-metering. It is a case study, not an operational STEG system, and the application labels every date as either held-out evaluation or retrospective demonstration.",
      ],
      fr: [
        "Lors des pics d'été, la demande peut dépasser l'offre allouée à un quartier. La Demand Response (DR) déplace une partie de cette charge : l'opérateur annonce une fenêtre de pic, les foyers réduisent ou décalent certains appareils, et la tarification les y incite.",
        "La plateforme repose sur un jeu de données synthétique à la minute pour 50 foyers, dont dix avec un sous-comptage par appareil. C'est une étude de cas, pas un système opérationnel de la STEG, et l'application indique pour chaque date s'il s'agit d'une évaluation hors échantillon ou d'une démonstration rétrospective.",
      ],
    },
    objectives: {
      en: [
        "Forecast next-day household load and community demand and supply to anticipate risk windows.",
        "Break household consumption down by appliance (NILM) so recommendations target a specific device.",
        "Segment households to decide whom to ask first and what to offer.",
        "Run the full DR event lifecycle with pricing that stays fair for low-consumption households.",
      ],
      fr: [
        "Prévoir la charge des foyers et la demande et l'offre du quartier pour le lendemain, afin d'anticiper les fenêtres à risque.",
        "Décomposer la consommation par appareil (NILM) pour que les recommandations visent un équipement précis.",
        "Segmenter les foyers pour décider qui solliciter en premier et quoi proposer.",
        "Dérouler tout le cycle de vie d'un événement DR avec une tarification juste pour les petits consommateurs.",
      ],
    },
    architecture: {
      intro: {
        en: "The orchestrator runs every 30 minutes and moves each event through a fixed lifecycle. Forecasting, profiling and NILM are plugged in through adapters.",
        fr: "L'orchestrateur s'exécute toutes les 30 minutes et fait passer chaque événement par un cycle de vie fixe. Prévision, profilage et NILM sont branchés via des adaptateurs.",
      },
      steps: [
        {
          tag: { en: "D-1 14:00", fr: "J-1 14:00" },
          label: { en: "Forecast", fr: "Prévision" },
          detail: {
            en: "Next-day community demand, allocated STEG supply and PV, 48 half-hour slots each.",
            fr: "Demande du quartier, offre STEG allouée et PV du lendemain, 48 créneaux d'une demi-heure chacun.",
          },
        },
        {
          tag: { en: "D-1 14:30", fr: "J-1 14:30" },
          label: { en: "Decide", fr: "Décider" },
          detail: {
            en: "Negative margins are grouped into risk windows; a versioned policy proposes events.",
            fr: "Les marges négatives sont regroupées en fenêtres à risque ; une politique versionnée propose des événements.",
          },
        },
        {
          tag: { en: "Operator", fr: "Opérateur" },
          label: { en: "Confirm & target", fr: "Confirmer & cibler" },
          detail: {
            en: "On confirmation, profiling ranks households and NILM picks the device to recommend for each one.",
            fr: "À la confirmation, le profilage classe les foyers et le NILM choisit l'appareil à recommander pour chacun.",
          },
        },
        {
          tag: { en: "D-1 18:00", fr: "J-1 18:00" },
          label: { en: "Alert", fr: "Alerter" },
          detail: {
            en: "Messages in each household's language, quiet hours respected, a second alert at 21:00 for 'Later'.",
            fr: "Messages dans la langue de chaque foyer, heures calmes respectées, second rappel à 21:00 pour « Plus tard ».",
          },
        },
        {
          tag: { en: "Event", fr: "Événement" },
          label: { en: "Run", fr: "Déroulement" },
          detail: {
            en: "Status goes active; one reminder if the first slot runs above the household's usual pace.",
            fr: "Statut actif ; un rappel si le premier créneau dépasse le rythme habituel du foyer.",
          },
        },
        {
          tag: { en: "D+1 09:00", fr: "J+1 09:00" },
          label: { en: "Bill", fr: "Facturer" },
          detail: {
            en: "Surcharge from the meter and a summary message; monthly bills apply the real band and a 10% cap.",
            fr: "Surcoût calculé au compteur et message de synthèse ; la facture mensuelle applique la vraie tranche et un plafond de 10 %.",
          },
        },
      ],
      note: {
        en: "The system never acts on appliances. Households decide and act themselves.",
        fr: "Le système n'agit jamais sur les appareils. Les foyers décident et agissent eux-mêmes.",
      },
    },
    stack: [
      { label: { en: "Forecasting", fr: "Prévision" }, items: ["Energy-TTM (TinyTimeMixer, Granite-TSFM)", "scikit-learn Ridge", "PyTorch"] },
      { label: { en: "NILM & profiling", fr: "NILM & profilage" }, items: ["Causal multi-task TCN", "K-means segmentation"] },
      { label: { en: "Orchestration", fr: "Orchestration" }, items: ["SQLAlchemy", "SQLite", "YAML message templates"] },
      { label: { en: "App & data", fr: "Application & données" }, items: ["Streamlit", "Plotly", "pandas", "PyArrow / Parquet", "pytest"] },
    ],
    implementation: [
      {
        title: { en: "Household forecasting (team)", fr: "Prévision des foyers (équipe)" },
        body: {
          en: "The pretrained Energy-TTM checkpoint expects 168 hourly inputs and predicts 24. The app works at half-hour resolution, so the patch length went from 24 to 48 while keeping seven daily patches; the reinitialised patcher and head were fine-tuned (30,610 parameters), with training, validation and test windows split by target day to prevent leakage.",
          fr: "Le checkpoint pré-entraîné Energy-TTM attend 168 valeurs horaires et en prédit 24. L'application travaille à la demi-heure : la longueur de patch est passée de 24 à 48 en gardant sept patchs journaliers, et le patcher et la tête réinitialisés ont été affinés (30 610 paramètres), avec des fenêtres d'entraînement, de validation et de test séparées par jour cible pour éviter toute fuite.",
        },
      },
      {
        title: { en: "Community replay (team)", fr: "Rejeu du quartier (équipe)" },
        body: {
          en: "At D-1 14:00, separate Ridge models forecast the 48 next-day slots for demand, allocated supply and PV from the prior 24 hours, the D-2 and D-7 profiles and calendar features. Scalers are fitted on training data only, and historical operator events are joined only after predictions exist.",
          fr: "À J-1 14:00, des modèles Ridge distincts prévoient les 48 créneaux du lendemain pour la demande, l'offre allouée et le PV, à partir des 24 heures précédentes, des profils J-2 et J-7 et du calendrier. Les normalisations sont ajustées sur l'entraînement uniquement, et les événements historiques ne sont joints qu'une fois les prévisions produites.",
        },
      },
      {
        title: { en: "Event lifecycle (my part)", fr: "Cycle de vie des événements (ma part)" },
        body: {
          en: "A tick-driven orchestrator persisted with SQLAlchemy: events, per-household targets, notifications, event bills and monthly bills. Adapters connect the team's forecast, customer profiling and NILM device recommender, so each module can change without touching the lifecycle. Operators can confirm, veto or cancel; a cancelled event sends a cancellation message and no surcharge.",
          fr: "Un orchestrateur cadencé, persistant via SQLAlchemy : événements, cibles par foyer, notifications, factures d'événement et factures mensuelles. Des adaptateurs relient la prévision, le profilage client et le recommandeur d'appareils NILM de l'équipe, pour que chaque module évolue sans toucher au cycle de vie. L'opérateur peut confirmer, refuser ou annuler ; une annulation envoie un message dédié, sans surcoût.",
        },
      },
      {
        title: { en: "Pricing engine (my part)", fr: "Moteur de tarification (ma part)" },
        body: {
          en: "Critical-peak pricing on top of the STEG low-voltage residential tariff. The peak price is P × (1 + s), with s at 30%, 50% or 100% depending on the DR level, and the event surcharge is computed from the energy actually used in the window. Households in the economic band are exempt, and DR surcharges are capped at 10% of the month's energy cost.",
          fr: "Une tarification de pointe critique par-dessus le tarif résidentiel basse tension de la STEG. Le prix de pointe vaut P × (1 + s), avec s à 30 %, 50 % ou 100 % selon le niveau DR, et le surcoût est calculé sur l'énergie réellement consommée dans la fenêtre. Les foyers en tranche économique sont exonérés et les surcoûts DR sont plafonnés à 10 % du coût énergétique du mois.",
        },
      },
      {
        title: { en: "Assistant and pages (my part)", fr: "Assistant et pages (ma part)" },
        body: {
          en: "Notification and chat templates in YAML, a DR assistant on the household side that answers from the event context, and an orchestrator page in Streamlit with a replay clock to walk through an event day step by step.",
          fr: "Des modèles de notifications et de chat en YAML, un assistant DR côté foyer qui répond à partir du contexte de l'événement, et une page orchestrateur dans Streamlit avec une horloge de rejeu pour parcourir une journée d'événement pas à pas.",
        },
      },
    ],
    contribution: {
      intro: {
        en: "Team project with three classmates. Forecasting, NILM and customer profiling were built by teammates; I designed and implemented the DR orchestration layer and integrated their modules into it.",
        fr: "Projet d'équipe avec trois camarades. La prévision, le NILM et le profilage client ont été réalisés par mes coéquipiers ; j'ai conçu et implémenté la couche d'orchestration DR et y ai intégré leurs modules.",
      },
      items: {
        en: [
          "Event lifecycle: decision, operator confirmation and veto, alerts, reminders, closing, billing, monthly close.",
          "Pricing engine based on the STEG tariff bands, with the exemption and cap rules.",
          "Adapters connecting customer profiling and NILM to event targeting.",
          "DR chatbot and orchestrator pages in the Streamlit app, with their tests.",
        ],
        fr: [
          "Cycle de vie des événements : décision, confirmation et veto opérateur, alertes, rappels, clôture, facturation, clôture mensuelle.",
          "Moteur de tarification fondé sur les tranches STEG, avec les règles d'exonération et de plafond.",
          "Adaptateurs reliant le profilage client et le NILM au ciblage des événements.",
          "Pages chatbot DR et orchestrateur dans l'application Streamlit, avec leurs tests.",
        ],
      },
    },
    results: {
      metrics: [
        { value: "62", label: { en: "held-out days replayed (Jul–Aug)", fr: "jours hors échantillon rejoués (juil.–août)" } },
        { value: "4.4%", label: { en: "WAPE on STEG supply (Ridge), vs 6.5% persistence", fr: "WAPE sur l'offre STEG (Ridge), contre 6,5 % en persistance" } },
        { value: "50", label: { en: "households, 1-minute synthetic data", fr: "foyers, données synthétiques à la minute" } },
      ],
      table: {
        caption: {
          en: "Community forecasts, mean of daily metrics over 62 held-out replays",
          fr: "Prévisions du quartier, moyenne des métriques journalières sur 62 rejeux hors échantillon",
        },
        head: {
          en: ["Target", "Method", "MAE (kW)", "WAPE"],
          fr: ["Cible", "Méthode", "MAE (kW)", "WAPE"],
        },
        rows: [
          [{ en: "Demand", fr: "Demande" }, "Ridge", "12.63", "38.50%"],
          [{ en: "Demand", fr: "Demande" }, { en: "Persistence", fr: "Persistance" }, "10.98", "36.97%"],
          [{ en: "STEG supply", fr: "Offre STEG" }, "Ridge", "4.26", "4.40%"],
          [{ en: "STEG supply", fr: "Offre STEG" }, { en: "Persistence", fr: "Persistance" }, "6.30", "6.54%"],
          [{ en: "Total supply", fr: "Offre totale" }, "Ridge", "4.92", "4.58%"],
          [{ en: "Total supply", fr: "Offre totale" }, { en: "Persistence", fr: "Persistance" }, "6.95", "6.51%"],
        ],
      },
      notes: {
        en: [
          "The trained models improved supply forecasts but did not beat seasonal persistence on demand or PV, and event detection stayed weak: precision 0.43 and recall 0.23 on 13 post-DR peak windows. The project report keeps those numbers.",
          "At zone level, the zero-shot Energy-TTM notebook scored an MAE of 33.05 MW against 31.06 MW for 24-hour persistence over 358 days.",
          "All results are on synthetic data.",
        ],
        fr: [
          "Les modèles entraînés ont amélioré la prévision de l'offre mais n'ont pas battu la persistance saisonnière sur la demande ni le PV, et la détection d'événements est restée faible : précision de 0,43 et rappel de 0,23 sur 13 fenêtres de pic post-DR. Le rapport du projet conserve ces chiffres.",
          "Au niveau de la zone, le notebook Energy-TTM en zero-shot obtient une MAE de 33,05 MW contre 31,06 MW pour la persistance à 24 heures sur 358 jours.",
          "Tous les résultats portent sur des données synthétiques.",
        ],
      },
    },
    gallery: [
      {
        src: "/images/projects/demand-response/d1-forecast.webp",
        width: 1600,
        height: 728,
        paper: true,
        alt: {
          en: "Chart of next-day zone demand: forecast against actual load over 24 hours",
          fr: "Graphique de la demande J+1 de la zone : prévision et charge réelle sur 24 heures",
        },
        caption: { en: "Next-day zone demand: forecast against actual load.", fr: "Demande J+1 de la zone : prévision et charge réelle." },
      },
      {
        src: "/images/projects/demand-response/community-forecast.webp",
        width: 1600,
        height: 655,
        paper: true,
        alt: { en: "Community demand and supply forecast for one day", fr: "Prévision de la demande et de l'offre du quartier sur une journée" },
        caption: {
          en: "Forecast audit: a well-predicted day for the community models.",
          fr: "Audit des prévisions : une journée bien prédite par les modèles du quartier.",
        },
      },
      {
        src: "/images/projects/demand-response/demand-vs-production.webp",
        width: 1600,
        height: 657,
        paper: true,
        alt: { en: "Demand against available production over time", fr: "Demande face à la production disponible dans le temps" },
        caption: { en: "Demand against available production in the dataset.", fr: "Demande face à la production disponible dans le jeu de données." },
      },
    ],
    lessons: {
      en: [
        "Evaluation honesty has to reach the interface: the app tells the user whether a date was held out or seen during development.",
        "Adapters made a four-person integration manageable. Each module could change without breaking the lifecycle.",
        "Pricing rules need their edge cases written down first (economic band, monthly cap, cancellation) before they become code.",
        "A model that does not beat persistence is still a result, as long as it is reported as one.",
      ],
      fr: [
        "L'honnêteté de l'évaluation doit aller jusqu'à l'interface : l'application dit si une date était hors échantillon ou vue pendant le développement.",
        "Les adaptateurs ont rendu gérable une intégration à quatre. Chaque module pouvait évoluer sans casser le cycle de vie.",
        "Les règles de tarification demandent d'écrire les cas limites d'abord (tranche économique, plafond mensuel, annulation) avant de les coder.",
        "Un modèle qui ne bat pas la persistance reste un résultat, à condition de le présenter comme tel.",
      ],
    },
    links: [
      { label: { en: "Repository: private team repository", fr: "Dépôt : dépôt d'équipe privé" } },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "technical-support-ai-agent",
    title: { en: "Automated Technical Support AI Agent", fr: "Agent IA de support technique automatisé" },
    shortTitle: { en: "Support agent", fr: "Agent de support" },
    category: { en: "AI agents · AWS", fr: "Agents IA · AWS" },
    period: { en: "Nov 2026 – present", fr: "nov. 2026 – aujourd'hui" },
    context: { en: "Academic project · Cloud, ML and agentic AI on AWS", fr: "Projet académique · Cloud, ML et agentique sur AWS" },
    team: { en: "Team of two", fr: "Binôme" },
    role: { en: "Co-designer · data pipeline", fr: "Co-conceptrice · pipeline de données" },
    status: { en: "In progress · final delivery in January", fr: "En cours · livraison finale en janvier" },
    summary: {
      en: "An autonomous AI agent deployed on AWS that handles technical support tickets end to end. An ML model trained on SageMaker predicts each ticket's type, queue and priority, and RAG (Bedrock Knowledge Bases, Titan embeddings) retrieves similar cases and runbooks.",
      fr: "Un agent IA autonome déployé sur AWS qui prend en charge les tickets de support technique de bout en bout. Un modèle ML entraîné sur SageMaker prédit le type, la file et la priorité de chaque ticket, et le RAG (Bedrock Knowledge Bases, embeddings Titan) retrouve les cas similaires et les runbooks.",
    },
    lede: {
      en: "An autonomous AI agent, deployed on AWS, that handles technical support tickets from arrival to resolution. It classifies each ticket with an ML model, retrieves similar cases already handled (RAG), diagnoses the problem, applies the fix itself and checks that it worked. If the problem is too complex or the action too risky, it escalates to a technician with a summary of what it tried, and a dashboard tracks its performance.",
      fr: "Un agent IA autonome, déployé sur AWS, qui prend en charge les tickets de support technique de leur arrivée jusqu'à leur résolution. Il classe chaque ticket avec un modèle ML, recherche des cas similaires déjà traités (RAG), diagnostique le problème, applique lui-même la solution et vérifie qu'elle a fonctionné. Si le problème est trop complexe ou l'action trop risquée, il escalade vers un technicien avec un résumé de ses tentatives, et un dashboard suit ses performances.",
    },
    tags: ["Bedrock AgentCore", "RAG", "Glue", "Athena", "Step Functions", "SageMaker"],
    cover: {
      src: "/images/projects/support-agent/step-functions.webp",
      width: 622,
      height: 1050,
      paper: true,
      alt: {
        en: "Step Functions graph of the tickets pipeline: crawlers, Glue job and SNS notifications",
        fr: "Graphe Step Functions du pipeline de tickets : crawlers, job Glue et notifications SNS",
      },
    },
    overviewTitle: { en: "Context and problem", fr: "Contexte et problématique" },
    overview: {
      en: [
        "A support desk receives hundreds of requests a day, many of them repetitive: connection failures, locked accounts, slow applications, billing questions. Triage is manual, urgent tickets wait behind simple ones, knowledge sits in old threads, and a spike of similar tickets is noticed late.",
        "The project automates the handling of common tickets end to end while keeping a person in the loop for complex or risky cases. It is designed as an agent rather than an assistant: triggered by an event, it loops through perceive, plan, act and verify, acts through tools, and stops at resolution or escalation.",
        "The project question: how can common tickets be handled end to end automatically, while keeping a person for complex or risky cases?",
      ],
      fr: [
        "Un support technique reçoit des centaines de demandes par jour, souvent répétitives : panne de connexion, compte bloqué, lenteur d'application, facturation. Le tri est manuel, les tickets urgents attendent derrière les simples, le savoir dort dans l'historique, et un pic de tickets similaires est repéré trop tard.",
        "Le projet automatise de bout en bout la prise en charge des tickets courants, en gardant l'humain pour les cas complexes ou risqués. Il est conçu comme un agent plutôt qu'un assistant : déclenché par un événement, il boucle percevoir, planifier, agir, vérifier, agit par des outils et s'arrête à la résolution ou à l'escalade.",
        "La question du projet : comment automatiser la prise en charge de bout en bout des tickets courants, tout en gardant l'humain pour les cas complexes ou risqués ?",
      ],
    },
    objectives: {
      en: [
        "Classify incoming tickets by type, queue and priority with a model trained on historical tickets.",
        "Retrieve similar resolved cases and runbooks to ground the diagnosis (RAG).",
        "Investigate through tools: search knowledge, query logs, check health, run a runbook, reset an account, reply, escalate.",
        "Escalate whenever an action is risky, using a four-level risk table and human approval.",
        "Trace every run and measure it: F1-macro, recall@k, correct escalations, cost per ticket.",
        "Follow the agent's performance on a dashboard: volume, resolution rate, escalations, cost per ticket.",
      ],
      fr: [
        "Classer les tickets entrants par type, file et priorité avec un modèle entraîné sur l'historique.",
        "Retrouver des cas résolus similaires et des runbooks pour ancrer le diagnostic (RAG).",
        "Enquêter par des outils : chercher dans la base de connaissances, interroger les logs, tester la santé des services, exécuter un runbook, réinitialiser un compte, répondre, escalader.",
        "Escalader dès qu'une action est risquée, avec une table de risque à quatre niveaux et une approbation humaine.",
        "Tracer et mesurer chaque exécution : F1-macro, recall@k, justesse des escalades, coût par ticket.",
        "Suivre les performances de l'agent sur un dashboard : volume, taux de résolution, escalades, coût par ticket.",
      ],
    },
    architecture: {
      intro: {
        en: "Four modules: data pipeline, ML model, AWS architecture, and an LLM assistant extended into an AI agent. Events wake the agent, which loops in AgentCore Runtime and acts only through the tools exposed by AgentCore Gateway.",
        fr: "Quatre modules : pipeline data, modèle ML, architecture AWS, et assistant LLM étendu en agent IA. Les événements réveillent l'agent, qui boucle dans AgentCore Runtime et agit uniquement via les outils exposés par AgentCore Gateway.",
      },
      steps: [
        {
          tag: { en: "Module 1", fr: "Module 1" },
          label: { en: "Data pipeline", fr: "Pipeline data" },
          detail: {
            en: "Load the dataset, clean and enrich the tickets, store them in raw / clean / curated zones, and visualise the KPIs and the agent's performance. S3, Glue, Athena, Step Functions, QuickSight.",
            fr: "Charger le dataset, nettoyer et enrichir les tickets, stocker en zones raw / clean / curated, visualiser les KPI et les performances de l'agent. S3, Glue, Athena, Step Functions, QuickSight.",
          },
        },
        {
          tag: { en: "Module 2", fr: "Module 2" },
          label: { en: "ML model", fr: "Modèle ML" },
          detail: {
            en: "Prepare the datasets, train classifiers for type, queue and priority, evaluate them and expose them as an agent tool. SageMaker Processing, Training, Model Registry, serverless endpoint.",
            fr: "Préparer les datasets, entraîner des modèles de classification (type, file, priorité), les évaluer et les exposer comme outil de l'agent. SageMaker Processing, Training, Model Registry, endpoint serverless.",
          },
        },
        {
          tag: { en: "Module 3", fr: "Module 3" },
          label: { en: "AWS architecture", fr: "Architecture AWS" },
          detail: {
            en: "Connect every component, deploy the agent and the interface, secure and monitor the solution. AgentCore, Lambda, API Gateway, EventBridge, DynamoDB, Cognito, CloudWatch, IAM.",
            fr: "Relier tous les composants, déployer l'agent et l'interface, sécuriser et superviser la solution. AgentCore, Lambda, API Gateway, EventBridge, DynamoDB, Cognito, CloudWatch, IAM.",
          },
        },
        {
          tag: { en: "Module 4", fr: "Module 4" },
          label: { en: "LLM assistant → AI agent", fr: "Assistant LLM → agent IA" },
          detail: {
            en: "A RAG base over the tickets, an LLM that reasons and calls tools, and an autonomous action loop with guardrails. Bedrock, Bedrock Knowledge Bases, OpenSearch Serverless, AgentCore Gateway, Memory, Guardrails.",
            fr: "Base RAG sur les tickets, LLM qui raisonne et appelle des outils, boucle d'action autonome avec garde-fous. Bedrock, Bedrock Knowledge Bases, OpenSearch Serverless, AgentCore Gateway, Memory, Guardrails.",
          },
        },
      ],
      note: {
        en: "Agent tools: search_knowledge · classify_ticket · query_logs · check_health · run_runbook · reset_account · update_ticket · reply_customer · escalate",
        fr: "Outils de l'agent : search_knowledge · classify_ticket · query_logs · check_health · run_runbook · reset_account · update_ticket · reply_customer · escalate",
      },
    },
    stack: [
      { label: { en: "Data pipeline", fr: "Pipeline data" }, items: ["Amazon S3", "AWS Glue", "Amazon Athena", "Step Functions", "Amazon SNS", "QuickSight"] },
      { label: { en: "ML model", fr: "Modèle ML" }, items: ["SageMaker Processing", "SageMaker Training", "Model Registry", "Serverless endpoint"] },
      { label: { en: "AWS architecture", fr: "Architecture AWS" }, items: ["Lambda", "API Gateway", "EventBridge", "DynamoDB", "Cognito", "CloudWatch", "IAM, KMS", "Terraform or CDK"] },
      { label: { en: "Agent & RAG", fr: "Agent et RAG" }, items: ["Amazon Bedrock", "Bedrock Knowledge Bases", "Titan Embeddings v2", "AgentCore Runtime, Gateway, Memory, Policy", "Bedrock Guardrails"] },
    ],
    implementation: [
      {
        title: { en: "Dataset", fr: "Jeu de données" },
        body: {
          en: "The Tobi-Bueck customer-support-tickets dataset from Hugging Face: 28,587 tickets in English and German, 16 columns including subject, body, the first agent answer, type, queue and priority. Exploration in a SageMaker notebook covered nulls, duplicates and distributions. Queues are imbalanced, from 8,362 Technical Support tickets down to 405 General Inquiry, which is why the classifier will be judged on F1-macro.",
          fr: "Le jeu Tobi-Bueck customer-support-tickets de Hugging Face : 28 587 tickets en anglais et en allemand, 16 colonnes dont l'objet, le corps, la première réponse, le type, la file et la priorité. L'exploration dans un notebook SageMaker a couvert valeurs manquantes, doublons et répartitions. Les files sont déséquilibrées, de 8 362 tickets Technical Support à 405 General Inquiry : le classifieur sera donc évalué en F1-macro.",
        },
      },
      {
        title: { en: "Lake layout", fr: "Organisation du lac" },
        body: {
          en: "One S3 bucket with seven prefixes, prepared for the whole project: raw/, clean/, curated/, models/, kb-docs/, agent-traces/ and athena-results/.",
          fr: "Un bucket S3 avec sept préfixes, prévus pour tout le projet : raw/, clean/, curated/, models/, kb-docs/, agent-traces/ et athena-results/.",
        },
      },
      {
        title: { en: "Cleaning and enrichment", fr: "Nettoyage et enrichissement" },
        body: {
          en: "A Glue job cleans and masks the data, writes Parquet, enriches it from 9 to 13 columns and produces the train, validation and test split. A crawler registers the curated tables in the tickets_db catalog, where Athena runs and stores the KPI queries.",
          fr: "Un job Glue nettoie et masque les données, écrit en Parquet, les enrichit de 9 à 13 colonnes et produit le découpage entraînement, validation et test. Un crawler enregistre les tables curated dans le catalogue tickets_db, où Athena exécute et conserve les requêtes KPI.",
        },
      },
      {
        title: { en: "Orchestration", fr: "Orchestration" },
        body: {
          en: "A Step Functions state machine starts the raw crawler and waits for it, runs the Glue job, then the curated crawler, and publishes success or failure to an SNS topic. One full run takes just under nine minutes.",
          fr: "Une machine d'état Step Functions lance le crawler raw et l'attend, exécute le job Glue, puis le crawler curated, et publie le succès ou l'échec sur un topic SNS. Une exécution complète prend un peu moins de neuf minutes.",
        },
      },
      {
        title: { en: "Guardrails (designed)", fr: "Garde-fous (conçus)" },
        body: {
          en: "Every tool action is rated on four risk levels. Medium and high-risk actions require human approval through Step Functions; AgentCore Policy, Bedrock Guardrails and caps on iterations and cost bound the agent. The expected budget is $22 to $44, with a ceiling around $64.",
          fr: "Chaque action d'outil est classée sur quatre niveaux de risque. Les actions à risque moyen ou élevé exigent une approbation humaine via Step Functions ; AgentCore Policy, Bedrock Guardrails et des plafonds d'itérations et de coût encadrent l'agent. Le budget attendu est de 22 à 44 $, avec un plafond autour de 64 $.",
        },
      },
    ],
    contribution: {
      intro: {
        en: "Two-person project, co-designed with a classmate from the specification onwards.",
        fr: "Projet en binôme, co-conçu avec une camarade dès le cahier des charges.",
      },
      items: {
        en: [
          "Co-wrote the specification: agent concept, tool set, risk table, evaluation plan and budget.",
          "Built the data pipeline together: S3 layout, Glue job and crawlers, Athena tables and queries, Step Functions and SNS.",
        ],
        fr: [
          "Co-rédaction du cahier des charges : concept d'agent, outils, table de risque, plan d'évaluation et budget.",
          "Réalisation commune du pipeline de données : organisation S3, job et crawlers Glue, tables et requêtes Athena, Step Functions et SNS.",
        ],
      },
    },
    results: {
      metrics: [
        { value: "28,587", label: { en: "tickets processed by the pipeline", fr: "tickets traités par le pipeline" } },
        { value: "8 min 54 s", label: { en: "for one full pipeline execution", fr: "pour une exécution complète du pipeline" } },
      ],
      notes: {
        en: [
          "No model or agent performance is reported yet. Targets for F1-macro, recall@k, autonomous resolution and escalation accuracy will be set after a baseline.",
        ],
        fr: [
          "Aucune performance de modèle ou d'agent n'est encore publiée. Les cibles en F1-macro, recall@k, résolution autonome et justesse des escalades seront fixées après une baseline.",
        ],
      },
    },
    gallery: [
      {
        src: "/images/projects/support-agent/state-machine-run.webp",
        width: 841,
        height: 562,
        alt: {
          en: "AWS Step Functions console showing a successful execution of the tickets pipeline",
          fr: "Console AWS Step Functions montrant une exécution réussie du pipeline de tickets",
        },
        caption: { en: "A successful run of the state machine.", fr: "Une exécution réussie de la machine d'état." },
      },
      {
        src: "/images/projects/support-agent/dataset-exploration.webp",
        width: 1600,
        height: 800,
        paper: true,
        alt: { en: "Bar charts of tickets by type, queue, priority and language", fr: "Histogrammes des tickets par type, file, priorité et langue" },
        caption: {
          en: "Ticket distributions explored in the SageMaker notebook.",
          fr: "Répartitions des tickets explorées dans le notebook SageMaker.",
        },
      },
      {
        src: "/images/projects/support-agent/athena-queries.webp",
        width: 855,
        height: 492,
        alt: { en: "Athena query editor with saved KPI queries", fr: "Éditeur de requêtes Athena avec les requêtes KPI enregistrées" },
        caption: { en: "KPI queries on the curated tables in Athena.", fr: "Requêtes KPI sur les tables curated dans Athena." },
      },
    ],
    lessons: {
      en: [
        "Defining the tools and the risk table first made the agent concrete before choosing a model.",
        "Imbalanced queues change the metric before they change the model.",
        "Keeping a cost table from day one shaped the architecture: serverless endpoints, and an open choice between OpenSearch Serverless and S3 Vectors for the vector store.",
      ],
      fr: [
        "Définir d'abord les outils et la table de risque a rendu l'agent concret avant même de choisir un modèle.",
        "Des files déséquilibrées changent la métrique avant de changer le modèle.",
        "Tenir un tableau des coûts dès le premier jour a orienté l'architecture : endpoints serverless, et un choix encore ouvert entre OpenSearch Serverless et S3 Vectors pour le vector store.",
      ],
    },
    links: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "regulatory-knowledge-base",
    title: {
      en: "Intelligent Regulatory and Tax Knowledge Base",
      fr: "Base de connaissances réglementaire et fiscale intelligente",
    },
    shortTitle: { en: "Regulatory knowledge base", fr: "Base réglementaire" },
    category: { en: "RAG · GraphRAG · Multi-agent", fr: "RAG · GraphRAG · Multi-agents" },
    period: { en: "Sep 2026 – present", fr: "sept. 2026 – aujourd'hui" },
    context: { en: "AI internship · Amen Invest (remote)", fr: "Stage IA · Amen Invest (à distance)" },
    team: { en: "Team of two", fr: "Binôme" },
    role: { en: "AI Intern", fr: "Stagiaire IA" },
    status: { en: "In progress · final delivery in January", fr: "En cours · livraison finale en janvier" },
    summary: {
      en: "BNI-AI, an internal library for a Tunisian brokerage firm: answers in French and Arabic with passage-level citations, a reliability score, and referral to an expert when confidence is low.",
      fr: "BNI-AI, une bibliothèque interne pour un intermédiaire en Bourse tunisien : réponses en français et en arabe citant chaque passage, score de fiabilité et renvoi vers un expert quand la confiance est insuffisante.",
    },
    lede: {
      en: "Amen Invest's regulatory and tax knowledge is spread across laws, CMF decisions, Tunis Stock Exchange (BVMT) rules, emails and exchanges with advisers. BNI-AI is the platform we are building to answer collaborators' questions from the texts themselves, cite each passage, and defer to an expert when it is not sure.",
      fr: "Le savoir réglementaire et fiscal d'Amen Invest est dispersé entre lois, décisions du CMF, règles de la BVMT, courriels et échanges avec les conseillers. BNI-AI est la plateforme que nous construisons pour répondre aux questions des collaborateurs à partir des textes eux-mêmes, citer chaque passage et s'en remettre à un expert en cas de doute.",
    },
    tags: ["FastAPI", "pgvector", "Neo4j", "LangGraph", "Streamlit", "Docker"],
    cover: {
      src: "/images/projects/knowledge-base/dashboard.webp",
      width: 1172,
      height: 651,
      paper: true,
      fill: true,
      alt: {
        en: "BNI-AI prototype: collaborator dashboard with indicators, the AI assistant and recent regulatory news",
        fr: "Prototype BNI-AI : tableau de bord collaborateur avec indicateurs, assistant IA et actualités réglementaires",
      },
    },
    overviewTitle: { en: "Context and problem", fr: "Contexte et problématique" },
    overview: {
      en: [
        "The corpus is large and keeps changing: laws, decrees, regulations and decisions of the CMF (the market authority), rules of the Tunis Stock Exchange, tax texts, anti-money-laundering rules and internal procedures. Texts cite and amend each other, have dated versions, and are bilingual; only the Arabic version published in the Official Journal is authoritative.",
        "A language model on its own is not enough: its knowledge is frozen and it can invent. Every answer has to rest on retrieved passages, and tax figures must come from Amen Invest's calculation engines, never from the model.",
      ],
      fr: [
        "Le corpus est vaste et évolue sans cesse : lois, décrets, règlements et décisions du CMF, règles de la BVMT, textes fiscaux, règles LAB/FT et procédures internes. Les textes se citent et se modifient, ont des versions datées et sont bilingues ; seule la version arabe publiée au JORT fait foi.",
        "Un modèle de langage seul ne suffit pas : sa mémoire est figée et il peut inventer. Chaque réponse doit s'appuyer sur des passages retrouvés, et les chiffres fiscaux doivent venir des moteurs de calcul d'Amen Invest, jamais du modèle.",
      ],
    },
    objectives: {
      en: [
        "Ingestion of heterogeneous documents.",
        "Regulatory watch through web scraping, with notification of the risk committee.",
        "Contextualised answers to questions in French and Arabic, with systematic citation of sources.",
        "An anti-error system based on claim verification, with a human validation circuit.",
        "Question history and a complete audit log.",
        "Generation of an annual wealth letter sent to Amen Invest's clients.",
        "Tax assistance for clients: simulation of the annual income tax return, the wealth tax and the Equity Savings Account (CEA), optimisation recommendations and tax benefits, and a personalised tax report handed to the client.",
      ],
      fr: [
        "L'ingestion de documents hétérogènes.",
        "La veille réglementaire par web scraping, avec notification du comité des risques.",
        "La génération de réponses contextualisées aux questions en français et en arabe, avec citation systématique des sources.",
        "Un système anti-erreur fondé sur la vérification des affirmations, avec un circuit de validation humaine.",
        "L'historique des questions et un journal d'audit complet.",
        "La génération d'une lettre patrimoniale annuelle diffusée auprès des clients d'Amen Invest.",
        "L'assistance fiscale aux clients : simulation de la déclaration annuelle de revenus, de l'impôt sur la fortune et du Compte Épargne en Actions (CEA), recommandations d'optimisation et d'avantages fiscaux, et génération d'un rapport fiscal personnalisé remis au client.",
      ],
    },
    architecture: {
      intro: {
        en: "The target architecture, stage by stage.",
        fr: "L'architecture cible, étape par étape.",
      },
      steps: [
        {
          tag: { en: "Corpus", fr: "Corpus" },
          label: { en: "Collection & inventory", fr: "Collecte & inventaire" },
          detail: {
            en: "Official sources only (JORT, CMF, BVMT, tax administration). 374 documents catalogued, a 24-text pilot corpus.",
            fr: "Sources officielles uniquement (JORT, CMF, BVMT, administration fiscale). 374 documents inventoriés, corpus pilote de 24 textes.",
          },
        },
        {
          tag: { en: "Graph", fr: "Graphe" },
          label: { en: "Normative graph", fr: "Graphe normatif" },
          detail: {
            en: "Neo4j relations between texts: amends, repeals, replaces, applies, refers to, translation of, cites. 23 candidate relations extracted so far.",
            fr: "Relations Neo4j entre textes : modifie, abroge, remplace, applique, renvoie à, traduction de, cite. 23 relations candidates extraites à ce jour.",
          },
        },
        {
          tag: { en: "Retrieval", fr: "Recherche" },
          label: { en: "Hybrid retrieval", fr: "Recherche hybride" },
          detail: {
            en: "pgvector and BM25, RRF fusion, status and date filter from the graph, reranker, graph expansion.",
            fr: "pgvector et BM25, fusion RRF, filtre statut et date issu du graphe, reranker, expansion par le graphe.",
          },
        },
        {
          tag: { en: "Agents", fr: "Agents" },
          label: { en: "LangGraph agents", fr: "Agents LangGraph" },
          detail: {
            en: "A router, legal and tax agents, a verifier, recommendation, report and wealth-letter agents.",
            fr: "Un routeur, des agents juridique et fiscal, un vérificateur, des agents de recommandation, de rapport et de lettre patrimoniale.",
          },
        },
        {
          tag: { en: "Answer", fr: "Réponse" },
          label: { en: "Reliability score", fr: "Score de fiabilité" },
          detail: {
            en: "0 to 1: faithfulness 35%, retrieval 20%, source status 15%, agreement 15%, validated precedent 15%. Confirmed at 0.80 or above; otherwise review or expert.",
            fr: "De 0 à 1 : fidélité 35 %, récupération 20 %, statut des sources 15 %, concordance 15 %, précédent validé 15 %. Confirmée à partir de 0,80 ; sinon validation ou expert.",
          },
        },
      ],
    },
    stack: [
      { label: { en: "1. Presentation", fr: "1. Présentation" }, items: ["Streamlit"] },
      { label: { en: "2. API & security", fr: "2. API et sécurité" }, items: ["FastAPI", "Pydantic", "PostgreSQL", "Argon2", "SMTP"] },
      { label: { en: "3. Multi-agent orchestration", fr: "3. Orchestration multi-agents" }, items: ["LangGraph", "Jinja2 + WeasyPrint (PDF)"] },
      { label: { en: "4. AI services", fr: "4. Services IA" }, items: ["LiteLLM", "BGE-M3 + bge-reranker-v2-m3", "Commercial LLM API", "Docling + vision-language OCR"] },
      { label: { en: "5. Knowledge & data", fr: "5. Connaissances et données" }, items: ["PostgreSQL + pgvector", "OpenSearch (BM25)", "Neo4j (Cypher)", "MinIO (S3)", "Redis + Celery"] },
      { label: { en: "6. Ingestion & regulatory watch", fr: "6. Ingestion et veille réglementaire" }, items: ["SHA-256 + diff-match-patch", "Scrapy + Playwright", "trafilatura", "Prefect"] },
      { label: { en: "7. Cross-cutting foundation", fr: "7. Socle transverse" }, items: ["Docker Compose, Kubernetes (k3s)", "GitHub Actions / GitLab CI", "RAGAS / DeepEval", "Langfuse, Prometheus + Grafana", "HTTPS (TLS), Docker secrets"] },
    ],
    implementation: [],
    contribution: { intro: { en: "", fr: "" }, items: { en: [], fr: [] } },
    results: {
      metrics: [
        { value: "374", label: { en: "regulatory documents inventoried", fr: "documents réglementaires inventoriés" } },
        { value: "24", label: { en: "texts in the pilot corpus", fr: "textes dans le corpus pilote" } },
      ],
      notes: {
        en: [
          "No retrieval or answer-quality metric yet. Evaluation (faithfulness, retrieval quality, expert agreement) comes with the RAG phase.",
        ],
        fr: [
          "Pas encore de métrique de recherche ni de qualité des réponses. L'évaluation (fidélité, qualité de la recherche, accord avec les experts) viendra avec la phase RAG.",
        ],
      },
    },
    gallery: [
      {
        src: "/images/projects/knowledge-base/assistant.webp",
        width: 1041,
        height: 655,
        paper: true,
        alt: { en: "BNI-AI assistant: question history and suggested questions", fr: "Assistant BNI-AI : historique des questions et questions suggérées" },
        caption: { en: "The regulatory assistant, with the question history.", fr: "L'assistant réglementaire, avec l'historique des questions." },
      },
      {
        src: "/images/projects/knowledge-base/answer.webp",
        width: 1116,
        height: 563,
        paper: true,
        alt: { en: "A category 1 confirmed answer with its simulated reliability score", fr: "Une réponse confirmée de catégorie 1 avec son score de fiabilité simulé" },
        caption: { en: "A sourced answer with its reliability score (simulated in the prototype).", fr: "Une réponse sourcée avec son score de fiabilité (simulé dans le prototype)." },
      },
      {
        src: "/images/projects/knowledge-base/tax-return.webp",
        width: 732,
        height: 497,
        paper: true,
        alt: { en: "Pre-filled annual income tax return for a fictitious client file", fr: "Déclaration annuelle de revenus préremplie pour un dossier client fictif" },
        caption: { en: "Tax assistance: a pre-filled annual return, on fictitious data.", fr: "Assistance fiscale : déclaration annuelle préremplie, sur données fictives." },
      },
    ],
    lessons: { en: [], fr: [] },
    links: [
      { label: { en: "Code: private (Amen Invest)", fr: "Code : privé (Amen Invest)" } },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "cure-medical-blockchain",
    title: {
      en: "CURE: Secure Blockchain Platform for Medical Data",
      fr: "CURE : plateforme blockchain sécurisée pour les données médicales",
    },
    shortTitle: { en: "CURE", fr: "CURE" },
    category: { en: "Blockchain · Health data · Fraud detection", fr: "Blockchain · Données de santé · Détection de fraude" },
    period: { en: "Jan – Jun 2026", fr: "janv. – juin 2026" },
    context: { en: "P2M project · SUP'COM", fr: "Projet P2M · SUP'COM" },
    team: { en: "Team of two, faculty supervision", fr: "Binôme, encadrement académique" },
    role: { en: "Co-developer", fr: "Co-développeuse" },
    status: { en: "Completed", fr: "Terminé" },
    summary: {
      en: "CURE is a secure, interoperable platform for managing medical data, built on a permissioned Ethereum blockchain (Ganache, Solidity, Truffle). Its smart contracts manage the identities and roles of the actors (hospital, doctor, patient). They also let patients grant or revoke access to their data, and they record every operation in a tamper-proof audit log. An XGBoost AI model analyses this history to detect fraudulent access in real time, with SHAP explanations.",
      fr: "CURE est une plateforme sécurisée et interopérable de gestion des données médicales, construite sur une blockchain Ethereum permissionnée (Ganache, Solidity, Truffle). Ses smart contracts gèrent les identités et les rôles des acteurs (hôpital, médecin, patient). Ils permettent aussi au patient d'accorder ou de révoquer les accès à ses données, et ils enregistrent chaque opération dans un journal d'audit infalsifiable. Un modèle d'intelligence artificielle XGBoost analyse cet historique pour repérer en temps réel les accès frauduleux, avec des explications SHAP.",
    },
    lede: {
      en: "Medical records are scattered across hospitals, clinics and labs, in centralised systems that do not talk to each other, and patients cannot see who opens their file. CURE is a platform where a doctor reads a record only with the patient's consent, every access is written to a ledger, and a model watches for access behaviour the ledger cannot judge.",
      fr: "Les dossiers médicaux sont dispersés entre hôpitaux, cliniques et laboratoires, dans des systèmes centralisés qui ne communiquent pas, et le patient ne voit pas qui consulte son dossier. CURE est une plateforme où un médecin n'accède à un dossier qu'avec le consentement du patient, où chaque accès est inscrit dans un registre, et où un modèle surveille les comportements d'accès que le registre ne sait pas juger.",
    },
    tags: ["Solidity", "IPFS", "HL7 FHIR", "Spring Boot", "Angular", "XGBoost"],
    cover: {
      src: "/images/projects/cure/home.webp",
      width: 1600,
      height: 727,
      alt: { en: "Home page of the CURE web application", fr: "Page d'accueil de l'application web CURE" },
    },
    overview: {
      en: [
        "Centralised health systems are attractive targets and offer patients no visibility on access. Existing blockchain prototypes such as MedRec showed that a ledger can track consent, but few integrate a medical standard like HL7 FHIR.",
        "A blockchain proves that an access happened; it does not say whether it was legitimate. A script reading hundreds of records at night is fully traced and still a problem. CURE adds a fraud detection layer on top of the audit trail for that reason.",
      ],
      fr: [
        "Les systèmes de santé centralisés sont des cibles attractives et ne donnent au patient aucune visibilité sur les accès. Des prototypes blockchain comme MedRec ont montré qu'un registre peut suivre le consentement, mais peu intègrent un standard médical comme HL7 FHIR.",
        "Une blockchain prouve qu'un accès a eu lieu ; elle ne dit pas s'il était légitime. Un script qui lit des centaines de dossiers la nuit est parfaitement tracé, et reste un problème. C'est pourquoi CURE ajoute une couche de détection de fraude au-dessus du journal d'audit.",
      ],
    },
    objectives: {
      en: [
        "Tamper-evident consent and access history through smart contracts.",
        "Confidential storage: AES-256 encryption before upload, files kept off-chain on IPFS.",
        "Interoperability through HL7 FHIR R4 resources (Patient, Observation, DocumentReference).",
        "Real-time detection of fraudulent access, with an explanation for each alert.",
      ],
      fr: [
        "Un historique de consentements et d'accès infalsifiable grâce aux smart contracts.",
        "Un stockage confidentiel : chiffrement AES-256 avant envoi, fichiers hors chaîne sur IPFS.",
        "L'interopérabilité via des ressources HL7 FHIR R4 (Patient, Observation, DocumentReference).",
        "La détection en temps réel des accès frauduleux, avec une explication pour chaque alerte.",
      ],
    },
    architecture: {
      intro: {
        en: "Four layers: Angular front end with MetaMask, Spring Boot back end with HAPI FHIR and Web3j, Ethereum (Ganache) with three contracts, and IPFS plus PostgreSQL for storage. A FastAPI service hosts the fraud models.",
        fr: "Quatre couches : front-end Angular avec MetaMask, back-end Spring Boot avec HAPI FHIR et Web3j, Ethereum (Ganache) avec trois contrats, et IPFS plus PostgreSQL pour le stockage. Un service FastAPI héberge les modèles de fraude.",
      },
      steps: [
        {
          tag: { en: "Upload", fr: "Dépôt" },
          label: { en: "Encrypt & store", fr: "Chiffrer & stocker" },
          detail: {
            en: "The back end encrypts the file with AES-256-CBC and stores it on IPFS, which returns a content identifier (CID).",
            fr: "Le back-end chiffre le fichier en AES-256-CBC et le stocke sur IPFS, qui renvoie un identifiant de contenu (CID).",
          },
        },
        {
          tag: { en: "Record", fr: "Enregistrer" },
          label: { en: "FHIR + on-chain", fr: "FHIR + on-chain" },
          detail: {
            en: "CID, hash and metadata go into a FHIR DocumentReference, then into the MedicalRecords contract, which emits an audit event.",
            fr: "CID, empreinte et métadonnées vont dans une DocumentReference FHIR, puis dans le contrat MedicalRecords, qui émet un événement d'audit.",
          },
        },
        {
          tag: { en: "Consent", fr: "Consentir" },
          label: { en: "Grant or revoke", fr: "Accorder ou retirer" },
          detail: {
            en: "The patient grants or revokes a specific doctor's access from the Angular app, signed with MetaMask (ConsentManager).",
            fr: "Le patient accorde ou retire l'accès d'un médecin précis depuis l'application Angular, signé avec MetaMask (ConsentManager).",
          },
        },
        {
          tag: { en: "Access", fr: "Accès" },
          label: { en: "Check, fetch, log", fr: "Vérifier, récupérer, tracer" },
          detail: {
            en: "With valid consent, the back end gets the CID from FHIR, downloads and decrypts the file, and logs the access on-chain. Otherwise nothing is exposed.",
            fr: "Avec un consentement valide, le back-end récupère le CID dans FHIR, télécharge et déchiffre le fichier, et trace l'accès on-chain. Sinon rien n'est exposé.",
          },
        },
        {
          tag: { en: "Monitor", fr: "Surveiller" },
          label: { en: "Fraud scoring", fr: "Score de fraude" },
          detail: {
            en: "Each access event (10 features) is scored by XGBoost; an alert shows its three most decisive SHAP features.",
            fr: "Chaque événement d'accès (10 descripteurs) est noté par XGBoost ; une alerte affiche ses trois descripteurs SHAP les plus décisifs.",
          },
        },
      ],
    },
    stack: [
      { label: { en: "Blockchain", fr: "Blockchain" }, items: ["Solidity (3 contracts)", "Truffle", "Ganache", "Web3j", "MetaMask"] },
      { label: { en: "Storage & standards", fr: "Stockage & standards" }, items: ["IPFS", "AES-256-CBC", "HAPI FHIR R4", "PostgreSQL"] },
      { label: { en: "Application", fr: "Application" }, items: ["Spring Boot", "Spring Security + JWT", "Angular"] },
      { label: { en: "Fraud detection", fr: "Détection de fraude" }, items: ["FastAPI", "XGBoost 2.0.3", "SHAP 0.44.1"] },
    ],
    implementation: [
      {
        title: { en: "Smart contracts", fr: "Smart contracts" },
        body: {
          en: "Three Solidity contracts deployed with Truffle on a local Ganache network: IdentityRegistry maps business roles to Ethereum addresses, ConsentManager stores patients' authorisations and is checked on every access, and MedicalRecords stores document metadata (IPFS CID, SHA-256 hash, type, timestamp), each addition emitting an event used as the audit log.",
          fr: "Trois contrats Solidity déployés avec Truffle sur un réseau Ganache local : IdentityRegistry associe les rôles métier aux adresses Ethereum, ConsentManager conserve les autorisations des patients et est vérifié à chaque accès, et MedicalRecords stocke les métadonnées des documents (CID IPFS, empreinte SHA-256, type, horodatage), chaque ajout émettant un événement servant de journal d'audit.",
        },
      },
      {
        title: { en: "Off-chain storage", fr: "Stockage hors chaîne" },
        body: {
          en: "Files are encrypted before leaving the back end, then stored on IPFS. Because the CID is derived from the content, any change to the file changes the CID; a keccak256 hash of the CID is written on-chain, linking the on-chain reference to the off-chain file.",
          fr: "Les fichiers sont chiffrés avant de quitter le back-end, puis stockés sur IPFS. Le CID étant dérivé du contenu, toute modification du fichier change le CID ; une empreinte keccak256 du CID est inscrite on-chain, ce qui lie la référence on-chain au fichier hors chaîne.",
        },
      },
      {
        title: { en: "Fraud detection", fr: "Détection de fraude" },
        body: {
          en: "Trained on 100,000 synthetic access events (95% normal, 5% fraud) described by ten features such as access rate per hour, hour of day, unique patients per hour, access after revocation, specialty match and a burst score. Five fraud patterns were modelled: mass access, night access, post-revocation access, abnormal weekend activity and FHIR scraping. A binary model detects fraud and a multiclass model names the pattern; XGBoost was chosen after a comparative study for its results on imbalanced tabular data, sub-10 ms inference and SHAP support.",
          fr: "Entraînement sur 100 000 événements d'accès synthétiques (95 % normaux, 5 % frauduleux) décrits par dix descripteurs, dont le taux d'accès par heure, l'heure, le nombre de patients distincts par heure, l'accès après révocation, la correspondance de spécialité et un score de rafale. Cinq schémas de fraude ont été modélisés : accès massif, accès nocturne, accès après révocation, activité anormale le week-end et scraping FHIR. Un modèle binaire détecte la fraude et un modèle multiclasse nomme le schéma ; XGBoost a été retenu après une étude comparative pour ses résultats sur données tabulaires déséquilibrées, son inférence sous 10 ms et sa compatibilité SHAP.",
        },
      },
      {
        title: { en: "Application", fr: "Application" },
        body: {
          en: "Spring Boot (port 8080) exposes the REST API and a HAPI FHIR R4 server under /fhir, secured with Spring Security and JWT; FastAPI (8000) serves the models; Angular (4200) provides one interface per actor: consent management, record consultation, audit trail and the fraud dashboard. APIs were tested in Postman before integration.",
          fr: "Spring Boot (port 8080) expose l'API REST et un serveur HAPI FHIR R4 sous /fhir, sécurisés par Spring Security et JWT ; FastAPI (8000) sert les modèles ; Angular (4200) offre une interface par acteur : gestion des consentements, consultation des dossiers, journal d'audit et tableau de bord de fraude. Les API ont été testées sous Postman avant intégration.",
        },
      },
    ],
    contribution: {
      intro: {
        en: "Two-person P2M project, carried out with a classmate under academic supervision at SUP'COM.",
        fr: "Projet P2M en binôme, réalisé avec une camarade sous encadrement académique à SUP'COM.",
      },
      items: {
        en: [
          "Co-designed the architecture and the UML models (use case, class and sequence diagrams).",
          "Co-wrote the specification and the final report.",
        ],
        fr: [
          "Co-conception de l'architecture et des modèles UML (cas d'utilisation, classes, séquence).",
          "Co-rédaction du cahier des charges et du rapport final.",
        ],
      },
    },
    results: {
      metrics: [
        { value: "0.9935", label: { en: "F1-score, binary fraud model", fr: "F1-score, modèle de fraude binaire" } },
        { value: "0.96", label: { en: "macro F1, five-pattern model", fr: "F1 macro, modèle à cinq schémas" } },
        { value: "< 10 ms", label: { en: "inference per access event", fr: "inférence par événement d'accès" } },
      ],
      notes: {
        en: [
          "Also measured: AUC-ROC above 0.99 and multiclass accuracy of 96%. Smart contracts were tested with Truffle, and IPFS storage and FHIR resources were validated end to end.",
          "These scores come from synthetic events generated from patterns we defined ourselves, so the model largely learns those rules back. Real access logs would be needed to know how it behaves in practice.",
        ],
        fr: [
          "Également mesurés : une AUC-ROC supérieure à 0,99 et une exactitude multiclasse de 96 %. Les smart contracts ont été testés avec Truffle, et le stockage IPFS et les ressources FHIR validés de bout en bout.",
          "Ces scores proviennent d'événements synthétiques générés à partir de schémas que nous avons nous-mêmes définis : le modèle réapprend donc en grande partie ces règles. Il faudrait de vrais journaux d'accès pour savoir comment il se comporte en pratique.",
        ],
      },
    },
    gallery: [
      {
        src: "/images/projects/cure/doctor-account.webp",
        width: 607,
        height: 452,
        alt: { en: "CURE doctor space: the My account page with the doctor profile form", fr: "Espace médecin CURE : page Mon compte avec le formulaire du profil médecin" },
        caption: { en: "Doctor space: the account page and profile.", fr: "Espace médecin : la page du compte et le profil." },
      },
      {
        src: "/images/projects/cure/document-upload.webp",
        width: 672,
        height: 512,
        alt: { en: "A medical document saved in CURE, with its SHA-256 fingerprint, IPFS CID, blockchain transaction and traceability steps", fr: "Un document médical enregistré dans CURE, avec son empreinte SHA-256, son CID IPFS, sa transaction blockchain et les étapes de traçabilité" },
        caption: { en: "Document upload: browser encryption (AES-256-GCM), IPFS archiving and blockchain record.", fr: "Dépôt d'un document : chiffrement dans le navigateur (AES-256-GCM), archivage IPFS et enregistrement blockchain." },
      },
    ],
    lessons: {
      en: [
        "Blockchain answers 'did this access happen?', not 'should it have?'. The ML layer exists to cover that gap.",
        "Keep large files off-chain: only the CID and a hash belong on Ethereum.",
        "High scores on synthetic data are a starting point, not a result. The next step would be validating on real or realistic access logs.",
      ],
      fr: [
        "La blockchain répond à « cet accès a-t-il eu lieu ? », pas à « aurait-il dû avoir lieu ? ». La couche ML existe pour combler cet écart.",
        "Garder les fichiers volumineux hors chaîne : seuls le CID et une empreinte ont leur place sur Ethereum.",
        "De bons scores sur données synthétiques sont un point de départ, pas un résultat. L'étape suivante serait une validation sur des journaux d'accès réels ou réalistes.",
      ],
    },
    links: [],
  },
  {
    slug: "glutino",
    title: {
      en: "Glutino: Mobile App for a Gluten-Free Lifestyle",
      fr: "Glutino : application mobile pour une vie sans gluten",
    },
    shortTitle: { en: "Glutino", fr: "Glutino" },
    category: { en: "Mobile app · Health · Open data", fr: "Application mobile · Santé · Données ouvertes" },
    period: { en: "Nov – Dec 2025", fr: "nov. – déc. 2025" },
    context: {
      en: "Mobile development project · SUP'COM, also pitched at the MIT Startup Studio",
      fr: "Projet de développement mobile · SUP'COM, présenté aussi au MIT Startup Studio",
    },
    team: { en: "Team of six", fr: "Équipe de six" },
    role: { en: "Co-developer", fr: "Co-développeuse" },
    status: { en: "Completed", fr: "Terminé" },
    summary: {
      en: "A Flutter app for people with coeliac disease or gluten sensitivity: scan a product's barcode to see whether it contains gluten, find nearby places to eat, and keep recipes, a shopping list and a profile in one place.",
      fr: "Une application Flutter pour les personnes atteintes de maladie cœliaque ou d'hypersensibilité au gluten : scanner le code-barres d'un produit pour savoir s'il contient du gluten, trouver où manger à proximité, et réunir recettes, liste de courses et profil au même endroit.",
    },
    lede: {
      en: "For people who cannot eat gluten, every label is a risk to check and every restaurant a question to ask. Glutino gathers reliable product information and nearby places to eat in one mobile app, to make those everyday choices faster and safer.",
      fr: "Pour une personne qui ne peut pas consommer de gluten, chaque étiquette est un risque à vérifier et chaque restaurant une question à poser. Glutino réunit des informations fiables sur les produits et les lieux où manger dans une seule application mobile, pour rendre ces choix quotidiens plus rapides et plus sûrs.",
    },
    tags: ["Flutter", "Firebase Auth", "Open Food Facts", "OpenStreetMap", "Provider"],
    cover: {
      src: "/images/projects/glutino/cover-home.webp",
      width: 472,
      height: 1036,
      paper: true,
      alt: {
        en: "Glutino home screen: scan products, gluten-free recipes and safe restaurants",
        fr: "Écran d'accueil de Glutino : scanner des produits, recettes sans gluten et restaurants sûrs",
      },
    },
    overview: {
      en: [
        "A gluten-free diet is a medical necessity for many people, yet product labels are often unclear, cross-contamination is hard to spot, and finding a safe restaurant usually means asking around. The information exists, but it is scattered.",
        "Glutino puts it in one place: a barcode scan answers “can I eat this?”, a map answers “where can I eat?”, and a personal profile, recipes and a shopping list help with the rest of the routine.",
      ],
      fr: [
        "Le régime sans gluten est une nécessité médicale pour beaucoup, mais les étiquettes sont souvent peu claires, la contamination croisée difficile à repérer, et trouver un restaurant sûr passe généralement par le bouche-à-oreille. L'information existe, mais elle est dispersée.",
        "Glutino la centralise : un scan de code-barres répond à « puis-je manger ceci ? », une carte répond à « où puis-je manger ? », et un profil personnel, des recettes et une liste de courses accompagnent le reste du quotidien.",
      ],
    },
    objectives: {
      en: [
        "Identify gluten in a packaged product in seconds from its barcode.",
        "Locate restaurants, cafés and fast-food places around the user.",
        "Personalise the experience: intolerance level, foods to avoid, favourites.",
        "Scope a realistic first version: must-have, nice-to-have and out-of-scope features were prioritised before coding.",
      ],
      fr: [
        "Identifier en quelques secondes la présence de gluten dans un produit à partir de son code-barres.",
        "Localiser les restaurants, cafés et fast-foods autour de l'utilisateur.",
        "Personnaliser l'expérience : niveau d'intolérance, aliments à éviter, favoris.",
        "Cadrer une première version réaliste : les fonctionnalités indispensables, souhaitables et hors périmètre ont été priorisées avant de coder.",
      ],
    },
    architecture: {
      intro: {
        en: "A single Flutter code base for Android and iOS, organised in models, services, providers and screens. Firebase handles accounts; product and place data come from two open APIs.",
        fr: "Une base de code Flutter unique pour Android et iOS, organisée en modèles, services, providers et écrans. Firebase gère les comptes ; les données produits et lieux viennent de deux API ouvertes.",
      },
      steps: [
        {
          tag: { en: "Account", fr: "Compte" },
          label: { en: "Sign in", fr: "Connexion" },
          detail: {
            en: "Firebase Authentication with email and password, Google, Facebook or Apple. Preferences are kept in SharedPreferences, sensitive data and favourites in secure storage.",
            fr: "Firebase Authentication par e-mail et mot de passe, Google, Facebook ou Apple. Les préférences sont conservées dans SharedPreferences, les données sensibles et les favoris dans un stockage sécurisé.",
          },
        },
        {
          tag: { en: "Scan", fr: "Scan" },
          label: { en: "Barcode lookup", fr: "Lecture du code-barres" },
          detail: {
            en: "The camera reads the barcode (mobile_scanner) and the app queries the Open Food Facts API for the product: name, brand, image, ingredients and allergen tags.",
            fr: "La caméra lit le code-barres (mobile_scanner) et l'application interroge l'API Open Food Facts : nom, marque, image, ingrédients et allergènes du produit.",
          },
        },
        {
          tag: { en: "Verdict", fr: "Verdict" },
          label: { en: "Gluten status", fr: "Statut gluten" },
          detail: {
            en: "Allergen tags are checked first, then the ingredient text for wheat, barley, rye, spelt or kamut. The product is shown as containing gluten, possibly containing it, or gluten-free.",
            fr: "Les allergènes déclarés sont vérifiés d'abord, puis la liste d'ingrédients (blé, orge, seigle, épeautre, kamut). Le produit est affiché comme contenant du gluten, pouvant en contenir, ou sans gluten.",
          },
        },
        {
          tag: { en: "Places", fr: "Lieux" },
          label: { en: "Nearby restaurants", fr: "Restaurants à proximité" },
          detail: {
            en: "The phone's position (geolocator) feeds an OpenStreetMap Overpass query for restaurants, cafés and fast food within 15 km, sorted by distance, with directions opened in the maps app.",
            fr: "La position du téléphone (geolocator) alimente une requête OpenStreetMap Overpass sur les restaurants, cafés et fast-foods dans un rayon de 15 km, triés par distance, avec l'itinéraire ouvert dans l'application de cartes.",
          },
        },
        {
          tag: { en: "Routine", fr: "Quotidien" },
          label: { en: "Recipes, list, profile", fr: "Recettes, liste, profil" },
          detail: {
            en: "Gluten-free recipes with details, a shopping list managed with Provider, saved products and an editable profile. The interface is available in French and Arabic.",
            fr: "Des recettes sans gluten détaillées, une liste de courses gérée avec Provider, des produits enregistrés et un profil modifiable. L'interface est disponible en français et en arabe.",
          },
        },
      ],
    },
    stack: [
      { label: { en: "Mobile", fr: "Mobile" }, items: ["Flutter", "Dart", "Provider", "mobile_scanner", "geolocator"] },
      { label: { en: "Accounts & storage", fr: "Comptes & stockage" }, items: ["Firebase Authentication", "SharedPreferences", "Flutter Secure Storage"] },
      { label: { en: "Data sources", fr: "Sources de données" }, items: ["Open Food Facts API", "OpenStreetMap Overpass API"] },
      { label: { en: "Design", fr: "Conception" }, items: ["MVP prioritisation", "UML: use case, class, sequence diagrams"] },
    ],
    implementation: [
      {
        title: { en: "Scoping the MVP", fr: "Cadrage du MVP" },
        body: {
          en: "Before coding, features were sorted into must-have (product scan and information, gluten verdict, restaurant finder, user profile), nice-to-have (recipes and meal plans, shopping list, product alerts, several languages) and out of scope (recipe generator, nutrition chatbot, delivery). UML use case, class and sequence diagrams were drawn for the main flows.",
          fr: "Avant de coder, les fonctionnalités ont été classées en indispensables (scan et fiche produit, verdict gluten, recherche de restaurants, profil), souhaitables (recettes et plans de repas, liste de courses, alertes produits, plusieurs langues) et hors périmètre (générateur de recettes, chatbot nutrition, livraison). Des diagrammes UML de cas d'utilisation, de classes et de séquence ont été réalisés pour les parcours principaux.",
        },
      },
      {
        title: { en: "Product check", fr: "Vérification des produits" },
        body: {
          en: "A product service calls Open Food Facts with the scanned barcode; the product model then derives a gluten status from the standardised allergen tags, with a keyword search in the ingredient text as a fallback. Scanned products can be saved for later.",
          fr: "Un service produit interroge Open Food Facts avec le code-barres scanné ; le modèle produit en déduit un statut gluten à partir des allergènes normalisés, avec une recherche de mots-clés dans la liste d'ingrédients en secours. Les produits scannés peuvent être enregistrés.",
        },
      },
      {
        title: { en: "Restaurant finder", fr: "Recherche de restaurants" },
        body: {
          en: "Places come from OpenStreetMap through the Overpass API, with distances computed from the user's position. OpenStreetMap does not say whether a place is gluten-free, so menus, ratings and pictures are simulated in this version: the list shows real places, not verified gluten-free ones.",
          fr: "Les lieux proviennent d'OpenStreetMap via l'API Overpass, avec des distances calculées depuis la position de l'utilisateur. OpenStreetMap n'indique pas si un lieu est sans gluten : menus, notes et photos sont donc simulés dans cette version, et la liste montre des lieux réels, pas des lieux vérifiés sans gluten.",
        },
      },
      {
        title: { en: "App structure", fr: "Structure de l'application" },
        body: {
          en: "About 7,000 lines of Dart in 34 files: models (product, recipe, restaurant, user), services (authentication, products, restaurants, favourites), providers (language, shopping list) and screens for the home, scanner, products, restaurants and map, recipes, shopping list, profile and settings.",
          fr: "Environ 7 000 lignes de Dart réparties dans 34 fichiers : modèles (produit, recette, restaurant, utilisateur), services (authentification, produits, restaurants, favoris), providers (langue, liste de courses) et écrans pour l'accueil, le scanner, les produits, les restaurants et la carte, les recettes, la liste de courses, le profil et les réglages.",
        },
      },
    ],
    contribution: {
      intro: {
        en: "Six-person project carried out in the mobile development course at SUP'COM; the concept was also presented at the MIT Startup Studio.",
        fr: "Projet à six réalisé dans le cadre du cours de développement mobile à SUP'COM ; le concept a aussi été présenté au MIT Startup Studio.",
      },
      items: {
        en: ["Took part in the app's design (MVP scope, UML diagrams) and its development in Flutter."],
        fr: ["Participation à la conception de l'application (périmètre du MVP, diagrammes UML) et à son développement en Flutter."],
      },
    },
    results: {
      metrics: [
        { value: "~7,000", label: { en: "lines of Dart across 34 files", fr: "lignes de Dart dans 34 fichiers" } },
        { value: "4", label: { en: "sign-in methods (email, Google, Facebook, Apple)", fr: "modes de connexion (e-mail, Google, Facebook, Apple)" } },
        { value: "2", label: { en: "interface languages (French, Arabic)", fr: "langues d'interface (français, arabe)" } },
      ],
      notes: {
        en: [
          "The must-have features of the MVP (scan, gluten verdict, restaurant finder, profile) work in the app, along with recipes and the shopping list from the nice-to-have list.",
          "The gluten verdict is only as good as the Open Food Facts entry: a missing or incomplete product cannot be judged reliably.",
        ],
        fr: [
          "Les fonctionnalités indispensables du MVP (scan, verdict gluten, recherche de restaurants, profil) fonctionnent dans l'application, ainsi que les recettes et la liste de courses de la liste souhaitable.",
          "Le verdict gluten ne vaut que ce que vaut la fiche Open Food Facts : un produit absent ou incomplet ne peut pas être jugé de façon fiable.",
        ],
      },
    },
    gallery: [
      {
        src: "/images/projects/glutino/app-products.webp",
        width: 600,
        height: 1274,
        alt: { en: "Glutino Products screen, ready to scan a product barcode", fr: "Écran Produits de Glutino, prêt à scanner le code-barres d'un produit" },
        caption: { en: "Products: scan a barcode and keep saved products.", fr: "Produits : scanner un code-barres et retrouver les produits enregistrés." },
      },
      {
        src: "/images/projects/glutino/app-recipes.webp",
        width: 600,
        height: 1274,
        alt: { en: "Glutino Recipes screen with gluten-free recipe cards", fr: "Écran Recettes de Glutino avec des fiches de recettes sans gluten" },
        caption: { en: "Recipes: gluten-free recipes with time, servings and difficulty.", fr: "Recettes : recettes sans gluten avec durée, nombre de personnes et difficulté." },
      },
      {
        src: "/images/projects/glutino/app-restaurants.webp",
        width: 600,
        height: 1274,
        alt: { en: "Glutino Restaurants screen listing nearby restaurants with gluten-free dishes", fr: "Écran Restaurants de Glutino listant des restaurants proches avec leurs plats sans gluten" },
        caption: { en: "Restaurants: nearby places, filtered by category, with their gluten-free dishes.", fr: "Restos : restaurants proches, filtrés par catégorie, avec leurs plats sans gluten." },
      },
    ],
    lessons: {
      en: [
        "Open data covers products well but not restaurants: there is no public source saying whether a place is gluten-free, which is why that part is simulated. Community reviews would be the way to fill the gap.",
        "Order matters in rule-based checks: the general “gluten” keyword is matched before “may contain”, so trace warnings end up as “contains gluten”. That errs on the safe side, but the “may contain” label is then rarely shown.",
        "Writing the MVP table first kept a broad idea down to a version a team of six could deliver.",
      ],
      fr: [
        "Les données ouvertes couvrent bien les produits mais pas les restaurants : aucune source publique n'indique si un lieu est sans gluten, d'où la simulation de cette partie. Des avis de la communauté seraient le moyen de combler ce manque.",
        "L'ordre compte dans des règles : le mot-clé général « gluten » est testé avant « peut contenir », si bien que les mentions de traces finissent en « contient du gluten ». C'est prudent, mais l'étiquette « peut contenir » s'affiche alors rarement.",
        "Écrire le tableau du MVP en premier a permis de ramener une idée large à une version qu'une équipe de six pouvait livrer.",
      ],
    },
    links: [],
  },
  {
    slug: "supflow",
    title: {
      en: "SupFlow: Academic Project Management Platform",
      fr: "SupFlow : plateforme de gestion des projets académiques",
    },
    shortTitle: { en: "SupFlow", fr: "SupFlow" },
    category: { en: "Web application · Full stack", fr: "Application web · Full stack" },
    period: { en: "Nov – Dec 2025", fr: "nov. – déc. 2025" },
    context: { en: "Web development project · SUP'COM", fr: "Projet de développement web · SUP'COM" },
    team: { en: "Team of two", fr: "Binôme" },
    role: { en: "Co-developer", fr: "Co-développeuse" },
    status: { en: "Completed", fr: "Terminé" },
    summary: {
      en: "A web platform where SUP'COM students and supervisors follow academic projects (PACTE, P2M, entrepreneurship challenge) in one place: projects and teams, tasks on a Kanban board, sprints, work logs and dashboards. Angular front end, Spring Boot REST API, SQL Server.",
      fr: "Une plateforme web où étudiants et encadrants de SUP'COM suivent les projets académiques (PACTE, P2M, challenge d'entreprendre) au même endroit : projets et équipes, tâches en Kanban, sprints, journal de travail et tableaux de bord. Front-end Angular, API REST Spring Boot, SQL Server.",
    },
    lede: {
      en: "Academic projects at SUP'COM are followed through emails, shared files and chat groups, which makes it hard to see who does what and what is late. SupFlow gives students, supervisors and administrators a single workspace for each project, from the first topic to the final report.",
      fr: "Les projets académiques à SUP'COM se suivent par e-mails, fichiers partagés et groupes de discussion, ce qui rend difficile de savoir qui fait quoi et ce qui est en retard. SupFlow donne aux étudiants, encadrants et administrateurs un espace de travail unique pour chaque projet, du sujet au rapport final.",
    },
    tags: ["Angular", "TypeScript", "Spring Boot", "JPA", "SQL Server", "Figma"],
    cover: {
      src: "/images/projects/supflow/cover-dashboard.webp",
      width: 1225,
      height: 647,
      alt: {
        en: "SupFlow project dashboard with overall progress, milestones, activity log and workload statistics",
        fr: "Tableau de bord de projet SupFlow avec progression, jalons, journal d'activité et répartition de la charge",
      },
    },
    overview: {
      en: [
        "Each year, SUP'COM students run several team projects under supervision. Tasks, deliverables and feedback are spread across tools, so supervisors lack a clear view of each team's progress and students lack one place to organise their work.",
        "SupFlow was designed from the start for three roles, student, supervisor and administrator, with a Figma prototype and a full site map, then built as an Angular application on top of a Spring Boot API.",
      ],
      fr: [
        "Chaque année, les étudiants de SUP'COM mènent plusieurs projets d'équipe sous encadrement. Tâches, livrables et retours sont dispersés entre plusieurs outils : les encadrants manquent d'une vue claire sur l'avancement de chaque équipe, et les étudiants d'un endroit unique pour organiser leur travail.",
        "SupFlow a été pensé dès le départ pour trois rôles, étudiant, encadrant et administrateur, avec un prototype Figma et une arborescence complète, puis développé en application Angular au-dessus d'une API Spring Boot.",
      ],
    },
    objectives: {
      en: [
        "Centralise each academic project: description, type, class, supervisor, team and deadline.",
        "Organise the work: tasks with priority, owner and due date on a Kanban board, weekly sprints and a work log.",
        "Give each role its own view: student dashboard, supervisor review, administrator overview.",
        "Secure accounts: sign-up with an institutional email, hashed passwords.",
      ],
      fr: [
        "Centraliser chaque projet académique : description, type, classe, encadrant, équipe et échéance.",
        "Organiser le travail : tâches avec priorité, responsable et date limite sur un tableau Kanban, sprints hebdomadaires et journal de travail.",
        "Donner à chaque rôle sa vue : tableau de bord étudiant, suivi par l'encadrant, vue d'ensemble pour l'administrateur.",
        "Sécuriser les comptes : inscription avec un e-mail institutionnel, mots de passe hachés.",
      ],
    },
    architecture: {
      intro: {
        en: "A classic three-tier web application: an Angular single-page app talks to a Spring Boot REST API, which persists users and projects in SQL Server through JPA.",
        fr: "Une application web trois tiers classique : une application Angular monopage communique avec une API REST Spring Boot, qui enregistre utilisateurs et projets dans SQL Server via JPA.",
      },
      steps: [
        {
          tag: { en: "Design", fr: "Conception" },
          label: { en: "Prototype & site map", fr: "Prototype & arborescence" },
          detail: {
            en: "A Figma prototype, a site map covering authentication, dashboards, projects, tasks, work logs, chats and settings, and a graphic charter with a logo and a blue palette.",
            fr: "Un prototype Figma, une arborescence couvrant authentification, tableaux de bord, projets, tâches, journal de travail, discussions et réglages, et une charte graphique avec logo et palette bleue.",
          },
        },
        {
          tag: { en: "Front end", fr: "Front-end" },
          label: { en: "Angular screens", fr: "Écrans Angular" },
          detail: {
            en: "Standalone Angular 17 components for sign-up, login, dashboard, projects, tasks, work logs, chats and settings, with one service for all API calls.",
            fr: "Des composants Angular 17 autonomes pour l'inscription, la connexion, le tableau de bord, les projets, les tâches, le journal de travail, les discussions et les réglages, avec un service unique pour les appels à l'API.",
          },
        },
        {
          tag: { en: "API", fr: "API" },
          label: { en: "Spring Boot REST", fr: "REST Spring Boot" },
          detail: {
            en: "Two controllers expose 11 endpoints: user sign-up, login, email check, read and update, and project create, read, update and delete.",
            fr: "Deux contrôleurs exposent 11 points d'accès : inscription, connexion, vérification d'e-mail, lecture et mise à jour des utilisateurs, et création, lecture, mise à jour et suppression des projets.",
          },
        },
        {
          tag: { en: "Data", fr: "Données" },
          label: { en: "JPA + SQL Server", fr: "JPA + SQL Server" },
          detail: {
            en: "User and Project entities linked by a many-to-many relation (project members), stored in SQL Server. Passwords are hashed with BCrypt before saving.",
            fr: "Les entités User et Project sont liées par une relation plusieurs-à-plusieurs (membres d'un projet) et stockées dans SQL Server. Les mots de passe sont hachés avec BCrypt avant l'enregistrement.",
          },
        },
      ],
    },
    stack: [
      { label: { en: "Front end", fr: "Front-end" }, items: ["Angular 17", "TypeScript", "RxJS", "HTML / CSS"] },
      { label: { en: "Back end", fr: "Back-end" }, items: ["Spring Boot 2.7", "Spring Data JPA", "Spring Security Crypto (BCrypt)", "Maven"] },
      { label: { en: "Database", fr: "Base de données" }, items: ["Microsoft SQL Server"] },
      { label: { en: "Design", fr: "Conception" }, items: ["Figma", "Site map", "Graphic charter"] },
    ],
    implementation: [
      {
        title: { en: "Design first", fr: "La conception d'abord" },
        body: {
          en: "The project started with a Figma prototype and a detailed site map for the three roles: the student dashboard (progress, milestones, workload, activity log), the project workspace with its Kanban board, task details with attachments and supervisor validation, the calendar-based work log, team chats, and the supervisor and administrator dashboards.",
          fr: "Le projet a commencé par un prototype Figma et une arborescence détaillée pour les trois rôles : tableau de bord étudiant (progression, jalons, charge de travail, journal d'activité), espace projet avec son tableau Kanban, détail des tâches avec pièces jointes et validation par l'encadrant, journal de travail sous forme de calendrier, discussions d'équipe, et tableaux de bord encadrant et administrateur.",
        },
      },
      {
        title: { en: "Accounts", fr: "Comptes" },
        body: {
          en: "Sign-up checks that the email is not already used, then stores the user with a BCrypt-hashed password; login verifies the credentials through the API. Users have a role (student, supervisor or administrator) and a programme year.",
          fr: "L'inscription vérifie que l'e-mail n'est pas déjà utilisé, puis enregistre l'utilisateur avec un mot de passe haché par BCrypt ; la connexion vérifie les identifiants via l'API. Chaque utilisateur a un rôle (étudiant, encadrant ou administrateur) et une année d'études.",
        },
      },
      {
        title: { en: "Projects", fr: "Projets" },
        body: {
          en: "Projects are fully connected to the back end: they can be created with a title, type, class, supervisor, status, description and members, then listed, edited and deleted. The many-to-many relation lets a student belong to several projects.",
          fr: "Les projets sont entièrement reliés au back-end : création avec titre, type, classe, encadrant, statut, description et membres, puis affichage, modification et suppression. La relation plusieurs-à-plusieurs permet à un étudiant d'appartenir à plusieurs projets.",
        },
      },
      {
        title: { en: "Work tracking screens", fr: "Écrans de suivi du travail" },
        body: {
          en: "The dashboard, Kanban board, weekly sprint tracking, work log calendar, chats and settings are built in Angular with sample data. Connecting them to the API, with task and deliverable entities, is the next step.",
          fr: "Le tableau de bord, le Kanban, le suivi des sprints, le calendrier du journal de travail, les discussions et les réglages sont réalisés en Angular avec des données d'exemple. Les relier à l'API, avec des entités tâches et livrables, est l'étape suivante.",
        },
      },
    ],
    contribution: {
      intro: {
        en: "Two-person project, designed and developed together.",
        fr: "Projet en binôme, conçu et développé ensemble.",
      },
      items: {
        en: ["Co-designed and co-developed the platform: Figma prototype, site map, graphic charter, Angular front end and Spring Boot back end."],
        fr: ["Co-conception et co-développement de la plateforme : prototype Figma, arborescence, charte graphique, front-end Angular et back-end Spring Boot."],
      },
    },
    results: {
      metrics: [
        { value: "11", label: { en: "REST endpoints across two controllers", fr: "points d'accès REST dans deux contrôleurs" } },
        { value: "8", label: { en: "Angular screens", fr: "écrans Angular" } },
        { value: "3", label: { en: "roles: student, supervisor, administrator", fr: "rôles : étudiant, encadrant, administrateur" } },
      ],
      notes: {
        en: [
          "Accounts and projects work end to end, from the Angular forms to SQL Server. The work tracking screens show the intended experience with sample data.",
        ],
        fr: [
          "Les comptes et les projets fonctionnent de bout en bout, des formulaires Angular jusqu'à SQL Server. Les écrans de suivi du travail montrent l'expérience visée avec des données d'exemple.",
        ],
      },
    },
    gallery: [
      {
        src: "/images/projects/supflow/projects.webp",
        width: 1600,
        height: 821,
        alt: { en: "SupFlow projects page with project cards", fr: "Page des projets de SupFlow avec les fiches projet" },
        caption: { en: "Projects page, connected to the API.", fr: "Page des projets, reliée à l'API." },
      },
      {
        src: "/images/projects/supflow/create-project.webp",
        width: 1600,
        height: 821,
        alt: { en: "Create project form in SupFlow", fr: "Formulaire de création de projet dans SupFlow" },
        caption: { en: "Creating a project: type, class, supervisor, status and members.", fr: "Création d'un projet : type, classe, encadrant, statut et membres." },
      },
      {
        src: "/images/projects/supflow/kanban.webp",
        width: 1600,
        height: 821,
        alt: { en: "Kanban board with backlog, in progress and completed columns", fr: "Tableau Kanban avec les colonnes à faire, en cours et terminé" },
        caption: { en: "Kanban board of a project workspace.", fr: "Tableau Kanban de l'espace projet." },
      },
      {
        src: "/images/projects/supflow/sprint.webp",
        width: 1600,
        height: 821,
        alt: { en: "Weekly sprint tracking list with status, priority and remaining days", fr: "Suivi des sprints hebdomadaires avec statut, priorité et jours restants" },
        caption: { en: "Weekly sprint tracking.", fr: "Suivi des sprints hebdomadaires." },
      },
      {
        src: "/images/projects/supflow/work-logs.webp",
        width: 1600,
        height: 763,
        alt: { en: "Work log calendar with total time logged and notifications", fr: "Calendrier du journal de travail avec le temps total et les notifications" },
        caption: { en: "Work log calendar.", fr: "Calendrier du journal de travail." },
      },
    ],
    lessons: {
      en: [
        "Designing the whole site map first gave a clear target, but it was larger than one term allows; delivering fewer screens fully connected would have shown more.",
        "Hashing passwords in the back end from the first version is easy to do early and hard to retrofit later.",
      ],
      fr: [
        "Concevoir toute l'arborescence d'abord a donné une cible claire, mais plus large que ce que permet un semestre ; livrer moins d'écrans entièrement reliés aurait montré davantage.",
        "Hacher les mots de passe côté back-end dès la première version est simple à faire tôt et difficile à rattraper ensuite.",
      ],
    },
    links: [],
  },
  {
    slug: "finance-database",
    title: {
      en: "Relational Database for a Company's Financial Management",
      fr: "Base de données relationnelle pour la gestion financière d'une entreprise",
    },
    shortTitle: { en: "Finance database", fr: "BDD gestion financière" },
    category: { en: "Relational database · SQL", fr: "Base de données relationnelle · SQL" },
    period: { en: "2024–2025, semester 2", fr: "2024–2025, semestre 2" },
    context: { en: "Database course project · SUP'COM, first year", fr: "Projet du cours de bases de données · SUP'COM, 1re année" },
    team: { en: "Team of three", fr: "Équipe de trois" },
    role: { en: "Co-designer", fr: "Co-conceptrice" },
    status: { en: "Completed", fr: "Terminé" },
    summary: {
      en: "A relational database that centralises a company's financial data: bank accounts, transactions, loans, invoices, orders, clients, suppliers and employees. From the specification to the conceptual and relational models, then 30 SQL queries for reporting and financial analysis on Oracle.",
      fr: "Une base de données relationnelle qui centralise les données financières d'une entreprise : comptes bancaires, transactions, crédits, factures, commandes, clients, fournisseurs et employés. Du cahier des charges aux modèles conceptuel et relationnel, puis 30 requêtes SQL de reporting et d'analyse financière sous Oracle.",
    },
    lede: {
      en: "As a company grows, its financial flows become harder to follow: accounts, loans, invoices and payments end up in separate files, with duplicates and no traceability. This project designs a single relational database that keeps them consistent and makes financial reports a matter of queries.",
      fr: "Quand une entreprise grandit, ses flux financiers deviennent plus difficiles à suivre : comptes, crédits, factures et paiements finissent dans des fichiers séparés, avec des doublons et sans traçabilité. Ce projet conçoit une base de données relationnelle unique qui les garde cohérents et fait des rapports financiers une simple affaire de requêtes.",
    },
    tags: ["SQL", "Oracle", "Entity-relationship model", "Relational model"],
    cover: {
      src: "/images/projects/finance-database/conceptual-schema.webp",
      width: 971,
      height: 702,
      paper: true,
      alt: {
        en: "Conceptual entity-relationship schema of the financial management database",
        fr: "Schéma conceptuel entité-association de la base de gestion financière",
      },
    },
    overview: {
      en: [
        "Efficient financial processes are key to a company's profitability, transparency and decision-making. Without a shared data model, information about accounts, loans and invoices is duplicated and hard to reconcile.",
        "The project follows the full design path of a database: a specification with the functional needs, an entity-relationship model, its translation into a relational schema, then SQL queries that answer concrete management questions.",
      ],
      fr: [
        "Des processus financiers efficaces sont essentiels à la rentabilité, à la transparence et à la prise de décision d'une entreprise. Sans modèle de données commun, les informations sur les comptes, les crédits et les factures sont dupliquées et difficiles à rapprocher.",
        "Le projet suit tout le parcours de conception d'une base : un cahier des charges avec les besoins fonctionnels, un modèle entité-association, sa traduction en schéma relationnel, puis des requêtes SQL qui répondent à des questions de gestion concrètes.",
      ],
    },
    objectives: {
      en: [
        "Track expenses, revenue, bank accounts and balances in one place.",
        "Follow loans and repayments, with their bank, rate, duration and due date.",
        "Organise transactions and invoices to avoid duplicates and keep full traceability.",
        "Manage clients, orders, suppliers, products and employees around the same model.",
      ],
      fr: [
        "Suivre les dépenses, les revenus, les comptes bancaires et les soldes au même endroit.",
        "Suivre les crédits et leurs remboursements, avec leur banque, leur taux, leur durée et leur échéance.",
        "Organiser les transactions et les factures pour éviter les doublons et garantir la traçabilité.",
        "Gérer clients, commandes, fournisseurs, produits et employés autour du même modèle.",
      ],
    },
    architecture: {
      intro: {
        en: "Four deliverables, each building on the previous one: specification, conceptual model, relational model and SQL implementation.",
        fr: "Quatre livrables, chacun construit sur le précédent : cahier des charges, modèle conceptuel, modèle relationnel et implémentation SQL.",
      },
      steps: [
        {
          tag: { en: "Needs", fr: "Besoins" },
          label: { en: "Specification", fr: "Cahier des charges" },
          detail: {
            en: "Context, objectives, functional needs written as relations between entities, technical needs (Oracle, primary and foreign keys, indexing) and a plan.",
            fr: "Contexte, objectifs, besoins fonctionnels exprimés en relations entre entités, besoins techniques (Oracle, clés primaires et étrangères, indexation) et planning.",
          },
        },
        {
          tag: { en: "Model", fr: "Modèle" },
          label: { en: "Conceptual schema", fr: "Schéma conceptuel" },
          detail: {
            en: "An entity-relationship model with 11 entities, such as Company, Bank account, Transaction, Loan, Invoice, Order and Product, and their cardinalities.",
            fr: "Un modèle entité-association de 11 entités, dont Entreprise, Compte bancaire, Transaction, Crédit, Facture, Commande et Produit, avec leurs cardinalités.",
          },
        },
        {
          tag: { en: "Schema", fr: "Schéma" },
          label: { en: "Relational model", fr: "Modèle relationnel" },
          detail: {
            en: "18 tables: the entities plus association tables for the many-to-many links, such as order–product with a quantity or transaction–invoice.",
            fr: "18 tables : les entités, plus des tables d'association pour les liens plusieurs-à-plusieurs, comme commande–produit avec une quantité ou transaction–facture.",
          },
        },
        {
          tag: { en: "SQL", fr: "SQL" },
          label: { en: "Queries", fr: "Requêtes" },
          detail: {
            en: "30 queries on Oracle, from simple joins to financial analyses: debt ratios, unpaid invoices, monthly transaction trends, best-selling products.",
            fr: "30 requêtes sous Oracle, des jointures simples aux analyses financières : ratios d'endettement, factures impayées, évolution mensuelle des transactions, produits les plus vendus.",
          },
        },
      ],
    },
    stack: [
      { label: { en: "Database", fr: "Base de données" }, items: ["Oracle"] },
      { label: { en: "SQL", fr: "SQL" }, items: ["Joins & aggregates", "Subqueries & NOT EXISTS", "CTE & window functions (RANK)", "LISTAGG, EXTRACT"] },
      { label: { en: "Modelling", fr: "Modélisation" }, items: ["Entity-relationship model", "Relational model", "Primary & foreign keys"] },
    ],
    implementation: [
      {
        title: { en: "From needs to entities", fr: "Des besoins aux entités" },
        body: {
          en: "Each functional need was written as relations between entities: a company holds a bank account and takes several loans, a loan comes from a single bank, an invoice is linked to one order, paid by one client, issued by one employee and settled by one or more transactions. These sentences then became the cardinalities of the conceptual schema.",
          fr: "Chaque besoin fonctionnel a été exprimé en relations entre entités : une entreprise possède un compte bancaire et prend plusieurs crédits, un crédit provient d'une seule banque, une facture est associée à une commande, payée par un client, émise par un employé et réglée par une ou plusieurs transactions. Ces phrases sont ensuite devenues les cardinalités du schéma conceptuel.",
        },
      },
      {
        title: { en: "Relational schema", fr: "Schéma relationnel" },
        body: {
          en: "The conceptual model was translated into 18 tables with primary and foreign keys to guarantee consistency. Many-to-many relations got their own tables: order–product (with the quantity), order–invoice, transaction–invoice, supplier–product, invoice issuing and company management.",
          fr: "Le modèle conceptuel a été traduit en 18 tables, avec clés primaires et étrangères pour garantir la cohérence. Les relations plusieurs-à-plusieurs ont leurs propres tables : commande–produit (avec la quantité), commande–facture, transaction–facture, fournisseur–produit, émission des factures et direction des entreprises.",
        },
      },
      {
        title: { en: "Analytical queries", fr: "Requêtes d'analyse" },
        body: {
          en: "The 30 queries go from simple listings to analyses a finance team would ask for: the loan portfolio per company (total debt, annual interest, rate range), companies whose debt exceeds half of their bank balance, unpaid invoices per client, monthly transaction volume by type, the top three products per company with RANK() OVER, clients who ordered every product of a company (relational division with NOT EXISTS), and transactions far above a product's unit price.",
          fr: "Les 30 requêtes vont de simples listes aux analyses qu'une équipe financière demanderait : le portefeuille de crédits par entreprise (dette totale, intérêts annuels, fourchette de taux), les entreprises dont la dette dépasse la moitié du solde bancaire, les factures impayées par client, le volume mensuel des transactions par type, les trois produits les plus commandés par entreprise avec RANK() OVER, les clients ayant commandé tous les produits d'une entreprise (division relationnelle avec NOT EXISTS), et les transactions très supérieures au prix unitaire d'un produit.",
        },
      },
    ],
    contribution: {
      intro: {
        en: "Three-person project, from the specification to the final report.",
        fr: "Projet à trois, du cahier des charges au rapport final.",
      },
      items: {
        en: ["Co-designed the database: specification, conceptual and relational models, SQL queries and the final report."],
        fr: ["Co-conception de la base : cahier des charges, modèles conceptuel et relationnel, requêtes SQL et rapport final."],
      },
    },
    results: {
      metrics: [
        { value: "11", label: { en: "entities in the conceptual model", fr: "entités dans le modèle conceptuel" } },
        { value: "18", label: { en: "tables in the relational schema", fr: "tables dans le schéma relationnel" } },
        { value: "30", label: { en: "SQL queries, run on Oracle", fr: "requêtes SQL, exécutées sous Oracle" } },
      ],
      notes: {
        en: ["Each query in the report comes with its result on sample data, from order listings to the top products per company."],
        fr: ["Chaque requête du rapport est accompagnée de son résultat sur des données d'exemple, des listes de commandes aux produits les plus vendus par entreprise."],
      },
    },
    gallery: [
      {
        src: "/images/projects/finance-database/query-orders.webp",
        width: 432,
        height: 262,
        paper: true,
        alt: { en: "Query result listing ordered products with quantity and order date", fr: "Résultat de requête listant les produits commandés avec quantité et date" },
        caption: { en: "Query 1: products ordered, with quantity and date.", fr: "Requête 1 : produits commandés, avec quantité et date." },
      },
      {
        src: "/images/projects/finance-database/query-top-products.webp",
        width: 526,
        height: 125,
        paper: true,
        alt: { en: "Query result: most ordered product per company", fr: "Résultat de requête : produit le plus commandé par entreprise" },
        caption: { en: "Query 19: top products per company, with RANK() OVER.", fr: "Requête 19 : produits les plus commandés par entreprise, avec RANK() OVER." },
      },
    ],
    lessons: {
      en: [
        "Writing each need as a sentence (“an invoice is paid by one client”) made the cardinalities, and later the foreign keys, almost automatic.",
        "Association tables are where business data hides: the quantity belongs to the order–product link, not to the order or the product.",
        "Advanced SQL (window functions, relational division) turns reporting questions into a single query instead of manual work.",
      ],
      fr: [
        "Écrire chaque besoin sous forme de phrase (« une facture est payée par un seul client ») a rendu les cardinalités, puis les clés étrangères, presque automatiques.",
        "Les tables d'association portent des données métier : la quantité appartient au lien commande–produit, ni à la commande ni au produit.",
        "Le SQL avancé (fonctions de fenêtrage, division relationnelle) transforme une question de reporting en une seule requête au lieu d'un travail manuel.",
      ],
    },
    links: [],
  },
];

/**
 * Published projects, in display order. Slugs left out (industrial-defect-detection,
 * regulatory-knowledge-base) keep their content above but get no page and no listing.
 */
const published = [
  "technical-support-ai-agent",
  "smart-demand-response",
  "cure-medical-blockchain",
  "glutino",
  "supflow",
  "finance-database",
];

export const projects: Project[] = published.map((slug) => {
  const p = allProjects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown project slug: ${slug}`);
  return p;
});

/** Any written case study, published or not (internship pages reuse some of them). */
export function getCaseStudy(slug: string) {
  return allProjects.find((p) => p.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function neighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
