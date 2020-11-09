import * as postmark from "postmark";

const client = new postmark.ServerClient(process.env.POSTMARK_TOKEN);

export default async function sendFeedback(req, res) {
  const { topic, feedback } = req.body;

  let Subject = "You got new Feedback";
  if (topic) {
    Subject += " on " + topic;
  }

  await client.sendEmail({
    From: "feedback@simonknott.de",
    To: "feedback@simonknott.de",
    Subject,
    TextBody: feedback,
  });
  res.status(200).end();
}
