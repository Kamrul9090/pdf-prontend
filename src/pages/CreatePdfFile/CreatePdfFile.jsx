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
                    <form onSubmit={handleSubmit(onSubmit)} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstname" className="text-sm">First name</label>
                                <input
                                    {...register('firstname', { required: true })}
                                    id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                {errors.firstname?.type === 'required' && <p role="alert">title is required</p>}
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="website" className="text-sm">Website</label>
                                <input
                                    {...register('image')}
                                    id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="message" className="text-sm">Bio</label>
                                <textarea
                                    {...register('message', { required: true })}
                                    type="text"
                                    id="message" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                                {errors.message?.type === 'required' && <p role="alert">message is required</p>}
                            </div>
                            <button type='submit' className='btn btn-sm'>submit</button>
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