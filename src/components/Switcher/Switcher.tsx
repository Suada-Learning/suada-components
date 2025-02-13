import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    checked: true,
  })

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked) {
      setTimeout(() => {
        // dispatch({
        //   type: SET_SELECTED_COMPANY_ID,
        //   payload: null
        // });
        // clearCompanyModee();
      }, 300)
    }
    setState({ ...state, [name]: event.target.checked })
  }

  return (
    <FormControl variant='standard' component='fieldset'>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={state.checked} onChange={handleChange('checked')} value='checked' />
          }
          label='Company mode'
        />
      </FormGroup>
    </FormControl>
  )
}
