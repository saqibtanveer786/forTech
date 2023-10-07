export { default } from "next-auth/middleware"

export const config = { matcher: ["/pages/addblog:path*", "/pages/profile", "/pages/blogs"] }