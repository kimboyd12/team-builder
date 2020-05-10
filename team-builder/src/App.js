import React, { useState } from 'react';
import './App.css';
import MemberForm from "./Form";
import Members from "./MembersList";

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Kimberly Boyd",
      email: "kimberlyboyd2@gmail.com",
      role: "Front End Developer"
    }
  ]);

  const addMember = newMember => {
    setMembers([...members, newMember]);
  };
  // makes new member an object, spreader adds old members to new array

  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm addMember={addMember} />
      {/* passing addMember function down as a prop */}
      <Members members={members} />
    </div>
  );
}

export default App;

