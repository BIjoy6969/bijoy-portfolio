import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    let name = "";
    let email = "";
    let subject = "";
    let message = "";

    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await request.json();
      name = (body.name || "").trim();
      email = (body.email || "").trim();
      subject = (body.subject || "").trim();
      message = (body.message || "").trim();
    } else {
      const formData = await request.formData();
      name = String(formData.get("name") || "").trim();
      email = String(formData.get("email") || "").trim();
      subject = String(formData.get("subject") || "").trim();
      message = String(formData.get("message") || "").trim();
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const recipient = "azmbodruddozabijoy@gmail.com";

    const res = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://bijoy-portfolio.vercel.app",
        Referer: "https://bijoy-portfolio.vercel.app/",
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        subject: `[Portfolio Contact] ${subject} (from ${name})`,
        _subject: `New Portfolio Message from ${name}: ${subject}`,
        message,
        _template: "table",
        _captcha: "false",
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (data.success === "false" || data.success === false) {
      if (data.message && data.message.toLowerCase().includes("activation")) {
        return NextResponse.json({
          success: true,
          activationNeeded: true,
          message:
            "Activation needed: Please check your Gmail (azmbodruddozabijoy@gmail.com) and click 'Activate Form' to start receiving messages!",
        });
      }
      return NextResponse.json(
        { success: false, message: data.message || "Failed to submit message." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent — thanks, I'll be in touch soon.",
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
