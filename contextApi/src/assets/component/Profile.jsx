import { userContexct } from "react";
import UserContextProvider from "../context/UserContextProvider";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Pls login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
