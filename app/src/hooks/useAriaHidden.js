import { useEffect, useRef, useState } from 'react'

function useAriaHidden({ selector }) {
  const [ariaHidden, setAriaHidden] = useState(false)
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const slickSlide = ref.current.closest(selector)
    const isHidden = slickSlide.ariaHidden === 'true'
    setAriaHidden(isHidden)
  }, [selector])

  return {
    isHidden: ariaHidden,
    ariaHiddenRef: ref
  }
}

export default useAriaHidden
