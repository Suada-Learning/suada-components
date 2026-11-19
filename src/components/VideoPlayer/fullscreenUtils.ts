// iOS Safari only has the webkit-prefixed API on elements, and on iPhone only a <video> can go fullscreen.
interface WebkitFullscreenElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void> | void
}

interface WebkitVideoElement extends HTMLVideoElement {
  webkitEnterFullscreen?: () => void
}

interface WebkitFullscreenDocument extends Document {
  webkitFullscreenElement?: Element | null
  webkitExitFullscreen?: () => Promise<void> | void
}

export const getFullscreenElement = (): Element | null => {
  const doc = document as WebkitFullscreenDocument
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null
}

/** Enters fullscreen with whatever this browser supports; does nothing where none is available. */
export const requestElementFullscreen = (
  element: HTMLElement,
  video?: HTMLVideoElement | null,
): void => {
  const target = element as WebkitFullscreenElement
  const videoTarget = video as WebkitVideoElement | null | undefined

  if (typeof target.requestFullscreen === 'function') {
    target.requestFullscreen().catch(console.error)
    return
  }

  if (typeof target.webkitRequestFullscreen === 'function') {
    Promise.resolve(target.webkitRequestFullscreen()).catch(console.error)
    return
  }

  if (typeof videoTarget?.webkitEnterFullscreen === 'function') {
    videoTarget.webkitEnterFullscreen()
  }
}

export const exitDocumentFullscreen = (): void => {
  const doc = document as WebkitFullscreenDocument

  if (typeof doc.exitFullscreen === 'function') {
    doc.exitFullscreen().catch(console.error)
    return
  }

  if (typeof doc.webkitExitFullscreen === 'function') {
    Promise.resolve(doc.webkitExitFullscreen()).catch(console.error)
  }
}
