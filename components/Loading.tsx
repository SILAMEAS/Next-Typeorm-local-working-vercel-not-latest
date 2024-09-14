import React from 'react';
export const loadingSpin = <div
    className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin border-top-color:transparent"></div>
export const Loading = ({textLoading="loading profile ..."}:{textLoading?:string}) => {
    return <div className='flex items-center justify-center min-h-screen z-40'>
                    {loadingSpin}
                <p className="ml-2">{textLoading}</p>
            </div>
            };
