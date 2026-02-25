export type Lang = 'es' | 'en' | 'de';

export type TranslationKey =
  // Global / common
  | 'common.inicio'
  | 'common.rsvp'
  | 'common.rsvp_before_date'
  | 'common.rsvp_rain_of_envelopes'
  | 'common.go_to_place'
  | 'common.view_inspo'
  | 'common.transport_included'
  | 'common.from'
  | 'common.to'
  // Home
  | 'home.names'
  | 'home.day.tuesday'
  | 'home.day.friday'
  | 'home.day.saturday'
  | 'home.day.sunday'
  | 'home.more_info'
  // Martes / Tuesday
  | 'martes.rumba_class'
  | 'martes.city_bogota'
  | 'martes.gym_title'
  | 'martes.date_noon'
  | 'martes.date_evening'
  | 'martes.location_gym'
  | 'martes.location_padel'
  | 'martes.see_more'
  | 'martes.register_here'
  | 'martes.padel_club_title'
  // Viernes / Friday
  | 'viernes.cooking_workshop'
  | 'viernes.friday_date_morning'
  | 'viernes.friday_date_evening'
  | 'viernes.sofitel_barú'
  | 'viernes.calablanca_restaurant'
  | 'viernes.welcome_cocktail'
  | 'viernes.la_pergola_bar'
  // Sábado / Saturday
  | 'sabado.blessing_intro'
  | 'sabado.invitation_text'
  | 'sabado.location_baru'
  | 'sabado.names_nataly_david'
  | 'sabado.date_main'
  | 'sabado.time_main'
  | 'sabado.dress_code_title'
  | 'sabado.dress_code_women_label'
  | 'sabado.dress_code_women_long_dress'
  | 'sabado.dress_code_women_reserved_colors'
  | 'sabado.dress_code_women_white'
  | 'sabado.dress_code_women_silver'
  | 'sabado.dress_code_women_black'
  | 'sabado.dress_code_men_label'
  | 'sabado.dress_code_men_suit'
  | 'sabado.dress_code_men_reserved_colors'
  | 'sabado.dress_code_men_light_beige'
  | 'sabado.dress_code_men_black'
  | 'sabado.ceremony_reception'
  | 'sabado.ceremony_location'
  | 'sabado.rsvp_title'
  | 'sabado.rsvp_before'
  | 'sabado.rsvp_phone'
  | 'sabado.rsvp_rain_of_envelopes'
  | 'sabado.transport_title'
  | 'sabado.transport_from_osh'
  | 'sabado.transport_to_sofitel'
  // Domingo / Sunday
  | 'domingo.afternoon_at_beach'
  | 'domingo.date'
  | 'domingo.time_range'
  | 'domingo.sofitel_baru'
  // Info page
  | 'info.recommended_hotels'
  | 'info.city.bogota'
  | 'info.city.cartagena'
  | 'info.city.baru'
  | 'info.hotel.w_bogota'
  | 'info.hotel.wynwood_109'
  | 'info.hotel.osh_cartagena'
  | 'info.hotel.casa_carolina'
  | 'info.hotel.charleston_santa_teresa'
  | 'info.hotel.movich_cartagena'
  | 'info.hotel.sofitel_baru'
  | 'info.hotel.las_islas'
  | 'info.contact_title'
  | 'info.contact_body';

export const translations: Record<TranslationKey, Record<Lang, string>> = {
  // Common
  'common.inicio': {
    es: 'inicio',
    en: 'home',
    de: 'Start',
  },
  'common.rsvp': {
    es: 'R.S.V.P.',
    en: 'R.S.V.P.',
    de: 'U.A.w.g.',
  },
  'common.rsvp_before_date': {
    es: 'antes del 24 de abril.',
    en: 'before April 24.',
    de: 'bis zum 24. April.',
  },
  'common.rsvp_rain_of_envelopes': {
    es: 'Lluvia de sobres',
    en: 'Envelope shower (monetary gift preferred)',
    de: 'Geldgeschenk (Umschlagsregen)',
  },
  'common.go_to_place': {
    es: 'ir al lugar',
    en: 'go to location',
    de: 'zum Ort',
  },
  'common.view_inspo': {
    es: 'VER INSPO',
    en: 'VIEW INSPO',
    de: 'INSPIRATION ANSEHEN',
  },
  'common.transport_included': {
    es: 'TRANSPORTE INCLUIDO',
    en: 'TRANSPORT INCLUDED',
    de: 'TRANSPORT INKLUSIVE',
  },
  'common.from': {
    es: 'Desde:',
    en: 'From:',
    de: 'Ab:',
  },
  'common.to': {
    es: 'Hacia:',
    en: 'To:',
    de: 'Nach:',
  },

  // Home
  'home.names': {
    es: 'NATALY + DAVID',
    en: 'NATALY + DAVID',
    de: 'NATALY + DAVID',
  },
  'home.day.tuesday': {
    es: 'martes',
    en: 'Tuesday',
    de: 'Dienstag',
  },
  'home.day.friday': {
    es: 'viernes',
    en: 'Friday',
    de: 'Freitag',
  },
  'home.day.saturday': {
    es: 'SÁBADO',
    en: 'SATURDAY',
    de: 'SAMSTAG',
  },
  'home.day.sunday': {
    es: 'DOMINGO',
    en: 'SUNDAY',
    de: 'SONNTAG',
  },
  'home.more_info': {
    es: '+ INFO',
    en: '+ INFO',
    de: '+ INFOS',
  },

  // Martes
  'martes.rumba_class': {
    es: 'CLASE DE RUMBA',
    en: 'RUMBA CLASS',
    de: 'RUMBA-KURS',
  },
  'martes.city_bogota': {
    es: 'BOGOTÁ',
    en: 'BOGOTÁ',
    de: 'BOGOTÁ',
  },
  'martes.gym_title': {
    es: 'Club Campestre El Rancho - Gimnasio',
    en: 'Club Campestre El Rancho – Gym',
    de: 'Club Campestre El Rancho – Fitnessstudio',
  },
  'martes.date_noon': {
    es: 'MARTES 7 DE JULIO | 12:00 PM',
    en: 'TUESDAY, JULY 7 | 12:00 PM',
    de: 'DIENSTAG, 7. JULI | 12:00 UHR',
  },
  'martes.date_evening': {
    es: 'Martes 7 de Julio | 4:00 PM',
    en: 'Tuesday, July 7 | 4:00 PM',
    de: 'Dienstag, 7. Juli | 16:00 Uhr',
  },
  'martes.location_gym': {
    es: 'Club Campestre El Rancho - Gimnasio',
    en: 'Club Campestre El Rancho – Gym',
    de: 'Club Campestre El Rancho – Fitnessstudio',
  },
  'martes.location_padel': {
    es: 'Club Campestre El Rancho - Zona de Pádel',
    en: 'Club Campestre El Rancho – Padel Area',
    de: 'Club Campestre El Rancho – Padel-Bereich',
  },
  'martes.see_more': {
    es: 'Ver más',
    en: 'See more',
    de: 'Mehr anzeigen',
  },
  'martes.register_here': {
    es: 'INSCRÍBETE AQUÍ',
    en: 'REGISTER HERE',
    de: 'HIER ANMELDEN',
  },
  'martes.padel_club_title': {
    es: 'Amoro’s Padel Club',
    en: "Amoro's Padel Club",
    de: 'Amoro’s Padel Club',
  },

  // Viernes
  'viernes.cooking_workshop': {
    es: 'taller de cocina',
    en: 'cooking workshop',
    de: 'Kochworkshop',
  },
  'viernes.friday_date_morning': {
    es: 'VIERNES 10 de julio| 11:00 aM',
    en: 'FRIDAY, JULY 10 | 11:00 AM',
    de: 'FREITAG, 10. JULI | 11:00 UHR',
  },
  'viernes.friday_date_evening': {
    es: 'VIERNES 10 de julio| 8:00 PM',
    en: 'FRIDAY, JULY 10 | 8:00 PM',
    de: 'FREITAG, 10. JULI | 20:00 UHR',
  },
  'viernes.sofitel_barú': {
    es: 'SOFITEL BARÚ CARTAGENA BEACH RESORT',
    en: 'SOFITEL BARÚ CARTAGENA BEACH RESORT',
    de: 'SOFITEL BARÚ CARTAGENA BEACH RESORT',
  },
  'viernes.calablanca_restaurant': {
    es: 'restaurante cALABLANCA',
    en: 'Calablanca Restaurant',
    de: 'Restaurant Calablanca',
  },
  'viernes.welcome_cocktail': {
    es: 'coctél de bienvenida',
    en: 'welcome cocktail',
    de: 'Willkommenscocktail',
  },
  'viernes.la_pergola_bar': {
    es: 'bar la pÉrgola',
    en: 'La Pérgola Bar',
    de: 'Bar La Pérgola',
  },

  // Sábado
  'sabado.blessing_intro': {
    es: 'Con la bendición de Dios y en compañía de nuestros padres',
    en: 'With God’s blessing and in the company of our parents',
    de: 'Mit Gottes Segen und im Beisein unserer Eltern',
  },
  'sabado.invitation_text': {
    es: 'Tenemos el gusto de invitarlos a nuestro matrimonio.',
    en: 'We are delighted to invite you to our wedding.',
    de: 'Wir freuen uns, euch zu unserer Hochzeit einzuladen.',
  },
  'sabado.location_baru': {
    es: 'Barú, Colombia',
    en: 'Barú, Colombia',
    de: 'Barú, Kolumbien',
  },
  'sabado.names_nataly_david': {
    es: 'Nataly & David',
    en: 'Nataly & David',
    de: 'Nataly & David',
  },
  'sabado.date_main': {
    es: 'SÁBADO | 11 de Julio | 2026',
    en: 'SATURDAY | July 11 | 2026',
    de: 'SAMSTAG | 11. Juli | 2026',
  },
  'sabado.time_main': {
    es: '4:00 P.M',
    en: '4:00 P.M',
    de: '16:00 Uhr',
  },
  'sabado.dress_code_title': {
    es: 'DRESS CODE',
    en: 'DRESS CODE',
    de: 'DRESSCODE',
  },
  'sabado.dress_code_women_label': {
    es: 'MUJERES:',
    en: 'WOMEN:',
    de: 'FRAUEN:',
  },
  'sabado.dress_code_women_long_dress': {
    es: 'Vestido largo unicolor',
    en: 'Long solid-color dress',
    de: 'Langes einfarbiges Kleid',
  },
  'sabado.dress_code_women_reserved_colors': {
    es: 'Colores reservados:',
    en: 'Reserved colors:',
    de: 'Reservierte Farben:',
  },
  'sabado.dress_code_women_white': {
    es: 'Blanco',
    en: 'White',
    de: 'Weiß',
  },
  'sabado.dress_code_women_silver': {
    es: 'Plateado',
    en: 'Silver',
    de: 'Silber',
  },
  'sabado.dress_code_women_black': {
    es: 'Negro',
    en: 'Black',
    de: 'Schwarz',
  },
  'sabado.dress_code_men_label': {
    es: 'HOMBRES:',
    en: 'MEN:',
    de: 'MÄNNER:',
  },
  'sabado.dress_code_men_suit': {
    es: 'Traje completo con pañuelo',
    en: 'Full suit with pocket square',
    de: 'Kompletter Anzug mit Einstecktuch',
  },
  'sabado.dress_code_men_reserved_colors': {
    es: 'Colores reservados:',
    en: 'Reserved colors:',
    de: 'Reservierte Farben:',
  },
  'sabado.dress_code_men_light_beige': {
    es: 'Beige claro',
    en: 'Light beige',
    de: 'Helles Beige',
  },
  'sabado.dress_code_men_black': {
    es: 'Negro',
    en: 'Black',
    de: 'Schwarz',
  },
  'sabado.ceremony_reception': {
    es: 'CEREMONIA Y RECEPCIÓN',
    en: 'CEREMONY & RECEPTION',
    de: 'ZEREMONIE & EMPFANG',
  },
  'sabado.ceremony_location': {
    es: 'Sofitel Barú Cartagena Beach Resort',
    en: 'Sofitel Barú Cartagena Beach Resort',
    de: 'Sofitel Barú Cartagena Beach Resort',
  },
  'sabado.rsvp_title': {
    es: 'R . S . V . P',
    en: 'R.S.V.P.',
    de: 'U.A.w.g.',
  },
  'sabado.rsvp_before': {
    es: 'antes del 24 de abril.',
    en: 'before April 24.',
    de: 'bis zum 24. April.',
  },
  'sabado.rsvp_phone': {
    es: '+57 3134423895',
    en: '+57 3134423895',
    de: '+57 3134423895',
  },
  'sabado.rsvp_rain_of_envelopes': {
    es: 'Lluvia de sobres',
    en: 'Envelope shower (monetary gift preferred)',
    de: 'Geldgeschenk (Umschlagsregen)',
  },
  'sabado.transport_title': {
    es: 'TRANSPORTE INCLUIDO',
    en: 'TRANSPORT INCLUDED',
    de: 'TRANSPORT INKLUSIVE',
  },
  'sabado.transport_from_osh': {
    es: 'Desde: Hotel Osh Hotel Cartagena',
    en: 'From: Osh Hotel Cartagena',
    de: 'Ab: Osh Hotel Cartagena',
  },
  'sabado.transport_to_sofitel': {
    es: 'Hacia: Sofitel Barú Cartagena',
    en: 'To: Sofitel Barú Cartagena',
    de: 'Nach: Sofitel Barú Cartagena',
  },

  // Domingo
  'domingo.afternoon_at_beach': {
    es: 'tarde en la playa',
    en: 'afternoon at the beach',
    de: 'Nachmittag am Strand',
  },
  'domingo.date': {
    es: 'domingo 12 de julio',
    en: 'Sunday, July 12',
    de: 'Sonntag, 12. Juli',
  },
  'domingo.time_range': {
    es: '3-6 pm',
    en: '3–6 pm',
    de: '15–18 Uhr',
  },
  'domingo.sofitel_baru': {
    es: 'SOFITEL BARÚ CARTAGENA BEACH RESORT',
    en: 'SOFITEL BARÚ CARTAGENA BEACH RESORT',
    de: 'SOFITEL BARÚ CARTAGENA BEACH RESORT',
  },

  // Info
  'info.recommended_hotels': {
    es: 'hoteles recomendados:',
    en: 'recommended hotels:',
    de: 'empfohlene Hotels:',
  },
  'info.city.bogota': {
    es: 'bogotá:',
    en: 'Bogotá:',
    de: 'Bogotá:',
  },
  'info.city.cartagena': {
    es: 'Cartagena:',
    en: 'Cartagena:',
    de: 'Cartagena:',
  },
  'info.city.baru': {
    es: 'barú:',
    en: 'Barú:',
    de: 'Barú:',
  },
  'info.hotel.w_bogota': {
    es: 'hotel w bogotá',
    en: 'W Bogotá Hotel',
    de: 'Hotel W Bogotá',
  },
  'info.hotel.wynwood_109': {
    es: 'Wynwood house 109',
    en: 'Wynwood House 109',
    de: 'Wynwood House 109',
  },
  'info.hotel.osh_cartagena': {
    es: 'osh hotel cartagena',
    en: 'OSH Hotel Cartagena',
    de: 'OSH Hotel Cartagena',
  },
  'info.hotel.casa_carolina': {
    es: 'casa carolina hotel',
    en: 'Casa Carolina Hotel',
    de: 'Hotel Casa Carolina',
  },
  'info.hotel.charleston_santa_teresa': {
    es: 'Charleston Santa Teresa Cartagena',
    en: 'Charleston Santa Teresa Cartagena',
    de: 'Charleston Santa Teresa Cartagena',
  },
  'info.hotel.movich_cartagena': {
    es: 'Movich Cartagena De Indias',
    en: 'Movich Cartagena de Indias',
    de: 'Movich Cartagena de Indias',
  },
  'info.hotel.sofitel_baru': {
    es: 'sofitel barú cartagena beach resort',
    en: 'Sofitel Barú Cartagena Beach Resort',
    de: 'Sofitel Barú Cartagena Beach Resort',
  },
  'info.hotel.las_islas': {
    es: 'hotel las islas barú',
    en: 'Hotel Las Islas Barú',
    de: 'Hotel Las Islas Barú',
  },
  'info.contact_title': {
    es: 'coNTACTO:',
    en: 'CONTACT:',
    de: 'KONTAKT:',
  },
  'info.contact_body': {
    es: 'si tienes alguna pregunta adicional puedes escribirle a nuestra wedding planner via whatsapp al + 573134423895',
    en: 'If you have any additional questions, you can write to our wedding planner via WhatsApp at +57 313 442 3895',
    de: 'Wenn ihr weitere Fragen habt, könnt ihr unserer Wedding Plannerin per WhatsApp unter +57 313 442 3895 schreiben',
  },
};

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang];
}


