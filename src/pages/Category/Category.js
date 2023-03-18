import React from 'react';
import { Link } from 'react-router-dom';
import iconDocx from '../../assets/icons/docx.png'
import iconPdf from '../../assets/icons/pdf.png'
import iconText from '../../assets/icons/text.png'
const Category = () => {
    return (
        <div className="flex justify-around max-w-5xl mx-auto bg-red-400 p-2 rounded text-black">
            <Link>
                <div className="w-36 text-center p-4 rounded-xl cursor-pointer border-2 bg-gray-200">
                    <img src={iconPdf} className="mx-auto" />
                    <p>Image to PDF</p>
                </div>
            </Link>
            <div className="w-36 text-center p-4 rounded-xl cursor-pointer border-2 bg-gray-200">
                <img src={iconDocx} className="mx-auto" />
                <p>DOCX to PDF</p>
            </div>
            <div className="w-36 text-center p-4 rounded-xl cursor-pointer border-2 bg-gray-200">
                <img src={iconText} className="mx-auto" />
                <p>Make PDF File</p>
            </div>
        </div>
    );
};

export default Category;