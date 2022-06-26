import './App.css';
import Contact from './Components/Contact'

// Contact Profile Imagies Start
import team1 from "./Assests/Images/team1.jpg"
import team2 from "./Assests/Images/team2.jpg"
import team3 from "./Assests/Images/team3.jpg"
import team4 from "./Assests/Images/team4.jpg"
// Contact Profile Imagies End

// Social Bar Icons Start 
import InstagramIcon from './Assests/Icons/InstagramIcon.png'
import LinkedinIcon from './Assests/Icons/LinkedinIcon.png'
import TwitterIcon from './Assests/Icons/TwitterIcon.png'
// Social Bar Icons End
function App() {
  return (
    <div className="contacts">
      <Contact 
          image={team1}
          name="Lockheed Martin"
          phone="1 (309) 555-1234"
          email="lockheedmartin@gmail.meow"
          about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore cum nulla placeat quos necessitatibus facere quaerat, id exercitationem alias accusantium error similique fugiat unde architecto deleniti ab iste mollitia tempore."

          InstagramIcon={InstagramIcon}
          LinkedinIcon={LinkedinIcon}
          TwitterIcon={TwitterIcon}

      />
      <Contact 
          image={team2}
          name="Vivian Taylor"
          phone="1 (212) 555-2345"
          email="viviantaylor@gmail.com"
          about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore cum nulla placeat quos necessitatibus facere quaerat, id exercitationem alias accusantium error similique fugiat unde architecto deleniti ab iste mollitia tempore."
          
          InstagramIcon={InstagramIcon}
          LinkedinIcon={LinkedinIcon}
          TwitterIcon={TwitterIcon}
      />
      <Contact 
          image={team3}
          name="Daniel Rook"
          phone="1 (212) 555-4567"
          email="danielrook@gmail.com"
          about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore cum nulla placeat quos necessitatibus facere quaerat, id exercitationem alias accusantium error similique fugiat unde architecto deleniti ab iste mollitia tempore."
          
          InstagramIcon={InstagramIcon}
          LinkedinIcon={LinkedinIcon}
          TwitterIcon={TwitterIcon}
      />
      <Contact 
          image={team4}
          name="Montana" 
          phone="1 (455) 221 6590"
          email="johnlark@gmail.com"
          about="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore cum nulla placeat quos necessitatibus facere quaerat, id exercitationem alias accusantium error similique fugiat unde architecto deleniti ab iste mollitia tempore."
          
          InstagramIcon={InstagramIcon}
          LinkedinIcon={LinkedinIcon}
          TwitterIcon={TwitterIcon}
      />
  </div>
  );
}

export default App;
