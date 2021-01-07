import * as amqp from "amqplib";
const url = "amqp://localhost";

async function main() {
  const connection = await amqp.connect(url);
  const channel = await connection.createChannel();

  const queue = "hello3";
  const msg = "Hello World";

  await channel.assertQueue(queue, { durable: false });
  const response = channel.sendToQueue(queue, Buffer.from(msg));
  console.log(response);
  setTimeout(() => connection.close(), 500);
}

main().catch(console.log);
