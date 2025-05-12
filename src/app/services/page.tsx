export const metadata = {
  title: "Our Services - Tirpok Cleaners",
  description: "More than just a cleaners!",
  openGraph: {
    title: "Tirpok Cleaners",
    description: "More than just a cleaners!",
  },
};

const services = [
  {
    title: "Dry Cleaning",
    description:
      "Tirpok Cleaners offers the finest dry cleaning services you’ll find. Our attention to detail and complete expertise ensure can trust us with your entire wardrobe.",
  },
  {
    title: "Shirt Laundry",
    description:
      "We guarantee that your buttons will be replaced if cracked or broken, whites will be white, colors bright and all removable stains gone.",
  },
  {
    title: "Fine Linen Service",
    description:
      "Get that luxury hotel feeling at home. Let us launder your sheets and tablecloths. You’ll get them back clean, crisp and wonderful.",
  },
  {
    title: "Express Pickup and Dropoff Service",
    description:
      "As a Tirpok Cleaners Express Service customer, you’ll get two Express Service bags that you can fill up and drop off at your convenience — no waiting on lines. Our locations offer 24 hour drop off boxes for total convenience",
  },
  {
    title: "Sew What? Sew Anything!",
    description:
      "Tailoring service is available at any Tirpok store and Flemington, Clinton and Greenwich Twp. are equipped with full-service tailors where you can get your pants taken up, replace a zipper or just about any other repair or alteration you may need. With five tailors on staff we can handle it. Please call the location for available tailor hours.",
  },
  {
    title: "Area Rug Cleaning",
    description:
      "Let us refresh and renew your small area rugs. We can clean any type of rug up to 3’x5’, from the most delicate to the most durable.",
  },
  {
    title: "Wash Dry & Fold Laundry",
    description:
      "Do your laundry in ten minutes; five minutes to drop it off and five minutes to pick it up!",
  },
  {
    title: "Wedding Gown Cleaning & Preservation",
    description:
      "Don’t trust your memories to just anybody. Your wedding gown will be cleaned and preserved by our experts and presented to you in a beautiful box that will last for generations to come.",
  },
  {
    title: "Leather Suede & Fur Cleaning",
    description:
      "Keep your leather, suede and fur garments looking their best. Our experts will clean and condition your garments to keep them looking new.",
  },
  {
    title: "Drapery Cleaning",
    description:
      "When the day’s light shows your draperies and curtains beginning to look less than fresh and crisp, you can trust our drapery experts. Regular cleaning extends the life of draperies and keeps your entire room fresh and clean. You can trust us for any type of fabric window covering, from heavy velvet to the lightest sheers.",
  },
  {
    title: "Ugg Boot Cleaning",
    description:
      "Revitalize your beloved UGG boots with our professional cleaning service. Our specialists use gentle, proprietary techniques to remove dirt, salt stains, and watermarks while preserving the natural sheepskin texture. We deep clean both interior and exterior surfaces, deodorize, and restore the nap to its original softness. Each pair is carefully treated and reshaped to maintain their form and extend their lifespan. Trust our expert care to keep your premium UGGs looking their best season after season.",
  },
];

export default function Page() {
  return (
    <div className="flex-grow">
      <section
        className={`container w-10/12 mx-auto my-11 mt-28 rounded-lg p-4 bg-[#faf9f8]`}
      >
        <h1 className="text-2xl">Our Services</h1>
        <div className="py-5">
          <hr
            style={{
              height: "2px",
              borderWidth: 0,
              color: " gray",
              backgroundColor: "gray",
            }}
          ></hr>
        </div>
        {/* Service section */}
        {services.map((service, i) => {
          return (
            <section className="px-2 py-2" key={i}>
              <h2 className="text-2xl text-blue-700 leading-10">
                {service.title}
              </h2>
              <p className=" font-light">{service.description}</p>
            </section>
          );
        })}
      </section>
    </div>
  );
}
