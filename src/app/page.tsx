import Image from "next/image";
import { Montserrat } from "next/font/google";
import GarmentCareChatbot from "@/components/GarmentCareChatbot";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tirpok Cleaners",
  description: "More than just a cleaners!",
  openGraph: {
    title: "Tirpok Cleaners",
    description: "More than just a cleaners!",
  },
};

export default function Home() {
  return (
    <main className="">
      <div
        className={`${montserrat.className} container w-10/12 mx-auto my-11 mt-28 rounded-lg p-4 bg-[#faf9f8]`}
      >
        <h1 className="text-4xl pb-5 md:text-5xl text-[#1d6076] text-center flex flex-col md:flex-row justify-center">
          Welcome to&nbsp;
          <span className="">Tirpok Cleaners!</span>
        </h1>
        <div className="md:grid md:grid-cols-2 gap-4 items-center justify-center">
          <div className="px-4 md:px-10">
            <p className="text-5xl text-[#1d6076]">Freedom from</p>
            <p className="text-5xl text-[#1d6076]">Laundry Day.</p>
            <p className="font-thin my-7 tracking-wider text-black">
              DO YOUR LAUNDRY IN TEN MINUTES
            </p>
            <p className="mt-7 text-xl text-black">Five minutes to drop off,</p>
            <p className="text-xl text-black mb-7 md:mb-0">
              Five minutes to pick up
            </p>
          </div>
          <div>
            <Image
              height={800}
              width={800}
              className="rounded-full"
              src={"/images/autri-taheri-xoVylccwsN8-unsplash.jpg"}
              alt="girl reclining in laundry basket"
            />
          </div>
          <p className="text-center md:mt-7 mb-7 md:mb-0 text-xl md:hidden">
            Wash, Dry and Fold Laundry
          </p>
        </div>
        <section className="container md:w-10/12 mx-auto py-12 bg-primary md:flex md:flex-wrap justify-center">
          <div className="md:w-1/3">
            <Image
              height={300}
              width={300}
              className="md:w-3/4 rounded-full mx-auto"
              src={"/images/scarves-4128126_640.jpg"}
              alt="images of ties and cufflinks"
            />
            <p className="text-center md:mt-7 mb-7 md:mb-0 text-xl">
              Fine Dry Cleaning
            </p>
            <p className="text-center font-thin py-6 px-8 hidden md:block">
              Tirpok Cleaners offers the finest dry cleaning services
              you&apos;ll find. Our attention to detail and complete expertise
              ensure can trust us with your entire wardrobe.
            </p>
          </div>
          <div className="md:w-1/3">
            <Image
              height={300}
              width={300}
              className="md:w-3/4 rounded-full mx-auto"
              src={"/images/shirts-591750_640.jpg"}
              alt="images of ties and cufflinks"
            />
            <p className="text-center md:mt-7 mb-7 md:mb-0 text-xl">
              Platinum Shirt Laundry
            </p>
            <p className="text-center font-thin py-6 px-8 hidden md:block">
              We guarantee that your buttons will be replaced if cracked or
              broken, whites will be white, colors bright and all removable
              stains gone
            </p>
          </div>
          <div className="md:w-1/3">
            <Image
              height={300}
              width={300}
              className="md:w-3/4 rounded-full mx-auto"
              src={"/images/jordan-bigelow-53BjYSxca5g-unsplash.jpg"}
              alt="images of ties and cufflinks"
            />
            <p className="text-center md:mt-7 mb-7 md:mb-0 text-xl">
              Blankets, Bedspreads and More
            </p>
            <p className="text-center font-thin py-6 px-8 hidden md:block">
              Let us take care of your larger items and downs. They&apos;ll come
              back to you clean, fluffy and fresh every time without the hassle
              of overloading your washer or spending the day at the laundromat
            </p>
          </div>
          <div className="md:w-1/3">
            <Image
              height={300}
              width={300}
              className="md:w-3/4 rounded-full mx-auto"
              src={"/images/pina-messina-qQKv7r1BaRw-unsplash.jpg"}
              alt="images of ties and cufflinks"
            />
            <p className="text-center md:mt-7 mb-7 md:mb-0 text-xl">
              Sew what? We sew anything!
            </p>
            <p className="text-center font-thin py-6 px-8 hidden md:block">
              Check out our expert tailoring service where you can get your
              pants taken up, replace a zipper or just about any other repair or
              alteration you may need.
            </p>
          </div>
        </section>
        <GarmentCareChatbot />
      </div>
    </main>
  );
}
