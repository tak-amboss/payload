import { CollectionConfig } from 'payload/types'
import { CustomView } from './CustomView'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    components: {
      views: {
        Edit: {
          Custom: {
            path: '/custom',
            Component: CustomView,
            Tab: {
              label: 'Custom View',
              href: '/custom',
            },
          },
        },
      },
    },
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'enableConditionalField',
      label: 'Enable Conditional Field',
      type: 'checkbox',
    },
    {
      name: 'conditionalField',
      label: 'Conditional Field',
      type: 'text',
      admin: {
        condition: (data) => data.enableConditionalField,
      },
    },
    {
      name: 'number',
      label: 'Number',
      type: 'number',
    },
    {
      name: 'select',
      label: 'Select',
      type: 'select',
      options: [
        {
          label: 'Option 1',
          value: 'option-1',
        },
        {
          label: 'Option 2',
          value: 'option-2',
        },
      ],
    },
    {
      name: 'group',
      label: 'Group',
      type: 'group',
      fields: [
        {
          name: 'groupText',
          label: 'Group Text',
          type: 'text',
        },
      ],
    },
    {
      label: 'Tabs',
      type: 'tabs',
      tabs: [
        {
          name: 'tab1',
          label: 'Tab 1 (Named)',
          validate: (value) => true,
          fields: [
            {
              name: 'tab1Text',
              label: 'Tab 1 Text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'Tab 2 (Unnamed)',
          fields: [
            {
              name: 'tab2Text',
              label: 'Tab 2 Text',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'rowText1',
          label: 'Row Text',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'rowText2',
          label: 'Row Text',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
}