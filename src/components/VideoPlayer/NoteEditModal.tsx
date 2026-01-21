import { ReactElement } from 'react'
import styled from 'styled-components'
import { Note } from './Player.interface'

const StyledModalHeader = styled.div`
  padding: 16px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 16px;
`

const StyledModalTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #1a202c;
`

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #718096;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #2d3748;
  }
`

const StyledModalContent = styled.div`
  padding: 0 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
  }
`

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  resize: vertical;
  min-height: 80px;
  flex: 1;

  &:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
  }
`

const StyledModalFooter = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e2e8f0;
  margin-top: auto;
`

const StyledButton = styled.button<{ $variant?: 'primary' | 'danger' | 'secondary' }>`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) => {
    switch (props.$variant) {
      case 'primary':
        return `
          background-color: #3182ce;
          color: white;
          &:hover { background-color: #2c5aa0; }
        `
      case 'danger':
        return `
          background-color: #e53e3e;
          color: white;
          &:hover { background-color: #c53030; }
        `
      default:
        return `
          background-color: #f7fafc;
          color: #2d3748;
          border: 1px solid #e2e8f0;
          &:hover { background-color: #edf2f7; }
        `
    }
  }}
`

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`

interface NoteEditModalProps {
  isFullscreen?: boolean
  note: Note
  notePosition: number
  alignment: 'left' | 'center' | 'right'
  editingTitle: string
  editingContent: string
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onCancel: () => void
  onDelete: () => void
  onSave: () => void
}

const NoteEditModal = ({
  editingTitle,
  editingContent,
  onTitleChange,
  onContentChange,
  onCancel,
  onDelete,
  onSave,
}: NoteEditModalProps): ReactElement => {
  return (
    <>
      <StyledModalHeader>
        <StyledModalTitle>Edit Note</StyledModalTitle>
        <StyledCloseButton onClick={onCancel}>×</StyledCloseButton>
      </StyledModalHeader>

      <StyledModalContent>
        <StyledInput
          type="text"
          placeholder="Note title..."
          value={editingTitle}
          onChange={onTitleChange}
        />
        <StyledTextarea
          placeholder="Add your note content..."
          value={editingContent}
          onChange={onContentChange}
        />
      </StyledModalContent>

      <StyledModalFooter>
        <StyledButton onClick={onDelete} $variant="danger">
          Delete
        </StyledButton>
        <StyledButtonGroup>
          <StyledButton onClick={onCancel}>Cancel</StyledButton>
          <StyledButton onClick={onSave} $variant="primary">
            Save
          </StyledButton>
        </StyledButtonGroup>
      </StyledModalFooter>
    </>
  )
}

export default NoteEditModal