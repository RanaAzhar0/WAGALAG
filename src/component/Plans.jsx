// import ticket from "../images/ticket.png"
import { AiOutlineArrowRight } from "react-icons/ai"
// import member from "../images/Membership.png"

function Plans() {
    return (
        <>
            <div className="container mx-auto sm:px-4 max-w-full  pb-5 bg-[#EE9E25]" >
                <div className="container mx-auto sm:px-4 pt-5 p-6">
                    <h1 className="fw-bolder pb-5 w-[1170px] text-center text-white text-5xl font-normal font-['DinoTypeLineClean'] uppercase leading-[56.02px] tracking-wide ">Our Plans</h1>
                    <div className="flex flex-wrap justify-around">
                        <div className="lg:w-2/5  md:w-2/5  sm:w-full pr-4 pl-4 p-6 bg-white flex rounded flex-col mt-[20px]" >
                            <img className="self-center pt-4 h-[95px] w-[80px]" src="images/Group.png" />
                            <p className="text-center fw-bolder pt-2">Single Use</p>
                            <p className="text-center text-scondary">starting from</p>
                            <h3 className="fw-bolder text-center">3.00BHD</h3>
                            <div className="flex  flex-col">
                                <div className="flex ">
                                    <AiOutlineArrowRight />
                                    <p  className=" ml-5">Park entrance</p>
                                </div>
                                <div className="flex ">
                                    <AiOutlineArrowRight />
                                    <p className="ml-5">Entry Ticket is valid for the full day for the same person</p>
                                </div>
                                <div className="flex ">
                                    <AiOutlineArrowRight />
                                    <p className="ml-5">Free WiFi</p>
                                </div>
                            </div>
                            <button className="rounded text-white fw-bold p-2" style={{ "backgroundColor": "#352F79", "border": "none" }}>BUY TICKES</button>
                        </div>
                        <div className="lg:w-2/5  md:w-2/5 pr-4 pl-4 sm:w-full  p-6 bg-white flex rounded flex-col mt-5" >
                            <img className="self-center pt-4 h-24 w-20"  src="images/Ticket.png" />
                            <p className="text-center fw-bolder pt-2">Membership</p>
                            <p className="text-center text-scondary">starting from</p>
                            <h3 className="fw-bolder text-center">20.00BHD/yr</h3>
                            <div className="flex  flex-col">
                                <div className="flex">
                                    <AiOutlineArrowRight />
                                    <p className="fw-bold ml-5">Everything from Single Use</p>
                                </div>
                                <div className="flex">
                                    <AiOutlineArrowRight />
                                    <p className=" ml-5">Discount on certain stores</p>
                                </div>
                                <div className="flex">
                                    <AiOutlineArrowRight />
                                    <p className=" ml-5">Discount on subscription</p>
                                </div>
                            </div>
                            <button className="rounded text-white fw-bold p-2" style={{ "backgroundColor": "green", "border": "none" }}>BUY TICKES</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plans
