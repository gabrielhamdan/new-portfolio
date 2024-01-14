import './App.css'
import MenuButton from './components/btn_menu/MenuButton'
import Header from './components/header/Header'
import jsonData from './assets/lang.json';
import portrait from './assets/portrait.png';
import { useState, useEffect } from 'react';

function App() {
  const [language, setLanguage] = useState("en");
  const [langData, setLangData] = useState({});

  useEffect(() => {
    const loadData = [...jsonData];

    for(const i in loadData)
      if(loadData[i].lang == language)
        setLangData(loadData[i]);
  }, language);

  const changeLang = (lang) => {
    setLanguage(lang);
  }

  return (
    <>
    <Header language={langData} changeLang={changeLang} />

    <div className="flex flex-center language-container">
        <MenuButton btnStyle="btn btn-small selected"  onClick={{"func": changeLang, "arg": "en"}} label="en" />
        <MenuButton btnStyle="btn btn-small"  onClick={{"func": changeLang, "arg": "pt"}} label="pt" />
    </div>

    <div className='flex flex-center main-container'>
      <div className='flex flex-center title-container'>
        <div className='title'>
          <h3>{langData?.greeting?.hello},</h3>
          <h1>{langData?.greeting?.im} <span className='bold'>Gabriel Hamdan</span></h1>
          <h2>{langData?.greeting?.dev}</h2>
          <div className='cv-container'>
            <a className='a-solid-btn' href='#'><h4 className='solid-btn'>download CV</h4></a>
          </div>
        </div>
      </div>

      <div className='flex flex-center content-container'>
        <div className="content-menu">
          <MenuButton btnStyle="menu-button btn selected" label={langData?.contentMenu?.about} selected={true} link="#about"/>
          <MenuButton btnStyle="menu-button btn" label={langData?.contentMenu?.projects} link="#projects"/>
          <MenuButton btnStyle="menu-button btn" label={langData?.contentMenu?.contact} link="#contact"/>
        </div>

        <div className='content-section'>
          <section id='about' className="content">
            <div className='flex flex-center portrait-container'>
              <img className='portrait' src={portrait} alt='Gabriel Hamdan'/>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem nihil magnam harum, hic modi inventore facere beatae, sed unde praesentium aliquid iure non neque, quo sint aliquam eaque repellendus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem nihil magnam harum, hic modi inventore facere beatae, sed unde praesentium aliquid iure non neque, quo sint aliquam eaque repellendus!</p>
          </section>

          <section id='projects' className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem nihil magnam harum, hic modi inventore facere beatae, sed unde praesentium aliquid iure non neque, quo sint aliquam eaque repellendus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem nihil magnam harum, hic modi inventore facere beatae, sed unde praesentium aliquid iure non neque, quo sint aliquam eaque repellendus!</p>
          </section>

          <section id='contact' className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem nihil magnam harum, hic modi inventore facere beatae, sed unde praesentium aliquid iure non neque, quo sint aliquam eaque repellendus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem nihil magnam harum, hic modi inventore facere beatae, sed unde praesentium aliquid iure non neque, quo sint aliquam eaque repellendus!</p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
