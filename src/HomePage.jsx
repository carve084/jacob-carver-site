import React from 'react';
import { FaFilePdf, FaLinkedin, FaGithub, FaAws, FaReact, FaNodeJs, FaJava, FaDocker, FaPython, FaAngular, FaHtml5, FaCss3, FaBook, FaHiking, FaTableTennis, FaPencilAlt, FaCloud } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiKubernetes, SiOracle, SiMongodb } from 'react-icons/si';

const SkillBadge = ({ icon, name }) => (
  <div className="flex items-center gap-2 bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium">
    {icon}
    <span>{name}</span>
  </div>
);

const ProjectCard = ({ title, context, description, techStack, githubUrl, impactPoints }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
    <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">{context}</span>
    <h3 className="text-2xl font-bold text-gray-900 mt-3 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mb-5">
      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Achievements</h4>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {impactPoints.map((point, index) => <li key={index} dangerouslySetInnerHTML={{ __html: point }} />)}
      </ul>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {techStack.map((tech, index) => <span key={index} className="text-xs bg-blue-100 text-blue-800 font-semibold px-2 py-1 rounded-md">{tech}</span>)}
    </div>
    {githubUrl && (
      <div className="flex items-center gap-4 mt-auto">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-2 transition-colors">
          <FaGithub /> View on GitHub
        </a>
      </div>
    )}
  </div>
);

const TimelineItem = ({ role, company, duration, achievements }) => (
    <div className="relative pl-8 sm:pl-12 py-4 group">
        <div className="absolute left-2 sm:left-4 top-5 h-full w-0.5 bg-gray-200 group-last:bg-transparent"></div>
        <div className="absolute left-0 sm:left-2 top-5 w-4 h-4 rounded-full bg-white border-2 border-indigo-500"></div>
        <p className="text-sm font-medium text-gray-500">{duration}</p>
        <h3 className="text-xl font-bold text-gray-800">{role}</h3>
        <p className="text-lg font-semibold text-indigo-700 mb-2">{company}</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
            {achievements.map((ach, i) => <li key={i}>{ach}</li>)}
        </ul>
    </div>
);


// --- Main Page Component ---

export default function HomePage() {
  const careerJourney = [
    {
      role: "Lead Software Engineer",
      company: "Syneren, Vienna, VA",
      duration: "Feb 2020 - Present",
      achievements: [
        "Led full-stack development for government clients, ensuring successful 5-year contract execution.",
        "Designed and deployed scalable services on both AWS and Microsoft Azure.",
        "Modernized critical legacy systems using Java, Weblogic, and Oracle.",
        "Mentored 6+ junior developers, fostering team growth and skill advancement.",
      ]
    },
    {
      role: "Software Developer",
      company: "Quality Process, San Francisco, CA",
      duration: "Sep 2017 - Feb 2020",
      achievements: [
        "Built versatile full-stack applications for diverse private and nonprofit clients.",
        "Collaborated on end-to-end solutions, adapting to various tech stacks.",
      ]
    },
    {
      role: "Software Developer",
      company: "OATI, Minneapolis, MN",
      duration: "Dec 2015 - Aug 2017",
      achievements: [
        "Developed features in an Agile environment for energy utility software.",
        "Served as a key troubleshooter on a high-priority debugging team.",
      ]
    }
  ];

  const featuredProjects = [
    {
      context: "Professional Impact",
      title: "Cloud & Security Modernization at Syneren",
      description: "As lead engineer, I directed the technical strategy for a major government contract, focusing on modernizing systems, enhancing security posture, and improving team velocity.",
      techStack: ["AWS", "Azure", "Java", "WebLogic", "Oracle", "Azure DevOps", "Secure Coding"],
      impactPoints: [
        "Spearheaded efforts that were instrumental in securing a <strong>multi-year, multi-million-dollar contract renewal</strong>.",
        "Resolved over <strong>50 IAVM vulnerability reports</strong>, hardening system defenses and ensuring compliance.",
        "Mentored <strong>6 junior developers</strong> and counting, resulting in a significant increase in team productivity.",
      ]
    },
    {
      context: "Latest Personal Project",
      title: "AI-Powered TCG Simulator",
      description: "A personal project focused on building a robust, stateful game engine in Python. The core challenge is architecting a system that can handle complex game rules and interactions, laying the groundwork for future AI integration.",
      techStack: ["Python", "Object-Oriented Design", "State Management", "Game Logic"],
      githubUrl: "https://github.com/carve084/ptcgp-sim",
      impactPoints: [
        "Engineered a modular, event-driven game engine from scratch to handle asynchronous actions and turn phases.",
        "Implemented a complex ruleset and state machine to accurately simulate intricate card interactions.",
        "Focused on clean, object-oriented principles to ensure the codebase is maintainable and extensible for future features.",
      ]
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto p-4 sm:p-8">
        
        <header className="text-center mb-16">
          <img
            src="/avatar.jpg"
            alt="Jacob Carver headshot"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl mx-auto mb-4"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">Jacob Carver</h1>
          <p className="text-xl text-indigo-600 font-medium mt-2">Lead Software Engineer | Full-Stack Developer | Agile Leader</p>
          
          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            A proven Lead Software Engineer with over 9 years of success leading teams and delivering robust, full-stack applications. My leadership was instrumental in securing a <strong>multi-million-dollar contract renewal</strong>, and I have hands-on experience deploying and maintaining services on <strong>AWS and Azure</strong>. I thrive on mentoring developers and bridging the gap between complex technical challenges and business objectives.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all">
              <FaFilePdf /> Download Resume
            </a>
            <a href="https://github.com/carve084" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 border border-gray-300 transition-all">
              <FaGithub /> GitHub
            </a>
            <a href="https://github.com/carve084/ptcgp-sim" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 border border-gray-300 transition-all">
              <FaPython /> Latest Personal Project
            </a>
          </div>
        </header>

        <main className="space-y-16">
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Featured Work & Impact</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => <ProjectCard key={index} {...project} />)}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Technology Stack</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-3 text-gray-700">Languages & Databases</h3>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge icon={<SiTypescript />} name="TypeScript" />
                            <SkillBadge icon={<FaJava />} name="Java" />
                            <SkillBadge icon={<FaPython />} name="Python" />
                            <SkillBadge icon={<FaHtml5 />} name="HTML/CSS" />
                            <SkillBadge icon={<SiOracle />} name="Oracle" />
                            <SkillBadge icon={<SiPostgresql />} name="PostgreSQL" />
                            <SkillBadge icon={<SiMongodb />} name="MongoDB" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3 text-gray-700">Cloud & DevOps</h3>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge icon={<FaAws />} name="AWS" />
                            <SkillBadge icon={<FaCloud />} name="Azure" /> 
                            <SkillBadge icon={<FaDocker />} name="Docker" />
                            <SkillBadge icon={<SiKubernetes />} name="Kubernetes" />
                            <SkillBadge name="Azure DevOps" />
                            <SkillBadge name="CI/CD" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3 text-gray-700">Frameworks & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge icon={<FaNodeJs />} name="Node.js" />
                            <SkillBadge icon={<FaReact />} name="React" />
                            <SkillBadge icon={<FaAngular />} name="Angular" />
                            <SkillBadge name="Spring" />
                            <SkillBadge name="WebLogic" />
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Career Journey</h2>
            <div className="relative">
                {careerJourney.map((item, index) => <TimelineItem key={index} {...item} />)}
            </div>
          </section>
        </main>

        <footer className="text-center py-12 mt-16 border-t border-gray-200">
            <div className="flex justify-center items-center gap-6 mb-4 text-gray-500">
                <span className="flex items-center gap-2"><FaBook /> Reading</span>
                <span className="flex items-center gap-2"><FaHiking /> Hiking & Canoeing</span>
                <span className="flex items-center gap-2"><FaTableTennis /> Table Tennis</span>
                <span className="flex items-center gap-2"><FaPencilAlt /> Writing Fiction</span>
            </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Jacob Carver. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}