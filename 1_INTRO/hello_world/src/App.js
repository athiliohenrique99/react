import './App.css';
import FirstComponents from './components/FirstComponents';
import MyComponents from './components/MyComponents';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';

// img
import RaidenEi from './assets/w5e4uqjq69j81.png'

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import { ConditionalRender } from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CardDetails from './components/CardDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExeculteFunction from './components/ExeculteFunction';
import Title from './components/Title';
import MyForm from './components/MyForm';


function App() {
  // const name = "Athilio";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0 },
    { id: 2, brand: "BMW", color: "Preto", newCar: false, km: 34000 },
    { id: 3, brand: "Audi", color: "Verde", newCar: false, km: 1000 },
  ];

  const redTitle = true;

  function showMassage() {
    console.log("Evento do component Pai!");
  }

  return (
    <div className="App">

      <h1>Hello world</h1>
      <h2>emmet funcionou</h2>
      <FirstComponents />
      <TemplateExpressions />
      <MyComponents />
      <Events />

      {/* imagen em public */}
      <div>
        <img src="/Genshin-Impact-Navia.jpg" alt="Navia" srcset="" />
      </div>

      {/* imagen em assets */}
      <div>
        <img src={RaidenEi} alt="Raiden Ei" srcset="" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* Props */}
      <ShowUserName name={userName} />

      {/* destructing */}
      <CardDetails brand="VW" km={69000} color="Black" newCar={false} />

      {/* Reaproveitando */}
      <CardDetails brand="Ford" color="Vermelha" Km={0} newCar={true} />
      <CardDetails brand="Fiat" color="ranco" Km={45000} newCar={false} />

      {/* loop em array de objeto */}
      {cars.map((car) => (
        <CardDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      {/* fragments */}
      <Fragment propFragment="Teste" />

      {/* chidren */}
      <Container myValue="testing">
        <p>E este é o conteudo</p>
      </Container>
      <Container myValue="testing">
        <h5>Testando o containeer</h5>
      </Container>
      <ExeculteFunction myFunction={showMassage} />
      <h1>React com CSS</h1>

      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado inline
      </p>

      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter clases dinamica.</h2>

      <Title/>

      <h2>Form</h2>
      <MyForm user={{name: "Athilio", email: "athilio@gmail.com", bio: "Sou um desenvolvedor", role: "admin"}}/>
    </div>
  );
}

export default App;
