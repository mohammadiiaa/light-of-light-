import React, { useEffect } from 'react'

interface GoogleAdsenseProps {
  slot: string
  format?: string
  style?: React.CSSProperties
  responsive?: boolean
}

export default function GoogleAdsense({
  slot,
  format = 'auto',
  style = {},
  responsive = true,
}: GoogleAdsenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err);
      // Handle the error gracefully
      alert('Failed to load ads. Please try again later.');
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: 'block',
        ...style,
      }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense client ID
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  )
}