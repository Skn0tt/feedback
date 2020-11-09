import * as postmark from "postmark";

const client = new postmark.ServerClient(process.env.POSTMARK_TOKEN);

export default async function sendFeedback(req, res) {
  const { topic, feedback } = req.body;
  await client.sendEmail({
    From: "feedback@simonknott.de",
    To: "feedback@simonknott.de",
    Subject: "You got new Feedback on " + topic,
    TextBody: feedback,
  });
  res.status(200).end();
}
