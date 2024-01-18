import { type ChangeEvent, type FormEvent, type ReactElement, useState } from "react";
import ContactModal from "./ContactModal";

import type { TContactForm } from "@/types";

const defaultCf: TContactForm = {
  name: "",
  email: "",
  message: "",
  contactType: "Mentorship",
};

export default function Form(): ReactElement {
  // State
  const [loading, setLoading] = useState(false as boolean);
  const [contactForm, setContactForm] = useState(defaultCf as TContactForm);

  function handleChange({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { value, name } = target;
    setContactForm((old) => ({ ...old, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
          placeholder="What's your name ?"
          required={true}
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
          placeholder="What's your email ?"
          required={true}
          className="px-6 py-4 font-medium border-none rounded-lg outline-none"
        />
      </div>
      <div className="flex flex-col">
        <span className="mb-4 font-medium">Contact Type : </span>
        <select
          name="contactType"
          value={contactForm.contactType}
          onChange={handleChange}
          required={true}
          className="px-6 py-4 font-medium border-none rounded-lg outline-none appearance-none"
        >
          <option value="Mentorship">Mentorship</option>
          <option value="Bussiess">Bussiess</option>
          <option value="Anime">Anime</option>
          <option value="Freelancing">Freelancing</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="flex flex-col">
        <span className="mb-4 font-medium">Your Message : </span>
        <textarea
          rows={7}
          name="message"
          value={contactForm.message}
          onChange={handleChange}
          required={true}
          placeholder="Your Message goes Here!"
          className="px-6 py-4 font-medium border-none rounded-lg outline-none "
        />
      </div>
      <button className="btn btn-outline btn-primary rounded-2xl" disabled={loading}>
        {loading ? "Sending" : "Send"}
        {loading && <span className="loading loading-dots" />}
      </button>
      <ContactModal isOpen={loading} handleClose={() => setLoading(!loading)} email={contactForm.email} />
    </form>
  );
}
