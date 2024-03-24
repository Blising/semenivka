import React from 'react';
import "../ style/Info.css";
import CenteredImageSlider from '../components/imageHook';

const Info = () => {
    return (
        <>
            <header style={{marginTop:'50px'}}>
                <nav className="navmmmm">
                    <a href="https://semnvk.wixsite.com/semnvk/about-us" className="nav-link navmmmm">Про школу</a>
                    <a href="https://semnvk.wixsite.com/semnvk/publichna-informaciya" className="nav-link navmmmm">Публічність</a>
                    <a href="https://semnvk.wixsite.com/semnvk/nvr" className="nav-link navmmmm ">НВР</a>
                    <a href="https://semnvk.wixsite.com/semnvk/vihovna-robota" className="nav-link navmmmm" >Виховна Робота</a>
                    <a href="https://semnvk.wixsite.com/semnvk/%D1%96%D0%BD%D0%BA%D0%BB%D1%8E%D0%B7%D1%96%D1%8F" className="nav-link navmmmm">Інклюзія</a>
                    <a href="https://semnvk.wixsite.com/semnvk/distancijne-navchannya" className="nav-link navmmmm" target="_blank" rel="noopener noreferrer">Дистанційне Навчання</a>
                    <a href="https://semnvk.wixsite.com/semnvk/admissions" className="nav-link navmmmm ">Для батьків</a>
                    <a href="https://semnvk.wixsite.com/semnvk/student-life" className="nav-link navmmmm">Для учнів</a>
                </nav>
                <img src={"https://static.wixstatic.com/media/41d000_4159c5ebec50b77de443f7739071e4bc.png/v1/fill/w_160,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/41d000_4159c5ebec50b77de443f7739071e4bc.png"} style={{ width: '100px', height: 'auto' }} alt="something" /> <h5 style={{fontSize:'25px', textAlign:'center', justifyContent:"center"}}>СЕМЕНІВСЬКИЙ ОЗЗСО</h5> <br />
            </header>
            <main>
                <CenteredImageSlider/>
            </main>
        </>
    );
}

export default Info;
