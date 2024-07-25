import { forwardRef, type Ref, type SVGProps } from 'react'

const CheckedIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={'24px'}
    height={'24px'}
    viewBox={'0 0 24 24'}
    fill={'currentColor'}
    ref={ref}
    {...props}
  >
    <path d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z" />
  </svg>
)

const ForwardRef = forwardRef(CheckedIcon)

export { ForwardRef as CheckedIcon }
