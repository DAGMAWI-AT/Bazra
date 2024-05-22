import React, { useEffect } from "react";

const TendersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="col-md-9 col-sm-12 main-content mt-20">
      <div>
        <div className="flex justify-center bg-gray-500 bg-transparent shadow-md shadow-gray-700 mb-20 border border-gray-300 h-62 max-h-80 m-2">
          <img
            src="../../../bz2.png"
            width="100"
            height="100"
            alt=""
            title=""
            border="0"
          />
        </div>
      </div>
      <section className="m-4 md:m-10 lg:m-20">
        <h4>
          ባዛሪ ኢንቭስተመንት ቦታ ተብሏል ለድምፅ መኪናዎችና በእንቅስቃሴ ከተማ ላይ የሚኖረውን የማሽን እና የምናያት
          መንገዶችን በመስመር አስተዳደር የሚረዳውን ጥቅም የሚሰጠውን ተልዕኮ ይጠቀሙ:የመኪናዎች ማስተላለፊያ:
          የበእንቅስቃሴ ከተማ የሚኖረውን መኪናዎችን እና የህንፃ መኪናዎችን መሳሪያ እንዲሆን እና እንቅስቃሴ ከፍተኛ
          ከሆነ የአስተማሪ ዓይነትን በማስጠንቀቅ ያሳያል።ዋጋ ያለው መኪና አስተማሪ: ባዛሪ እቃዎችን ለማስከበር ከፍተኛ
          መኪና ዋጋ ያለውን ከሆነ የመኪና አስተማሪ ማሽን እና የተነሳ ዋጋ በማስጠንቀቅ ያሳያል።የአውቶሞቢል እናማርኛ:
          ማሽንና ከሆነ ተነሳ እና ማሽንን እና አውቶሞቢል አካላትን ለማስከበር ከፍተኛ መኪና የሚኖር እና ማሽን አስተማሪ
          ማሽንና እና አካባቢዎችን በማስጠንቀቅ ያሳያል።)
        </h4>
        <div>
          <a
            href="/tenders/661fe7ddb1b26f6b753a8ce0/print"
            target="_blank"
            className="btn btn-sm btn-outline-secondary btn-print"
          >
            <i className="bi bi-printer me-2"></i> Print
          </a>
          {/* <button type="button" className="btn btn-sm btn-outline-secondary btn-fullscreen">
                        <i className="bi bi-arrows-fullscreen me-2"></i> Fullscreen
                    </button> */}
        </div>
        <hr />
        <div className="row">
          <div className="flex flex-col  lg:flex-row md:flex-col sm:flex-col justify-between mb-6 items-center mt-2 ">
            <div className="p-1 mb-4">
              <span className="text-md text-gray-600 ">
                <p>
                  <b className="text-white pr-10">Bid closing date:</b>ሚያዝያ
                  24/2016 ዓ.ም ከቀኑ 11፡30 ሰዓት ድረስ
                </p>
              </span>
              <hr />
              <span className="text-sm text-gray-600">
                <p>
                  <b className="text-white pr-10">Bid opening date:</b> ሚያዚያ
                  28/2016 ዓ.ም ከጠዋቱ 3፡00 ሰዓት ጀምሮ
                </p>
              </span>
              <hr />
              <span className="text-sm text-gray-600">
                <p>
                  <b className="text-white pr-10">Published on:</b> The Reporter
                  (Apr 27, 2024)
                </p>
              </span>
              <hr />
              <span className="text-sm text-gray-600">
                <p>
                  <b className="text-white pr-10">Place:</b> Addis Ababa
                </p>
              </span>
            </div>
            <div className="border border-gray-300 shadow-lg rounded p-4 lg:ml-80">
              <h2 className="text-lg font-semibold text-white">
                Tender Documents
              </h2>
              <hr className="bg-white opacity-200" />
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
                <span className="text-sm ml-2 text-gray-600">Price: free</span>
                <div className="ml-2">
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

          <div className="col-md-8">
            <h2 className="text-center font-extrabold mb-4">ማስታወቂያ</h2>
            <hr />

            <div className="flex justify-center shadow-md shadow-gray-800 bg-white bg-opacity-80 mt-6   max-h-85 m-2">
              <img className="p-10 " src="../../../tender.jpeg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TendersPage;
