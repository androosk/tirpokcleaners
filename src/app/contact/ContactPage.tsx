// "use client";
// import { Turnstile } from "@marsidev/react-turnstile";
// import { Montserrat } from "next/font/google";
// import { useState } from "react";

// const montserrat = Montserrat({
//   subsets: ["latin"],
// });

// const ContactPage: React.FC = () => {
//   const [formState, setFormState] = useState("initial");
//   const [formData, setFormData] = useState({
//     name: "",
//     emailAddress: "",
//     mobileNumber: "",
//     message: "",
//   });
//   const [token, setToken] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!token) {
//       setError("Please complete the captcha");
//       return;
//     }

//     const values = e.target as typeof e.target & {
//       name: { value: string };
//       emailAddress: { value: string };
//       mobileNumber: { value: string };
//       message: { value: string };
//     };

//     try {
//       const request = await fetch("/api/contact", {
//         method: "POST",
//         body: JSON.stringify({
//           name: values.name.value,
//           emailAddress: values.emailAddress.value,
//           mobileNumber: values.mobileNumber.value,
//           message: values.message.value,
//           token,
//         }),
//       });
//       const response = await request.json();

//       if (response.error) {
//         setError(response.error);
//       } else {
//         setFormState("submitted");
//       }
//     } catch (error) {
//       console.error("error", error);
//     }
//   };

//   const inputClass = `${montserrat.className} w-full py-2 px-4 border bg-zinc-200 border-[#1d6076] rounded`;

//   return (
//     <div
//       className={`${montserrat.className} text-[#1d6076] py-20 container md:w-10/12 mb-28 mx-auto rounded-lg bg-[#faf9f8]`}
//     >
//       <div className="w-full md:max-w-xl mx-auto">
//         {formState === "submitted" ? (
//           <div className="pb-24">
//             <h2 className="text-center font-bold text-[#1d6076] tracking-wider lg:text-3xl">
//               Thank you for contacting us. We&apos;ll be in touch soon.
//             </h2>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex items-center gap-4">
//               <label
//                 className="text-lg md:text-xl tracking-wider w-44"
//                 htmlFor="name"
//               >
//                 Your name<span className="text-red-600">*</span>:
//               </label>
//               <input
//                 className={inputClass}
//                 id="name"
//                 name="name"
//                 onChange={handleChange}
//                 required
//                 type="text"
//                 value={formData.name}
//               />
//             </div>
//             <div className="flex items-center gap-4">
//               <label
//                 className="text-lg md:text-xl tracking-wider w-44"
//                 htmlFor="emailAddress"
//               >
//                 Email address<span className="text-red-600">*</span>:
//               </label>
//               <input
//                 className={inputClass}
//                 id="emailAddress"
//                 name="emailAddress"
//                 onChange={handleChange}
//                 required
//                 type="email"
//                 value={formData.emailAddress}
//               />
//             </div>
//             <div className="flex items-center gap-4">
//               <label
//                 className="text-lg md:text-xl tracking-wider w-44"
//                 htmlFor="mobileNumber"
//               >
//                 Mobile number:
//               </label>
//               <input
//                 className={inputClass}
//                 id="mobileNumber"
//                 name="mobileNumber"
//                 onChange={handleChange}
//                 type="text"
//                 value={formData.mobileNumber}
//                 required={false}
//               />
//             </div>
//             <div className="flex items-center gap-4">
//               <label
//                 className="text-lg md:text-xl tracking-wider w-44"
//                 htmlFor="message"
//               >
//                 Message<span className="text-red-600">*</span>:
//               </label>
//               <textarea
//                 className={inputClass}
//                 id="message"
//                 name="message"
//                 onChange={handleChange}
//                 required
//                 value={formData.message}
//               ></textarea>
//             </div>
//             <p className="text-sm text-red-600">* Required fields</p>
//             {error && <p className="text-red-500 text-right">{error}</p>}
//             <div className="grid sm:flex gap-8 justify-center sm:justify-between flex-wrap items-start py-8">
//               <div className="bg-black">
//                 <Turnstile
//                   siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
//                   onSuccess={setToken}
//                 />
//               </div>
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="px-4 py-2 border-[#1d6076] border-solid border-2 bg-zinc-700 text-gray-50 rounded text-xl"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
"use client";
import { useState } from "react";
import { Montserrat } from "next/font/google";

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
    website: "",
    company: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (formData.website || formData.company) {
      setError("Spam detected. Please try again.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New Contact Form Submission - Tirpok Cleaners",
          from_name: "Tirpok Cleaners Contact Form",
          name: formData.name,
          email: formData.emailAddress,
          mobile: formData.mobileNumber || "Not provided",
          message: formData.message,
          // website: formData.website,
          // company: formData.company,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormState("submitted");
        setFormData({
          name: "",
          emailAddress: "",
          mobileNumber: "",
          message: "",
          website: "",
          company: "",
        });
      } else {
        console.error("Form submission error:", data);
        setError(data.message || "Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `${montserrat.className} w-full py-2 px-4 border bg-zinc-200 border-[#1d6076] rounded`;

  return (
    <div
      className={`${montserrat.className} text-[#1d6076] py-20 container md:w-10/12 mb-28 mx-auto rounded-lg bg-[#faf9f8]`}
    >
      <div className="w-full md:max-w-xl mx-auto">
        {formState === "submitted" ? (
          <div className="pb-24">
            <h2 className="text-center font-bold text-[#1d6076] tracking-wider lg:text-3xl">
              Thank you for contacting us. We&apos;ll be in touch soon.
            </h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot fields - hidden from users but visible to bots */}
            <div className="hidden">
              <label htmlFor="website">Website (leave blank)</label>
              <input
                id="website"
                name="website"
                type="text"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div style={{ display: "none" }}>
              <label htmlFor="company">Company (leave blank)</label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Regular form fields */}
            <div className="flex items-center gap-4">
              <label
                className="text-lg md:text-xl tracking-wider w-44"
                htmlFor="name"
              >
                Your name<span className="text-red-600">*</span>:
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
                Email address<span className="text-red-600">*</span>:
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
                type="text"
                value={formData.mobileNumber}
                required={false}
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                className="text-lg md:text-xl tracking-wider w-44"
                htmlFor="message"
              >
                Message<span className="text-red-600">*</span>:
              </label>
              <textarea
                className={inputClass}
                id="message"
                name="message"
                onChange={handleChange}
                required
                value={formData.message}
                rows={5}
              ></textarea>
            </div>
            <p className="text-sm text-red-600 text-end">* Required fields</p>
            {error && <p className="text-red-500 text-right">{error}</p>}
            <div className="text-center py-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 border-[#1d6076] border-solid border-2 bg-zinc-700 text-gray-50 rounded text-xl ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
