"use server"

import { revalidateTag } from "next/cache"
import Router from "next/navigation"

// Get all blogs
export async function getBlogs() {
    try {
        const response = await fetch(`https://fortech-alpha.vercel.app/api/blogs`, {
            next: {
                tags: ["allBlogs"]
            },
            cache: "force-cache",
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
            `https://fortech-alpha.vercel.app/api/getblog?id=${id}`,
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
        const url = 'https://fortech-alpha.vercel.app/api/addblog';
        const response = await fetch(url, {
            cache: 'no-cache',
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const jsonresponse = await response.json();

        // Revalidating on response.ok and returning jsonResponse of added Blog
        if (response.ok) {
            try {
                const revalidateResponse = await fetch(`https://fortech-alpha.vercel.app/api/revalidate?tag=allBlogs`, {
                    cache: 'no-cache',
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (revalidateResponse.ok) return jsonresponse
            } catch (error) {
                console.log(error)
                return { message: "Blog Added But An Unexpected Error Occured While Trying to Revalidate Tag 'allBlogs'", status: false }
            }
        }

    } catch (error) {
        console.log(error)
        return { message: "An Unexpected Error Occured While Making Request To Add The Blog", status: false }
    }
}

// Deleting blog
export async function deletePost(id) {
    try {
        console.log(id)
        const url = `https://fortech-alpha.vercel.app/api/deleteblog?id=${id}`;
        const response = await fetch(url, {
            cache: 'no-cache',
            method: 'delete',
            headers: {
                'content-type': 'application/json',
            },
        });

        const jsonresponse = await response.json();

        // Revalidating on response.ok and returning jsonResponse of deleted Blog
        if (response.ok) {
            try {
                const revalidateResponse = await fetch(`https://fortech-alpha.vercel.app/api/revalidate?tag=allBlogs`, {
                    cache: 'no-cache',
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (revalidateResponse.ok) return jsonresponse
            } catch (error) {
                console.log(error)
                return { message: "Blog Added But An Unexpected Error Occured While Trying to Revalidate Tag 'allBlogs'", status: false }
            }
        }

    } catch (error) {
        console.log(error)
        return { message: "An Unexpected Error Occured While Making Request To Delete The Blog", status: false }
    }
}

// Submit form
export async function submitForm(data) {
    try {
        const url = 'https://fortech-alpha.vercel.app/api/contact';
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
