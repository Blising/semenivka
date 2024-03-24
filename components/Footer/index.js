import React from 'react';
import "../../ style/Footer.css";
import imageFooter from "../../img/ua.png";

const Footer = () => {
    return (
        <footer>
            <>
            <div className="MainFooter">
                    <div className="marquee">
                    ЧЕРЕЗ ВОЄННЕ ВТОРГНЕННЯ ТИМЧАСОВО ПРИЗУПИНЕННО.ПРОДОВЖЕННЯ ГРАФІКУ РОБОТИ  ЗАПЛАНОВАНО ПІСЛЯ ЗВІЛЬНЕННЯ СЕМЕНІВКИ ЗСУ.<br/>БУДЬ ЛАСКА СЛІДКУЙТЕ ЗА НОВИНАМИ 
                    <img src={imageFooter} alt='ImageFooter' style={{ width: '50px', height: 'auto', borderRadius:"999px", border: 'solid yellow' }} /></div>
                 
                </div>
                <div style={{ background: 'gray', color: 'white', display: 'flex', justifyContent: 'space-between', padding: '10px', position:'relative', bottom: '0', width: '100%' }}>
                    <div style={{ flexGrow: '1' }}>© 2020 Семенівський ОЗЗСО</div>
                    <div style={{ background: 'gray', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>  <img src={imageFooter} alt='ImageFooter' style={{ width: '50px', height: 'auto', borderRadius:"999px", border: 'solid yellow' }} /> 0001688</div>
                </div>


            </>
        </footer>
    );
};

export default Footer;
