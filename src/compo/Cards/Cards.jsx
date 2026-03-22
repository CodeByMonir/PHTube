import React from 'react';



const Cards = () => {
    return (
        <div>
            <div className='w-78 h-81.25'>
                <div className='relative '>
                    <img className='w-78 h-50 rounded-md' src="" alt="" />
                    <div className='absolute right-4 bottom-4'>
                        <p className='bg-black text-white text-[10px] p-1'>Duration</p>
                    </div>
                </div>
                <div className='flex gap-3 my-5'>
                    <img className='w-10 h-10 rounded-full overflow-hidden' src="" alt="" />
                    <div>
                        <h1 className='text-[#171717] font-bold leading-6.5'></h1>
                        <div className='flex gap-2.5'>
                            <p className='text-[#17171770] text-3.5'></p>
                            <img className='h-5 w-5 rounded-full overflow-hidden' src="" alt="" />
                        </div>
                        <p className='text-[#17171770] text-3.5'></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;