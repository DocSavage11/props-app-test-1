import './ContactStyles.css'



export default function Contact(props) {
    return(
        <div className="Contact-Card">
            <img id='ProfilePicture' src={props.image} alt="" />

            <p id="ContactName">{props.name}</p>

            <div className="Contact-Information">
                <p id="PhoneNumber">{props.phone}</p>

                <p id="Email">{props.email}</p>
            </div>
        </div>
    )
}
