import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const {to,subject,html} = await request.json();

    if (!to || !subject || !html) {
      return new Response("Missing required fields", { status: 400 });
    }

    const data=await resend.emails.send({
      from: "my nextjs application ",
        to,
        subject,
        html,
    });
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to send email", { status: 500 });
  }
}

// This is a simple API route that uses the Resend library to send an email. It expects a POST request with a JSON body containing the "to", "subject", and "html" fields. If any of these fields are missing, it returns a 400 response. If the email is sent successfully, it returns a 200 response with the data from Resend. If there is an error, it logs the error and returns a 500 response.
// To test this API route, you can use a tool like Postman or curl to send a POST request to /api/send-email with a JSON body containing the "to", "subject", and "html" fields. For example:
// {
//   "to": "recipient@example.com",
// subject": "Test Email",
//   "html": "<p>This is a test email sent from my Next.js application.</p>"
// }
// Make sure to replace the "to" field with a valid email address that you have access to. If the email is sent successfully, you should receive it in your inbox. If there is an error, you can check the response for more details.

