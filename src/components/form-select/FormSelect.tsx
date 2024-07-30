import { FieldValues, UseControllerProps, useController, Control } from 'react-hook-form'

import { ISelectProps, Select } from '../select'

export type FormSelectProps<T extends FieldValues> = {
  control: Control<T>
  name: keyof T
} & Omit<ISelectProps, 'onChange' | 'value'> &
  UseControllerProps<T>

export function FormSelect<T extends FieldValues>({ control, name, ...rest }: FormSelectProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <Select errorMessage={error?.message} {...rest} {...field} />
}
