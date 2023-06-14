import { ChangeEvent, FormEvent, ReactElement, useState } from "react";

import type { TContactForm } from "@/types";

const defaultCf: TContactForm = {
  name: "",
  email: "",
  message: "",
};

export default function Form(): ReactElement {
  // State
  const [loading, setLoading] = useState(false as boolean);
  const [contactForm, setContactForm] = useState(defaultCf as TContactForm);

  function handleChange(ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, name } = ev.target;
    setContactForm((old) => ({ ...old, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-12">
      <div className="flex flex-col">
        <span className="mb-4 font-medium ">Your Name : </span>
        <input
          type="text"
          name="name"
          value={contactForm.name}
          onChange={handleChange}
          placeholder=" What's your name ? "
          className="px-6 py-4 font-medium border-none rounded-lg outline-none"
        />
      </div>
      <div className="flex flex-col">
        <span className="mb-4 font-medium">Your Email : </span>
        <input
          type="email"
          name="email"
          value={contactForm.email}
          onChange={handleChange}
          placeholder=" What's your email ? "
          className="px-6 py-4 font-medium border-none rounded-lg outline-none"
        />
      </div>
      <div className="flex flex-col">
        <span className="mb-4 font-medium">Your Message : </span>
        <textarea
          rows={7}
          name="message"
          value={contactForm.message}
          onChange={handleChange}
          placeholder=" Your Message goes Here! "
          className="px-6 py-4 font-medium border-none rounded-lg outline-none "
        />
      </div>
      <button className="btn btn-outline btn-primary rounded-2xl" disabled={loading}>
        {loading ? "Sending" : "Send"}
        {loading && <span className="loading loading-dots" />}
      </button>
    </form>
  );
}
