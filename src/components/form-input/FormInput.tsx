import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '../input'

export type FormInputProps<T extends FieldValues> = {
  control: any
  name: keyof T
} & Omit<InputProps, 'onChange' | 'value'> &
  UseControllerProps<T>

export function FormInput<T extends FieldValues>({ control, name, ...rest }: FormInputProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <Input errorMessage={error?.message} {...rest} {...field} />
}
