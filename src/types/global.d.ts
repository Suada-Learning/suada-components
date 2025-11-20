// Global type declarations for packages without TypeScript definitions

declare module 'react-country-flag' {
  interface CountryFlagProps {
    countryCode: string
    svg?: boolean
    style?: React.CSSProperties
    title?: string
    cdnUrl?: string
    cdnSuffix?: string
    className?: string
  }
  
  const CountryFlag: React.FC<CountryFlagProps>
  export default CountryFlag
}

// Add other module declarations as needed
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.gif' {
  const content: string
  export default content
}