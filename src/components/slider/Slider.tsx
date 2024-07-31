import * as SliderRadix from '@radix-ui/react-slider'

import s from './Slider.module.scss'

type SliderProps = {
  onValueChange: (value: number[]) => void
  value: number[]
} & SliderRadix.SliderProps

export const Slider = ({ value, ...rest }: SliderProps) => {
  return (
    <div className={s.wrapper}>
      <SliderRadix.Root className={s.SliderRoot} defaultValue={value} {...rest}>
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.SliderThumb} />
      </SliderRadix.Root>
    </div>
  )
}
