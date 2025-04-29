import { useEffect, RefObject } from 'react'

const useOnOutsideClick = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void,
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event)
      }
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

export default useOnOutsideClick
