import { ReactNode } from 'react';
interface TranslationContextType {
    t: (key: string) => string;
}
export declare const TranslationProvider: ({ children, translations, }: {
    children: ReactNode;
    translations: Record<string, string>;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTranslation: () => TranslationContextType;
export {};
