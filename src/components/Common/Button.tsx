import React from 'react'

interface Props {
  children: React.ReactNode;
  type: 'primary' | 'secondary';
  size: 'large' | 'medium' | 'small';
  fullWidth?: boolean;
  href?: string;
}

function Button(props: Props): JSX.Element {
  const buttonProps = {
    className: `btn btn-${props.type} btn-${props.size} ${props.fullWidth ? 'btn-full-width' : ''}`,
  };

  const Wrapper = props.href ? 'a' : 'button';

  return (
    <>
      <style jsx>{`
          .btn-primary {
            @apply bg-dark text-light;
            display: inline-block;
            min-width: '100px';
            width: fit-content;
          }
          .btn-secondary {
            @apply text-primary border-solid border-2 border-primary rounded w-full;
          }
          .btn-medium {
            @apply px-16 py-8;
          }
      `}</style>
      <Wrapper {...buttonProps}>
        {props.children}
      </Wrapper>
    </>
  )
}

export default Button
