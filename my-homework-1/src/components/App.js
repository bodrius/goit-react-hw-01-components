import React from "react";
import Profile from "./profile/Profile";
import user from "../user.json";


const App = () => {
  return <Profile user={user} />;
};


export default App;

