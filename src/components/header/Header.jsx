import './Header.css'

export default function Header(props) {
    const langLabel = props.language?.lang == "en" ? "português" : "English";
    const lang = props.language?.lang == "en" ? "pt" : "en";

    return (
        <header className="header">
            <div className="logo">
                <h1><a href="#">gh</a></h1>
            </div>

            <nav>
                <input id="stacked-menu" type="checkbox" />

                <label for="stacked-menu">
                    <div className="menu">
                        <span className="stacked"></span>
                    </div>
                </label>

                <ul>
                    <li><a href="#about">{props.language?.contentMenu?.about}</a></li>
                    <li><a href="#projects">{props.language?.contentMenu?.projects}</a></li>
                    <li><a href="#contact">{props.language?.contentMenu?.contact}</a></li>
                    <li><p onClick={() => props.changeLang(lang)} className='lang-button'>{langLabel}</p></li>
                </ul>
            </nav>
        </header>
    )
}