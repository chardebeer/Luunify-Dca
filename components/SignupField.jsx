import React from "react";

function SignupField(props) {
  return (
    <input
      placeholder={props.placeholder}
      className={props.className}
      type={props.type}
      value={props.value}
      name={props.name}
    />
  );
}

export default SignupField;
