export const metadata = {
  title: "About Us - Tirpok Cleaners",
  description: "More than just a cleaners!",
  openGraph: {
    title: "Tirpok Cleaners",
    description: "More than just a cleaners!",
  },
};

export default function Page() {
  return (
    <div className="flex-grow">
      <section
        className={`bounce-up container w-10/12 mx-auto my-11 mt-28 rounded-lg py-20 bg-[#faf9f8]`}
      >
        <h1 className="text-center mb-8 text-3xl xl:text-5xl tracking-wide">
          About Tirpok Cleaners
        </h1>
        <p className="px-3 md:px-20 py-4">
          In 1936, Andrew Tirpok Sr. founded Tirpok Cleaners. Mr. Tirpok was an
          entrepreneur and one of the legendary figures in Flemington&#39;s
          history. He had several businesses in the area, starting with a
          shoe-shine stand and evolving into a dry cleaning and laundry
          operation.
        </p>
        <p className="px-3 md:px-20 py-4">
          Today, Tirpok Cleaners is a market leader in both Hunterdon and Warren
          counties. The growth of the company can be attributed to a strong
          marketing strategy, adherence to ethics and the basic belief that
          people &#45; employees and customers &#45; are the company&#39;s most
          important asset. The suggestions of our employees and customers, along
          with changes in technology enable us to continually improve our
          services resulting in employment growth opportunities gained from
          growth.
        </p>
      </section>
    </div>
  );
}
