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
