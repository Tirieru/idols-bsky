import { label } from "./label.js";
import { DID, RELAY } from "./constants.js";
import { EventStream } from "./types.js";
import fs from "node:fs";
import WebSocket from "ws";

const subscribe = async () => {
  let cursor = 0;
  let intervalID: NodeJS.Timeout;
  const cursorFile = fs.readFileSync("cursor.txt", "utf8");

  const relay = cursorFile ? RELAY.concat("&cursor=", cursorFile) : RELAY;
  const ws = new WebSocket(relay);

  ws.on("error", console.error);

  ws.on("open", () => {
    intervalID = setInterval(() => {
      const timestamp = new Date().toISOString();
      console.log(`${timestamp} cursor: ${cursor}`);
      fs.writeFile("cursor.txt", cursor.toString(), (err) => {
        if (err) console.error(err);
      });
    }, 60000);
  });

  ws.on("close", function close() {
    clearInterval(intervalID);
  });

  ws.on("message", async (data) => {
    const event: EventStream = JSON.parse(data.toString());
    cursor = event.time_us;
    if (event.type.includes("com")) {
      if (event.commit?.record?.subject.uri.includes(DID)) {
        await label(
          event.did,
          event.commit.record.subject.uri.split("/").pop()!,
        );
      }
    }
  });
};

subscribe();
