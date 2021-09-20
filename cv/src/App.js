
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../src/Components/Navbar';
import { AboutMe } from '../src/Components/AboutMe';
import { Education } from '../src/Components/Education';
import { Skills } from '../src/Components/Skills';
import { Experience } from './Components/Experience';
import { English } from './Components/English';
import { Code } from './Components/Code';
import { Footer } from './Components/Footer';
const headerwords =
  [
    { title: 'About me' },
    { title: 'Education' },
    { title: 'Experience' },
    { title: 'English level' },
    { title: 'Skills' },
  ]
const codeEx = {
  code: `export const TaskCreate = ({addTask}) => {
    const [useInput,setUseInput] = useState('');
    
    const createTaskHandler = () => {
     addTask(useInput)
    }
    const handleChange = (e) => {
     setUseInput(e.target.value)
     
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        setUseInput('')
    }
    const handleKeyPress = (e) =>{
         if(e.key==="Enter"){
             handleSubmit(e)
         }
    }
    return( 
        <div>
            <div onSubmit={handleSubmit} className='form'>
            <label className='label__create'>New task</label>
            <div className='taskCteateComponent'>
                <input value={useInput} onKeyDown={handleKeyPress} onChange={handleChange} className='create_input' name='create' />
            </div>
            <button onClick={createTaskHandler} className='button__add'>Add</button>
        </div>
        </div>
    )
}`
}
const aboutMeName = {
  name: 'Orpik Vladislav Viktorovich'
}
const infoAbouMe = {
  info: ' “I am sociable, proactive, flexible, honest, stress-resistant. I consider my strengths to be systemic thinking, result orientation, good management skills. I charge the team with my positive and energy. I don’t drink, I don’t smoke ”.'
}
const infoEducation = {
  title: 'From 2018 to 22, I have been a student at Yanka Kupala University in Grodno. I study at the Faculty of Mathematics and Informatics, specializing in information resource management.'
}
function App() {
  return (
    <div className="App">
      <Navbar data={headerwords} />
      <AboutMe title={aboutMeName} info={infoAbouMe} />
      <Education qwe={infoEducation} data={headerwords[1]} />
      <Skills data={headerwords[4]} />
      <Experience data={headerwords[2]} />
      <English data={headerwords[3]} />
      <Code example={codeEx} />
      <Footer />
    </div>
  );
}

export default App;
