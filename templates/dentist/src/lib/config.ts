import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Clearwater Dentistry",
    tagline: "Smile Brighter. Live Healthier. Today.",
    phone: "(727) 233-3030",
    phoneHref: "tel:+17272333030",
    email: "info@clearwaterdentistry.com",
    address: "3006 Gulf to Bay Blvd",
    city: "Clearwater",
    serviceAreas: ["Clearwater, FL"],
    license: "FL Dental License #DN12345",
    since: "2005",
    google_rating: "4.9",
    review_count: "1379",
    emergency: true,
    theme: "navy",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "Cosmetic Dentistry", desc: "Enhance your smile with our expert cosmetic treatments, from whitening to veneers.", urgent: false },
    { icon: "sparkles", title: "Smile Makeovers", desc: "Transform your entire look with a personalized smile makeover plan designed just for you.", urgent: false },
    { icon: "shield-check", title: "Preventative Care", desc: "Maintain optimal oral health with regular check-ups, cleanings, and proactive advice.", urgent: false },
    { icon: "scissors", title: "Invisalign® Treatment", desc: "Straighten your teeth discreetly and comfortably with clear aligners for a confident smile.", urgent: false },
    { icon: "wrench", title: "Emergency Dental Care", desc: "Immediate relief for unexpected dental pain, injuries, or urgent oral health issues.", urgent: true },
    { icon: "heart", title: "Tooth Sensitivity", desc: "Find lasting relief from discomfort caused by sensitive teeth with our specialized treatments.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Clearwater, FL", stars: 5, text: "I had a fantastic experience getting my veneers done at Clearwater Dentistry. Dr. Smith and his team were incredibly kind and professional throughout the entire process. My new smile looks natural and beautiful, and I couldn't be happier with the results. They really listened to what I wanted and delivered perfectly!" },
    { name: "David L.", location: "Clearwater, FL", stars: 5, text: "My emergency dental visit was handled with such care and efficiency. I called with a terrible toothache, and they got me in within hours. The staff was so understanding, and Dr. Chen quickly diagnosed and fixed the problem. I felt so much better almost immediately. Highly recommend their prompt service!" },
    { name: "Jessica P.", location: "Clearwater, FL", stars: 5, text: "I've been bringing my family here for preventative care for years, and we always receive top-notch service. The hygienists are gentle, and Dr. Rodriguez is great with kids and adults alike. They make going to the dentist a pleasant experience, which is saying a lot!" }
  ],

  trustBadges: [
    "Most Insurance Accepted", "Medicare Advantage", "Personalized Care", "Modern Techniques", "Patient Comfort First", "GAF Master Elite"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1300, label: "Happy Patients", suffix: "+", decimals: 0 },
    { value: 15, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Flexible Scheduling", desc: "We offer convenient appointment times to fit your busy lifestyle, including early mornings and evenings." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Receive clear, upfront cost estimates for all treatments with no hidden fees or surprises." },
    { icon: "award", title: "Experienced Dentists", desc: "Our team of highly skilled and compassionate dentists are dedicated to your oral health." },
    { icon: "thumbs-up", title: "Patient-Centered Care", desc: "Your comfort and well-being are our top priorities, ensuring a stress-free dental experience." },
    { icon: "phone", title: "24/7 Online Booking", desc: "Easily schedule or reschedule appointments anytime, anywhere through our user-friendly online portal." },
    { icon: "home", title: "Comfortable Environment", desc: "Relax in our modern, welcoming office designed to make your dental visits as pleasant as possible." }
  ],

  formServiceOptions: ["Cosmetic Dentistry", "Smile Makeovers", "Tooth Bonding", "Veneers", "Invisalign® Treatment", "Emergency Dental Care", "Cracked Teeth", "Tooth Sensitivity", "Preventative Care"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!