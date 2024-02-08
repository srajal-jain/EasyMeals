import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is the best about page</h2>
            {/* <User name = {"Srajal Jain(function)"}/> */}
            <UserClass name = {"Srajal Jain class"} location={"Bhopal class"}/>
        </div>
    );
};

export default About;