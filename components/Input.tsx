    import { flushAllTraces } from 'next/dist/trace'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
    
    interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}



    const Input = forwardRef<HTMLInputElement, InputProps>(({
        className,
        type,
        disabled,
        ...props
    }, ref) => {
        return (
            <input 
            type={type}
            disabled={disabled}
            ref={ref}
            className={twMerge(
                `flex w-full
                rounded-md
                file:border-0
                file:bg-transparent
                file:text-sm
                file:font-medium
                bg-neutral-700
                saturate-50
                border
                border-transparent
                px-2
                py-2
                text-sm   
                placeholder:text-neutral-400
                disabled:cursor-not-allowed
                disabled: opacity-50
                focus:outline-none
                `, className
            )}
            />
        )
    })

    Input.displayName="Input"
    
    export default Input
    