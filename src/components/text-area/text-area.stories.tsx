import { useState } from 'react'

import { TextArea } from './Text-Area'

export default {
  argTypes: {
    disabled: { control: 'boolean' },
    errorMessage: { control: 'text' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  component: TextArea,
  title: 'Components/UI/TextArea',
}

export const DefaultExample: React.FC = () => {
  const [value, setValue] = useState<string | undefined>('')

  return (
    <TextArea
      disabled={false}
      label={'Default TextArea'}
      onChange={e => setValue(e.target.value)}
      placeholder={'Type your message here...'}
      value={value}
    />
  )
}

export const DisabledExample: React.FC = () => (
  <TextArea
    disabled
    label={'Disabled TextArea'}
    placeholder={'Type your message here...'}
    value={''}
  />
)

export const WithErrorMessageExample: React.FC = () => (
  <TextArea
    disabled={false}
    errorMessage={'This field is required'}
    label={'TextArea with error message'}
    placeholder={'Type your message here...'}
    value={''}
  />
)
