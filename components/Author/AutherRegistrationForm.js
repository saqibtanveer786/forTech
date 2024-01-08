"use client";
import React, { useState, useRef, useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { registerAuther } from "../../lib/serverAction";
import { AlertContext, LoadingContext } from "../../lib/context";
import { useRouter } from "next/navigation";

export default function AutherRegistrationForm({ userId }) {
  const router = useRouter();
  const [skills, setSkills] = useState([]);
  const [infoData, setInfoData] = useState({
    id: userId,
    birthDate: "2023-10-12T05:51",
  });
  const [socialLinks, setSocialLinks] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});

  // consuming context
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const {
    showAlert,
    setShowAlert,
    alertMessage,
    setAlertMessage,
    alertStatus,
    setAlertStatus,
  } = useContext(AlertContext);

  function infoChangeHandler(target) {
    setInfoData((previous) => {
      return { ...previous, [target.name]: target.value };
    });
  }
  function socialLinksChangeHandler(target) {
    setSocialLinks((previous) => {
      return { ...previous, [target.name]: target.value };
    });
  }
  function eduChangeHandler(target) {
    setEducationData((previous) => {
      return { ...previous, [target.name]: target.value };
    });
  }
  function expChangeHandler(target) {
    setExperienceData((previous) => {
      return { ...previous, [target.name]: target.value };
    });
  }
  async function submitHandler() {
    try {
      let data = {};
      if (!infoData || !educationData) return;
      data.infoData = infoData;
      if (socialLinks) data.socialLinks = socialLinks;
      if (skills) data.skills = skills;
      data.educationData = educationData;
      data.experienceData = experienceData;

      setIsLoading(true);
      const response = await registerAuther(data, userId);
      if (response.status === "success") router.push("/");

      setAlertMessage(response.message);
      setAlertStatus(response.status);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-13 xl:px-0">
      <div className="grid grid-cols-5 gap-8">
        {/* Personal Info Section */}
        <div className="col-span-5 xl:col-span-3 mt-4">
          <div className="rounded-sm border border-stroke bg-white shadow-default ">
            {/* Heading */}
            <div className="border-b border-stroke py-4 px-7">
              <h3 className="font-medium text-black">Personal Information</h3>
            </div>
            <div className="p-7">
              {/* Info Form */}
              <form action="#">
                {/* idCard and Number */}
                <div className="mb-5.5 flex flex-row flex-wrap sm:flex-nowrap gap-5.5">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black"
                      htmlFor="idcard"
                    >
                      ID Card
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                        type="number"
                        name="idcard"
                        onChange={(e) => {
                          e.preventDefault();
                          infoChangeHandler(e.target);
                        }}
                        placeholder="13301-111123-9"
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                      type="number"
                      name="phone"
                      onChange={(e) => {
                        e.preventDefault();
                        infoChangeHandler(e.target);
                      }}
                      placeholder="+990 3343 7865"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black"
                    htmlFor="location"
                  >
                    Address
                  </label>
                  <div className="">
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                      type="email"
                      name="location"
                      onChange={(e) => {
                        e.preventDefault();
                        infoChangeHandler(e.target);
                      }}
                      placeholder="kpk pakistan haripur"
                    />
                  </div>
                </div>

                {/* Birth Date */}
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black"
                    htmlFor="birthDate"
                  >
                    Birth Date
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                    type="number"
                    name="birthDate"
                    onChange={(e) => {
                      e.preventDefault();
                      infoChangeHandler(e.target);
                    }}
                    placeholder="15-07-2010"
                  />
                </div>

                {/* Website */}
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black"
                    htmlFor="website"
                  >
                    Website
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                    type="url"
                    name="website"
                    onChange={(e) => {
                      e.preventDefault();
                      infoChangeHandler(e.target);
                    }}
                    placeholder="https://www.example.com"
                  />
                </div>

                {/* Skills */}
                <div className="mb-5.5">
                  <ul className="py-2">
                    {skills &&
                      skills.map((item, i) => {
                        return (
                          <li
                            key={i}
                            id={i}
                            className="relative border px-2 py-3 my-2 "
                          >
                            {item}
                            <span className="absolute right-4 top-[7px]">
                              <button
                                className="text-red-600 py-1 px-2"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const updatedLinks = skills.filter((li) => {
                                    const valueToDelete = document
                                      .getElementById(i)
                                      .innerHTML.split("<")[0];
                                    console.log(
                                      "valueToDelete",
                                      valueToDelete,
                                      li
                                    );

                                    return li !== valueToDelete;
                                  });
                                  setSkills(updatedLinks);
                                }}
                              >
                                remove
                              </button>
                            </span>
                          </li>
                        );
                      })}
                  </ul>
                  <label
                    className="mb-3 block text-sm font-medium text-black"
                    htmlFor="skills"
                  >
                    Skills
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                    id="skills"
                    type="text"
                    name="skills"
                    placeholder="web development"
                  />
                  <button
                    className="bg-blue-600 rounded-md py-1 px-4 text-white my-2"
                    onClick={(e) => {
                      e.preventDefault();
                      const valueToAppend =
                        document.getElementById("skills").value;
                      setSkills((previous) => [...previous, valueToAppend]);
                      document.getElementById("skills").value = "";
                    }}
                  >
                    add
                  </button>
                </div>

                {/* Social Links */}
                <div className="mb-5.5">
                  <label className="mb-3 block text-sm font-medium text-black">
                    Social Links
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none my-2"
                    type="text"
                    name="facebook"
                    onChange={(e) => {
                      e.preventDefault();
                      socialLinksChangeHandler(e.target);
                    }}
                    placeholder="saqibtanveer.facebook.com"
                  />
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none my-2"
                    type="text"
                    name="twitter"
                    onChange={(e) => {
                      e.preventDefault();
                      socialLinksChangeHandler(e.target);
                    }}
                    placeholder="saqibtanveer.twitter.com"
                  />
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none my-2"
                    type="text"
                    name="linkdin"
                    onChange={(e) => {
                      e.preventDefault();
                      socialLinksChangeHandler(e.target);
                    }}
                    placeholder="saqibtanveer.linkdin.com"
                  />
                </div>

                {/* Bio */}
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black"
                    htmlFor="bio"
                  >
                    BIO
                  </label>
                  <div className="relative">
                    <span className="absolute left-4.5 top-4">
                      <BiEdit size={20} className="fill-current" />
                    </span>

                    <textarea
                      className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none "
                      name="bio"
                      rows={6}
                      onChange={(e) => {
                        e.preventDefault();
                        infoChangeHandler(e.target);
                      }}
                      placeholder="Write your bio here"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Education and Experience Section */}
        <div className="col-span-5 xl:col-span-2">
          {/* Education Section */}
          <div className="rounded-sm border border-stroke bg-white shadow-default my-4">
            <div className="border-b border-stroke py-4 px-7">
              <h3 className="font-medium text-black">Education</h3>
            </div>
            <div className="p-7">
              <form action="#">
                {/* Institude */}
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black"
                    htmlFor="institution"
                  >
                    Institude
                  </label>
                  <div className="">
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="institution"
                      onChange={(e) => {
                        e.preventDefault();
                        eduChangeHandler(e.target);
                      }}
                      placeholder="GPGC Haripur"
                    />
                  </div>
                </div>

                {/* Field */}
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black"
                    htmlFor="field"
                  >
                    Field
                  </label>
                  <div className="">
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                      type="text"
                      name="field"
                      onChange={(e) => {
                        e.preventDefault();
                        eduChangeHandler(e.target);
                      }}
                      placeholder="BS Computer Science"
                    />
                  </div>
                </div>

                {/* Degree */}
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black"
                    htmlFor="degree"
                  >
                    Degree
                  </label>
                  <div className="">
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                      type="text"
                      name="degree"
                      onChange={(e) => {
                        e.preventDefault();
                        eduChangeHandler(e.target);
                      }}
                      placeholder="Bachelar"
                    />
                  </div>
                </div>

                {/* Start End Year */}
                <div className="mb-5.5 flex flex-row flex-wrap sm:flex-nowrap gap-5.5">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black"
                      htmlFor="startYear"
                    >
                      Start Year
                    </label>
                    <div className="">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                        type="number"
                        name="startYear"
                        onChange={(e) => {
                          e.preventDefault();
                          eduChangeHandler(e.target);
                        }}
                        placeholder="2015"
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black"
                      htmlFor="endYear"
                    >
                      End Year
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                      type="number"
                      name="endYear"
                      onChange={(e) => {
                        e.preventDefault();
                        eduChangeHandler(e.target);
                      }}
                      placeholder="2020"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Experience Section */}
          <div className="rounded-sm border border-stroke bg-white shadow-default my-4">
            <div className="border-b border-stroke py-4 px-7">
              <h3 className="font-medium text-black">Experience</h3>
            </div>
            <div className="p-7">
              <form action="#">
                {/* Company */}
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black"
                    htmlFor="company"
                  >
                    Company
                  </label>
                  <div className="">
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="company"
                      onChange={(e) => {
                        e.preventDefault();
                        expChangeHandler(e.target);
                      }}
                      placeholder="codeicon"
                    />
                  </div>
                </div>

                {/* Position */}
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black"
                    htmlFor="position"
                  >
                    Position
                  </label>
                  <div className="">
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                      type="text"
                      name="position"
                      onChange={(e) => {
                        e.preventDefault();
                        expChangeHandler(e.target);
                      }}
                      placeholder="Project Manager"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <div className="">
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                      type="text"
                      name="description"
                      onChange={(e) => {
                        e.preventDefault();
                        expChangeHandler(e.target);
                      }}
                      placeholder="Description"
                    />
                  </div>
                </div>

                {/* Start End Year */}
                <div className="mb-5.5 flex flex-row flex-wrap sm:flex-nowrap gap-5.5">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black"
                      htmlFor="startDate"
                    >
                      Start Year
                    </label>
                    <div className="">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                        type="number"
                        name="startDate"
                        onChange={(e) => {
                          e.preventDefault();
                          expChangeHandler(e.target);
                        }}
                        placeholder="2015"
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black"
                      htmlFor="endDate"
                    >
                      End Year
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                      type="number"
                      name="endDate"
                      onChange={(e) => {
                        e.preventDefault();
                        expChangeHandler(e.target);
                      }}
                      placeholder="2020"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-start gap-4.5 pb-8">
        <button
          className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-95"
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
