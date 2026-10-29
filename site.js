/* ============================================================
   Cabanaconde Backpackers — site.js
   Script clásico (NO module) para funcionar con file:// y http://
   Configuración + i18n (EN/ES/FR/DE) + init con red de seguridad
   ============================================================ */

var siteConfig = {
  businessName: "Cabanaconde Backpackers",

  contact: {
    whatsappNumber: "",
    bookingUrl: "",
    email: "",
    instagramUrl: "",
    facebookUrl: ""
  },

  tour: {
    name: "Colca Canyon Trekking",
    duration: "2 Days / 1 Night",
    price: 270,
    currency: "PEN",
    currencySymbol: "S/",
    pickupTime: "3:00 AM – 3:30 AM",
    returnTime: "5:30 PM – 6:00 PM"
  },

  media: {
    heroImage: "assets/conde1.jpg",
    overviewImage: "assets/conde9.jpg",
    day1Image: "assets/conde2.jpg",
    day2Image: "assets/conde8.jpg",
    gallery: [
      "assets/conde3.jpg",
      "assets/conde4.jpg",
      "assets/conde5.jpg",
      "assets/conde6.jpg",
      "assets/conde7.jpg"
    ]
  },

  seo: {
    title: "Colca Canyon Trekking 2 Days / 1 Night | Cabanaconde Backpackers",
    description: "Explore Colca Canyon on a 2-day trek to Sangalle Oasis. Price: S/ 270 per person."
  }
};

/* ------------------------------------------------------------
   Traducciones
   ------------------------------------------------------------ */
var translations = {
  en: {
    "nav.ariaLabel": "Main navigation",
    "nav.experience": "Experience",
    "nav.itinerary": "Itinerary",
    "nav.included": "What's included",
    "nav.faq": "FAQ",
    "nav.book": "Book your trek ↗",
    "lang.ariaLabel": "Language selector",
    "toggle.ariaLabel": "Open navigation",
    "hero.eyebrow": "Arequipa · Colca Canyon · Peru",
    "hero.title": "Go deeper.<br>Feel the <em>Andes.</em>",
    "hero.copy": "Descend into one of Peru's most spectacular landscapes. Hike through Colca Canyon, discover the Sangalle Oasis and wake up surrounded by the Andes.",
    "hero.cta1": "Explore the trek ↗",
    "hero.cta2": "Discover the itinerary",
    "hero.priceNote": "per person · 2 days / 1 night",
    "hero.alt": "Group of hikers in the Colca Canyon",
    "high.1.title": "2 days / 1 night",
    "high.1.sub": "A complete canyon adventure",
    "high.2.title": "22 km total",
    "high.2.sub": "Approximate hiking distance",
    "high.3.title": "Sangalle Oasis",
    "high.3.sub": "One night in the canyon",
    "high.4.title": "From Arequipa",
    "high.4.sub": "Tourist transportation included",
    "exp.eyebrow": "The experience",
    "exp.title": "Not just a viewpoint. An adventure into the canyon.",
    "exp.p1": "See the famous Andean condors at Cruz del Cóndor, descend into the canyon with a professional guide, share a meal in San Juan de Chuccho and spend the night at Sangalle Oasis.",
    "exp.p2": "The second day begins before sunrise, with a challenging ascent to Cabanaconde and a return journey through the viewpoints and thermal baths of the Colca region.",
    "exp.f1.label": "Day 1 hike",
    "exp.f1.value": "15 km · around 7 hours",
    "exp.f2.label": "Day 2 hike",
    "exp.f2.value": "7 km · 3–4 hours",
    "exp.f3.label": "Highest viewpoint on return",
    "exp.f3.value": "Approx. 4,190 m",
    "exp.f4.label": "Pickup in Arequipa",
    "exp.f4.value": "3:00–3:30 a.m.",
    "exp.alt": "Colca Canyon landscape with a wooden viewpoint",
    "itin.eyebrow": "Two days in the Andes",
    "itin.title": "Every step takes you somewhere extraordinary.",
    "itin.sub": "A demanding descent, a night in the oasis and an early-morning climb rewarded by the first light of day.",
    "day1.num": "Day 01 · The descent",
    "day1.title": "Into the canyon",
    "day1.meta": "15 km · Approximately 7 hours of hiking",
    "day1.stop1": "3:00–3:30 a.m. — Pickup at your accommodation in Arequipa.",
    "day1.stop2": "Breakfast in Chivay after approximately three hours of travel.",
    "day1.stop3": "Cruz del Cóndor viewpoint at approximately 3,600 m, with time to look for condors and take photographs.",
    "day1.stop4": "Transfer to San Miguel at 3,200 m and begin the descent.",
    "day1.stop5": "Cross the bridge and reach San Juan de Chuccho at 2,230 m for lunch with a local family.",
    "day1.stop6": "Continue hiking to Sangalle Oasis at 1,900 m. Enjoy the natural surroundings and swimming pools, then stay overnight.",
    "day1.alt": "Hikers walking on the trail in Colca Canyon",
    "day2.num": "Day 02 · The ascent",
    "day2.title": "Rise with the Andes",
    "day2.meta": "7 km · Approximately 3–4 hours of hiking",
    "day2.stop1": "4:30 a.m. — Begin the ascent in the dark and watch the canyon illuminate at sunrise.",
    "day2.stop2": "Reach Cabanaconde at approximately 3,300 m and have breakfast.",
    "day2.stop3": "Travel by vehicle and stop at Antahuilque viewpoint to see the agricultural terraces.",
    "day2.stop4": "Visit the thermal baths; entrance is paid separately.",
    "day2.stop5": "Continue to Chivay for lunch, which is not included.",
    "day2.stop6": "Stop at the volcanoes viewpoint at approximately 4,190 m, then return to Arequipa around 5:30–6:00 p.m.",
    "day2.alt": "Hikers celebrating at the canyon summit",
    "gal.eyebrow": "The Colca landscape",
    "gal.title": "Made for the curious.",
    "gal.sub": "Bring your camera, take your time at the viewpoints and prepare for a challenging hike through changing landscapes.",
    "gal.alt1": "Travellers admiring the Colca Canyon from a viewpoint",
    "gal.alt2": "San Antonio archaeological site information panel",
    "gal.alt3": "Group enjoying breakfast surrounded by Andean mountains",
    "gal.alt4": "Hikers walking past ancient stone structures in the canyon",
    "gal.alt5": "Photographer capturing the depth of Colca Canyon",
    "gal.disclaimer": "Photographs from the actual Colca Canyon trek.",
    "inc.eyebrow": "Know before you go",
    "inc.title": "Everything clear before you book.",
    "inc.sub": "The price and conditions below follow the information supplied by the tour owner.",
    "inc.incTitle": "Included in the price",
    "inc.inc1": "One night's accommodation at Sangalle Oasis.",
    "inc.inc2": "Two continental breakfasts, as specified by the owner.",
    "inc.inc3": "One conventional lunch and one dinner.",
    "inc.inc4": "Tourist transportation throughout the itinerary.",
    "inc.inc5": "Professional guided assistance throughout the journey.",
    "inc.excTitle": "Not included",
    "inc.exc1": "Final lunch in Chivay.",
    "inc.exc2": "Colca Canyon entrance ticket.",
    "inc.exc3": "Entrance to the thermal baths.",
    "inc.feesTitle": "Additional entrance fees",
    "inc.fee1": "Europe / USA — Colca entrance",
    "inc.fee2": "Latin America — Colca entrance",
    "inc.fee3": "Peruvian visitors — Colca entrance",
    "inc.fee4": "Thermal baths",
    "inc.disclaimer": "Entrance fees are those provided by the owner and should be reconfirmed before travel.",
    "book.eyebrow": "Your Colca adventure starts here",
    "book.title": "Two days. One unforgettable canyon.",
    "book.copy": "Colca Canyon Trekking · 2 Days / 1 Night. Full advance payment is required to confirm the booking. Last-minute cancellations and no-shows are non-refundable.",
    "book.perPerson": "per person",
    "booking.ctaBook": "Book this trek ↗",
    "booking.ctaAsk": "Ask about availability ↗",
    "booking.ctaDetails": "Booking details ↗",
    "booking.whatsappMessage": "Hello! I would like to ask about the Colca Canyon Trekking 2 Days / 1 Night tour for S/ 270 per person.",
    "faq.polEyebrow": "Booking policy",
    "faq.polTitle": "Good adventures begin with clear expectations.",
    "faq.polStrong": "Payment and cancellation",
    "faq.polCopy": "Full payment is required in advance. Your booking is confirmed once payment has been made. Last-minute cancellations and no-shows are non-refundable.",
    "faq.disclaimer": "Please confirm payment instructions and any other booking conditions directly with the operator before paying.",
    "faq.eyebrow": "Frequently asked questions",
    "faq.q1": "How much does the trek cost?",
    "faq.a1": "The advertised price is S/ 270 per person for the 2-day, 1-night tour. Colca Canyon entrance fees, thermal baths and the final lunch in Chivay are additional.",
    "faq.q2": "What time does the tour start and finish?",
    "faq.a2": "Pickup in Arequipa is between 3:00 and 3:30 a.m. The expected return to Arequipa is between 5:30 and 6:00 p.m. on the second day.",
    "faq.q3": "How challenging is the hike?",
    "faq.a3": "The route involves a long descent on day one and a steep ascent starting around 4:30 a.m. on day two. Prepare for strenuous hiking, altitude changes and uneven terrain.",
    "faq.q4": "Are meals and accommodation included?",
    "faq.a4": "One night at Sangalle Oasis, two continental breakfasts, one conventional lunch and one dinner are included according to the owner's information. The final lunch in Chivay is not included.",
    "faq.q5": "How do I confirm my reservation?",
    "faq.a5": "Full advance payment is required. The booking is confirmed after payment. Use the operator's verified contact or booking link once those details have been added to this website.",
    "faq.q6": "What should I bring?",
    "faq.a6": "Ask the operator for a final packing list. In general, prepare hiking footwear, layers for cold early mornings, sun protection, water and a small backpack. Confirm the expected weather and equipment requirements before departure.",
    "contact.eyebrow": "Contact and reservations",
    "contact.msgPending": "Booking contact details will be published here when supplied by the owner.",
    "contact.msgActive": "Contact the operator using the verified links below.",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.instagram": "Instagram",
    "contact.facebook": "Facebook",
    "footer.tagline": "Discover the Andes, one step at a time.",
    "footer.itinerary": "Itinerary",
    "footer.inclusions": "Inclusions",
    "footer.faq": "FAQ",
    "footer.copy": "Tour information supplied by the owner."
  },

  es: {
    "nav.ariaLabel": "Navegación principal",
    "nav.experience": "Experiencia",
    "nav.itinerary": "Itinerario",
    "nav.included": "Qué incluye",
    "nav.faq": "FAQ",
    "nav.book": "Reserva tu trekking ↗",
    "lang.ariaLabel": "Selector de idioma",
    "toggle.ariaLabel": "Abrir navegación",
    "hero.eyebrow": "Arequipa · Cañón del Colca · Perú",
    "hero.title": "Adéntrate.<br>Siente los <em>Andes.</em>",
    "hero.copy": "Desciende a uno de los paisajes más espectaculares del Perú. Camina por el Cañón del Colca, descubre el Oasis de Sangalle y despierta rodeado de los Andes.",
    "hero.cta1": "Explora el trekking ↗",
    "hero.cta2": "Descubre el itinerario",
    "hero.priceNote": "por persona · 2 días / 1 noche",
    "hero.alt": "Grupo de excursionistas en el Cañón del Colca",
    "high.1.title": "2 días / 1 noche",
    "high.1.sub": "Una aventura completa en el cañón",
    "high.2.title": "22 km en total",
    "high.2.sub": "Distancia aproximada de senderismo",
    "high.3.title": "Oasis de Sangalle",
    "high.3.sub": "Una noche en el cañón",
    "high.4.title": "Desde Arequipa",
    "high.4.sub": "Transporte turístico incluido",
    "exp.eyebrow": "La experiencia",
    "exp.title": "No solo un mirador. Una aventura dentro del cañón.",
    "exp.p1": "Observa a los famosos cóndores andinos en la Cruz del Cóndor, desciende al cañón con un guía profesional, comparte una comida en San Juan de Chuccho y pasa la noche en el Oasis de Sangalle.",
    "exp.p2": "El segundo día comienza antes del amanecer, con un desafiante ascenso a Cabanaconde y el regreso a través de los miradores y aguas termales de la región del Colca.",
    "exp.f1.label": "Caminata día 1",
    "exp.f1.value": "15 km · unas 7 horas",
    "exp.f2.label": "Caminata día 2",
    "exp.f2.value": "7 km · 3–4 horas",
    "exp.f3.label": "Mirador más alto al regreso",
    "exp.f3.value": "Aprox. 4.190 m",
    "exp.f4.label": "Recogida en Arequipa",
    "exp.f4.value": "3:00–3:30 a.m.",
    "exp.alt": "Paisaje del Cañón del Colca con un mirador de madera",
    "itin.eyebrow": "Dos días en los Andes",
    "itin.title": "Cada paso te lleva a un lugar extraordinario.",
    "itin.sub": "Un descenso exigente, una noche en el oasis y un ascenso al amanecer recompensado por la primera luz del día.",
    "day1.num": "Día 01 · El descenso",
    "day1.title": "Dentro del cañón",
    "day1.meta": "15 km · Aproximadamente 7 horas de caminata",
    "day1.stop1": "3:00–3:30 a.m. — Recogida en tu alojamiento de Arequipa.",
    "day1.stop2": "Desayuno en Chivay tras aproximadamente tres horas de viaje.",
    "day1.stop3": "Mirador Cruz del Cóndor a unos 3.600 m, con tiempo para buscar cóndores y tomar fotografías.",
    "day1.stop4": "Traslado a San Miguel a 3.200 m e inicio del descenso.",
    "day1.stop5": "Cruza el puente y llega a San Juan de Chuccho a 2.230 m para almorzar con una familia local.",
    "day1.stop6": "Continúa caminando hasta el Oasis de Sangalle a 1.900 m. Disfruta del entorno natural y las piscinas, y pasa la noche.",
    "day1.alt": "Excursionistas caminando por el sendero en el Cañón del Colca",
    "day2.num": "Día 02 · El ascenso",
    "day2.title": "Levántate con los Andes",
    "day2.meta": "7 km · Aproximadamente 3–4 horas de caminata",
    "day2.stop1": "4:30 a.m. — Comienza el ascenso en la oscuridad y observa cómo se ilumina el cañón al amanecer.",
    "day2.stop2": "Llega a Cabanaconde a unos 3.300 m y desayuna.",
    "day2.stop3": "Viaja en vehículo y detente en el mirador de Antahuilque para ver las terrazas agrícolas.",
    "day2.stop4": "Visita las aguas termales; la entrada se paga aparte.",
    "day2.stop5": "Continúa a Chivay para almorzar, almuerzo no incluido.",
    "day2.stop6": "Parada en el mirador de los volcanes a unos 4.190 m y regreso a Arequipa alrededor de las 5:30–6:00 p.m.",
    "day2.alt": "Excursionistas celebrando en la cima del cañón",
    "gal.eyebrow": "El paisaje del Colca",
    "gal.title": "Hecho para los curiosos.",
    "gal.sub": "Trae tu cámara, tómate tu tiempo en los miradores y prepárate para una caminata desafiante a través de paisajes cambiantes.",
    "gal.alt1": "Viajeros admirando el Cañón del Colca desde un mirador",
    "gal.alt2": "Panel informativo del sitio arqueológico San Antonio",
    "gal.alt3": "Grupo disfrutando del desayuno rodeado de montañas andinas",
    "gal.alt4": "Excursionistas caminando junto a antiguas estructuras de piedra en el cañón",
    "gal.alt5": "Fotógrafo capturando la profundidad del Cañón del Colca",
    "gal.disclaimer": "Fotografías del trekking real en el Cañón del Colca.",
    "inc.eyebrow": "Antes de partir",
    "inc.title": "Todo claro antes de reservar.",
    "inc.sub": "El precio y las condiciones a continuación siguen la información proporcionada por el propietario del tour.",
    "inc.incTitle": "Incluido en el precio",
    "inc.inc1": "Una noche de alojamiento en el Oasis de Sangalle.",
    "inc.inc2": "Dos desayunos continentales, según lo indicado por el propietario.",
    "inc.inc3": "Un almuerzo convencional y una cena.",
    "inc.inc4": "Transporte turístico durante todo el itinerario.",
    "inc.inc5": "Asistencia de guía profesional durante todo el recorrido.",
    "inc.excTitle": "No incluido",
    "inc.exc1": "Almuerzo final en Chivay.",
    "inc.exc2": "Ticket de entrada al Cañón del Colca.",
    "inc.exc3": "Entrada a las aguas termales.",
    "inc.feesTitle": "Entradas adicionales",
    "inc.fee1": "Europa / EE. UU. — Entrada Colca",
    "inc.fee2": "Latinoamérica — Entrada Colca",
    "inc.fee3": "Visitantes peruanos — Entrada Colca",
    "inc.fee4": "Aguas termales",
    "inc.disclaimer": "Las tarifas de entrada son las proporcionadas por el propietario y deben reconfirmarse antes del viaje.",
    "book.eyebrow": "Tu aventura en el Colca empieza aquí",
    "book.title": "Dos días. Un cañón inolvidable.",
    "book.copy": "Trekking por el Cañón del Colca · 2 días / 1 noche. Se requiere pago total por adelantado para confirmar la reserva. Las cancelaciones de última hora y las ausencias no son reembolsables.",
    "book.perPerson": "por persona",
    "booking.ctaBook": "Reserva este trekking ↗",
    "booking.ctaAsk": "Consulta disponibilidad ↗",
    "booking.ctaDetails": "Detalles de reserva ↗",
    "booking.whatsappMessage": "¡Hola! Me gustaría consultar sobre el tour Trekking por el Cañón del Colca 2 días / 1 noche por S/ 270 por persona.",
    "faq.polEyebrow": "Política de reserva",
    "faq.polTitle": "Las buenas aventuras comienzan con expectativas claras.",
    "faq.polStrong": "Pago y cancelación",
    "faq.polCopy": "Se requiere pago total por adelantado. Tu reserva queda confirmada una vez realizado el pago. Las cancelaciones de última hora y las ausencias no son reembolsables.",
    "faq.disclaimer": "Confirma las instrucciones de pago y cualquier otra condición de reserva directamente con el operador antes de pagar.",
    "faq.eyebrow": "Preguntas frecuentes",
    "faq.q1": "¿Cuánto cuesta el trekking?",
    "faq.a1": "El precio anunciado es de S/ 270 por persona para el tour de 2 días / 1 noche. Las entradas al Cañón del Colca, las aguas termales y el almuerzo final en Chivay son adicionales.",
    "faq.q2": "¿A qué hora comienza y termina el tour?",
    "faq.a2": "La recogida en Arequipa es entre las 3:00 y 3:30 a.m. El regreso previsto a Arequipa es entre las 5:30 y 6:00 p.m. del segundo día.",
    "faq.q3": "¿Qué tan exigente es la caminata?",
    "faq.a3": "La ruta implica un largo descenso el primer día y un ascenso pronunciado a partir de las 4:30 a.m. del segundo día. Prepárate para caminatas exigentes, cambios de altitud y terreno irregular.",
    "faq.q4": "¿Están incluidas las comidas y el alojamiento?",
    "faq.a4": "Según la información del propietario, se incluye una noche en el Oasis de Sangalle, dos desayunos continentales, un almuerzo convencional y una cena. El almuerzo final en Chivay no está incluido.",
    "faq.q5": "¿Cómo confirmo mi reserva?",
    "faq.a5": "Se requiere pago total por adelantado. La reserva se confirma tras el pago. Utiliza el contacto verificado del operador o el enlace de reserva una vez que estos datos se hayan añadido a este sitio web.",
    "faq.q6": "¿Qué debo llevar?",
    "faq.a6": "Pide al operador una lista de equipaje final. En general, prepara calzado de senderismo, capas para las mañanas frías, protección solar, agua y una mochila pequeña. Confirma el clima previsto y los requisitos de equipo antes de partir.",
    "contact.eyebrow": "Contacto y reservas",
    "contact.msgPending": "Los datos de contacto para reservas se publicarán aquí cuando el propietario los proporcione.",
    "contact.msgActive": "Contacta al operador a través de los enlaces verificados a continuación.",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Correo electrónico",
    "contact.instagram": "Instagram",
    "contact.facebook": "Facebook",
    "footer.tagline": "Descubre los Andes, paso a paso.",
    "footer.itinerary": "Itinerario",
    "footer.inclusions": "Inclusiones",
    "footer.faq": "FAQ",
    "footer.copy": "Información del tour proporcionada por el propietario."
  },

  fr: {
    "nav.ariaLabel": "Navigation principale",
    "nav.experience": "Expérience",
    "nav.itinerary": "Itinéraire",
    "nav.included": "Ce qui est inclus",
    "nav.faq": "FAQ",
    "nav.book": "Réservez votre trek ↗",
    "lang.ariaLabel": "Sélecteur de langue",
    "toggle.ariaLabel": "Ouvrir la navigation",
    "hero.eyebrow": "Arequipa · Canyon de Colca · Pérou",
    "hero.title": "Allez plus loin.<br>Ressentez les <em>Andes.</em>",
    "hero.copy": "Descendez dans l'un des paysages les plus spectaculaires du Pérou. Randonnez dans le canyon de Colca, découvrez l'oasis de Sangalle et réveillez-vous entouré des Andes.",
    "hero.cta1": "Explorez le trek ↗",
    "hero.cta2": "Découvrez l'itinéraire",
    "hero.priceNote": "par personne · 2 jours / 1 nuit",
    "hero.alt": "Groupe de randonneurs dans le canyon de Colca",
    "high.1.title": "2 jours / 1 nuit",
    "high.1.sub": "Une aventure complète dans le canyon",
    "high.2.title": "22 km au total",
    "high.2.sub": "Distance de randonnée approximative",
    "high.3.title": "Oasis de Sangalle",
    "high.3.sub": "Une nuit dans le canyon",
    "high.4.title": "Depuis Arequipa",
    "high.4.sub": "Transport touristique inclus",
    "exp.eyebrow": "L'expérience",
    "exp.title": "Pas seulement un point de vue. Une aventure dans le canyon.",
    "exp.p1": "Observez les célèbres condors des Andes à la Cruz del Cóndor, descendez dans le canyon avec un guide professionnel, partagez un repas à San Juan de Chuccho et passez la nuit à l'oasis de Sangalle.",
    "exp.p2": "Le deuxième jour commence avant le lever du soleil, avec une ascension exigeante vers Cabanaconde et un retour à travers les points de vue et les bains thermaux de la région de Colca.",
    "exp.f1.label": "Randonnée jour 1",
    "exp.f1.value": "15 km · environ 7 heures",
    "exp.f2.label": "Randonnée jour 2",
    "exp.f2.value": "7 km · 3–4 heures",
    "exp.f3.label": "Point de vue le plus haut au retour",
    "exp.f3.value": "Env. 4 190 m",
    "exp.f4.label": "Prise en charge à Arequipa",
    "exp.f4.value": "3h00–3h30",
    "exp.alt": "Paysage du canyon de Colca avec un belvédère en bois",
    "itin.eyebrow": "Deux jours dans les Andes",
    "itin.title": "Chaque pas vous mène vers un endroit extraordinaire.",
    "itin.sub": "Une descente exigeante, une nuit dans l'oasis et une ascension matinale récompensée par les premières lueurs du jour.",
    "day1.num": "Jour 01 · La descente",
    "day1.title": "Dans le canyon",
    "day1.meta": "15 km · Environ 7 heures de randonnée",
    "day1.stop1": "3h00–3h30 — Prise en charge à votre hébergement à Arequipa.",
    "day1.stop2": "Petit-déjeuner à Chivay après environ trois heures de trajet.",
    "day1.stop3": "Point de vue Cruz del Cóndor à environ 3 600 m, avec du temps pour observer les condors et prendre des photos.",
    "day1.stop4": "Transfert à San Miguel à 3 200 m et début de la descente.",
    "day1.stop5": "Traversez le pont et rejoignez San Juan de Chuccho à 2 230 m pour déjeuner avec une famille locale.",
    "day1.stop6": "Continuez jusqu'à l'oasis de Sangalle à 1 900 m. Profitez du cadre naturel et des piscines, puis passez la nuit.",
    "day1.alt": "Randonneurs marchant sur le sentier du canyon de Colca",
    "day2.num": "Jour 02 · L'ascension",
    "day2.title": "Levez-vous avec les Andes",
    "day2.meta": "7 km · Environ 3–4 heures de randonnée",
    "day2.stop1": "4h30 — Commencez l'ascension dans l'obscurité et regardez le canyon s'illuminer au lever du soleil.",
    "day2.stop2": "Arrivez à Cabanaconde à environ 3 300 m et prenez le petit-déjeuner.",
    "day2.stop3": "Voyagez en véhicule et arrêtez-vous au point de vue d'Antahuilque pour voir les terrasses agricoles.",
    "day2.stop4": "Visitez les bains thermaux ; l'entrée est payante séparément.",
    "day2.stop5": "Continuez vers Chivay pour le déjeuner, non inclus.",
    "day2.stop6": "Arrêt au point de vue des volcans à environ 4 190 m, puis retour à Arequipa vers 17h30–18h00.",
    "day2.alt": "Randonneurs célébrant au sommet du canyon",
    "gal.eyebrow": "Le paysage de Colca",
    "gal.title": "Fait pour les curieux.",
    "gal.sub": "Apportez votre appareil photo, prenez votre temps aux points de vue et préparez-vous à une randonnée exigeante à travers des paysages changeants.",
    "gal.alt1": "Voyageurs admirant le canyon de Colca depuis un belvédère",
    "gal.alt2": "Panneau d'information du site archéologique San Antonio",
    "gal.alt3": "Groupe profitant du petit-déjeuner entouré de montagnes andines",
    "gal.alt4": "Randonneurs marchant près d'anciennes structures en pierre dans le canyon",
    "gal.alt5": "Photographe capturant la profondeur du canyon de Colca",
    "gal.disclaimer": "Photographies du trek réel dans le canyon de Colca.",
    "inc.eyebrow": "Avant de partir",
    "inc.title": "Tout est clair avant de réserver.",
    "inc.sub": "Le prix et les conditions ci-dessous suivent les informations fournies par le propriétaire du tour.",
    "inc.incTitle": "Inclus dans le prix",
    "inc.inc1": "Une nuit d'hébergement à l'oasis de Sangalle.",
    "inc.inc2": "Deux petits-déjeuners continentaux, comme indiqué par le propriétaire.",
    "inc.inc3": "Un déjeuner conventionnel et un dîner.",
    "inc.inc4": "Transport touristique tout au long de l'itinéraire.",
    "inc.inc5": "Assistance d'un guide professionnel tout au long du parcours.",
    "inc.excTitle": "Non inclus",
    "inc.exc1": "Déjeuner final à Chivay.",
    "inc.exc2": "Billet d'entrée au canyon de Colca.",
    "inc.exc3": "Entrée aux bains thermaux.",
    "inc.feesTitle": "Frais d'entrée supplémentaires",
    "inc.fee1": "Europe / États-Unis — Entrée Colca",
    "inc.fee2": "Amérique latine — Entrée Colca",
    "inc.fee3": "Visiteurs péruviens — Entrée Colca",
    "inc.fee4": "Bains thermaux",
    "inc.disclaimer": "Les frais d'entrée sont ceux fournis par le propriétaire et doivent être reconfirmés avant le voyage.",
    "book.eyebrow": "Votre aventure à Colca commence ici",
    "book.title": "Deux jours. Un canyon inoubliable.",
    "book.copy": "Trekking dans le canyon de Colca · 2 jours / 1 nuit. Le paiement intégral à l'avance est requis pour confirmer la réservation. Les annulations de dernière minute et les absences ne sont pas remboursables.",
    "book.perPerson": "par personne",
    "booking.ctaBook": "Réservez ce trek ↗",
    "booking.ctaAsk": "Vérifier la disponibilité ↗",
    "booking.ctaDetails": "Détails de réservation ↗",
    "booking.whatsappMessage": "Bonjour ! Je souhaite me renseigner sur le trek de 2 jours / 1 nuit dans le canyon de Colca à S/ 270 par personne.",
    "faq.polEyebrow": "Politique de réservation",
    "faq.polTitle": "Les bonnes aventures commencent par des attentes claires.",
    "faq.polStrong": "Paiement et annulation",
    "faq.polCopy": "Le paiement intégral est requis à l'avance. Votre réservation est confirmée une fois le paiement effectué. Les annulations de dernière minute et les absences ne sont pas remboursables.",
    "faq.disclaimer": "Veuillez confirmer les instructions de paiement et toute autre condition de réservation directement avec l'opérateur avant de payer.",
    "faq.eyebrow": "Questions fréquentes",
    "faq.q1": "Combien coûte le trek ?",
    "faq.a1": "Le prix annoncé est de S/ 270 par personne pour le circuit de 2 jours / 1 nuit. Les frais d'entrée au canyon de Colca, les bains thermaux et le déjeuner final à Chivay sont en supplément.",
    "faq.q2": "À quelle heure commence et se termine le circuit ?",
    "faq.a2": "La prise en charge à Arequipa se fait entre 3h00 et 3h30. Le retour prévu à Arequipa est entre 17h30 et 18h00 le deuxième jour.",
    "faq.q3": "Quelle est la difficulté de la randonnée ?",
    "faq.a3": "Le parcours comprend une longue descente le premier jour et une ascension raide à partir de 4h30 le deuxième jour. Préparez-vous à une randonnée exigeante, à des changements d'altitude et à un terrain irrégulier.",
    "faq.q4": "Les repas et l'hébergement sont-ils inclus ?",
    "faq.a4": "Selon les informations du propriétaire, une nuit à l'oasis de Sangalle, deux petits-déjeuners continentaux, un déjeuner conventionnel et un dîner sont inclus. Le déjeuner final à Chivay n'est pas inclus.",
    "faq.q5": "Comment confirmer ma réservation ?",
    "faq.a5": "Le paiement intégral à l'avance est requis. La réservation est confirmée après paiement. Utilisez le contact vérifié de l'opérateur ou le lien de réservation une fois ces informations ajoutées à ce site.",
    "faq.q6": "Que dois-je emporter ?",
    "faq.a6": "Demandez à l'opérateur une liste d'équipement finale. En général, préparez des chaussures de randonnée, des couches pour les matins froids, une protection solaire, de l'eau et un petit sac à dos. Confirmez la météo prévue et les exigences en matière d'équipement avant le départ.",
    "contact.eyebrow": "Contact et réservations",
    "contact.msgPending": "Les coordonnées de réservation seront publiées ici lorsque le propriétaire les fournira.",
    "contact.msgActive": "Contactez l'opérateur via les liens vérifiés ci-dessous.",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "E-mail",
    "contact.instagram": "Instagram",
    "contact.facebook": "Facebook",
    "footer.tagline": "Découvrez les Andes, pas à pas.",
    "footer.itinerary": "Itinéraire",
    "footer.inclusions": "Inclusions",
    "footer.faq": "FAQ",
    "footer.copy": "Informations du circuit fournies par le propriétaire."
  },

  de: {
    "nav.ariaLabel": "Hauptnavigation",
    "nav.experience": "Erlebnis",
    "nav.itinerary": "Reiseverlauf",
    "nav.included": "Inklusivleistungen",
    "nav.faq": "FAQ",
    "nav.book": "Trekking buchen ↗",
    "lang.ariaLabel": "Sprachauswahl",
    "toggle.ariaLabel": "Navigation öffnen",
    "hero.eyebrow": "Arequipa · Colca-Schlucht · Peru",
    "hero.title": "Geh tiefer.<br>Spüre die <em>Anden.</em>",
    "hero.copy": "Steige in eine der spektakulärsten Landschaften Perus hinab. Wandere durch die Colca-Schlucht, entdecke die Sangalle-Oase und erwache umgeben von den Anden.",
    "hero.cta1": "Trekking entdecken ↗",
    "hero.cta2": "Reiseverlauf ansehen",
    "hero.priceNote": "pro Person · 2 Tage / 1 Nacht",
    "hero.alt": "Gruppe von Wanderern in der Colca-Schlucht",
    "high.1.title": "2 Tage / 1 Nacht",
    "high.1.sub": "Ein vollständiges Schluchtabenteuer",
    "high.2.title": "22 km insgesamt",
    "high.2.sub": "Ungefähre Wanderstrecke",
    "high.3.title": "Sangalle-Oase",
    "high.3.sub": "Eine Nacht in der Schlucht",
    "high.4.title": "Ab Arequipa",
    "high.4.sub": "Touristentransport inklusive",
    "exp.eyebrow": "Das Erlebnis",
    "exp.title": "Nicht nur ein Aussichtspunkt. Ein Abenteuer in der Schlucht.",
    "exp.p1": "Beobachte die berühmten Andenkondore am Cruz del Cóndor, steige mit einem professionellen Guide in die Schlucht hinab, teile eine Mahlzeit in San Juan de Chuccho und übernachte in der Sangalle-Oase.",
    "exp.p2": "Der zweite Tag beginnt vor Sonnenaufgang mit einem anspruchsvollen Aufstieg nach Cabanaconde und einer Rückfahrt vorbei an den Aussichtspunkten und Thermalbädern der Colca-Region.",
    "exp.f1.label": "Wanderung Tag 1",
    "exp.f1.value": "15 km · etwa 7 Stunden",
    "exp.f2.label": "Wanderung Tag 2",
    "exp.f2.value": "7 km · 3–4 Stunden",
    "exp.f3.label": "Höchster Aussichtspunkt bei Rückkehr",
    "exp.f3.value": "Ca. 4.190 m",
    "exp.f4.label": "Abholung in Arequipa",
    "exp.f4.value": "3:00–3:30 Uhr",
    "exp.alt": "Colca-Schlucht-Landschaft mit einem hölzernen Aussichtspunkt",
    "itin.eyebrow": "Zwei Tage in den Anden",
    "itin.title": "Jeder Schritt führt dich an einen außergewöhnlichen Ort.",
    "itin.sub": "Ein fordernder Abstieg, eine Nacht in der Oase und ein frühmorgendlicher Aufstieg, belohnt vom ersten Tageslicht.",
    "day1.num": "Tag 01 · Der Abstieg",
    "day1.title": "Hinein in die Schlucht",
    "day1.meta": "15 km · Ungefähr 7 Stunden Wanderung",
    "day1.stop1": "3:00–3:30 Uhr — Abholung an deiner Unterkunft in Arequipa.",
    "day1.stop2": "Frühstück in Chivay nach etwa drei Stunden Fahrt.",
    "day1.stop3": "Aussichtspunkt Cruz del Cóndor auf etwa 3.600 m, mit Zeit, um nach Kondoren Ausschau zu halten und zu fotografieren.",
    "day1.stop4": "Transfer nach San Miguel auf 3.200 m und Beginn des Abstiegs.",
    "day1.stop5": "Überquere die Brücke und erreiche San Juan de Chuccho auf 2.230 m zum Mittagessen bei einer einheimischen Familie.",
    "day1.stop6": "Wandere weiter zur Sangalle-Oase auf 1.900 m. Genieße die natürliche Umgebung und die Schwimmbecken und übernachte dort.",
    "day1.alt": "Wanderer auf dem Weg in der Colca-Schlucht",
    "day2.num": "Tag 02 · Der Aufstieg",
    "day2.title": "Erwache mit den Anden",
    "day2.meta": "7 km · Ungefähr 3–4 Stunden Wanderung",
    "day2.stop1": "4:30 Uhr — Beginne den Aufstieg im Dunkeln und beobachte, wie die Schlucht bei Sonnenaufgang erleuchtet wird.",
    "day2.stop2": "Erreiche Cabanaconde auf etwa 3.300 m und frühstücke.",
    "day2.stop3": "Fahre mit dem Fahrzeug und halte am Aussichtspunkt Antahuilque, um die landwirtschaftlichen Terrassen zu sehen.",
    "day2.stop4": "Besuche die Thermalbäder; der Eintritt ist separat zu zahlen.",
    "day2.stop5": "Weiter nach Chivay zum Mittagessen, das nicht inbegriffen ist.",
    "day2.stop6": "Halt am Vulkan-Aussichtspunkt auf etwa 4.190 m, dann Rückkehr nach Arequipa gegen 17:30–18:00 Uhr.",
    "day2.alt": "Wanderer feiern auf dem Gipfel der Schlucht",
    "gal.eyebrow": "Die Colca-Landschaft",
    "gal.title": "Gemacht für Neugierige.",
    "gal.sub": "Bring deine Kamera mit, nimm dir Zeit an den Aussichtspunkten und bereite dich auf eine anspruchsvolle Wanderung durch wechselnde Landschaften vor.",
    "gal.alt1": "Reisende bewundern die Colca-Schlucht von einem Aussichtspunkt",
    "gal.alt2": "Informationstafel der archäologischen Stätte San Antonio",
    "gal.alt3": "Gruppe beim Frühstück umgeben von Andenbergen",
    "gal.alt4": "Wanderer gehen an alten Steinbauten in der Schlucht vorbei",
    "gal.alt5": "Fotograf fängt die Tiefe der Colca-Schlucht ein",
    "gal.disclaimer": "Fotografien vom tatsächlichen Colca-Schlucht-Trekking.",
    "inc.eyebrow": "Vor der Abreise",
    "inc.title": "Alles klar vor der Buchung.",
    "inc.sub": "Der Preis und die Bedingungen unten folgen den Angaben des Tourenanbieters.",
    "inc.incTitle": "Im Preis enthalten",
    "inc.inc1": "Eine Übernachtung in der Sangalle-Oase.",
    "inc.inc2": "Zwei kontinentale Frühstücke, wie vom Anbieter angegeben.",
    "inc.inc3": "Ein reguläres Mittagessen und ein Abendessen.",
    "inc.inc4": "Touristentransport während der gesamten Reise.",
    "inc.inc5": "Professionelle Reiseleitung während der gesamten Reise.",
    "inc.excTitle": "Nicht enthalten",
    "inc.exc1": "Abschließendes Mittagessen in Chivay.",
    "inc.exc2": "Eintrittskarte für die Colca-Schlucht.",
    "inc.exc3": "Eintritt zu den Thermalbädern.",
    "inc.feesTitle": "Zusätzliche Eintrittsgebühren",
    "inc.fee1": "Europa / USA — Colca-Eintritt",
    "inc.fee2": "Lateinamerika — Colca-Eintritt",
    "inc.fee3": "Peruanische Besucher — Colca-Eintritt",
    "inc.fee4": "Thermalbäder",
    "inc.disclaimer": "Die Eintrittsgebühren entsprechen den Angaben des Anbieters und sollten vor der Reise erneut bestätigt werden.",
    "book.eyebrow": "Dein Colca-Abenteuer beginnt hier",
    "book.title": "Zwei Tage. Eine unvergessliche Schlucht.",
    "book.copy": "Colca-Schlucht-Trekking · 2 Tage / 1 Nacht. Zur Bestätigung der Buchung ist die vollständige Vorauszahlung erforderlich. Kurzfristige Stornierungen und Nichterscheinen sind nicht erstattungsfähig.",
    "book.perPerson": "pro Person",
    "booking.ctaBook": "Dieses Trekking buchen ↗",
    "booking.ctaAsk": "Verfügbarkeit prüfen ↗",
    "booking.ctaDetails": "Buchungsdetails ↗",
    "booking.whatsappMessage": "Hallo! Ich möchte mich nach der 2-Tage-/1-Nacht-Colca-Schlucht-Trekking-Tour für S/ 270 pro Person erkundigen.",
    "faq.polEyebrow": "Buchungsrichtlinie",
    "faq.polTitle": "Gute Abenteuer beginnen mit klaren Erwartungen.",
    "faq.polStrong": "Zahlung und Stornierung",
    "faq.polCopy": "Die vollständige Zahlung ist im Voraus erforderlich. Deine Buchung wird nach Zahlungseingang bestätigt. Kurzfristige Stornierungen und Nichterscheinen sind nicht erstattungsfähig.",
    "faq.disclaimer": "Bitte bestätige die Zahlungsanweisungen und alle anderen Buchungsbedingungen direkt mit dem Anbieter, bevor du bezahlst.",
    "faq.eyebrow": "Häufig gestellte Fragen",
    "faq.q1": "Wie viel kostet das Trekking?",
    "faq.a1": "Der angegebene Preis beträgt S/ 270 pro Person für die 2-Tage-/1-Nacht-Tour. Eintrittsgebühren für die Colca-Schlucht, Thermalbäder und das abschließende Mittagessen in Chivay kommen hinzu.",
    "faq.q2": "Wann beginnt und endet die Tour?",
    "faq.a2": "Die Abholung in Arequipa erfolgt zwischen 3:00 und 3:30 Uhr. Die voraussichtliche Rückkehr nach Arequipa ist am zweiten Tag zwischen 17:30 und 18:00 Uhr.",
    "faq.q3": "Wie anspruchsvoll ist die Wanderung?",
    "faq.a3": "Die Route beinhaltet einen langen Abstieg am ersten Tag und einen steilen Aufstieg ab etwa 4:30 Uhr am zweiten Tag. Bereite dich auf anstrengendes Wandern, Höhenunterschiede und unebenes Gelände vor.",
    "faq.q4": "Sind Mahlzeiten und Unterkunft inbegriffen?",
    "faq.a4": "Laut den Angaben des Anbieters sind eine Nacht in der Sangalle-Oase, zwei kontinentale Frühstücke, ein reguläres Mittagessen und ein Abendessen enthalten. Das abschließende Mittagessen in Chivay ist nicht enthalten.",
    "faq.q5": "Wie bestätige ich meine Reservierung?",
    "faq.a5": "Die vollständige Vorauszahlung ist erforderlich. Die Buchung wird nach Zahlung bestätigt. Nutze die verifizierten Kontaktdaten oder den Buchungslink des Anbieters, sobald diese Informationen auf dieser Website hinzugefügt wurden.",
    "faq.q6": "Was sollte ich mitbringen?",
    "faq.a6": "Bitte den Anbieter um eine endgültige Packliste. Im Allgemeinen solltest du Wanderschuhe, Schichten für kalte Morgen, Sonnenschutz, Wasser und einen kleinen Rucksack vorbereiten. Bestätige das erwartete Wetter und die Ausrüstungsanforderungen vor der Abreise.",
    "contact.eyebrow": "Kontakt und Reservierungen",
    "contact.msgPending": "Buchungskontaktdaten werden hier veröffentlicht, sobald der Anbieter sie bereitstellt.",
    "contact.msgActive": "Kontaktiere den Anbieter über die untenstehenden verifizierten Links.",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "E-Mail",
    "contact.instagram": "Instagram",
    "contact.facebook": "Facebook",
    "footer.tagline": "Entdecke die Anden, Schritt für Schritt.",
    "footer.itinerary": "Reiseverlauf",
    "footer.inclusions": "Inklusivleistungen",
    "footer.faq": "FAQ",
    "footer.copy": "Toureninformationen vom Anbieter bereitgestellt."
  }
};

var titles = {
  en: "Colca Canyon Trekking | Cabanaconde Backpackers",
  es: "Trekking Cañón del Colca | Cabanaconde Backpackers",
  fr: "Trekking Canyon de Colca | Cabanaconde Backpackers",
  de: "Colca-Schlucht-Trekking | Cabanaconde Backpackers"
};

var descriptions = {
  en: "Explore Colca Canyon on a 2-day, 1-night trek to Sangalle Oasis. S/ 270 per person with transport, accommodation, meals and professional guide.",
  es: "Explora el Cañón del Colca en un trekking de 2 días y 1 noche al Oasis de Sangalle. S/ 270 por persona con transporte, alojamiento, comidas y guía profesional.",
  fr: "Explorez le canyon de Colca lors d'un trek de 2 jours et 1 nuit à l'oasis de Sangalle. S/ 270 par personne avec transport, hébergement, repas et guide professionnel.",
  de: "Erkunde die Colca-Schlucht auf einem 2-tägigen Trekking mit 1 Übernachtung zur Sangalle-Oase. S/ 270 pro Person inklusive Transport, Unterkunft, Mahlzeiten und professionellem Guide."
};

/* ------------------------------------------------------------
   Estado y helpers
   ------------------------------------------------------------ */
var currentLang = "en";

function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

function formatPrice() {
  return siteConfig.tour.currencySymbol + " " + siteConfig.tour.price;
}

function addLink(container, href, label, external) {
  if (external === undefined) external = true;
  var link = document.createElement("a");
  link.className = "button button-dark";
  link.href = href;
  link.textContent = label;
  if (external) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  container.appendChild(link);
}

/* ------------------------------------------------------------
   Aplicar idioma
   ------------------------------------------------------------ */
function applyLanguage(lang) {
  var t = translations[lang] || translations.en;
  currentLang = translations[lang] ? lang : "en";

  document.documentElement.lang = currentLang;
  document.title = titles[currentLang] || titles.en;

  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", descriptions[currentLang] || descriptions.en);

  // textContent
  $$("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML
  $$("[data-i18n-html]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // alt
  $$("[data-i18n-alt]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-alt");
    if (t[key] !== undefined) el.alt = t[key];
  });

  // atributos arbitrarios "attr:key"
  $$("[data-i18n-attr]").forEach(function (el) {
    var spec = el.getAttribute("data-i18n-attr") || "";
    var parts = spec.split(":");
    var attr = parts[0];
    var key = parts[1];
    if (attr && key && t[key] !== undefined) el.setAttribute(attr, t[key]);
  });

  // estado activo en los botones
  $$(".lang-switcher button").forEach(function (btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
  });

  // contenido dinámico
  renderBookingActions();
  renderContact();

  try {
    localStorage.setItem("preferred-lang", currentLang);
  } catch (e) { /* ignorar */ }
}

/* ------------------------------------------------------------
   Render dinámico: botón de reserva
   ------------------------------------------------------------ */
function renderBookingActions() {
  var t = translations[currentLang] || translations.en;
  var container = document.getElementById("bookingActions");
  if (!container) return;
  container.replaceChildren();

  if (siteConfig.contact.bookingUrl.trim()) {
    addLink(container, siteConfig.contact.bookingUrl, t["booking.ctaBook"]);
  } else if (siteConfig.contact.whatsappNumber.trim()) {
    var number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
    var msg = encodeURIComponent(t["booking.whatsappMessage"]);
    addLink(container, "https://wa.me/" + number + "?text=" + msg, t["booking.ctaAsk"]);
  } else {
    var link = document.createElement("a");
    link.className = "button button-dark";
    link.href = "#contact-details";
    link.textContent = t["booking.ctaDetails"];
    container.appendChild(link);
  }
}

/* ------------------------------------------------------------
   Render dinámico: contacto
   ------------------------------------------------------------ */
function renderContact() {
  var t = translations[currentLang] || translations.en;
  var container = document.getElementById("contactLinks");
  var message = document.getElementById("contactMessage");
  if (!container || !message) return;
  container.replaceChildren();

  var items = [];
  if (siteConfig.contact.whatsappNumber.trim()) {
    var number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
    items.push({ href: "https://wa.me/" + number, label: t["contact.whatsapp"] });
  }
  if (siteConfig.contact.email.trim()) {
    items.push({ href: "mailto:" + siteConfig.contact.email, label: t["contact.email"] });
  }
  if (siteConfig.contact.instagramUrl.trim()) {
    items.push({ href: siteConfig.contact.instagramUrl, label: t["contact.instagram"] });
  }
  if (siteConfig.contact.facebookUrl.trim()) {
    items.push({ href: siteConfig.contact.facebookUrl, label: t["contact.facebook"] });
  }

  items.forEach(function (item) { addLink(container, item.href, item.label); });

  var hasAny = items.length > 0 || siteConfig.contact.bookingUrl.trim();
  message.textContent = hasAny ? t["contact.msgActive"] : t["contact.msgPending"];
}

/* ------------------------------------------------------------
   Mostrar todos los .reveal (fallback seguro)
   ------------------------------------------------------------ */
function revealAll() {
  $$(".reveal").forEach(function (el) { el.classList.add("visible"); });
}

/* ------------------------------------------------------------
   Init
   ------------------------------------------------------------ */
function init() {
  try {
    // Precio
    var heroPrice = document.getElementById("heroPrice");
    if (heroPrice) heroPrice.textContent = formatPrice();

    var bookingPrice = document.getElementById("bookingPrice");
    if (bookingPrice) {
      var priceText = document.createTextNode(formatPrice());
      var small = bookingPrice.querySelector("small");
      bookingPrice.replaceChildren(priceText);
      if (small) bookingPrice.appendChild(small);
    }

    // Año
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Hero override
    if (siteConfig.media.heroImage) {
      var heroImg = document.getElementById("heroImage");
      if (heroImg) heroImg.src = siteConfig.media.heroImage;
    }

    // Selector de idioma
    $$(".lang-switcher button").forEach(function (btn) {
      btn.addEventListener("click", function () { applyLanguage(btn.getAttribute("data-lang")); });
    });

    // Idioma inicial: guardado > navegador > en
    var saved = null;
    try { saved = localStorage.getItem("preferred-lang"); } catch (e) {}
    var browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
    var initialLang = saved || (translations[browserLang] ? browserLang : "en");
    applyLanguage(initialLang);

    // Navegación móvil
    var toggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav-links");
    if (toggle && navLinks) {
      toggle.addEventListener("click", function () {
        var isOpen = navLinks.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.textContent = isOpen ? "×" : "☰";
      });
      navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          navLinks.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.textContent = "☰";
        });
      });
    }

    // Reveal on scroll
    var revealItems = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
      revealItems.forEach(function (item) { observer.observe(item); });

      // Por si algún elemento ya está en pantalla pero el observer no lo detecta:
      setTimeout(function () {
        revealItems.forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("visible");
        });
      }, 250);
    } else {
      revealAll();
    }

    // Marca éxito
    window.__siteInitialized = true;
  } catch (err) {
    console.error("[site.js] init failed:", err);
    revealAll();
    window.__siteInitialized = true;
  }
}

/* ------------------------------------------------------------
   Bootstrap
   ------------------------------------------------------------ */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}