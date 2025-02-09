import React, { createContext, useContext, ReactNode } from 'react'

interface TranslationContextType {
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const TranslationProvider = ({
  children,
  translations,
}: {
  children: ReactNode
  translations: Record<string, string>
}) => {
  const t = (key: string) => translations[key] || key

  return <TranslationContext.Provider value={{ t }}>{children}</TranslationContext.Provider>
}

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}
