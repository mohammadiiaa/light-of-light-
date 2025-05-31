'use client'

import React, { useEffect } from 'react'
import { Globe } from 'lucide-react'

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google: {
      translate: {
        TranslateElement: any
      }
    }
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Add Google Translate script
    const script = document.createElement('script')
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ar,fr,es,de,it,pt,ru,zh-CN,ja,ko', // Add more languages as needed
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    return () => {
      // Cleanup
      document.body.removeChild(script)
      if (window.googleTranslateElementInit) {
        delete window.googleTranslateElementInit
      }
    }
  }, [])

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-5 h-5 text-gray-800" />
      <div id="google_translate_element" className="!w-[200px]" />
    </div>
  )
} 