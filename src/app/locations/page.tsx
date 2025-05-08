export const metadata = {
  title: "Locations - Tirpok Cleaners",
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
        className={`bounce-up container w-10/12 mx-auto my-11 mt-28 rounded-lg p-4 bg-[#faf9f8]`}
      >
        <h1 className="text-2xl">Our Locations</h1>
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
        {/* Clinton */}
        <div className="mx-auto bg-white rounded-lg overflow-hidden shadow-md py-5 md:px-3 mb-3">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Store Image */}
            <div className="md:w-1/3">
              <img
                src="/images/clinton-store.jpg"
                alt="Store Location"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Store Information */}
            <div className="md:w-2/3 p-4 flex flex-col md:flex-row">
              {/* Middle column - Address and Directions */}
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Clinton</h2>
                <p className="text-gray-700 mb-4">
                  36 Old Hwy. 22 between
                  <br />
                  Subway and Green Grocer
                </p>
                <a
                  href="https://www.google.com/maps/dir/''/36+Old+Hwy.+22/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c38b0ee326a699:0x88a132edbf07c800?sa=X&ved=0ahUKEwigjOeJnqvNAhVU7WMKHSPHAN4Q9RcIdjAL"
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                >
                  View Map & Directions
                </a>
              </div>

              {/* Right column - Contact Info and Hours */}
              <div className="md:w-1/2">
                <p className="mb-2">
                  <span className="font-medium">Phone: </span>
                  <a
                    href="tel:9087358115"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    (908) 735-8115
                  </a>
                </p>

                <div className="mt-4">
                  <p className="font-medium text-gray-800 mb-2">
                    Hours have changed due to Covid-19
                  </p>
                  <p className="text-gray-700">
                    Please call the store for current hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Greenwich */}
        <div className="mx-auto bg-white rounded-lg overflow-hidden shadow-md py-5 px-3">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Store Image */}
            <div className="md:w-1/3">
              <img
                src="/images/greenwich-store.jpg"
                alt="Store Location"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Store Information */}
            <div className="md:w-2/3 p-4 flex flex-col md:flex-row">
              {/* Middle column - Address and Directions */}
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Greenwich Township</h2>
                <p className="text-gray-700 mb-4">
                  Greenwich Station Shopping Center by Bourbon St. Liquors and
                  Home Depot
                </p>
                <a
                  href="https://www.google.com/maps/dir/''/Greenwich+Twp+tirpok/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c4727d2c8cec63:0x6073b4b0fe8f4f54?sa=X&ved=0ahUKEwjM2YDUnqvNAhVL0mMKHdvQBj4Q9RcIfTAL"
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                >
                  View Map & Directions
                </a>
              </div>

              {/* Right column - Contact Info and Hours */}
              <div className="md:w-1/2">
                <p className="mb-2">
                  <span className="font-medium">Phone: </span>
                  <a
                    href="tel:9084545133"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    (908) 454-5133
                  </a>
                </p>

                <div className="mt-4">
                  <p className="font-medium text-gray-800 mb-2">
                    Hours have changed due to Covid-19
                  </p>
                  <p className="text-gray-700">
                    Please call the store for current hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
