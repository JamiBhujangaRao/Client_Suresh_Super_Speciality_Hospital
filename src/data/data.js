// ============================================================
//  data.js — Updated content store for Suresh Super Speciality Hospital
// ============================================================

export const hospitalInfo = {
  name: "Suresh Super Speciality Hospital",
  tagline: "Where Healing Meets Excellence",
  subTagline: "Advanced Super-Speciality Care with Compassion — Serving Vinukonda & Palnadu Region 24 × 7",
  address: "3P7R+FCJ, Vinukonda, Andhra Pradesh 522647",
  phone: "+91 74115 56259",
  whatsapp: "917411556259",
  email: "sureshsuperspeciality@gmail.com",
  instagram: "https://www.instagram.com/sureshsuperspecialityhospital/",
  justdial: "https://www.justdial.com/Palnadu/Suresh-Super-Speciality-Hospital-Opposite-To-Kalyanapuri-Colony-Vinukonda/9999P8647-8647-210327191028-B2M2_BZDET",
  rating: { google: 5.0, googleCount: 47, justdial: 4.9, justdialCount: 799 },
  hours: "Open 24 Hours · All Days",
  established: "2018",
};

// ── Services with real condition images ──────────────────────
export const services = [
  {
    id: 1,
    icon: "Activity",
    title: "Urology & URSL",
    shortTitle: "Urology",
    description: "Expert urological procedures including Ureteroscopy (URSL) for kidney stones, bladder issues, and complete urinary tract care with cutting-edge laser technology.",
    color: "#0891B2",
    bg: "rgba(8,145,178,0.08)",
    image: "/images/condition_bladder_stones.png",
  },
  {
    id: 2,
    icon: "Zap",
    title: "Prostate Laser Surgery",
    shortTitle: "Prostate Surgery",
    description: "Advanced HoLEP and GreenLight laser surgery for prostate conditions — minimally invasive, faster recovery, and superior outcomes.",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
    image: "/images/condition_prostate.png",
  },
  {
    id: 3,
    icon: "Droplets",
    title: "Chronic UTI Treatment",
    shortTitle: "UTI Care",
    description: "Comprehensive management of chronic and recurrent urinary tract infections with targeted antibiotic therapy and preventive protocols.",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    image: "/images/condition_uti.png",
  },
  {
    id: 4,
    icon: "Microscope",
    title: "Kidney Transplant",
    shortTitle: "Renal Transplant",
    description: "Full renal transplant programme with expert nephrologists and urologists ensuring meticulous pre-operative evaluation and post-transplant care.",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    image: "/images/condition_kidney_transplant.png",
  },
  {
    id: 5,
    icon: "Scissors",
    title: "General & Laparoscopic Surgery",
    shortTitle: "General Surgery",
    description: "Comprehensive laparoscopic and open surgical procedures including gallbladder removal, appendix, hernia, and abdominal surgeries.",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
    image: "/images/condition_surgery.png",
  },
  {
    id: 6,
    icon: "Flame",
    title: "Fistula Treatment",
    shortTitle: "Fistula",
    description: "Minimally invasive fistula treatment using advanced surgical techniques to achieve complete cure with minimal discomfort and faster healing.",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    image: "/images/condition_fistula.png",
  },
  {
    id: 7,
    icon: "Heart",
    title: "Haemorrhoids (Piles)",
    shortTitle: "Haemorrhoids",
    description: "Modern, painless haemorrhoid treatment — laser haemorrhoidoplasty and stapler procedures for permanent relief with minimal recovery time.",
    color: "#EC4899",
    bg: "rgba(236,72,153,0.08)",
    image: "/images/condition_hemorrhoids.png",
  },
  {
    id: 8,
    icon: "Stethoscope",
    title: "Glomerular Disease",
    shortTitle: "Nephrology",
    description: "Expert diagnosis and management of glomerular diseases affecting kidney filtration, including nephrotic syndrome and nephritis.",
    color: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
    image: "/images/condition_glomerular.png",
  },
  {
    id: 9,
    icon: "Layers",
    title: "Gall Bladder Stones",
    shortTitle: "Gallbladder",
    description: "Laparoscopic cholecystectomy for gallbladder stone removal — day-care surgery, minimal incisions, back to normal within days.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.08)",
    image: "/images/condition_gallbladder.png",
  },
  {
    id: 10,
    icon: "Thermometer",
    title: "General Medicine & Viral Fever",
    shortTitle: "General Medicine",
    description: "Holistic internal medicine, viral fever management, chronic disease care, and preventive healthcare for the entire family around the clock.",
    color: "#14B8A6",
    bg: "rgba(20,184,166,0.08)",
    image: "/images/condition_viral_fever.png",
  },
];

// ── Doctors — with professional headshots ────────────────────
export const doctors = [
  {
    id: 1,
    name: "Dr. A.M. Suresh",
    designation: "Chief Surgeon & Medical Director",
    speciality: "Urology · General & Laparoscopic Surgery",
    qualifications: "MBBS, MS (General Surgery), MCh (Urology)",
    experience: "15+ Years Experience",
    image: "/images/dr_suresh_pro.jpg",
    description: "Dr. A.M. Suresh is the founding director and chief urologist-surgeon at Suresh Super Speciality Hospital. Celebrated for his precision in URSL procedures, prostate laser surgery (HoLEP/GreenLight), and laparoscopic techniques, he is renowned for his compassionate, patient-first approach that has transformed thousands of lives across the Palnadu region.",
    highlights: ["URSL & Stone Specialist", "Prostate Laser Expert", "Kidney Transplant", "500+ Surgeries"],
    color: "#0891B2",
  },
  {
    id: 2,
    name: "Dr. A.Mrudula Tejaswi",
    designation: "Senior Consultant",
    speciality: "Obstetrics, Gynaecology & Infertility",
    qualifications: "MBBS, MS (OBG), Fellowship – Reproductive Medicine",
    experience: "12+ Years Experience",
    image: "/images/dr_lavanya_pro.jpg",
    description: "Dr. A.Mrudula Tejaswi is a highly decorated obstetrician and gynaecologist with multiple Manipal Hospital accolades. Specialising in high-risk pregnancies, fertility treatments, and minimal-access gynaecological surgeries, she combines clinical excellence with genuine empathy in every patient interaction.",
    highlights: ["High-Risk Pregnancy", "Fertility Specialist", "Laparoscopic Gynae", "Manipal Certified"],
    color: "#EC4899",
  },
];

// ── Testimonials ─────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    location: "Vinukonda",
    rating: 5,
    text: "Good experience and good responsibility, good staff. Dr. Suresh sir took great care of my father during his angioplasty procedure. The entire team is very professional and kind.",
    service: "Angioplasty",
    date: "March 2024",
  },
  {
    id: 2,
    name: "Srinivas Rao",
    location: "Narasaraopet",
    rating: 5,
    text: "The rooms were clean, hygienic, and comfortable. My wife had her surgery here and the post-operative care was outstanding. The nursing staff is very attentive around the clock.",
    service: "General Surgery",
    date: "January 2024",
  },
  {
    id: 3,
    name: "Lakshmi Devi",
    location: "Palnadu",
    rating: 5,
    text: "Ma amma gaariki URSL operation chesaru. Dr. Suresh sir gaaru chala manchiga matladatam, operation kuda chala baga chesaru. Memu chala satisfied ga unnamu.",
    service: "URSL Operation",
    date: "February 2024",
  },
  {
    id: 4,
    name: "Venkata Subba Reddy",
    location: "Macherla",
    rating: 5,
    text: "Nice good response, well treatment. Staff is very cooperative. Dr. Suresh explained everything clearly before the procedure. Highly recommend this hospital to everyone in the region.",
    service: "Stenting",
    date: "December 2023",
  },
  {
    id: 5,
    name: "Padmavathi",
    location: "Gurazala",
    rating: 5,
    text: "Dr. Lavanya garu is an excellent doctor. She handled my delivery with utmost care and professionalism. The hospital infrastructure is modern and very clean. 10/10 experience!",
    service: "Maternity Care",
    date: "April 2024",
  },
  {
    id: 6,
    name: "Mohan Babu",
    location: "Vinukonda",
    rating: 5,
    text: "24-hour availability is the best feature of this hospital. I needed emergency care at 2 AM and the team was fully ready. Quick diagnosis, effective treatment. Outstanding service.",
    service: "Emergency Care",
    date: "November 2023",
  },
];

export const stats = [
  { label: "Happy Patients", value: 10000, suffix: "+", icon: "Users" },
  { label: "Years of Excellence", value: 7, suffix: "+", icon: "Award" },
  { label: "Expert Doctors", value: 12, suffix: "+", icon: "UserCheck" },
  { label: "Surgeries Performed", value: 500, suffix: "+", icon: "Stethoscope" },
];

export const whyChooseUs = [
  {
    id: 1,
    icon: "Clock",
    title: "Open 24 × 7 × 365",
    description: "Round-the-clock medical care. Our team never sleeps — emergency and routine care is always available whenever you need it.",
    color: "#0891B2",
  },
  {
    id: 2,
    icon: "Award",
    title: "5.0 Google Rated",
    description: "47 Google reviews and 799 Justdial ratings averaging 4.9 — a testament to our unwavering commitment to patient satisfaction.",
    color: "#D97706",
  },
  {
    id: 3,
    icon: "Zap",
    title: "Laser & Minimally Invasive",
    description: "State-of-the-art laser surgery for prostate, kidney stones, haemorrhoids, and fistula — less pain, shorter stay, faster recovery.",
    color: "#7C3AED",
  },
  {
    id: 4,
    icon: "Shield",
    title: "World-Class Safety",
    description: "Sterilized OTs, infection-controlled wards, and strict hygiene protocols ensure you heal in the safest possible environment.",
    color: "#059669",
  },
  {
    id: 5,
    icon: "HeartHandshake",
    title: "Compassionate Care",
    description: "Every patient is treated like family. Dr. Suresh and our team are known for their warm bedside manner and crystal-clear communication.",
    color: "#EC4899",
  },
  {
    id: 6,
    icon: "MapPin",
    title: "Serving the Region",
    description: "Centrally located in Vinukonda, we serve patients from across Palnadu, Narasaraopet, Macherla, Gurazala, and surrounding villages.",
    color: "#EF4444",
  },
];

export const galleryImages = [
  { id: 1,  src: "/images/lobby_main.jpg",        alt: "Hospital Main Lobby",          category: "Facility" },
  { id: 2,  src: "/images/lobby_wide.jpg",         alt: "Patient Waiting Area",          category: "Facility" },
  { id: 3,  src: "/images/corridor.jpg",           alt: "Hospital Corridor",             category: "Facility" },
  { id: 4,  src: "/images/reception_wide.jpg",     alt: "Reception Area",                category: "Facility" },
  { id: 5,  src: "/images/reception_close.jpg",    alt: "Reception Desk",                category: "Facility" },
  { id: 6,  src: "/images/waiting_area.jpg",       alt: "Waiting Hall",                  category: "Facility" },
  { id: 7,  src: "/images/dr_suresh_pro.jpg",      alt: "Dr. A.M. Suresh",               category: "Doctors"  },
  { id: 8,  src: "/images/dr_lavanya_pro.jpg",     alt: "Dr. Lavanya Hindola Yone",      category: "Doctors"  },
  { id: 9,  src: "/images/dr_suresh_close.jpg",    alt: "Dr. Suresh Consulting",         category: "Doctors"  },
  { id: 10, src: "/images/dr_female_consult.jpg",  alt: "Doctor Consulting Patient",     category: "Doctors"  },
  { id: 11, src: "/images/doctor_consult1.jpg",    alt: "Patient Consultation",          category: "Care"     },
  { id: 12, src: "/images/doctor_consult2.jpg",    alt: "Doctor with Patients",          category: "Care"     },
  { id: 13, src: "/images/doctor_family.jpg",      alt: "Doctor with Family",            category: "Care"     },
];

// ── Highlight Moments ─────────────────────────────────────────
export const highlightMoments = [
  {
    id: 1,
    image: "/images/highlight_1.jpg",
    title: "Minister Visit & Recognition",
    description: "Honourable minister visits Suresh Super Speciality Hospital, recognising our outstanding contribution to healthcare in the Palnadu region.",
    category: "Recognition",
    year: "2024",
  },
  {
    id: 2,
    image: "/images/highlight_2.jpg",
    title: "Hospital Grand Inauguration",
    description: "Grand inauguration of Suresh Super Speciality Hospital with distinguished guests and community leaders from across Vinukonda.",
    category: "Milestone",
    year: "2023",
  },
  {
    id: 3,
    image: "/images/highlight_3.jpg",
    title: "Community Felicitation",
    description: "Dr. Suresh and Dr. Lavanya felicitated by the community for their outstanding service and dedication to patient welfare.",
    category: "Award",
    year: "2024",
  },
  {
    id: 4,
    image: "/images/highlight_4.jpg",
    title: "Government Recognition",
    description: "Official felicitation ceremony with senior government officials acknowledging the hospital's excellence and contribution to public health.",
    category: "Recognition",
    year: "2024",
  },
  {
    id: 5,
    image: "/images/highlight_5.jpg",
    title: "New Wing Inauguration",
    description: "Ribbon-cutting ceremony for the expanded super-speciality wing, bringing advanced urology and surgical facilities to Vinukonda.",
    category: "Milestone",
    year: "2023",
  },
  {
    id: 6,
    image: "/images/highlight_6.jpg",
    title: "Community & Political Support",
    description: "Broad community and political support reflects the hospital's transformative impact on healthcare accessibility across Palnadu.",
    category: "Community",
    year: "2024",
  },
];

// ── Instagram Posts ───────────────────────────────────────────
// IMPORTANT: Replace `embedUrl` values with real embed URLs from your Instagram posts.
// To get an embed URL: go to your post → click ⋯ → Embed → copy src from the iframe.
// Format: https://www.instagram.com/p/{POST_ID}/embed/
export const instagramPosts = [
  {
    id: 1,
    embedUrl: "",   // ← Paste real embed URL here
    caption: "Advanced URSL Procedure — Kidney stone treatment at Suresh Super Speciality Hospital. Pain-free, same-day discharge!",
    likes: "1.2K",
    topic: "URSL Surgery",
    thumbnail: "/images/condition_bladder_stones.png",
    instagramUrl: "https://www.instagram.com/sureshsuperspecialityhospital/",
  },
  {
    id: 2,
    embedUrl: "",   // ← Paste real embed URL here
    caption: "Highlights of Prostate Laser Surgery — HoLEP procedure offering minimally invasive treatment with rapid recovery.",
    likes: "987",
    topic: "Prostate Surgery",
    thumbnail: "/images/condition_prostate.png",
    instagramUrl: "https://www.instagram.com/sureshsuperspecialityhospital/",
  },
  {
    id: 3,
    embedUrl: "",   // ← Paste real embed URL here
    caption: "Fistula Treatment — Minimally invasive surgical approach for complete cure. Back to normal life within days!",
    likes: "754",
    topic: "Fistula Treatment",
    thumbnail: "/images/condition_fistula.png",
    instagramUrl: "https://www.instagram.com/sureshsuperspecialityhospital/",
  },
  {
    id: 4,
    embedUrl: "",   // ← Paste real embed URL here
    caption: "Kidney Transplant excellence at Suresh Super Speciality Hospital — giving patients a new lease of life.",
    likes: "1.5K",
    topic: "Kidney Transplant",
    thumbnail: "/images/condition_kidney_transplant.png",
    instagramUrl: "https://www.instagram.com/sureshsuperspecialityhospital/",
  },
  {
    id: 5,
    embedUrl: "",   // ← Paste real embed URL here
    caption: "Haemorrhoids (Piles) treatment using laser technology — painless, quick, and effective permanent solution.",
    likes: "892",
    topic: "Haemorrhoids",
    thumbnail: "/images/condition_hemorrhoids.png",
    instagramUrl: "https://www.instagram.com/sureshsuperspecialityhospital/",
  },
  {
    id: 6,
    embedUrl: "",   // ← Paste real embed URL here
    caption: "Gall Bladder Stone surgery — laparoscopic cholecystectomy with minimal incision and day-care discharge.",
    likes: "1.1K",
    topic: "Gallbladder",
    thumbnail: "/images/condition_gallbladder.png",
    instagramUrl: "https://www.instagram.com/sureshsuperspecialityhospital/",
  },
];
