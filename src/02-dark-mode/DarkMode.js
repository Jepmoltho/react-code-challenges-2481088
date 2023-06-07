<<<<<<< HEAD
import { useState } from 'react'

export default function DarkMode () {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`page ${darkMode && 'dark-mode'}`}>
      <button
        className='dark-mode-button'
        onClick={() => setDarkMode(true)}
      >
        Dark Mode
      </button>
      <button
        className='light-mode-button'
        onClick={() => setDarkMode(false)}
      >
=======
export default function DarkMode(props) {
  return (
    <div className="page">
      <button className="dark-mode-button" onClick={props.switchToDarkMode}>
        Dark Mode
      </button>
      <button className="light-mode-button" onClick={props.switchToLightMode}>
>>>>>>> 01_02b
        Light Mode
      </button>
    </div>
  );
}
