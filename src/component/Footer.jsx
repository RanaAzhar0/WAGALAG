import React from "react";
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"

function Footer() {
    return (
        <div className="py-8 bg-blue-800">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
                   
                    <div className=" p-4 rounded flex justify-center">
                       <img className="h-24 w-24" src="images/img_img.png" alt="img_img"/>
                    </div>
                    <div className=" flex justify-around  p-4 rounded shadow-md ">
                      <ul className="  text-white flex  gap-9 flex-wrap items-center md:w-[70%] max-sm:w-[30%] ">
                        <li className=" max-sm:text-base max-sm:font-bold max-sm:bg-blue-700 max-sm:py-2 max-sm:px-6">HOME</li>
                        <li className=" max-sm:hidden">AboutUs</li>
                        <li className=" max-sm:hidden">Events</li>
                        <li className=" max-sm:hidden">Contact</li>
                        <li className=" max-sm:hidden">Buy Tickets</li>
                        <li className=" max-sm:hidden">Faqs</li>
                        <li className=" max-sm:hidden">Privacy Policy</li>
                        <li className=" max-sm:hidden">Terms Conditions</li>

                      </ul>
                    </div>
                    <div className=" p-4 rounded shadow-md flex  justify-around max-sm:flex  max-sm:flex-col ">
                        <div className="max-sm:bg-blue-500 h-10 w-[45%] items-center flex justify-center max-sm:w-full">
                            <h1 className=" text-white ">Copyright 2022 Wagalag All Rights Reserved</h1>

                        </div>
                        <div className=" h-10  w-[45%] max-sm:w-full items-center justify-end gap-5 flex max-sm:bg-slate-200">
                        <AiOutlineFacebook className="flex text-2xl rounded-full justify-end text-black bg-yellow-300"/>
                        <AiOutlineInstagram className="flex  text-2xl rounded-full justify-end mr-5 text-black bg-yellow-300" />
                        </div>

                    </div>
                    <div className="p-4 rounded flex">
                     <div className=" flex gap-6  md:ml-20 ">
                        <img className=" md:w-40 md:h-14   sm:w-36 sm:h-12  max-sm:ml-4 max-sm:w-24  max-sm:h-8" src="images/img_googlebadge.png"/>
                        <img className=" md:w-40 md:h-14   sm:w-36 sm:h-12   max-sm:w-24  max-sm:h-8" src="images/Apple Badge.png"/>

                     </div>
                    </div>

                   

                   
                   
                </div>
            </div>
        </div>
    );
}

export default Footer;
