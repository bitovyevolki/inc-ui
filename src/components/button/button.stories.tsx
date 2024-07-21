import { type ComponentProps } from 'react'

import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from './button'

type StoryProps = ComponentProps<typeof Button>
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
      options: ['button', 'a'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/UI/Button',
} satisfies Meta<typeof Button>

export default meta

const defaultArgs: StoryProps = {
  children: 'Button',
  disabled: false,
  type: 'button',
  variant: 'primary',
}

export const PrimaryBtn: Story = {
  args: {
    ...defaultArgs,
  },
  name: 'Primary',
}

export const PrimaryBtnHover: Story = {
  args: {
    ...defaultArgs,
  },
  name: 'Primary hover',
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}

export const PrimaryBtnActive: Story = {
  args: {
    ...defaultArgs,
  },
  name: 'Primary active',
  parameters: {
    pseudo: {
      active: true,
    },
  },
}

export const PrimaryBtnFocus: Story = {
  args: {
    ...defaultArgs,
    children: 'Primary focus',
  },
  name: 'Primary focus',
  parameters: {
    pseudo: {
      focus: true,
    },
  },
}

export const PrimaryBtnDisabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
  name: 'Primary disabled',
}

export const OutlinedBtnHover: Story = {
  args: {
    ...defaultArgs,
    variant: 'outlined',
  },
  name: 'Outlined hover',
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}

export const OutlinedBtnDisabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
    variant: 'outlined',
  },
  name: 'Outlined disabled',
}

export const SecondaryBtnFocus: Story = {
  args: {
    ...defaultArgs,
    variant: 'secondary',
  },
  name: 'Secondary focus',
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}

export const SecondaryBtnDisabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
    variant: 'secondary',
  },
  name: 'Secondary disabled',
}

export const AlertOnClick: Story = {
  args: {
    ...defaultArgs,
    onClick: () => alert('Button clicked'),
  },
  name: 'On click',
}

export const ButtonAsLink: Story = {
  args: {
    as: 'a',
    children: 'This is a link',
    href: 'https://google.com',
    target: '_blank',
  },
  name: 'As link',
}
