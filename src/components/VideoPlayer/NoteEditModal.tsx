import { ReactElement } from 'react'
import styled from 'styled-components'
import { Note } from './Player.interface'
import { FormatSecondsToTimeString } from './timeConversion'
import { TimeIcon, TrashCanRed } from '../../icons'

const StyledModalHeader = styled.div`
  padding: 16px 20px 0;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 16px;
`

const StyledModalHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`

const StyledNoteHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const StyledModalTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #0f172a;
`

const StyledTimestamp = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #475569;
  font-weight: 500;
  background: #f1f5f9;
  padding: 3px 8px;
  border-radius: 5px;
  
  svg {
    width: 12px;
    height: 12px;
    color: #10b981;
    flex-shrink: 0;
  }
`

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #64748b;
  padding: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.15s ease;
  line-height: 1;

  &:hover {
    background: #f1f5f9;
    color: #334155;
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
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #0f172a;
  outline: none;
  box-sizing: border-box;
  transition: all 0.15s ease;

  &:focus {
    background: white;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 8px 12px 8px 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #0f172a;
  outline: none;
  resize: none;
  min-height: 80px;
  flex: 1;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1.5;
  transition: all 0.15s ease;

  &:focus {
    background: white;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
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
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: fit-content;

  ${(props) => {
    switch (props.$variant) {
      case 'primary':
        return `
          background: #10b981;
          color: white;
          &:hover:not(:disabled) { 
            background: #059669;
            transform: translateY(-1px);
          }
          &:active:not(:disabled) {
            background: #047857;
            transform: translateY(0);
          }
        `
      case 'danger':
        return `
          background: transparent;
          color: #dc2626;
          &:hover:not(:disabled) { 
            background: #fef2f2;
          }
          &:active:not(:disabled) {
            background: #fee2e2;
          }
        `
      default:
        return `
          background: #f1f5f9;
          color: #334155;
          &:hover:not(:disabled) { 
            background: #e2e8f0;
            transform: translateY(-1px);
          }
          &:active:not(:disabled) {
            background: #cbd5e1;
            transform: translateY(0);
          }
        `
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 12px;
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
  isNewNote?: boolean
}

const NoteEditModal = ({
  note,
  editingTitle,
  editingContent,
  onTitleChange,
  onContentChange,
  onCancel,
  onDelete,
  onSave,
}: NoteEditModalProps): ReactElement => {
  const isEmptyNote = !note.id || note.id.startsWith('note_')
  const modalTitle = isEmptyNote ? 'Add Note' : 'Edit Note'
  const timestamp = FormatSecondsToTimeString(note.moment)

  // Check if there are changes for existing notes
  const hasChanges = isEmptyNote 
    ? (editingTitle.trim() || editingContent.trim()) // For new notes, require at least some content
    : (editingTitle !== note.title || editingContent !== (note.description || '')) // For existing notes, check if anything changed

  return (
    <>
      <StyledModalHeader>
        <StyledModalHeaderTop>
          <StyledModalTitle>{modalTitle}</StyledModalTitle>
          <StyledNoteHeaderContainer>
            <StyledTimestamp>
              <TimeIcon />
              <span>at {timestamp}</span>
            </StyledTimestamp>
            <StyledCloseButton onClick={onCancel}>×</StyledCloseButton>
          </StyledNoteHeaderContainer>
        </StyledModalHeaderTop>
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
        {!isEmptyNote && (
          <StyledButton onClick={onDelete} $variant="danger">
            <TrashCanRed style={{ width: '16px', height: '16px', marginRight: '6px' }} />
            Delete
          </StyledButton>
        )}
        <StyledButtonGroup style={{ marginLeft: isEmptyNote ? 'auto' : 'initial' }}>
          <StyledButton onClick={onCancel}>Cancel</StyledButton>
          <StyledButton onClick={onSave} $variant="primary" disabled={!hasChanges}>
            {isEmptyNote ? 'Add Note' : 'Save'}
          </StyledButton>
        </StyledButtonGroup>
      </StyledModalFooter>
    </>
  )
}

export default NoteEditModal