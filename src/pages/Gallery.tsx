import React, { useEffect, useState } from 'react'
import GalleryHeader from '../components/GalleryHeader'
import ImageGallery from '../components/ImageGallery';
import useHandleFirebaseImages from '../hooks/useHandleFirebaseImages';
import ImageUploadCard from '../components/ImageUploadCard';
import Loading from '../components/Loading';

const Gallery = () => {
    const { uploadImages, deleteImages, images, loading } = useHandleFirebaseImages();
    const [imageList, setImageList] = useState<string[]>([]);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const handleCheckMark = (img: string) => {
        setSelectedImages((prevSelectedImages) => {
            if (prevSelectedImages.includes(img)) {
                return prevSelectedImages.filter((selected) => selected !== img);
            } else {
                return [...prevSelectedImages, img];
            }
        });
    };

    useEffect(() => {
        setImageList([
            ...images,
            ""
        ]);
    }, [images]);

    return (
        <div className='mx-5 mt-10 md:mx-12 lg:mx-20 bg-white rounded'>
            <GalleryHeader numberOfSelectedImages={selectedImages?.length} onClick={() => deleteImages(selectedImages)} />
            <div className='w-full h-[2px] bg-gray-200' />
            {images?.length > 0 ? <div className='p-5'>
                <ImageGallery images={imageList} setImages={setImageList} selectedImages={selectedImages} handleCheckMark={handleCheckMark} handleUploadImages={(files) => uploadImages(files)} />
            </div> : <div className='p-3'>
                <ImageUploadCard onFileSelect={(files) => uploadImages(files)} />
            </div>}
            {loading && <Loading />}
        </div>
    )
}

export default Gallery