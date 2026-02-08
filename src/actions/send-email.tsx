'use server';

import { ContactFormSchema } from '@/lib/schemas';
import { resend } from '@/lib/resend';
import { ContactConfirmationEmail } from '@/components/emails/contact-confirmation-email';

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
    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        projectType: formData.get('projectType'),
        message: formData.get('message'),
    };

    // Handle empty strings as undefined for optional fields if needed, 
    // but Zod with correct schema handles strings. 
    // Our schema expects strings (or optional). 
    // FormData.get returns string | null.

    const validatedFields = ContactFormSchema.safeParse({
        ...rawData,
        company: rawData.company || undefined, // Convert null/empty to undefined if preferred, or let Zod handle it if schema matches
        projectType: rawData.projectType || undefined,
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

        // Send confirmation email to the user
        try {
            await resend.emails.send({
                from: process.env.CONTACT_FROM || 'onboarding@resend.dev',
                to: email,
                subject: `We've received your message - BLAiT Engineering`,
                react: <ContactConfirmationEmail
                    name={name}
                    email={email}
                    company={company || undefined}
                    projectType={projectType || undefined}
                    message={message}
                />,
            });
        } catch (autoReplyError) {
            console.error("Failed to send auto-reply:", autoReplyError);
            // We don't fail the main request if auto-reply fails
        }

        if (data.error) {
            console.error("Resend Error:", data.error);
            return {
                message: `Failed to send message via Resend: ${data.error.message}`,
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
