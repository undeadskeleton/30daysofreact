import "./objectPassing.css";

import { useState, useEffect } from "react";

export default function User() {
  //   const [user, setUser] = useState({ name: "", city: "", age: 50 });
  //   console.log(user);

  //   const handleChange = (e) => {
  //     setUser({
  //       ...user,
  //       name: e.target.value,
  //     });
  //   };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    zip: "",
  });

  console.log(form);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="flex items-center justify-center pt-7 flex-col gap-7">
      <input
        type="text"
        name="firstName"
        placeholder="Your first name"
        className="outline-4 text-center"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Your last name"
        className="outline-4 text-center"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Your email "
        className="outline-4 text-center"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="Your password "
        className="outline-4 text-center"
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="Your address "
        className="outline-4 text-center"
        onChange={handleChange}
      />
      <input
        type="text"
        name="zip"
        placeholder="Your ZIP code"
        className="outline-4 text-center"
        onChange={handleChange}
      />
    </form>
  );
}
