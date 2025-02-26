import React from 'react'
import { FileUploadButton, ButtonInputLabel } from './styled-components'
import { IUploaderButtonProps } from './uploader.interface'

const UploaderButton = ({ onChange, id, accept, loading, label }: IUploaderButtonProps) => {
  return (
    <FileUploadButton>
      <input type='file' onChange={onChange} id={id || 'id'} accept={accept} />
      {loading ? (
        'Loading...'
      ) : (
        <ButtonInputLabel htmlFor={id}>
          {/* <AddAPhotoIcon fontSize="small" /> */}
          <span>{label}</span>
        </ButtonInputLabel>
      )}
    </FileUploadButton>
  )
}

export default UploaderButton
