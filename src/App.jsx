import React from 'react'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Mail, MapPin, Menu, X, Download, Sparkles, Cpu, Trophy } from 'lucide-react'
import { profile, projects, experience, skillGroups } from './data'

const navLinks = [{ label: 'About', href: '#about' }, { label: 'Projects', href: '#work' }, { label: 'Experience', href: '#experience' }, { label: 'Achievements', href: '#achievements' }, { label: 'Contact', href: '#contact' }, { label: 'Resume', href: profile.resume, external: true }]

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.7, delay, ease: [0.2, 0.65, 0.2, 1] }}>{children}</motion.div>
}

function LinkOrSpan({ href, className, children, ...props }) {
  return href ? <a href={href} className={className} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>{children}</a> : <span className={className} {...props}>{children}</span>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  return <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
    <div className="container nav-inner">
      <a href="#home" className="brand brand-full" aria-label="Ali Asghar homepage">Ali Asghar</a>
      <nav className="desktop-nav" aria-label="Main navigation">{navLinks.map(l => <a href={l.href} key={l.label} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined}>{l.label}</a>)}</nav>
      <a href="#contact" className="nav-cta">Let's talk <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
    </div>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{navLinks.map(l => <a href={l.href} key={l.label} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined} onClick={() => setOpen(false)}>{l.label}<ArrowUpRight size={17}/></a>)}</nav>}
  </header>
}

function AmbientScene() {
  return <div className="ambient" aria-hidden="true"><div className="ambient-orb orb-one"/><div className="ambient-orb orb-two"/><div className="hero-grid"/><div className="hero-horizon"/></div>
}

function Hero() {
  const reduce = useReducedMotion()
  return <section className="hero" id="home">
    <AmbientScene/>
    <div className="container hero-inner">
      <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="availability"><span className="pulse-dot"/> OPEN TO SUMMER 2027 OPPORTUNITIES <span className="availability-arrow">↗</span></motion.div>
      <div className="hero-grid-layout">
        <div className="hero-copy">
          <motion.div initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .1 }}>
            <h1>Ali <span className="gradient-text">Asghar<span className="period">.</span></span></h1>
            <p className="hero-subtitle hero-role">Software Engineer</p>
          </motion.div>
          <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .25 }} className="hero-description"><strong>Honours Computer Science (Co-op) student at the University of Windsor.</strong><br/>I build practical software with a focus on thoughtful engineering, polished user experiences, and real-world problem solving — from personal tools like Buddy AI and Recapify AI to production-deployed systems at Linamar.</motion.p>
          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .35 }} className="hero-actions">
            <a className="button-primary" href="#work">View projects <ArrowUpRight size={18}/></a>
            <a className="button-secondary" href="#contact">Get in touch <ArrowRight size={18}/></a>
          </motion.div>
          <div className="hero-bottom"><span className="hero-location"><MapPin size={14}/> WINDSOR, ONTARIO · CANADA</span><a href="#about" className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={15}/></a></div>
        </div>
        <motion.div initial={reduce ? false : { opacity: 0, x: 28, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: .9, delay: .2 }} className="hero-portrait-shell">
          <div className="hero-portrait-ring">
            <img src="/profile-linkedin.png" alt="Ali Asghar portrait" className="hero-portrait" />
          </div>
          <div className="hero-portrait-badge">SOFTWARE ENGINEER · UWindsor</div>
        </motion.div>
      </div>
    </div>
    <div className="hero-side-label" aria-hidden="true">DESIGN • DEVELOP • ITERATE</div>
  </section>
}

function SectionHeading({ number, title, description }) {
  return <Reveal className="section-heading"><div className="section-heading-top"><span className="section-num">/{number}</span><span className="section-rule"/></div><div className="section-heading-row"><h2>{title}<span className="period">.</span></h2>{description && <p>{description}</p>}</div></Reveal>
}

function ProjectGraphic({ kind }) {
  if (kind === 'assistant') return <div className="project-graphic graphic-assistant"><div className="assistant-halo"/><div className="assistant-terminal"><div className="assistant-dots"><i/><i/><i/></div><span className="assistant-label">BUDDY / AI ASSISTANT</span><div className="assistant-glyph">✳</div><div className="assistant-text">How can I help?</div><div className="assistant-wave">{Array.from({length:21},(_,i)=><span key={i} style={{height:8+((i*17)%32)}}/>)}</div><div className="assistant-modules"><span>GMAIL</span><span>CALENDAR</span><span>SPOTIFY</span></div></div><div className="assistant-award">★ WINHACKS 2026 · 1ST PLACE</div></div>
  if (kind === 'vision') return <div className="project-graphic graphic-vision"><div className="vision-frame"><div className="vision-corner tl"/><div className="vision-corner tr"/><div className="vision-corner bl"/><div className="vision-corner br"/><div className="vision-person"><div className="p-head"/><div className="p-body"/><div className="p-arm left"/><div className="p-arm right"/><div className="p-leg left"/><div className="p-leg right"/></div><div className="vision-scan"/></div><div className="graphic-overlay left">POSE TRACKING <span className="lime-dot"/></div><div className="graphic-overlay right">98.7% <small>CONFIDENCE</small></div></div>
  if (kind === 'music') return <div className="project-graphic graphic-music"><div className="music-disc"><div className="music-hole"/></div><div className="music-card"><div className="music-card-label">NOW PLAYING</div><div className="music-bars">{[24,38,18,49,27,44,15,34,46,21,38,29,16,42].map((h,i)=><span key={i} style={{height:h}}/>)}</div><div className="music-card-title">Your mood. Your music.</div><div className="music-track"><span/></div></div><div className="music-mini">♪ CURATED FOR YOU</div></div>
  if (kind === 'recap') return <div className="project-graphic graphic-recap"><div className="recap-window"><div className="recap-dots"><i/><i/><i/></div><div className="recap-label">AI SUMMARY</div><div className="recap-line wide"/><div className="recap-line"/><div className="recap-line medium"/><div className="recap-line wide"/><div className="recap-pulse"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div></div><div className="recap-float">✦ KEY INSIGHTS GENERATED</div></div>
  return <div className="project-graphic graphic-robot"><div className="robot-orbit orbit-a"/><div className="robot-orbit orbit-b"/><div className="robot-body"><div className="robot-eye"/><div className="robot-eye"/></div><div className="robot-wheel wheel-a"/><div className="robot-wheel wheel-b"/><div className="robot-sensor">◉</div><div className="robot-status">PATH CLEAR · AUTONOMOUS MODE</div></div>
}

function ProjectCard({ project, index }) {
  const href = project.demo || project.github
  return <Reveal delay={index % 2 * .08} className={`project-card ${project.featured ? 'featured-card' : ''}`}>
    <div className="project-visual"><ProjectGraphic kind={project.kind}/><span className="project-index">PROJECT / {project.id}</span></div>
    <div className="project-details"><span className="project-label">{project.label}</span><div className="project-title-row"><h3>{project.name}</h3>{href && <a href={href} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Open ${project.name}`}><ArrowUpRight size={22}/></a>}</div><p>{project.summary}</p><div className="tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div></div>
  </Reveal>
}

function Projects() {
  return <section id="work" className="section projects-section"><div className="container"><SectionHeading number="02" title="Selected projects" description="A focused selection of software projects spanning productivity, intelligent systems, and practical tools."/><div className="projects-grid">{projects.map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}</div></div></section>
}

function Experience() {
  return <section id="experience" className="section experience-section"><div className="container"><SectionHeading number="03" title="Engineering experience" description="Production-deployed automation and internal tools for a manufacturing team."/><div className="experience-layout"><Reveal className="experience-aside"><div className="aside-orb"><Code2 size={35}/></div><div className="aside-number">30<span>+</span></div><p>LIVE DEPLOYMENTS<br/>AT EXKOR MANUFACTURING</p><div className="aside-line"/></Reveal><div className="experience-list">{experience.map((exp,i)=><Reveal key={i} className="experience-item"><div className="experience-marker"><span/></div><div className="experience-content"><div className="experience-top"><div><span className="experience-division">{exp.division}</span><h3>{exp.company}</h3></div><span className="experience-date">{exp.dates}</span></div><p className="experience-role">{exp.role}</p><p className="experience-description">{exp.description}</p><div className="tags">{exp.tech.map(t=><span key={t}>{t}</span>)}</div></div></Reveal>)}</div></div></div></section>
}


function Achievements() {
  return <section id="achievements" className="section achievements-section"><div className="container">
    <SectionHeading number="04" title="Beyond the classroom" description="Competing, representing my university, and building under pressure."/>
    <div className="achievements-grid">
      <Reveal className="achievement-card achievement-cs">
        <div className="achievement-topline"><span className="achievement-category">INTERUNIVERSITY COMPUTER SCIENCE</span><Trophy size={20}/></div>
        <div className="achievement-stat">03<span>×</span></div>
        <h3>CS Games</h3>
        <p className="achievement-highlight">Selected to represent the University of Windsor three consecutive times.</p>
        <p>The CS Games is a major interuniversity computer science competition, bringing together university-selected teams to tackle programming, algorithms, software engineering, security, and other technical challenges. The 2026 edition drew more than 300 students from 22 Canadian universities.</p>
        <a href="https://csgames.org/en/" target="_blank" rel="noopener noreferrer">About CS Games <ArrowUpRight size={16}/></a>
      </Reveal>
      <Reveal className="achievement-card achievement-massey" delay={.1}>
        <div className="achievement-topline"><span className="achievement-category">HACKATHON · HARDWARE</span><Cpu size={20}/></div>
        <div className="achievement-stat">02<span>×</span></div>
        <h3>MasseyHacks</h3>
        <p className="achievement-highlight">Two first-place finishes in the hardware category.</p>
        <p>MasseyHacks is Canada's oldest high-school hackathon, a Windsor-based event where young builders design and demonstrate working technology under tight time constraints. One of my winning builds was an autonomous Arduino car that navigated around obstacles using sensors and path-selection logic.</p>
        <a href="https://masseyhacks.ca/" target="_blank" rel="noopener noreferrer">About MasseyHacks <ArrowUpRight size={16}/></a>
      </Reveal>
    </div>
  </div></section>
}

function About() {
  return <section id="about" className="section about-section"><div className="container"><SectionHeading number="01" title="About me"/><div className="about-grid"><Reveal className="about-copy"><div className="about-kicker">THE PERSON BEHIND THE PROJECTS <Sparkles size={16}/></div><h3>Engineer. Competitor.<br/><span>Lifelong learner.</span></h3><p>I'm an <strong>Honours Computer Science (Co-op) student at the University of Windsor</strong> who enjoys building software that feels useful, polished, and intentional. My work spans desktop assistants, productivity tools, reporting systems, and internal engineering solutions designed for real users.</p><p>I enjoy building in teams, competing in technical challenges, and turning messy real-world problems into reliable software. I have represented the University of Windsor at CS Games for three consecutive years, earned two first-place hardware wins at MasseyHacks, and won 1st Place in Automation at WinHacks 2026 with Buddy AI. Outside of software, I play competitive badminton and coach at Walkerville Collegiate Institute.</p><a className="inline-link" href="#contact">Let's connect <ArrowUpRight size={18}/></a></Reveal><div className="about-right"><Reveal className="skills-card" delay={.08}><span className="small-caps">MY TOOLKIT</span>{skillGroups.map(g=><div className="skill-row" key={g.name}><h4>{g.name}</h4><div>{g.skills.map(s=><span key={s}>{s}</span>)}</div></div>)}</Reveal></div></div></div></section>
}

function Contact() {
  return <section id="contact" className="contact-section"><div className="container"><Reveal className="contact-content"><span className="contact-eyebrow"><span className="pulse-dot"/> HAVE SOMETHING IN MIND?</span><h2>Let's make<br/><span className="gradient-text">it happen<span className="period">.</span></span></h2><p>Open to internship opportunities, collaborations, and conversations about interesting ideas.</p><div className="contact-actions"><a className="button-primary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={18}/></a><a className="button-secondary" href={`mailto:${profile.email}`}>Email me <Mail size={17}/></a>{profile.resume && <a className="button-secondary" href={profile.resume} target="_blank" rel="noopener noreferrer">View resume <Download size={17}/></a>}</div></Reveal><div className="footer"><a className="footer-logo" href="#home">Ali Asghar</a><span>© {new Date().getFullYear()} Ali Asghar. Built with intention.</span><div className="footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13}/></a>{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13}/></a>}<a href={`mailto:${profile.email}`}>Email <Mail size={13}/></a><a href="#home">Back to top ↑</a></div></div></div></section>
}

export default function App() { return <><Header/><main><Hero/><div className="ticker" aria-hidden="true"><div className="ticker-track">{Array.from({length:4},(_,i)=><span key={i}>SOFTWARE ENGINEERING <i>✳</i> ARTIFICIAL INTELLIGENCE <i>✳</i> CREATIVE PROBLEM SOLVING <i>✳</i> BUILT TO LEARN <i>✳</i> </span>)}</div></div><About/><Projects/><Experience/><Achievements/><Contact/></main></> }
