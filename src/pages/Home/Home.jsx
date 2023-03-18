import React from 'react';
import Banner from '../Banner/Banner';
import CreatePdfFile from '../CreatePdfFile/CreatePdfFile';
import DocxToPdf from '../DocxToPdf/DocxToPdf';
import ImgToPdf from '../ImgToPdf/ImgToPdf';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImgToPdf></ImgToPdf>
            <DocxToPdf></DocxToPdf>
            <CreatePdfFile></CreatePdfFile>
        </div>
    );
};

export default Home;