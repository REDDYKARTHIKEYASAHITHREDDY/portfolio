'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ExternalLink, Star, School, Briefcase, Award, Sparkles, Code2 } from 'lucide-react'
import Starfield from '../components/Starfield'
import MouseTrail from '../components/MouseTrail'
import ThreeScene from '../components/ThreeScene'
import Planet from '../components/Planet'
import NeonPlant from '../components/NeonPlant'
import RocketIcon from '../components/RocketIcon'

const PROFILE = {
  name: 'Reddy Karthikeya Sahith Reddy',
  title: 'Full‑Stack, Data Analyst & ML Engineer',
  summary: 'Computer Science student focusing on ML, Data Analysis, and Full‑Stack. Built real‑time emotion & sentiment apps; 90%+ model accuracy; optimized SQL workflows by 30%.',
  email: 'karthikeyasahithreddyreddy99@gmail.com',
  phone: '+91 7993995644',
  links: {
    linkedin: 'https://www.linkedin.com/in/reddy-karthikeya-sahith-reddy/',
    github: 'https://github.com/REDDYKARTHIKEYASAHITHREDDY',
  },
  location: 'India',
  avatarUrl: '/me.jpeg',
}

const SKILLS = [ 'Python','Java','C','React.js','Node.js','Django','HTML5','CSS3','SQL','MongoDB','TensorFlow','scikit‑learn','HuggingFace','Pandas','NumPy','DeepFace','OpenCV','Git','Postman','Agile' ]

const PROJECTS = [
  { name: 'Face Emotion Detector', desc: 'Real‑time emotion detection with Python, Streamlit, OpenCV, DeepFace and a live insights dashboard.', link: 'https://github.com/REDDYKARTHIKEYASAHITHREDDY/FaceEmotionDetector', tags: ['Python','OpenCV','DeepFace','Streamlit'] },
  { name: 'Sentiment Analyzer', desc: 'Interactive sentiment analysis app using TextBlob & VADER achieving ~92% accuracy.', link: 'https://github.com/REDDYKARTHIKEYASAHITHREDDY/sentimentanalysis', tags: ['Python','NLP','VADER','TextBlob'] },
  { name: 'Automobile Service Management', desc: 'Team‑led full‑stack system using Java, React.js & SQL improving service efficiency by ~30%.', link: '#', tags: ['Java','React','SQL'] },
  { name: 'Breast Cancer Detection', desc: 'Classical ML with scikit‑learn delivering 90%+ accuracy for diagnostic classification.', link: '#', tags: ['Python','scikit‑learn'] },
]

const EXPERIENCE = [
  { role: 'Data Science Virtual Intern', org: 'AICTE Internship Program', time: 'Jul 2024 – Sep 2024', points: [
    'Built Python + SQL apps for large‑scale analytics; achieved ~87% model accuracy.',
    'Improved DB workflows by ~25% via Agile‑driven optimization.',
  ]},
  { role: 'AI‑ML Virtual Intern', org: 'APSSDC', time: 'May 2024 – Jun 2024', points: [
    'Developed ML pipelines for sentiment analysis; +20% accuracy uplift.',
    'Reduced processing time ~30% with pipeline optimizations.',
  ]},
]

const EDUCATION = [
  { school: 'KL University — B.Tech CSE (Honors)', place: 'Guntur, India', time: '2022 – 2026', meta: 'CGPA 8.93' },
  { school: 'KL University — BBA (ODL)', place: 'Guntur, India', time: '2022 – 2026', meta: 'CGPA 8.2' },
  { school: 'Sri Chaitanya Co‑ed Jr. College (BIEAP, 11 and 12 grades)', place: 'Vijayawada, India', time: '2020 – 2022', meta: '75.1%' },
  { school: 'Vasavi Ideal Public School (CBSE, 10 grade)', place: 'Tadepalligudem, India', time: '2019 – 2020', meta: '80%' },
]

const CERTS = [
  'Salesforce AI Associate (2024)',
  'OCI 2024 Generative AI Certified Professional',
  'ServiceNow CSA (2025)',
  'Essentials of Automation (2024)',
  'FinTech Council India Certified (2024)',
  '1st Runner‑up — AI Prompt Engineering (2024)',
]

function Chip({ label }: { label: string }) {
  return <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur"><Star className="h-3.5 w-3.5" /> {label}</span>
}

function TiltCard({ children }: { children: React.ReactNode }) {
  return <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">{children}</div>
}

export default function Page() {
  const { scrollYProgress } = useScroll()
  const rocketY = useTransform(scrollYProgress, [0, 1], [0, 600])
  const rocketX = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      <Starfield />
      <MouseTrail />
      <ThreeScene />

      {/* Floating cosmos */}
      <motion.div className="pointer-events-none fixed left-[-60px] top-24 hidden md:block" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <Planet className="h-40 w-40 opacity-70" />
      </motion.div>
      <motion.div className="pointer-events-none fixed right-[-80px] bottom-20 hidden md:block" animate={{ y: [0, 12, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
        <Planet className="h-56 w-56 opacity-60" />
      </motion.div>
      <motion.div className="pointer-events-none fixed left-10 bottom-12 hidden md:block" animate={{ y: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <NeonPlant className="h-36 w-36 opacity-50" />
      </motion.div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <RocketIcon className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Karthikeya.Space</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {['about','projects','experience','education','certs','contact'].map((id) => (
              <a key={id} href={`#${id}`} className="text-sm text-white/70 hover:text-white">{id[0].toUpperCase()+id.slice(1)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={PROFILE.links.github} target="_blank" className="text-white/70 hover:text-white" rel="noreferrer"><Github className="h-5 w-5" /></a>
            <a href={PROFILE.links.linkedin} target="_blank" className="text-white/70 hover:text-white" rel="noreferrer"><Linkedin className="h-5 w-5" /></a>
            <a href={`mailto:${PROFILE.email}`} className="text-white/70 hover:text-white"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-24 pt-16 sm:pt-28">
        <motion.div className="relative grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-extrabold leading-tight md:text-6xl">
              {PROFILE.name}
            </motion.h1>
            <motion.p className="mt-3 text-lg text-white/80 md:text-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>{PROFILE.title}</motion.p>
            <motion.p className="mt-5 max-w-xl text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>{PROFILE.summary}</motion.p>
            <div className="mt-6 flex flex-wrap gap-2">{SKILLS.slice(0, 10).map((s) => (<Chip key={s} label={s} />))}</div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 font-semibold text-black shadow-lg shadow-cyan-500/20">See Projects</a>
              <a href="#contact" className="rounded-xl border border-white/20 px-5 py-3 text-white/80 hover:bg-white/10">Contact</a>
            </div>
          </div>
          <motion.div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur md:w-80" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="absolute inset-0 animate-pulse bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.15),transparent_60%)]" />
              <img src={PROFILE.avatarUrl} alt="Bitmoji avatar" className="z-10 h-5/6 w-5/6 object-contain" />
              <span className="pointer-events-none absolute -inset-6 -z-10 blur-2xl" style={{background:'radial-gradient(50% 50% at 50% 50%, rgba(34,211,238,0.25), rgba(99,102,241,0.25), transparent)'}}/>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: rocketY, x: rocketX }} className="pointer-events-none absolute right-8 top-6 opacity-90">
          <RocketIcon className="h-24 w-24 md:h-32 md:w-32" />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-white/90 md:text-4xl"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur"><Sparkles className="h-5 w-5 text-cyan-300" /></span>
          About
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 text-white/80 md:grid-cols-2">
          <p>I’m a builder who loves blending full‑stack engineering with applied ML. From real‑time emotion detection to explainable sentiment analysis, I enjoy shipping products that feel magical—fast, reliable, and easy to use.</p>
          <div className="flex flex-wrap gap-2">{SKILLS.map((s) => (<span key={s} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm">{s}</span>))}</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-white/90 md:text-4xl"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur"><Code2 className="h-5 w-5 text-indigo-300" /></span>
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <TiltCard key={p.name}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white/90">{p.name}</h3>
                <a href={p.link} target={p.link === '#' ? '_self' : '_blank'} rel="noreferrer" className="text-white/70 hover:text-white"><ExternalLink className="h-5 w-5" /></a>
              </div>
              <p className="mt-2 text-white/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/70">{t}</span>)}</div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-white/90 md:text-4xl"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur"><Briefcase className="h-5 w-5 text-pink-300" /></span>
          Experience
        </motion.h2>
        <div className="space-y-5">
          {EXPERIENCE.map((e) => (
            <motion.div key={e.role} className="rounded-2xl border border-white/10 bg-white/5 p-5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-white/90">{e.role} — {e.org}</h3>
                <span className="text-white/60">{e.time}</span>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-white/90 md:text-4xl"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur"><School className="h-5 w-5 text-emerald-300" /></span>
          Education
        </motion.h2>
        <div className="space-y-4">
          {EDUCATION.map((ed) => (
            <div key={ed.school} className="flex flex-col justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 md:flex-row md:items-center">
              <div>
                <h4 className="text-lg font-semibold text-white/90">{ed.school}</h4>
                <p className="text-sm text-white/70">{ed.place}</p>
              </div>
              <div className="text-sm text-white/70">{ed.time} · {ed.meta}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-white/90 md:text-4xl"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur"><Award className="h-5 w-5 text-amber-300" /></span>
          Certifications & Achievements
        </motion.h2>
        <div className="flex flex-wrap gap-2">{CERTS.map((c) => <span key={c} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur"><Star className="h-3.5 w-3.5" /> {c}</span>)}</div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.h2 className="mb-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-white/90 md:text-4xl"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur"><Mail className="h-5 w-5 text-fuchsia-300" /></span>
          Contact
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"><Mail className="h-5 w-5 text-pink-300" /> {PROFILE.email}</a>
          <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"><Phone className="h-5 w-5 text-emerald-300" /> {PROFILE.phone}</a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"><Linkedin className="h-5 w-5 text-sky-300" /> LinkedIn</a>
        </div>
        <p className="mt-6 text-sm text-white/60">GitHub: <a className="underline decoration-dotted" href={PROFILE.links.github} target="_blank" rel="noreferrer">{PROFILE.links.github}</a></p>
        <p className="text-sm text-white/60">Based in {PROFILE.location}</p>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-white/50">
        Built with Next.js, Tailwind, Framer Motion & R3F. © {new Date().getFullYear()} {PROFILE.name}
      </footer>
    </div>
  )
}
