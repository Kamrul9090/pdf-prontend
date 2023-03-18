import React from 'react';

const DocxToPdf = () => {
    return (
        <div>
            <h1>Docx To Pdf</h1>
            <form action="http://localhost:5000/docxtopdf" method='post' encType='multipart/form-data'>
                <input type="file" name='file' required id="" />
                <input type="submit" value="download to PDF" className='btn' />
            </form>
        </div>
    );
};

export default DocxToPdf;