"use server"

import { revalidateTag } from "next/cache"
import Router from "next/navigation"

// Get all blogs
export async function getBlogs() {
    try {
        const response = await fetch(`http://localhost:3000/api/blogs`, {
            next: {
                tags: ["allBlogs"]
            },
            cache: "force-cache",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const jsonResponse = await response.json()
        return jsonResponse.posts
    } catch (error) {
        console.log(error)
        throw new Error("Error while fetching blogs. Error message is :" + error.message + "and and and" + "server response error is: ")
    }
}

// Get a single blog
export async function getBlog(id) {
    try {
        const response = await fetch(
            `http://localhost:3000/api/getblog?id=${id}`,
            {
                cache: 'no-store',
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            return jsonResponse.post;
        }
        if (!response.ok) console.log('ressssssponse is: ', response)
    } catch (error) {
        console.log("Error is: " + error)
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

        // Revalidating on response.ok and returning jsonResponse of added Blog
        if (response.ok) {
            try {
                const revalidateResponse = await fetch(`http://localhost:3000/api/revalidate?tag=allBlogs`, {
                    cache: 'no-cache',
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (revalidateResponse.ok) return jsonresponse
                if (!revalidateResponse.ok) return { message: "Revalidation failed but Blog added", status: false }
            } catch (error) {
                console.log(error)
                return { message: "Blog Added But An Unexpected Error Occured While Trying to Revalidate Tag 'allBlogs'", status: false }
            }
        }

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

        // Revalidating on response.ok and returning jsonResponse of deleted Blog
        if (response.ok) {
            try {
                const revalidateResponse = await fetch(`http://localhost:3000/api/revalidate?tag=allBlogs`, {
                    cache: 'no-cache',
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (revalidateResponse.ok) return jsonresponse
                if (!revalidateResponse.ok) return { message: "Blog Added But An Unexpected Error Occured While Trying to Revalidate Tag 'allBlogs'", status: false }
            } catch (error) {
                console.log(error)
                return { message: "Error while revalidating Blog has added but", status: false }
            }
        }
        return jsonresponse

    } catch (error) {
        console.log(error)
        return { message: "An Unexpected Error Occured While Making Request To Delete The Blog", status: false }
    }
}

// Submit form
// export async function submitForm(formData) {
//     try {
//         console.log(formData)
//         const url = 'http://localhost:3000/api/contact';
//         const response = await fetch(url, {
//             cache: 'no-cache',
//             method: 'post',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: formData,
//         });

//         const jsonResponse = await response.json();
//         console.log(jsonResponse)
//     } catch (error) {
//         console.log(error)
//         return { message: "An Unexpected Error Occured While Making Request To Submit The Form", status: false }
//     }
// };
