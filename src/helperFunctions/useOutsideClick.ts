import { useEffect, RefObject } from 'react'

type Callback = () => void

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: Callback): void => {
  const handleClick = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref, callback])
}

export default useOutsideClick
