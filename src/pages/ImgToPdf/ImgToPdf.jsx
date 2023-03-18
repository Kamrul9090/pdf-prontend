import jsPDF from 'jspdf';
import React from 'react';
import img from '../../assets/logo/Chicken Biryani.jpg'
import './style.css'
const ImgToPdf = () => {
    let showImg = ''
    let newImg = '';
    const handleImg = e => {
        showImg = document.getElementById('showImg');
        showImg.src = URL.createObjectURL(e.target.files[0])
        console.log(showImg);

        newImg = document.createElement('img');
        newImg.src = URL.createObjectURL(e.target.files[0])

        showImg.onload = function () {
            URL.revokeObjectURL(showImg.src)
        }
    }

    function pdfDown() {
        console.log(newImg);
        const doc = new jsPDF();
        doc.addImage(newImg, 10, 10);
        doc.save("imgToPdf.pdf");
    }

    return (
        <div className='text-center py-10'>
            <h1 className='text-3xl font-semibold'>Convert Image to PDF</h1>
            <div className='flex my-20 justify-around'>
                <label className="img-container">
                    <input class="" id='inputFile' type="file" name='img' onChange={handleImg} multiple />
                </label>
                <div className={`border-2 rounded-lg`}>
                    <img id='showImg' src={img} alt="" srcset="" className={`w-48 mx-auto rounded-lg`} />
                </div>
            </div>
            <button className="px-4 py-1 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800" onClick={pdfDown}>Image to PDF</button>
        </div>
    );
};

export default ImgToPdf;