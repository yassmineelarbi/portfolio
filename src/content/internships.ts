import { getCaseStudy, type Project } from "./projects";

/**
 * One case study page per internship, at /[lang]/experience/<slug>/.
 * Amen Invest and SOMEF reuse the full case studies written for those projects;
 * Safran's comes from the internship report.
 */
const safran: Project = {
  slug: "safran",
  title: {
    en: "Safran Electrical & Power: Full-Stack Web Application",
    fr: "Safran Electrical & Power : application web full-stack",
  },
  shortTitle: { en: "Safran", fr: "Safran" },
  category: { en: "Internship · Full-stack web", fr: "Stage · Web full-stack" },
  period: { en: "Jun – Jul 2025", fr: "juin – juil. 2025" },
  context: {
    en: "Summer internship (first year, SUP'COM) · Safran Tunisia",
    fr: "Stage d'été (1re année, SUP'COM) · Safran Tunisie",
  },
  team: { en: "", fr: "" },
  role: { en: "", fr: "" },
  status: { en: "Completed", fr: "Terminé" },
  summary: {
    en: "A first full-stack application built to learn Spring Boot and Angular: a REST API and an Angular interface to manage students and the activities they register for, with an email sent to participants whenever an activity changes.",
    fr: "Une première application full-stack réalisée pour apprendre Spring Boot et Angular : une API REST et une interface Angular pour gérer des étudiants et les activités auxquelles ils s'inscrivent, avec un e-mail envoyé aux participants dès qu'une activité change.",
  },
  lede: {
    en: "The goal of this internship was to get hands-on with the two frameworks most used for business web applications, Spring Boot and Angular, by building a small application end to end and understanding how the back end and the front end talk to each other.",
    fr: "L'objectif de ce stage était de prendre en main les deux frameworks les plus utilisés pour les applications web d'entreprise, Spring Boot et Angular, en construisant une petite application de bout en bout et en comprenant comment le back-end et le front-end communiquent.",
  },
  tags: ["Spring Boot", "Angular", "Spring Data JPA", "SQL Server", "Postman"],
  cover: {
    src: "/images/internships/safran/activities.webp",
    width: 1450,
    height: 593,
    paper: true,
    alt: { en: "Activities table of the Angular application", fr: "Tableau des activités de l'application Angular" },
  },
  overview: {
    en: [
      "Safran is an international high-technology group in aeronautics, space and defence; in Tunisia it designs and builds on-board systems, aeronautical equipment and aircraft interiors. The internship took place with its development team.",
      "The subject was deliberately a learning project: study Spring Boot and Angular, then put the concepts into practice in a small but complete application, with a REST API, a database, an email service and a web interface.",
    ],
    fr: [
      "Safran est un groupe international de haute technologie dans l'aéronautique, l'espace et la défense ; en Tunisie, il conçoit et fabrique des systèmes embarqués, des équipements aéronautiques et des intérieurs d'avion. Le stage s'est déroulé avec son équipe de développement.",
      "Le sujet était volontairement un projet d'apprentissage : étudier Spring Boot et Angular, puis mettre ces notions en pratique dans une petite application complète, avec une API REST, une base de données, un service d'e-mail et une interface web.",
    ],
  },
  objectives: {
    en: [
      "Learn the key concepts of Spring Boot and Angular and how they work together.",
      "Build a REST API with full create, read, update and delete operations.",
      "Model related entities with JPA and store them in SQL Server.",
      "Connect an Angular interface to the API and test every endpoint.",
    ],
    fr: [
      "Comprendre les concepts clés de Spring Boot et d'Angular et leur fonctionnement ensemble.",
      "Construire une API REST avec toutes les opérations de création, lecture, mise à jour et suppression.",
      "Modéliser des entités liées avec JPA et les stocker dans SQL Server.",
      "Relier une interface Angular à l'API et tester chaque point d'accès.",
    ],
  },
  architecture: {
    intro: {
      en: "A classic Spring Boot and Angular application: the Angular front end calls a REST API, which stores data in SQL Server through JPA and sends notification emails.",
      fr: "Une application Spring Boot et Angular classique : le front-end Angular appelle une API REST, qui enregistre les données dans SQL Server via JPA et envoie des e-mails de notification.",
    },
    steps: [
      {
        tag: { en: "Front end", fr: "Front-end" },
        label: { en: "Angular screens", fr: "Écrans Angular" },
      },
      {
        tag: { en: "API", fr: "API" },
        label: { en: "Spring Boot REST", fr: "REST Spring Boot" },
      },
      {
        tag: { en: "Data", fr: "Données" },
        label: { en: "JPA entities", fr: "Entités JPA" },
      },
      {
        tag: { en: "Service", fr: "Service" },
        label: { en: "Email notifications", fr: "Notifications par e-mail" },
      },
    ],
  },
  stack: [
    { label: { en: "Back end", fr: "Back-end" }, items: ["Java", "Spring Boot", "Spring Data JPA", "Maven"] },
    { label: { en: "Front end", fr: "Front-end" }, items: ["Angular", "TypeScript", "Node.js"] },
    { label: { en: "Database", fr: "Base de données" }, items: ["SQL Server", "SSMS"] },
    { label: { en: "Tools", fr: "Outils" }, items: ["Postman", "NetBeans", "VS Code"] },
  ],
  implementation: [
    {
      title: { en: "REST API", fr: "API REST" },
      body: {
        en: "The back end is organised in controllers, entities, repositories and a service layer. Students have the full set of endpoints (list, read, create, update, delete); lists, activities and statuses support search, creation and update. Updating a student also updates its status through the related entity.",
        fr: "Le back-end est organisé en contrôleurs, entités, dépôts et couche de services. Les étudiants disposent de tous les points d'accès (liste, lecture, création, mise à jour, suppression) ; les listes, activités et statuts permettent la recherche, la création et la mise à jour. La mise à jour d'un étudiant met aussi à jour son statut via l'entité liée.",
      },
    },
    {
      title: { en: "Email service", fr: "Service d'e-mail" },
      body: {
        en: "A notification method compares the old and new date and place of an activity and emails each registered student with the details of what changed. Two versions were built: a plain-text email and a formatted HTML email.",
        fr: "Une méthode de notification compare l'ancienne et la nouvelle date et le lieu d'une activité, puis envoie à chaque étudiant inscrit un e-mail détaillant les changements. Deux versions ont été réalisées : un e-mail en texte simple et un e-mail HTML mis en forme.",
      },
    },
    {
      title: { en: "Angular interface", fr: "Interface Angular" },
      body: {
        en: "One Angular service per entity wraps the API calls; components provide the sign-up form and the students and activities tables, with add, edit and delete actions.",
        fr: "Un service Angular par entité regroupe les appels à l'API ; des composants fournissent le formulaire d'inscription et les tableaux des étudiants et des activités, avec ajout, modification et suppression.",
      },
    },
    {
      title: { en: "Testing", fr: "Tests" },
      body: {
        en: "Every endpoint was tested in Postman, with JSON requests and responses, before being connected to the Angular interface.",
        fr: "Chaque point d'accès a été testé sous Postman, avec des requêtes et réponses JSON, avant d'être relié à l'interface Angular.",
      },
    },
  ],
  contribution: {
    intro: {
      en: "Summer internship carried out with Safran's development team.",
      fr: "Stage d'été réalisé au sein de l'équipe de développement de Safran.",
    },
    items: {
      en: [
        "Studied Spring Boot and Angular, then built the application end to end: API, data model, email service and interface.",
        "Wrote the internship report and journal.",
      ],
      fr: [
        "Étude de Spring Boot et d'Angular, puis réalisation de l'application de bout en bout : API, modèle de données, service d'e-mail et interface.",
        "Rédaction du rapport et du journal de stage.",
      ],
    },
  },
  results: {
    metrics: [
      { value: "4", label: { en: "related JPA entities", fr: "entités JPA liées" } },
      { value: "5", label: { en: "REST operations for students", fr: "opérations REST pour les étudiants" } },
      { value: "2", label: { en: "email formats: text and HTML", fr: "formats d'e-mail : texte et HTML" } },
    ],
    notes: {
      en: ["The application runs end to end: data entered in Angular is stored in SQL Server, and changing an activity triggers the emails to its participants."],
      fr: ["L'application fonctionne de bout en bout : les données saisies dans Angular sont enregistrées dans SQL Server, et la modification d'une activité déclenche les e-mails à ses participants."],
    },
  },
  gallery: [],
  lessons: {
    en: [
      "Separating the back end and the front end through a REST API lets each side be built and tested on its own, Postman first and the interface after.",
      "Entity relations (many-to-one, many-to-many) shape both the database and the API: getting them right early saves rework later.",
      "A first professional environment taught autonomy in solving problems, attention to detail and organising work around deadlines.",
    ],
    fr: [
      "Séparer le back-end et le front-end par une API REST permet de construire et tester chaque partie séparément : Postman d'abord, l'interface ensuite.",
      "Les relations entre entités (plusieurs-à-un, plusieurs-à-plusieurs) façonnent à la fois la base et l'API : bien les définir tôt évite de revenir en arrière.",
      "Un premier environnement professionnel m'a appris l'autonomie face aux problèmes, la rigueur et l'organisation du travail autour des délais.",
    ],
  },
  links: [],
};

function study(slug: string, from: string, overrides: Partial<Project>): Project {
  const base = getCaseStudy(from);
  if (!base) throw new Error(`Unknown case study: ${from}`);
  return { ...base, ...overrides, slug };
}

/** Internship pages, in the order of the Experience section. */
export const internships: Project[] = [
  study("amen-invest", "regulatory-knowledge-base", {
    shortTitle: { en: "Amen Invest", fr: "Amen Invest" },
    category: { en: "Internship · Generative AI · RAG", fr: "Stage · IA générative · RAG" },
  }),
  study("somef", "industrial-defect-detection", {
    shortTitle: { en: "SOMEF", fr: "SOMEF" },
    category: { en: "Internship · Computer vision", fr: "Stage · Vision par ordinateur" },
  }),
  safran,
];

export function getInternship(slug: string) {
  return internships.find((x) => x.slug === slug);
}

export function internshipNeighbours(slug: string) {
  const i = internships.findIndex((x) => x.slug === slug);
  return {
    prev: internships[(i - 1 + internships.length) % internships.length],
    next: internships[(i + 1) % internships.length],
  };
}
