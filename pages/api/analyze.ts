// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const openaiKey = process.env.OPENAI_KEY;

import openai from "@/components/openai-config";

const analyzer = async (req: NextApiRequest, res: NextApiResponse) => {
    const explanationLevel = {
        standard: `“””Here’s what the above code is doing, explained in a concise way`,
        easy: `"""Explain the above code at a 5th grade level`,
    }

    const {code, explanation} = req.query;

    let davinciPrompt: string;

    if (explanation === "easy") {
        davinciPrompt = code + explanationLevel.easy;
    } else {
        davinciPrompt = code + explanationLevel.standard;
    }

    const options = {
        model: "text-davinci-003",
        prompt: davinciPrompt,
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\"\"\""],
    }

    const response = await openai.createCompletion(options);
    const {data} = response;

    res.status(200).json({ ...data, ...req.query });
}

export default analyzer;