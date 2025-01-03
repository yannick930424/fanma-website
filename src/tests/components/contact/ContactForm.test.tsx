import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../../../components/contact/ContactForm';
import { sendContactEmail } from '../../../services/emailService';

jest.mock('../../../services/emailService');

describe('ContactForm', () => {
  it('should submit form successfully', async () => {
    (sendContactEmail as jest.Mock).mockResolvedValueOnce({ success: true });
    
    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText(/nom/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });
    
    fireEvent.click(screen.getByRole('button', { name: /envoyer/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/message.*envoyé.*succès/i)).toBeInTheDocument();
    });
  });
});