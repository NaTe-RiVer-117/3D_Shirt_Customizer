import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from DALL-E ROUTES" });
});

router.post('/', async (req, res) => {
    try {
        const { prompt } = req.body;

        const image = await openai.images.generate({  // Use 'images.generate'
         model:'dall-e-2',
          prompt,
          n: 1,
          size: '1024x1024',
          response_format: 'b64_json'
        });

        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

export default router;
