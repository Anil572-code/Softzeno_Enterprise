import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { FieldValues, UseFormProps, UseFormReturn } from 'react-hook-form';
import type { z, ZodType } from 'zod';

type FormSchema = ZodType<FieldValues, FieldValues>;

type UseZodFormOptions<TSchema extends FormSchema, TContext extends object> = Omit<
  UseFormProps<z.input<TSchema>, TContext, z.output<TSchema>>,
  'resolver'
> & {
  schema: TSchema;
};

export function useZodForm<
  TSchema extends FormSchema,
  TContext extends object = Record<string, never>,
>({
  schema,
  ...options
}: UseZodFormOptions<TSchema, TContext>): UseFormReturn<
  z.input<TSchema>,
  TContext,
  z.output<TSchema>
> {
  return useForm<z.input<TSchema>, TContext, z.output<TSchema>>({
    ...options,
    resolver: zodResolver(schema),
  });
}
