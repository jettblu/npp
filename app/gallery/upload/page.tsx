"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload",
  description:
    "Add a silly smile or a sweet shot to the No Parking Players's photo gallery.",
};

export default function Upload() {
  const [file, setFile] = useState(null);
  const [hasUploaded, setHasUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Upload failed. Please try again.");
  const [successMsg, setSuccessMsg] = useState<null | string>(null);
  function handleFileChange(e: any) {
    setFile(e.target.files[0]);
  }
  async function handleUpload() {
    if (!file) {
      setErrorMsg("Please select a file to upload.");
      setUploadSuccess(false);
      setHasUploaded(true);
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "npp_web_frontend");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    setHasUploaded(true);
    if (res.status === 200) {
      setSuccessMsg(
        "Upload successful! We will review your image and add it to the gallery soon."
      );
      setFile(null);
      setHasUploaded(true);
      setUploadSuccess(true);
    } else {
      setErrorMsg(
        "Upload failed. Please try again. Make sure your file is less than 10mb."
      );
      setUploadSuccess(false);
    }
    setUploading(false);
  }
  return (
    <div className="max-w-7xl pb-8 px-2 mx-auto">
      <div className="min-h-[8vh]" />
      <div className="mb-4 md:mb-8">
        <h1 className="text-3xl font-bold">Upload</h1>
        <p className="text-lg text-gray-600">
          Add a silly smile or a sweet shot to our photo gallery.
        </p>
        <Link
          href="/gallery"
          className="text-yellow-600 text-lg py-1 hover:brightness-105"
        >
          Back to Gallery
        </Link>
      </div>
      <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row relative">
        <div className="w-full h-[400px] md:w-1/2 md:h-[400px] bg-gray-400 rounded-md">
          {file && (
            <Image
              src={URL.createObjectURL(file)}
              alt="preview"
              className="rounded-md w-full h-full object-cover"
              width={200}
              height={200}
            />
          )}
        </div>
        <div className="w-full md:pl-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Select file
          </label>
          <div className="ring-1 ring-gray-500/50 rounded-md max-w-lg bg-gray-400/10">
            <input
              type="file"
              className="text-sm text-stone-500
                file:mr-2 file:py-1 file:px-3 file:border-0
                file:text-lg file:font-medium
                file:rounded-tl-md
                file:rounded-bl-md
                file:bg-stone-500/20 file:text-stone-700
                hover:file:cursor-pointer hover:file:bg-yellow-100
                transition file:duration-200"
              id="file_input"
              name="file"
              onChange={(e) => handleFileChange(e)}
            />
          </div>
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 10mb).
          </p>
          {/* upload button */}
          <button
            className="mt-4 px-4 py-2 text-lg font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            type="submit"
            onClick={() => handleUpload()}
          >
            Upload
          </button>
          {uploading && (
            <p className="mt-4 text-sm text-gray-500">Uploading...</p>
          )}
          {
            // upload success
            !uploading && hasUploaded && uploadSuccess && (
              <p className="mt-4 text-sm text-green-500">{successMsg}</p>
            )
          }
          {
            // upload error
            !uploading && hasUploaded && !uploadSuccess && (
              <p className="mt-4 text-sm text-red-500">{errorMsg}</p>
            )
          }
        </div>
      </div>
    </div>
  );
}
