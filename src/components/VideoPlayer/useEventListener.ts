import { useRef, useEffect, RefObject } from 'react'

const useEventListener = <T extends HTMLElement = HTMLDivElement>(
  eventName: keyof WindowEventMap,
  handler: (event: KeyboardEvent | Event) => void,
  element?: RefObject<T> | Window | null,
  shouldRun: () => boolean = (): boolean => true,
): void => {
  const savedHandler = useRef<(event: Event | KeyboardEvent) => void>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const targetElement: T | Window | null =
      element && 'current' in element ? element.current : window
    if (!targetElement) return

    const isSupported = targetElement.addEventListener
    if (!isSupported) return

    const eventListener = (event: Event | KeyboardEvent): void => {
      if (savedHandler.current && shouldRun()) {
        savedHandler.current(event)
      }
    }

    targetElement.addEventListener(eventName, eventListener)

    return () => {
      targetElement.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element, shouldRun])
}

export default useEventListener
