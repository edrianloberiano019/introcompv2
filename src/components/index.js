import React from 'react'
import sova from './images/sova.png'
import omen from './images/omen.png'
import sage from './images/sage.png'
import jett from './images/jett.png'
import blackb from './images/black.jpg'
import hotelb from './images/hotelania.jpg'


function index() {
    return (
        <div >
            <nav className='px-2 absolute z-30 cursor-pointer bg-fixed' style={{backgroundImage: `url(${hotelb})`}}>
                <div className="text-4xl font-mono">Hotelania</div>    
            </nav>
            <div className='flex h-screen content-center bg-cover items-center ' >
                <div className='flex bg-[#ffffff25] w-full absolute h-screen z-10'></div>
                <div className='flex z-20'>
                    <div className='flex-col pl-48 text-left'>
                    <div className='text-4xl'>Reserve your</div>
                    <div className='text-6xl'>ROOM NOW!</div>        
                    <button className='ml-4 bg-red-500 hover:scale-105 transition-all duration-200 px-4 py-2 rounded hover:bg-red-600 hover:text-white'>Click this to Book!</button>
                    <button className='mx-1 my-2 text-xl px-4 py-2 rounded'>View Plans</button>
                </div>
                </div>
            </div>
            <div className='flex flex-col h-screen bg-blue-400'>
                <div className='flex flex-col items-center'>
                    <div className='items-center flex flex-col'>
                        <div className='text-4xl mt-[3rem] items-center uppercase'> Hotelania plans</div>
                        <h1 className='mb-[5rem] text-center px-80'>To see the details about the price of every plan, just click (buy now) to see the price of our plans, your payment options are secured by our security system. And HOTELANIA RESEVE SYSTEM can pick up you anywhere in luzon. </h1>
                    </div>
                    <div className='grid flex-col gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 grid-cols-1'>
                        <div id='SOVA' style={{backgroundImage: `url(${sova})`}} className='w-72 bg-cover hover:scale-105 duration-200 transition-all rounded-2xl flex flex-col shadow-lg text-xl text-white bg-blue-900 uppercase h-[25rem]'>
                            <div className='opacity-50 rounded-t-2xl h-full p-4' style={{backgroundImage: `url(${blackb})`}} alt="" >
                                <div className='flex justify-between'>
                                    <div className=''>View The Plan</div>
                                    <div className='absolute text-transparent transition-all hover:text-white px-11 hover:pl-40 hover:pr-3 rounded-r-xl hover:bg-green-500 pr-0 duration-1000 '>initiator</div>    
                                </div>
                                <div className='flex flex-col'>Benefits:
                                    <div className='flex text-base  flex-col'>
                                        <h6><strong>View:</strong> Not good</h6>
                                        <h6><strong>Free:</strong> BreakFast (6am - 7am)</h6>
                                        <h6><strong>ReClean:</strong> +500</h6> 
                                        <h6><strong>Appliances:</strong> Not Complete</h6>   
                                        <h6><strong>room: </strong>1 living room</h6>
                                        <h6 className='ml-14'>1 comfort room</h6>
                                        <h6 className='ml-14'>1 small sala</h6>  
                                    </div>
                                </div>
                            </div>
                            <button className='flex px-4 py-2 justify-end uppercase rounded-b-2xl bg-[#00000071]'>buy now</button>   
                        </div>
                        <div id='OMEN' style={{backgroundImage: `url(${omen})`}} className='w-72 bg-cover hover:scale-105 duration-200 transition-all rounded-2xl flex flex-col shadow-lg text-xl text-white bg-blue-900 uppercase h-[25rem]'>
                            <div className='opacity-50 rounded-t-2xl h-full p-4' style={{backgroundImage: `url(${blackb})`}} alt="" >
                                <div className='flex justify-between'>
                                    <div className=''>View The Plan</div>
                                    <div className='absolute text-transparent transition-all hover:text-white px-11 hover:pl-32 hover:pr-3 rounded-r-xl hover:bg-blue-500 pr-0 duration-1000 '>Controller</div>    
                                </div>
                                <div className='flex flex-col'>Benefits:
                                    <div className='flex text-base  flex-col'>
                                        <h6><strong>View:</strong> Not good</h6>
                                        <h6><strong>Free:</strong> BreakFast (6am - 8am)</h6>
                                        <h6><strong>ReClean:</strong> +350</h6> 
                                        <h6><strong>Appliances:</strong> Not Complete</h6>
                                        <h6><strong>room: </strong>2 living room</h6>
                                        <h6 className='ml-14'>1 small own kitchen</h6>
                                        <h6 className='ml-14'>2 comfort room</h6>
                                        <h6 className='ml-14'>1 medium sala</h6>   
                                    </div>
                                </div>
                            </div>
                            <button className='flex px-4 py-2 justify-end uppercase rounded-b-2xl bg-[#0000007e]'>buy now</button>   
                        </div>
                        <div id='sage' style={{backgroundImage: `url(${sage})`}} className='w-72 bg-cover hover:scale-105 duration-200 transition-all rounded-2xl flex flex-col shadow-lg text-xl text-white bg-blue-900 uppercase h-[25rem]'>
                            <div className='opacity-50 rounded-t-2xl h-full p-4' style={{backgroundImage: `url(${blackb})`}} alt="" >
                                <div className='flex justify-between'>
                                    <div className=''>View The Plan</div>
                                    <div className='absolute text-transparent transition-all hover:text-white px-11 hover:pl-40 hover:pr-3 rounded-r-xl hover:bg-violet-500 pr-0 duration-1000 '>Sentinel</div>    
                                </div>
                                <div className='flex flex-col'>Benefits:
                                    <div className='flex text-base  flex-col'>
                                        <h6><strong>View:</strong> good</h6>
                                        <h6><strong>Free:</strong> BreakFast (6am - 8am)</h6>
                                        <h6 className='ml-11'>dinner (7pm - 8pm)</h6>
                                        <h6><strong>ReClean:</strong> Free</h6> 
                                        <h6><strong>Appliances:</strong> Complete</h6>
                                        <h6><strong>room: </strong>2 living room</h6>
                                        <h6 className='ml-14'>1 medium own kitchen</h6>
                                        <h6 className='ml-14'>1 medium sala</h6>
                                    </div>
                                </div>
                            </div>
                            <button className='flex px-4 py-2 justify-end uppercase rounded-b-2xl bg-[#0000007e]'>buy now</button>   
                        </div>
                        <div id='jett' style={{backgroundImage: `url(${jett})`}} className='w-72 bg-cover hover:scale-105 duration-200 transition-all rounded-2xl flex flex-col shadow-lg text-xl text-white bg-blue-900 uppercase h-[25rem]'>
                            <div className='opacity-50 rounded-t-2xl h-full p-4' style={{backgroundImage: `url(${blackb})`}} alt="" >
                                <div className='flex justify-between'>
                                    <div className=''>View The Plan</div>
                                    <div className='absolute text-transparent transition-all hover:text-white px-11 hover:pl-44 hover:pr-3 rounded-r-xl hover:bg-yellow-500 pr-0 duration-1000 '>duelist</div>    
                                </div>
                                <div className='flex flex-col'>Benefits:
                                    <div className='flex text-base  flex-col'>
                                        <h6><strong>View:</strong> Super good</h6>
                                        <h6><strong>Free:</strong> BreakFast (6am - 9am)</h6>
                                        <h6 className='ml-11'>lunch (10am - 12pm)</h6>
                                        <h6 className='ml-11'>dinner (6pm - 9pm)</h6>
                                        <h6><strong>ReClean:</strong> Free</h6> 
                                        <h6><strong>Appliances:</strong> Complete</h6>   
                                        <h6><strong>room: </strong>3 living room</h6>
                                        <h6 className='ml-14'>1 own kitchen</h6>
                                        <h6 className='ml-14'>1 own laundry</h6>
                                        <h6 className='ml-14'>1 beer and wine room</h6>
                                        <h6 className='ml-14'>1 big sala</h6>
                                    </div>
                                </div>
                            </div>
                            <button className='flex px-4 py-2 justify-end uppercase rounded-b-2xl bg-[#0000007e]'>buy now</button>   
                        </div>
                    </div>   
                </div>
                <div className='flex justify-start ml-28 text-left content-start items-start pt-6'>These following are the label about the plans.</div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default index
