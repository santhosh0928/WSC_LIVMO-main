import React from "react";
import PackageCard from "./PackageCard";

const PackageList = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-10 px-5 pt-2 lg:pt-2">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-6xl font-semibold text-center">Our Plan</h1>
          <p className="text-2xl font-semibold text-center mt-2">Choose the package that fits you</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 pt-10">
        {/* PROXY PACK */}
        <PackageCard
          price="42$"
          title="PROXY PACK"
          description={[
            { text: "24/7 Health care assistant", included: true },
            { text: "One home visit by field executive", included: true },
            { text: "Lab investigations: complete blood count, urine routine, TSH, HBA1C", included: true },
            { text: "One zoom session with general consultant (max 20 mins)", included: true },
            { text: "Zoom session with preventive health physician specialist", included: false },
            { text: "Nutritionist advice with diet chart for 1 month", included: false },
            { text: "Home visit by dental physician", included: false },
            { text: "Home visit for Ophthal screening", included: false },
            { text: "Wellness session with yoga (30 min)", included: false },
            { text: "Home visit by general doctor", included: false },
            { text: "Home visit by physiotherapist (not including session)", included: false },
          ]}
          buttonText="Sign up for $42"
          isFree={false}
        />
        {/* ELITE 360 PACK */}
        <PackageCard
          price="199$"
          title="ELITE 360 PACK"
          description={[
            { text: "24/7 Health care assistant", included: true },
            { text: "One home visit by field executive", included: true },
            { text: "Lab investigations: complete blood count, urine routine, TSH, HBA1C, Random blood sugar, Renal function test, Liver function test, Serum Electrolyte, Serum VIT D, Urine PCR, Peripheral Smear", included: true },
            { text: "One zoom session with general consultant (max 20 mins)", included: true },
            { text: "One zoom session with preventive health physician specialist (20 mins)", included: true },
            { text: "Nutritionist advice with diet chart for 1 month", included: true },
            { text: "One home visit by dental physician (procedures not included)", included: true },
            { text: "One home visit for Ophthal screening", included: true },
            { text: "Wellness session with yoga (30 min)", included: true },
            { text: "One home visit by general doctor", included: true },
            { text: "One home visit by physiotherapist (not including session)", included: true },
          ]}
          buttonText="Sign up for $199"
          isFree={false}
        />
      </div>
    </div>
  );
};

export default PackageList;
