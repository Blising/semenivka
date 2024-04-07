import React from 'react';
import "../ style/Home.css";

import HomeComponet from '../components/HomeComponet';
import WelcomComponent from '../components/Welcome';

const HomePage = () => {
    return (
        <>
<WelcomComponent/>



            <HomeComponet />

            <footer>



                <div className="footer-content">
                    <a href='https://www.facebook.com/village.of.semenivka/?_rdr' target='_blank'>

                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png'} alt='ImageFooter' />
                    </a>
                </div>

            </footer>
        </>
    );
}

export default HomePage;

