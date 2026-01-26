import React, { ReactElement, useState } from 'react'
import { useTheme } from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress'
import CancelIcon from '@mui/icons-material/Cancel'
import {
  Container,
  ItemContainer,
  CancelButton,
  InputFileContainer,
  UploadInput,
  ImagePlaceholder,
  InputLabel,
  ErrorText,
  Title,
  styles,
} from './styled-components'
import { IUploaderProps } from './uploader.interface'
import { Input } from '../Input'
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider'

interface ImageWithFallbackProps {
  src: string
  alt: string
}

const ImageWithFallback = ({ src, alt }: ImageWithFallbackProps): ReactElement => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <CircularProgress />
  }

  return (
    <img src={src} alt={alt} style={styles.thumbnail} onError={(): void => setHasError(true)} />
  )
}

interface IUploaderLoadingProps {
  type: string
  loading: number
}

const Loading = ({ type, loading }: IUploaderLoadingProps): ReactElement | undefined => {
  if (['video', 'audio'].includes(type as string)) {
    return <div style={{ marginLeft: '19px', marginTop: '2px' }}>{Math.round(loading as number)} %</div>
  }

  return (
    <div style={{ marginLeft: '19px', marginTop: '2px' }}>
      <CircularProgress style={{ width: '32px', height: '32px' }} />
    </div>
  )
}

export const Uploader = ({
  type,
  uploadedFile,
  label,
  inputValue,
  onInputChange,
  onFileChange,
  disabled,
  loading,
  deleteFile,
  id,
  accept,
  name,
  multiple,
  fileExtension,
  error,
  required = false,
}: IUploaderProps): ReactElement => {
  const { t } = useTranslation()
  const theme = useTheme()
  
  const getPrimaryColor = (): string => {
    const primaryColor = theme?.colors?.primary
    if (typeof primaryColor === 'string') return primaryColor
    if (primaryColor?.main) return primaryColor.main
    return 'var(--primary-color, #06c68f)'
  }
  
  const filePreview = (): ReactElement => {
    // pdf is in file type too so we need to check for pdf explicitly
    if (uploadedFile?.link?.split('.').pop() === 'pdf') {
      return (
        <ImagePlaceholder>
          <div style={{ fontSize: '10px', textAlign: 'center', padding: '4px', width: '72px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: '4px' }}>PDF</div>
        </ImagePlaceholder>
      )
    }
    switch (type) {
      case 'image':
        return (
          <ImagePlaceholder>
            <ImageWithFallback src={uploadedFile?.link || ''} alt='Image Thumbnail' />
          </ImagePlaceholder>
        )
      case 'file':
        return (
          <ImagePlaceholder>
            <div style={{ fontSize: '10px', textAlign: 'center', padding: '4px', width: '72px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: '4px' }}>FILE</div>
          </ImagePlaceholder>
        )
      case 'video':
        return (
          <div style={{ marginTop: '3px' }}>
            <div style={{ fontSize: '10px', textAlign: 'center', padding: '4px', width: '72px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: '4px' }}>VIDEO</div>
          </div>
        )
      case 'audio':
        return (
          <div style={{ marginTop: '3px' }}>
            <div style={{ fontSize: '10px', textAlign: 'center', padding: '4px', width: '72px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: '4px' }}>AUDIO</div>
          </div>
        )
      default:
        return (
          <ImagePlaceholder>
            <div style={{ fontSize: '10px', textAlign: 'center', padding: '4px', width: '72px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: '4px' }}>FILE</div>
          </ImagePlaceholder>
        )
    }
  }

  return (
    <div>
      {label && <Title $required={required}>{label}</Title>}
      <Container>
        <ItemContainer>
          {!uploadedFile && !loading && (
            <InputFileContainer>
              <UploadInput
                type='file'
                name={name}
                id={id}
                onChange={onFileChange}
                multiple={multiple}
                accept={accept}
              />

              <InputLabel htmlFor={id}>{t('actions.choose_file') || 'Choose File'}</InputLabel>
            </InputFileContainer>
          )}

          {loading && <Loading type={type || 'file'} loading={loading as number} />}

          {!disabled && uploadedFile && filePreview()}
        </ItemContainer>

        <ItemContainer>
          <Input
            label={inputValue ? '' : `${t('form_fields.file_name') || 'File name'} ${fileExtension || ''}`}
            name='file'
            size='small'
            type='text'
            fullWidth
            value={inputValue || ''}
            onChange={onInputChange}
            disabled={disabled}
          />
        </ItemContainer>

        {uploadedFile && (
          <CancelButton
            onClick={(e): void => {
              e.stopPropagation()
              if (deleteFile) {
                deleteFile()
              }
            }}
          >
            <CancelIcon style={{ color: getPrimaryColor() }} />
          </CancelButton>
        )}
      </Container>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  )
}
