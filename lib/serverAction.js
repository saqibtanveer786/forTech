"use server"

// Get all blogs
export async function getBlogs() {
    try {
        const url = `${process.env.HOST}/api/blogs`
        const response = await fetch(url, {
            next: {
                tags: ["allBlogs"]
            },
            cache: "force-cache",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse.posts
        }
        else {
            return { message: "An unexpected error occurred while getting blogs", status: false }
        }
    } catch (error) {
        console.log(error)
        throw new Error("Error while fetching blogs. Error message is :" + error.message)
    }
}

// Get a single blog
export async function getBlog(id) {
    try {
        const response = await fetch(
            `${process.env.HOST}/api/getblog?id=${id}`,
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
            return jsonResponse.post;
        } else {
            return { message: "Error while making request to get blog" }
        }
    } catch (error) {
        console.log("Error is: " + error)
    }
}

// Publish a blog
export async function pusblishBlog(data) {
    try {
        const url = `${process.env.HOST}/api/addblog`;
        const response = await fetch(url, {
            cache: 'no-cache',
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let jsonresponse = {}
        if (response.ok) {
            jsonresponse = await response.json();
        }
        else {
            jsonresponse = { message: "An Unexpected Error Occured While Making Request To Add The Blog", status: false }
        }

        // Revalidating on response.ok and returning jsonResponse of added Blog
        if (response.ok) {
            try {
                const revalidateResponse = await fetch(`${process.env.HOST}/api/revalidate?tag=allBlogs`, {
                    cache: 'no-cache',
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (revalidateResponse.ok) return jsonresponse
                if (!revalidateResponse.ok) return { message: "Revalidation failed but Blog added", status: false }
            } catch (error) {
                return { message: "Blog Added But An Unexpected Error Occured While Trying to Revalidate Tag 'allBlogs'", status: false }
            }
        }

        return jsonresponse

    } catch (error) {
        return { message: "An Unexpected Error Occured While Making Request To Add The Blog", status: false }
    }
}

// Deleting blog
export async function deletePost(id) {
    try {
        const url = `${process.env.HOST}/api/deleteblog?id=${id}`;
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
                const revalidateResponse = await fetch(`${process.env.HOST}/api/revalidate?tag=allBlogs`, {
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
export async function submitForm(data) {
    try {
        const url = `${process.env.HOST}/api/peoplemessage`;
        const response = await fetch(url, {
            cache: 'no-cache',
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse
        }

        return { message: "An Unexpected Error Occured While Sending Message", status: false }

    } catch (error) {
        console.log(error)
        return { message: "An Unexpected Error Occured While Sending Message", status: false }
    }
};

// Submit Comment
export async function submitComment(message, userId, blogId) {
    if (!message) return

    if (!userId || !blogId) return { message: 'Not Allowed', status: false }

    const data = {
        message, userId, blogId
    }
    try {
        const url = `${process.env.HOST}/api/comments/addcomment`;
        const response = await fetch(url, {
            cache: 'no-cache',
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse
        }

        return { message: "An Unexpected Error Occured While Commenting On Server", status: false }

    } catch (error) {
        console.log(error)
        return { message: "An Unexpected Error Occured While Commenting", status: false }
    }

}

// Getting Post's Comments
export async function getComments(postId) {
    try {
        if (!postId) return
        const url = `${process.env.HOST}/api/comments/getcomments?postid=${postId}`;
        const response = await fetch(url, {
            cache: 'no-cache',
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log("comments are: ", jsonResponse.comments)
            return jsonResponse.comments
        }
        return null
    } catch (error) {
        console.log("this error on the server action which is fetching the comments", error)
    }
}
