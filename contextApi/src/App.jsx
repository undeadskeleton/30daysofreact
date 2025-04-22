import "./App.css";
import UserContextProvider from "./assets/context/UserContextProvider";
import Login from "./assets/component/Login";
import Profile from "./assets/component/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React With Undead Skeleton</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
