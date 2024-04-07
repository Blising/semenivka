import React from 'react';
import "../ style/Home.css";
import imageUA from "../img/uploadchoise.png";

const HomePage = () => {
    return (
        <>
            <div className="home-content">
                <table>
                    <tbody>

                        <tr>
                            <td>Семенівська сільська громада</td>
                            <td>Адмін. центр: Семенівка</td>
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

                {/* Додатковий контент таблиці */}

                <table>
                    <tbody>
                        <tr>
                            <td>Географічні дані </td>
                            <td>46°36′29″ пн. ш. 33°35′45″ сх. д.</td>
                        </tr>
                        <tr>
                            <td>Середня висота над рівнем моря</td>
                            <td>40 м</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default HomePage;
