import React, { useRef } from 'react';
import { BiImageAdd } from 'react-icons/bi';

const ImageUploadCard = ({ className, onFileSelect }: { className?: string, onFileSelect: (files: FileList) => void }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileSelect = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFilesChosen = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if (files && files.length > 0) {
            onFileSelect(files);
        }
    };

    return (
        <div
            className={`w-full h-full flex flex-col gap-5 p-5 text-xs sm:text-sm lg:text-xl font-semibold text-center cursor-pointer hover:opacity-50 duration-500 items-center justify-center border-2 border-dashed rounded-lg ${className}`}
            onClick={handleFileSelect}
        >
            <BiImageAdd />
            Add Images
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                multiple
                onChange={handleFilesChosen}
            />
        </div>
    );
}

export default ImageUploadCard;
