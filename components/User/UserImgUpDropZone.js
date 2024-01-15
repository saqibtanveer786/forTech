"use client"
import React from 'react'
import { UploadDropzone } from "@uploadthing/react";

export default function UserImgUpDropZone() {
    return (
        <>
            <UploadDropzone
                className={'border-2 border-primary py-4 my-4'}
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    console.log("Files: ", res);
                    alert("Upload Completed");
                }}
                onUploadError={(error) => {
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </>
    )
}
