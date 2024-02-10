import { Resend } from 'resend';

import { EmailTemplate } from '@/app/components/EmailTemplate';

export async function sendEmail() {
  'use server';
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['phamvu.tinh99@gmail.com'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'Tinh' }),
    text: 'Hello, World!' // Add the missing 'text' property
  });

  console.log(data);
}
