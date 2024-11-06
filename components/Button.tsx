import React, { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        type={type}
        className={twMerge(
          `w-full rounded-xl bg-green-400 border px-2 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-black font-medium hover:opacity-75 transition  text-sm`,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button
