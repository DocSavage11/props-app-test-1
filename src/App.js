import './App.css';
import Contact from './Components/Contact'
import team1 from "./Assests/Images/team1.jpg"
import team2 from "./Assests/Images/team2.jpg"
import team3 from "./Assests/Images/team3.jpg"
import team4 from "./Assests/Images/team4.jpg"

function App() {
  return (
    <div className="contacts">
      <Contact 
          image={team1}
          name="Lockheed Martin"
          phone="1 (309) 555-1234"
          email="lockheedmartin@gmail.meow"
      />
      {/* <Contact 
          img="./images/fluffykins.png"
          name="Vivian Taylor"
          phone="1 (212) 555-2345"
          email="viviantaylor@gmail.com"
      />
      <Contact 
          img="./images/felix.png"
          name="Daniel Rook"
          phone="1 (212) 555-4567"
          email="danielrook@gmail.com"
      />
      <Contact 
          img="./images/pumpkin.png"
          name="John Lark"
          phone="1 (455) 221 6590"
          email="johnlark@gmail.com"
      /> */}
  </div>
  );
}

export default App;
