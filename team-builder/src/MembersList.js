import React from "react";

const Members = props => {
    return (
        <div className="member-list">
            {props.members.map(member => (
                <div className="member" key={member.id}>
                <p>{member.name}</p>
                <p>{member.email}</p>
                <p>{member.role}</p>
                </div>

                // maps thru member data to display on page
            ))}
        </div>
    )
}

export default Members;
