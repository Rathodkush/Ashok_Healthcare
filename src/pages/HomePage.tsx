import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  Star,
  Activity,
  HeartHandshake,
  Stethoscope,
  Truck,
  ArrowRight,
  MapPin,
  Check,
  Search,
  Sparkles,
  Users,
  Building2,
  FileCheck,
  HeartPulse,
  Wind,
  ThumbsUp,
  ExternalLink,
} from 'lucide-react'
import { SITE, whatsappLink } from '../lib/config'
import { services, Service } from '../data/services'
import { equipment, Equipment } from '../data/equipment'
import { faqs } from '../data/faqs'
import { blogPosts } from '../data/blogs'
import { founderData } from '../data/founder'
import CareFinderWidget from '../components/sections/CareFinderWidget'

interface HomePageProps {
  onOpenAssessment: (service?: string) => void
  onOpenEquipmentQuote: (item: Equipment, mode: 'rent' | 'buy') => void
}

const trustMetrics = [
  { value: '10+', label: 'Years Experience', sub: 'Ex-Apollo Leadership', icon: Award, color: 'text-amber-600 bg-amber-50' },
  { value: '1,800+', label: 'Homes Served', sub: 'Across Bengaluru', icon: Users, color: 'text-blue-600 bg-blue-50' },
  { value: '< 3 Hrs', label: 'Doorstep Delivery', sub: 'Sanitized ICU Equipment', icon: Truck, color: 'text-emerald-600 bg-emerald-50' },
  { value: '4.9 ★', label: 'Patient Rating', sub: '187+ Verified Reviews', icon: Star, color: 'text-rose-600 bg-rose-50' },
]

const valueProps = [
  {
    title: 'Ex-Apollo Clinical Leadership',
    desc: 'Founded by Ashok Doddamani (B.Sc Nursing, MBA), with over a decade managing high-volume critical care at Apollo Hospitals and 108 ER.',
    icon: Stethoscope,
    badge: 'Clinical Excellence',
    color: 'bg-blue-600 text-white',
  },
  {
    title: 'Sterile & Hospital-Grade ICU Setup',
    desc: 'From ventilators and multipara monitors to suction machines and hospital beds, we turn any room into a high-tech ICU environment.',
    icon: Activity,
    badge: '100% Sanitized',
    color: 'bg-emerald-600 text-white',
  },
  {
    title: '24/7 Verified Bedside Nursing',
    desc: 'Licensed GNM & B.Sc nurses providing 12h/24h shifts, wound dressing, IV medication, post-surgery care, and vitals monitoring.',
    icon: HeartHandshake,
    badge: 'Round-the-Clock',
    color: 'bg-purple-600 text-white',
  },
  {
    title: 'Transparent Pricing & Zero Deposit Hassle',
    desc: 'Honest daily & monthly rental rates for BiPAP, CPAP, oxygen concentrators, and hospital beds with free home installation.',
    icon: ShieldCheck,
    badge: 'Best Value Guarantee',
    color: 'bg-amber-600 text-white',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Free Clinical Assessment',
    desc: 'Call or submit care requirements. Our medical manager evaluates patient needs and recommends the exact care plan.',
    time: 'Within 15 Mins',
    icon: Phone,
  },
  {
    step: '02',
    title: 'Caregiver & Equipment Match',
    desc: 'We assign experienced GNM/B.Sc registered nurses and prepare hospital-grade equipment sanitized to clinical standards.',
    time: 'Within 1 Hour',
    icon: Stethoscope,
  },
  {
    step: '03',
    title: 'Doorstep Setup & Onboarding',
    desc: 'Technicians deliver equipment to your doorstep in Bengaluru, set up the ICU/bed, and train family members on basic operations.',
    time: 'Under 3 Hours',
    icon: Truck,
  },
  {
    step: '04',
    title: 'Continuous Doctor Supervision',
    desc: 'Daily vitals tracking, regular doctor coordination, and 24/7 support line to ensure safe and speedy patient recovery.',
    time: '24/7 Active Care',
    icon: Activity,
  },
]

const googleReviews = [
  {
    id: 1,
    name: 'Rajesh K. Sharma',
    avatarBg: 'bg-emerald-600',
    avatarText: 'R',
    role: 'Local Guide · 28 reviews',
    date: '2 weeks ago',
    rating: 5,
    category: 'ICU',
    service: 'Home ICU Setup & Critical Care',
    text: 'When my father was discharged after an acute stroke, Ashok Healthcare set up a complete ICU bed, multipara monitor, and assigned a dedicated GNM nurse within 3 hours. Ashok Doddamani himself monitored the case. Their clinical discipline and promptness saved our entire family from immense hospital distress.',
    likes: 14,
  },
  {
    id: 2,
    name: 'Dr. Meenakshi Sundaram',
    avatarBg: 'bg-blue-600',
    avatarText: 'M',
    role: 'Consultant Physician · 19 reviews',
    date: '1 month ago',
    rating: 5,
    category: 'Nursing',
    service: 'Bedside Nursing Care (24/7)',
    text: 'I routinely refer post-cardiac and geriatric patients to Ashok Healthcare. Having worked at Apollo Hospitals, the founder brings rigorous clinical standards, sanitization discipline, and ethical pricing. Best home nursing service in Yeshwanthpur & Bengaluru.',
    likes: 23,
  },
  {
    id: 3,
    name: 'Priya Venkatesh',
    avatarBg: 'bg-purple-600',
    avatarText: 'P',
    role: 'Local Guide · 42 reviews',
    date: '3 weeks ago',
    rating: 5,
    category: 'Equipment',
    service: 'Oxygen Concentrator Rental',
    text: 'Emergency delivery of 10L Homemedix Oxygen Concentrator at 11:30 PM! The technician arrived with a sanitized unit, installed it cleanly, and demonstrated flow settings to my mother. Transparent rental with zero hidden deposit issues.',
    likes: 9,
  },
  {
    id: 4,
    name: 'Suresh Nambiar',
    avatarBg: 'bg-rose-600',
    avatarText: 'S',
    role: 'Verified Google User · 11 reviews',
    date: '1 month ago',
    category: 'Rehab',
    service: 'Neuro & Ortho Rehabilitation',
    text: 'Our physiotherapist was patient and methodical during my mother\'s post-hip replacement rehab. Within 3 weeks she went from bedridden to walking with minimal support. Truly compassionate healthcare team!',
    likes: 18,
  },
  {
    id: 5,
    name: 'Anand Kulkarni',
    avatarBg: 'bg-amber-600',
    avatarText: 'A',
    role: 'Verified Google User · 7 reviews',
    date: '2 months ago',
    rating: 5,
    category: 'Elder Care',
    service: 'Elder Care & Daily Support',
    text: 'Ashok Healthcare provided 24-hour caregiver support for my 84-year-old grandfather. The nurse was polite, punctual, checked vitals 4 times daily, and kept us updated on WhatsApp. Highly recommended!',
    likes: 12,
  },
  {
    id: 6,
    name: 'Kavitha R. Rao',
    avatarBg: 'bg-teal-600',
    avatarText: 'K',
    role: 'Local Guide · 15 reviews',
    date: '3 months ago',
    rating: 5,
    category: 'Equipment',
    service: 'Motorized ICU Hospital Bed',
    text: 'Rented a 5-function electric ICU hospital bed with air mattress. Seamless delivery and installation. Bed was brand-new, spotless, and operated smoothly. Return process was just as hassle-free.',
    likes: 16,
  },
]

export default function HomePage({
  onOpenAssessment,
  onOpenEquipmentQuote,
}: HomePageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [equipmentCategory, setEquipmentCategory] = useState<string>('All')
  const [reviewFilter, setReviewFilter] = useState<string>('All')
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1')
  const [faqSearch, setFaqSearch] = useState<string>('')
  const [testimonialIdx, setTestimonialIdx] = useState<number>(0)

  // Auto slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % googleReviews.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  // Service Filtering
  const filteredServices = services.filter((s) => {
    if (activeCategory === 'All') return true
    if (activeCategory === 'Critical') return s.id === 'home-icu' || s.id === 'ambulance'
    if (activeCategory === 'Nursing') return s.id === 'home-nursing' || s.id === 'elder-care'
    if (activeCategory === 'Rehab') return s.id === 'rehabilitation' || s.id === 'physiotherapy'
    if (activeCategory === 'Equipment') return s.id === 'oxygen-concentrator' || s.id === 'medical-equipment' || s.id === 'diagnostic-services'
    return true
  })

  // Equipment Filtering
  const filteredEquipment = equipment.filter((item) => {
    if (equipmentCategory === 'All') return true
    return item.category === equipmentCategory
  })

  // FAQ filtering
  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.answer.toLowerCase().includes(faqSearch.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-20 sm:pt-24 selection:bg-primary-600 selection:text-white">
      {/* ========================================================
          1. PREMIUM CINEMATIC HERO SECTION — Light Clinical Theme
          ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#EBF4FF]">

        {/* Large decorative mandala/circle pattern backgrounds */}
        <div className="absolute left-[-8%] top-[10%] w-[380px] h-[380px] rounded-full border-[2px] border-primary-200/40 pointer-events-none" />
        <div className="absolute left-[-4%] top-[8%] w-[280px] h-[280px] rounded-full border-[1.5px] border-primary-300/30 pointer-events-none" />
        <div className="absolute right-[2%] top-[5%] w-[280px] h-[280px] rounded-full border-[1.5px] border-primary-200/30 pointer-events-none" />

        {/* Subtle plus decorations */}
        <div className="absolute left-[18%] top-[10%] text-primary-400/40 text-3xl font-thin pointer-events-none select-none">+</div>
        <div className="absolute right-[20%] bottom-[15%] text-primary-400/40 text-3xl font-thin pointer-events-none select-none">+</div>
        <div className="absolute left-[8%] bottom-[20%] text-primary-300/50 text-2xl font-thin pointer-events-none select-none">✦</div>
        <div className="absolute right-[8%] top-[35%] text-primary-300/50 text-2xl font-thin pointer-events-none select-none">✦</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[85vh]">

            {/* ===== LEFT CONTENT ===== */}
            <div className="space-y-6 lg:pr-12 py-12 lg:py-0 order-2 lg:order-1">
              {/* Brand label */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2"
              >
                <span className="w-8 h-0.5 bg-primary-600 rounded-full" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-primary-700">
                  Ashok Healthcare
                </span>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-black tracking-tight leading-[1.1] text-slate-900"
                >
                  Professional
                  <br />
                  <span className="text-primary-600">Healthcare,</span>
                  <br />
                  Right at Your{' '}
                  <span className="relative inline-block">
                    Home
                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                      <path d="M2 6 Q100 2 198 6" stroke="#0A6EBD" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    </svg>
                  </span>
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg font-normal"
              >
                Bengaluru's most trusted home healthcare provider — offering 24/7 ICU setup, registered bedside nursing, neuro rehabilitation & medical equipment delivery by former{' '}
                <strong className="text-slate-800 font-semibold">Apollo Hospitals</strong> clinical managers.
              </motion.p>

              {/* Feature checks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm"
              >
                {[
                  'Licensed GNM & B.Sc Nurses',
                  '100% Sanitized ICU Equipment',
                  '24/7 Doctor Supervision',
                  'Doorstep Delivery < 3 Hours',
                  'Neuro & Ortho Rehabilitation',
                  'Transparent Rental Pricing',
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 size={15} className="text-primary-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <button
                  onClick={() => onOpenAssessment('Home Healthcare')}
                  className="px-7 py-3.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm shadow-lg shadow-primary-600/30 flex items-center gap-2.5 transition-all hover:scale-[1.03] hover:-translate-y-0.5"
                >
                  <Calendar size={17} />
                  <span>Book a Consultation</span>
                </button>

                <Link
                  to="/services"
                  className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-primary-700 font-bold text-sm border-2 border-primary-200 hover:border-primary-400 flex items-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  <span>Explore Services</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              {/* Award credential strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 pt-2 text-xs text-slate-500 border-t border-slate-200/60 pt-4"
              >
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold border border-amber-200">
                  Int'l Excellence Award 2026
                </span>
                <span>Founded by Ashok Doddamani • B.Sc Nursing, MBA</span>
              </motion.div>
            </div>

            {/* ===== RIGHT IMAGE & FLOATING BADGES ===== */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center py-10 lg:py-6">

              {/* Outer relative wrapper — ALL badges anchor to THIS box */}
              <div className="relative w-full max-w-[520px] lg:max-w-none mx-auto">

                {/* Hero image */}
                <motion.img
                  src="/Bg_Banner/hero_Section.png"
                  alt="Professional home healthcare specialist — Ashok Healthcare Bengaluru"
                  className="w-full h-auto object-contain drop-shadow-2xl select-none"
                  loading="eager"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  draggable={false}
                />

                {/* === Floating Badges matching design exactly === */}

                {/* 1. Top-Left: Home Nursing */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-[14%] left-[-4%] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-3 border border-slate-100 z-20 cursor-pointer hover:scale-105 transition-transform"
                  style={{ animation: 'floatUp 4s ease-in-out infinite' }}
                  onClick={() => onOpenAssessment('Home Nursing Care')}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0">
                    <HeartHandshake size={20} className="text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-slate-900 whitespace-nowrap">Home Nursing</div>
                    <div className="text-[11px] text-blue-600 font-bold whitespace-nowrap">24/7 Registered Nurses</div>
                  </div>
                </motion.div>

                {/* 2. Top-Right: Home ICU */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute top-[15%] right-[-4%] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-3 border border-slate-100 z-20 cursor-pointer hover:scale-105 transition-transform"
                  style={{ animation: 'floatDown 5s ease-in-out infinite' }}
                  onClick={() => onOpenAssessment('Home ICU Setup')}
                >
                  <div className="w-10 h-10 rounded-xl bg-red-100/70 text-red-500 flex items-center justify-center shrink-0">
                    <HeartPulse size={20} className="text-red-500" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-slate-900 whitespace-nowrap">Home ICU</div>
                    <div className="text-[11px] text-red-500 font-bold whitespace-nowrap">Critical Care Setup</div>
                  </div>
                </motion.div>

                {/* 3. Middle-Left: 24/7 Care Support */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute top-[43%] left-[-6%] bg-[#0066ff] text-white text-sm font-bold rounded-full px-5 py-2.5 shadow-lg shadow-blue-500/25 flex items-center gap-2.5 z-20 whitespace-nowrap hover:scale-105 transition-transform"
                  style={{ animation: 'floatUp 6s ease-in-out infinite 0.5s' }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shrink-0" />
                  24/7 Care Support
                </motion.div>

                {/* 4. Middle-Right: ★ 4.9 / 5.0 Google Rating */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute top-[39%] right-[-6%] bg-[#fab005] text-slate-950 text-sm font-extrabold rounded-full px-5 py-2.5 shadow-lg shadow-amber-500/25 flex items-center gap-2 z-20 whitespace-nowrap hover:scale-105 transition-transform"
                  style={{ animation: 'floatDown 5.5s ease-in-out infinite 0.3s' }}
                >
                  <Star size={16} fill="currentColor" stroke="currentColor" className="text-slate-950 shrink-0" />
                  4.9 / 5.0 Google Rating
                </motion.div>

                {/* 5. Bottom-Left: O₂ Concentrator */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute bottom-[18%] left-[-5%] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-3 border border-slate-100 z-20 cursor-pointer hover:scale-105 transition-transform"
                  style={{ animation: 'floatUp 4.5s ease-in-out infinite 1s' }}
                  onClick={() => onOpenAssessment('Medical Equipment Rental/Sales')}
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-100/70 text-cyan-600 flex items-center justify-center shrink-0">
                    <Wind size={20} className="text-cyan-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-slate-900 whitespace-nowrap">O₂ Concentrator</div>
                    <div className="text-[11px] text-sky-500 font-bold whitespace-nowrap">3-Hr Doorstep Delivery</div>
                  </div>
                </motion.div>

                {/* 6. Bottom-Right: Multi-Care */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="absolute bottom-[18%] right-[-5%] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-3 border border-slate-100 z-20 cursor-pointer hover:scale-105 transition-transform"
                  style={{ animation: 'floatDown 3.8s ease-in-out infinite 0.8s' }}
                  onClick={() => onOpenAssessment('Physiotherapy at Home')}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0">
                    <Stethoscope size={20} className="text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-slate-900 whitespace-nowrap">Multi-Care</div>
                    <div className="text-[11px] text-emerald-600 font-bold whitespace-nowrap">9 Specializations</div>
                  </div>
                </motion.div>
              </div>

              {/* Keyframes */}
              <style>{`
                @keyframes floatUp {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-9px); }
                }
                @keyframes floatDown {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(8px); }
                }
              `}</style>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          2. LIVE METRICS & TRUST BAR (MNC Standard Stats)
          ======================================================== */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustMetrics.map((m, idx) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`p-3 rounded-xl ${m.color}`}>
                    <Icon size={22} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                    Verified
                  </span>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                    {m.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">{m.label}</div>
                  <div className="text-xs text-slate-500 font-medium">{m.sub}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ========================================================
          3. CORE SERVICES INTERACTIVE SHOWCASE (Bento / Tabs)
          ======================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider">
            <Stethoscope size={14} /> Comprehensive Home Healthcare
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized Doorstep Clinical Services
          </h2>
          <p className="text-base text-slate-600">
            From round-the-clock intensive care setup to certified physical rehabilitation — delivered at home with acute clinical precision.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'All', label: 'All Services' },
              { id: 'Critical', label: 'Home ICU & Critical Care' },
              { id: 'Nursing', label: 'Bedside Nursing Care' },
              { id: 'Rehab', label: 'Neuro & Ortho Rehab' },
              { id: 'Equipment', label: 'Medical Equipment' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeCategory === tab.id
                  ? 'bg-primary-600 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Image Container with Title Badge */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {service.shortTitle}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Inclusion List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Deliverables</div>
                  {service.features.slice(0, 3).map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <Check size={14} className="text-emerald-500 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div className="pt-3 flex items-center gap-2">
                  <button
                    onClick={() => onOpenAssessment(service.title)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <Calendar size={14} /> Book Assessment
                  </button>
                  <Link
                    to={service.slug}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="View Details"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================
          4. WHY CHOOSE ASHOK HEALTHCARE (MNC Value Props)
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-primary-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <ShieldCheck size={14} /> The MNC Difference
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Why Families & Physicians Choose Us
            </h2>
            <p className="text-slate-400 text-base">
              Built on clinical integrity, emergency response speed, and high-purity medical technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((vp, idx) => {
              const Icon = vp.icon
              return (
                <motion.div
                  key={vp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 border border-slate-700 hover:border-primary-500 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`p-3 rounded-2xl ${vp.color}`}>
                        <Icon size={24} />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                        {vp.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">{vp.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{vp.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-700/60 text-xs text-primary-400 font-semibold flex items-center gap-1">
                    <span>Clinical Standard Protocol</span>
                    <ChevronRight size={14} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. 4-STEP PATIENT CARE JOURNEY TIMELINE
          ======================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Clock size={14} /> Smooth Doorstep Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Home Care Works in 4 Steps
          </h2>
          <p className="text-base text-slate-600">
            From initial call to active home bedside monitoring — hassle-free, clinical, and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-2xl transition-all relative flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-primary-600 font-heading">{step.step}</span>
                    <span className="p-3 rounded-2xl bg-primary-50 text-primary-600">
                      <Icon size={22} />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400 uppercase tracking-wider">Response:</span>
                  <span className="text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">{step.time}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ========================================================
          6. FAST-TRACK MEDICAL EQUIPMENT RENTAL & SALES HUB
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-100/80 to-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Truck size={14} /> Hospital-Grade Equipment Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Medical Equipment Rental & Sales
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
                100% sanitized, tested, and calibrated prior to 3-hour doorstep delivery in Bengaluru.
              </p>
            </div>

            {/* Category Switcher */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Critical Care', 'Respiratory Care', 'Hospital Beds', 'Mobility'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setEquipmentCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${equipmentCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEquipment.slice(0, 8).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="relative h-44 bg-slate-50 p-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    {item.rentStartingPrice && (
                      <span className="absolute bottom-3 right-3 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">
                        {item.rentStartingPrice}
                      </span>
                    )}
                  </div>

                  <div className="px-5 pt-2 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-primary-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{item.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-3 space-y-2">
                  <div className="flex gap-2 text-[11px] font-bold text-slate-500">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">Rent Available</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">Buy Option</span>
                  </div>

                  <button
                    onClick={() => onOpenEquipmentQuote(item, 'rent')}
                    className="w-full py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all uppercase tracking-wider"
            >
              <span>Explore All Equipment & Specs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. FOUNDER & CLINICAL EXCELLENCE SPOTLIGHT
          ======================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-primary-950 rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Image & Credentials */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src="/images/awards.jpg"
                  alt="Ashok Doddamani - Founder & CEO receiving International Excellence Award 2026"
                  className="w-full h-80 sm:h-96 object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/images/awards.jpeg"
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-xs">
                  <div className="font-bold text-amber-400">International Excellence Award 2026</div>
                  <div className="text-slate-300">Conferred by Global Research & Foundation (USA & India)</div>
                </div>
              </div>

              {/* Qualifications Pills */}
              <div className="flex flex-wrap gap-1.5">
                {founderData.qualifications.map((q) => (
                  <span
                    key={q}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/10"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
                  <Award size={14} /> Founder & Clinical Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {founderData.fullName}
                </h2>
                <p className="text-primary-300 font-semibold text-sm">
                  {founderData.role} — {founderData.organization}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {founderData.bioIntro}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Clinical Milestones & Background</div>
                {founderData.milestones.slice(0, 4).map((m, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  Read Full Leadership Profile
                </Link>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <Phone size={14} /> Speak with Care Manager
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. GOOGLE REVIEWS & PATIENT STORIES (Authentic Google Style)
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Google Reviews Header Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl mb-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                {/* Google Multi-Color SVG Icon */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs shrink-0">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-slate-900">Google Customer Reviews</span>
                    <span className="text-[11px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-black text-slate-900">4.9</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-slate-500">
                      (Based on 320+ verified patient ratings across Bengaluru)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2 transition-all"
                >
                  <MapPin size={14} className="text-primary-600" />
                  View on Google Maps
                </a>
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-md flex items-center gap-2 transition-all"
                >
                  <Star size={14} fill="currentColor" />
                  Review us on Google
                </a>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              <span className="text-xs font-bold text-slate-500 mr-2">Filter by Care:</span>
              {[
                { id: 'All', label: 'All Reviews (320+)' },
                { id: 'ICU', label: 'Home ICU Setup' },
                { id: 'Nursing', label: 'Bedside Nursing' },
                { id: 'Equipment', label: 'Equipment Rental' },
                { id: 'Rehab', label: 'Rehab & Physio' },
                { id: 'Elder Care', label: 'Elder Care' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setReviewFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${reviewFilter === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Google Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews
              .filter((r) => reviewFilter === 'All' || r.category === reviewFilter)
              .map((rev) => (
                <motion.div
                  key={rev.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* User Profile Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-base shadow-sm shrink-0`}
                        >
                          {rev.avatarText}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">{rev.name}</div>
                          <div className="text-[11px] text-slate-500">{rev.role}</div>
                        </div>
                      </div>

                      {/* Google G small badge */}
                      <svg className="w-5 h-5 shrink-0 opacity-90" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>

                    {/* Star Rating & Time */}
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={15} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400">• {rev.date}</span>
                    </div>

                    {/* Review Body */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      "{rev.text}"
                    </p>
                  </div>

                  {/* Card Bottom: Service Tag & Helpful Count */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-lg border border-primary-100 line-clamp-1">
                      {rev.service}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium hover:text-primary-600 transition-colors cursor-pointer">
                      <ThumbsUp size={12} />
                      <span>{rev.likes}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. CATEGORIZED FAQ ACCORDION WITH SEARCH
          ======================================================== */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Clear answers regarding home nursing shifts, ICU setup duration, rental procedures, and emergency service.
          </p>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions (e.g., ICU setup, rental, nurses)..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50"
                >
                  <span>{faq.question}</span>
                  <span className="p-1 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>

      {/* ========================================================
          10. HIGH CONVERSION CTA BANNER & CONTACT DESK
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-700 via-primary-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 rounded-full text-black text-xs font-bold uppercase tracking-wider">
                24/7 Rapid Response Desk
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Need Urgent Home Healthcare or ICU Equipment?
              </h2>
              <p className="text-primary-100 text-sm sm:text-base">
                Our clinical care managers in Yeshwanthpur are available 24 hours a day. Doorstep delivery & certified nurse dispatch within 3 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="px-8 py-4 rounded-2xl bg-white text-primary-900 font-extrabold text-sm sm:text-base shadow-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} className="text-primary-600" />
                <span>Call Helpline: {SITE.phone}</span>
              </a>

              <a
                href={whatsappLink('Hello Ashok Healthcare, I urgently need healthcare assistance at home.')}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm sm:text-base shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
