"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState("initial");
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    mobileNumber: "",
    message: "",
  });
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setError("Please complete the captcha");
      return;
    }

    const values = e.target as typeof e.target & {
      name: { value: string };
      emailAddress: { value: string };
      mobileNumber: { value: string };
      message: { value: string };
    };

    try {
      const request = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: values.name.value,
          emailAddress: values.emailAddress.value,
          mobileNumber: values.mobileNumber.value,
          message: values.message.value,
          token,
        }),
      });
      const response = await request.json();

      if (response.error) {
        setError(response.error);
      } else {
        setFormState("submitted");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const inputClass = `${montserrat.className} w-full py-2 px-4 border bg-zinc-700 border-orange-600 rounded`;

  return (
    <div
      className={`${montserrat.className} text-[#1d6076] py-20 container w-10/12 mb-28 mx-auto rounded-lg p-4 bg-[#faf9f8]`}
    >
      <div className="w-full md:max-w-xl mx-auto">
        {formState === "submitted" ? (
          <div className="pb-24">
            <h2 className="text-center font-bold text-[#1d6076] tracking-wider lg:text-3xl">
              Thank you for contacting us. We&apos;ll be in touch soon.
            </h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pb-12">
            <div className="flex items-center gap-4">
              <label
                className="text-lg md:text-xl tracking-wider w-44"
                htmlFor="name"
              >
                Full name:
              </label>
              <input
                className={inputClass}
                id="name"
                name="name"
                onChange={handleChange}
                required
                type="text"
                value={formData.name}
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                className="text-lg md:text-xl tracking-wider w-44"
                htmlFor="emailAddress"
              >
                Email address:
              </label>
              <input
                className={inputClass}
                id="emailAddress"
                name="emailAddress"
                onChange={handleChange}
                required
                type="email"
                value={formData.emailAddress}
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                className="text-lg md:text-xl tracking-wider w-44"
                htmlFor="mobileNumber"
              >
                Mobile number:
              </label>
              <input
                className={inputClass}
                id="mobileNumber"
                name="mobileNumber"
                onChange={handleChange}
                required
                type="text"
                value={formData.mobileNumber}
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                className="text-lg md:text-xl tracking-wider w-44"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                className={inputClass}
                id="message"
                name="message"
                onChange={handleChange}
                required
                value={formData.message}
              ></textarea>
            </div>
            {error && <p className="text-red-500 text-right">{error}</p>}
            <div className="grid sm:flex gap-8 justify-center sm:justify-between flex-wrap items-start py-8">
              <div className="bg-black">
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                  onSuccess={setToken}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-4 py-2 border-orange-600 border-solid border-2 bg-zinc-700 text-gray-50 rounded text-xl"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
