import React from 'react'

interface Props {
  children: React.ReactNode,
  type: 'primary' | 'secondary',
  size: 'large' | 'medium' | 'small',
  fullWidth?: boolean,
}

function Button(props: Props): JSX.Element {
  const buttonProps = {
    className: `btn btn-${props.type} btn-${props.size} ${props.fullWidth ? 'btn-full-width' : ''}`,
  };
  return (
    <>
      <style jsx>{`
          .btn-primary {
            @apply bg-primary text-secondary rounded;
          }
          .btn-secondary {
            @apply text-primary border-solid border-2 border-primary rounded w-full;
          }
          .btn-medium {
            @apply px-8 py-8;
          }
      `}</style>
      <button {...buttonProps}>
        {props.children}
      </button>
    </>
  )
}

export default Button
