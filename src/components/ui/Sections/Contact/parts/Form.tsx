import { FormEvent, ReactElement, useRef, useState } from "react";

export default function Form(): ReactElement {
  // State
  const [loading, setLoading] = useState(false as boolean);
  const formRef = useRef(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 mt-12">
      <label className="flex flex-col">
        <span className="mb-4 font-medium ">Your Name : </span>
        <input
          type="text"
          name="name"
          // value={""}
          // onBlur={handleBlur}
          placeholder=" What's your name ? "
          className="px-6 py-4 font-medium border-none rounded-lg outline-none"
        />
      </label>
      <label className="flex flex-col">
        <span className="mb-4 font-medium">Your Name : </span>
        <input
          type="email"
          name="email"
          // value={"form.email"}
          // onBlur={handleBlur}
          placeholder=" What's your email ? "
          className="px-6 py-4 font-medium border-none rounded-lg outline-none"
        />
      </label>
      <label className="flex flex-col">
        <span className="mb-4 font-medium">Your Message : </span>
        <textarea
          rows={7}
          name="message"
          // value={"form.message"}
          // onBlur={handleBlur}
          placeholder=" Your Message goes Here! "
          className="px-6 py-4 font-medium border-none rounded-lg outline-none "
        />
      </label>
      <button
        className={`btn btn-outline btn-primary rounded-2xl ${loading ? " loading " : ""} `}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
