import React from 'react';
import "../ style/Info.css";
import CenteredImageSlider from '../components/imageHook';

const Info = () => {
    return (
        <>
            <header style={{marginTop:'50px'}}>
                <nav className="navmmmm">
                    <a href="https://semnvk.wixsite.com/semnvk/about-us" className="nav-link navmmmm">Про школу</a> 
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
