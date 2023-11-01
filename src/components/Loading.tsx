import React from 'react'
import Lottie from 'react-lottie';
import LOADING from '../assets/Loading.json'

const Loading = () => {
    return (
        <div className='fixed z-[1000000] top-0 left-0 h-[100vh] w-[100vw] bg-white/10 backdrop-blur flex justify-center items-center'>
            <div className='h-[200px] md:h-[300px] w-[200px] md:w-[300px]'>
                <Lottie options={{
                    loop: true,
                    animationData: LOADING
                }} />
            </div>
        </div>
    )
}

export default Loading