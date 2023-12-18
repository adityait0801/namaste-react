import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
        <h1>About Us</h1>
            <div>
                <h3>We have started this app on Dec-2023 for online food delivery for our customers.</h3>
                <User/>
                <UserClass name={"Chintu"} location={"Rewa"}/>
            </div>
        </div>
    );
};

export default About;