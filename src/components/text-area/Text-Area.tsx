import  {type ComponentPropsWithoutRef, type ElementRef, forwardRef} from 'react';
import s from './text-area.module.scss'
import clsx from "clsx";
import {Typography} from "../typography";
export type TextAreaProps = {
    disabled?: boolean
    errorMessage?: string
    label?: string
    placeholder?: string
}& ComponentPropsWithoutRef<'textarea'>


export const TextArea = forwardRef<ElementRef<'textarea'>, TextAreaProps>((props, ref) => {
const {disabled, errorMessage,label,placeholder,className, ...rest} = props

    return (
        <div className={clsx(s.warapper)}>
            {label && (
                <label>
                    <Typography
                        className={clsx(s.label, disabled && s.disabled)}
                        variant={'body2'}
                    >
                        {label}
                    </Typography>
                </label>
            )}
            <textarea
                disabled={disabled}
                className={clsx(s.textarea, disabled && s.disabled, errorMessage && s.error, className)}
                placeholder={placeholder}
                aria-invalid={!!errorMessage}
                ref={ref}
                {...rest}
            />
            {errorMessage && (
                <Typography  variant={'body2'} className={ s.errorMessage} >
                    {errorMessage}
                </Typography>
            )}

        </div>
    )
})

