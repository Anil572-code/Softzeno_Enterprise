import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

interface FieldShellProps {
  children: ReactNode;
  error?: string | undefined;
  hint?: string | undefined;
  id: string;
  label: string;
}

function FieldShell({ children, error, hint, id, label }: FieldShellProps) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {children}
      {hint ? <p className="form-field__hint">{hint}</p> : null}
      {error ? (
        <p className="form-field__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
  hint?: string | undefined;
  label: string;
}

export function TextField({ error, hint, id, label, ...props }: TextFieldProps) {
  if (!id) {
    throw new Error('TextField requires an id.');
  }

  return (
    <FieldShell error={error} hint={hint} id={id} label={label}>
      <input
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="form-control"
        id={id}
        {...props}
      />
    </FieldShell>
  );
}

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string | undefined;
  hint?: string | undefined;
  label: string;
}

export function TextareaField({ error, hint, id, label, ...props }: TextareaFieldProps) {
  if (!id) {
    throw new Error('TextareaField requires an id.');
  }

  return (
    <FieldShell error={error} hint={hint} id={id} label={label}>
      <textarea
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="form-control form-control--textarea"
        id={id}
        {...props}
      />
    </FieldShell>
  );
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string | undefined;
  label: string;
  options: readonly { label: string; value: string }[];
}

export function SelectField({ error, id, label, options, ...props }: SelectFieldProps) {
  if (!id) {
    throw new Error('SelectField requires an id.');
  }

  return (
    <FieldShell error={error} id={id} label={label}>
      <select
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="form-control form-control--select"
        id={id}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}
