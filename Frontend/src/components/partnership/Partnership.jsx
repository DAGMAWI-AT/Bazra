import React, { useEffect } from "react";
import "./Partnership.css"; // Import the external CSS file
import { partner } from "../data/Data";
const Partnership = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div>
                <section className="partnership_crumb_area">
                    <div className="container text-center">
                        <div className="partner_content">
                            <h1 className="text-white text-4xl font-bold mb-8">Partner</h1>
                            <p className="text-white text-lg">
                            BAZRA INVESTMENT GROUP is dedicated to forging international and local partnerships to develop, support and improve international business, finance, knowledge and technology transfer in to Ethiopia. In order to address Ethiopia's urgent needs in international trade, finance, logistics, and knowledge and technology transfer, BIG is also working to develop partnerships in a variety of fields of international business and trade, knowledge and technology transfer, research, and technical exchange.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="page-wrapper">
                    <div className="container">
                        {partner.map((partner, index) => (
                            <section key={index} className="partner-section">
                                <div className="row">
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="column main">
                                                <img src={partner.images} alt="" />
                                                <h2>{partner.category}</h2>
                                            </div>
                                            <div className="column">
                                                <div className="inner-section">
                                                    <div className="row">
                                                        {partner.partners.map((partner, index) => (
                                                            <div key={index} className="column">
                                                                <a href="#">
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
                                                        {partner.partners.map((partner, index) => (
                                                            <div key={index} className="column">
                                                                <a href="#">
                                                                    <img src={partner.image_src} alt="" />
                                                                </a>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column main">
                                                <img src={partner.images} alt="" />
                                                <h2>{partner.category}</h2>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>


            

            </div>
        </>
    );
};

export default Partnership;
