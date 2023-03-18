import React, { createRef, useState } from 'react';
import ReactToPdf from "react-to-pdf"
const ref = createRef();
const PdfFile = ({ fileData }) => {

    const { title, img, post } = fileData;
    return (
        <div className='max-w-5xl mx-auto py-20 px-5 text-center'>
            <div ref={ref} className="p-5 w-1/2 mx-auto space-y-5">
                <h1 className='border-2'>{title}</h1>
                <img src={img} alt="" srcset="" />
                <p>{post}</p>
            </div>
            <ReactToPdf targetRef={ref} filename="file.pdf">
                {({ toPdf }) => (
                    <button className='px-10 py-2 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800' onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
        </div>
    );
};

export default PdfFile;