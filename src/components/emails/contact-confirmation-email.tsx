
import * as React from 'react';

interface ContactConfirmationEmailProps {
    name: string;
    email: string;
    company?: string;
    projectType?: string;
    message: string;
}

export const ContactConfirmationEmail: React.FC<ContactConfirmationEmailProps> = ({
    name,
    email,
    company,
    projectType,
    message,
}) => (
    <div style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        backgroundColor: '#ffffff',
        padding: '40px 20px',
        color: '#333333',
    }}>
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            overflow: 'hidden',
        }}>
            {/* Header */}
            <div style={{
                backgroundColor: '#111827', // Dark background for header
                padding: '30px 40px',
                textAlign: 'center',
            }}>
                <h1 style={{
                    color: '#ffffff',
                    margin: 0,
                    fontSize: '24px',
                    fontWeight: 800,
                    letterSpacing: '-0.025em',
                }}>
                    BLAiT <span style={{ color: '#2563eb' }}>Engineering</span>
                </h1>
            </div>

            {/* Body */}
            <div style={{ padding: '40px' }}>
                <h2 style={{
                    marginTop: 0,
                    marginBottom: '24px',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#111827',
                }}>
                    Hello {name},
                </h2>

                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#4b5563',
                    marginBottom: '32px',
                }}>
                    Thank you for reaching out to BLAiT Engineering. We have successfully received your message and our team will get back to you within 24 hours.
                </p>

                {/* Message Details Card */}
                <div style={{
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '24px',
                    marginBottom: '32px',
                }}>
                    <h3 style={{
                        margin: '0 0 16px 0',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: '#6b7280',
                    }}>
                        Your Message Details
                    </h3>

                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                            {company && (
                                <tr>
                                    <td style={{ padding: '8px 0', color: '#6b7280', width: '120px', fontSize: '14px' }}>Company:</td>
                                    <td style={{ padding: '8px 0', color: '#111827', fontWeight: 500, fontSize: '14px' }}>{company}</td>
                                </tr>
                            )}
                            {projectType && (
                                <tr>
                                    <td style={{ padding: '8px 0', color: '#6b7280', width: '120px', fontSize: '14px' }}>Project Type:</td>
                                    <td style={{ padding: '8px 0', color: '#111827', fontWeight: 500, fontSize: '14px' }}>{projectType}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div style={{ marginTop: '16px', borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
                        <p style={{
                            margin: 0,
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#374151',
                            whiteSpace: 'pre-wrap',
                        }}>
                            {message}
                        </p>
                    </div>
                </div>

                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#4b5563',
                    margin: 0,
                }}>
                    Best regards,<br />
                    <strong style={{ color: '#111827' }}>The BLAiT Engineering Team</strong>
                </p>
            </div>

            {/* Footer */}
            <div style={{
                backgroundColor: '#f3f4f6',
                padding: '24px 40px',
                textAlign: 'center',
                borderTop: '1px solid #e5e7eb',
            }}>
                <p style={{
                    margin: 0,
                    fontSize: '12px',
                    color: '#9ca3af',
                }}>
                    © {new Date().getFullYear()} BLAiT Engineering. All rights reserved.
                </p>
                <div style={{ marginTop: '12px' }}>
                    <a href="https://blait.eu" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '12px', fontWeight: 500 }}>
                        Visit our website
                    </a>
                </div>
            </div>
        </div>
    </div>
);
