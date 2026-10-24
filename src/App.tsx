import type React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const projects = [
  {
  number: "01",
  name: "Perpetual Medtech",
  category: "HEALTHCARE · LIVE WEBSITE",
  description:
    "A healthcare technology website showcasing medical device quality management, design and development, and clinical data management solutions.",
  tags: ["React", "TypeScript", "Healthcare Tech"],
  color: "project-blue",
  url: "https://perpetualmedtech.netlify.app/",
},
  {
    number: "02",
    name: "Medical QMS Platform",
    category: "HEALTHCARE · FULL STACK",
    description:
      "A quality management platform for medical devices, compliance workflows, document control and audit trails.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    color: "project-blue",
  },
  {
    number: "03",
    name: "Car Price Prediction",
    category: "MACHINE LEARNING",
    description:
      "A machine learning application designed to estimate vehicle prices using features and historical data.",
    tags: ["Python", "Scikit-learn", "ML"],
    color: "project-violet",
  },
  {
    number: "04",
    name: "Readify AI",
    category: "AI · PRODUCTIVITY",
    description:
      "An OCR-powered reading experience that combines text extraction with speech output.",
    tags: ["Python", "OCR", "Azure AI"],
    color: "project-cyan",
  },
];

const skills = [
  "Python",
  "TypeScript",
  "React",
  "Machine Learning",
  "FastAPI",
  "PostgreSQL",
  "Git",
  "Artificial Intelligence",
  "HTML & CSS",
  "JavaScript",
];

function handleSpatialTilt(
  event: React.MouseEvent<HTMLElement>,
) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();

  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;

  const rotateY = (x - 0.5) * 8;
  const rotateX = (0.5 - y) * 8;

  element.style.transform =
    `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
}

function resetSpatialTilt(
  event: React.MouseEvent<HTMLElement>,
) {
  event.currentTarget.style.transform = "";
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({
  x: -500,
  y: -500,
});
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="cursor-glow" aria-hidden="true"style={{left: cursorPosition.x,top: cursorPosition.y,}}/>
      <main onMouseMove={(event) => {setCursorPosition({x: event.clientX,y: event.clientY,});}}></main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">A.</span>
          <span>ARNAV<span className="brand-muted">/DEV</span></span>
        </a>

        <button
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {[
            ["About", "#about"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            //["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero section-shell" id="home">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="availability">
            <span className="status-dot" />
            <span>BUILDING IDEAS INTO REALITY</span>
          </div>

          <p className="eyebrow">HELLO, WORLD. I'M</p>
          <h1>
            Arnav
            <br />
            <span className="gradient-text">Agrawal.</span>
          </h1>

          <p className="hero-role">
            AI/ML Engineer <span>×</span> Full-Stack Developer
          </p>
          <p className="hero-description">
            I build intelligent applications, thoughtful digital experiences,
            and products that turn complex problems into simple solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a href="#contact" className="button-secondary">
              Get in touch <ArrowRight size={16} />
            </a>
          </div>

          
<div className="hero-socials">
  <a
    className="social-card"
    href="https://github.com/agrawalarnav0107-debug"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit my GitHub profile"
  >
    <Code2 size={22} />
    <span>
      <strong>GitHub</strong>
      <small>Explore my code</small>
    </span>
    <ArrowUpRight size={16} className="social-arrow" />
  </a>

  <a
    className="social-card"
    href="https://www.linkedin.com/in/arnav-agrawal-79413037b/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Connect with me on LinkedIn"
  >
    <BriefcaseBusiness size={22} />
    <span>
      <strong>LinkedIn</strong>
      <small>Professional profile</small>
    </span>
    <ArrowUpRight size={16} className="social-arrow" />
  </a>

  <a
    className="social-card"
    href="https://www.instagram.com/_arnavagrawal?rpxt=MXF4N2tub3h0ZHA4NQ=="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit my Instagram profile"
  >
    <Sparkles size={22} />
    <span>
      <strong>Instagram</strong>
      <small>Photos and updates</small>
    </span>
    <ArrowUpRight size={16} className="social-arrow" />
  </a>
</div>

        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <div className="orb orb-back" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="portrait-frame">
            <img
              src="/images/profile.jpg"
              alt="Portrait of Arnav Agrawal"
              className="portrait"
              onError={(event) => {
                event.currentTarget.style.opacity = "0";
              }}
            />
            <div className="portrait-placeholder">
              <Sparkles size={27} />
              <span>PROFILE PHOTO</span>
              <small>public/images/profile.jpg</small>
            </div>
            <div className="portrait-shade" />
          </div>

          <div className="floating-card floating-card-top">
            <span className="card-icon"><Sparkles size={16} /></span>
            <div>
              <strong>AI + Creativity</strong>
              <small>Building what’s next</small>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="mini-status" />
            <div>
              <strong>Always learning.</strong>
              <small>Always building.</small>
            </div>
          </div>

          <div className="visual-index">FIG. 001 — THE DEVELOPER</div>
        </motion.div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </a>

        <span className="hero-coordinate">22°43' N / 75°52' E</span>
      </section>

      <section className="about section-shell section-padding" id="about">
        <div className="section-heading">
          <span className="section-index">01 / ABOUT</span>
          <span className="section-line" />
        </div>

        <div className="about-grid">
          <h2>
            Curious mind.
            <br />
            <span className="muted-heading">Builder's mindset.</span>
          </h2>
          <div className="about-copy">
            <p>
              I'm a Computer Science student specializing in AI and Machine
              Learning, interested in building useful technology with clean
              engineering and thoughtful design.
            </p>
            <p>
              From intelligent applications to full-stack products, I enjoy
              taking an idea from its first sketch to a working experience.
            </p>
            <a href="#contact" className="text-link">
              Let's build something <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        <div className="principles">
          {[
            ["01", "Think deeply", "Understand the problem first."],
            ["02", "Build thoughtfully", "Write code with purpose."],
            ["03", "Keep exploring", "Learn, iterate, improve."],
          ].map(([number, title, description]) => (
            <div className="principle" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section section-shell section-padding" id="projects">
        <div className="section-heading">
          <span className="section-index">02 / SELECTED WORK</span>
          <span className="section-line" />
          <span className="section-note">A FEW THINGS I'VE BUILT</span>
        </div>

        <div className="projects-intro">
          <h2>
            Ideas, meet <span className="gradient-text">execution.</span>
          </h2>
          <p>Experiments, products, and problems worth solving.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              onMouseMove={handleSpatialTilt}
              onMouseLeave={resetSpatialTilt}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className={`project-art ${project.color}`}>
                <span className="project-art-index">{project.number} / 04</span>
                <div className="project-art-core">
                  {index === 0 ? (
                    <div className="core-rings"><span /><span /><span /></div>
                  ) : index === 1 ? (
                    <div className="core-chart"><span /><span /><span /><span /><span /></div>
                  ) : (
                    <div className="core-orb"><Sparkles size={34} /></div>
                  )}
                </div>
                <span className="project-art-caption">SELECTED PROJECT</span>
              </div>

              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.number}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
              href={project.url || "#contact"}
              className="project-link"
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
              > 
                {project.url ? "Live Website" : "Discuss this project"}
                <ArrowUpRight size={16} />
            </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="skills-section section-shell section-padding" id="skills">
        <div className="section-heading">
          <span className="section-index">03 / TOOLKIT</span>
          <span className="section-line" />
        </div>

        <div className="skills-layout">
          <div>
            <h2>
              My tools.
              <br />
              <span className="muted-heading">My playground.</span>
            </h2>
            <p className="skills-intro">
              A growing toolkit for engineering useful, intelligent products.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-chip"
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <span className="skill-dot" />
                {skill}
                <ArrowUpRight size={13} className="skill-arrow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-shell section-padding" id="contact">
        <div className="contact-panel">
          <div className="contact-glow" />
          <span className="section-index">04 / YOUR TURN</span>
          <Sparkles className="contact-sparkle" size={24} />
          <h2>
            Have an idea?
            <br />
            <span className="gradient-text">Let's make it real.</span>
          </h2>
          <p>
            Have a project, collaboration, or interesting problem in mind?
            I'm always interested in exploring what we can build together.
          </p>
          <a className="button-primary"href="https://mail.google.com/mail/?view=cm&fs=1&to=agrawalarnav0107@gmail.com"target="_blank"rel="noopener noreferrer">
  Say hello <Mail size={17} />
</a>
        </div>
      </section>

      <footer className="footer section-shell">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">A.</span>
          <span>ARNAV<span className="brand-muted">/DEV</span></span>
        </a>
        <span>DESIGNED WITH INTENTION · BUILT WITH CURIOSITY</span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
        <span className="copyright">© {new Date().getFullYear()} ARNAV AGRAWAL</span>
      </footer>
    </main>
  );
}

export default App;
