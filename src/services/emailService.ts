import { ContactFormData } from '../types/contact';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

interface EmailResponse {
  success: boolean;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
  if (!import.meta.env.VITE_WEB3FORMS_KEY) {
    throw new Error('Web3Forms API key is not configured');
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        subject: `Nouveau message de ${formData.name}`,
        from_name: formData.name,
        email: formData.email,
        message: `
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Sujet: ${formData.subject}

Message:
${formData.message}
        `,
        to: 'info@fanma.ca',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Failed to send email');
    }

    return {
      success: true,
      message: 'Email sent successfully'
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email'
    };
  }
}