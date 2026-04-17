import { useEffect, useState } from 'react'

type Language = 'nl' | 'en' | 'tr' | 'fr'

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
    metric1: '10K+ community members',
    metric2: 'Weekly coaching sessions',
    metric3: 'Expert-led guidance',
    programsTitle: 'Programs',
    program1: 'Financial Coaching',
    program1Body: 'Build confidence with personal support and accountability.',
    program2: 'Investing Club',
    program2Body: 'Start small, stay consistent, and grow with structure.',
    program3: 'Money Bootcamps',
    program3Body: 'Focused learning sprints for faster progress.',
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
    metric1: '10K+ communityleden',
    metric2: 'Wekelijkse coachingsessies',
    metric3: 'Begeleiding door experts',
    programsTitle: 'Programma’s',
    program1: 'Financiële Coaching',
    program1Body: 'Bouw vertrouwen op met persoonlijke support en accountability.',
    program2: 'Investeerclub',
    program2Body: 'Start klein, blijf consistent en groei met structuur.',
    program3: 'Money Bootcamps',
    program3Body: 'Gerichte leertrajecten voor snellere vooruitgang.',
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
    metric1: '10K+ topluluk üyesi',
    metric2: 'Haftalık koçluk oturumları',
    metric3: 'Uzman destekli rehberlik',
    programsTitle: 'Programlar',
    program1: 'Finansal Koçluk',
    program1Body: 'Kişisel destek ve takip ile özgüvenini geliştir.',
    program2: 'Yatırım Kulübü',
    program2Body: 'Küçük başla, düzenli kal ve yapı ile büyü.',
    program3: 'Para Bootcamp’leri',
    program3Body: 'Daha hızlı gelişim için odaklı öğrenme programları.',
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
    metric1: '10K+ membres de la communauté',
    metric2: 'Sessions de coaching hebdomadaires',
    metric3: 'Accompagnement par des experts',
    programsTitle: 'Programmes',
    program1: 'Coaching Financier',
    program1Body: 'Renforce ta confiance avec un accompagnement personnalisé.',
    program2: 'Club Investissement',
    program2Body: 'Commence petit, reste régulière et progresse avec structure.',
    program3: 'Bootcamps Finance',
    program3Body: 'Des parcours ciblés pour avancer plus vite.',
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
}>

function App() {
  const [language, setLanguage] = useState<Language>('nl')
  const t = copy[language]
  const heroConfidenceImg = new URL('../img/Feel confident with money.jpg', import.meta.url).href
  const heroWorkshopImg = new URL('../img/image1.PNG', import.meta.url).href
  const heroEmpowermentImg = new URL('../img/woman Empovement.jpg', import.meta.url).href
  const trustImg = new URL('../img/trust.jpg', import.meta.url).href
  const logoPath = new URL('../img/logo.PNG', import.meta.url).href

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

  return (
    <div className="min-h-dvh bg-transparent text-[#2b1f33]">
      <header className="sticky top-0 z-50 border-b border-[#d9cde5] bg-[#f8f5fb]/92 backdrop-blur">
        <nav className="hm-container flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
          <a href="#hero" className="inline-flex items-center">
            <img src={logoPath} alt="HerMoney" className="h-12 w-auto object-contain" />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            <a href="#problem" className="hm-nav-link">
              {t.navProblem}
            </a>
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

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center rounded-md bg-[#7f6aa1] px-2 py-1 ring-1 ring-[#6d588f]">
              <label
                htmlFor="language"
                className="mr-1 hidden text-[11px] font-medium uppercase tracking-wide text-white sm:inline"
              >
                {t.languageLabel}
              </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="cursor-pointer appearance-none rounded-md border border-[#bcaed1] bg-[#5a3f80] px-2 py-0.5 text-xs font-semibold text-white outline-none"
              >
                <option value="nl">NL</option>
                <option value="en">EN</option>
                <option value="tr">TR</option>
                <option value="fr">FR</option>
              </select>
            </div>

            <a href="#cta" className="hm-cta-primary">
              {t.primaryCta}
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="py-14 md:py-20">
          <div className="hm-container grid items-center gap-8 md:grid-cols-2">
            <div className="animate-on-scroll animate-fade-right">
              <p className="mb-3 inline-flex rounded-full bg-[#eadff4] px-3 py-1 text-xs font-semibold text-[#604b7f]">
                {t.heroEyebrow}
              </p>
              <h1 className="text-4xl font-bold leading-tight text-[#2f2240] sm:text-5xl">
                {t.heroTitle}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#66597f] sm:text-lg">
                {t.heroBody}
              </p>
              <p className="mt-3 text-sm font-medium text-[#7f6f96]">{t.heroTrust}</p>

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
              />
              <img
                src={heroWorkshopImg}
                alt="Women in financial workshop"
                className="h-44 w-full rounded-2xl object-cover ring-1 ring-[#e4d9ee] sm:h-52"
              />
              <img
                src={heroEmpowermentImg}
                alt="Women empowerment illustration"
                className="h-44 w-full rounded-2xl object-cover ring-1 ring-[#e4d9ee] sm:col-span-2 sm:h-52"
              />
            </div>
          </div>
        </section>

        <section id="problem" className="py-12 md:py-16">
          <div className="hm-container animate-on-scroll animate-fade-up">
            <h2 className="hm-section-title">{t.problemTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="hm-card"><p className="hm-card-body !mt-0">{t.problem1}</p></article>
              <article className="hm-card"><p className="hm-card-body !mt-0">{t.problem2}</p></article>
              <article className="hm-card"><p className="hm-card-body !mt-0">{t.problem3}</p></article>
            </div>
          </div>
        </section>

        <section id="solution" className="py-12 md:py-16">
          <div className="hm-container animate-on-scroll animate-fade-up">
            <h2 className="hm-section-title">{t.solutionTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="hm-card">
                <div className="hm-icon-dot">L</div>
                <h3 className="hm-card-title mt-3">{t.learnTitle}</h3>
                <p className="hm-card-body">{t.learnBody}</p>
              </article>
              <article className="hm-card">
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
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <blockquote className="hm-card text-[#54476b]">{t.testimonial1}</blockquote>
              <blockquote className="hm-card text-[#54476b]">{t.testimonial2}</blockquote>
              <article className="hm-card overflow-hidden !p-0">
                <img
                  src={trustImg}
                  alt="Trust indicator visual"
                  className="h-full min-h-40 w-full object-cover"
                />
              </article>
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
                <h3 className="hm-card-title">{t.program1}</h3>
                <p className="hm-card-body">{t.program1Body}</p>
                <a href="#cta" className="hm-inline-link">{t.learnMore}</a>
              </article>
              <article className="hm-card">
                <h3 className="hm-card-title">{t.program2}</h3>
                <p className="hm-card-body">{t.program2Body}</p>
                <a href="#cta" className="hm-inline-link">{t.learnMore}</a>
              </article>
              <article className="hm-card">
                <h3 className="hm-card-title">{t.program3}</h3>
                <p className="hm-card-body">{t.program3Body}</p>
                <a href="#cta" className="hm-inline-link">{t.learnMore}</a>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="hm-container animate-on-scroll animate-fade-up">
            <h2 className="hm-section-title">{t.tipsTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="hm-tip-card">{t.tip1}</article>
              <article className="hm-tip-card">{t.tip2}</article>
              <article className="hm-tip-card">{t.tip3}</article>
            </div>
          </div>
        </section>

        <section id="how" className="py-12 md:py-16">
          <div className="hm-container animate-on-scroll animate-fade-up">
            <h2 className="hm-section-title">{t.howTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="hm-card"><h3 className="hm-card-title">1. {t.step1}</h3></article>
              <article className="hm-card"><h3 className="hm-card-title">2. {t.step2}</h3></article>
              <article className="hm-card"><h3 className="hm-card-title">3. {t.step3}</h3></article>
            </div>
          </div>
        </section>

        <section id="community" className="py-12 md:py-16">
          <div className="hm-container animate-on-scroll animate-fade-up">
            <div className="hm-card !bg-[#f3edf8]">
              <h2 className="hm-section-title !text-2xl">{t.communityTitle}</h2>
              <p className="mt-3 max-w-2xl text-[#66597f]">{t.communityBody}</p>
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
            <div className="rounded-3xl bg-gradient-to-r from-[#ece4f5] to-[#f3eee7] p-8 text-center ring-1 ring-[#dfd3eb] md:p-12">
              <h2 className="text-3xl font-bold text-[#312548] sm:text-4xl">{t.finalTitle}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-[#6a5c83]">{t.finalBody}</p>
              <a href="https://instagram.com/hermoney.be" target="_blank" rel="noreferrer" className="hm-cta-primary mt-7 inline-flex">
                {t.primaryCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ddd3e8] py-8">
        <div className="hm-container grid gap-6 md:grid-cols-3">
          <div>
            <img src={logoPath} alt="HerMoney" className="h-10 w-auto object-contain" />
            <p className="mt-3 text-sm text-[#7b6d93]">
              {t.footerTagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a href="#" className="hm-nav-link">{t.footerAbout}</a>
            <a href="#" className="hm-nav-link">{t.footerBlog}</a>
            <a href="#" className="hm-nav-link">{t.footerPodcast}</a>
            <a href="#programs" className="hm-nav-link">{t.footerPrograms}</a>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#4a3a63]">{t.newsletterTitle}</p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder={t.newsletterPlaceholder}
                className="w-full rounded-xl border border-[#d9cce5] bg-white px-3 py-2 text-sm text-[#3d3154] outline-none"
              />
              <button type="submit" className="hm-cta-primary !px-4 !py-2">{t.newsletterButton}</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
