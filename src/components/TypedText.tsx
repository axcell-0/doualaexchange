'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function TypedText() {
  const typedRef = useRef<HTMLSpanElement | null>(null)
  const typedInstance = useRef<Typed | null>(null)

  useEffect(() => {
    if (!typedRef.current) return

    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        'How will you use the app?'
      ],
      typeSpeed: 180,
      backSpeed: 0,
      loop: false,
      showCursor: false,
      fadeOut: false,
    })

    return () => {
      typedInstance.current?.destroy()
      typedInstance.current = null
    }
  }, [])

  return <span ref={typedRef} ></span>
}
