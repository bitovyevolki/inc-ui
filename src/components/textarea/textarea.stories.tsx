import { type ComponentProps } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { TextArea } from './textarea'

type StoryProps = ComponentProps<typeof TextArea>
type Story = StoryObj<StoryProps> & StoryParameters

type StoryParameters = {
  parameters?: {
    pseudo?: {
      active?: boolean
      focus?: boolean
      hover?: boolean
    }
  }
}

const meta = {
  argTypes: {
    as: {
      control: {
        type: 'select',
      },
      options: ['Default', 'Active', 'Error', 'Hover', 'Focus', 'Disabled'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/UI/TextArea',
} satisfies Meta<typeof TextArea>

export default meta

const defaultArgs: StoryProps = {
  placeholder: 'Text-area',
  disabled: false,
}

export const DefaultTextArea: Story = {
  args: {
    ...defaultArgs,
  },
  name: 'Default',
}

export const ActiveTextArea: Story = {
  args: {
    ...defaultArgs,
  },
  name: 'Active',
  parameters: {
    pseudo: {
      active: true,
    },
  },
}

export const ErrorTextArea: Story = {
  args: {
    ...defaultArgs,
    style: { borderColor: 'red' },
  },
  name: 'Error',
}

export const HoverTextArea: Story = {
  args: {
    ...defaultArgs,
  },
  name: 'Hover',
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}

export const FocusTextArea: Story = {
  args: {
    ...defaultArgs,
  },
  name: 'Focus',
  parameters: {
    pseudo: {
      focus: true,
    },
  },
}

export const DisabledTextArea: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
  name: 'Disabled',
}
