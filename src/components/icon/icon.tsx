import React from "react"

import sprite from "../../assets/icons/sprite.svg"

type IconProps = {
  name: string
  width?: number
  height?: number
} & React.ComponentPropsWithoutRef<"svg">

export const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24, ...rest }) => {
  return (
    <svg {...rest} width={width} height={height}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  )
}
