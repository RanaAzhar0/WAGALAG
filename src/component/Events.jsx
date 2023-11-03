import React from "react";

const Events = () => {
    return (
        <div className=" py-8">
            <div className="container mx-auto flex flex-col items-center">
                <div className="w-full mb-8">
                    <div className="bg-white p-4 h-14 rounded-lg shadow-lg flex items-center">

                        <h2 className="mr-auto text-4xl font-bold py-2 px-4 max-sm:text-sm ">Latest Events</h2>
                        <button className="bg-green-500 h-10 hover:bg-green-600 text-white font-bold py-2 px-4 rounded max-sm:text-sm">View All</button>
                    </div>
                </div>
                <div className="w-full grid  items-center justify-center max-sm:grid-cols-1 md:grid-cols-3">
                    <div className=" flex justify-center">
                        <div className="flex flex-col justify-end imgone bg-white max-sm:w-[90%]  max-sm:h-40 md:w-[90%]  md:h-60 p-4 rounded-lg shadow-lg mb-4">

                            <h3 className="text-white text-xl font-normal font-['DinoTypeLineClean'] uppercase leading-loose tracking-wide">Event-Title</h3>
                            <p className="text-white text-sm font-normal font-['Montserrat'] leading-tight tracking-tight"> 23-Jun-2022 • 04:00PM</p>
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        <div className="flex flex-col justify-end imgtwo bg-white max-sm:w-[90%]  max-sm:h-40 md:w-[90%]  md:h-60 p-4 rounded-lg shadow-lg mb-4">

                            <h3 className="text-white text-xl font-normal font-['DinoTypeLineClean'] uppercase leading-loose tracking-wide">Event-Title</h3>
                            <p className="text-white text-sm font-normal font-['Montserrat'] leading-tight tracking-tight"> 23-Jun-2022 • 04:00PM</p>
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        <div className="flex flex-col justify-end imgthree bg-white max-sm:w-[90%]  max-sm:h-40 md:w-[90%]  md:h-60 p-4 rounded-lg shadow-lg mb-4">

                            <h3 className="text-white text-xl font-normal font-['DinoTypeLineClean'] uppercase leading-loose tracking-wide">Event-Title</h3>
                            <p className="text-white text-sm font-normal font-['Montserrat'] leading-tight tracking-tight"> 23-Jun-2022 • 04:00PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
