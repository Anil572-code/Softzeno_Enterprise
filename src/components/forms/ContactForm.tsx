import { Send } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';

import { TextareaField, TextField } from '@/components/forms/FormField';
import { Button } from '@/components/ui';
import { useZodForm } from '@/hooks/useZodForm';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Enter your name.'),
  email: z.string().trim().email('Enter a valid email address.'),
  subject: z.string().trim().min(3, 'Enter a subject.'),
  message: z.string().trim().min(15, 'Enter a little more detail.'),
});

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useZodForm({
    schema: contactSchema,
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = async () => {
    await Promise.resolve();
    setSent(true);
    reset();
  };

  return (
    <form className="enterprise-form" noValidate onSubmit={handleSubmit(onSubmit)}>
      {sent ? (
        <div className="inline-success" role="status">
          Online message delivery is currently unavailable, so no information was transmitted.
        </div>
      ) : null}
      <div className="form-grid form-grid--two">
        <TextField
          autoComplete="name"
          error={errors.name?.message}
          id="contact-name"
          label="Name"
          {...register('name')}
        />
        <TextField
          autoComplete="email"
          error={errors.email?.message}
          id="contact-email"
          label="Email"
          type="email"
          {...register('email')}
        />
      </div>
      <TextField
        error={errors.subject?.message}
        id="contact-subject"
        label="Subject"
        {...register('subject')}
      />
      <TextareaField
        error={errors.message?.message}
        id="contact-message"
        label="Message"
        rows={6}
        {...register('message')}
      />
      <Button disabled={isSubmitting} size="large" type="submit">
        Send message <Send aria-hidden="true" size={18} />
      </Button>
    </form>
  );
}
