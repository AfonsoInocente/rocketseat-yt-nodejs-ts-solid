import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer, { TransportOptions } from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor(){
        const options: SMTPTransport.Options = {
            host: process.env.MAILTRAP_HOST,
            port: Number(process.env.MAILTRAP_PORT),
            auth: {
              user: process.env.MAILTRAP_USER,
              pass: process.env.MAILTRAP_PASSWORD
            }
        };

        this.transporter = nodemailer.createTransport(options);
    }

    public async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}