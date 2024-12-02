import React from "react";

const TimelinePoint = ({ year, text, isLast }) => {
    return (
        <div className="relative group mb-6 last:mb-0">
            <div className="bg-pink-500 rounded-full w-6 h-6 group-hover:scale-110 transition-transform"></div>
            <div className="absolute left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-md shadow-md">
                <p className="text-sm text-gray-600">{year}</p>
                <p className="text-xs">{text}</p>
            </div>
            {!isLast && <div className="w-1 h-10 bg-pink-500 mt-2"></div>}
        </div>
    );
};

export default TimelinePoint;
