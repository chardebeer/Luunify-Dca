import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const initialDetails = {
  firstName: "",
  lastName: "",
  apiKey: "",
  apiSecret: "",
};

export default function Component() {
  const { data: session } = useSession();
  const [details, setDetails] = useState(initialDetails);

  function onChange(target) {
    setDetails((prev) => ({ ...prev, [target.name]: target.value }));
  }

  function renderField(label, name) {
    return (
      <div>
        <label>
          {label}
          <input
            type="text"
            name={name}
            value={details[name]}
            onChange={(e) => onChange(e.target)}
          />
        </label>
      </div>
    );
  }

  function saveDetails() {
    fetch("api/users", {
      method: "PUT",
      body: JSON.stringify({ ...details, email: session.user.email }),
    })
      .then((res) => res.json())
      .then(console.log);

    setDetails(initialDetails);
  }

  if (session) {
    return (
      <>
        <div>
          {renderField("First Name", "firstName")}
          {renderField("Last Name", "lastName")}
          {renderField("API Key", "apiKey")}
          {renderField("API Secret", "apiSecret")}
          <button onClick={saveDetails}>Save</button>
        </div>
        <hr />
        <br /> Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      {/* <button onClick={() => signUp()}>Sign up</button> */}
    </>
  );
}
