"use client";
import React, { useState, useContext, useRef } from "react";

// nextjs specific
import { useRouter } from "next/navigation";

//  context
import { AlertContext, LoadingContext } from "../../lib/context";

// serverActions
import { pusblishBlog } from "../../lib/serverAction";
import { updateBlog } from "../../lib/serverAction";

// components
import Title from "@components/MakeBlog/Title";
import Description from "@components/MakeBlog/Description";
import Editor from "@components/MakeBlog/Editor";
import SubmitBtn from "@components/MakeBlog/SubmitBtn";
import SelectCategories from "@components/MakeBlog/SelectCategories";
import FrontImage from "@components/MakeBlog/FrontImage";
import ChangeImageBtn from "@components/MakeBlog/ChangeImageBtn";

export default function EditBlog({
  id,
  title,
  description,
  image,
  content,
  categories,
  authorId,
}) {
  const router = useRouter();

  //states
  const [selectedCategories, setSelectedCategories] = useState(
    categories ? categories : []
  );
  const [titleState, setTitleState] = useState(title);
  const [descriptionState, setDescriptionState] = useState(description);
  const [imageState, setImageState] = useState(image);

  //refs
  const editorRef = useRef(false);

  //context
  const { setShowAlert, setAlertMessage, setAlertStatus } =
    useContext(AlertContext);
  const { setIsLoading } = useContext(LoadingContext);

  async function submitFormHandler(e) {
    e.preventDefault();
    if (!imageState) {
      setShowAlert(true);
      setAlertMessage("Uploading front image is necessary");
      setAlertStatus("error");
      return;
    }
    const data = {};
    data.title = titleState;
    data.briefdescription = descriptionState;
    data.content = await editorRef?.current.save();
    data.image = imageState;
    data.categories = selectedCategories;
    data.authorId = authorId ? authorId : null;
    try {
      setIsLoading(true);
      const response = await (id ? updateBlog(data, id) : pusblishBlog(data));
      if (response.status) {
        //Incase of success
        setAlertStatus("success");
        router.push("/");
        setAlertMessage(response.message);
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
        <FrontImage imageState={imageState} setImageState={setImageState} />

        {/* Image change btn */}
        {id && <ChangeImageBtn setImageState={setImageState} />}

        {/* Editor Js */}
        <Editor editorRef={editorRef} blocks={content ? content.blocks : []} />
      </section>

      {/* Aside */}
      <aside className="max-w-3xl mx-auto col-span-10 lg:col-span-3 ">
        <SelectCategories
          handleCategoryChange={handleCategoryChange}
          selectedCategories={selectedCategories}
        />
        <SubmitBtn
          text={id ? "Update" : "Submit"}
          submitFormHandler={submitFormHandler}
        />
      </aside>
    </main>
  );
}
