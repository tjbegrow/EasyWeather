import { useState } from 'react'
export default function Header({FontAwesomeIcon, faGears, darkModeToggle, darkMode, autoUpdate, setAutoUpdate}) {
    console.log("Header Gets:",darkMode);
    const [settingsVisable, setSettingsVisable] = useState(false);
    return (
        <>
            <nav className={darkMode ? "darkBackGround" : ""}>
                <div>
                <button
                >
                    <FontAwesomeIcon icon={faGears} className="fa-regular fa-2x"/>
                </button>
                <ul>
                    <li>Auto Update<input type="checkbox" checked={autoUpdate} onChange={(e) => setAutoUpdate(e.target.checked)}/></li>
                    <li></li>
                    <li></li>
                </ul>
                </div>
                <h1>Kouki Check</h1>
                <button className={`modeButton wi ${darkMode ? "wi-moon-waning-crescent-5": "wi-day-sunny"}`}
                onClick={() => darkModeToggle()}>
                    
                </button>
            </nav>
        </>
    )
}