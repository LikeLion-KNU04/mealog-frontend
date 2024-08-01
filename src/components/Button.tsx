import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        'px-6 py-3 rounded-xl',
        props.variant === 'primary'
          ? 'bg-primary-600 text-white'
          : 'bg-white text-black border border-black'
      )}
    >
      {children}
    </button>
  )
}
