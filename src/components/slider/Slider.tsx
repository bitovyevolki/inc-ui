import * as SliderRadix from '@radix-ui/react-slider'

import s from './Slider.module.scss'

import { Typography } from '../typography'

type Props = {
  max?: number
  min?: number
  onChange?: (newValue: number[]) => void
  step?: number
  value: number[]
}

export const Slider = (props: Props) => {
  const { max = 10, min = 0, onChange, step = 1, value } = props

  return (
    <div className={s.wrapper}>
      <div>
        <Typography className={s.count} variant={'body1'}>
          {value[0]}
        </Typography>
      </div>
      <SliderRadix.Root
        className={s.SliderRoot}
        defaultValue={value}
        max={max}
        min={min}
        onValueChange={onChange}
        step={step}
      >
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
        <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
      </SliderRadix.Root>
      <div>
        <span className={s.count}>{value[1]}</span>
      </div>
    </div>
  )
}
