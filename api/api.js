import express from 'express'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const port = process.env.PORT || 3333

const prisma = new PrismaClient()

const app = express()

app.use(express.json())
app.use(cors())

app.post('/new-user', async (req, res) => {
    const { email, name, password } = req.body

    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password
            }
        })

        return res.status(201).json(newUser)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany()

        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

app.get('/user/:id', async (req, res) => {
    const { id } = req.params

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })

        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

app.put('/user/:id', async (req, res) => {
    const { id } = req.params
    const { email, name, password } = req.body

    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                email,
                name,
                password
            }
        })

        return res.status(200).json(updatedUser)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

app.post('/new-post', async (req, res) => {
    const { title, content, authorId } = req.body

    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                authorId: Number(authorId)
            }
        })

        return res.status(201).json(newPost)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

app.get('/posts', async (req, res) => {
    try {
        const posts = await prisma.post.findMany()

        return res.status(200).json(posts)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

app.get('/post/:id', async (req, res) => {
    const { id } = req.params

    try {
        const post = await prisma.post.findUnique({
            where: {
                id: Number(id)
            }
        })

        return res.status(200).json(post)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})