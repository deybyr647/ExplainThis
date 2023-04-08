// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const openaiKey = process.env.OPENAI_KEY;

type Data = {
    name: string
}

const analyzer = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    console.log(openaiKey);
    res.status(200).json({ name: 'John Doe' });
}

export default analyzer;