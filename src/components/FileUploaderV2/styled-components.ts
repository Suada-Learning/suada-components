import styled from 'styled-components'

export const FileUploaderContainer = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 100%;
  transition: border 0.2s ease;

  .image_wrapper {
    position: relative;
    padding-top: 10px;
    width: 100px;
    height: 100px;
    border-radius: 4px;
    svg {
      position: absolute;
      right: -11px;
      top: 0px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .video_wrapper {
    padding: 5px 10px;
    background: #eee;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      color: red;
    }
  }

  .file_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    svg {
      font-size: 20px;
      color: red;
      margin-left: 10px;
    }
  }

  label {
    cursor: pointer;
    display: flex;
    .MuiSvgIcon-fontSizeLarge {
      font-size: 5.1875rem;
    }

    svg {
      transform: scale(0.8);
      transition: transform 0.2s ease;
    }
  }
  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    overflow: hidden;
  }

  &.full {
    display: flex;
    align-items: center;
    justify-content: center;

    header {
      margin-right: 15px;
    }

    label {
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    label svg {
      transform: scale(1);
    }
  }

  &.uploaded {
    border: 1px solid rgba(0, 0, 0, 0.3);

    header {
      color: rgba(0, 0, 0, 0.74);
    }

    label svg {
      transform: scale(1);
    }
  }
`

export const MediaUploading = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  border-radius: 4px;
`

export const MediaUploadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  > div {
    width: 100%;
    text-align: center;
  }
`

export const LoadingText = styled.div`
  margin-bottom: 15px;
`

export const FileUploaderHeader = styled.header`
  color: rgba(0, 0, 0, 0.54);
  transition: color 0.2 ease;
  svg {
    fill: #3f51b5;
  }
`
export const FileUploaderContent = styled.div``

export const Content = styled.div`
  background: #fff;
  position: relative;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`

// Uploader
export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const ErrorText = styled.div`
  font-size: 12px;
  color: #d32f2f;
  margin-left: 5px;
  margin-top: -15px;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`

export const ItemContainer = styled.div<{ width: string }>`
  width: ${({ width }): string => width || '100%'};
  position: relative;
`

export const InputContainer = styled.div`
  width: 390px;
`

export const CancelButton = styled.div<{ top?: string; right?: string }>`
  position: absolute;
  right: ${({ right }): string => right || '-13px'};
  top: ${({ top }): string => top || '5px'};
  cursor: pointer;
`

export const InputFileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  /* input {
    opacity: 0;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    overflow: hidden;
  }

  &label {
    width: 85%;
    height: 100%;
    cursor: pointer;
  } */
`

export const UploadInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  left: 0;
  width: 0;
  top: 0;
  overflow: hidden;
`

export const Label = styled.div`
  position: absolute;
  left: 0px;
  top: -15px;
  background: #fff;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
`

export const ImagePlaceholder = styled.div<{ height?: number }>`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  img {
    position: relative;
    border: 1px solid #08c694;
    width: 100%;
    height: ${({ height }): number => height || 60}px;
    object-fit: cover;
    top: 2px;
  }
`

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 5px 5px;
  max-width: 150px;
  cursor: pointer;
  background: #fff;
  border: 1px solid #08c694;
  color: #08c694;
  font-size: 19px;
  font-weight: 400;
  border-radius: 4px;
  width: 130px;
`

// UploaderButton

export const ButtonInputLabel = styled.label`
  cursor: pointer;
  color: #fff;
  background: #06c68f;
  font-size: 11px;
  padding: 4px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
`

export const FileUploadButton = styled.div`
  input {
    opacity: 0;
    width: 1px;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    overflow: hidden;
  }
`

export const VideoPlaceholder = styled.div`
  margin-left: auto;
  margin-top: 3px;
  width: 60px;
  cursor: pointer;
`

export const DefaultPlaceholder = styled.div`
  margin-left: 23px;
  margin-top: 3px;
  cursor: pointer;
`
export const LoadingProgressContainer = styled.div`
  margin-left: 19px;
  margin-top: 2px;
`

export const CircularProgressStyles = { width: '32px', height: '32px' }

export const Title = styled.h2<{ $required?: boolean }>`
  font-size: 16px;
  font-weight: 550;
  margin-bottom: 5px;

  ${({ $required }): string =>
    $required
      ? `
    &::after {
      content: '*';
      color: red;
      margin-left: 3px;
    }
  `
      : ''}
`
