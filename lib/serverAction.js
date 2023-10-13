"use server"

// Get all blogs
export async function getBlogs() {
    try {
        const url = `${process.env.HOST}/api/blogs`
        console.log("making request to", url);
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
        const jsonResponse = await response.json()
        console.log(jsonResponse)
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
        }
        if (!response.ok) console.log('bad response in getBlog is: ', response)
    } catch (error) {
        console.log("Error is: " + error)
    }
}

// Publish a blog
export async function pusblishBlog(data) {
    console.log(data)
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
        console.log(id)
        const url = `${process.env.HOST}/api/deleteblog?id=${id}`;
        console.log("making request to", url);
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
        console.log("making request to", url);
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
