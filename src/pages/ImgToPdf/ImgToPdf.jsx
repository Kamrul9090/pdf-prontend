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
        <div>
            <form action="">
                <div className='flex justify-around'>
                    <label for="images" class="drop-container">
                        <span class="drop-title">Drop files here</span>
                        or
                        <input className='' id='images' type="file" name='img' onChange={handleImg} />
                    </label>
                    <img id='showImg' src={img} alt="" srcset="" className='w-1/4 h-80' />
                </div>
                <button className='btn' onClick={pdfDown}>Img to PDF</button>
            </form>
        </div>
    );
};

export default ImgToPdf;