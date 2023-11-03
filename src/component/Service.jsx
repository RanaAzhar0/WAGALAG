import React from 'react'

function Service() {
    return (
        <>

            <div className="grid mb-8  bg-indigo-900 rounded-lg shadow-sm md:mb-12 justify-around md:grid-cols-3">
                <div className="flex flex-col items-center justify-center p-8  ">
                    <img src="images/img_group_teal_800.png" className=' h-16 w-52 -mt-6 -ml-56 rotate-12' />
                    <img src="images/IconBox0(2).png" alt='IconBox0(2)' className='h-[40vh] w-[60vh] '/>

                </div>
                <div className="flex flex-col  items-center justify-center p-8 ">
                    <img src="images/IconBox.png" alt='IconBox0(2)' className='h-[43vh] w-[60vh] mt-9'/>
                     
                </div>
                <div className="flex flex-col  items-center justify-center p-8 ">
                    <img src="images/IconBox(2).png" alt='IconBox0(2)' className='h-[43vh] w-[60vh] mt-9'/>
                      
                </div>

            </div>


        </>
    )
}

export default Service
