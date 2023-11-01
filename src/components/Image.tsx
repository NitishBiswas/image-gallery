import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { AiOutlineCheck } from 'react-icons/ai';

interface IImageProps {
    image: string;
    index: number;
    selectedImages: string[];
    handleCheckMark: (img: string) => void;
    moveImage: (dragIndex: number, hoverIndex: number) => void;
    className?: string;
    style?: React.CSSProperties;
    onClick: () => void;
}

const Image: React.FC<IImageProps> = ({ image, index, selectedImages, handleCheckMark, moveImage, className, style, onClick }) => {

    const [{ isDragging }, drag] = useDrag({
        type: "IMAGE",
        item: { type: "IMAGE", index },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const [, drop] = useDrop({
        accept: "IMAGE",
        hover: (item: { type: string; index: number }, monitor) => {
            if (!item || index === item.index) {
                return;
            }
            moveImage(item.index, index);
            item.index = index;
        }
    });

    return (
        <div
            ref={(node) => drag(drop(node))}
            className={`${isDragging ? "opacity-50" : "opacity-100"} overflow-hidden relative p-3 ${className}`}
            style={style}
        >
            <div className="relative bg-gray-200">
                <img
                    src={image}
                    alt={`Image ${index}`}
                    className="h-full w-full"
                />
                <div className="absolute top-0 left-0 w-full h-full cursor-move group">
                    <div onClick={() => handleCheckMark(image)} className={`flex absolute z-10 top-5 left-5 h-6 w-6 justify-center items-center  ${selectedImages?.includes(image) ? "bg-[#2e5bfd]" : "bg-white hidden group-hover:flex"} cursor-pointer`}>
                        {selectedImages?.includes(image) && <AiOutlineCheck color="white" />}
                    </div>
                    <div onClick={onClick} className={`absolute top-0 left-0 w-full h-full cursor-move ${selectedImages?.includes(image) ? "bg-black opacity-40 transition-opacity" : "bg-black opacity-0 transition-opacity group-hover:opacity-50"}`} />
                </div>
            </div>
        </div>
    );
};

export default Image;
