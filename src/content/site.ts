import type { L } from "@/lib/i18n";

/**
 * Site-wide content. Every visible string lives here or in projects.ts, written once per language.
 * Items marked PLACEHOLDER need information from Yassmine before going live.
 */

export const profile = {
  name: "Yassmine El Arbi",
  firstName: "Yassmine",
  lastName: "El Arbi",
  email: "yassmine.elarbi@supcom.tn",
  linkedin: "https://www.linkedin.com/in/yassmine-el-arbi",
  linkedinLabel: "in/yassmine-el-arbi",
  github: "https://github.com/yassmineelarbi",
  githubLabel: "github.com/yassmineelarbi",
  location: { en: "Ariana, Tunisia", fr: "Ariana, Tunisie" } as L,
  cv: { en: "/cv/Yassmine-El-Arbi-CV-EN.pdf", fr: "/cv/Yassmine-El-Arbi-CV-FR.pdf" } as L,
  /** Set to a path under /images/portrait/ once a portrait is chosen. null shows a marked placeholder. */
  portrait: { src: "/images/portrait/yassmine-el-arbi.webp", width: 323, height: 367 } as null | { src: string; width: number; height: number },
};

export const ui = {
  nav: {
    home: { en: "Home", fr: "Accueil" },
    about: { en: "About", fr: "À propos" },
    projects: { en: "Projects", fr: "Projets" },
    experience: { en: "Experience", fr: "Expérience" },
    leadership: { en: "Leadership", fr: "Leadership" },
    contact: { en: "Contact", fr: "Contact" },
    menu: { en: "Menu", fr: "Menu" },
    close: { en: "Close", fr: "Fermer" },
    skip: { en: "Skip to content", fr: "Aller au contenu" },
    language: { en: "Language", fr: "Langue" },
    primary: { en: "Main navigation", fr: "Navigation principale" },
  },
  actions: {
    explore: { en: "Explore my work", fr: "Voir mes projets" },
    contact: { en: "Contact me", fr: "Me contacter" },
    cv: { en: "Download CV", fr: "Télécharger le CV" },
    readCase: { en: "Read the case study", fr: "Lire l'étude de cas" },
    allProjects: { en: "All projects", fr: "Tous les projets" },
    backToProjects: { en: "Back to projects", fr: "Retour aux projets" },
    previous: { en: "Previous project", fr: "Projet précédent" },
    next: { en: "Next project", fr: "Projet suivant" },
    moreAbout: { en: "More about me", fr: "En savoir plus" },
    copy: { en: "Copy", fr: "Copier" },
    copied: { en: "Copied", fr: "Copié" },
    viewProject: { en: "Project page", fr: "Page du projet" },
    allInternships: { en: "All internships", fr: "Tous les stages" },
    backToInternships: { en: "Back to internships", fr: "Retour aux stages" },
    previousInternship: { en: "Previous internship", fr: "Stage précédent" },
    nextInternship: { en: "Next internship", fr: "Stage suivant" },
  },
  labels: {
    category: { en: "Category", fr: "Catégorie" },
    period: { en: "Period", fr: "Période" },
    context: { en: "Context", fr: "Cadre" },
    team: { en: "Team", fr: "Équipe" },
    role: { en: "My role", fr: "Mon rôle" },
    status: { en: "Status", fr: "Statut" },
    stack: { en: "Stack", fr: "Technologies" },
    email: { en: "Email", fr: "E-mail" },
    basedIn: { en: "Based in", fr: "Lieu" },
    placeholder: { en: "To be completed", fr: "À compléter" },
    stepStatus: {
      done: { en: "Done", fr: "Fait" },
      partial: { en: "Started", fr: "Amorcé" },
      next: { en: "Next", fr: "Prochaine étape" },
      planned: { en: "Planned", fr: "Prévu" },
    },
  },
  project: {
    overview: { en: "Overview", fr: "Vue d'ensemble" },
    objectives: { en: "Objectives", fr: "Objectifs" },
    architecture: { en: "Architecture & workflow", fr: "Architecture et workflow" },
    stack: { en: "Technologies", fr: "Technologies" },
    implementation: { en: "Implementation", fr: "Réalisation" },
    contribution: { en: "My contribution", fr: "Ma contribution" },
    results: { en: "Results & evaluation", fr: "Résultats et évaluation" },
    gallery: { en: "Visuals", fr: "Visuels" },
    lessons: { en: "Challenges & lessons", fr: "Difficultés et enseignements" },
    links: { en: "Links", fr: "Liens" },
  },
  footer: {
    rights: { en: "Designed and built by Yassmine El Arbi.", fr: "Conçu et développé par Yassmine El Arbi." },
  },
  notFound: {
    title: { en: "Page not found", fr: "Page introuvable" },
    body: { en: "This page does not exist or has moved.", fr: "Cette page n'existe pas ou a été déplacée." },
  },
};

export const meta = {
  home: {
    title: {
      en: "Yassmine El Arbi · AI engineering student",
      fr: "Yassmine El Arbi · Élève ingénieure en IA",
    },
    description: {
      en: "Final-year ICT engineering student at SUP'COM specializing in AI. Computer vision, AI agents, RAG and forecasting projects, each with its evaluation.",
      fr: "Élève ingénieure TIC en dernière année à SUP'COM, spécialisée en IA. Projets en vision par ordinateur, agents IA, RAG et prévision, chacun avec son évaluation.",
    },
  },
  about: {
    title: { en: "About · Yassmine El Arbi", fr: "À propos · Yassmine El Arbi" },
    description: {
      en: "Academic path, internships, engineering approach and goals of Yassmine El Arbi, AI engineering student at SUP'COM.",
      fr: "Parcours, stages, démarche d'ingénieure et objectifs de Yassmine El Arbi, élève ingénieure en IA à SUP'COM.",
    },
  },
  leadership: {
    title: { en: "Leadership & Involvement · Yassmine El Arbi", fr: "Leadership & engagement · Yassmine El Arbi" },
    description: {
      en: "Social and associative impact, entrepreneurship and innovation, hackathons and competitions: PACTE, IEEE WIE, Challenge Projets d'Entreprendre, Startup Studio and TSYP.",
      fr: "Impact social et associatif, entrepreneuriat et innovation, hackathons et compétitions : PACTE, IEEE WIE, Challenge Projets d'Entreprendre, Startup Studio et TSYP.",
    },
  },
  experience: {
    title: { en: "Experience · Yassmine El Arbi", fr: "Expérience · Yassmine El Arbi" },
    description: {
      en: "Internships at Amen Invest, SOMEF and Safran Electrical & Power, each with its case study.",
      fr: "Stages chez Amen Invest, SOMEF et Safran Electrical & Power, chacun avec son étude de cas.",
    },
  },
  projects: {
    title: { en: "Projects · Yassmine El Arbi", fr: "Projets · Yassmine El Arbi" },
    description: {
      en: "Case studies: an AI agent on AWS, energy forecasting, blockchain for health data, a Flutter mobile app, a full-stack web platform and a relational database.",
      fr: "Études de cas : un agent IA sur AWS, la prévision énergétique, la blockchain pour la santé, une application mobile Flutter, une plateforme web full stack et une base de données relationnelle.",
    },
  },
};

export const home = {
  status: {
    en: "Looking for an end-of-studies internship (PFE) in applied AI",
    fr: "À la recherche d'un stage de fin d'études (PFE) en IA appliquée",
  },
  role: {
    en: "ICT engineering student · SUP'COM · AI specialization",
    fr: "Élève ingénieure TIC · SUP'COM · Spécialité IA",
  },
  intro: {
    en: "Final-year engineering student at SUP'COM, specializing in artificial intelligence.",
    fr: "Élève ingénieure en dernière année à SUP'COM, spécialisée en intelligence artificielle.",
  },
  lede: {
    en: "My work revolves around designing and building intelligent systems, from machine learning models and AI agents to data-driven applications. I approach engineering with a focus on understanding problems, making thoughtful technical decisions, and developing solutions turning complex ideas into practical, reliable systems.",
    fr: "Mon travail consiste à concevoir et à développer des systèmes intelligents, des modèles de machine learning et des agents IA jusqu'aux applications pilotées par les données. J'aborde l'ingénierie en cherchant d'abord à comprendre les problèmes, en prenant des décisions techniques réfléchies et en développant des solutions qui transforment des idées complexes en systèmes concrets et fiables.",
  },
  sections: {
    about: { en: "About", fr: "À propos" },
    work: { en: "Projects", fr: "Projets" },
    workTitle: { en: "Exploring, Building, Engineering", fr: "Explorer, construire, concevoir" },
    experience: { en: "Experience", fr: "Expérience" },
    experienceTitle: { en: "Internships", fr: "Stages" },
    skills: { en: "Toolkit", fr: "Compétences" },
    skillsTitle: { en: "What I work with", fr: "Mes outils" },
    education: { en: "Education", fr: "Formation" },
    educationTitle: { en: "Education", fr: "Formation" },
    leadership: { en: "Leadership", fr: "Leadership" },
    leadershipTitle: { en: "Leadership\n& Involvement", fr: "Leadership\n& engagement" },
    leadershipMore: { en: "See the details", fr: "Voir le détail" },
    research: { en: "Research", fr: "Recherche" },
    researchTitle: { en: "Academic Research", fr: "Recherche académique" },
    contact: { en: "Contact", fr: "Contact" },
  },
  about: {
    title: { en: "Engineering AI for real-world challenges", fr: "Concevoir l'IA pour les défis du réel" },
    paragraphs: {
      en: [
        "I am in the final year of the engineering cycle in Information and Communication Technologies at SUP'COM, the Higher School of Communications of Tunis, where I specialize in AI. I joined after two years of preparatory classes at IPEIT and ranked 47th in the national engineering entrance exam.",
        "Three internships shaped how I work: full-stack development at Safran Electrical & Power, computer vision for quality control at SOMEF, and a remote AI internship at Amen Invest on a regulatory knowledge base. I am particularly interested in applied AI and the challenges of making intelligent systems work beyond controlled environments. Whether dealing with limited data, complex information retrieval, or forecasting, I enjoy exploring how the right combination of models, engineering, and evaluation can turn challenging problems into practical solutions.",
      ],
      fr: [
        "Je suis en dernière année du cycle ingénieur en Technologies de l'Information et de la Communication à SUP'COM, l'École Supérieure des Communications de Tunis, où je suis spécialisée en IA. J'y suis entrée après deux années de classes préparatoires à l'IPEIT, classée 47e au concours national d'entrée aux écoles d'ingénieurs.",
        "Trois stages ont façonné ma manière de travailler : le développement full-stack chez Safran Electrical & Power, la vision par ordinateur pour le contrôle qualité chez SOMEF, et un stage IA à distance chez Amen Invest sur une base de connaissances réglementaire. Je m'intéresse particulièrement à l'IA appliquée et aux défis que pose le fonctionnement des systèmes intelligents hors des environnements contrôlés. Qu'il s'agisse de données limitées, de recherche d'information complexe ou de prévision, j'aime explorer comment la bonne combinaison de modèles, d'ingénierie et d'évaluation peut transformer des problèmes difficiles en solutions concrètes.",
      ],
    },
    approachTitle: { en: "How I approach a project", fr: "Ma démarche" },
    approach: [
      {
        k: { en: "Understand", fr: "Comprendre" },
        v: {
          en: "Start by understanding the problem, its constraints, and the objectives. Identify what matters most before choosing the tools or defining an approach.",
          fr: "Commencer par comprendre le problème, ses contraintes et ses objectifs. Identifier ce qui compte le plus avant de choisir les outils ou de définir une approche.",
        },
      },
      {
        k: { en: "Build", fr: "Construire" },
        v: {
          en: "Turn ideas into working solutions through structured implementation. Prioritize a functional first version that can be tested, evaluated, and improved.",
          fr: "Transformer les idées en solutions qui fonctionnent grâce à une mise en œuvre structurée. Privilégier une première version fonctionnelle, que l'on peut tester, évaluer et améliorer.",
        },
      },
      {
        k: { en: "Evaluate", fr: "Évaluer" },
        v: {
          en: "Measure performance against clear objectives and reliable baselines. Let evidence guide decisions rather than assumptions, and be transparent about the results.",
          fr: "Mesurer les performances par rapport à des objectifs clairs et à des références fiables. Laisser les preuves guider les décisions plutôt que les suppositions, et rester transparente sur les résultats.",
        },
      },
      {
        k: { en: "Refine", fr: "Affiner" },
        v: {
          en: "Improve through continuous, controlled iterations. Document changes, track experiments, and preserve the evidence behind technical decisions.",
          fr: "Améliorer par itérations continues et maîtrisées. Documenter les changements, suivre les expériences et conserver les preuves qui justifient les choix techniques.",
        },
      },
    ],
  },
  contact: {
    title: { en: "Let's build\nAI", fr: "Construisons\nl'IA" },
    body: {
      en: "I am looking for an end-of-studies internship (PFE, 4 to 6 months) in applied AI: agents, retrieval, or machine learning systems meant for production. If you have a subject in mind, or a question about one of these projects, write to me.",
      fr: "Je recherche un stage de fin d'études (PFE, 4 à 6 mois) en IA appliquée : agents, recherche documentaire augmentée ou systèmes de machine learning destinés à la production. Si vous avez un sujet en tête, ou une question sur l'un de ces projets, écrivez-moi.",
    },
    form: {
      title: { en: "Send me a message", fr: "M'envoyer un message" },
      name: { en: "Name", fr: "Nom" },
      email: { en: "Your email", fr: "Votre e-mail" },
      message: { en: "Message", fr: "Message" },
      messagePlaceholder: {
        en: "An internship subject, a question about a project…",
        fr: "Un sujet de stage, une question sur un projet…",
      },
      send: { en: "Send message", fr: "Envoyer" },
      sending: { en: "Sending…", fr: "Envoi…" },
      success: {
        en: "Thank you, your message has been sent. I will get back to you soon.",
        fr: "Merci, votre message a bien été envoyé. Je vous réponds rapidement.",
      },
      error: {
        en: "The message could not be sent. Please try again, or write to me directly by email.",
        fr: "Le message n'a pas pu être envoyé. Réessayez, ou écrivez-moi directement par e-mail.",
      },
      subject: { en: "New message from your portfolio", fr: "Nouveau message depuis ton portfolio" },
    },
  },
};

export type Experience = {
  company: string;
  role: L;
  period: L;
  place: L;
  summary: L;
  points: L<string[]>;
  project?: string; // slug of the related project page
  caseStudy?: string; // slug of the internship page under /experience/
  logo?: { src: string; width: number; height: number };
};

export const experience: Experience[] = [
  {
    company: "Amen Invest",
    caseStudy: "amen-invest",
    logo: { src: "/images/logos/amen-invest.webp", width: 480, height: 158 },
    role: {
      en: "AI Intern · Regulatory and tax knowledge base",
      fr: "Stagiaire IA · Base de connaissances réglementaire et fiscale",
    },
    period: { en: "Sep 2026 – present", fr: "sept. 2026 – aujourd'hui" },
    place: { en: "Tunisia · remote · supervised project", fr: "Tunisie · à distance · projet tutoré" },
    summary: {
      en: "BNI-AI (Bibliothèque Normative Intelligente, an intelligent regulatory library) is an internal knowledge-management platform built for Amen Invest and augmented by generative AI. It brings together legal, tax and regulatory texts and the advisors' expertise in a bilingual French/Arabic repository that can be queried in natural language. Thanks to a multi-agent RAG architecture, every answer cites its sources and receives a reliability score; when that score is too low, an expert validates the answer. The platform also runs automatic regulatory monitoring and drafts an annual wealth letter for clients. Finally, it offers clients tax assistance: simulation of the income tax return, the wealth tax and the CEA (equity savings account), optimization advice and a personalized report, with amounts calculated by Amen Invest's own engines.",
      fr: "BNI-AI (Bibliothèque Normative Intelligente) est une plateforme interne de gestion des connaissances, augmentée par l'IA générative, conçue pour Amen Invest. Elle réunit les textes juridiques, fiscaux et réglementaires et l'expertise des conseillers dans un référentiel bilingue français/arabe, interrogeable en langage naturel. Grâce à une architecture RAG multi-agents, chaque réponse cite ses sources et reçoit un score de fiabilité ; si ce score est trop bas, un expert valide la réponse. La plateforme assure aussi une veille réglementaire automatique et rédige une lettre patrimoniale annuelle pour les clients. Elle leur offre enfin une assistance fiscale : simulation de la déclaration de revenus, de l'impôt sur la fortune et du CEA, conseils d'optimisation et rapport personnalisé, avec des montants calculés par les moteurs d'Amen Invest.",
    },
    points: { en: [], fr: [] },
  },
  {
    company: "SOMEF",
    caseStudy: "somef",
    logo: { src: "/images/logos/somef.webp", width: 269, height: 335 },
    role: {
      en: "Computer Vision & AI Intern · Quality control",
      fr: "Stagiaire Vision par ordinateur & IA · Contrôle qualité",
    },
    period: { en: "Jun – Aug 2026", fr: "juin – août 2026" },
    place: { en: "Tunisia · R&D department", fr: "Tunisie · Département R&D" },
    summary: {
      en: "The SOMEF project automates the quality control of a switch plate with computer vision, classifying each part as conforming or defective across four defect families. Images are captured on a fixed bench with locked settings. Four approaches were tested: fixed rules in OpenCV, an SVM classifier on handcrafted features, a ResNet18 CNN with transfer learning, and PaDiM anomaly detection. The retained solution is hybrid: PaDiM handles shape defects, with final scores of 94.9% precision, 97.4% recall and 96.1% F1-score, while a simple threshold on the b* component of the LAB colour space detects yellowing.",
      fr: "Le projet SOMEF vise à automatiser le contrôle qualité d'une plaque d'interrupteur par vision artificielle, en classant chaque pièce comme conforme ou défectueuse selon quatre familles de défauts. Les images sont prises sur un banc fixe aux réglages verrouillés. Quatre approches ont été testées : des règles fixes sous OpenCV, un classifieur SVM sur descripteurs, un CNN ResNet18 par transfert d'apprentissage et la détection d'anomalies PaDiM. La solution retenue est hybride : PaDiM traite les défauts de forme, avec des performances finales de 94,9 % de précision, 97,4 % de rappel et 96,1 % de F1-score, et un simple seuil sur la composante b* de l'espace LAB détecte le jaunissement.",
    },
    points: { en: [], fr: [] },
  },
  {
    company: "Safran Electrical & Power",
    caseStudy: "safran",
    logo: { src: "/images/logos/safran.webp", width: 480, height: 134 },
    role: { en: "Full-Stack Development Intern", fr: "Stagiaire en développement Full-Stack" },
    period: { en: "Jun – Jul 2025", fr: "juin – juil. 2025" },
    place: { en: "Tunisia", fr: "Tunisie" },
    summary: {
      en: "An introduction to Spring Boot and Angular through a small full-stack application with CRUD operations.",
      fr: "Une initiation à Spring Boot et Angular à travers une petite application full-stack avec opérations CRUD.",
    },
    points: {
      en: [
        "Designed the REST API in Spring Boot and the Angular screens for each entity, on a SQL Server database.",
        "Tested the endpoints with Postman before wiring them into the front end.",
      ],
      fr: [
        "Conception de l'API REST en Spring Boot et des écrans Angular pour chaque entité, sur une base SQL Server.",
        "Tests des endpoints avec Postman avant leur intégration dans le front-end.",
      ],
    },
  },
];

export const skills: { title: L; items: string[]; note?: L }[] = [
  {
    title: { en: "Generative AI & agents", fr: "IA générative & agents" },
    items: [
      "LLMs, prompting, embeddings",
      "RAG, GraphRAG",
      "Hybrid search (vector + BM25, RRF)",
      "Multi-agent orchestration (LangGraph)",
      "Answer verification",
      "AWS Bedrock, AgentCore",
    ],
  },
  {
    title: { en: "Machine learning & vision", fr: "Machine learning & vision" },
    items: [
      "PyTorch, scikit-learn, XGBoost",
      "Anomaly detection (PaDiM, anomalib)",
      "Transfer learning (ResNet)",
      "OpenCV, CIELAB colour analysis",
      "SHAP, Grad-CAM",
      "Benchmarking & threshold calibration",
    ],
  },
  {
    title: { en: "Data & time series", fr: "Données & séries temporelles" },
    items: [
      "pandas, NumPy, PyArrow",
      "Forecasting (TinyTimeMixer, Ridge)",
      "Clustering (K-means), NILM",
      "AWS Glue, Athena, Step Functions",
      "Data leakage controls",
    ],
  },
  {
    title: { en: "Software & cloud", fr: "Logiciel & cloud" },
    items: [
      "Python, C/C++, Java",
      "FastAPI, Spring Boot, Streamlit",
      "Angular, TypeScript",
      "SQL, PostgreSQL, Neo4j, MongoDB",
      "Docker, Git, GitHub Actions",
      "Solidity, Ethereum, IPFS",
    ],
  },
];

export const education = [
  {
    school: "SUP'COM",
    full: { en: "Higher School of Communications of Tunis", fr: "École Supérieure des Communications de Tunis" },
    degree: {
      en: "Engineering degree in Information and Communication Technologies · AI specialization",
      fr: "Diplôme d'ingénieur en Technologies de l'Information et de la Communication · Spécialité IA",
    },
    period: { en: "2024 – present", fr: "2024 – aujourd'hui" },
    note: null as null | L,
  },
  {
    school: "IPEIT",
    full: {
      en: "Preparatory Institute for Engineering Studies of Tunis",
      fr: "Institut Préparatoire aux Études d'Ingénieurs de Tunis",
    },
    degree: { en: "Preparatory classes for engineering schools", fr: "Classes préparatoires aux écoles d'ingénieurs" },
    period: { en: "2022 – 2024", fr: "2022 – 2024" },
    note: {
      en: "Ranked 47th in the national engineering entrance exam",
      fr: "Classée 47e au Concours national d'entrée aux écoles d'ingénieurs",
    } as null | L,
  },
  {
    school: { en: "Baccalaureate", fr: "Baccalauréat" },
    full: null,
    degree: { en: "Experimental Sciences", fr: "Sciences expérimentales" },
    period: { en: "2022", fr: "2022" },
    note: null as null | L,
  },
];

export const certifications = [
  {
    issuer: "AWS Academy",
    items: {
      en: ["Generative AI Foundations", "Machine Learning Foundations", "Data Engineering", "Cloud Foundations"],
      fr: ["Generative AI Foundations", "Machine Learning Foundations", "Data Engineering", "Cloud Foundations"],
    },
  },
  {
    issuer: "MATLAB",
    items: {
      en: ["Machine Learning Techniques", "Deep Learning Techniques for Image Applications"],
      fr: ["Machine Learning Techniques", "Deep Learning Techniques for Image Applications"],
    },
  },
];

export const languages: { name: L; level?: L }[] = [
  { name: { en: "Arabic", fr: "Arabe" } },
  { name: { en: "English", fr: "Anglais" }, level: { en: "TOEIC 915", fr: "TOEIC 915" } },
  { name: { en: "French", fr: "Français" } },
];

export type InvolvementItem = {
  title: L;
  org: L;
  period?: L;
  kind: "award" | "role" | "project";
  summary: L;
  points?: L<string[]>;
  link?: { to: string; label: L };
  blurb?: L; // short description shown on the home page
  caseStudy?: string; // slug of a detail page at /leadership/<slug>/
};

/** Leadership & Involvement, in three groups. The home page lists titles; /leadership/ shows the details. */
export const involvement: { id: string; title: L; intro: L; items: InvolvementItem[] }[] = [
  {
    id: "entrepreneurship",
    title: { en: "Entrepreneurship & Innovation", fr: "Entrepreneuriat et innovation" },
    intro: {
      en: "Turning a problem into a product and a business model.",
      fr: "Transformer un problème en produit et en modèle économique.",
    },
    items: [
      {
        kind: "project",
        title: { en: "Challenge Projets d'Entreprendre, 19th edition: Rafiqni", fr: "Challenge Projets d'Entreprendre, 19e édition : Rafiqni" },
        org: { en: "SUP'COM · team of six", fr: "SUP'COM · équipe de six" },
        period: { en: "2025–2026", fr: "2025–2026" },
        caseStudy: "rafiqni",
        blurb: {
          en: "A startup imagined in one week: a mobile platform connecting people with reduced mobility with students offering home services and with certified drivers.",
          fr: "Une startup imaginée en une semaine : une plateforme mobile qui relie les personnes à mobilité réduite à des étudiants proposant des services à domicile et à des chauffeurs certifiés.",
        },
        summary: {
          en: "Rafiqni (رافقني, “accompany me”) is a mobile platform that connects people with reduced mobility with students offering home services (cleaning, shopping, care) and with drivers carrying a “PMR” label, through a partnership with ride-hailing apps.",
          fr: "Rafiqni (رافقني, « accompagne-moi ») est une plateforme mobile qui met en relation les personnes à mobilité réduite avec des étudiants proposant des services à domicile (ménage, courses, soins) et avec des chauffeurs labellisés « PMR », grâce à un partenariat avec des applications de transport.",
        },
        points: {
          en: [
            "The need: people with reduced mobility represent 15.5% of Tunisia's population; adapted transport and home services exist but are expensive or unsuitable, while students look for jobs to fund their studies.",
            "Competition: a dedicated transport operator with a heavy fleet-based model, private home-care agencies priced beyond the middle class, ride-hailing apps with no filter for reduced mobility, and informal Facebook groups with no verification or insurance.",
            "The model: geolocated matching and a commission on services, with value for all three sides: autonomy for users, flexible income for students, differentiation for drivers.",
          ],
          fr: [
            "Le besoin : les personnes à mobilité réduite représentent 15,5 % de la population tunisienne ; le transport adapté et les services à domicile existent mais sont chers ou inadaptés, alors que les étudiants cherchent des jobs pour financer leurs études.",
            "La concurrence : un opérateur de transport adapté au modèle lourd fondé sur l'achat de flotte, des agences de soins à domicile hors de portée de la classe moyenne, des applications de transport sans filtre PMR, et des groupes Facebook informels sans vérification ni assurance.",
            "Le modèle : un matching géolocalisé et une commission sur les services, avec une valeur pour les trois parties : autonomie pour les PMR, revenu flexible pour les étudiants, différenciation pour les chauffeurs.",
          ],
        },
      },
      {
        kind: "project",
        title: { en: "Startup Studio: Glutino", fr: "Startup Studio : Glutino" },
        org: {
          en: "Technological Innovation Management (MIT) track · SUP'COM",
          fr: "Option Management de l'Innovation Technologique (MIT) · SUP'COM",
        },
        summary: {
          en: "In the Startup Studio class of the MIT track, Glutino was taken from an idea to a startup pitch: a mobile app for people who live gluten-free, with the problem, the main features and the scope of a first MVP.",
          fr: "Dans le cours Startup Studio de l'option MIT, Glutino est passé d'une idée à un pitch de startup : une application mobile pour les personnes qui vivent sans gluten, avec le problème, les fonctionnalités principales et le périmètre d'un premier MVP.",
        },
        link: { to: "projects/glutino", label: { en: "See the Glutino case study", fr: "Voir l'étude de cas Glutino" } },
      },
    ],
  },
  {
    id: "social",
    title: { en: "Social & Associative Impact", fr: "Impact social et associatif" },
    intro: {
      en: "Field projects with associations, and roles in the IEEE student community.",
      fr: "Des actions de terrain avec des associations, et des rôles dans la communauté étudiante IEEE.",
    },
    items: [
      {
        kind: "award",
        title: { en: "PACTE: Flamme Bleue · Best PACTE Project Award", fr: "PACTE : Flamme Bleue · Prix du meilleur projet PACTE" },
        org: { en: "PACTE program · SUP'COM", fr: "Programme PACTE · SUP'COM" },
        period: { en: "2024–2025", fr: "2024–2025" },
        caseStudy: "flamme-bleue",
        blurb: {
          en: "An awareness campaign against school bullying, cyberbullying and sexual harassment in a public high school, with two partner associations.",
          fr: "Une campagne de sensibilisation contre le harcèlement scolaire, le cyberharcèlement et le harcèlement sexuel dans un lycée public, avec deux associations partenaires.",
        },
        summary: {
          en: "Flamme Bleue is an awareness project against school bullying, cyberbullying and sexual harassment, for high-school students aged 15 to 18 and their teachers, run with two partner associations: Health & Psychology and SAWN.",
          fr: "Flamme Bleue est un projet de sensibilisation contre le harcèlement scolaire, le cyberharcèlement et le harcèlement sexuel, destiné aux lycéens de 15 à 18 ans et à l'équipe pédagogique, mené avec deux associations partenaires : Health & Psychology et SAWN.",
        },
        points: {
          en: [
            "Two workshops at Lycée Route de la Plage in Soliman: 53 students on bullying and cyberbullying with three psychologists from Health & Psychology, then 45 participants on sexual abuse with SAWN.",
            "A chatbot offering anonymous support to students, introduced during the second workshop.",
            "A podcast on cyberbullying and mental health with a psychologist, produced with SupCast, plus social media content made with the associations.",
            "A fundraising evening for SUP'COM students to finance the actions.",
            "Anonymous questionnaires before and after each workshop; 208 followers on the project pages, and a student's proposal to create an awareness club in her school.",
            "A pitch to a jury of NGO practitioners at the closing ceremony, rewarded with the Best PACTE Project Award.",
          ],
          fr: [
            "Deux ateliers au lycée Route de la Plage de Soliman : 53 lycéens sur le harcèlement et le cyberharcèlement avec trois psychologues de Health & Psychology, puis 45 participants sur les abus sexuels avec SAWN.",
            "Un chatbot de soutien anonyme pour les élèves, présenté lors du second atelier.",
            "Un podcast sur le cyberharcèlement et la santé mentale avec une psychologue, réalisé avec SupCast, et des contenus pour les réseaux sociaux conçus avec les associations.",
            "Une soirée de collecte de fonds pour les étudiants de SUP'COM afin de financer les actions.",
            "Des questionnaires anonymes avant et après chaque atelier ; 208 abonnés sur les pages du projet, et la proposition d'une élève de créer un club de sensibilisation dans son lycée.",
            "Un pitch devant un jury d'acteurs d'ONG lors de la cérémonie de clôture, récompensé par le prix du meilleur projet PACTE.",
          ],
        },
      },
      {
        kind: "role",
        title: { en: "Webmaster, IEEE WIE Affinity Group", fr: "Webmaster, IEEE WIE Affinity Group" },
        org: { en: "IEEE SUP'COM Student Branch", fr: "Branche étudiante IEEE SUP'COM" },
        period: { en: "Jun 2025 – Jun 2026", fr: "juin 2025 – juin 2026" },
        blurb: {
          en: "In charge of the digital presence of the Women in Engineering group; contributed to events such as Pink October and WIEmpower.",
          fr: "Responsable de la présence numérique du groupe Women in Engineering ; contribution à des événements comme Octobre Rose et WIEmpower.",
        },
        summary: {
          en: "As webmaster of the Women in Engineering affinity group, I was in charge of its digital presence: the content and visuals that carry the group's activities online. I contributed to many events, such as Pink October and WIEmpower.",
          fr: "En tant que webmaster du groupe d'affinité Women in Engineering, j'étais responsable de sa présence numérique : les contenus et visuels qui font vivre les activités du groupe en ligne. J'ai contribué à de nombreux événements, comme Octobre Rose et WIEmpower.",
        },
        points: {
          en: [
            "Led working groups and managed members.",
            "Social media, podcasts, design and video editing.",
            "Hosted workshops.",
            "Volunteered in activities with NGOs and with children in schools and high schools.",
            "Worked on technical challenges and took part in hackathons and national congresses.",
          ],
          fr: [
            "Animation de groupes de travail et gestion des membres.",
            "Réseaux sociaux, podcasts, design et montage vidéo.",
            "Animation d'ateliers.",
            "Bénévolat dans des activités avec des ONG et avec des enfants dans des écoles et des lycées.",
            "Travail sur des défis techniques et participation à des hackathons et à des congrès nationaux.",
          ],
        },
      },
      {
        kind: "project",
        title: { en: "Podcasts", fr: "Podcasts" },
        org: { en: "IEEE WIE SUP'COM · TSYP", fr: "IEEE WIE SUP'COM · TSYP" },
        blurb: {
          en: "Podcasts on many subjects, from event coverage to how AI can grow responsibly while staying rooted in human values.",
          fr: "Des podcasts sur de nombreux sujets, de la médiatisation d'événements à la façon dont l'IA peut grandir de manière responsable en restant ancrée dans les valeurs humaines.",
        },
        summary: {
          en: "I made podcasts on many subjects, such as the media coverage of events, and one on how AI can grow responsibly while staying rooted in morals, human values and the Sustainable Development Goals. Preparing and hosting them strengthened my communication skills and my public speaking.",
          fr: "J'ai réalisé des podcasts sur de nombreux sujets, comme la médiatisation des événements, et l'un sur la façon dont l'IA peut grandir de manière responsable tout en restant ancrée dans la morale, les valeurs humaines et les Objectifs de développement durable. Les préparer et les animer a renforcé mes compétences en communication et ma prise de parole en public.",
        },
      },
      {
        kind: "role",
        title: { en: "Ambassador, TSYP13", fr: "Ambassadrice, TSYP13" },
        org: { en: "IEEE SUP'COM Student Branch", fr: "Branche étudiante IEEE SUP'COM" },
        summary: {
          en: "The single ambassador of the SUP'COM student branch for TSYP13, the link between the branch and the congress organising committee. Also design and media manager, organising several events.",
          fr: "Unique ambassadrice de la branche étudiante SUP'COM pour le TSYP13, le lien entre la branche et le comité d'organisation du congrès. Également responsable design et médias, avec l'organisation de plusieurs événements.",
        },
      },
    ],
  },
  {
    id: "competitions",
    title: { en: "Hackathons & Competitions", fr: "Hackathons et compétitions" },
    intro: {
      en: "Technical challenges at TSYP, the Tunisia Students and Young Professionals Congress of the IEEE Tunisia Section.",
      fr: "Défis techniques au TSYP, le Tunisia Students and Young Professionals Congress de l'IEEE Tunisia Section.",
    },
    items: [
      {
        kind: "award",
        title: { en: "1st place, WIE STAR Challenge", fr: "1re place, WIE STAR Challenge" },
        org: { en: "TSYP12 · IEEE Tunisia Section", fr: "TSYP12 · IEEE Tunisia Section" },
        blurb: {
          en: "AI and robotics workshops at Sadiki High School, and Talimis, a learning platform to draw students, especially girls, towards STEM.",
          fr: "Des ateliers d'IA et de robotique au lycée Sadiki, et Talimis, une plateforme d'apprentissage pour attirer les élèves, surtout les filles, vers les STEM.",
        },
        summary: {
          en: "A challenge to draw high-school students, especially girls, towards STEM. We led AI and robotics workshops at Sadiki High School and built Talimis, a learning platform with technology courses, a resource engine, study tools and webinars for teachers.",
          fr: "Un challenge pour attirer les lycéens, surtout les filles, vers les STEM. Nous avons animé des ateliers d'IA et de robotique au lycée Sadiki et conçu Talimis, une plateforme d'apprentissage avec des cours sur les nouvelles technologies, un moteur de ressources, des outils d'étude et des webinaires pour les enseignants.",
        },
      },
      {
        kind: "award",
        title: { en: "2nd place, TSYP13 Technical Challenge", fr: "2e place, TSYP13 Technical Challenge" },
        org: { en: "IEEE EMBS, CIS & WIE", fr: "IEEE EMBS, CIS & WIE" },
        blurb: {
          en: "Etma'En, an AI web platform helping mothers follow their children's emotional health and nutrition.",
          fr: "Etma'En, une plateforme web IA qui aide les mères à suivre la santé émotionnelle et la nutrition de leurs enfants.",
        },
        summary: {
          en: "A challenge on women's and children's well-being in Tunisia. We built Etma'En, a web platform for mothers: a chatbot on reliable medical knowledge, computer vision that reads emotions in children's drawings, and a nutrition module that recognises food from photos and suggests affordable healthy meals.",
          fr: "Un challenge sur le bien-être des femmes et des enfants en Tunisie. Nous avons conçu Etma'En, une plateforme web pour les mères : un chatbot fondé sur des connaissances médicales fiables, de la vision par ordinateur qui lit les émotions dans les dessins d'enfants, et un module nutrition qui reconnaît les aliments en photo et propose des repas sains et abordables.",
        },
      },
    ],
  },
];

export type ResearchItem = { title: L; context: L; period: L; summary: L; points: L<string[]>; tags: string[] };

/** Academic research, shown on the home page. */
export const research: ResearchItem[] = [
  {
    title: {
      en: "Inference cost optimization in multi-agent systems",
      fr: "Optimisation du coût d'inférence d'un système multi-agents",
    },
    context: { en: "Research project · INDP3-MIT, SUP'COM", fr: "Projet de recherche · INDP3-MIT, SUP'COM" },
    period: { en: "2026–2027", fr: "2026–2027" },
    summary: {
      en: "In a multi-agent system, one user question triggers several LLM calls billed per token, and prices vary by a factor of about 40 between a small and a large model. The study looks for the lowest running cost without degrading answer quality, under latency, confidentiality and budget constraints.",
      fr: "Dans un système multi-agents, une seule question déclenche plusieurs appels de modèles facturés au token, et le prix varie d'environ 1 à 40 entre un petit et un grand modèle. L'étude cherche le coût de fonctionnement le plus bas sans dégrader la qualité des réponses, sous contraintes de latence, de confidentialité et de budget.",
    },
    points: {
      en: [
        "An architecture where no agent calls a model directly: a gateway meters every call, a cache avoids paying twice for the same answer, a router sends each task to the cheapest model able to handle it, and a FinOps module manages the budget.",
        "Fixed, variable, average and marginal cost functions built from public prices (November 2026), comparing four strategies (large model only, routing, routing with cache, self-hosted GPU) across four volume and complexity scenarios.",
        "A linear program under quality and latency constraints sets the recommended routing policy.",
        "In simulation, routing alone saves 7.99% at 10,000 mostly simple requests a month, and self-hosting could cut the bill by 79.83% at one million if a single GPU suffices. The API/GPU break-even moves from about 899,000 to over 1.16 million requests with the updated GPU price, hence a progressive, revisable policy.",
      ],
      fr: [
        "Une architecture où aucun agent n'appelle un modèle directement : une gateway mesure chaque appel, un cache évite de payer deux fois la même réponse, un routeur confie chaque tâche au modèle le moins cher capable de la traiter, et un module FinOps pilote le budget.",
        "Des fonctions de coût fixe, variable, moyen et marginal établies à partir des prix publics (novembre 2026), pour comparer quatre stratégies (grand modèle seul, routage, routage avec cache, GPU auto-hébergé) dans quatre scénarios de volume et de complexité.",
        "Un programme linéaire sous contraintes de qualité et de latence fixe la politique de routage recommandée.",
        "En simulation, le routage seul économise 7,99 % à 10 000 demandes surtout simples par mois, et l'auto-hébergement pourrait réduire la facture de 79,83 % à un million si un GPU suffit. Le seuil API/GPU passe d'environ 899 000 à plus de 1,16 million de requêtes avec le tarif GPU actualisé : d'où une politique progressive et révisable.",
      ],
    },
    tags: ["Multi-agent systems", "LLM routing", "Semantic cache", "FinOps", "Linear programming"],
  },
  {
    title: {
      en: "Innovation management: the DXC Technology case",
      fr: "Management de l'innovation : le cas DXC Technology",
    },
    context: { en: "Innovation management course · INDP3-MIT, SUP'COM", fr: "Cours de management de l'innovation · INDP3-MIT, SUP'COM" },
    period: { en: "2026–2027", fr: "2026–2027" },
    summary: {
      en: "How to introduce an innovation into a company and study its effects, applied to DXC Technology, an IT services company whose project- and volume-based model is being reshaped by generative AI, the cloud and automation.",
      fr: "Comment introduire une innovation dans une entreprise et étudier ses effets, appliqué à DXC Technology, une entreprise de services IT dont le modèle fondé sur les projets et le volume est transformé par l'IA générative, le cloud et l'automatisation.",
    },
    points: {
      en: [
        "Starting point: DXC's two-track strategy (a Core Track for its historical activities, a Fast Track for new AI-based activities with its LabX incubator) and its current Business Model Canvas.",
        "The client problem: according to MIT NANDA's 2025 report, 95% of the organisations studied get no measurable return from their generative AI initiatives, and the main obstacles are organisational.",
        "The proposed innovation, the DXC Transformation Portfolio Office: moving from isolated projects to the dynamic management of a client's whole transformation portfolio (identify, evaluate, prioritise, allocate, measure, reallocate), with a value register, AI governance agents under human decision and an anonymised cross-client benchmark.",
        "Its effects: a Business Model Canvas after the innovation, with subscription and outcome-based revenue and projects fed back to the core business, then strategic, managerial and operational recommendations, including a four-phase roadmap over 36 months.",
      ],
      fr: [
        "Point de départ : la stratégie à deux voies de DXC (un Core Track pour les activités historiques, un Fast Track pour les nouvelles activités fondées sur l'IA, avec l'incubateur LabX) et son Business Model Canvas actuel.",
        "Le problème client : selon le rapport 2025 de MIT NANDA, 95 % des organisations étudiées n'obtiennent aucun retour mesurable de leurs initiatives d'IA générative, et les principaux obstacles sont organisationnels.",
        "L'innovation proposée, le DXC Transformation Portfolio Office : passer de projets isolés à la gestion dynamique de tout le portefeuille de transformation d'un client (identifier, évaluer, prioriser, allouer, mesurer, réallouer), avec un registre de valeur, des agents IA de gouvernance sous décision humaine et un benchmark inter-clients anonymisé.",
        "Ses effets : un Business Model Canvas après l'innovation, avec des revenus par abonnement et liés au résultat et des projets qui alimentent le cœur de métier, puis des recommandations stratégiques, managériales et opérationnelles, dont une feuille de route en quatre phases sur 36 mois.",
      ],
    },
    tags: ["Innovation management", "Business Model Canvas", "IT services", "Generative AI"],
  },
];

/** Event photos. Only photos that can be tied to a specific event with confidence are listed here. */
export const eventPhotos = [
  {
    src: "/images/events/tsyp12-wie-star.webp",
    width: 1400,
    height: 1867,
    alt: {
      en: "Participants on stage under the WIE STAR Program screen at the TSYP12 congress",
      fr: "Participants sur scène sous l'écran du WIE STAR Program au congrès TSYP12",
    },
    caption: { en: "TSYP12 · WIE STAR Program on stage", fr: "TSYP12 · le WIE STAR Program sur scène" },
  },
  {
    src: "/images/events/wiempower.webp",
    width: 1600,
    height: 898,
    alt: {
      en: "Group photo of the WIEmpower 2.0 participants and organizers",
      fr: "Photo de groupe des participants et organisateurs de WIEmpower 2.0",
    },
    caption: {
      en: "WIEmpower 2.0 · IEEE WIE SUP'COM",
      fr: "WIEmpower 2.0 · IEEE WIE SUP'COM",
    },
  },
  {
    src: "/images/events/tsyp13-second-place.webp",
    width: 444,
    height: 302,
    alt: {
      en: "The team celebrating its second place in the TSYP13 Technical Challenge, holding the award",
      fr: "L'équipe célébrant sa deuxième place au TSYP13 Technical Challenge, trophée en main",
    },
    caption: { en: "TSYP13 · 2nd place in the Technical Challenge", fr: "TSYP13 · 2e place au Technical Challenge" },
  },
];

export const aboutPage = {
  title: { en: "About", fr: "À propos" },
  heading: { en: "From prépa to\napplied AI", fr: "De la prépa\nà l'IA appliquée" },
  intro: {
    en: "I am an ICT engineering student at SUP'COM in my final year, specializing in artificial intelligence. This page gives more context than the homepage: how I got here, what I like to work on, and what I am looking for next.",
    fr: "Je suis élève ingénieure TIC en dernière année à SUP'COM, spécialisée en intelligence artificielle. Cette page donne plus de contexte que l'accueil : mon parcours, ce sur quoi j'aime travailler et ce que je cherche pour la suite.",
  },
  portraitPlaceholder: {
    en: "Portrait to be added · public/images/portrait/",
    fr: "Portrait à ajouter · public/images/portrait/",
  },
  journeyTitle: { en: "Path", fr: "Parcours" },
  journey: [
    {
      when: { en: "2022 – 2024", fr: "2022 – 2024" },
      what: { en: "Preparatory classes, IPEIT", fr: "Classes préparatoires, IPEIT" },
      points: {
        en: ["Two years of mathematics and physics.", "Ranked 47th in the national engineering entrance exam."],
        fr: ["Deux années de mathématiques et de physique.", "Classée 47e au concours national d'entrée aux écoles d'ingénieurs."],
      },
    },
    {
      when: { en: "2024 – 2025", fr: "2024 – 2025" },
      what: { en: "First year at SUP'COM · Safran", fr: "Première année à SUP'COM · Safran" },
      points: {
        en: [
          "First place in the WIE STAR Challenge at TSYP12.",
          "PACTE social-impact project with partner NGOs, winner of the Best Project Award.",
          "Summer internship at Safran Electrical & Power: Spring Boot and Angular on a full-stack application.",
        ],
        fr: [
          "Première place au WIE STAR Challenge du TSYP12.",
          "Projet PACTE à impact social avec des ONG partenaires, récompensé par le prix du meilleur projet.",
          "Stage d'été chez Safran Electrical & Power : Spring Boot et Angular sur une application full-stack.",
        ],
      },
    },
    {
      when: { en: "2025 – 2026", fr: "2025 – 2026" },
      what: { en: "Second year · CURE · SOMEF", fr: "Deuxième année · CURE · SOMEF" },
      points: {
        en: [
          "P2M project CURE: blockchain for medical data, with a fraud detection model.",
          "Webmaster of the IEEE WIE affinity group.",
          "Summer internship at SOMEF: a defect detection prototype built end to end.",
        ],
        fr: [
          "Projet P2M CURE : blockchain pour les données médicales, avec un modèle de détection de fraude.",
          "Webmaster du groupe d'affinité IEEE WIE.",
          "Stage d'été chez SOMEF : un prototype de détection de défauts construit de bout en bout.",
        ],
      },
    },
    {
      when: { en: "2026 – 2027", fr: "2026 – 2027" },
      what: { en: "Final year · AI specialization", fr: "Dernière année · Spécialité IA" },
      points: {
        en: [
          "Courses in agentic systems, cloud and AI regulation.",
          "A demand response platform and an AI support agent on AWS.",
          "AI internship at Amen Invest on the regulatory knowledge base.",
        ],
        fr: [
          "Cours sur les systèmes agentiques, le cloud et la réglementation de l'IA.",
          "Une plateforme de Demand Response et un agent IA de support sur AWS.",
          "Stage IA chez Amen Invest sur la base de connaissances réglementaire.",
        ],
      },
    },
  ],
  interestsTitle: { en: "What I like to work on", fr: "Ce qui m'intéresse" },
  interests: [
    {
      title: { en: "Building AI Agents & Autonomous Systems", fr: "Concevoir des agents IA et des systèmes autonomes" },
      text: {
        en: "Designing intelligent agents that solve real-world problems and deliver practical results.",
        fr: "Concevoir des agents intelligents qui résolvent des problèmes concrets et produisent des résultats tangibles.",
      },
    },
    {
      title: { en: "Advancing LLM Reliability & Performance", fr: "Rendre les LLM plus fiables et plus performants" },
      text: {
        en: "Exploring ways to make large language models more reliable, accurate, and effective in complex domains.",
        fr: "Explorer les moyens de rendre les grands modèles de langage plus fiables, plus précis et plus efficaces dans des domaines complexes.",
      },
    },
    {
      title: { en: "Developing Technology for Social Impact", fr: "Mettre la technologie au service de l'impact social" },
      text: {
        en: "Leveraging technology and AI to address meaningful societal challenges.",
        fr: "Mobiliser la technologie et l'IA pour répondre à des défis sociétaux importants.",
      },
    },
    {
      title: { en: "Turning Ideas into Practical Solutions", fr: "Transformer les idées en solutions concrètes" },
      text: {
        en: "Transforming research and prototypes into functional, user-oriented applications.",
        fr: "Faire de la recherche et des prototypes des applications fonctionnelles, pensées pour les utilisateurs.",
      },
    },
  ],
  goalsTitle: { en: "What I am looking for", fr: "Ce que je recherche" },
  goals: {
    en: "An end-of-studies internship (PFE) of 4 to 6 months in applied AI, on a subject that ends in something deployed or at least evaluated against real data: generative AI and RAG, agents, or ML systems. I am comfortable working independently or within a team, in French or English.",
    fr: "Un stage de fin d'études (PFE) de 4 à 6 mois en IA appliquée, sur un sujet qui aboutit à quelque chose de déployé ou au moins évalué sur des données réelles : IA générative et RAG, agents ou systèmes de ML. Je travaille aussi bien en autonomie qu'en équipe, en français comme en anglais.",
  },
  certsTitle: { en: "Certifications", fr: "Certifications" },
  languagesTitle: { en: "Languages", fr: "Langues" },
};
