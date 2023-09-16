const usersData = [
    {
        email: 'user1@example.com',
        name: 'User One',
        // role: 'USER',
    },
    {
        email: 'user2@example.com',
        name: 'User Two',
        // role: 'USER',
    },
    {
        email: 'admin@example.com',
        name: 'Admin User',
        // role: 'ADMIN',
    },
];


import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function add() {
    for (const user of usersData) {
        console.log("Adding user")
        const addUser = await prisma.user.create({
            data: user
        })
        console.log("Blog added")
    }
}

add()