import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'
import React from 'react'

const meta: Meta<typeof Input> = {
  component: Input,
  decorators: [
    Story => (
      <div style={{ margin: '10px', width: '400px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    onChange: () => {},
    placeholder: 'Email',
    value: 'Epam@epam.com',
  },
}

export const BaseWithError: Story = {
  args: {
    error: 'Some error',
    onChange: () => {},
    placeholder: 'Email',
    value: 'Epam@epam.com',
  },
}

export const BaseDisabled: Story = {
  args: {
    disabled: true,
    onChange: () => {},
    placeholder: 'Email',
    value: 'Epam@epam.com',
  },
}

export const Search: Story = {
  args: {
    onChange: () => {},
    placeholder: 'Search',
    value: 'Epam@epam.com',
    variant: 'search',
  },
}

export const SearchWithError: Story = {
  args: {
    error: 'Some error',
    onChange: () => {},
    placeholder: 'Search',
    value: 'Epam@epam.com',
    variant: 'search',
  },
}

export const SearchDisabled: Story = {
  args: {
    disabled: true,
    onChange: () => {},
    placeholder: 'Search',
    value: 'Epam@epam.com',
    variant: 'search',
  },
}

export const Password: Story = {
  args: {
    onChange: () => {},
    placeholder: 'Password',
    value: 'Epam@epam.com',
    variant: 'password',
  },
}

export const PasswordWithError: Story = {
  args: {
    error: 'Some error',
    onChange: () => {},
    placeholder: 'Password',
    value: 'Epam@epam.com',
    variant: 'password',
  },
}

export const PasswordDisabled: Story = {
  args: {
    disabled: true,
    onChange: () => {},
    placeholder: 'Password',
    value: 'Epam@epam.com',
    variant: 'password',
  },
}