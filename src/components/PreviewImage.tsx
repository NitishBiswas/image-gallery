import React from 'react'

interface IpreviewImage {
    image: string;
    setIsOpenImage: (open: boolean) => void;
}

const PreviewImage = ({ image, setIsOpenImage }: IpreviewImage) => {
    return (
        <div className='fixed z-[1000000] top-0 left-0 h-[100vh] w-[100vw] bg-white/10 backdrop-blur flex justify-center items-center'>
            <div onClick={() => setIsOpenImage(false)} className='absolute top-10 right-10 cursor-pointer text-2xl bg-red-500 hover:scale-105 duration-500 transition-all text-white rounded-full py-[0.4rem] px-4'>X</div>
            <img src={image} alt='preview image' className='max-h-[100vh]' />
        </div>
    )
}

export default PreviewImage