export const metadata = {
  title: "Coupons and Offers - Tirpok Cleaners",
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
        className={`container w-10/12 mx-auto my-11 mt-28 rounded-lg p-4 bg-[#faf9f8]`}
      >
        {/* shirt coupon */}
        <section className="flex justify-around md:flex-row flex-col">
          <div className="w-72 border-2 border-dashed border-red-900 rounded-lg mx-auto my-5 bg-white shadow-md">
            <div className="bg-red-900 text-white text-center py-2">
              <h2 className="m-0 text-2xl tracking-wide font-bold">
                TIRPOK COUPON
              </h2>
            </div>
            <div className="p-4 text-center">
              <div className="my-3">
                <span className="text-5xl font-bold text-red-600">50¢</span>
                <span className="text-2xl font-bold text-red-600 ml-1">
                  off
                </span>
              </div>

              <div className="text-3xl font-bold my-2">
                Each Incoming Laundered Shirt
              </div>

              <div className="text-base font-bold my-2">NO LIMIT</div>

              <p className="text-xs text-gray-700">Not valid on Thursday</p>
              <p className="text-xs text-gray-700">
                Cannot be combined with other shirt offers
              </p>

              <div className="flex items-center justify-center mt-4 border-t border-gray-200 pt-4">
                <img
                  src="/images/tirpok-logo.png"
                  alt="Tirpok Cleaners"
                  className="h-12 mr-3"
                />
                <div className="text-left text-xs">
                  <a
                    href="tel:9087358115"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    (908) 735-8115
                  </a>
                  <br />
                  <a
                    href="www.tirpok.com"
                    className="my-0.5 text-blue-500 hover:text-blue-700"
                  >
                    www.tirpok.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* dry cleaning coupon */}
          <div className="w-72 border-2 border-dashed border-red-900 rounded-lg mx-auto my-5 bg-white shadow-md">
            <div className="bg-red-900 text-white text-center py-2">
              <h2 className="m-0 text-2xl tracking-wide font-bold">
                TIRPOK COUPON
              </h2>
            </div>
            <div className="p-4 text-center">
              <div className="my-3">
                <span className="text-5xl font-bold text-red-600">
                  $5.00 off
                </span>
              </div>

              <div className="text-3xl font-bold my-2">
                5 Pieces or More of Dry Cleaning
              </div>

              <div className="text-base font-bold my-2">NO LIMIT</div>

              <p className="text-xs text-gray-700">Not valid on Thursday</p>
              <p className="text-xs text-gray-700">
                Cannot be combined with other dry cleaning offers
              </p>

              <div className="flex items-center justify-center mt-4 border-t border-gray-200 pt-4">
                <img
                  src="/images/tirpok-logo.png"
                  alt="Tirpok Cleaners"
                  className="h-12 mr-3"
                />
                <div className="text-left text-xs">
                  <a
                    href="tel:9087358115"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    (908) 735-8115
                  </a>
                  <br />
                  <a
                    href="www.tirpok.com"
                    className="my-0.5 text-blue-500 hover:text-blue-700"
                  >
                    www.tirpok.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 10% off any service coupon */}
          <div className="w-72 border-2 border-dashed border-red-900 rounded-lg mx-auto my-5 bg-white shadow-md">
            <div className="bg-red-900 text-white text-center py-2">
              <h2 className="m-0 text-2xl tracking-wide font-bold">
                TIRPOK COUPON
              </h2>
            </div>
            <div className="p-4 text-center h-[400px] md:h-full flex flex-col justify-around">
              <div>
                <div className="my-3">
                  <span className="text-5xl font-bold text-red-600">
                    15% Off
                  </span>
                </div>

                <div className="text-3xl font-bold my-2">
                  Any Incoming Service
                </div>

                <p className="text-xs text-gray-700">
                  Cannot be combined with other offers.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center mt-4 border-t border-gray-200 pt-4">
                  <img
                    src="/images/tirpok-logo.png"
                    alt="Tirpok Cleaners"
                    className="h-12 mr-3"
                  />
                  <div className="text-left text-xs">
                    <a
                      href="tel:9087358115"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      (908) 735-8115
                    </a>
                    <br />
                    <a
                      href="www.tirpok.com"
                      className="my-0.5 text-blue-500 hover:text-blue-700"
                    >
                      www.tirpok.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
