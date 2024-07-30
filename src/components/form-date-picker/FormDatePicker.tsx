import { FieldValues, UseControllerProps, useController, Control } from 'react-hook-form'

import { DatePicker, IDatePickerProps } from '../date-picker'

export type FormSelectProps<T extends FieldValues> = {
  control: Control<T>
  name: keyof T
} & Omit<IDatePickerProps, 'onChange' | 'value'> &
  UseControllerProps<T>

export function FormDatePicker<T extends FieldValues>({
  control,
  name,
  ...rest
}: FormSelectProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <DatePicker errorMessage={error?.message} {...rest} {...field} />
}