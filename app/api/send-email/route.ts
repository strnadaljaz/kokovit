import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const {imeInPriimek, eMail, telefonska, naslov, postna, kraj, kolicina70, kolicina45, kolicinaBigBag, nacinPlacila, opombe} = await req.json();

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
        subject: `Novo naročilo od ${imeInPriimek}`,
        text: [
            imeInPriimek,
            eMail,
            telefonska,
            naslov,
            postna,
            kraj,
            `Količina70: ${kolicina70 ?? 0}`,
            `Količina45: ${kolicina45 ?? 0}`,
            `Količina Big Bag: ${kolicinaBigBag ?? 0}`,
            `Način plačila: ${nacinPlacila}`,
            `Opombe: ${opombe}`,
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
