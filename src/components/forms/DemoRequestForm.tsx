import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';

import { SelectField, TextareaField, TextField } from '@/components/forms/FormField';
import { Button } from '@/components/ui';
import { useZodForm } from '@/hooks/useZodForm';

const demoSchema = z.object({
  fullName: z.string().trim().min(2, 'Enter your full name.'),
  workEmail: z.string().trim().email('Enter a valid work email address.'),
  organisation: z.string().trim().min(2, 'Enter your organisation name.'),
  teamSize: z.string().min(1, 'Select an approximate team size.'),
  message: z.string().trim().min(20, 'Tell us a little more about your training needs.'),
});

const teamSizeOptions = [
  { label: 'Select team size', value: '' },
  { label: '1–25 people', value: '1-25' },
  { label: '26–100 people', value: '26-100' },
  { label: '101–500 people', value: '101-500' },
  { label: 'More than 500 people', value: '500-plus' },
] as const;

export function DemoRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useZodForm({
    schema: demoSchema,
    defaultValues: {
      fullName: '',
      workEmail: '',
      organisation: '',
      teamSize: '',
      message: '',
    },
  });

  const onSubmit = async () => {
    await Promise.resolve();
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 aria-hidden="true" size={34} />
        <h2>Request received</h2>
        <p>
          Online submission is currently unavailable, so no information was transmitted. Secure
          enquiry delivery will be enabled before live requests are accepted through this form.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="secondary">
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form className="enterprise-form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="form-grid form-grid--two">
        <TextField
          autoComplete="name"
          error={errors.fullName?.message}
          id="demo-full-name"
          label="Full name"
          placeholder="Alex Morgan"
          {...register('fullName')}
        />
        <TextField
          autoComplete="email"
          error={errors.workEmail?.message}
          id="demo-email"
          label="Work email"
          placeholder="alex@organisation.com"
          type="email"
          {...register('workEmail')}
        />
      </div>
      <div className="form-grid form-grid--two">
        <TextField
          autoComplete="organization"
          error={errors.organisation?.message}
          id="demo-organisation"
          label="Organisation"
          placeholder="Organisation name"
          {...register('organisation')}
        />
        <SelectField
          error={errors.teamSize?.message}
          id="demo-team-size"
          label="Approximate team size"
          options={teamSizeOptions}
          {...register('teamSize')}
        />
      </div>
      <TextareaField
        error={errors.message?.message}
        id="demo-message"
        label="What would you like to improve?"
        placeholder="Tell us about your industry, workforce and current training priorities."
        rows={6}
        {...register('message')}
      />
      <div className="form-submit-row">
        <Button disabled={isSubmitting} size="large" type="submit">
          {isSubmitting ? 'Submitting…' : 'Request demonstration'}
          <ArrowRight aria-hidden="true" size={19} />
        </Button>
        <p>Your details will only be used to respond to this request.</p>
      </div>
    </form>
  );
}
