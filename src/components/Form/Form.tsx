import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form className="w-[100%] forms flex flex-col lg:grid lg:grid-cols-2">
      <section>
        <label htmlFor="first_name">First name</label>
        <input
          type="text"
          name="firstname"
          id="first_name"
          placeholder="firstname"
        />
      </section>
      <section>
        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          name="lastname"
          id="last_name"
          placeholder="lastname"
        />
      </section>
      <section>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com..."
        />
      </section>
      <section>
        <label htmlFor="phone_no">Phone number</label>
        <input
          type="text"
          name="phone no"
          id="phone_no"
          placeholder="+234 81..."
        />
      </section>
      <section className="text">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows={3}
          placeholder="message..."
        ></textarea>
      </section>
      <section className="submit dark:bg-[#FBFBFB] dark:text-[#263138] dark:hover:bg-[#263138] dark:hover:border-2 dark:hover:border-solid dark:hover:border-[#FBFBFB] dark:hover:text-[#FBFBFB]">
        <button type="submit" className="flex items-center gap-4">
          Submit
        </button>
      </section>
    </form>
  );
};

export default Form;
