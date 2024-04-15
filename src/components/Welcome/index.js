import React, { useState } from 'react';
import '../../ style/welcome.css';

import imageUA from '../../images/first.jpg';
import image2 from '../../images/second.jpg';
import image3 from '../../images/thirtin.jpg'; // Поправлено назву зображення
export default function WelcomComponent() {
    const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
    const [isFirstButtonHidden, setIsFirstButtonHidden] = useState(false); // Додано стан для першої кнопки

    const handleNextBlock = (event) => {
        event.preventDefault();
        const nextBlockIndex = currentBlockIndex + 1;
        const nextBlock = document.getElementsByClassName('block')[nextBlockIndex];
        if (nextBlock) {
            nextBlock.classList.remove('hidden');
            nextBlock.scrollIntoView({ behavior: 'smooth' });
            setCurrentBlockIndex(nextBlockIndex);
            if (nextBlockIndex === 3) {
                setIsNextButtonDisabled(true); // Вимкнути кнопку після другого слайда
            }
            if (nextBlockIndex === 1) {
                setIsFirstButtonHidden(true); // Приховати першу кнопку при переході на другий слайд
            }
        }
    };

    return (

        <div className='welcome-container'>
            <div className='block' style={{ justifyContent: 'center', backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center', margin: '1%', width: 'auto', height: '100%' }}>
                <div style={{ justifyContent: 'center', border:'yellow solid 2px', alignItems: 'center', textAlign: 'center', fontSize: '50px', color: 'white', backgroundColor: '#007bff', borderRadius: '10px', padding: '20px', margin: '20px' }}>
                    Вас вітає Семенівська громада
                </div>

                <div style={{  color: 'black', marginLeft: '25px', justifyContent: 'flex-start', display: 'flex', alignItems: 'center' }}>
                    <blockquote style={{ fontSize:'xx-large', width: 'auto',  lineHeight: '1.5', fontStyle: 'italic', margin: '0 auto', padding: '20px', borderLeft: '4px solid #ccc', backgroundColor: '#f9f9f9' }}>
                        <p>Наш поет-земляк писав:</p>
                        <p>Під гожим небом в рідному селі</p>
                        <p>Ідуть хати з минулого в майбутнє.</p>
                        <p>Над ними людські долі многотрудні</p>
                        <p>Летять, неначе в ірій журавлі.</p>
                        <p>Нехай же майбутнє принесе степовій Семенівці процвітання, достаток, а людські долі будуть світлими та щасливими.</p>
                    </blockquote>


                </div>


                {!isFirstButtonHidden && <button className="next-button" onClick={handleNextBlock} disabled={isNextButtonDisabled}>До нових пригод </button>}
            </div>
            <div className='block hidden' style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'auto' }}>
                <div className='info-block'>
              
                    <div style={{  background:'grey', color:'white', maxWidth: 'auto', fontSize:'xx-large', margin: '0 auto' }}>
    <table style={{ border:'blue solid 2px  ', width: 'auto',   borderCollapse: 'collapse' }}>
        <tbody>
            <tr>
                <td style={{ width: '40%', borderBottom: '1px solid #ccc', padding: '5px' }}>Семенівська сільська громада:</td>
                <td style={{ width: '60%', borderBottom: '1px solid #ccc', padding: '5px' }}>Адмінцентр: Семенівка</td>
            </tr>
            <tr>
                <td style={{ borderBottom: '1px solid #ccc', padding: '2%' }}>Українська назва: Семенівка</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '2%' }}>Населення: 1349 чол.</td>
            </tr>
            <tr>
                <td style={{ borderBottom: '1px solid #ccc', padding: '2%' }}>Країна</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '2%' }}>
                    Україна
                    <img src={imageUA} alt="Прапор України" className="flag-icon" style={{ width: '50px', height: 'auto', marginLeft: '10px' }} />
                </td>
            </tr>
            <tr>
                <td style={{ borderBottom: '1px solid #ccc', padding: '2%' }}>Засноване</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '2%' }}>1921</td>
            </tr>
            <tr>
                <td style={{ borderBottom: '1px solid #ccc', padding: '2%' }}>Населення</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '2%' }}>1349</td>
            </tr>
            <tr>
                <td style={{ padding: '10px' }}>Площа</td>
                <td style={{ padding: '10px' }}>3,214 км²</td>
            </tr>
        </tbody>
    </table>
</div>



                </div>
                {currentBlockIndex === 1 && <button className="next-button" onClick={handleNextBlock} disabled={isNextButtonDisabled}>далі</button>}
            </div>
            <div className='block hidden' style={{  marginTop:'40px', background:'sky-blue', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '40vh' }}>
                <div className='info-block'>
                <div style={{ fontSize:'xx-large',  background:'beige ', color:'black', maxWidth: '80%', margin: '0 auto', border: '1px solid black', borderRadius: '10px', padding: '20px' }}>
    <table style={{ width: '100%', height:'200px', borderCollapse: 'collapse' }}>
        <tbody>
            <tr>
                <td style={{ width: '100%', borderBottom: '1px solid #ccc', padding: '10px' }}>Ви можете надати  свою інформацію тут </td>

            </tr>
    
            <br/>
            <tr>
    <td style={{ display: 'flex', justifyContent: 'center' }}>
        <a href='https://forms.gle/kDHEcz2PvAM2P9PN9' style={{ textDecoration: 'none' }}>
            <div style={{  borderRadius: '50%', padding: '10px', border: '5px solid blue', color:'red', width: 'auto', height: 'auto', textAlign: 'center', lineHeight: '100px', whiteSpace: 'nowrap' }}>
             Надіслати 
            </div>
        </a>
    </td>
</tr>


        </tbody>
    </table>

</div>



                </div>

            </div>
        </div>

    );
}

