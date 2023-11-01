import React from 'react'
import { BsFillCheckSquareFill } from 'react-icons/bs';

export interface IGalleryHeader {
    title?: string;
    numberOfSelectedImages?: number;
    onClick?: () => void;
}

const GalleryHeader = ({ title = "Gallery", numberOfSelectedImages = 0, onClick }: IGalleryHeader) => {
    return (
        <div className='p-5'>
            {numberOfSelectedImages === 0 ? <div>
                <div className='text-lg md:text-2xl font-bold'>{title}</div>
            </div> : <div className='flex flex-row gap-5 justify-between items-center'>
                <div className='text-lg md:text-2xl font-bold flex gap-3 items-center'>
                    <BsFillCheckSquareFill color="#2c5aff" />
                    <div>{numberOfSelectedImages} {numberOfSelectedImages > 1 ? "Files" : "File"} Selected</div>
                </div>
                <div onClick={onClick} className='text-red-600 hover:underline cursor-pointer hover:scale-105 duration-500'>Delete {numberOfSelectedImages > 1 ? "files" : "file"}</div>
            </div>}
        </div>
    )
}

export default GalleryHeader