import React, { useEffect } from "react";

const screenSizes = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

export type TScreenSize = keyof typeof screenSizes;

export interface IWindowSize {
    windowSize: number;
    isGreaterThan: (size: TScreenSize) => boolean;
    isLessThan: (size: TScreenSize) => boolean;
    isBetween: (min: TScreenSize, max: TScreenSize) => boolean;
    isBetweenOrEqual: (min: TScreenSize, max: TScreenSize) => boolean;
    isGreaterThanEqual: (size: TScreenSize) => boolean;
    isLessThanEqual: (size: TScreenSize) => boolean;
    isEqual: (size: TScreenSize) => boolean;
}

export default function useWindowSize(): IWindowSize {
    const [windowSize, setWindowSize] = React.useState(0);

    useEffect(() => {
        if (window) {
            setWindowSize(window.innerWidth);

            const handleResize = () => {
                setWindowSize(window.innerWidth);
            };

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    const isGreaterThan = (size: TScreenSize) => windowSize > screenSizes[size];

    const isLessThan = (size: TScreenSize) => windowSize < screenSizes[size];

    const isBetween = (min: TScreenSize, max: TScreenSize) =>
        windowSize > screenSizes[min] && windowSize < screenSizes[max];

    const isBetweenOrEqual = (min: TScreenSize, max: TScreenSize) =>
        windowSize >= screenSizes[min] && windowSize <= screenSizes[max];

    const isGreaterThanEqual = (size: TScreenSize) =>
        windowSize >= screenSizes[size];

    const isLessThanEqual = (size: TScreenSize) =>
        windowSize <= screenSizes[size];

    const isEqual = (size: TScreenSize) => windowSize === screenSizes[size];

    return {
        windowSize,
        isGreaterThan,
        isLessThan,
        isBetween,
        isBetweenOrEqual,
        isGreaterThanEqual,
        isLessThanEqual,
        isEqual,
    };
}