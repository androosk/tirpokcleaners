import { Montserrat } from "next/font/google";
// import { ObfuscatedEmail } from "../../components/obfuscated-email";
import ContactPage from "./ContactPage";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Contact Us - Tirpok Cleaners",
  description: "Get in touch with us at Tirpok Cleaners",
  // "Get in touch with us at Hanks Garage Venue. Don’t hesitate, reach out now and let us help make your event a memorable success.",
  // openGraph: {
  //   title: "Contact Hanks Garage",
  //   description:
  //     "Get in touch with us at Hanks Garage Venue. Don’t hesitate, reach out now and let us help make your event a memorable success.",
  // },
};

export default function Page() {
  return (
    <div>
      <div className="px-4">
        <section className="w-full py-10 md:py-16 mt-28 flex flex-col justify-center">
          <h1 className="text-center mb-8 text-4xl xl:text-5xl tracking-wide">
            Contact us
          </h1>
          <p
            className={`${montserrat.className} uppercase text-xl text-center font-extralight w-full mx-auto mb-8`}
          >
            we&apos;ll get back to you as soon as we can
          </p>
          {/* <ObfuscatedEmail /> */}
          <div className="border-b-4 border-orange-500 w-full md:max-w-xl mt-8 mx-auto"></div>
        </section>
        <ContactPage />
      </div>
    </div>
  );
}
