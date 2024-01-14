"use client";
import React, { useState, useContext, useRef } from "react";
import { useRouter } from "next/navigation";

// Importing context
import { AlertContext, LoadingContext } from "../../lib/context";

// Importing serverActions
import { pusblishBlog } from "../../lib/serverAction";

// nextjs specific
import SelectCategories from "@components/MakeBlog/SelectCategories";
import Title from "@components/MakeBlog/Title";
import Description from "@components/MakeBlog/Description";
import FrontImage from "@components/MakeBlog/FrontImage";
import SubmitBtn from "@components/MakeBlog/SubmitBtn";
import Editor from "@components/MakeBlog/Editor";

export default function PublishBlog({ authorId }) {
  const router = useRouter();

  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [titleState, setTitleState] = useState();
  const [descriptionState, setDescriptionState] = useState();
  const [imageState, setImageState] = useState();

  // refs here
  const titleRef = useRef();
  const descriptionRef = useRef();
  const editorRef = useRef(false);
  const imageRef = useRef();
  // consuming context
  const { setShowAlert, setAlertMessage, setAlertStatus } =
    useContext(AlertContext);
  const { setIsLoading } = useContext(LoadingContext);

  // main function to submit blogs( this function calls the server action and handle loading, alerts etc )
  async function submitFormHandler(e) {
    e.preventDefault();
    if (!isImageUploaded) {
      setShowAlert(true);
      setAlertMessage("Uploading front image is necessary");
      setAlertStatus("error");
      return;
    }
    const data = {};
    data.title = titleRef.current?.value;
    data.briefdescription = descriptionRef.current?.value;
    data.content = await editorRef?.current.save();
    data.image = imageRef.current;
    data.authorId = authorId;
    data.categories = selectedCategories;
    try {
      setIsLoading(true);
      const response = await pusblishBlog(data);
      if (response.status) {
        //Incase of success
        setAlertStatus("success");
        setAlertMessage(response.message);
        resetInputFields();
        router.push("/");
      }
      if (!response.status) {
        //Incase of error
        setAlertStatus("error");
        setAlertMessage(response.message);
      }
    } catch (error) {
      console.log(error);
      setAlertStatus("error");
      setAlertMessage("Something went wrong");
    } finally {
      setIsLoading(false);
      setShowAlert(true);
    }
  }

  const handleCategoryChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(selectedOption)) {
        return prevCategories.filter((category) => category !== selectedOption);
      } else {
        return [...prevCategories, selectedOption];
      }
    });
    console.log(selectedCategories);
  };

  return (
    <main className="grid lg:grid-cols-10">
      <section className=" max-w-3xl mx-auto flex-1 lg:col-span-7">
        {/* Title */}
        <Title titleState={titleState} setTitleState={setTitleState} />

        {/* Description */}
        <Description
          descriptionState={descriptionState}
          setDescriptionState={setDescriptionState}
        />

        {/* Front Image */}
        <FrontImage
          imageRef={imageRef}
          setIsImageUploaded={setIsImageUploaded}
          isImageUploaded={isImageUploaded}
        />

        {/* Editor Js */}
        <Editor editorRef={editorRef} />
      </section>

      {/* Aside */}
      <aside className="max-w-3xl mx-auto col-span-10 lg:col-span-3 ">
        <SelectCategories
          handleCategoryChange={handleCategoryChange}
          selectedCategories={selectedCategories}
        />
        {/* Submit Button */}
        <SubmitBtn text="Submit" submitFormHandler={submitFormHandler} />
      </aside>
    </main>
  );
}
