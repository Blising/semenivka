import React from 'react';
import "../ style/Home.css";
import imageUA from "../img/mainlogo.jpg";
import HomeComponet from '../components/HomeComponet';

const HomePage = () => {
    return (
        <>


      
            <div style={{justifyContent:'center', textAlign:'center'}} className="home-content">
                <div><h2>Наш поет-земляк писав:

Під гожим небом в рідному селі

Ідуть хати з минулого в майбутнє.
Над ними людські долі многотрудні

Летять, неначе в ірій журавлі.

Нехай же майбутнє принесе степовій Семенівці процвітання, достаток, а людські долі будуть світлими та щасливими.</h2></div>
<h1 style={{width:"100%", height:"2px", background:'skyblue'}}></h1>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ border: '1px solid black', marginRight: '10px' }}>
        <table>
            <tbody>
                <tr>
                    <td>Семенівська сільська громада::</td>
                    <td>Адмін <></>центр: Семенівка</td>
                </tr>
                <tr>
                    <td>Українська назва: Семенівка</td>
                    <td>Населення: 1349 чол.</td>
                </tr>
                <tr>
                    <td>Країна</td>
                    <td>
                        Україна 
                        <img src={imageUA} alt="Прапор України" className="flag-icon" style={{ width: '50px', height: 'auto' }} />
                    </td>
                </tr>
                <tr>
                    <td>Засноване</td>
                    <td>1921</td>
                </tr>
                <tr>
                    <td>Населення</td>
                    <td>1349</td>
                </tr>
                <tr><td>Площа</td><td>3,214 км²</td></tr>
            </tbody>
        </table>
    </div>

    <div style={{ border: '1px solid black' }}>
        <table>
            <tbody>
                <tr>
                    <td>Географічні дані</td>
                    <td>46°36′29″ пн. ш. 33°35′45″ сх. д.</td>
                </tr>
                <tr>
                    <td>Середня висота над рівнем моря</td>
                    <td>40 м</td>
                </tr>
            </tbody>
        </table>
</div>
</div>
</div>

            <HomeComponet/>

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
