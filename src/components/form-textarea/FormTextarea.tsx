import { Control, FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { TextArea, TextAreaProps } from '../text-area'

export type FormTextareaProps<T extends FieldValues> = {
  control: Control<T>
  name: keyof T
} & Omit<TextAreaProps, 'onChange' | 'value'> &
  UseControllerProps<T>

export function FormTextarea<T extends FieldValues>({ control, name, ...rest }: FormTextareaProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <TextArea errorMessage={error?.message} {...rest} {...field} />
}
