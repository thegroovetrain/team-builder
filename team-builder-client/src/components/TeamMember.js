import React, { useState } from 'react';

const TeamMember = props => {

        const [memberData, setMemberData] = useState(props.data);

        return (
            <tr>
                <td>{memberData.name}</td>
                <td>{memberData.role}</td>
                <td>{memberData.email}</td>
            </tr>
        )

}

export default TeamMember;