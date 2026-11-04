import { ReactElement } from 'react';
import { Note } from './Player.interface';
interface NoteEditModalProps {
    isFullscreen?: boolean;
    note: Note;
    notePosition: number;
    alignment: 'left' | 'center' | 'right';
    editingTitle: string;
    editingContent: string;
    onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onCancel: () => void;
    onDelete: () => void;
    onSave: () => void;
    isNewNote?: boolean;
}
declare const NoteEditModal: ({ note, editingTitle, editingContent, onTitleChange, onContentChange, onCancel, onDelete, onSave, }: NoteEditModalProps) => ReactElement;
export default NoteEditModal;
