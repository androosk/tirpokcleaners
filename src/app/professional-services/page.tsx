import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Commercial Laundry Service - Tirpok Cleaners",
  description:
    "Professional towel and linen service for barber shops, salons, spas, medical offices, and beauty businesses. Fully certified medical laundry. Reliable pickup and delivery.",
  openGraph: {
    title: "Commercial Laundry Service - Tirpok Cleaners",
    description:
      "Professional towel and linen service for barber shops, salons, spas, medical offices, and beauty businesses. Fully certified medical laundry. Reliable pickup and delivery.",
  },
};

export default function CommercialLaundry() {
  return (
    <main className="">
      <div
        className={`${montserrat.className} container w-10/12 mx-auto my-11 mt-28 rounded-lg p-4 bg-[#faf9f8]`}
      >
        <h1 className="text-4xl pb-5 md:text-5xl text-[#1d6076] text-center flex flex-col md:flex-row justify-center">
          Commercial&nbsp;
          <span className="">Laundry Service</span>
        </h1>

        <div className="md:grid md:grid-cols-2 gap-4 items-center justify-center mb-12">
          <div className="px-1 md:px-10">
            <p className="text-3xl md:text-5xl text-[#1d6076] mb-4 text-center md:text-left">
              Keep Your Business
            </p>
            <p className="text-3xl md:text-5xl text-[#1d6076] mb-6 text-center md:text-left">
              Running Smooth.
            </p>
            <p className="font-thin my-7 tracking-wider text-black">
              PROFESSIONAL TOWEL, LINEN AND MEDICAL LAUNDRY SERVICE
            </p>
            <p className="mt-7 text-xl text-black">
              Scheduled pickup and delivery,
            </p>
            <p className="text-xl text-black mb-7 md:mb-0">
              So you can focus on your clients
            </p>
          </div>
          <div>
            <div className="md:w-3/4 mx-auto aspect-square rounded-full overflow-hidden">
              <Image
                height={800}
                width={800}
                className="object-cover w-full h-full"
                src={"/images/barber-shop-towels.jpg"}
                alt="clean white towels stacked in professional salon"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="container md:w-10/12 mx-auto py-12 bg-primary">
          <h2 className="text-3xl text-[#1d6076] text-center mb-12">
            Perfect for Your Business
          </h2>

          <div className="md:flex md:flex-wrap justify-center gap-6">
            <div className="md:w-1/4 mb-12 md:mb-0">
              <div className="md:w-3/4 mx-auto aspect-square rounded-full overflow-hidden">
                <Image
                  height={300}
                  width={300}
                  className="w-full h-full object-cover"
                  src={"/images/barber-shop.jpg"}
                  alt="professional barber shop interior"
                />
              </div>
              <p className="text-center md:mt-7 mb-7 md:mb-4 text-xl">
                Barber Shops
              </p>
              <p className="text-center font-thin py-6 px-6">
                Fresh, clean towels for every client. We understand the volume
                and quality standards your barbershop demands. Never run out of
                clean towels again.
              </p>
            </div>

            <div className="md:w-1/4 mb-12 md:mb-0">
              <div className="md:w-3/4 mx-auto aspect-square rounded-full overflow-hidden">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={"/images/spa-salon.jpg"}
                  alt="luxury spa treatment room"
                />
              </div>
              <p className="text-center md:mt-7 mb-7 md:mb-4 text-xl">
                Spas & Salons
              </p>
              <p className="text-center font-thin py-6 px-6">
                Luxurious, fluffy towels and linens that match your spa's
                premium experience. We handle robes, towels, sheets, and
                specialty items with expert care.
              </p>
            </div>

            <div className="md:w-1/4 mb-12 md:mb-0">
              <div className="md:w-3/4 mx-auto aspect-square rounded-full overflow-hidden">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={"/images/massage-therapy.jpg"}
                  alt="massage therapy room with clean linens"
                />
              </div>
              <p className="text-center md:mt-7 mb-7 md:mb-4 text-xl">
                Massage Therapy
              </p>
              <p className="text-center font-thin py-6 px-6">
                Sanitized, soft linens for your massage tables and treatment
                rooms. We ensure every piece meets health department standards
                and client comfort expectations.
              </p>
            </div>

            <div className="md:w-1/4 mb-12 md:mb-0">
              <div className="md:w-3/4 mx-auto aspect-square rounded-full overflow-hidden">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={"/images/medical-office.jpg"}
                  alt="clean medical office examination room"
                />
              </div>
              <p className="text-center md:mt-7 mb-7 md:mb-4 text-xl">
                Medical Offices
              </p>
              <p className="text-center font-thin py-6 px-6">
                Fully certified medical laundry service for scrubs, patient
                gowns, and medical linens. We meet all healthcare industry
                standards and regulations for safety and cleanliness.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <h2 className="text-3xl text-[#1d6076] text-center mb-12">
            How Our Service Works
          </h2>

          <div className="md:grid md:grid-cols-3 gap-8 text-center">
            <div className="mb-8 md:mb-0">
              <div className="bg-[#1d6076] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl text-[#1d6076] mb-4">Schedule Pickup</h3>
              <p className="text-black px-4">
                We'll arrange regular pickup times that work with your business
                hours. Morning, afternoon, or evening - whatever fits your
                schedule.
              </p>
            </div>

            <div className="mb-8 md:mb-0">
              <div className="bg-[#1d6076] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl text-[#1d6076] mb-4">
                Professional Cleaning
              </h3>
              <p className="text-black px-4">
                Your towels and linens are professionally washed, sanitized, and
                prepared to commercial standards. We use commercial-grade
                equipment and processes.
              </p>
            </div>

            <div className="mb-8 md:mb-0">
              <div className="bg-[#1d6076] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl text-[#1d6076] mb-4">Reliable Delivery</h3>
              <p className="text-black px-4">
                Clean, fresh linens delivered right back to your business.
                Folded, organized, and ready to use for your next clients.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-zinc-100 rounded-lg">
          <h2 className="text-3xl text-[#1d6076] text-center mb-12">
            Why Choose Tirpok for Your Business?
          </h2>

          <div className="md:grid md:grid-cols-2 gap-8 px-8">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl text-[#1d6076] mb-4 flex items-center">
                <span className="bg-[#1d6076] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                  ✓
                </span>
                Reliable Schedule
              </h3>
              <p className="text-black ml-11">
                Never worry about running out of clean towels. We stick to your
                schedule and provide consistent, dependable service.
              </p>
            </div>

            <div className="mb-8 md:mb-0">
              <h3 className="text-xl text-[#1d6076] mb-4 flex items-center">
                <span className="bg-[#1d6076] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                  ✓
                </span>
                Medical & Health Standards
              </h3>
              <p className="text-black ml-11">
                Fully certified for medical laundry with specialized processes
                for healthcare facilities. All linens meet or exceed health
                department and medical industry requirements.
              </p>
            </div>

            <div className="mb-8 md:mb-0">
              <h3 className="text-xl text-[#1d6076] mb-4 flex items-center">
                <span className="bg-[#1d6076] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                  ✓
                </span>
                Cost Effective
              </h3>
              <p className="text-black ml-11">
                Save money on water, electricity, detergent, and staff time. Our
                service often costs less than doing it yourself.
              </p>
            </div>

            <div className="mb-8 md:mb-0">
              <h3 className="text-xl text-[#1d6076] mb-4 flex items-center">
                <span className="bg-[#1d6076] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                  ✓
                </span>
                Inventory Management
              </h3>
              <p className="text-black ml-11">
                We help you maintain the right amount of inventory so you're
                never short on clean linens during busy periods.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl text-[#1d6076] mb-6">
            Ready to Streamline Your Business?
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote for your
            commercial laundry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-[#1d6076] text-white rounded-lg text-lg hover:bg-[#2a7a94] transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+19087358115"
              className="px-8 py-3 border-2 border-[#1d6076] text-[#1d6076] rounded-lg text-lg hover:bg-[#1d6076] hover:text-white transition-colors"
            >
              Call Now
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
