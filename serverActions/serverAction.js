"use server"

// Get all blogs
export async function getBlogs() {
    const response = await fetch(`http://localhost:3000/api/blogs`, {
        cache: 'no-cache',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const jsonResponse = await response.json()
    return jsonResponse.posts
}

// Get a single blog
export async function getBlog(id) {
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
    console.log(jsonResponse)
    return jsonResponse.data;
}

