import { ChangeEvent, FormEvent, ReactElement, useRef, useState } from "react";
import { MailForm } from "@/types/ComponentProps";

export default function ContactForm(): ReactElement {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" } as MailForm);
  const [loading, setLoading] = useState(false as boolean);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {}

  // function handleBlur({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {}

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 mt-12">
      <label className="flex flex-col">
        <span className="mb-4 font-medium text-white">Your Name : </span>
        <input
          type="text"
          name="name"
          // value={""}
          // onBlur={handleBlur}
          placeholder=" What's your name ? "
          className="px-6 py-4 font-medium text-white rounded-lg border-none outline-none bg-tertiary placeholder:text-secondary"
        />
      </label>
      <label className="flex flex-col">
        <span className="mb-4 font-medium text-white">Your Name : </span>
        <input
          type="email"
          name="email"
          // value={"form.email"}
          // onBlur={handleBlur}
          placeholder=" What's your email ? "
          className="px-6 py-4 font-medium text-white rounded-lg border-none outline-none bg-tertiary placeholder:text-secondary"
        />
      </label>
      <label className="flex flex-col">
        <span className="mb-4 font-medium text-white">Your Message : </span>
        <textarea
          rows={7}
          name="message"
          // value={"form.message"}
          // onBlur={handleBlur}
          placeholder=" Your Message goes Here! "
          className="px-6 py-4 font-medium text-white rounded-lg border-none outline-none bg-tertiary placeholder:text-secondary"
        />
      </label>
      <button
        type="submit"
        className="px-8 py-3 font-bold text-white rounded-xl shadow-md outline-none bg-tertiary w-fit shadow-primary"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}

