import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PdfFile from './PdfFile';

const CreatePdfFile = () => {
    const [fileData, setNewFileData] = useState({})
    const { register, handleSubmit, watch, formState: { errors, isSubmitted } } = useForm();
    const onSubmit = data => {
        const file = {
            title: data.firstname,
            img: data.image,
            post: data.message
        }
        setNewFileData(file)
    }
    return (
        <>
            {!isSubmitted ?
                <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                    <form onSubmit={handleSubmit(onSubmit)} action="" className="w-3/4 flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                        <fieldset className=" grid grid-cols-3 gap-6 p-6 text-center rounded-md shadow-sm dark:bg-gray-900">
                            <div className="col-span-full sm:col-span-3 space-x-5">
                                <label for="firstname" className="text-sm">Title</label>
                                <input
                                    {...register('firstname', { required: true })}
                                    id="firstname" type="text" placeholder="title" className="w-3/4 rounded-md p-2 dark:border-gray-700 dark:text-gray-900 dark:text-white" />
                                {errors.firstname?.type === 'required' && <p role="alert">title is required</p>}
                            </div>
                            <div className="col-span-full sm:col-span-3 space-x-2">
                                <label for="website" className="text-sm">Image</label>
                                <input
                                    {...register('image')}
                                    id="website" type="text" placeholder="https://" className="w-3/4 rounded-md p-2 dark:text-gray-900 dark:text-white" />
                            </div>
                            <div className="col-span-full sm:col-span-3 space-x-10">
                                <label for="message" className="text-sm">Text</label>
                                <textarea
                                    {...register('message', { required: true })}
                                    type="text"
                                    id="message" placeholder="" className="w-3/4 h-24 rounded-md dark:border-gray-700 dark:text-gray-900 dark:text-white"></textarea>
                                {errors.message?.type === 'required' && <p role="alert">message is required</p>}
                                <button type='submit' className='btn btn-sm w-36'>submit</button>
                            </div>
                        </fieldset>
                    </form>
                </section >
                :
                <PdfFile fileData={fileData}></PdfFile>
            }
        </>
    );
};

export default CreatePdfFile;