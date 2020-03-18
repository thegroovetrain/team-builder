import React, { useState } from 'react';

import Form from './components/Form';
import TeamMember from './components/TeamMember';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    {
      id:1,
      name: 'poop',
      role: 'poopsmith',
      email: 'poop@poop.pee',
    },
    {
      id: 2,
      name: 'lord fancypants',
      role: 'dancer',
      email: 'lllrdfnc.pants.ant',
    }
  ]);

  const addTeamMemberHandler = newTeamMember => {
    console.log("adding team member", newTeamMember);
    setTeamMembers([...teamMembers, newTeamMember]);
  }


  return (
    <div className="App">
      <Form addTeamMember={addTeamMemberHandler} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map(member => {
            return <TeamMember data={member} />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
