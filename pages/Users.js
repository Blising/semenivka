import React from 'react';
import PeopleList from '../components/Peoples/index';

const Users = () => {
  return (

    <>
    <div style={{justifyContent:'center', textAlign:'center', fontSize:'20px' }}><br/>
      <h2 style={{textAlign:'center', justifyContent:'center', fontSize:'15sp'}}>Семенівська сільська рада</h2>
      <p >
        На славній Каховщині, за 25 км на південь від районного центру та 32 км<br/> від залізничної станції Каховка, серед безкрайних ланів,
        залитим гарячим південним сонцем, щедро политих дніпровською водою і оспі<br/>ваних поетом М.І. Братаном, розташоване с. Семенівка.
        Станом на 01.01.2012 р. його населення складає 1115 чоловік, кількість дво<br/>рів – 390.
      </p><h1 style={{background:"blue", width:"100%", height:"2px"}}></h1>
   
      <a href='https://www.wikiwand.com/uk/%D0%A1%D0%B5%D0%BC%D0%B5%D0%BD%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D1%81%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B0_%D1%80%D0%B0%D0%B4%D0%B0_(%D0%9A%D0%B0%D1%85%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD)#%D0%94%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%B8'><button style={{ cursor:'pointer', background:"brown", color:'white', width:"250px", fontSize:"20px", height:"60px",border:"2px solid grey"}}>Депутати</button></a>
      <h1 style={{background:"blue", width:"100%", height:"2px"}}></h1>
      <h2>В трудовому колективі зросла плеяда передовиків виробництва, працю яких відзначила держава.</h2><br/>
      <h1 style={{background:"blue", width:"100%", height:"2px"}}></h1>

      <PeopleList />
    </div>
    

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

export default Users;
