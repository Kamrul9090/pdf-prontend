import React from 'react';
import './docs.css'
const DocxToPdf = () => {
    return (
        <div className='text-center py-10'>
            <h1 className='text-3xl font-semibold'>Convert DOCX To PDF</h1>
            <form action="https://backend-iota-sable.vercel.app/docxtopdf" method='post' encType='multipart/form-data'>
                <div className='flex my-20 justify-center'>
                    <label className="docx-container">
                        <input type="file" id='#inputDox' name='file' required />
                    </label>
                </div>
                <button className="px-4 py-1 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">DOCX to PDF</button>
            </form>
        </div>
    );
};

export default DocxToPdf;