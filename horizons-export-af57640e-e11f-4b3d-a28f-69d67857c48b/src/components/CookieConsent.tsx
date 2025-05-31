'use client'
import React, { useEffect } from 'react'

declare global {
  interface Window {
    cookieconsent: {
      initialise: (options: any) => void;
    }
  }
}

export default function CookieConsent() {
  useEffect(() => {
    const initializeCookieConsent = () => {
      if (typeof window !== 'undefined' && window.cookieconsent) {
        window.cookieconsent.initialise({
          onInitialise: function (status: string) {
            // Callback triggered when cookie consent is initialized
            console.log('Cookie consent status:', status)
          },
          onStatusChange: function (status: string) {
            // Callback triggered when cookie consent status changes
            console.log('Cookie consent status changed:', status)
          },
          onRevokeChoice: function () {
            // Callback triggered when user revokes their choice
            console.log('Cookie consent revoked')
          }
        })
      }
    }

    // Wait for the cookie consent script to load
    const checkCookieConsent = setInterval(() => {
      if (typeof window !== 'undefined' && window.cookieconsent) {
        initializeCookieConsent()
        clearInterval(checkCookieConsent)
      }
    }, 100)

    // Cleanup interval after 5 seconds if script doesn't load
    setTimeout(() => {
      clearInterval(checkCookieConsent)
    }, 5000)

    return () => {
      clearInterval(checkCookieConsent)
    }
  }, [])

  return null // This component doesn't render anything visible
} 