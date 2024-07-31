import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { Checkbox, CheckboxProps } from '../checkbox'

export type FormCheckboxProps<T extends FieldValues> = {
  control: any
  name: keyof T
} & Omit<CheckboxProps, 'onChange' | 'checked'> &
  UseControllerProps<T>

export function FormCheckbox<T extends FieldValues>({
  control,
  name,
  ...rest
}: FormCheckboxProps<T>) {
  const { field } = useController({
    control,
    name,
  })

  return <Checkbox checked={field.value} {...rest} {...field} />
}
