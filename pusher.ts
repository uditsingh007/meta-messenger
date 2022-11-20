import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const clientPusher = new ClientPusher("26f470ec0a820c6dc616", {
  cluster: "ap2",
  forceTLS: true,
});

export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});
