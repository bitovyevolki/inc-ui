import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

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
    value: [5],
    onValueChange: () => {},
  },
  render: args => {
    const [sliderValue, setSliderValue] = useState<number[]>(args.value)

    return (
      <>
        <Slider onValueChange={setSliderValue} value={sliderValue} />
        <div style={{ marginTop: '10px' }}>Value: {sliderValue}</div>
      </>
    )
  },
}
