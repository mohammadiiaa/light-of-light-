'use client'
import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-700 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Light of Light. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Data We Collect</h2>
          <p className="text-gray-700 mb-4">We may collect, use, store and transfer different kinds of personal data about you:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Identity Data (name, username)</li>
            <li>Contact Data (email address)</li>
            <li>Technical Data (IP address, browser type and version)</li>
            <li>Usage Data (information about how you use our website)</li>
            <li>Marketing and Communications Data (your preferences in receiving marketing)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Data</h2>
          <p className="text-gray-700 mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to track the activity on our service and hold certain information. 
            Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Legal Rights</h2>
          <p className="text-gray-700 mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-700">
            Email: privacy@lightoflight.com<br />
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