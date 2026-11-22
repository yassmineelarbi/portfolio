import type { L } from "@/lib/i18n";
import type { Img } from "./projects";

/**
 * Detail pages for Leadership & Involvement items, at /[lang]/leadership/<slug>/.
 * Written from the PACTE report and pitch, and from the Rafiqni pitch deck, fiche and financial study.
 */
export type Initiative = {
  slug: string;
  title: L;
  shortTitle: L;
  category: L;
  period: L;
  context: L;
  outcome: { label: L; value: L };
  lede: L;
  cover: Img;
  sections: { id: string; title: L; paragraphs?: L<string[]>; points?: L<string[]> }[];
  metrics?: { value: L; label: L }[];
  gallery?: Img[];
};

export const initiatives: Initiative[] = [
  {
    slug: "rafiqni",
    title: {
      en: "Rafiqni: Inclusive Mobility and Home Services Platform",
      fr: "Rafiqni : plateforme de mobilité inclusive et de services à domicile",
    },
    shortTitle: { en: "Rafiqni", fr: "Rafiqni" },
    category: { en: "Entrepreneurship · Startup project", fr: "Entrepreneuriat · Projet de startup" },
    period: { en: "2025–2026, 4th semester", fr: "2025–2026, 4e semestre" },
    context: {
      en: "Challenge Projets d'Entreprendre, 19th edition · SUP'COM",
      fr: "Challenge Projets d'Entreprendre, 19e édition · SUP'COM",
    },
    outcome: {
      label: { en: "Deliverables", fr: "Livrables" },
      value: { en: "Business plan, business model, prototype, pitch", fr: "Business plan, business model, prototype, pitch" },
    },
    lede: {
      en: "Rafiqni (رافقني, “accompany me”) is a mobile platform that connects people with reduced mobility with verified students offering home services, and with drivers carrying a “Certified PMR driver” label through a partnership with ride-hailing apps. It was imagined, designed and pitched in one week.",
      fr: "Rafiqni (رافقني, « accompagne-moi ») est une plateforme mobile qui met en relation les personnes à mobilité réduite avec des étudiants vérifiés proposant des services à domicile, et avec des chauffeurs labellisés « Chauffeur certifié PMR » grâce à un partenariat avec des applications de transport. Elle a été imaginée, conçue et pitchée en une semaine.",
    },
    cover: {
      src: "/images/initiatives/rafiqni-logo.webp",
      width: 683,
      height: 807,
      paper: true,
      alt: {
        en: "Rafiqni logo: a wheelchair user, a student and an elderly person inside a heart, above a taxi",
        fr: "Logo de Rafiqni : une personne en fauteuil, un étudiant et une personne âgée dans un cœur, au-dessus d'un taxi",
      },
    },
    sections: [
      {
        id: "challenge",
        title: { en: "The challenge", fr: "Le challenge" },
        paragraphs: {
          en: [
            "The Challenge Projets d'Entreprendre brings together engineering and management students in mixed teams that must imagine and build the best innovative company project around an ICT product or service, in a single week during the fourth semester. It follows the model set up in 1999 by Télécom SudParis.",
            "Released from classes for the week, teams build a business plan and a business model proving the economic and financial relevance of their idea, with sustainability strongly encouraged. They can run surveys and interviews and meet industry players. The week includes an acceleration session to filter ideas, a professional coach per team, expert workshops and advisory sessions.",
            "At the end of the week, each team hands in its business plan, business model and a prototype. A first evaluation selects the 12 best teams, which then pitch to a jury of professionals (ICT entrepreneurs, bankers, investors); the top three projects receive prizes.",
          ],
          fr: [
            "Le Challenge Projets d'Entreprendre réunit élèves ingénieurs et étudiants managers en équipes mixtes qui doivent imaginer et réaliser le meilleur projet de création d'entreprise innovante autour d'un produit ou service TIC, en une seule semaine pendant le quatrième semestre. Il suit le modèle instauré en 1999 par Télécom SudParis.",
            "Libérées de leurs cours pendant la semaine, les équipes élaborent un business plan et un modèle d'affaires qui justifient la pertinence économique et financière de leur idée, avec une orientation vers le développement durable fortement conseillée. Elles peuvent mener des enquêtes et des interviews et rencontrer des industriels. La semaine comprend une session d'accélération pour trier les idées, un coach professionnel par équipe, des ateliers et des pôles conseil animés par des experts.",
            "En fin de semaine, chaque équipe remet son business plan, son business model et un prototype. Une première évaluation sélectionne les 12 meilleures équipes, qui pitchent ensuite devant un jury de professionnels (chefs d'entreprise TIC, banquiers, investisseurs) ; les trois meilleurs projets sont récompensés.",
          ],
        },
      },
      {
        id: "problem",
        title: { en: "The problem", fr: "Le problème" },
        paragraphs: {
          en: [
            "About 1.75 million Tunisians live with a disability, 15.5% of the population, to which come seniors (13 to 15% of the population) and people with temporary reduced mobility after surgery or an accident. They need accessible transport and home services, but these services are expensive and transport is usually unsuitable.",
            "On the other side, around 270,000 students are in higher education. With inflation, many look for extra income, but classic student jobs are rigid and clash with class schedules. Between these two realities, nothing connects them.",
          ],
          fr: [
            "Environ 1,75 million de Tunisiens vivent avec un handicap, soit 15,5 % de la population, auxquels s'ajoutent les seniors (13 à 15 % de la population) et les personnes à mobilité réduite temporaire après une opération ou un accident. Ils ont besoin d'un transport accessible et de services à domicile, mais ces services sont chers et le transport est généralement inadapté.",
            "De l'autre côté, environ 270 000 étudiants sont dans l'enseignement supérieur. Face à l'inflation, beaucoup cherchent un revenu complémentaire, mais l'emploi étudiant classique est rigide et incompatible avec les horaires de cours. Entre ces deux réalités, rien ne fait le lien.",
          ],
        },
      },
      {
        id: "survey",
        title: { en: "Field survey", fr: "Enquête terrain" },
        points: {
          en: [
            "63.6% of the panel (people with reduced mobility and seniors) have a chronic illness or need regular care and reminders, which led to targeting medicine, nursing and paramedical students as providers.",
            "Most respondents are ready to pay 20% to 40% more than a classic ride for adapted transport.",
            "Families are ready to pay 40 to 60 TND per intervention (housekeeping, accompaniment).",
          ],
          fr: [
            "63,6 % du panel (PMR et seniors) souffrent de maladies chroniques ou nécessitent des soins et rappels réguliers : d'où le ciblage des étudiants en médecine, sciences infirmières et paramédicales comme prestataires.",
            "La majorité est prête à payer entre 20 % et 40 % de plus qu'une course classique pour un transport adapté.",
            "Les familles sont prêtes à payer entre 40 et 60 DT par intervention (ménage, accompagnement).",
          ],
        },
      },
      {
        id: "solution",
        title: { en: "The solution", fr: "La solution" },
        paragraphs: {
          en: [
            "Rafiqni presents itself as the first Tunisian platform dedicated to people with reduced mobility. It rests on geolocated matching between three groups, with value for each: autonomy for users, flexible income for students, and differentiation for drivers.",
          ],
          fr: [
            "Rafiqni se présente comme la première plateforme tunisienne dédiée aux PMR. Elle repose sur un matching géolocalisé entre trois publics, avec une valeur pour chacun : l'autonomie pour les PMR, un revenu flexible pour les étudiants et une différenciation pour les chauffeurs.",
          ],
        },
        points: {
          en: [
            "Home services by verified students: housekeeping, shopping, accompaniment and minor care.",
            "Adapted transport through a partnership with ride-hailing apps, with a “Certified PMR driver” label and revenue shared with the partner.",
            "An asset-light model: no vehicle fleet to buy, unlike the direct competitor.",
          ],
          fr: [
            "Des services à domicile assurés par des étudiants vérifiés : ménage, courses, accompagnement et soins mineurs.",
            "Un transport adapté via un partenariat avec des applications de transport, avec un label « Chauffeur certifié PMR » et des revenus partagés avec le partenaire.",
            "Un modèle « asset-light » : aucune flotte de véhicules à acheter, contrairement au concurrent direct.",
          ],
        },
      },
      {
        id: "market",
        title: { en: "Competition", fr: "Concurrence" },
        points: {
          en: [
            "A dedicated adapted-transport operator, with a heavy model based on buying a fleet.",
            "Private home-care agencies, priced beyond the reach of the middle class.",
            "Ride-hailing apps that offer no filter for people with reduced mobility.",
            "Informal Facebook groups: no verification and no insurance.",
          ],
          fr: [
            "Un opérateur de transport adapté, avec un modèle lourd fondé sur l'achat d'une flotte.",
            "Des agences privées de soins à domicile, à des tarifs inaccessibles pour la classe moyenne.",
            "Des applications de transport urbain sans option de filtrage pour les PMR.",
            "Des groupes Facebook informels : aucune vérification, aucune assurance.",
          ],
        },
      },
      {
        id: "business",
        title: { en: "Business model", fr: "Modèle économique" },
        paragraphs: {
          en: [
            "Revenue comes from a commission on each service and each ride, plus a premium subscription. In the financial study's assumptions: 17.5% on home services (about 40 TND per mission), 11% on rides (about 18 TND), and a premium offer at 49 TND a month.",
            "The initial financing plan combines founders' and family funds, competition prizes, the national Startup Tunisia programme and a business angel.",
          ],
          fr: [
            "Les revenus viennent d'une commission sur chaque service et chaque course, et d'un abonnement premium. Dans les hypothèses de l'étude financière : 17,5 % sur les services à domicile (environ 40 DT par mission), 11 % sur les courses (environ 18 DT), et une offre premium à 49 DT par mois.",
            "Le plan de financement initial combine apports des fondateurs et de la famille, prix de compétitions, programme national Startup Tunisia et business angel.",
          ],
        },
      },
      {
        id: "roadmap",
        title: { en: "Roadmap", fr: "Feuille de route" },
        points: {
          en: [
            "Proof of concept: launch in Greater Tunis and test the matching, aiming for 500 users and 50 driver–companion pairs.",
            "Traction: replicate in Sousse and Sfax and automate onboarding, aiming for 2,000 sign-ups and 150 active drivers.",
            "Institutional anchoring: contracts with private clinics, insurers and rehabilitation centres, aiming for 20 partner institutions.",
            "Standardisation: certifications to secure the national market, aiming for 10,000 users.",
            "Scale-up: export the platform and the asset-light model to neighbouring markets (Morocco, Algeria).",
          ],
          fr: [
            "Preuve de concept : lancement sur le Grand Tunis et test du matching, avec 500 utilisateurs et 50 binômes chauffeurs–accompagnants visés.",
            "Traction : duplication à Sousse et Sfax et automatisation de l'onboarding, avec 2 000 inscrits et 150 chauffeurs actifs visés.",
            "Ancrage institutionnel : contrats avec des cliniques privées, des assurances et des centres de rééducation, avec 20 institutions partenaires visées.",
            "Standardisation : certifications pour verrouiller le marché national, avec 10 000 utilisateurs visés.",
            "Scale-up : export de la plateforme et du modèle asset-light vers les marchés voisins (Maroc, Algérie).",
          ],
        },
      },
    ],
    metrics: [
      { value: { en: "15.5%", fr: "15,5 %" }, label: { en: "of Tunisia's population lives with a disability", fr: "de la population tunisienne vit avec un handicap" } },
      { value: { en: "63.6%", fr: "63,6 %" }, label: { en: "of the surveyed panel need regular care", fr: "du panel interrogé a besoin de soins réguliers" } },
      { value: { en: "1 week", fr: "1 semaine" }, label: { en: "from idea to business plan, prototype and pitch", fr: "de l'idée au business plan, au prototype et au pitch" } },
    ],
  },
  {
    slug: "flamme-bleue",
    title: {
      en: "Flamme Bleue: Raising Awareness of School Bullying",
      fr: "Flamme Bleue : sensibiliser au harcèlement scolaire",
    },
    shortTitle: { en: "Flamme Bleue (PACTE)", fr: "Flamme Bleue (PACTE)" },
    category: { en: "PACTE · Social impact", fr: "PACTE · Impact social" },
    period: { en: "2024–2025", fr: "2024–2025" },
    context: { en: "PACTE program, 13th edition · SUP'COM, first year", fr: "Programme PACTE, 13e édition · SUP'COM, 1re année" },
    outcome: {
      label: { en: "Award", fr: "Distinction" },
      value: { en: "Best PACTE Project Award", fr: "Prix du meilleur projet PACTE" },
    },
    lede: {
      en: "Bullying, cyberbullying and sexual harassment remain taboo, and too many young people suffer in silence. Flamme Bleue set out to break that silence with high-school students aged 15 to 18 and their teachers, together with two associations: workshops at school, an anonymous support chatbot, a podcast and social media content.",
      fr: "Le harcèlement, le cyberharcèlement et le harcèlement sexuel restent des sujets tabous, et trop de jeunes souffrent en silence. Flamme Bleue a voulu briser ce silence auprès des lycéens de 15 à 18 ans et de leurs enseignants, avec deux associations : des ateliers au lycée, un chatbot de soutien anonyme, un podcast et des contenus sur les réseaux sociaux.",
    },
    cover: {
      src: "/images/initiatives/flamme-bleue-poster.webp",
      width: 900,
      height: 1069,
      alt: {
        en: "Flamme Bleue poster: a student alone in a school corridor surrounded by hurtful messages",
        fr: "Affiche de Flamme Bleue : une élève seule dans un couloir de lycée entourée de messages blessants",
      },
    },
    sections: [
      {
        id: "program",
        title: { en: "The PACTE program", fr: "Le programme PACTE" },
        paragraphs: {
          en: [
            "PACTE (a learning project in communication and teamwork) is an active-learning exercise through which SUP'COM opens up to its social environment. First-year engineering students discover that environment and get involved in it, manage a project end to end, from definition to field action and evaluation, and learn to work as a team.",
            "Teams of four to six students choose a theme (citizenship, humanitarian, education, technology or culture, ecology), find a host organisation and lead a concrete action with it. They deliver an activity report, a three-to-four-minute video and a poster. A teaching jury grades the project, then an independent jury from civil society awards three prizes at the closing ceremony, after visiting each team's stand.",
          ],
          fr: [
            "Le PACTE (Projet d'Apprentissage à la Communication et au Travail en Équipe) est un exercice de pédagogie active par lequel SUP'COM s'ouvre sur son environnement. Les élèves ingénieurs de première année découvrent cet environnement social et s'y impliquent, gèrent un projet de bout en bout, de sa définition à l'action sur le terrain et à son évaluation, et apprennent à travailler en équipe.",
            "Des équipes de quatre à six élèves choisissent une thématique (citoyenneté, humanitaire, éducation, technologie ou culture, écologie), identifient un organisme d'accueil et mènent avec lui une action concrète. Elles livrent un rapport d'activités, une vidéo de trois à quatre minutes et une affiche. Un jury d'enseignants note le projet, puis un jury indépendant issu de la société civile décerne trois prix lors de la cérémonie de clôture, après la visite du stand de chaque équipe.",
          ],
        },
      },
      {
        id: "problem",
        title: { en: "Why this subject", fr: "Pourquoi ce sujet" },
        paragraphs: {
          en: [
            "According to a 2019 UNICEF survey, more than one young person in three across 30 countries has been cyberbullied. In Tunisia, a 2020 UNICEF analysis reports that 58.2% of students have experienced physical violence at school and 3.3% sexual violence, and about two cases of school violence in three involve students aged 14 to 17.",
            "Existing initiatives, led mostly by NGOs, remain occasional and rarely reach public high schools in a lasting way. The project targeted high-school students aged 15 to 18 and their teaching staff.",
          ],
          fr: [
            "Selon une enquête de l'UNICEF de 2019, plus d'un jeune sur trois dans 30 pays a été victime de cyberharcèlement. En Tunisie, une analyse de l'UNICEF de 2020 indique que 58,2 % des élèves ont été victimes de violence physique en milieu scolaire et 3,3 % de violence sexuelle, et près de deux cas de violence scolaire sur trois impliquent des élèves de 14 à 17 ans.",
            "Les initiatives existantes, surtout portées par des ONG, restent ponctuelles et atteignent rarement les lycées publics de façon durable. Le projet a ciblé les lycéens de 15 à 18 ans et l'équipe pédagogique.",
          ],
        },
      },
      {
        id: "partners",
        title: { en: "Partners", fr: "Partenaires" },
        points: {
          en: [
            "Health & Psychology, an association that defends children's rights and runs awareness workshops.",
            "SAWN, an association for the protection of children and adolescents against violence and sexual abuse.",
            "Lycée Route de la Plage in Soliman, the public high school that hosted the actions (about 500 students).",
            "SupCast for the podcast, SUP'COM Press and a local journalist for media coverage, and a sponsor who provided notebooks for the event.",
          ],
          fr: [
            "Health & Psychology, une association qui défend les droits de l'enfant et anime des ateliers de sensibilisation.",
            "SAWN, une association de protection des enfants et des adolescents contre la violence et les abus sexuels.",
            "Le lycée Route de la Plage de Soliman, le lycée public qui a accueilli les actions (environ 500 élèves).",
            "SupCast pour le podcast, SUP'COM Press et un journaliste local pour la couverture médiatique, et un sponsor qui a fourni des blocs-notes pour l'événement.",
          ],
        },
      },
      {
        id: "actions",
        title: { en: "Actions", fr: "Actions menées" },
        points: {
          en: [
            "Collective brainstorming, then visits to the associations already working on the subject.",
            "A stand at the high school with stickers and open discussions, to invite students to the event.",
            "A first workshop with Health & Psychology on bullying and cyberbullying, led with three of the association's psychologists.",
            "A second, interactive workshop with SAWN on sexual harassment, where the chatbot was introduced.",
            "An anonymous chatbot to give moral support to young people in distress or with questions, and explain how to recognise and react to bullying.",
            "A podcast with a Health & Psychology psychologist on cyberbullying and mental health, produced with SupCast, plus social media content designed with the associations.",
            "A themed evening for SUP'COM students to raise funds for the actions.",
            "Anonymous questionnaires at the start of each workshop and feedback forms at the end.",
          ],
          fr: [
            "Des brainstormings collectifs, puis des visites aux associations qui agissent déjà sur le sujet.",
            "Un stand au lycée avec des stickers et des discussions ouvertes, pour inviter les élèves à l'événement.",
            "Un premier atelier avec Health & Psychology sur le harcèlement et le cyberharcèlement, animé avec trois psychologues de l'association.",
            "Un second atelier, interactif, avec SAWN sur le harcèlement sexuel, au cours duquel le chatbot a été présenté.",
            "Un chatbot anonyme pour apporter un soutien moral aux jeunes en détresse ou en questionnement, et expliquer comment reconnaître le harcèlement et y réagir.",
            "Un podcast avec une psychologue de Health & Psychology sur le cyberharcèlement et la santé mentale, réalisé avec SupCast, et des contenus pour les réseaux sociaux conçus avec les associations.",
            "Une soirée à thème pour les étudiants de SUP'COM afin de financer les actions.",
            "Des questionnaires anonymes au début de chaque atelier et des formulaires de feedback à la fin.",
          ],
        },
      },
      {
        id: "impact",
        title: { en: "Impact", fr: "Impact" },
        paragraphs: {
          en: [
            "Around 20% of the school's students were reached directly by the two workshops. Feedback from students and teachers was very positive: students said they felt better equipped to recognise and react to harassment, and several teachers wanted to take concrete action in their classes.",
            "One student, moved by the workshops, proposed creating an awareness club in her school, and a teacher agreed to mentor it.",
            "At the closing ceremony, the team pitched the project at its stand to a jury of NGO practitioners and received the Best PACTE Project Award.",
          ],
          fr: [
            "Environ 20 % des élèves du lycée ont été touchés directement par les deux ateliers. Les retours des élèves et des enseignants ont été très positifs : les élèves se disaient mieux armés pour reconnaître le harcèlement et y réagir, et plusieurs enseignants ont souhaité agir concrètement dans leurs classes.",
            "Une élève, marquée par les ateliers, a proposé de créer un club de sensibilisation dans son lycée, et une enseignante a accepté d'en être la tutrice.",
            "Lors de la cérémonie de clôture, l'équipe a pitché le projet sur son stand devant un jury d'acteurs d'ONG et a reçu le prix du meilleur projet PACTE.",
          ],
        },
      },
    ],
    metrics: [
      { value: { en: "53", fr: "53" }, label: { en: "students at the bullying and cyberbullying workshop", fr: "lycéens à l'atelier harcèlement et cyberharcèlement" } },
      { value: { en: "45", fr: "45" }, label: { en: "participants at the sexual abuse workshop", fr: "participants à l'atelier sur les abus sexuels" } },
      { value: { en: "208", fr: "208" }, label: { en: "followers on the project's pages", fr: "abonnés sur les pages du projet" } },
    ],
    gallery: [
      {
        src: "/images/initiatives/flamme-bleue-award.webp",
        width: 1080,
        height: 606,
        alt: {
          en: "The Flamme Bleue team holding their Best PACTE Project certificates at the closing ceremony",
          fr: "L'équipe Flamme Bleue avec ses certificats du prix du meilleur projet PACTE lors de la cérémonie de clôture",
        },
        caption: { en: "Closing ceremony: the Best PACTE Project Award.", fr: "Cérémonie de clôture : le prix du meilleur projet PACTE." },
      },
      {
        src: "/images/initiatives/flamme-bleue-stand.webp",
        width: 1400,
        height: 1050,
        alt: {
          en: "The Flamme Bleue team at its decorated stand, next to the Health & Psychology banner",
          fr: "L'équipe Flamme Bleue devant son stand décoré, à côté de la bannière de Health & Psychology",
        },
        caption: { en: "The project stand where the team pitched to the jury.", fr: "Le stand du projet, où l'équipe a pitché devant le jury." },
      },
    ],
  },
];

export function getInitiative(slug: string) {
  return initiatives.find((x) => x.slug === slug);
}
