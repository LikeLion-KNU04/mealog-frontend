import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined'
}

export default function Button({ children, ...props }: ButtonProps) {
  let variantStyle

  switch (props.variant) {
    case 'primary':
      variantStyle = 'bg-primary-600 text-white'
      break
    case 'secondary':
      variantStyle = 'bg-white text-black border border-black'
      break
    case 'outlined':
      variantStyle = 'bg-transparent text-primary-600 border border-primary-600'
      break
    default:
      variantStyle = 'bg-primary-600 text-white'
      break
  }

  return (
    <button {...props} className={clsx('px-6 py-2 rounded-xl', variantStyle)}>
      {children}
    </button>
  )
}
