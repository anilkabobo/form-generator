export default {
  title: 'Some Form',
  items: [
    {
      label: 'Some number',
      type: 'number'
    },
    {
      label: 'Some text',
      type: 'text',
      placeholder: 'placeholder'
    },
    {
      label: 'Description',
      type: 'textarea'
    },
    {
      label: 'Check',
      type: 'checkbox',
      options: [
        {
          name: 'option #1',
          value: '1'
        },
        {
          name: 'option #2',
          value: '2'
        },
        {
          name: 'option #3',
          value: '3'
        }
      ]
    },
    {
      label: 'Date',
      type: 'date'
    },
    {
      label: 'Radio',
      type: 'radio',
      options: [
        {
          name: 'option #1',
          value: '1'
        },
        {
          name: 'option #2',
          value: '2'
        },
        {
          name: 'option #3',
          value: '3'
        }
      ]
    }
  ],
  buttons: [
    {
      name: 'OK',
      action: 'submit'
    },
    {
      name: 'Cancel',
      action: 'cancel'
    }
  ]
};