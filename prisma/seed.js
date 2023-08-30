const blogs = [
    {
        "id": 1,
        "image": "https://example.com/images/tech-post1.jpg",
        "title": "The Future of Artificial Intelligence",
        "content": "In today's rapidly evolving technological landscape, artificial intelligence (AI) has emerged as a driving force behind innovation. From self-driving cars to advanced medical diagnostics, AI is transforming industries and shaping the way we live. Researchers and developers are constantly pushing the boundaries of what AI can achieve, exploring areas like natural language processing, computer vision, and machine learning.\n\nAs AI continues to make strides, discussions about its ethical implications and potential impact on the job market are gaining momentum. However, there's no denying that AI has the potential to revolutionize the world in unprecedented ways, making our lives more convenient, efficient, and connected than ever before."
    },
    {
        "id": 2,
        "image": "https://example.com/images/tech-post2.jpg",
        "title": "Top 10 Tech Gadgets of the Year",
        "content": "Every year, the tech industry introduces a dazzling array of gadgets that capture our imagination and push technological boundaries. In this post, we've curated a list of the top 10 tech gadgets that have taken the market by storm:\n\n1. **Smartphone Innovations**: From foldable displays to impressive camera capabilities, smartphones continue to lead the way in tech innovation.\n2. **Wireless Earbuds**: True wireless earbuds offer unparalleled convenience for music lovers and professionals on the go.\n3. **Smart Home Devices**: Voice-controlled assistants and smart appliances are transforming our living spaces.\n4. **Fitness Wearables**: Health and fitness wearables are helping us stay active and monitor our well-being.\n5. **Gaming Consoles**: Next-gen gaming consoles are delivering immersive gaming experiences with stunning graphics.\n\n...and more.\n\nThese gadgets demonstrate the incredible potential of technology to enhance our lives and reshape industries across the board."
    },
    {
        "id": 3,
        "image": "https://example.com/images/tech-post3.jpg",
        "title": "Cybersecurity Best Practices",
        "content": "With the increasing digitization of our lives, cybersecurity has never been more critical. Protecting your personal data and sensitive information is paramount in a world where cyber threats are constantly evolving. Here are some essential cybersecurity best practices:\n\n- **Strong Passwords**: Use complex passwords and consider using a password manager.\n- **Two-Factor Authentication (2FA)**: Enable 2FA for your accounts whenever possible.\n- **Regular Software Updates**: Keep your operating systems and software up to date to patch vulnerabilities.\n- **Beware of Phishing**: Be cautious of suspicious emails and links that could lead to phishing attacks.\n- **Secure Networks**: Use secure, encrypted Wi-Fi connections and avoid public networks for sensitive tasks.\n\nBy adopting these practices, you can significantly reduce the risk of falling victim to cybercrimes and protect your digital identity."
    },
    {
        "id": 4,
        "image": "https://example.com/images/tech-post4.jpg",
        "title": "The Rise of Blockchain Technology",
        "content": "Blockchain technology, initially associated solely with cryptocurrencies, has expanded its reach far beyond its origins. The decentralized and secure nature of blockchain has enabled its application in various industries, such as supply chain management, healthcare, finance, and more.\n\nAt its core, a blockchain is a distributed and immutable digital ledger. Transactions are recorded in a way that ensures transparency, security, and authenticity. This has led to the development of smart contracts, which automate and verify complex processes without the need for intermediaries.\n\nAs blockchain continues to evolve, industries are exploring its potential to revolutionize traditional systems and streamline processes. The future possibilities for blockchain technology are boundless, and its impact on business and society is just beginning to be understood."
    },
    {
        "id": 5,
        "image": "https://example.com/images/tech-post5.jpg",
        "title": "Beginner's Guide to Coding",
        "content": "Coding is the language of technology, and learning to code opens up a world of possibilities. If you're a beginner looking to dip your toes into the world of programming, here's a guide to get you started:\n\n- **Choose a Language**: Start with a beginner-friendly language like Python, which has a simple syntax and wide applicability.\n- **Online Resources**: There are countless online tutorials, coding platforms, and forums to help you learn.\n- **Practice Regularly**: Consistency is key. Set aside time each day to practice coding.\n- **Projects and Challenges**: Build small projects and tackle coding challenges to apply what you've learned.\n- **Debugging Skills**: Learning to debug code is essential. Don't be afraid to encounter errors—they're part of the learning process.\n\nCoding is not only a valuable skill in the tech industry but also a creative outlet for bringing your ideas to life. Embrace the journey of learning and watch as your coding skills grow."
    }
]

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function add(params) {
    for (const blog of blogs) {
        console.log("Adding blog")
        const addPost = await prisma.post.create({
            data: blog
        })
        console.log("Blog added")
    }
}

add()