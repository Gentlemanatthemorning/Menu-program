import React from "react";

const Profile = props => (
  <div>
    <h2>Witaj na profilu</h2>
    <p>{props.match.params.name}</p>
  </div>
);

export default Profile;
