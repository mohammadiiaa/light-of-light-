'use client'
import React from 'react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-700 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using Light of Light, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
          <p className="text-gray-700 mb-4">
            The Service and its original content (excluding Content provided by users), features, and functionality are and will remain 
            the exclusive property of Light of Light and its licensors. The Service is protected by copyright, trademark, and other laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
          <p className="text-gray-700 mb-4">
            When you create an account with us, you guarantee that the information you provide us is accurate, complete, and current at all times. 
            Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Content</h2>
          <p className="text-gray-700 mb-4">
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, 
            or other material. You are responsible for the content that you post on or through the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Prohibited Uses</h2>
          <p className="text-gray-700 mb-4">You may use our Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>In any way that violates any applicable national or international law or regulation</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            In no event shall Light of Light, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
            incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
            intangible losses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide 
            at least 30 days' notice prior to any new terms taking effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-gray-700">
            Email: legal@lightoflight.com<br />
            Address: [Your Business Address]
          </p>
        </section>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link href="/" className="text-amber-600 hover:text-amber-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 