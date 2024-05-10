import { Link } from 'react-router-dom'
import { Toast } from 'makki-toast'
import { Check, Documentation, Github, Moon, Sun } from './icons'
import { useColorScheme } from './hooks/useColorScheme'
import './App.css'

function App() {
  const toast = new Toast()
  const { isDark, setIsDark } = useColorScheme()

  const handleToast = () => {
    toast.info('Simple text', isDark)
  }

  return (
    <section className='section'>
      <div className='theme-button'>
        <div onClick={() => setIsDark(!isDark)}>
          { isDark ? <Sun size={24}/> :  <Moon size={24}/> }
        </div>
      </div>
      <div className='content'>
        <div className='title-container'>
          <p className='title first'>MAKKI</p>
          <p className='title second'>TOAST</p>
        </div>
        <p className='subtitle'>Creative toast</p>
        <div className='button-container'>
          <Link className='button' to={'docs'}>
            <Documentation size={16}/>
            <p className='button-text'>Documentation</p>
          </Link>
          <a className='button' target='_blank' href='https://github.com/DanielJimenezC/makki-toast-package'>
            <Github size={16}/>
            <p className='button-text'>Github</p>
          </a>
        </div>
        <p className='version'>- v1.2.0 -</p>
        <button className='button-show' onClick={() => handleToast()}>Show Simple Toast</button>
        <ul className='properties'>
          <li className='item'><Check size={16}/>Easy to use</li>
          <li className='item'><Check size={16}/>Customizable</li>
          <li className='item'><Check size={16}/>Dark mode</li>
        </ul>
      </div>
      <div className='footer'>
        <div className='footer-links'>
          <a target='_blank' href='https://github.com/DanielJimenezC/makki-toast-package'>Github</a>
          <Link to={'docs'}>Docs</Link>
        </div>
        <p style={{paddingBottom: '0px'}}>The MIT License 2023 makki-toast</p>
        <p>Built by <a target='_blank' href='https://daniel-jimenez.tech'>Daniel Jimenez</a></p>
      </div>
    </section>    
  )
}

export default App
