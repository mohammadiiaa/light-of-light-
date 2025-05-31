import React, { useEffect } from 'react';

// Google Analytics tracking component
const GoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'GA_TRACKING_ID', { anonymize_ip: true });
    }
  }, []);

  return null;
};

export default GoogleAnalytics;

// Cookie Consent Banner
const CookieConsent = () => {
  useEffect(() => {
    const consentBanner = document.createElement('div');
    consentBanner.id = 'cookie-consent-banner';
    consentBanner.innerHTML = `
      <div style="position: fixed; bottom: 0; width: 100%; background: #000; color: #fff; text-align: center; padding: 10px; z-index: 9999;">
        This site uses cookies to improve your experience. By continuing, you agree to our use of cookies.
        <button id="accept-cookies" style="margin-left: 10px; background: #f90; color: #000; border: none; padding: 5px 10px; cursor: pointer;">Accept</button>
      </div>
    `;

    document.body.appendChild(consentBanner);

    const acceptButton = document.getElementById('accept-cookies');
    acceptButton?.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'true');
      const banner = document.getElementById('cookie-consent-banner');
      banner?.remove();
    });
  }, []);

  return null;
};

export { CookieConsent };
