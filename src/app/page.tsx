"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, GitBranch, Mail, MapPin, MoveUpRight, Radio, Sparkles, Terminal, Wifi } from "lucide-react";
import { AmbientScene } from "@/components/ambient-scene";

const stack = ["JavaScript / TypeScript", "React", "Next.js", "Node.js", "Python", "C / C++", "Tailwind CSS", "Git"];

const projects = [
  { number: "01", kind: "GENERATIVE AI / RAG", title: "GenAI Multi-Document Chat", summary: "Context-aware document querying for people who have more than one PDF open.", architecture: "RAG pipeline · vector retrieval · streaming UI", tech: ["Next.js", "LangChain", "Vector DB"], href: "https://github.com/Preetham160/GenAI-multidoc-chat", accent: "lime" },
  { number: "02", kind: "REAL-TIME SYSTEMS", title: "Real-Time Chat App", summary: "Low-latency bi-directional messaging with state that stays in sync under pressure.", architecture: "WebSocket events · optimistic state · persistent messages", tech: ["Node.js", "Socket.io", "MongoDB"], href: "https://github.com/Preetham160/Real-time-chat-app", accent: "cyan" },
  { number: "03", kind: "VOICE / CONVERSATIONAL AI", title: "GenAI Voice Assistant", summary: "A speech-to-speech loop tuned for a more immediate, human-feeling conversation.", architecture: "Streaming audio · transcription · edge synthesis", tech: ["Python", "Whisper", "WebSockets"], href: "https://github.com/Preetham160/GenAI-voice-assistant", accent: "orange" },
];

const reveal: Variants = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } } };

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="topbar">
        <a className="wordmark" href="#top" aria-label="Preetham S home"><span>PS</span><b>Preetham S</b></a>
        <div className="nav-links"><a href="#work">Selected work</a><a href="#stack">Stack</a><a href="#contact">Contact</a></div>
        <a className="status-pill" href="https://github.com/Preetham160" target="_blank" rel="noreferrer"><i /> Open to build</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <motion.div initial="hidden" animate="visible" variants={reveal} className="eyebrow"><span className="eyebrow-line" /> CS / 02 — BENGALURU, IN</motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.08 }}>I build systems<br /><em>that respond.</em></motion.h1>
          <motion.p initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.16 }} className="hero-lede">Preetham S is a 2nd year B.Tech Computer Science student exploring the point where full-stack craft, real-time architectures, and generative AI meet.</motion.p>
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.24 }} className="hero-actions"><a className="button button-primary" href="#work">Explore projects <ArrowUpRight size={16} /></a><a className="button button-quiet" href="#contact">Start a conversation <MoveUpRight size={16} /></a></motion.div>
        </div>
        <div className="hero-scene" aria-label="Interactive ambient 3D scene"><AmbientScene /><div className="scene-caption"><span>INTERACTIVE FIELD</span><small>move your cursor</small></div></div>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="marquee" aria-label="Areas of practice"><div>REAL-TIME SYSTEMS <span>✳</span> GENERATIVE AI <span>✳</span> MODERN WEB <span>✳</span> REAL-TIME SYSTEMS <span>✳</span> GENERATIVE AI <span>✳</span></div></section>

      <section className="section work-section" id="work">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} className="section-heading"><div><span className="section-kicker">01 / SELECTED WORK</span><h2>Built to be <span>felt.</span></h2></div><p>Three explorations in making complex systems feel clear, fast, and a little more human.</p></motion.div>
        <div className="project-list">{projects.map((project) => <motion.a initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal} transition={{ delay: 0.08 * Number(project.number) }} className={`project-card ${project.accent}`} href={project.href} target="_blank" rel="noreferrer" key={project.number}><div className="project-meta"><span>{project.number}</span><span>{project.kind}</span></div><div className="project-main"><div><h3>{project.title}</h3><p>{project.summary}</p></div><ArrowUpRight className="project-arrow" size={22} /></div><div className="project-footer"><span>{project.architecture}</span><div>{project.tech.map((item) => <b key={item}>{item}</b>)}</div></div></motion.a>)}</div>
      </section>

      <section className="section stack-section" id="stack"><div className="section-heading"><div><span className="section-kicker">02 / CURRENT STACK</span><h2>Tools for <span>momentum.</span></h2></div><p>The things I reach for when an idea needs to become a reliable, legible product.</p></div><div className="stack-grid">{stack.map((item, index) => <div className="stack-item" key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowUpRight size={15} /></div>)}</div><div className="signal-row"><div><Radio size={16} /><span>Currently learning</span><b>Distributed systems + model context</b></div><div><Wifi size={16} /><span>Last shipped</span><b>Streaming voice interface</b></div><div><Terminal size={16} /><span>Preferred mode</span><b>Small loops, sharp edges</b></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-inner"><div><span className="section-kicker">03 / CONTACT</span><h2>Have a system<br /><em>worth building?</em></h2></div><div className="contact-copy"><p>I’m always curious about ambitious interfaces, distributed problems, and useful AI. Say hello and let’s see what we can make respond.</p><a className="button button-primary" href="mailto:your.email@example.com">Email Preetham <Mail size={16} /></a><div className="social-links"><a href="https://github.com/Preetham160" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a><a href="#contact"><BriefcaseBusiness size={17} /> LinkedIn <small>add URL</small></a><a href="mailto:your.email@example.com"><Mail size={17} /> Email</a></div></div></div></section>

      <footer><span>© 2026 PREETHAM S</span><span>BUILT WITH CURIOSITY <Sparkles size={13} /></span><a href="#top"><MapPin size={13} /> BACK TO TOP</a></footer>
    </main>
  );
}
