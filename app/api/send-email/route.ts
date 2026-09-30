import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, phone, address, postNumber, city, paymentString, itemsString, notes } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS,
        },
    });
    try {
        await transporter.verify();
    } catch (err: any) {
        console.error(err);
        return Response.json({
            success: false,
            error: err
        },
            {
                status: 502
            },
        )
    }

    const message = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `Novo naročilo od ${name}`,
        text: [
            name,
            email,
            phone,
            address + ", " + postNumber + " " + city,
            `Izdelki: \n${itemsString}`,
            `Opombe: ${notes}`,
        ].join('\n'),
    };

    try {
        const info = await transporter.sendMail(message);

        return Response.json(
            {
                success: true
            },
            { status: 200 },
        );
    } catch (err: any) {
        console.error(err);
        return Response.json(
            {
                success: false,
                error: err
            },
            { status: 500 },
        );
    }
}
