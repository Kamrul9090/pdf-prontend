import React from 'react';
import pdf from '../../assets/banner/pdf.png'
import './banner.css'
const Banner = () => {
    return (
        <div className={`flex flex-col justify-center p-10 bg`}>
            <div>
                <img src={pdf} width={100} height={100} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl font-bold'>How to convert to PDF </h1>
                <ol className='text-lg'>
                    <li>1. Go to our converter.</li>
                    <li>2. Upload your file to our PDF converter.</li>
                    <li>3. Download image to PDF, DOCX to PDF and make a PDF use our converter</li>
                </ol>
            </div>
        </div>
    );
};

export default Banner;