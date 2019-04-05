import React from 'react'

import './Form.css'

export default ({
  name = 'Simple Form',
  subject = '', // optional subject of the notification email
  action = ''
}) => (
  <form
    className='Form'
    name={name}
    action={action}
    data-netlify=''
    data-netlify-honeypot='_gotcha'
  >
    <label className='Form--Label'>
      <input
        className='Form--Input'
        type='text'
        placeholder='Ihre Name'
        name='name'
        required
      />
    </label>
    <label className='Form--Label'>
      <input
        className='Form--Input'
        type='email'
        placeholder='Ihre Email'
        name='email'
        required
      />
    </label>
    <label className='Form--Label'>
      <textarea
        className='Form--Input Form--Textarea'
        placeholder='Ihre Nachricht'
        name='message'
        rows='10'
        required
      />
    </label>
    <input type='text' name='_gotcha' style={{ display: 'none' }} />
    {!!subject && <input type='hidden' name='subject' value={subject} />}
    <input type='hidden' name='form-name' value={name} />
    <input
      className='Button Form--SubmitButton'
      type='submit'
      value='Senden'
    />
  </form>
)
