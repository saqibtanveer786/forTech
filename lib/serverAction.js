"use server"

import Router from "next/navigation"

// Get all blogs
export async function getBlogs() {
    try {
        const response = await fetch(`http://localhost:3000/api/blogs`, {
            cache: 'no-cache',
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const jsonResponse = await response.json()
        return jsonResponse.posts
    } catch (error) {
        console.log(error)
        throw new Error("Error while fetching blogs. Error message is :" + error.message)
    }
}

// Get a single blog
export async function getBlog(id) {
    try {
        const response = await fetch(
            `http://localhost:3000/api/getblog?id=${id}`,
            {
                cache: 'no-store',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const jsonResponse = await response.json();
        return jsonResponse.data;
    } catch (error) {
        console.log(error)
        throw new Error(`Error while fetching the blog with id: ${id}. Error message is :` + error.message)
    }
}

// Publish a blog
export async function pusblishBlog(data, content) {
    try {
        data.content = content
        const url = 'http://localhost:3000/api/addblog';
        const response = await fetch(url, {
            cache: 'no-cache',
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const jsonresponse = await response.json();

        return jsonresponse
    } catch (error) {
        console.log(error)
        return { message: "An Unexpected Error Occured While Making Request To Add The Blog", status: false }
    }
}

// Deleting blog
export async function deletePost(id) {
    try {
        console.log(id)
        const url = `http://localhost:3000/api/deleteblog?id=${id}`;
        const response = await fetch(url, {
            cache: 'no-cache',
            method: 'delete',
            headers: {
                'content-type': 'application/json',
            },
        });

        const jsonresponse = await response.json();

        return jsonresponse
    } catch (error) {
        console.log(error)
        return { message: "An Unexpected Error Occured While Making Request To Delete The Blog", status: false }
    }
}

// Submit form
export async function submitForm(data) {
    try {
        const url = 'http://localhost:3000/api/contact';
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const jsonResponse = await response.json();
    } catch (error) {
        console.log(error)
        return { message: "An Unexpected Error Occured While Making Request To Submit The Form", status: false }
    }
};
