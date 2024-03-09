import './App.css';
import './components/assets/css/default.css';
import Main from './components/main';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';


const App = () => {

  return (
    <div>
      <Main />
      <div className="section" id="about">
        <About />
      </div>
      <div className="section" id="skills">
        <Skills />
      </div>
      <div className="section" id="projects">
        <Projects />
      </div>
    </div>
  );
};

export default App;
