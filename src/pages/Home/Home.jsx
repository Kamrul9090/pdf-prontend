import React from 'react';
import Navbar from '../../shared/Navbar';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import CreatePdfFile from '../CreatePdfFile/CreatePdfFile';
import DocxToPdf from '../DocxToPdf/DocxToPdf';
import ImgToPdf from '../ImgToPdf/ImgToPdf';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ImgToPdf></ImgToPdf>
            <DocxToPdf></DocxToPdf>
            <CreatePdfFile></CreatePdfFile>
        </div>
    );
};

export default Home;