import './ContactStyles.css'



export default function Contact(props) {
    return(
        <div className="Contact-Card">
            <img id='ProfilePicture' src={props.image} alt="" />

            <div className="Contact-Information">
                <p id="ContactName">{props.name}</p>

                <p id="PhoneNumber">{props.phone}</p>

                <p id="Email">{props.email}</p>
            </div>

            <div className="About-Contact">
                <h3 id='AboutTitle'>About Contact</h3>

                <p id="about">{props.about}</p>
            </div>

            <div className="Social-Icon-Bar">
                <img id='SocialIcon' src={props.InstagramIcon} alt="" />
                <img id='SocialIcon' src={props.LinkedinIcon} alt="" />
                <img id='SocialIcon' src={props.TwitterIcon} alt="" />
            </div>
        </div>
    )
}
