export type Lang = "es" | "en";

const t = {
  es: {
    // Nav
    navHowItWorks: "Cómo Funciona",
    navFleet: "Flota",
    navDrivers: "Conductores",
    navDownload: "Descargar",
    navCta: "Únete a la Lista",

    // Hero
    heroBadge: "LA PRIMERA APP DE RIDES EN CUBA",
    heroHeadline: "Viajes,\nEntregas y\nMás en Cuba",
    heroSub:
      "Carros a gasolina, motores eléctricos, motos y entrega de comida. Todo en una app, diseñada para Cuba.",
    heroCta1: "Descargar App",
    heroCta2: "Únete a la Lista",
    heroStat1Val: "5K+",
    heroStat1Lbl: "En Lista de Espera",
    heroStat2Val: "3",
    heroStat2Lbl: "Tipos de Vehículo",
    heroStat3Val: "Pronto",
    heroStat3Lbl: "Lanzando en Cuba",

    // How It Works
    hiwBadge: "CÓMO FUNCIONA",
    hiwHeadline: "Tres Pasos Simples",
    hiwSub: "Pide, viaja y paga — todo desde tu teléfono en segundos.",
    hiwStep1Title: "Abre la App",
    hiwStep1Desc:
      "Descarga Habana Go, crea tu cuenta y selecciona tu punto de recogida.",
    hiwStep2Title: "Elige tu Viaje",
    hiwStep2Desc:
      "Escoge carro, motor eléctrico o moto. Entrega de comida también — todo en una sola app.",
    hiwStep3Title: "Viaja y Paga",
    hiwStep3Desc:
      "Tu conductor llega, viajas. Paga de forma segura en la app. Sin efectivo.",

    // Fleet
    fleetBadge: "NUESTRA FLOTA",
    fleetHeadline: "Tu Viaje,\nTu Elección",
    fleetSub: "Tres tipos de vehículo para cada necesidad y presupuesto.",
    fleetAvail: "Disponible",
    fleet1Title: "Carro Clásico",
    fleet1Desc: "Viajes cómodos y clásicos por toda La Habana",
    fleet2Title: "Motor Eléctrico",
    fleet2Desc: "Ecológico, rápido y silencioso por la ciudad",
    fleet3Title: "Motocicleta",
    fleet3Desc: "Rápida y económica — supera el tráfico habanero",

    // Driver
    driverBadge: "PARA CONDUCTORES",
    driverHeadline: "Convierte tus\nRuedas en\nGanancias",
    driverSub:
      "Únete a la red de conductores de Habana Go. Establece tus propios horarios, acepta viajes y gana más que en cualquier otra plataforma en Cuba.",
    driverBen1Title: "Horario Flexible",
    driverBen1Desc:
      "Maneja cuando quieras — mañanas, tardes, fines de semana.",
    driverBen2Title: "Ganancias Competitivas",
    driverBen2Desc: "Quédate con más de cada viaje. Pagos semanales a tu cuenta.",
    driverBen3Title: "Soporte al Conductor",
    driverBen3Desc: "Equipo de soporte 24/7 y herramientas dentro de la app.",
    driverBtn1: "Descargar App de Conductor",
    driverBtn2: "Lista de Conductores",

    // Waitlist
    wlBadge: "ACCESO ANTICIPADO",
    wlHeadline: "Sé el Primero\nen Viajar por Cuba",
    wlSub:
      "Únete a la lista blanca y obtén acceso anticipado exclusivo, incorporación prioritaria y un primer viaje gratis.",
    wlPlaceholder: "Ingresa tu correo electrónico",
    wlBtn: "Únete a la Lista",
    wlTrust: "Sin spam · Cancela cuando quieras · Más de 5,000 ya se unieron",

    // App Download
    dlBadge: "DESCARGA LA APP",
    dlHeadline: "Descarga\nHabana Go",
    dlSub: "Disponible próximamente en iOS y Android.",
    dlIos1: "Descárgalo en",
    dlIos2: "App Store",
    dlAndroid1: "Consíguelo en",
    dlAndroid2: "Google Play",

    // Footer
    footerDesc:
      "La primera plataforma de rides y entregas de Cuba. Diseñada para La Habana, construida para todos.",
    footerCol1: "Producto",
    footerCol1Links: ["Cómo Funciona", "Flota", "Descargar", "Precios"],
    footerCol2: "Empresa",
    footerCol2Links: ["Nosotros", "Empleos", "Prensa", "Contacto"],
    footerCol3: "Conectar",
    footerCol3Links: ["Instagram", "Twitter / X", "Facebook", "WhatsApp"],
    footerCopy: "© 2025 Habana Go. Todos los derechos reservados.",
    footerPrivacy: "Política de Privacidad",
    footerTerms: "Términos de Servicio",
  },

  en: {
    // Nav
    navHowItWorks: "How It Works",
    navFleet: "Fleet",
    navDrivers: "Drivers",
    navDownload: "Download",
    navCta: "Join Waitlist",

    // Hero
    heroBadge: "CUBA'S FIRST RIDE APP",
    heroHeadline: "Rides,\nDelivery &\nMore in Cuba",
    heroSub:
      "Gas cars, electric motors, motorcycles and food delivery. All in one app, designed for Cuba.",
    heroCta1: "Download App",
    heroCta2: "Join Waitlist",
    heroStat1Val: "5K+",
    heroStat1Lbl: "On Waitlist",
    heroStat2Val: "3",
    heroStat2Lbl: "Vehicle Types",
    heroStat3Val: "Soon",
    heroStat3Lbl: "Launching Cuba",

    // How It Works
    hiwBadge: "HOW IT WORKS",
    hiwHeadline: "Three Easy Steps",
    hiwSub: "Request, ride and pay — all from your phone in seconds.",
    hiwStep1Title: "Open the App",
    hiwStep1Desc:
      "Download Habana Go, create your account and set your pickup location.",
    hiwStep2Title: "Choose Your Ride",
    hiwStep2Desc:
      "Pick a gas car, electric motor, or motorcycle. Food delivery too — all in one app.",
    hiwStep3Title: "Ride & Pay",
    hiwStep3Desc:
      "Your driver arrives, you ride. Pay securely in-app. No cash needed.",

    // Fleet
    fleetBadge: "OUR FLEET",
    fleetHeadline: "Your Ride,\nYour Choice",
    fleetSub: "Three vehicle types to match every need and budget.",
    fleetAvail: "Available",
    fleet1Title: "Classic Gas Car",
    fleet1Desc: "Standard & comfortable rides across Havana",
    fleet2Title: "Electric Motor",
    fleet2Desc: "Eco-friendly, fast and quiet through the city",
    fleet3Title: "Gas Motorcycle",
    fleet3Desc: "Fast & affordable — beat Havana traffic",

    // Driver
    driverBadge: "FOR DRIVERS",
    driverHeadline: "Turn Your\nWheels Into\nEarnings",
    driverSub:
      "Join the Habana Go driver network. Set your own hours, accept rides, and earn more than any other platform in Cuba.",
    driverBen1Title: "Flexible Hours",
    driverBen1Desc: "Drive on your schedule — mornings, evenings, weekends.",
    driverBen2Title: "Competitive Earnings",
    driverBen2Desc: "Keep more of every fare. Weekly payouts to your account.",
    driverBen3Title: "Full Driver Support",
    driverBen3Desc: "Dedicated 24/7 support team and in-app tools.",
    driverBtn1: "Download Driver App",
    driverBtn2: "Join Driver Waitlist",

    // Waitlist
    wlBadge: "EARLY ACCESS",
    wlHeadline: "Be the First\nto Ride Cuba",
    wlSub:
      "Join the whitelist and get exclusive early access, priority onboarding, and a free first ride.",
    wlPlaceholder: "Enter your email address",
    wlBtn: "Join the Waitlist",
    wlTrust: "No spam · Cancel anytime · 5,000+ already joined",

    // App Download
    dlBadge: "GET THE APP",
    dlHeadline: "Download\nHabana Go",
    dlSub: "Available soon on iOS and Android.",
    dlIos1: "Download on the",
    dlIos2: "App Store",
    dlAndroid1: "Get it on",
    dlAndroid2: "Google Play",

    // Footer
    footerDesc:
      "Cuba's first ride & delivery platform. Designed for Havana, built for everyone.",
    footerCol1: "Product",
    footerCol1Links: ["How It Works", "Fleet", "Download", "Pricing"],
    footerCol2: "Company",
    footerCol2Links: ["About Us", "Careers", "Press", "Contact"],
    footerCol3: "Connect",
    footerCol3Links: ["Instagram", "Twitter / X", "Facebook", "WhatsApp"],
    footerCopy: "© 2025 Habana Go. All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
  },
} as const;

// Widen literal string types so both 'es' and 'en' are assignable
export type Translations = {
  [K in keyof (typeof t)["es"]]: (typeof t)["es"][K] extends ReadonlyArray<string>
    ? ReadonlyArray<string>
    : string;
};

export default t;
