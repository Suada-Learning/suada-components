import { Preview } from '@storybook/react'
import { themes } from '../src/theme/Theme'
import { withProviders } from './withProviders'

export const decorators = [withProviders]

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Select theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: Object.keys(themes),
        showName: true,
      },
    },
  },
}

export default preview
