import React, { useState, useEffect } from "react";
import "./Partnership.css";
import { partner } from "../data/Data";

const Partnership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  // State to keep track of the selected partner
  const [selectedPartner, setSelectedPartner] = useState(null);

  // Function to open the modal and set the selected partner
  const openModal = (partner) => {
    setSelectedPartner(partner);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <section className="partnership_crumb_area">
          <div className="container text-center">
            <div className="partner_content">
              <h1 className="text-white text-4xl font-bold mb-8">Partner</h1>
              <p className="text-white text-lg">
              BAZRA INVESTMENT GROUP is dedicated to forging international and local partnerships to develop, support and improve international business, finance, knowledge and technology transfer in to Ethiopia. In order to address Ethiopia's urgent needs in international trade, finance, logistics, and knowledge and technology transfer, BAZRA is also working to develop partnerships in a variety of fields of international business and trade, knowledge and technology transfer, research, and technical exchange.              </p>
            </div>
          </div>
        </section>

        <div className="page-wrapper">
          <div className="container">
            {partner.map((partnerGroup, index) => (
              <section key={index} className="partner-section">
                <div className="row">
                  {index % 2 === 0 ? (
                    <>
                      <div className="column main">
                        <img src={partnerGroup.images} alt="" />
                        <h2>{partnerGroup.category}</h2>
                      </div>
                      <div className="column">
                        <div className="inner-section">
                          <div className="row">
                            {partnerGroup.partners.map((partner, innerIndex) => (
                              <div key={innerIndex} className="column" onClick={() => openModal(partner)}>
                                <a>
                                  <img src={partner.image_src} alt="" />
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="column">
                        <div className="inner-section">
                          <div className="row">
                            {partnerGroup.partners.map((partner, innerIndex) => (
                              <div key={innerIndex} className="column" onClick={() => openModal(partner)}>
                                <a>
                                  <img src={partner.image_src} alt="" />
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="column main">
                        <img src={partnerGroup.images} alt="" />
                        <h2>{partnerGroup.category}</h2>
                      </div>
                    </>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>


        {showModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-md w-[400px]">
              <span className="bg-blue-600 px-1 py-1 font-semibold hover:bg-blue-700 text-white  hover:bg-sky-600 mr-0"
                onClick={closeModal}>&times;</span>
              {selectedPartner && (
                <div>
                  <img src={selectedPartner.image_src} alt="" />
                  <p>{selectedPartner.description}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Partnership;
