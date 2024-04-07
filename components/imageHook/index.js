import React, { useState, useEffect } from 'react';
import imageKArina from "../../img/karina.png";
import Footer from '../Footer';
const CenteredImageSlider = () => {
    const [photos, setPhotos] = useState([]);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    useEffect(() => {
        // Список URL-адрес зображень
        const photosList = [

            'https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/50651997_381461002411920_8035581994874175488_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vXa2Hgv2V6EAX-YlQe7&_nc_ht=scontent-iev1-1.xx&oh=00_AfCHfs3JZ3ypHbQSMXWE496SZfxpPH3KCb_d_r5x6rbH8A&oe=66287AFB',
            'https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/50539572_381460562411964_2302775595110498304_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sQrJFJXQxUsAX-6sEOW&_nc_ht=scontent-iev1-1.xx&oh=00_AfCOy8VX88EbTiwnoVCXjbNDsxHR-x5XmYtomqkOY5PlIg&oe=66287006',
            'https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/51148171_381460525745301_2055571515369324544_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kFm01QpF44sAX90Hoht&_nc_ht=scontent-iev1-1.xx&oh=00_AfCTlF64BBSwlfLICdWBzLSv38WrzMaS11zhz6GD3cS9lQ&oe=662892B9',
            'https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/50516743_381460905745263_8454049626415169536_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0OmpGCq-zsQAX9GbWsi&_nc_ht=scontent-iev1-1.xx&oh=00_AfAd1X49PR0V0b7rEsuWL-0Vkhcrbz5OXA5gvaszpekjSQ&oe=66288D35',
            'https://static.wixstatic.com/media/82e3fc_bb46dc8a3fc24e959cc34f0795898c4a~mv2.jpg/v1/fill/w_1040,h_677,al_c,q_85,enc_auto/82e3fc_bb46dc8a3fc24e959cc34f0795898c4a~mv2.jpg',
            'https://static.wixstatic.com/media/82e3fc_bb46dc8a3fc24e959cc34f0795898c4a~mv2.jpg/v1/fill/w_1040,h_677,al_c,q_85,enc_auto/82e3fc_bb46dc8a3fc24e959cc34f0795898c4a~mv2.jpg',
            'https://static.wixstatic.com/media/82e3fc_7adca1129436449baf260d73510a9d45~mv2.jpg/v1/fill/w_1128,h_734,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82e3fc_7adca1129436449baf260d73510a9d45~mv2.jpg',
            'https://static.wixstatic.com/media/82e3fc_b308323e91144880814d72d8a63ce71b~mv2.jpg/v1/fill/w_1128,h_734,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82e3fc_b308323e91144880814d72d8a63ce71b~mv2.jpg',
            'https://static.wixstatic.com/media/82e3fc_b1b34c02cb264771af9d4d896fa7d539~mv2.jpg/v1/fill/w_1040,h_677,al_c,q_85,enc_auto/82e3fc_b1b34c02cb264771af9d4d896fa7d539~mv2.jpg',
        ];
        setPhotos(photosList);

        // Змінюємо фотографії кожні 2 секунди
        const interval = setInterval(() => {
            setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photosList.length);
        }, 1000);

        // Очищаємо інтервал перед розміщенням нового компонента
        return () => clearInterval(interval);
    }, []); // Пустий масив означає, що useEffect викликається лише після першого рендерингу

    const prevImage = () => {
        setCurrentPhotoIndex(prevIndex => (prevIndex - 1 + photos.length) % photos.length);
    };

    const handleVideoClick = (videoUrl) => {
        // Ваша логіка для переходу на нову сторінку або відкриття відео
        window.open(videoUrl, '_blank'); // Відкриття в новій вкладці
        // або
        // history.push(videoUrl); // Перехід на нову сторінку
    };

    const nextImage = () => {
        setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
    };
    return (

        <>

            <div style={{ background: 'white' }}>

                <div style={{ display: 'flex', justifyContent: 'center' }}>     <button onClick={prevImage} style={{ background: 'grey', width: '50px', height: '50px', marginTop: '150px', cursor: 'pointer', color: 'white', borderRadius: "999px" }}>попередня</button>
                    <img src={photos[currentPhotoIndex]} style={{ width: '500px', height: '400px' }} alt={`Photo ${currentPhotoIndex + 1}`} />      <button onClick={nextImage} style={{ cursor: 'pointer', background: 'grey', width: '50px', color: 'white', borderRadius: "999px", height: '50px', marginTop: '150px' }}>наступна</button>

                    <div />


                    <div style={{ width: '400px', color: 'black', height: '330px', background: 'white' }}>
                        <h2 style={{ width: '300px', marginLeft: "25px", color: "white", marginRight: "30px", height: "120px", background: "#1E438F" }}>
                            <br />ВІТАЄМО У СЕМЕНІВСЬКОМУ ОЗЗСО</h2>
                        <p style={{ justifyContent:'flex-start', marginLeft: '100px', fontSize:'xx-large' }}> З 1927 року <br/>
                        і по сьогодні<br/> даємо
                            високоякісну освіту</p>
                        <br />

                   
                    </div>




                </div>


            </div>
            <br />

            <div style={{ background: "white", color: 'blue', height: '200px', width: '100%' }}>
                <h3 style={{ marginLeft: '-800px', fontSize: '15px' }} >Основні новини </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <div style={{ marginLeft: '20px', border: "solid 2px blue" }}>
                        <a href='https://semnvk.wixsite.com/semnvk/post/21-%D0%BB%D1%8E%D1%82%D0%BE%D0%B3%D0%BE-%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B8%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-%D1%80%D1%96%D0%B4%D0%BD%D0%BE%D1%97-%D0%BC%D0%BE%D0%B2%D0%B8'>

                                <img style={{ width: '150px', height: "100px" }} src='https://static.wixstatic.com/media/82e3fc_217669616aa3420f9ef2073ec5926416f000.jpg/v1/fill/w_532,h_400,fp_0.50_0.50,q_90,enc_auto/82e3fc_217669616aa3420f9ef2073ec5926416f000.jpg' />
                       
                        </a>
                        <p>21 лютого - Міжнародний день рідної мови</p>
                    </div>

                    <div style={{ border: "solid 2px blue" }}>




                        <a href='https://semnvk.wixsite.com/semnvk/post/21-%D0%BB%D1%8E%D1%82%D0%BE%D0%B3%D0%BE-2022-%D1%80-%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B8%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-%D1%80%D1%96%D0%B4%D0%BD%D0%BE%D1%97-%D0%BC%D0%BE%D0%B2%D0%B8-%D1%83-%D1%81%D0%B5%D0%BC%D0%B5%D0%BD%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%BC%D1%83-%D0%BE%D0%B7%D0%B7%D1%81%D0%BE'>



                            <button onClick={() => handleVideoClick('https://semnvk.wixsite.com/semnvk/post/21-%D0%BB%D1%8E%D1%82%D0%BE%D0%B3%D0%BE-2022-%D1%80-%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B8%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-%D1%80%D1%96%D0%B4%D0%BD%D0%BE%D1%97-%D0%BC%D0%BE%D0%B2%D0%B8-%D1%83-%D1%81%D0%B5%D0%BC%D0%B5%D0%BD%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%BC%D1%83-%D0%BE%D0%B7%D0%B7%D1%81%D0%BE')}></button>
                            <img style={{ width: '150px', height: "100px" }} src='https://static.wixstatic.com/media/82e3fc_66a15f0dfa284a37adb78c65953a2695~mv2.jpg/v1/fill/w_266,h_150,fp_0.50_0.50,q_90,enc_auto/82e3fc_66a15f0dfa284a37adb78c65953a2695~mv2.jpg' />
                        </a>
                        <p>21 лютого 2022- Міжнародний день рідної мови </p>

                    </div>

                    <div style={{ border: "solid 2px blue ", marginRight: '20px' }}>
                        <a href='https://semnvk.wixsite.com/semnvk/post/16-%D0%BB%D1%8E%D1%82%D0%BE%D0%B3%D0%BE-%D0%B4%D0%B5%D0%BD%D1%8C-%D1%94%D0%B4%D0%BD%D0%B0%D0%BD%D0%BD%D1%8F'>

                      
                                <img style={{ width: '150px', height: "100px" }} src='https://static.wixstatic.com/media/82e3fc_bd1e3a70f7c74608a6534676f59c41cd~mv2.jpg/v1/fill/w_265,h_150,fp_0.50_0.50,q_90,enc_auto/82e3fc_bd1e3a70f7c74608a6534676f59c41cd~mv2.jpg' />
                        </a>
                        <p>16 лютого — День єднання</p>
                    </div>
                </div>

            </div>

            <h1 style={{ background: 'grey', width: '100%', height: '2px' }}> </h1>

            <div style={{ background: "white", color: 'blue', height: '200px', width: '100%' }}>
                <h3 style={{ marginLeft: '-800px', fontSize: '15px' }}>Наші відео </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <div style={{ width: '30%', borderLeft: "solid 2px blue", borderRight: "solid 2px blue" }}>
                        <a href='https://youtu.be/buC0UK3KQ_I?list=TLGGr6oexdEt7vEyNDAzMjAyNA'>

                            <img style={{ width: '150px', height: "100px" }} src={imageKArina} />

                        </a>
                  
                    </div>

                    <div style={{ width: '30%' }}>
                        <p style={{ fontSize: '20px', textAlign: 'center', color: '#838181', width: '90%', margin: 'auto' }}>КОНТАКТНА ІНФОРМАЦІЯ
                            Адреса: 74843, Херсонська область, Каховський район, с. Семенівка, вул. Шкільна, 42, Семенівський ОЗЗСО.<br />
                            Факс, телефон: (05536)-96-1-52
                            e-mail: sem_nvk@ukr.net
                        </p>
                    </div>

                    <div style={{ width: '30%', color: '#20387C', borderLeft: "solid 2px blue", borderRight: "solid 2px blue" }}>
                        <p style={{ fontSize: 'max', textAlign: 'center', width: '90%', margin: 'auto' }}><h1 style={{ color: '#7F170D' }}>Увага!</h1><br />
                            Педагогічним працівникам обов'язково пройти онлайн-модуль "Безпечна і дружня до дитини школа" (18 год) <br />за посиланням: http://scfs.multycourse.com.ua/ 13.01.2021 р.
                          
                            Продовжується набір учнів до 1 класу Семенівського ОЗЗСО до 01 вересня 2022 р.
                            
                        </p>
                    </div>
                </div>
            </div>

            <Footer />

        </>


    );
};

export default CenteredImageSlider;
