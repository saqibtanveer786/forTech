"use server";

import prisma from "lib/prisma";

// Get all blogs
export async function getBlogs(forWhat, take, skip) {
  try {
    const url = `${process.env.HOST}/api/blogs?forwhat=${forWhat}&take=${take}&skip=${skip}}`;
    const response = await fetch(url, {
      next: {
        tags: ["allBlogs"],
      },
      cache: "force-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
}

// Get a single blog
export async function getBlog(id) {
  try {
    const response = await fetch(`${process.env.HOST}/api/getblog?id=${id}`, {
      cache: "no-store",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.post;
    } else {
      return { message: "Error while making request to get blog" };
    }
  } catch (error) {
    console.log("Error is: " + error);
  }
}

export async function getAuthorsDataForBlogPostPage(id) {
  try {
    const response = await fetch(
      `${process.env.HOST}/api/authorsdataforblogpostpage?authorid=${id}`,
      {
        cache: "no-store",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return {
        message:
          "Error in response while making request to author and related posts",
      };
    }
  } catch (error) {
    console.log("Error is: " + error);
  }
}

// Publish a blog
export async function pusblishBlog(data) {
  try {
    const url = `${process.env.HOST}/api/addblog`;
    const response = await fetch(url, {
      cache: "no-cache",
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let jsonresponse = {};
    if (response.ok) {
      jsonresponse = await response.json();
    } else {
      jsonresponse = {
        message:
          "An Unexpected Error Occured While Making Request To Add The Blog",
        status: false,
      };
    }

    // Revalidating on response.ok and returning jsonResponse of added Blog
    if (response.ok) {
      try {
        const revalidateResponse = await fetch(
          `${process.env.HOST}/api/revalidate?tag=allBlogs`,
          {
            cache: "no-cache",
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (revalidateResponse.ok) return jsonresponse;
        if (!revalidateResponse.ok)
          return {
            message: "Revalidation failed but Blog added",
            status: false,
          };
      } catch (error) {
        return {
          message:
            "Blog Added But An Unexpected Error Occured While Trying to Revalidate Tag 'allBlogs'",
          status: false,
        };
      }
    }

    return jsonresponse;
  } catch (error) {
    return {
      message:
        "An Unexpected Error Occured While Making Request To Add The Blog",
      status: false,
    };
  }
}

// Update a blog
export async function updateBlog(data, id) {
  try {
    const url = `${process.env.HOST}/api/updateblog?id=${id}`;
    const response = await fetch(url, {
      cache: "no-cache",
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let jsonresponse = {};
    if (response.ok) {
      jsonresponse = await response.json();
    } else {
      jsonresponse = {
        message:
          "An Unexpected Error Occured While Making Request To Add The Blog",
        status: false,
      };
    }

    // Revalidating on response.ok and returning jsonResponse of added Blog
    if (response.ok) {
      try {
        const revalidateResponse = await fetch(
          `${process.env.HOST}/api/revalidate?tag=allBlogs`,
          {
            cache: "no-cache",
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (revalidateResponse.ok) return jsonresponse;
        if (!revalidateResponse.ok)
          return {
            message: "Revalidation failed but Blog added",
            status: false,
          };
      } catch (error) {
        return {
          message:
            "Blog Added But An Unexpected Error Occured While Trying to Revalidate Tag 'allBlogs'",
          status: false,
        };
      }
    }

    return jsonresponse;
  } catch (error) {
    return {
      message:
        "An Unexpected Error Occured While Making Request To Add The Blog",
      status: false,
    };
  }
}

// Deleting blog
export async function deletePost(id) {
  try {
    const url = `${process.env.HOST}/api/deleteblog?id=${id}`;
    const response = await fetch(url, {
      cache: "no-cache",
      method: "delete",
      headers: {
        "content-type": "application/json",
      },
    });

    const jsonresponse = await response.json();

    // Revalidating on response.ok and returning jsonResponse of deleted Blog
    if (response.ok) {
      try {
        const revalidateResponse = await fetch(
          `${process.env.HOST}/api/revalidate?tag=allBlogs`,
          {
            cache: "no-cache",
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (revalidateResponse.ok) return jsonresponse;
        if (!revalidateResponse.ok)
          return {
            message:
              "Blog Added But An Unexpected Error Occured While Trying to Revalidate Tag 'allBlogs'",
            status: false,
          };
      } catch (error) {
        console.log(error);
        return {
          message: "Error while revalidating Blog has added but",
          status: false,
        };
      }
    }
    return jsonresponse;
  } catch (error) {
    console.log(error);
    return {
      message:
        "An Unexpected Error Occured While Making Request To Delete The Blog",
      status: false,
    };
  }
}

// Submit form
export async function submitForm(data) {
  try {
    if (!data.name || !data.email || !data.message)
      return {
        message: "Please provide all and correct credentials",
        status: false,
      };
    const url = `${process.env.HOST}/api/peoplemessage`;
    const response = await fetch(url, {
      cache: "no-cache",
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }

    return {
      message: "An Unexpected Error Occured While Sending Message",
      status: false,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "An Unexpected Error Occured While Sending Message",
      status: false,
    };
  }
}

// Submit Comment
export async function submitComment(message, userId, blogId) {
  if (!message) return;

  if (!userId || !blogId) return { message: "Not Allowed", status: false };

  const data = {
    message,
    userId,
    blogId,
  };
  try {
    const url = `${process.env.HOST}/api/comments/addcomment`;
    const response = await fetch(url, {
      cache: "no-cache",
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }

    return {
      message: "An Unexpected Error Occured While Commenting On Server",
      status: false,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "An Unexpected Error Occured While Commenting",
      status: false,
    };
  }
}

// Getting Post's Comments
export async function getComments(postId) {
  try {
    if (!postId) return;
    const url = `${process.env.HOST}/api/comments/getcomments?postid=${postId}`;
    const response = await fetch(url, {
      cache: "no-cache",
      method: "post",
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.comments;
    }
    return null;
  } catch (error) {
    console.log(
      "this error on the server action which is fetching the comments",
      error
    );
  }
}

// Delete comment
export async function deleteComment(commentId) {
  try {
    if (!commentId) return;
    const url = `${process.env.HOST}/api/comments/deletecomment?commentid=${commentId}`;
    const response = await fetch(url, {
      cache: "no-cache",
      method: "delete",
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    return { message: "something went wrong!", status: "error" };
  } catch (error) {
    console.log(
      "this errro is where making request to delete comment in server aciton"
    );
    return { message: "something went wrong!", status: "error" };
  }
}

// Updat comment
export async function updateComment(commentId, data) {
  try {
    if (!commentId || !data) return;
    const url = `${process.env.HOST}/api/comments/updatecomment?commentid=${commentId}`;
    const response = await fetch(url, {
      cache: "no-cache",
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    return { message: "something went wrong!", status: "error" };
  } catch (error) {
    console.log(
      "this errro is where making request to update comment in server aciton"
    );
    return { message: "something went wrong!", status: "error" };
  }
}
// Publish a blog
export async function registerAuther(data, id) {
  try {
    const url = `${process.env.HOST}/api/auther?userid=${id}`;
    const response = await fetch(url, {
      cache: "no-cache",
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let jsonresponse = {};
    if (response.ok) {
      jsonresponse = await response.json();
    } else {
      jsonresponse = {
        message: "An Unexpected Error Occured ",
        status: "error",
      };
    }

    return jsonresponse;
  } catch (error) {
    return {
      message:
        "An Unexpected Error Occured While Making Request To Register Auther",
      status: false,
    };
  }
}

// Get data for dashboard
export async function getAuthorsData(id) {
  try {
    const url = `${process.env.HOST}/api/authorsdata?authorid=${id}`;
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return {
        message: "An unexpected error occurred while getting blogs",
        status: false,
      };
    }
  } catch (error) {
    throw new Error(
      "Error while fetching dashboard data. Error message is :" + error.message
    );
  }
}

// add a vote
export async function addVote(userId, postId, type) {
  try {
    const url = `${process.env.HOST}/api/votes/addvote`;
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        postId,
        type,
      }),
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(
      "Error while fetching while requesting to add vote. Error message is :" +
        error.message
    );
    return { message: "Unexpected error occured", status: "error" };
  }
}

// get author id by userid
export async function getAuthorIdFromUserId(userId) {
  try {
    const authorId = await prisma.AuthorProfile.findUnique({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });
    if (!authorId) return false;
    return authorId;
  } catch (error) {
    console.log("Error while getting authorid by user id :" + error.message);
    return { message: "Unexpected error occured", status: "error" };
  }
}

// blogs by category
export async function getBlogsByCategory(cat) {
  try {
    console.log("cat is:", cat);
    if (cat !== null || cat !== undefined) {
      console.log("inside", cat);
      const getBlogs = await prisma.post.findMany({
        where: {
          category: {
            some: {
              name: {
                search: cat,
                mode: "insensitive",
              },
            },
          },
        },
        select: {
          id: true,
          title: true,
          briefdescription: true,
          image: true,
          category: true,
        },
      });
      return getBlogs;
    }
  } catch (error) {
    console.log(error);
  }
}

// search results
export async function getSearchResults(query) {
  try {
    const url = `${process.env.HOST}/api/searchblogs?query=${query}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      cache: "no-cache",
      next: {
        tags: ["search_results"],
      },
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
}
