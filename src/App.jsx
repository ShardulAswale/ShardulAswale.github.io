import { useState } from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './index.css';
const skills = [
['LLM applications','RAG · LangChain · LangGraph · Prompt engineering · Hugging Face · TruLens · Grounding and evaluation'],
['Applied machine learning','Python · pandas · NumPy · scikit-learn · XGBoost · Feature engineering · SHAP · Streamlit'],
['Backend & data','FastAPI · Pydantic · SQLAlchemy · REST APIs · WebSockets · MongoDB · DynamoDB · SQL · Data pipelines'],
['Cloud & delivery','AWS · Amazon ECS · Docker · Azure · Git · GitHub Actions · CI/CD · Linux']
];
export default function App() {
 const [theme,setTheme]=useState('latte');
 return <div className={'site theme-'+theme}>
 <a className="skip" href="#main">Skip to content</a>
 <header className="nav wrap"><a className="brand" href="#home">Shardul<span>.</span></a><nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav><label className="theme-label">Your brew<select value={theme} onChange={e=>setTheme(e.target.value)}><option value="latte">Latte</option><option value="espresso">Espresso</option></select></label></header>
 <main id="main" className="wrap"><Hero/><Projects/>
 <section id="experience" className="section"><p className="eyebrow">The blend / Experience</p><h2>Engineering across the stack.</h2><div className="two-grid">
 <article className="panel"><p className="eyebrow">Elemental Concept · London</p><h3>AI chatbot backend development</h3><p>FastAPI services, conversation and session management, document retrieval and response grounding, usage analytics, TruLens evaluation, and Docker deployment validation on AWS ECS.</p></article>
 <article className="panel"><p className="eyebrow">Infogain · India</p><h3>Enterprise software engineering</h3><p>React micro-frontends integrated with Spring Boot APIs, alongside application and infrastructure support across more than 3,000 retail systems.</p></article></div><div className="education"><span>Education</span><p><strong>MSc Artificial Intelligence</strong> · Northumbria University</p></div></section>
 <section id="skills" className="section"><p className="eyebrow">Ingredients / Technical toolkit</p><h2>From the model to the API.</h2><div className="two-grid">{skills.map(([title,body])=><article className="panel skill" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div><p className="history">Earlier work includes React, TypeScript, JavaScript, Redux, Node.js, Express and Java/Spring Boot API integration. My GitHub preserves that history alongside my AI and Python focus.</p></section>
 <Contact/></main><footer className="footer wrap"><span>© {new Date().getFullYear()} Shardul Aswale</span><span>Built with React. Fuelled by coffee.</span><a href="https://github.com/ShardulAswale">GitHub ↗</a></footer></div>;
}
