import React from 'react'
import GoogleAdsense from './GoogleAdsense'

interface AdSectionProps {
  position: 'top' | 'sidebar' | 'content' | 'bottom'
}

export default function AdSection({ position }: AdSectionProps) {
  const getAdStyle = () => {
    switch (position) {
      case 'top':
        return { width: '100%', height: '90px', marginBottom: '1rem' }
      case 'sidebar':
        return { width: '300px', height: '600px' }
      case 'content':
        return { width: '100%', height: '250px', margin: '2rem 0' }
      case 'bottom':
        return { width: '100%', height: '90px', marginTop: '1rem' }
      default:
        return {}
    }
  }

  return (
    <div className={`ad-section ad-${position}`}>
      <GoogleAdsense
        slot={`ad-slot-${position}`}
        style={getAdStyle()}
        responsive={position !== 'sidebar'}
      />
    </div>
  )
} 