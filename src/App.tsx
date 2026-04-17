import { useEffect, useMemo, useState } from 'react'

type Language = 'nl' | 'en' | 'tr' | 'fr'
type Testimonial = { quote: string; author?: string }

const copy = {
  en: {
    languageLabel: 'Language',
    heroEyebrow: 'Financial media + education for women',
    primaryCta: 'Join the Community',
    secondaryCta: 'Learn More',
    learnMore: 'Learn more',
    heroTrust: 'Trusted by women building confidence with money',
    navProblem: 'Problem',
    navSolution: 'Solution',
    navPrograms: 'Programs',
    navHow: 'How it works',
    navCommunity: 'Community',
    heroTitle: 'Money feels clearer when someone explains it like a friend.',
    heroBody:
      'Simple, relatable financial education for women who want confidence, clarity, and control.',
    problemTitle: 'Sound familiar?',
    problem1: 'Confused about money and where to start?',
    problem2: 'Scared to begin investing?',
    problem3: 'Tired of advice that feels too technical?',
    solutionTitle: 'A simpler way to grow',
    learnTitle: 'Learn',
    learnBody: 'Short content that breaks money topics into clear steps.',
    growTitle: 'Grow',
    growBody: 'Begin investing with practical guidance you can follow.',
    supportTitle: 'Support',
    supportBody: 'A supportive community that keeps you consistent.',
    proofTitle: 'Real trust, real progress',
    testimonial1:
      '"I stopped overthinking and finally started making money decisions with confidence."',
    testimonial2: '"No jargon. Just clarity and action. Exactly what I needed."',
    testimonials: [
      {
        quote:
          'Hermoney is highly recommended for every woman! Sumeyye explains step by step how you can start investing. She remains available after the workshop whenever something is unclear!',
        author: 'Sarah',
      },
      {
        quote:
          'It was an incredibly clarifying workshop in which I got an answer about the halal and haram side of investing. I could not ask these questions anywhere else, but I could with Sumeyye. A recommendation for everyone!',
      },
      {
        quote:
          "I found the HerMoney workshop super engaging. Sumeyye makes investing more familiar for women and takes it out of the sphere of 'men in suits'. In the meantime I started myself and I love it. I think many women would really enjoy this!",
        author: 'Naziha El Handoussi',
      },
      {
        quote:
          'For a long time I wanted to invest, but I had no idea how to begin. Thanks to Hermoney I am well informed about investing and I could start investing right away.',
        author: 'Gamze Anaz',
      },
      {
        quote:
          'After I became a mother, I wanted to start investing for my child, but I did not know well where to start. During the workshop I received clear explanations and I could get started immediately. Because I did not grow up with much myself, this is very important to me.',
      },
    ] as Testimonial[],
    metric1: '10K+ community members',
    metric2: 'Weekly coaching sessions',
    metric3: 'Expert-led guidance',
    programsTitle: 'Programs',
    program1: 'Financial Coaching',
    program1Body:
      'Build confidence with personal support and accountability. Get clear next steps, weekly check-ins, and a plan you can actually follow.',
    program2: 'Investing Club',
    program2Body:
      'Start small, stay consistent, and grow with structure. Learn the basics, get prompts to take action, and build habits that last.',
    program3: 'Money Bootcamps',
    program3Body:
      'Focused learning sprints for faster progress. Short lessons, practical exercises, and a simple roadmap from “confused” to “confident”.',
    tipsTitle: 'Quick Money Tips',
    tip1: 'Pay yourself first.',
    tip2: 'Start small. Stay consistent.',
    tip3: 'Track where your money goes.',
    howTitle: 'How it works',
    step1: 'Learn basics',
    step2: 'Build your plan',
    step3: 'Grow your wealth',
    communityTitle: "You're not alone in this journey.",
    communityBody:
      'Learn with women who share your questions, goals, and growth mindset.',
    finalTitle: 'Take control of your financial future today.',
    finalBody: 'Start now. One clear step at a time.',
    footerTagline: 'Financial confidence, made simple.',
    footerAbout: 'About',
    footerBlog: 'Blog',
    footerPodcast: 'Podcast',
    footerPrograms: 'Programs',
    newsletterTitle: 'Get weekly money confidence tips',
    newsletterPlaceholder: 'Your email address',
    newsletterButton: 'Subscribe',

    aboutTitle: 'About HerMoney (Belgium)',
    aboutSocialProof: 'Join 5,000+ Belgian women',
    manifestoKicker: 'Manifesto',
    manifestoTitle: 'The 50% pension gap in Belgium isn’t just a stat—it’s a call to action.',
    manifestoBody:
      'We’re empowering Belgian women to take control of their financial future with clarity, confidence, and community—without the cold “bank” vibe.',
    valuesTitle: 'Our values',
    value1Title: 'Transparency',
    value1Body: 'Clear guidance. No hidden agendas. No shame.',
    value2Title: 'Simplicity',
    value2Body: 'Money lessons that feel like a friend—not a textbook.',
    value3Title: 'Community',
    value3Body: 'Because confidence grows faster together.',
    founderTitle: 'Meet the Founder',
    founderBio:
      'HerMoney was created to empower women with the knowledge, confidence, and tools to invest and build long-term, generational wealth in a supportive and inclusive environment.',
    founderQuote:
      'Educational workshops & keynotes for women who want to invest and build generational wealth.',
    founderSignOff: '— Founder, HerMoney Belgium',
    localTitle: 'Local expertise, Belgian realities',
    localBody:
      'We cover Belgian specifics like TOB (beurstaks), tax nuances, and the 3 pension pillars—so your decisions fit your real life in Belgium.',
  },
  nl: {
    languageLabel: 'Taal',
    heroEyebrow: 'Financiële media + educatie voor vrouwen',
    primaryCta: 'Word lid van de community',
    secondaryCta: 'Meer ontdekken',
    learnMore: 'Meer info',
    heroTrust: 'Vertrouwd door vrouwen die financiële zelfzekerheid opbouwen',
    navProblem: 'Probleem',
    navSolution: 'Oplossing',
    navPrograms: 'Programma’s',
    navHow: 'Hoe het werkt',
    navCommunity: 'Community',
    heroTitle: 'Geld voelt duidelijker wanneer iemand het uitlegt als een vriendin.',
    heroBody:
      'Eenvoudige en herkenbare financiële educatie voor vrouwen die meer vertrouwen, helderheid en controle willen.',
    problemTitle: 'Herkenbaar?',
    problem1: 'Verward over geld en waar je moet beginnen?',
    problem2: 'Bang om te starten met investeren?',
    problem3: 'Moe van advies dat te technisch klinkt?',
    solutionTitle: 'Een eenvoudigere manier om te groeien',
    learnTitle: 'Leer',
    learnBody: 'Korte content die geldtopics vertaalt naar duidelijke stappen.',
    growTitle: 'Groei',
    growBody: 'Start met investeren via praktische begeleiding die werkt.',
    supportTitle: 'Support',
    supportBody: 'Een ondersteunende community die je consistent houdt.',
    proofTitle: 'Echt vertrouwen, echte vooruitgang',
    testimonial1:
      '"Ik ben gestopt met overdenken en maak eindelijk geldkeuzes met vertrouwen."',
    testimonial2: '"Geen jargon. Gewoon duidelijkheid en actie. Precies wat ik nodig had."',
    testimonials: [
      {
        quote:
          'Hermoney is een aanrader voor elke vrouw! Sumeyye legt stap voor stap uit hoe je kunt starten met beleggen. Ze is na de workshop steeds bereikbaar wanneer er iets niet duidelijk is!',
        author: 'Sarah',
      },
      {
        quote:
          'Het was een enorm verhelderende workshop waarin ik een antwoord kreeg over het halal en haram gedeelte van investeren. Deze vragen kon ik nergens kwijt maar wel bij Sumeyye. Een aanrader voor iedereen!',
      },
      {
        quote:
          "Ik vond de workshop van HerMoney mega boeiend. Sumeyye zorgt ervoor dat beleggen bekender wordt bij vrouwen en haalt het uit de sfeer van de 'mannen in pakken'. Inmiddels ben ik zelf gestart en ik vind het geweldig. Ik denk dat heel veel vrouwen dit echt leuk zouden vinden!",
        author: 'Naziha El Handoussi',
      },
      {
        quote:
          'Al lange tijd wilde ik beleggen, maar ik had geen idee hoe ik moest beginnen. Dankzij Hermoney ben ik goed geïnformeerd over beleggen en kon ik meteen starten met beleggen.',
        author: 'Gamze Anaz',
      },
      {
        quote:
          'Nadat ik mama ben geworden, wilde ik starten met beleggen voor mijn kind, maar ik wist niet goed waar te starten. Tijdens de workshop kreeg ik duidelijke uitleg en kon ik meteen aan de slag. Omdat ik zelf niet met veel ben opgegroeid is dit heel belangrijk voor mij.',
      },
    ] as Testimonial[],
    metric1: '10K+ communityleden',
    metric2: 'Wekelijkse coachingsessies',
    metric3: 'Begeleiding door experts',
    programsTitle: 'Programma’s',
    program1: 'Financiële Coaching',
    program1Body:
      'Bouw vertrouwen op met persoonlijke support en accountability. Verwacht duidelijke next steps, wekelijkse check-ins en een plan dat haalbaar is.',
    program2: 'Investeerclub',
    program2Body:
      'Start klein, blijf consistent en groei met structuur. Leer de basis, krijg prompts om actie te nemen en bouw gewoontes die blijven.',
    program3: 'Money Bootcamps',
    program3Body:
      'Gerichte leertrajecten voor snellere vooruitgang. Korte lessen, praktische oefeningen en een simpel stappenplan naar meer zekerheid.',
    tipsTitle: 'Snelle geldtips',
    tip1: 'Betaal eerst jezelf.',
    tip2: 'Start klein. Blijf consistent.',
    tip3: 'Volg waar je geld naartoe gaat.',
    howTitle: 'Hoe het werkt',
    step1: 'Leer de basis',
    step2: 'Bouw je plan',
    step3: 'Laat je vermogen groeien',
    communityTitle: 'Je staat er niet alleen voor.',
    communityBody:
      'Leer samen met vrouwen die jouw vragen, doelen en groeimindset delen.',
    finalTitle: 'Neem vandaag controle over je financiële toekomst.',
    finalBody: 'Start nu. Stap voor stap, helder en haalbaar.',
    footerTagline: 'Financiële zelfzekerheid, eenvoudig gemaakt.',
    footerAbout: 'Over ons',
    footerBlog: 'Blog',
    footerPodcast: 'Podcast',
    footerPrograms: 'Programma’s',
    newsletterTitle: 'Ontvang wekelijks tips voor meer geldvertrouwen',
    newsletterPlaceholder: 'Jouw e-mailadres',
    newsletterButton: 'Inschrijven',

    aboutTitle: 'Over HerMoney (België)',
    aboutSocialProof: 'Sluit je aan bij 5.000+ Belgische vrouwen',
    manifestoKicker: 'Manifesto',
    manifestoTitle:
      'De 50% pensioenkloof in België is niet zomaar een cijfer—het is een call to action.',
    manifestoBody:
      'Wij versterken Belgische vrouwen om controle te nemen over hun financiële toekomst—met helderheid, vertrouwen en community. Warm, menselijk en zonder “bank-taal”.',
    valuesTitle: 'Onze waarden',
    value1Title: 'Transparantie',
    value1Body: 'Duidelijk advies. Geen verborgen agenda. Geen schaamte.',
    value2Title: 'Simpel',
    value2Body: 'Geldlessen zoals een vriendin het zou uitleggen.',
    value3Title: 'Community',
    value3Body: 'Want samen groeit je zelfzekerheid sneller.',
    founderTitle: 'Meet the Founder',
    founderBio:
      'HerMoney is opgericht om vrouwen te versterken met kennis, vertrouwen en tools om te investeren en op lange termijn generatierijkdom op te bouwen in een ondersteunende en inclusieve omgeving.',
    founderQuote:
      'Educatieve workshops en keynotes voor vrouwen die willen investeren en generatierijkdom willen opbouwen.',
    founderSignOff: '— Founder, HerMoney België',
    localTitle: 'Lokale expertise, Belgische realiteit',
    localBody:
      'We behandelen Belgische nuances zoals TOB (beurstaks), fiscaliteit en de 3 pensioenpijlers—zodat je keuzes écht passen bij je leven in België.',
  },
  tr: {
    languageLabel: 'Dil',
    heroEyebrow: 'Kadınlar için finans medyası + eğitim',
    primaryCta: 'Topluluğa Katıl',
    secondaryCta: 'Daha Fazla Bilgi',
    learnMore: 'Detaylar',
    heroTrust: 'Parada güvenini artıran kadınların güvendiği platform',
    navProblem: 'Sorun',
    navSolution: 'Çözüm',
    navPrograms: 'Programlar',
    navHow: 'Nasıl çalışır',
    navCommunity: 'Topluluk',
    heroTitle: 'Biri sana arkadaş gibi anlattığında para daha net görünür.',
    heroBody:
      'Daha fazla güven, netlik ve kontrol isteyen kadınlar için sade ve uygulanabilir finansal eğitim.',
    problemTitle: 'Tanıdık geliyor mu?',
    problem1: 'Parayı yönetmek istiyorsun ama nereden başlayacağını bilmiyor musun?',
    problem2: 'Yatırıma başlamak gözünü mü korkutuyor?',
    problem3: 'Çok teknik gelen finans tavsiyelerinden yoruldun mu?',
    solutionTitle: 'Büyümenin daha basit yolu',
    learnTitle: 'Öğren',
    learnBody: 'Para konularını net adımlara bölen kısa içerikler.',
    growTitle: 'Büyü',
    growBody: 'Uygulanabilir yatırım rehberliği ile güvenle harekete geç.',
    supportTitle: 'Destek',
    supportBody: 'Seni istikrarlı tutan destekleyici bir topluluk.',
    proofTitle: 'Gerçek güven, gerçek ilerleme',
    testimonial1:
      '"Aşırı düşünmeyi bıraktım ve sonunda para kararlarımı güvenle veriyorum."',
    testimonial2: '"Jargon yok. Sadece netlik ve aksiyon. Tam ihtiyacım olan şey."',
    testimonials: [
      {
        quote:
          'Hermoney her kadin icin tavsiye edilir! Sumeyye yatirima nasil baslayabilecegini adim adim anlatiyor. Workshop sonrasi da bir sey net degilse her zaman ulasilabilir.',
        author: 'Sarah',
      },
      {
        quote:
          'Bu cok aydinlatici bir workshoptu; yatirimin helal ve haram kismi hakkinda bir cevap aldim. Bu sorulari baska hicbir yerde soramiyordum ama Sumeyye ile sorabildim. Herkes icin tavsiye ederim!',
      },
      {
        quote:
          "HerMoney workshopunu cok ilginc buldum. Sumeyye, yatirimi kadinlar arasinda daha bilinir hale getiriyor ve onu 'takimli erkekler' atmosferinden cikariyor. Ben de bu arada basladim ve harika buluyorum. Bence cok fazla kadin bunu gercekten sever!",
        author: 'Naziha El Handoussi',
      },
      {
        quote:
          'Uzun suredir yatirim yapmak istiyordum ama nasil baslayacagim konusunda hicbir fikrim yoktu. Hermoney sayesinde yatirim hakkinda iyi bilgilendirildim ve hemen baslayabildim.',
        author: 'Gamze Anaz',
      },
      {
        quote:
          'Anne olduktan sonra cocugum icin yatirima baslamak istedim ama nereden baslayacagimi iyi bilmiyordum. Workshop sirasinda net aciklamalar aldim ve hemen harekete gecebildim. Ben kendim bolluk icinde buyumedigim icin bu benim icin cok onemli.',
      },
    ] as Testimonial[],
    metric1: '10K+ topluluk üyesi',
    metric2: 'Haftalık koçluk oturumları',
    metric3: 'Uzman destekli rehberlik',
    programsTitle: 'Programlar',
    program1: 'Finansal Koçluk',
    program1Body:
      'Kişisel destek ve takip ile özgüvenini geliştir. Net sonraki adımlar, haftalık kontrol ve uygulanabilir bir plan.',
    program2: 'Yatırım Kulübü',
    program2Body:
      'Küçük başla, düzenli kal ve yapı ile büyü. Temelleri öğren, aksiyon önerileri al ve kalıcı alışkanlıklar kur.',
    program3: 'Para Bootcamp’leri',
    program3Body:
      'Daha hızlı gelişim için odaklı öğrenme programları. Kısa dersler, pratik egzersizler ve net bir yol haritası.',
    tipsTitle: 'Hızlı Para İpuçları',
    tip1: 'Önce kendine ödeme yap.',
    tip2: 'Küçük başla. Düzenli devam et.',
    tip3: 'Paranın nereye gittiğini takip et.',
    howTitle: 'Nasıl çalışır',
    step1: 'Temelleri öğren',
    step2: 'Planını oluştur',
    step3: 'Varlığını büyüt',
    communityTitle: 'Bu yolculukta yalnız değilsin.',
    communityBody:
      'Sorularını ve hedeflerini paylaşan kadınlarla birlikte öğren ve büyü.',
    finalTitle: 'Finansal geleceğinin kontrolünü bugün al.',
    finalBody: 'Hemen başla. Adım adım, net ve uygulanabilir.',
    footerTagline: 'Finansal güven, sade bir şekilde.',
    footerAbout: 'Hakkımızda',
    footerBlog: 'Blog',
    footerPodcast: 'Podcast',
    footerPrograms: 'Programlar',
    newsletterTitle: 'Haftalık para güveni ipuçları al',
    newsletterPlaceholder: 'E-posta adresin',
    newsletterButton: 'Abone Ol',

    aboutTitle: 'HerMoney (Belçika) Hakkında',
    aboutSocialProof: '5.000+ Belçikalı kadına katıl',
    manifestoKicker: 'Manifesto',
    manifestoTitle:
      'Belçika’daki %50 emeklilik farkı sadece bir istatistik değil—harekete geçme çağrısı.',
    manifestoBody:
      'Belçika’daki kadınların finansal geleceğini ele almasına yardımcı oluyoruz: netlik, özgüven ve topluluk ile. Banka gibi soğuk değil—ablalık gibi.',
    valuesTitle: 'Değerlerimiz',
    value1Title: 'Şeffaflık',
    value1Body: 'Net rehberlik. Gizli gündem yok. Utandırma yok.',
    value2Title: 'Sadelik',
    value2Body: 'Ders gibi değil; bir arkadaş gibi anlatım.',
    value3Title: 'Topluluk',
    value3Body: 'Çünkü güven birlikte daha hızlı büyür.',
    founderTitle: 'Kurucuyla Tanış',
    founderBio:
      'HerMoney, kadinlari bilgi, ozguven ve araclarla guclendirmek; yatirim yapmalarina ve destekleyici, kapsayici bir ortamda uzun vadeli nesiller boyu servet olusturmalarina yardim etmek icin kuruldu.',
    founderQuote:
      'Yatirim yapmak ve nesiller boyu servet insa etmek isteyen kadinlar icin egitici workshoplar ve keynote oturumlari.',
    founderSignOff: '— Kurucu, HerMoney Belçika',
    localTitle: 'Yerel uzmanlık, Belçika gerçekleri',
    localBody:
      'TOB (borsa vergisi), vergi detayları ve 3 emeklilik sütunu gibi Belçika’ya özel konuları ele alıyoruz—kararların gerçek hayatına uysun diye.',
  },
  fr: {
    languageLabel: 'Langue',
    heroEyebrow: 'Média financier + éducation pour les femmes',
    primaryCta: 'Rejoindre la communauté',
    secondaryCta: 'En savoir plus',
    learnMore: 'Découvrir',
    heroTrust: 'Adopté par des femmes qui développent leur confiance financière',
    navProblem: 'Problème',
    navSolution: 'Solution',
    navPrograms: 'Programmes',
    navHow: 'Comment ça marche',
    navCommunity: 'Communauté',
    heroTitle: 'L’argent devient plus clair quand on te l’explique comme une amie.',
    heroBody:
      'Une éducation financière simple et concrète pour les femmes qui veulent plus de confiance, de clarté et de contrôle.',
    problemTitle: 'Ça te parle ?',
    problem1: 'Perdue avec l’argent et sans savoir par où commencer ?',
    problem2: 'Peur de te lancer dans l’investissement ?',
    problem3: 'Fatiguée des conseils trop techniques ?',
    solutionTitle: 'Une façon plus simple d’évoluer',
    learnTitle: 'Apprendre',
    learnBody: 'Du contenu court qui transforme les sujets financiers en étapes claires.',
    growTitle: 'Évoluer',
    growBody: 'Commence à investir avec un accompagnement pratique.',
    supportTitle: 'Soutien',
    supportBody: 'Une communauté bienveillante pour rester régulière.',
    proofTitle: 'Vraie confiance, vrais résultats',
    testimonial1:
      '"J’ai arrêté de trop réfléchir et je prends enfin mes décisions financières avec confiance."',
    testimonial2: '"Pas de jargon. Juste de la clarté et de l’action. Exactement ce qu’il me fallait."',
    testimonials: [
      {
        quote:
          'Hermoney est une recommandation pour chaque femme ! Sumeyye explique etape par etape comment commencer a investir. Elle reste disponible apres le workshop quand quelque chose n’est pas clair !',
        author: 'Sarah',
      },
      {
        quote:
          'C’etait un workshop extremement eclairant dans lequel j’ai recu une reponse sur la partie halal et haram de l’investissement. Je ne pouvais poser ces questions nulle part, sauf chez Sumeyye. Une recommandation pour tout le monde !',
      },
      {
        quote:
          "J’ai trouve le workshop de HerMoney super interessant. Sumeyye fait en sorte que l’investissement soit plus connu chez les femmes et le sort de la sphere des 'hommes en costume'. Entre-temps j’ai commence moi-meme et je trouve ca genial. Je pense que beaucoup de femmes aimeraient vraiment ca !",
        author: 'Naziha El Handoussi',
      },
      {
        quote:
          'Depuis longtemps je voulais investir, mais je n’avais aucune idee de comment commencer. Grace a Hermoney, j’ai ete bien informee sur l’investissement et j’ai pu commencer tout de suite.',
        author: 'Gamze Anaz',
      },
      {
        quote:
          'Apres etre devenue maman, je voulais commencer a investir pour mon enfant, mais je ne savais pas bien par ou commencer. Pendant le workshop, j’ai recu des explications claires et j’ai pu me lancer tout de suite. Comme je n’ai pas grandi avec beaucoup de moyens, c’est tres important pour moi.',
      },
    ] as Testimonial[],
    metric1: '10K+ membres de la communauté',
    metric2: 'Sessions de coaching hebdomadaires',
    metric3: 'Accompagnement par des experts',
    programsTitle: 'Programmes',
    program1: 'Coaching Financier',
    program1Body:
      'Renforce ta confiance avec un accompagnement personnalisé. Des prochaines étapes claires, des check-ins réguliers et un plan réaliste.',
    program2: 'Club Investissement',
    program2Body:
      'Commence petit, reste régulière et progresse avec structure. Apprends les bases, passe à l’action et construis des habitudes durables.',
    program3: 'Bootcamps Finance',
    program3Body:
      'Des parcours ciblés pour avancer plus vite. Leçons courtes, exercices pratiques et une feuille de route simple vers la confiance.',
    tipsTitle: 'Conseils rapides',
    tip1: 'Paye-toi en premier.',
    tip2: 'Commence petit. Reste régulière.',
    tip3: 'Suis où va ton argent.',
    howTitle: 'Comment ça marche',
    step1: 'Apprendre les bases',
    step2: 'Construire ton plan',
    step3: 'Faire grandir ton patrimoine',
    communityTitle: 'Tu n’es pas seule dans ce parcours.',
    communityBody:
      'Apprends avec des femmes qui partagent tes questions et tes objectifs.',
    finalTitle: 'Prends le contrôle de ton avenir financier dès aujourd’hui.',
    finalBody: 'Commence maintenant. Un pas clair à la fois.',
    footerTagline: 'La confiance financière, en toute simplicité.',
    footerAbout: 'À propos',
    footerBlog: 'Blog',
    footerPodcast: 'Podcast',
    footerPrograms: 'Programmes',
    newsletterTitle: 'Reçois chaque semaine des conseils de confiance financière',
    newsletterPlaceholder: 'Ton adresse e-mail',
    newsletterButton: "S'abonner",

    aboutTitle: 'À propos de HerMoney (Belgique)',
    aboutSocialProof: 'Rejoindre 5 000+ femmes belges',
    manifestoKicker: 'Manifeste',
    manifestoTitle:
      'L’écart de pension de 50% en Belgique n’est pas qu’une statistique—c’est un appel à l’action.',
    manifestoBody:
      'Nous aidons les femmes belges à reprendre le contrôle de leur avenir financier avec clarté, confiance et communauté—sans l’ambiance froide d’une banque.',
    valuesTitle: 'Nos valeurs',
    value1Title: 'Transparence',
    value1Body: 'Des conseils clairs. Pas d’agendas cachés. Zéro jugement.',
    value2Title: 'Simplicité',
    value2Body: 'Des explications comme une amie—pas comme un manuel.',
    value3Title: 'Communauté',
    value3Body: 'Parce que la confiance se construit plus vite ensemble.',
    founderTitle: 'Rencontrer la fondatrice',
    founderBio:
      'HerMoney a ete cree pour donner aux femmes les connaissances, la confiance et les outils necessaires pour investir et construire une richesse generationnelle durable dans un environnement inclusif et bienveillant.',
    founderQuote:
      'Ateliers educatifs et keynotes pour les femmes qui veulent investir et construire une richesse generationnelle.',
    founderSignOff: '— Fondatrice, HerMoney Belgique',
    localTitle: 'Expertise locale, réalités belges',
    localBody:
      'Nous abordons les spécificités belges comme la TOB (taxe boursière), les nuances fiscales et les 3 piliers de pension—pour que tes décisions collent à ta vraie vie en Belgique.',
  },
} as const satisfies Record<Language, {
  languageLabel: string
  heroEyebrow: string
  primaryCta: string
  secondaryCta: string
  learnMore: string
  heroTrust: string
  navProblem: string
  navSolution: string
  navPrograms: string
  navHow: string
  navCommunity: string
  heroTitle: string
  heroBody: string
  problemTitle: string
  problem1: string
  problem2: string
  problem3: string
  solutionTitle: string
  learnTitle: string
  learnBody: string
  growTitle: string
  growBody: string
  supportTitle: string
  supportBody: string
  proofTitle: string
  testimonial1: string
  testimonial2: string
  testimonials: Testimonial[]
  metric1: string
  metric2: string
  metric3: string
  programsTitle: string
  program1: string
  program1Body: string
  program2: string
  program2Body: string
  program3: string
  program3Body: string
  tipsTitle: string
  tip1: string
  tip2: string
  tip3: string
  howTitle: string
  step1: string
  step2: string
  step3: string
  communityTitle: string
  communityBody: string
  finalTitle: string
  finalBody: string
  footerTagline: string
  footerAbout: string
  footerBlog: string
  footerPodcast: string
  footerPrograms: string
  newsletterTitle: string
  newsletterPlaceholder: string
  newsletterButton: string

  aboutTitle: string
  aboutSocialProof: string
  manifestoKicker: string
  manifestoTitle: string
  manifestoBody: string
  valuesTitle: string
  value1Title: string
  value1Body: string
  value2Title: string
  value2Body: string
  value3Title: string
  value3Body: string
  founderTitle: string
  founderBio: string
  founderQuote: string
  founderSignOff: string
  localTitle: string
  localBody: string
}>

function App() {
  const [language, setLanguage] = useState<Language>('nl')
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const t = copy[language]
  const heroConfidenceImg = new URL('../img/feel-confident-optimized.webp', import.meta.url).href
  const heroWorkshopImg = new URL('../img/image1-optimized.webp', import.meta.url).href
  const heroEmpowermentImg = new URL('../img/woman-emp-optimized.webp', import.meta.url).href
  const logoPath = new URL('../img/logo-transparent.webp', import.meta.url).href
  const founderPath = new URL('../img/founder-optimized.webp', import.meta.url).href
  const programCoachingImg = new URL('../img/financial-coaching-optimized.webp', import.meta.url).href
  const programInvestingImg = new URL('../img/investing-club-optimized.webp', import.meta.url).href
  const programBootcampsImg = new URL('../img/money-bootcamps-optimized.webp', import.meta.url).href
  const linkedInLogoPath = new URL('../img/linkedin.png', import.meta.url).href
  const socialLogoPath = new URL('../img/social.png', import.meta.url).href
  const testimonials = useMemo(() => t.testimonials, [t.testimonials])

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.animate-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setActiveTestimonial(0)
  }, [language])

  useEffect(() => {
    ;[
      logoPath,
      founderPath,
      heroConfidenceImg,
      heroWorkshopImg,
      heroEmpowermentImg,
      programCoachingImg,
      programInvestingImg,
      programBootcampsImg,
      linkedInLogoPath,
      socialLogoPath,
    ].forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [
    founderPath,
    heroConfidenceImg,
    heroEmpowermentImg,
    heroWorkshopImg,
    programBootcampsImg,
    programCoachingImg,
    programInvestingImg,
    linkedInLogoPath,
    logoPath,
    socialLogoPath,
  ])

  const goToNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-dvh bg-transparent text-[#f1eaff]">
      <header className="sticky top-0 z-50 border-b border-[#4f3a69] bg-[#251a37]/92 backdrop-blur">
        <nav className="hm-container flex min-h-16 flex-wrap items-center justify-between gap-3 py-3 md:flex-nowrap">
          <a href="#hero" className="inline-flex items-center">
            <img
              src={logoPath}
              alt="HerMoney"
              className="h-16 w-auto object-contain md:h-20"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            <a href="#solution" className="hm-nav-link">
              {t.navSolution}
            </a>
            <a href="#programs" className="hm-nav-link">
              {t.navPrograms}
            </a>
            <a href="#how" className="hm-nav-link">
              {t.navHow}
            </a>
            <a href="#community" className="hm-nav-link">
              {t.navCommunity}
            </a>
          </div>

          <div className="flex w-full items-center justify-end gap-2 sm:w-auto sm:justify-end">
            <div className="relative inline-flex">
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="cursor-pointer appearance-none rounded-full border border-[#cfbce2] bg-[#efe5f6]/70 px-3 py-1.5 pr-8 text-xs font-bold tracking-wide text-[#4f3a6a] outline-none ring-1 ring-[#c9b2dd] backdrop-blur-md"
              >
                <option value="en">EN</option>
                <option value="nl">NL</option>
                <option value="tr">TR</option>
                <option value="fr">FR</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 inline-flex items-center text-[#6d4c92]">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5">
                  <path
                    d="M5.5 7.5 10 12l4.5-4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="py-14 md:py-20">
          <div className="hm-container grid items-center gap-8 md:grid-cols-2">
            <div className="animate-on-scroll animate-fade-right">
              <p className="mb-3 inline-flex rounded-full bg-[#4b356a] px-3 py-1 text-xs font-semibold text-[#efe4ff]">
                {t.heroEyebrow}
              </p>
              <h1 className="text-4xl font-bold leading-tight text-[#f4ecff] sm:text-5xl">
                <span className="bg-gradient-to-r from-[#6d4c92] via-[#8f6ab6] to-[#b48ccf] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(109,76,146,0.25)]">
                  {language === 'en' && 'Money feels clearer'}
                  {language === 'nl' && 'Geld voelt duidelijker'}
                  {language === 'tr' && 'Para daha net'}
                  {language === 'fr' && "L’argent devient plus clair"}
                </span>{' '}
                <span className="text-[#f4ecff]">
                  {language === 'en' && 'when someone explains it like a friend.'}
                  {language === 'nl' && 'wanneer iemand het uitlegt als een vriendin.'}
                  {language === 'tr' && 'biri sana arkadaş gibi anlattığında.'}
                  {language === 'fr' && 'quand on te l’explique comme une amie.'}
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#d7c8ea] sm:text-lg">
                {t.heroBody}
              </p>
              <p className="mt-3 text-sm font-medium text-[#c7b6de]">{t.heroTrust}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#cta" className="hm-cta-primary">
                  {t.primaryCta}
                </a>
                <a href="#solution" className="hm-cta-secondary">
                  {t.secondaryCta}
                </a>
              </div>
            </div>

            <div className="animate-on-scroll animate-fade-up grid gap-4 sm:grid-cols-2">
              <img
                src={heroConfidenceImg}
                alt="Women learning together"
                className="h-44 w-full rounded-2xl object-cover ring-1 ring-[#e4d9ee] sm:h-52"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <img
                src={heroWorkshopImg}
                alt="Women in financial workshop"
                className="h-44 w-full rounded-2xl object-cover ring-1 ring-[#e4d9ee] sm:h-52"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <img
                src={heroEmpowermentImg}
                alt="Women empowerment illustration"
                className="h-44 w-full rounded-2xl object-cover ring-1 ring-[#e4d9ee] sm:col-span-2 sm:h-52"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-y border-[#4f3a69] bg-[#2b1f40]/70 py-12 backdrop-blur md:py-16"
        >
          <div className="hm-container">
            <div className="flex flex-col gap-8">
              <div className="animate-on-scroll animate-fade-up">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <h2 className="text-2xl font-bold tracking-tight text-[#f5eeff] sm:text-3xl">
                    <span className="font-[ui-serif,Georgia,serif]">{t.aboutTitle}</span>
                  </h2>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#3a2a55] px-4 py-2 text-sm font-semibold text-[#efe6fa] ring-1 ring-[#5a427a]">
                    <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#b07be0]" />
                    {t.aboutSocialProof}
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                <div className="animate-on-scroll animate-fade-right md:col-span-7">
                  <div className="rounded-3xl bg-[#312347]/90 p-7 ring-1 ring-[#5a427a] shadow-[0_14px_30px_rgba(8,4,16,0.36)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d4c92]">
                      {t.manifestoKicker}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold leading-tight text-[#f5eeff] sm:text-3xl">
                      <span className="font-[ui-serif,Georgia,serif]">{t.manifestoTitle}</span>
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#d2c2e7]">
                      {t.manifestoBody}
                    </p>
                  </div>
                </div>

                <div className="animate-on-scroll animate-fade-up md:col-span-5">
                  <div className="rounded-3xl bg-gradient-to-br from-[#3a2a55] to-[#312347] p-7 ring-1 ring-[#5a427a]">
                    <h3 className="text-lg font-semibold text-[#f3ecff]">
                      <span className="font-[ui-serif,Georgia,serif]">{t.valuesTitle}</span>
                    </h3>
                    <div className="mt-4 grid gap-3">
                      <div className="rounded-2xl bg-[#3e2d5c]/80 p-4 ring-1 ring-[#5a427a]">
                        <p className="text-sm font-semibold text-[#f3ecff]">{t.value1Title}</p>
                        <p className="mt-1 text-sm text-[#d2c2e7]">{t.value1Body}</p>
                      </div>
                      <div className="rounded-2xl bg-[#3e2d5c]/80 p-4 ring-1 ring-[#5a427a]">
                        <p className="text-sm font-semibold text-[#f3ecff]">{t.value2Title}</p>
                        <p className="mt-1 text-sm text-[#d2c2e7]">{t.value2Body}</p>
                      </div>
                      <div className="rounded-2xl bg-[#3e2d5c]/80 p-4 ring-1 ring-[#5a427a]">
                        <p className="text-sm font-semibold text-[#f3ecff]">{t.value3Title}</p>
                        <p className="mt-1 text-sm text-[#d2c2e7]">{t.value3Body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                <div className="animate-on-scroll animate-fade-up md:col-span-7">
                  <div className="rounded-3xl bg-[#312347]/90 p-7 ring-1 ring-[#5a427a] shadow-[0_14px_30px_rgba(8,4,16,0.36)]">
                    <h3 className="text-lg font-semibold text-[#f3ecff]">
                      <span className="font-[ui-serif,Georgia,serif]">{t.founderTitle}</span>
                    </h3>
                    <div className="mt-5 grid gap-5 sm:grid-cols-1 sm:items-start">
                      <div>
                        <p className="text-sm leading-relaxed text-[#d2c2e7]">{t.founderBio}</p>
                        <blockquote className="mt-4 rounded-2xl bg-[#3a2a55] p-4 ring-1 ring-[#5a427a]">
                          <p className="text-sm font-semibold text-[#f3ecff]">{t.founderQuote}</p>
                          <p className="mt-3 text-sm text-[#cbbbe2]">
                            <span className="font-[cursive]">{t.founderSignOff}</span>
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll animate-fade-right md:col-span-5">
                  <div className="rounded-3xl bg-[#2b2238] p-7 text-white shadow-[0_18px_45px_rgba(47,34,64,0.25)] ring-1 ring-white/10">
                    <h3 className="text-lg font-semibold">
                      <span className="font-[ui-serif,Georgia,serif]">{t.localTitle}</span>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      {t.localBody}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                        TOB
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                        Pension Pillars
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                        Belgium-first
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solution" className="py-12 md:py-16">
          <div className="hm-container animate-on-scroll animate-fade-up">
            <h2 className="hm-section-title">{t.solutionTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="hm-card relative overflow-visible">
                <div className="hm-icon-dot">L</div>
                <h3 className="hm-card-title mt-3">{t.learnTitle}</h3>
                <p className="hm-card-body">{t.learnBody}</p>
              </article>
              <article className="hm-card relative overflow-visible">
                <div className="hm-icon-dot">G</div>
                <h3 className="hm-card-title mt-3">{t.growTitle}</h3>
                <p className="hm-card-body">{t.growBody}</p>
              </article>
              <article className="hm-card">
                <div className="hm-icon-dot">S</div>
                <h3 className="hm-card-title mt-3">{t.supportTitle}</h3>
                <p className="hm-card-body">{t.supportBody}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="hm-container animate-on-scroll animate-fade-up">
            <h2 className="hm-section-title">{t.proofTitle}</h2>
            <div className="mx-auto mt-6 w-full max-w-2xl rounded-3xl border border-[#6e5390]/80 bg-[#312347]/65 p-3 shadow-[0_16px_36px_rgba(8,4,16,0.4)] backdrop-blur-xl sm:p-5">
              <div
                className="overflow-hidden rounded-2xl"
                onTouchStart={(event) => {
                  event.currentTarget.dataset.touchX = String(event.changedTouches[0].clientX)
                }}
                onTouchEnd={(event) => {
                  const startX = Number(event.currentTarget.dataset.touchX ?? '0')
                  const deltaX = event.changedTouches[0].clientX - startX
                  if (Math.abs(deltaX) < 40) return
                  if (deltaX < 0) {
                    goToNextTestimonial()
                  } else {
                    goToPrevTestimonial()
                  }
                }}
              >
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((tst) => (
                    <figure
                      key={tst.quote}
                      className="relative w-full shrink-0 overflow-hidden rounded-2xl border border-[#6e5390]/75 bg-[#3a2a55]/70 p-7 text-[#f0e8fb] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 min-h-[270px] sm:min-h-[290px]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-5 top-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1e8fa] text-2xl font-black leading-none text-[#6d4c92] ring-1 ring-[#dfcfee]"
                      >
                        “
                      </span>
                      <blockquote className="pt-8 text-base leading-relaxed text-[#e6daf7] sm:text-[1.03rem]">{tst.quote}</blockquote>
                      {tst.author ? (
                        <figcaption className="mt-4 text-sm font-semibold text-[#f1eaff]">
                          {tst.author}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goToPrevTestimonial}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#3a2a55] text-[#eadff8] ring-1 ring-[#6e5390] transition hover:bg-[#4a356b]"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.quote}
                      type="button"
                      aria-label={`Go to testimonial ${index + 1}`}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeTestimonial === index
                          ? 'w-7 bg-[#6d4c92]'
                          : 'w-2.5 bg-[#6f5591] hover:bg-[#8a6ab0]'
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goToNextTestimonial}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#3a2a55] text-[#eadff8] ring-1 ring-[#6e5390] transition hover:bg-[#4a356b]"
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="hm-pill">{t.metric1}</span>
              <span className="hm-pill">{t.metric2}</span>
              <span className="hm-pill">{t.metric3}</span>
            </div>
          </div>
        </section>

        <section id="programs" className="py-12 md:py-16">
          <div className="hm-container animate-on-scroll animate-fade-up">
            <h2 className="hm-section-title">{t.programsTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="hm-card">
                <div className="-mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl">
                  <img
                    src={programCoachingImg}
                    alt={t.program1}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none -mt-12 h-12 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#efe5f6] text-[#6d4c92] ring-1 ring-[#eadff1]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M7 18v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="hm-card-title">{t.program1}</h3>
                <p className="hm-card-body">{t.program1Body}</p>
                <a href="#cta" className="hm-inline-link">{t.learnMore}</a>
              </article>
              <article className="hm-card">
                <div className="-mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl">
                  <img
                    src={programInvestingImg}
                    alt={t.program2}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none -mt-12 h-12 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#efe5f6] text-[#6d4c92] ring-1 ring-[#eadff1]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M4 19V5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 15l4-4 3 3 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 8V6h-2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="hm-card-title">{t.program2}</h3>
                <p className="hm-card-body">{t.program2Body}</p>
                <a href="#cta" className="hm-inline-link">{t.learnMore}</a>
              </article>
              <article className="hm-card">
                <div className="-mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl">
                  <img
                    src={programBootcampsImg}
                    alt={t.program3}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none -mt-12 h-12 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#efe5f6] text-[#6d4c92] ring-1 ring-[#eadff1]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M13 2 3 14h7l-1 8 12-14h-7l-1-6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="hm-card-title">{t.program3}</h3>
                <p className="hm-card-body">{t.program3Body}</p>
                <a href="#cta" className="hm-inline-link">{t.learnMore}</a>
              </article>
            </div>
          </div>
        </section>

        <section id="how" className="py-12 md:py-16">
          <div className="hm-container animate-on-scroll animate-fade-up">
            <h2 className="hm-section-title">{t.howTitle}</h2>
            <div className="mt-10 flex flex-col gap-6 md:mt-12 md:flex-row md:items-start md:gap-6 md:pb-8">
              {[
                { step: `1. ${t.step1}`, offset: 'md:mt-0' },
                { step: `2. ${t.step2}`, offset: 'md:mt-10' },
                { step: `3. ${t.step3}`, offset: 'md:mt-20' },
              ].map((item) => (
                <article
                  key={item.step}
                  className={`group relative flex-1 overflow-hidden rounded-2xl border-2 border-[#8b6aac] bg-[#34254b]/90 p-6 shadow-[0_12px_28px_rgba(20,11,34,0.35)] transition-all duration-300 ${item.offset} hover:-translate-y-1 hover:border-[#a784ca] hover:shadow-[0_16px_30px_rgba(20,11,34,0.42)]`}
                >
                  <h3 className="relative text-lg font-bold text-[#f3ecff] transition-colors duration-300 group-hover:text-[#ffffff]">
                    {item.step}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="community" className="py-12 md:py-16">
          <div className="hm-container animate-on-scroll animate-fade-up">
            <div className="hm-card !bg-[#312347]/90">
              <h2 className="hm-section-title !text-2xl">{t.communityTitle}</h2>
              <p className="mt-3 max-w-2xl text-[#d2c2e7]">{t.communityBody}</p>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-[#e4d9ee]">
              <img
                src={heroEmpowermentImg}
                alt="Supportive women community"
                className="h-56 w-full object-cover sm:h-72"
              />
            </div>
          </div>
        </section>

        <section id="cta" className="py-14 md:py-20">
          <div className="hm-container animate-on-scroll animate-fade-up">
            <div className="rounded-3xl bg-gradient-to-r from-[#3b2b57] to-[#2f2245] p-8 text-center ring-1 ring-[#5a427a] md:p-12">
              <h2 className="text-3xl font-bold text-[#f3ecff] sm:text-4xl">{t.finalTitle}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-[#d2c2e7]">{t.finalBody}</p>
              <a href="https://instagram.com/hermoney.be" target="_blank" rel="noreferrer" className="hm-cta-primary mt-7 inline-flex">
                {t.primaryCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#4f3a69] py-8">
        <div className="hm-container grid gap-6 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="md:pr-12">
            <img
              src={logoPath}
              alt="HerMoney"
              className="h-12 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
            <p className="mt-3 text-sm text-[#d2c2e7]">
              {t.footerTagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:justify-center">
            <a
              href="#"
              className="inline-flex min-h-11 items-center rounded-md px-3 py-2.5 text-sm font-medium text-[#d9cbea]"
            >
              {t.footerAbout}
            </a>
            <a
              href="#programs"
              className="inline-flex min-h-11 items-center rounded-md px-3 py-2.5 text-sm font-medium text-[#d9cbea]"
            >
              {t.footerPrograms}
            </a>
          </div>

          <div className="flex items-center justify-start gap-3 md:justify-end">
            <a
              href="https://linkedin.com/company/hermoneybe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#3a2a55] ring-1 ring-[#5a427a]"
              aria-label="HerMoney LinkedIn"
            >
              <img
                src={linkedInLogoPath}
                alt="LinkedIn"
                className="h-5 w-5 object-contain"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              href="https://instagram.com/hermoney.be"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#3a2a55] ring-1 ring-[#5a427a]"
              aria-label="HerMoney Instagram"
            >
              <img
                src={socialLogoPath}
                alt="Social"
                className="h-5 w-5 object-contain"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-[#efe6fa]">{t.newsletterTitle}</p>
            <form className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder={t.newsletterPlaceholder}
                className="w-full rounded-xl border border-[#6e5390] bg-[#2b1f40] px-3 py-2 text-sm text-[#efe6fa] outline-none"
              />
              <button
                type="submit"
                className="hm-cta-primary !w-full !px-4 !py-2 sm:!w-auto"
              >
                {t.newsletterButton}
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
