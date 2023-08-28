"use server"

// Publish a blog
export async function pusblishBlog(data, content) {
    data.content = content
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

// Get a single blog
export async function getBlog(title) {
    const response = await fetch(
        `http://localhost:3000/api/getblog?name=${title}`,
        {
            cache: 'no-store',
        }
    );
    const jsonResponse = await response.json();
    return jsonResponse.data;
}

