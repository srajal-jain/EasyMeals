import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Class Component</h1>
            {/* <User name = {"Srajal Jain(function)"}/> */}
            <div>
                Logged In User:
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
        </div>
    );
};

export default About;