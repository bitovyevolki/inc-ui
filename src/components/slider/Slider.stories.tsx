import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import React from 'react'

import { Slider } from '.'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/UI/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderStory: Story = {
  args: {
    max: 10,
    min: 0,
    value: [2, 10],
  },
  render: args => {
    const [sliderValue, setSliderValue] = useState<number[]>(args.value)

    function onChangeSliderValue(value: number[]) {
      setSliderValue(value)
    }

    return <Slider {...args} onChange={onChangeSliderValue} value={sliderValue} />
  },
}
