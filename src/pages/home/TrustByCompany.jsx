import React from "react";

const TrustByCompany = () => {
  return (
    <div className="bg-blue-gray-50/60 py-14">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-center text-xl text-blue-gray-700">
          Trusted by over 3254 companies and millions of learners around the
          world
        </h4>
        <div className="flex justify-between mt-10 ">
          {[
            { img: "https://i.ibb.co/G5yydm3/att.png" },
            { img: "https://i.ibb.co/xmTP2Jn/cisco-1.png" },
            { img: "https://i.ibb.co/Y8pshfm/ericsson.png" },
            { img: "https://i.ibb.co/XCWCp5j/volkswagen.png" },
            { img: "https://i.ibb.co/PhLqFYr/samsung.png" },
            { img: "https://i.ibb.co/VT2H71s/hewlett-packard-enterprise.png" },
          ].map(({ img }) => (
            <div>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustByCompany;
