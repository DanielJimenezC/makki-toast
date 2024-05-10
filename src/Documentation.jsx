import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Toast } from 'makki-toast'
import { Copy, Github, Moon, Npm, Sun } from './icons'
import { useColorScheme } from './hooks/useColorScheme'
import Code from './components/Code'
import './Documentation.css'

const Documentation = () => {
  const importLibrary = "import { Toast } from 'makki-toast'"
  const toastSimple = "let toast = new Toast()\ntoast.info('Simple Message', false)"
  const toastStatus = "let toast = new Toast()\ntoast.info('Simple Message', false)\ntoast.success('Simple Message', false)\ntoast.warning('Simple Message', false)\ntoast.danger('Simple Message', false)"
  const toastPosition = "let toast = new Toast()\ntoast.show({\n  autoClose: 5000,\n  message: 'Simple Message',\n  position: 'top-right',\n})"
  const toastCustomize = "let toast = new Toast()\ntoast.show({\n  autoClose: 5000,\n  backgroundColor: '#7F0B0B',\n  icon: 'bx bxs-invader',\n  message: 'Simple Message',\n  position: 'top-right',\n  status: 'none'\n})"

  const [ isActive, setIsActive ] = useState(false)
  const [ toastColor, setToastColor ] = useState('#095667')
  const [ toastIcon, setToastIcon ] = useState('bx bxs-invader')
  const [ toastMessage, setToastMessage ] = useState('Simple text')
  const { isDark, setIsDark } = useColorScheme()
  const toast = new Toast()

  const handleInputColor = event => {
    setToastColor(event.target.value)
  }

  const handleInputIcon = event => {
    setToastIcon(event.target.value)
  }

  const handleInputText = event => {
    setToastMessage(event.target.value)
  }

  const handleToast = () => {
    toast.info(toastMessage, isDark)
  }

  const handleStatusToast = (status) => {
    switch(status) {
      case 'info':
        toast.info(toastMessage, isDark)
        break
      case 'success':
        toast.success(toastMessage, isDark)
        break
      case 'warning':
        toast.warning(toastMessage, isDark)
        break
      case 'danger': 
        toast.danger(toastMessage, isDark)
        break
    }
  }

  const handlePositionToast = (position) => {
    toast.show({
      autoClose: 5000,
      darkMode: isDark,
      message: toastMessage,
      position: position
    })
  }

  const handleCustomToast = () => {
    toast.show({
      autoClose: 5000,
      backgroundColor: toastColor,
      darkMode: isDark, 
      icon: toastIcon,
      message: toastMessage,
      status: 'none'
    })
  }

  const handleCopyClipboard = (textCopy) => {
    try {
      navigator.clipboard.writeText(textCopy)
      toast.show({
        autoClose: 5000,
        darkMode: isDark,
        message: 'Copy to clipboard',
        position: 'top-right'
      })
    } catch (ex) {
      toast.show({
        autoClose: 5000,
        darkMode: isDark,
        message: 'Copy to clipboard failed',
        status: 'danger',
        position: 'top-right'
      })
    }
  }

  return (
    <div className='container'>
      <header className='navbar-container'>
        <div className='navbar-title'>
          <Link to={'/'}>
            <p className='first'>Makki</p><p className='second'>Toast</p>
          </Link>
        </div>
        <p className='navbar-version'>v1.2.0</p>
        <div onClick={() => setIsDark(!isDark)} className='navbar-theme'>
          { isDark ? <Sun size={24}/> :  <Moon size={24}/> }
        </div>
      </header>
      <div>
        <p className='description'>Designed and developed to facilitate the build and management 
          of custom alerts in applications, it offers easy integration with projects and 
          compatibility with dark mode to enhance the user experience.
        </p>
        <div className='container-btn-docs'>
          <a className='btn-docs' target='_blank' href='https://github.com/DanielJimenezC/makki-toast-package'>
            <Github size={24}/>
            Github
          </a>
          <a className='btn-docs' target='_blank' href='https://www.npmjs.com/package/makki-toast'>
            <Npm size={24}/>
            @makki-toast
          </a>
        </div>
      </div>
      <ul className='tab-list'>
        <li onClick={() => setIsActive(false)} className={'tab-item ' + (!isActive ? 'active-tab' : '')}>Usage</li>
        <li onClick={() => setIsActive(true)} className={'tab-item ' + (isActive ? 'active-tab' : '')}>Configuration</li>
      </ul>
      {
        !isActive ?
        <div className='tab usage'>
          <p className='doc-title'>Import</p>
          <div className='code-container' onClick={() => {handleCopyClipboard(importLibrary)}}>
            <Copy size={20}/>
            <Code code={importLibrary} language={'javascript'}/>
          </div>
          <p className='doc-title'>Text to use</p>
          <div className='input-container border-container'>
            <label htmlFor='text-input'>Toast message:</label>
            <input className='input-text custom-message' id='text-input' type='input' value={toastMessage} onChange={handleInputText}/>
          </div>
          <p className='doc-title'>Simple</p>
          <div className='container-btn-docs'>
            <button className='button-show-doc' onClick={() => handleToast()}>Show Toast</button>
          </div>
          <p className='example-text'>Example</p>
          <div className='code-container' onClick={() => {handleCopyClipboard(toastSimple)}}>
            <Copy size={20}/>
            <Code code={toastSimple} language={'javascript'}/>
          </div>
          <p className='doc-title'>Status</p>
          <p className='example-text'>The status attribute accept 'info', 'success', 'warning' and 'danger' toast.<br/>The first paramater is the message and the second is a boolean to active dark mode</p>
          <div className='container-btn-docs'>
            <button className='button-show-doc' onClick={() => handleStatusToast('info')}>Info Toast</button>
            <button className='button-show-doc' onClick={() => handleStatusToast('success')}>Success Toast</button>
            <button className='button-show-doc' onClick={() => handleStatusToast('warning')}>Warning Toast</button>
            <button className='button-show-doc' onClick={() => handleStatusToast('danger')}>Danger Toast</button>
          </div>
          <p className='example-text'>Example</p>
          <div className='code-container' onClick={() => {handleCopyClipboard(toastStatus)}}>
            <Copy size={20}/>
            <Code code={toastStatus} language={'javascript'}/>
          </div>
          <p className='doc-title'>Toast position</p>
          <p className='example-text'>The position attribute let you show top, bottom, left, right and center toast</p>
          <div className='container-btn-docs'>
            <button className='button-show-doc' onClick={() => handlePositionToast('top-left')}>Top Left</button>
            <button className='button-show-doc' onClick={() => handlePositionToast('top-center')}>Top Center</button>
            <button className='button-show-doc' onClick={() => handlePositionToast('top-right')}>Top Right</button>
            <button className='button-show-doc' onClick={() => handlePositionToast('bottom-left')}>Bottom Left</button>
            <button className='button-show-doc' onClick={() => handlePositionToast('bottom-center')}>Bottom Center</button>
            <button className='button-show-doc' onClick={() => handlePositionToast('bottom-right')}>Bottom Right</button>
          </div>
          <p className='example-text'>Example</p>
          <div className='code-container' onClick={() => {handleCopyClipboard(toastPosition)}}>
            <Copy size={20}/>
            <Code code={toastPosition} language={'javascript'}/>
          </div>
          <p className='doc-title'>Custom Toast</p>
          <p className='example-text'>The background color and the icon can be custimized. The status must be 'none'. To change the icon, select the 'font' class in <a className='emphasis' style={{textDecoration: 'underline'}} href="https://boxicons.com" target="_blank">BoxIcon</a>.</p> 
          <div className='container-btns'>
            <div className='input-container'>
              <label htmlFor='color-input'>Background:</label>
              <input className='input-color' id='color-input' type='color' value={toastColor} onChange={handleInputColor}/>
            </div>
            <div className='input-container'>
              <label htmlFor='text-input'>Icon:</label>
              <input className='input-text custom-icon' id='text-input' type='input' value={toastIcon} onChange={handleInputIcon}/>
            </div>
          </div>
          <div className='container-btn-docs'>
            <button className='button-show-doc' onClick={() => handleCustomToast()}>Custom Toast</button>
          </div>
          <p className='example-text'>Example</p>
          <div className='code-container' onClick={() => {handleCopyClipboard(toastCustomize)}}>
            <Copy size={20}/>
            <Code code={toastCustomize} language={'javascript'}/>
          </div>
        </div> :
        <div className='tab configuration'>
          <p className='example-text'>Toast's Attributes</p>
          <section>
            <p className='doc-title attribute'>autoClose</p>
            <div className='attribute-container'>
              <p className='attribute-label'>Description:</p>
              <p className='attribute-value'>Set how many milliseconds the toast will be open.</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Default:</p>
              <p className='attribute-value emphasis'>5000</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Values:</p>
              <p className='attribute-value emphasis'>Number</p>
            </div>
          </section>
          <section>
            <p className='doc-title attribute'>backgroundColor</p>
            <div className='attribute-container'>
              <p className='attribute-label'>Description:</p>
              <p className='attribute-value'>Customize the background color of the toast.</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Default:</p>
              <p className='attribute-value emphasis'>null</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Values:</p>
              <p className='attribute-value emphasis'>String</p>
            </div>
          </section>
          <section>
            <p className='doc-title attribute'>canClose</p>
            <div className='attribute-container'>
              <p className='attribute-label'>Description:</p>
              <p className='attribute-value'>If <label className='emphasis'>true</label>, the toast will close when clicking on it.</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Default:</p>
              <p className='attribute-value emphasis'>true</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Values:</p>
              <p className='attribute-value emphasis'>Boolean</p>
            </div>
          </section>
          <section>
            <p className='doc-title attribute'>darkMode</p>
            <div className='attribute-container'>
              <p className='attribute-label'>Description:</p>
              <p className='attribute-value'>If <label className='emphasis'>true</label>, the toast's color will adapt to dark mode.</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Default:</p>
              <p className='attribute-value emphasis'>false</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Values:</p>
              <p className='attribute-value emphasis'>Boolean</p>
            </div>
          </section>
          <section>
            <p className='doc-title attribute'>icon</p>
            <div className='attribute-container'>
              <p className='attribute-label'>Description:</p>
              <p className='attribute-value'>With this attribute, the icon could be customized. Select the 'font' class in <a className='emphasis' style={{textDecoration: 'underline'}} href="https://boxicons.com" target="_blank">BoxIcon</a>.</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Default:</p>
              <p className='attribute-value emphasis'>null</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Values:</p>
              <p className='attribute-value emphasis'>String</p>
            </div>
          </section>
          <section>
            <p className='doc-title attribute'>message</p>
            <div className='attribute-container'>
              <p className='attribute-label'>Description:</p>
              <p className='attribute-value'>It's the message that will show on the toast.</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Default:</p>
              <p className='attribute-value emphasis'>'Example message'</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Values:</p>
              <p className='attribute-value emphasis'>String</p>
            </div>
          </section>
          <section>
            <p className='doc-title attribute'>position</p>
            <div className='attribute-container'>
              <p className='attribute-label'>Description:</p>
              <p className='attribute-value'>Define the position of the toast.</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Default:</p>
              <p className='attribute-value emphasis'>'top-right'</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Values:</p>
              <p className='attribute-value emphasis'>'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'</p>
            </div>
          </section>
          <section>
            <p className='doc-title attribute'>showProgress</p>
            <div className='attribute-container'>
              <p className='attribute-label'>Description:</p>
              <p className='attribute-value'>If <label className='emphasis'>true</label>, a progress bar will show below the toast.</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Default:</p>
              <p className='attribute-value emphasis'>true</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Values:</p>
              <p className='attribute-value emphasis'>Boolean</p>
            </div>
          </section>
          <section>
            <p className='doc-title attribute'>status</p>
            <div className='attribute-container'>
              <p className='attribute-label'>Description:</p>
              <p className='attribute-value'>Define the color of the toast base on its status. When the <label className='emphasis'>none</label> state is selected, color customization is enabled.</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Default:</p>
              <p className='attribute-value emphasis'>'success'</p>
            </div>
            <div className='attribute-container'>
              <p className='attribute-label'>Values:</p>
              <p className='attribute-value emphasis'>'success' | 'warning' | 'danger' | 'info' | 'none'</p>
            </div>
          </section>
        </div>
      }
      <footer className='footer-docs'>
        <p>The MIT License 2023 makki-toast</p>
        <p>Built by <a target='_blank' href='https://daniel-jimenez.tech'>Daniel Jimenez</a></p>
      </footer>
    </div>
  )
}

export default Documentation
