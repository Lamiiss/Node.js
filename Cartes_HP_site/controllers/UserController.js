import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
import jwt from 'jsonwebtoken'

const getUser = async (req, res) => {
    try {
        const token = req.header['x-access-token'];
        if (!token) return res.status(500).send({ auth: false, message: "No token provided." })
        jwt.verify(token, processs.env.JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
            const user = await prisma.user.findUnique({
                where: {
                    id: decoded.id
                }

            }).then(data => {
                res.send(data);
            }).catch(error => {
                res.send(error);
            })
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export {
    getUser
}