import User from "./user";
import UserClass from "./UserClass";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const AboutUs = () => {
  const { LoggedInUser } = useContext(UserContext);
  return (
    <>
      <div>
        <h1>About Us</h1>
        <p>We are a team of passionate developers.</p>
      </div>

      <UserClass name={LoggedInUser}/>
    </>
  );
};
export default AboutUs;
