// custom.d.ts
declare module 'cloudinary' {
    export interface CloudinaryConfig {
        cloud_name: string;
        api_key: string;
        api_secret: string;
    }

    export interface CloudinaryUploader {
        upload(file: File | string, options: object): Promise<any>;
    }

    export const config: (config: CloudinaryConfig) => void;
    export const uploader: CloudinaryUploader;
    export const api: CloudinaryAPI;
}

