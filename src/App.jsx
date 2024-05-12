
import { Herosection } from './components/Herosection';
import { Nav } from './components/Nav';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import {Contact} from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Herosection/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );

}

export default App;
