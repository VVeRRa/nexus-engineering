'use server';

import { z } from 'zod';
import { resend } from '@/lib/resend';

const ContactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    company: z.string().optional(),
    projectType: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
    errors?: {
        name?: string[];
        email?: string[];
        company?: string[];
        projectType?: string[];
        message?: string[];
    };
    message?: string;
    success?: boolean;
};

export async function sendEmail(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const validatedFields = ContactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        projectType: formData.get('projectType'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to send message.',
            success: false,
        };
    }

    const { name, email, company, projectType, message } = validatedFields.data;

    try {
        const data = await resend.emails.send({
            from: process.env.CONTACT_FROM || 'onboarding@resend.dev',
            to: process.env.CONTACT_TO || 'delivered@resend.dev',
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        Project Type: ${projectType || 'N/A'}
        
        Message:
        ${message}
      `,
        });

        if (data.error) {
            console.error("Resend Error:", data.error);
            return {
                message: 'Failed to send message via Resend.',
                success: false,
            };
        }

        return {
            message: 'Message sent successfully!',
            success: true,
        };
    } catch (error) {
        console.error("Server Action Error:", error);
        return {
            message: 'Database Error: Failed to send message.',
            success: false,
        };
    }
}
