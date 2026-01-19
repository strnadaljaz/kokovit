import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const {imeInPriimek, eMail, telefonska, naslov, postna, kraj, kolicina70, kolicina45, kolicinaJumbo} = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `Novo narocilo od ${imeInPriimek}`,
        text: `${imeInPriimek}\n${eMail}\n${telefonska}\n${naslov}\n${postna}\n${kraj}\nKolicina70:${kolicina70}\nKolicina45:${kolicina45}\n${kolicinaJumbo}`
    });

    return Response.json({ success: true });
}
