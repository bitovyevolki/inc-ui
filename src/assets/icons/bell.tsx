import {forwardRef, type Ref, type SVGProps} from "react";

const BellIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (

    <svg
        fill={'currentColor'}
        height={'24px'}
        viewBox={'0 0 24 24'}
        ref={ref}
        width={'24px'}
        {...props}
    >
        <path
            d={
                'M11 16.3413C11 17.2403 10.084 18.0003 9 18.0003C7.916 18.0003 7 17.2403 7 16.3413V16.0003H11V16.3413ZM17.521 13.2073L15.72 11.4043V6.93629C15.72 3.45529 13.218 0.499289 9.899 0.0592891C7.978 -0.195711 6.038 0.390289 4.583 1.66629C3.119 2.94829 2.28 4.79329 2.28 6.72729L2.279 11.4043L0.479 13.2083C0.00999963 13.6773 -0.129 14.3773 0.125 14.9903C0.38 15.6033 0.973 16.0003 1.637 16.0003H5V16.3413C5 18.3593 6.794 20.0003 9 20.0003C11.206 20.0003 13 18.3593 13 16.3413V16.0003H16.362C17.026 16.0003 17.619 15.6043 17.873 14.9903C18.128 14.3773 17.989 13.6773 17.521 13.2073Z'
            }
        />
    </svg>
)

const ForwardRef = forwardRef(BellIcon)

export {ForwardRef as BellIcon}
