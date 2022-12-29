import React from 'react';

const PropertyInfo = () => {
    return (
        <div className="bg-red-600 md:py-16 py-8 lg:px-42 flex justify-center">
            <div className='md:flex flex-row justify-between md:gap-4 md:w-5/6 w-full text-white'>


                <div className='md:my-0 my-4'>
                    <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold'>
                        3,780 new properties
                    </h2>
                    <p className='text-xl'>
                        added within the last 30 days
                    </p>
                </div>
                <div className='md:my-0 my-4'>
                    <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold'>
                        978,098 other people
                    </h2>
                    <p className='text-xl'>
                        have used our website within the last 30 days
                    </p>
                </div>
                <div className='md:my-0 my-4'>
                    <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold'>
                        Customer support
                    </h2>
                    <p className='text-xl'>
                        we are ready to help you all week days <br />
                        from 10AM TO 4PM CET
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PropertyInfo;