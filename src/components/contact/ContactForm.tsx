import React, { useState } from 'react';
import { Send } from 'lucide-react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';
import { sendContactEmail } from '../../services/emailService';
import type { ContactFormData } from '../../types/contact';

export default function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await sendContactEmail(formData);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {t.contact.form.title}
      </h2>
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          {t.contact.form.success}
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
          {t.contact.form.error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label={t.contact.form.name.label}
          name="name"
          type="text"
          placeholder={t.contact.form.name.placeholder}
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <FormInput
          label={t.contact.form.email.label}
          name="email"
          type="email"
          placeholder={t.contact.form.email.placeholder}
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <FormInput
          label={t.contact.form.phone.label}
          name="phone"
          type="tel"
          placeholder={t.contact.form.phone.placeholder}
          value={formData.phone}
          onChange={handleChange}
        />
        
        <FormInput
          label={t.contact.form.subject.label}
          name="subject"
          type="text"
          placeholder={t.contact.form.subject.placeholder}
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mt-6">
        <FormTextArea
          label={t.contact.form.message.label}
          name="message"
          placeholder={t.contact.form.message.placeholder}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-full
          hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02]
          flex items-center justify-center space-x-2 font-semibold
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{status === 'loading' ? t.contact.form.sending : t.contact.form.submit}</span>
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}