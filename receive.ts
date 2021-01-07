const amqp = require("amqplib");
const url = "amqp://localhost";

async function main() {
  const connection = await amqp.connect(url);
  const channel = await connection.createChannel();

  const queue = "hello3";
  await channel.assertQueue(queue, { durable: false });
  channel.consume(queue, ({ content }) => console.log(content.toString()), {
    noAck: true,
  });
}

main().catch(console.log);
