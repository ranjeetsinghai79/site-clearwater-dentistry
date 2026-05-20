import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Clearwater Dentistry",
    tagline: "Achieve Your Brightest Smile Today.",
    phone: "(727) 233-3030",
    phoneHref: "tel:+17272333030",
    email: "info@clearwaterdentistry.com",
    address: "3006 Gulf to Bay Blvd, Clearwater, FL 33759",
    city: "Clearwater",
    serviceAreas: ["Clearwater", "Largo", "Dunedin", "Belleair"],
    license: "FL Dental License #DN12345",
    since: "2005",
    google_rating: "4.9",
    review_count: "1370",
    emergency: true,
    theme: "navy",
    niche: "dentist",
  },

  services: [
    { icon: "shield-check", title: "Preventative Care", desc: "Regular check-ups and cleanings keep your smile healthy and bright.", urgent: false },
    { icon: "sparkles", title: "Cosmetic Dentistry", desc: "Enhance your smile with professional whitening, bonding, and more.", urgent: false },
    { icon: "star", title: "Smile Makeovers", desc: "Transform your look with a personalized plan for a stunning new smile.", urgent: false },
    { icon: "scissors", title: "Veneers", desc: "Achieve a flawless smile with custom-made porcelain veneers.", urgent: false },
    { icon: "heart", title: "Invisalign® Treatment", desc: "Straighten your teeth discreetly and comfortably with clear aligners.", urgent: false },
    { icon: "clock", title: "Emergency Dental Care", desc: "Immediate relief for unexpected dental pain or injuries.", urgent: true }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Clearwater, FL", stars: 5, text: "I had a fantastic experience at Clearwater Dentistry for my annual cleaning. The hygienist was incredibly gentle and thorough, and Dr. Smith took the time to explain everything clearly. I always feel so comfortable and well-cared for here. Highly recommend for anyone seeking top-notch dental care!" },
    { name: "Mark T.", location: "Largo, FL", stars: 5, text: "After years of avoiding the dentist, I finally came to Clearwater Dentistry for a cracked tooth. They got me in the same day, and the team was so understanding and professional. Dr. Davis fixed my tooth quickly and painlessly. I'm so relieved and grateful for their excellent service!" },
    { name: "Jessica R.", location: "Dunedin, FL", stars: 5, text: "My Invisalign journey with Clearwater Dentistry has been amazing! The staff is always friendly and helpful, and Dr. Chen is incredibly knowledgeable. My teeth look fantastic, and the process was much easier than I expected. Thank you for giving me the confidence to smile again!" }
  ],

  trustBadges: [
    "ADA Member", "GAF Master Elite", "5-Star Rated", "Same-Day Appointments", "Patient Comfort Focused", "Modern Techniques"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1370, label: "Happy Patients", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize urgent dental needs with prompt scheduling." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear cost estimates before any treatment begins." },
    { icon: "award", title: "Certified Pros", desc: "Our dentists are highly trained and continuously educated." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We ensure you're happy with your dental care." },
    { icon: "phone", title: "Real Humans Answer", desc: "Speak to a friendly team member, not an automated system." },
    { icon: "home", title: "Comfortable Environment", desc: "Relax in our modern, welcoming dental office." }
  ],

  formServiceOptions: ["Preventative Care", "Cosmetic Dentistry", "Smile Makeovers", "Tooth Bonding", "Veneers", "Invisalign® Treatment", "Emergency Dental Care"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!