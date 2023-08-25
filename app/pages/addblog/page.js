'use client';
import React, { useState } from 'react';
// Importing CSS File
import styles from '../../pagesStyles/addblog.module.css';

export default function page() {
  const [data, setData] = useState();

  function getValues(e) {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  async function pusblishBlog() {
    const url = 'http://localhost:3000/api/addblog';
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const jsonresponse = await response.json();
    console.log(jsonresponse);
  }

  return (
    <>
      <section className={styles.addBlogSection}>
        <h1>Add a blog</h1>
        <form action="" method="post">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter the title here"
            onChange={getValues}
          />
          <input
            type="text"
            name="metaData"
            id="metaData"
            placeholder="Enter the short description here"
            onChange={getValues}
          />
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="Enter the main content here"
            onChange={getValues}
          />
          <input
            type="text"
            name="slug"
            id="slug"
            placeholder="Enter the slug here"
            onChange={getValues}
          />
          <input
            type="button"
            value="Publish"
            className={styles.publishButton}
            onClick={pusblishBlog}
          />
        </form>
      </section>
    </>
  );
}
