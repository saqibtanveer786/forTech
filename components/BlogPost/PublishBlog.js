"use client";
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";

import EditorJS from "@editorjs/editorjs"; //?

import TextareaAutosize from "react-textarea-autosize";

// Importing context
import { AlertContext, LoadingContext } from "../../lib/context";

// Importing serverActions
import { pusblishBlog } from "../../lib/serverAction";

// uploadthing
import { UploadDropzone } from "@uploadthing/react";
import { uploadFiles } from "../../lib/uploadthings";

// nextjs specific
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

export default function PublishBlog({ authorId }) {
  const router = useRouter();
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // refs here
  const titleRef = useRef();
  const descriptionRef = useRef();
  const editorRef = useRef(false);
  const imageRef = useRef();
  // consuming context
  const { setShowAlert, setAlertMessage, setAlertStatus } =
    useContext(AlertContext);
  const { setIsLoading } = useContext(LoadingContext);

  // function to initialize editor
  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const ImageTool = (await import("@editorjs/image")).default;
    const RawTool = (await import("@editorjs/raw")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const Checklist = (await import("@editorjs/checklist")).default;
    const List = (await import("@editorjs/list")).default;
    const Quote = (await import("@editorjs/quote")).default;
    const CodeTool = (await import("@editorjs/code")).default;
    // initializing editorjs
    if (!editorRef.current) {
      let editor = new EditorJS({
        holder: "editorjs",
        onReady: () => {
          editorRef.current = editor;
        },
        placeholder: "Tab here to start",
        autofocus: true,
        inlineToolbar: true,
        data: { blocks: [] },
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: "Enter a header",
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 1,
            },
            inlineToolbar: true,
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                async uploadByFile(file) {
                  const [res] = await uploadFiles({
                    files: [file],
                    endpoint: "imageUploader",
                  });
                  return {
                    success: 1,
                    file: {
                      url: res.url,
                    },
                  };
                },
              },
            },
          },
          raw: {
            class: RawTool,
            inlineToolbar: true,
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
              },
            },
          },
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: "unordered",
            },
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
              quotePlaceholder: "Enter a quote",
              captionPlaceholder: "Quote's author",
            },
          },
          code: {
            class: CodeTool,
            placeholder: "Code",
          },
        },
      });
    }
  }, []);

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

  // Function for resetting input fields
  function resetInputFields() {}

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initializeEditor();

      return () => {
        editorRef.current?.destroy();
        editorRef.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <section className=" max-w-3xl mx-auto">
        {/* Title */}
        <div className="prose prose-stone sm:px-9 px-2">
          <TextareaAutosize
            ref={(e) => {
              titleRef.current = e;
            }}
            placeholder="Title"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
          />
        </div>

        {/* Description */}
        <div className="prose prose-stone sm:px-9 px-2">
          <TextareaAutosize
            ref={(e) => {
              descriptionRef.current = e;
            }}
            placeholder="Meta Description"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-lg font-bold focus:outline-none"
          />
        </div>

        {/* Front Image */}
        <div className="max-w-7xl grid place-items-center">
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setIsImageUploaded(true);
              imageRef.current = res[0].url;
              console.log(imageRef.current);
            }}
            onUploadError={(error) => {
              alert(`ERROR! ${error}`);
            }}
            className={`w-[700px] ${isImageUploaded ? "hidden" : ""}`}
          />
          <Image
            src={imageRef.current || "/img/general.webp"}
            alt="Image"
            width={700}
            height={700}
            className={`mb-3 ${isImageUploaded ? "" : "hidden"}`}
          />
        </div>

        {/* Editor Js */}
        <div id="editorjs" className="sm:w-[100%] w-[100%] mx-auto mb-2"></div>

        {/* Submit Button */}
        <div className="flex justify-end my-4">
          <button
            onClick={submitFormHandler}
            type="submit"
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:outline-none `}
          >
            Publish
          </button>
        </div>
      </section>
    </>
  );
}
