import React, { ReactElement } from 'react'

import CancelIcon from '@mui/icons-material/Cancel'
import CircularProgress from '@mui/material/CircularProgress'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import {
  Container,
  ItemContainer,
  CancelButton,
  InputFileContainer,
  UploadInput,
  ImagePlaceholder,
  InputLabel,
  VideoPlaceholder,
  DefaultPlaceholder,
  LoadingProgressContainer,
  CircularProgressStyles,
  FlexContainer,
  ErrorText,
  Title,
} from './styled-components'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import HeadsetIcon from '@mui/icons-material/Headset'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import { FileTypes, ILoadingProps, IUploadedFile, IUploaderProps } from './uploader.interface'
import { Input } from '../Input'
import { useTranslation } from '../Providers/TranslationProvider/TranslationProvider'

const Loading = ({ type, loading }: ILoadingProps): ReactElement | undefined => {
  if ([FileTypes.VIDEO, FileTypes.AUDIO].includes(type)) {
    return <LoadingProgressContainer>{Math.round(loading as number)} %</LoadingProgressContainer>
  }

  return (
    <LoadingProgressContainer>
      <CircularProgress style={CircularProgressStyles} />
    </LoadingProgressContainer>
  )
}

const handleFileClick = (link: string | undefined): void => {
  if (link) {
    window.open(link, '_blank')
  }
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
  placeHolder,
  showFullPreview = false,
  inputClassName,
  touched,
  error,
  nameClassName,
  required = false,
}: IUploaderProps): ReactElement => {
  const { t } = useTranslation()
  const InlineFilePreview = (): ReactElement => {
    const file = uploadedFile as IUploadedFile
    switch (type) {
      case FileTypes.IMAGE:
        return (
          <ImagePlaceholder
            onClick={(): void => {
              handleFileClick(file.link)
            }}
          >
            <img src={file?.link} alt='' />
          </ImagePlaceholder>
        )
      case FileTypes.VIDEO:
        return (
          <VideoPlaceholder
            onClick={(): void => {
              handleFileClick(file.links?.[4]?.url)
            }}
          >
            <OndemandVideoIcon color='secondary' />
          </VideoPlaceholder>
        )
      case FileTypes.AUDIO:
        return (
          <DefaultPlaceholder
            onClick={(): void => {
              handleFileClick(file.link)
            }}
          >
            <HeadsetIcon color='secondary' />
          </DefaultPlaceholder>
        )
      default:
        return (
          <DefaultPlaceholder
            onClick={(): void => {
              handleFileClick(file.link)
            }}
          >
            <InsertDriveFileIcon color='secondary' />
          </DefaultPlaceholder>
        )
    }
  }

  return (
    <Container>
      {label && <Title $required={required}>{label}</Title>}

      <FlexContainer>
        <ItemContainer width='75%'>
          <Input
            label=''
            placeholder={placeHolder ? placeHolder : 'Supported formats are PNG, JPG, JPEG'}
            name='file'
            size='small'
            type='text'
            fullWidth
            touched={touched}
            error={!!error}
            value={inputValue}
            onChange={onInputChange}
            disabled={disabled}
          />
        </ItemContainer>

        {/* Preview new variant */}
        {showFullPreview ? (
          <>
            <ItemContainer width='23%'>
              {loading ? (
                <Loading type={type as FileTypes} loading={loading} />
              ) : (
                <InputFileContainer>
                  <UploadInput
                    type='file'
                    className={nameClassName}
                    name={name}
                    id={id}
                    onChange={onFileChange}
                    multiple={multiple}
                    accept={accept}
                  />

                  <InputLabel htmlFor={id}>
                    <FileUploadOutlinedIcon />
                    {t('general.upload') || 'Upload'}{' '}
                  </InputLabel>
                </InputFileContainer>
              )}
            </ItemContainer>
            {uploadedFile && type === FileTypes.IMAGE && (
              <ImagePlaceholder height={160}>
                {uploadedFile.link && <img src={uploadedFile.link} alt='Input Image' />}
              </ImagePlaceholder>
            )}
            {uploadedFile && (
              <CancelButton onClick={deleteFile} right='160px' top={'37px'}>
                <CancelIcon style={{ color: 'rgba(179, 179, 184, 1)' }} />
              </CancelButton>
            )}
          </>
        ) : (
          <>
            {/* storing old variant for old inputs */}
            <ItemContainer width='23%'>
              {!uploadedFile && !loading && (
                <InputFileContainer>
                  <UploadInput
                    type='file'
                    className={inputClassName}
                    name={name}
                    id={id}
                    onChange={onFileChange}
                    multiple={multiple}
                    accept={accept}
                  />

                  <InputLabel htmlFor={id}>
                    <FileUploadOutlinedIcon />
                    {t('general.upload')}
                  </InputLabel>
                </InputFileContainer>
              )}

              {loading && <Loading type={type as FileTypes} loading={loading} />}
              {uploadedFile && InlineFilePreview()}
            </ItemContainer>
            {uploadedFile && (
              <CancelButton onClick={deleteFile}>
                <CancelIcon style={{ color: '#06C68F' }} />
              </CancelButton>
            )}{' '}
          </>
        )}
      </FlexContainer>
      {error && touched && <ErrorText>{error}</ErrorText>}
    </Container>
  )
}
