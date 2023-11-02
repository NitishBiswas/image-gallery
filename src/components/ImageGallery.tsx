import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Image from "./Image";
import ImageUploadCard from "./ImageUploadCard";
import useWindowSize from "../hooks/useWindowSize";
import PreviewImage from "./PreviewImage";

interface IImageGalleryProps {
    images: string[];
    setImages: (images: string[]) => void;
    selectedImages: string[];
    handleCheckMark: (img: string) => void;
    handleUploadImages: (files: FileList | File[]) => void;
}

const ImageGallery = ({ images, setImages, selectedImages, handleCheckMark, handleUploadImages }: IImageGalleryProps) => {
    const { isGreaterThan } = useWindowSize();
    const [isOpenImage, setIsOpenImage] = useState(false);
    const [previewImage, setPreviewImage] = useState("");

    const moveImage = (dragIndex: number, hoverIndex: number) => {
        const draggedImage = images[dragIndex];

        const newImages = [...images];
        newImages.splice(dragIndex, 1);
        newImages.splice(hoverIndex, 0, draggedImage);

        setImages(newImages);
    };

    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-[50%] lg:w-[40%] h-full">
                        <Image
                            index={0}
                            image={images[0]}
                            selectedImages={selectedImages}
                            handleCheckMark={handleCheckMark}
                            moveImage={moveImage}
                            className="w-full h-[400px]"
                            onClick={() => {
                                setPreviewImage(images[0]);
                                setIsOpenImage(true)
                            }}
                        />
                    </div>
                    <div
                        className="flex flex-row flex-wrap w-full sm:w-[50%] lg:w-[60%]"
                    >
                        {images?.slice(1, isGreaterThan('lg') ? 7 : 5)?.map((image, index) => {
                            if (image !== '') {
                                return (
                                    <Image
                                        key={1 + index}
                                        index={1 + index}
                                        image={image}
                                        selectedImages={selectedImages}
                                        handleCheckMark={handleCheckMark}
                                        moveImage={moveImage}
                                        className={`w-[50%] lg:w-[33.33%] h-[200px]`}
                                        onClick={() => {
                                            setPreviewImage(image);
                                            setIsOpenImage(true)
                                        }}
                                    />
                                )
                            } else {
                                return (
                                    <div key={index + images?.slice(1, isGreaterThan('lg') ? 7 : 5)?.length} className={`w-[50%] lg:w-[33.33%] p-3  h-[200px]`}>
                                        <ImageUploadCard onFileSelect={(files) => handleUploadImages(files)} />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div
                    className="flex flex-row flex-wrap w-full"
                >
                    {images?.slice(isGreaterThan('lg') ? 7 : 5, images?.length)?.map((image, index) => {
                        if (image !== '') {
                            return (
                                <Image
                                    key={1 + index + images?.slice(1, 5)?.length}
                                    index={1 + index + images?.slice(1, 5)?.length}
                                    image={image}
                                    selectedImages={selectedImages}
                                    handleCheckMark={handleCheckMark}
                                    moveImage={moveImage}
                                    className="w-[50%] sm:w-[25%] lg:w-[20%]  h-[200px]"
                                    onClick={() => {
                                        setPreviewImage(image);
                                        setIsOpenImage(true)
                                    }}
                                />
                            )
                        } else {
                            return (
                                <div key={index + images?.slice(isGreaterThan('lg') ? 7 : 5, images?.length)?.length} className={`w-[50%] sm:w-[25%] lg:w-[20%] p-3  h-[200px]`}>
                                    <ImageUploadCard onFileSelect={(files) => handleUploadImages(files)} />
                                </div>
                            )
                        }
                    })}
                </div>
            </DndProvider>
            {(isOpenImage && previewImage) && <PreviewImage image={previewImage} setIsOpenImage={setIsOpenImage} />}
        </div>
    );
};

export default ImageGallery;
