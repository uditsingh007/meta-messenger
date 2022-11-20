import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const clientPusher = new ClientPusher("26f470ec0a820c6dc616", {
  cluster: "ap2",
  forceTLS: true,
});

export const serverPusher = new Pusher({
  appId: "1509053",
  key: "26f470ec0a820c6dc616",
  secret: "db905935c24df65789cc",
  cluster: "ap2",
  useTLS: true,
});
