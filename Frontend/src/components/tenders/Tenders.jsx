import React, { useEffect } from "react";

const Tenders = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    } else {
      return description;
    }
  };
  const tenderDescription =
    "Tender Notice: Bazra Investment Group invites interested parties to participate in a tender opportunity aimed at supplying a range of automotive products and accessories. The tender encompasses the following categories: Sales of Cars, Lada Car Body, and Automotive Accessories. Sales of Cars: Provision of various types of vehicles, including home and public cars, to meet the diverse needs of our clientele. Lada Car Body: Supply of Lada car bodies to support our manufacturing operations and meet customer demand. Automotive Accessories: Provision of a wide range of automotive accessories, including motors and other essential components.";
  const tenderDescription2 =
    "ባዛሪ ኢንቭስተመንት ቦታ ተብሏል ለድምፅ መኪናዎችና በእንቅስቃሴ ከተማ ላይ የሚኖረውን የማሽን እና የምናያት መንገዶችን በመስመር አስተዳደር የሚረዳውን ጥቅም የሚሰጠውን ተልዕኮ ይጠቀሙ:የመኪናዎች ማስተላለፊያ: የበእንቅስቃሴ ከተማ የሚኖረውን መኪናዎችን እና የህንፃ መኪናዎችን መሳሪያ እንዲሆን እና እንቅስቃሴ ከፍተኛ ከሆነ የአስተማሪ ዓይነትን በማስጠንቀቅ ያሳያል።ዋጋ ያለው መኪና አስተማሪ: ባዛሪ እቃዎችን ለማስከበር ከፍተኛ መኪና ዋጋ ያለውን ከሆነ የመኪና አስተማሪ ማሽን እና የተነሳ ዋጋ በማስጠንቀቅ ያሳያል።የአውቶሞቢል እናማርኛ: ማሽንና ከሆነ ተነሳ እና ማሽንን እና አውቶሞቢል አካላትን ለማስከበር ከፍተኛ መኪና የሚኖር እና ማሽን አስተማሪ ማሽንና እና አካባቢዎችን በማስጠንቀቅ ያሳያል።";

  return (
    <section className=" bg-gray-800  bg-opacity-70 p-2">
      <div className=" bg-gray-900 bg-opacity-20 ">
      <div className=" p-4 mt-20">
          <h1 className="text-3xl font-bold text-yellow-800">Tenders</h1>
          <p className="text-gray-100">
            This list contains free tenders. You don't need to create an account
            to read them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-10 p-4">
          <div className="bg-white border border-yellow-900 shadow-lg rounded p-4 bg-opacity-80 relative">
            <div className="absolute left-4 top-0 transform -translate-y-1/2 flex items-center pl-1 text-sm bg-green-400 text-white rounded">
              Free
            </div>
            <h2 className="text-lg font-semibold text-black">
              {truncateDescription(tenderDescription2, 130)}
            </h2>
            <div className="flex flex-col  lg:flex-row md:flex-col sm:flex-col justify-between items-center mt-2 ">
              <div className="p-1 mb-4">
                <span className="text-sm text-gray-600 mr-4">
                  <b className="text-black">Bid closing date:</b> ሚያዝያ 24/2016
                  ዓ.ም ከቀኑ 11፡30 ሰዓት ድረስ
                </span>
                <hr />
                <span className="text-sm text-gray-600">
                  <b className="text-black">Bid opening date:</b> ሚያዚያ 28/2016
                  ዓ.ም ከጠዋቱ 3፡00 ሰዓት ጀምሮ
                </span>
                <hr />
                <span className="text-sm text-gray-600">
                  <b className="text-black">Published on:</b> The Reporter (Apr
                  27, 2024)
                </span>
              </div>
              <div className="border border-gray-300 shadow-lg rounded p-4 ">
                <h2 className="text-lg font-semibold text-black">
                  Tender Documents
                </h2>
                <hr className="bg-black opacity-200" />
                <div className="flex items-center mt-2">
                  <span className="text-sm ml-2 text-gray-600">
                    Price: ETB 2,300
                  </span>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-1 px-3 rounded"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Buy Now
                  </button>
                </div>
                <hr />
                <div className="flex items-center mt-2">
                  <span className="text-sm ml-2 text-gray-600">
                    Price: free
                  </span>
                  <div className="ml-2">
                    {/* <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-1 px-3 rounded"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Download
                    </button> */}
                    <br />
                    <div className="text-sm text-gray-600">
                      <div className="text-xs">
                        File size: <span>36 KB</span>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-blue-600">
                Show Details
              </a>
            </div>
          </div>

          <div className="bg-white border border-green-400 shadow-sm rounded p-4 relative">
            <div className="absolute left-4 top-0 transform -translate-y-1/2 flex items-center pl-1 text-sm bg-green-400 text-white rounded">
              Free
            </div>

            <h2 className="text-lg font-semibold text-black">
              {truncateDescription(tenderDescription, 130)}
            </h2>

            <div className="flex flex-col  lg:flex-row md:flex-col sm:flex-col justify-between items-center mt-2 ">
              <div className="p-1">
                <span className="text-sm text-gray-600 mr-4">
                  <b className="text-black">Bid closing date:</b> ሚያዝያ 24/2016
                  ዓ.ም ከቀኑ 11፡30 ሰዓት ድረስ
                </span>
                <hr />
                <span className="text-sm text-gray-600">
                  <b className="text-black">Bid opening date:</b> ሚያዚያ 28/2016
                  ዓ.ም ከጠዋቱ 3፡00 ሰዓት ጀምሮ
                </span>
                <hr />
                <span className="text-sm text-gray-600">
                  <b className="text-black">Published on:</b> The Reporter (Apr
                  27, 2024)
                </span>
              </div>
              <div className="border border-gray-300 shadow-lg rounded p-4 ">
                <h2 className="text-lg font-semibold text-black">
                  Tender Documents
                </h2>
                <hr className="bg-black opacity-200" />
                <div className="flex items-center mt-2">
                  <span className="text-sm ml-2 text-gray-600">
                    Price: ETB 2,300
                  </span>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-1 px-3 rounded"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Buy Now
                  </button>
                </div>
                <hr />
                <div className="flex items-center mt-2">
                  <span className="text-sm ml-2 text-gray-600">
                    Price: free
                  </span>
                  <div className="ml-2">
                    {/* <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-1 px-3 rounded"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Download
                    </button> */}
                    <br />
                    <div className="text-sm text-gray-600">
                      <div className="text-xs">
                        File size: <span>36 KB</span>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-blue-600">
                Show Details
              </a>
            </div>
          </div>
          <div className="bg-white border border-green-400 shadow-sm rounded p-4 relative">
            <div className="absolute left-4 top-0 transform -translate-y-1/2 flex items-center pl-1 text-sm bg-green-400 text-white rounded">
              Free
            </div>
            <h2 className="text-lg font-semibold text-black">
              {truncateDescription(tenderDescription2, 130)}
            </h2>
            <div className="flex flex-col  lg:flex-row md:flex-col sm:flex-col justify-between items-center mt-2 ">
              <div className="p-1">
                <span className="text-sm text-gray-600 mr-4">
                  <b className="text-black">Bid closing date:</b> ሚያዝያ 24/2016
                  ዓ.ም ከቀኑ 11፡30 ሰዓት ድረስ
                </span>
                <hr />
                <span className="text-sm text-gray-600">
                  <b className="text-black">Bid opening date:</b> ሚያዚያ 28/2016
                  ዓ.ም ከጠዋቱ 3፡00 ሰዓት ጀምሮ
                </span>
                <hr />
                <span className="text-sm text-gray-600">
                  <b className="text-black">Published on:</b> The Reporter (Apr
                  27, 2024)
                </span>
              </div>
              <div className="border border-gray-300 shadow-lg rounded p-4 ">
                <h2 className="text-lg font-semibold text-black">
                  Tender Documents
                </h2>
                <hr className="bg-black opacity-200" />
                <div className="flex items-center mt-2">
                  <span className="text-sm ml-2 text-gray-600">
                    Price: ETB 2,300
                  </span>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-1 px-3 rounded"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Buy Now
                  </button>
                </div>
                <hr />
                <div className="flex items-center mt-2">
                  <span className="text-sm ml-2 text-gray-600">
                    Price: free
                  </span>
                  <div className="ml-2">
                    {/* <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-1 px-3 rounded"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Download
                    </button> */}
                    <br />
                    <div className="text-sm text-gray-600">
                      <div className="text-xs">
                        File size: <span>36 KB</span>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-blue-600">
                Show Details
              </a>
            </div>
          </div>
          <div className="bg-white border border-green-400 shadow-sm rounded p-4 relative">
            <div className="absolute left-4 top-0 transform -translate-y-1/2 flex items-center pl-1 text-sm bg-green-400 text-white rounded">
              Free
            </div>
            <h2 className="text-lg font-semibold text-black">
              {truncateDescription(tenderDescription2, 130)}
            </h2>
            <div className="flex flex-col  lg:flex-row md:flex-col sm:flex-col justify-between items-center mt-2 ">
              <div className="p-1">
                <span className="text-sm text-gray-600 mr-4">
                  <b className="text-black">Bid closing date:</b> ሚያዝያ 24/2016
                  ዓ.ም ከቀኑ 11፡30 ሰዓት ድረስ
                </span>
                <hr />
                <span className="text-sm text-gray-600">
                  <b className="text-black">Bid opening date:</b> ሚያዚያ 28/2016
                  ዓ.ም ከጠዋቱ 3፡00 ሰዓት ጀምሮ
                </span>
                <hr />
                <span className="text-sm text-gray-600">
                  <b className="text-black">Published on:</b> The Reporter (Apr
                  27, 2024)
                </span>
              </div>
              <div className="border border-gray-300 shadow-lg rounded p-4 ">
                <h2 className="text-lg font-semibold text-black">
                  Tender Documents
                </h2>
                <hr className="bg-black opacity-200" />
                <div className="flex items-center mt-2">
                  <span className="text-sm ml-2 text-gray-600">
                    Price: ETB 2,300
                  </span>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-1 px-3 rounded"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Buy Now
                  </button>
                </div>
                <hr />
                <div className="flex items-center mt-2">
                  <span className="text-sm ml-2 text-gray-600">
                    Price: free
                  </span>
                  <div className="ml-2">
                    {/* <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-1 px-3 rounded"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Download
                    </button> */}
                    <br />
                    <div className="text-sm text-gray-600">
                      <div className="text-xs">
                        File size: <span>36 KB</span>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-blue-600">
                Show Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tenders;
