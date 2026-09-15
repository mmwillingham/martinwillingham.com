'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    Payhip?: {
      Setup: () => void
      Button?: {
        initiateBuyButtons: () => void
        initiateAddToCartButtons: () => void
      }
    }
    PayhipConfig?: {
      enableCart?: boolean
    }
    PayhipSetupFinished?: boolean
  }
}

const PAYHIP_LOADER_SRC = 'https://payhip.com/payhip.js'
const PAYHIP_LOADER_ATTR = 'data-payhip-loader'

function bindPayhipButtons(): boolean {
  if (!window.Payhip) return false

  if (!window.PayhipSetupFinished) {
    window.Payhip.Setup()
  } else {
    window.Payhip.Button?.initiateBuyButtons()
    window.Payhip.Button?.initiateAddToCartButtons()
  }

  return Boolean(window.PayhipSetupFinished)
}

function waitForPayhipAndBind(): () => void {
  if (bindPayhipButtons()) {
    return () => {}
  }

  const intervalId = window.setInterval(() => {
    if (bindPayhipButtons()) {
      window.clearInterval(intervalId)
    }
  }, 50)

  const timeoutId = window.setTimeout(() => {
    window.clearInterval(intervalId)
  }, 10000)

  return () => {
    window.clearInterval(intervalId)
    window.clearTimeout(timeoutId)
  }
}

function ensurePayhipLoader(): void {
  window.PayhipConfig = {
    ...window.PayhipConfig,
    enableCart: true,
  }

  if (document.querySelector(`script[${PAYHIP_LOADER_ATTR}]`)) {
    return
  }

  const script = document.createElement('script')
  script.src = PAYHIP_LOADER_SRC
  script.async = true
  script.setAttribute(PAYHIP_LOADER_ATTR, 'true')
  document.head.appendChild(script)
}

/**
 * Loads Payhip and binds buy/cart buttons after mount (and on route changes).
 * Payhip only auto-runs Setup on window "load"; with Next.js the script often
 * arrives too late, so clicks fall through to payhip.com.
 */
export function PayhipScript(): null {
  const pathname = usePathname()

  useEffect(() => {
    ensurePayhipLoader()
    return waitForPayhipAndBind()
  }, [pathname])

  return null
}
