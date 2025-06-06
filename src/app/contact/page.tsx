import { Montserrat } from "next/font/google";
import { ObfuscatedEmail } from "../../components/obfuscated-email";
import ContactPage from "./ContactPage";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Contact Us - Tirpok Cleaners",
  description: "Get in touch with us at Tirpok Cleaners",
};

export default function Page() {
  return (
    <div>
      <div className="px-4">
        <section className="w-full py-5 md:py-8 mt-20 flex flex-col justify-center">
          <h1 className="text-center mb-8 text-4xl xl:text-5xl tracking-wide">
            Contact us
          </h1>
          <p
            className={`${montserrat.className} uppercase text-xl text-center font-extralight w-full mx-auto pb-5`}
          >
            we&apos;ll get back to you as soon as we can
          </p>
          <ObfuscatedEmail />
        </section>
        <ContactPage />
      </div>
    </div>
  );
}
