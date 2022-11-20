// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../redis";
import { Message } from "../../typings";

type Data = {
  messages: Message[];
};
type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "GET") {
    res.status(405).json({ body: "Method not allowed" });
    return;
  }

  const messageRes = await redis.hvals("messages");
  const messages: Message[] = messageRes
    .map((m) => JSON.parse(m))
    .sort((a, b) => b.created_at - a.created_at);

  res.status(200).json({ messages });
}
