import React from "react";

import React from "react";

function About(props) {
  const { bio } = props;

  return (
    <div id="about">
      {bio && <p>{bio}</p>}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

function Links(props) {
  const { github, linkedin } = props;

  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default About;
