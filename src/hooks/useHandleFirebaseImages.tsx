import { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage';
import app from '../config/firebaseConfig'; // Import the Firebase app instance

const useHandleFirebaseImages = () => {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const storage = getStorage(app); // Pass the app instance to getStorage

    const uploadImages = async (files: FileList | File[]) => {
        setLoading(true);

        try {
            const uploadPromises = Array.from(files).map(async (file) => {
                const storageRef = ref(storage, 'image_gallery/' + file.name);
                await uploadBytes(storageRef, file);
            });

            await Promise.all(uploadPromises);

            // After uploading images, refresh the list of images
            fetchImages();
        } catch (error) {
            console.error('Image upload error:', error);
        } finally {
            setLoading(false);
        }
    };

    const deleteImages = async (imageUrls: string[]) => {
        try {
            setLoading(true); // Set loading to true while deleting

            // Create an array of promises for deleting images
            const deletePromises = imageUrls.map(async (imageUrl) => {
                const imageRef = ref(storage, imageUrl);
                await deleteObject(imageRef);
            });

            // Wait for all delete operations to complete
            await Promise.all(deletePromises);

            // Refresh the list of images
            fetchImages();

        } catch (error) {
            console.error('Error deleting images:', error);
        } finally {
            setLoading(false); // Set loading back to false after deletion
        }
    };


    const fetchImages = async () => {
        setLoading(true);

        try {
            const storageRef = ref(storage, 'image_gallery');
            const imageRefs = await listAll(storageRef);
            const imageUrls = await Promise.all(
                imageRefs.items.map(async (item) => {
                    return getDownloadURL(item);
                })
            );
            setImages(imageUrls);
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch images on component mount
    useEffect(() => {
        fetchImages();
    }, []);

    return { uploadImages, deleteImages, images, loading };
};

export default useHandleFirebaseImages;
