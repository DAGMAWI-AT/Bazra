import { CarRentalRounded, PeopleAltOutlined } from "@mui/icons-material";
import React from "react";
import { Circle } from 'rc-progress';
import CountUp from 'react-countup'


function CircleBar({ percentage }) {
  return (
    <section>
      <div className="ml-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 md:col-span-2 sm:col-span-2">
          <div className="mx-auto bg-white rounded-xl shadow-lg hover:scale-105 transition duration-200">
            <div className="flex justify-between">
              <div className="ml-7 mt-5 text-black">
                <PeopleAltOutlined fontSize="large" />
              </div>
              <div className="mt-2 mr-2 text-black " style={{ height: "50px", width: "50px" }}>
              <Circle percent={70} strokeWidth={10} strokeColor="blue"  trailWidth={8} trailColor="gold"/> 
                <div>
                <CountUp enableScrollSpy duration={2} end={percentage}/>%
                </div>
              </div>
            </div>
            <div className="pl-7 py-5">
              <div className="text-blue-600 font-semibold  text-left">
                Total Users
              </div>
              <div className="text-2xl text-black font-semibold  text-left">
              <CountUp enableScrollSpy duration={2} end={100}/>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 sm:col-span-2">
          <div className="mx-auto bg-white rounded-xl shadow-lg hover:scale-105 transition duration-200">
            <div className="flex justify-between">
              <div className="ml-7 mt-5 text-black">
                <CarRentalRounded fontSize="large" />
              </div>
              <div className="mt-2 mr-2 text-black " style={{ height: "50px", width: "50px" }}>
              <Circle percent={60} strokeWidth={10} strokeColor="blue"  trailWidth={8} trailColor="gold"/> 
                <div>
                <CountUp enableScrollSpy duration={2} end={60}/>%
                </div>
              </div>
            </div>
            <div className="pl-7 py-5">
              <div className="text-blue-600 font-semibold  text-left">
                Total Cars
              </div>
              <div className="text-2xl text-black font-semibold  text-left">
              <CountUp enableScrollSpy duration={2} end={100}/>
              </div>
            </div>
          </div>
        </div>
        
        {/* Repeat the above code for other grid items as needed */}
      </div>
    </section>
  );
}

export default CircleBar;
