import React, { createRef, useState } from 'react';
import ReactToPdf from "react-to-pdf"
const ref = createRef();
const PdfFile = ({ fileData }) => {

    const { title, img, post } = fileData;
    return (
        <>
            <div ref={ref} className="p-5">
                <h1>{title}</h1>
                <img src={img} alt="" srcset="" />
                <p>{post}</p>
            </div>
            <ReactToPdf targetRef={ref} filename="file.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
        </>
    );
};

export default PdfFile;