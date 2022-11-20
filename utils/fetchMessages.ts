import { Message } from "../typings";

const fetcher = async () => {
  const data = await fetch("/api/getMessages").then((res) => res.json());
  const messages: Message[] = data.messages;
  return messages;
};

export default fetcher;
