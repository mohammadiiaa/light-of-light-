'use client'

import React from 'react'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing and using Light of Light, you agree to be bound by these Terms of Service and all applicable 
            laws and regulations. If you do not agree with any of these terms, you are prohibited from using or 
            accessing this site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials (information or software) on Light of Light's 
            website for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
            transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on Light of Light's website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
          <p>
            Our service allows you to post, link, store, share and otherwise make available certain information, 
            text, graphics, videos, or other material. You are responsible for the content that you post on or 
            through the service, including its legality, reliability, and appropriateness.
          </p>
          <p className="mt-4">
            By posting content on or through the service, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>The content is yours and/or you have the right to use it</li>
            <li>The posting of your content does not violate the privacy rights, publicity rights, copyrights, 
                contract rights or any other rights of any person</li>
            <li>Your content does not contain material that is defamatory, obscene, indecent, abusive, offensive, 
                harassing, violent, hateful, inflammatory, or otherwise objectionable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>
          <p>
            The materials on Light of Light's website are provided on an 'as is' basis. Light of Light makes no 
            warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
            without limitation, implied warranties or conditions of merchantability, fitness for a particular 
            purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitations</h2>
          <p>
            In no event shall Light of Light or its suppliers be liable for any damages (including, without 
            limitation, damages for loss of data or profit, or due to business interruption) arising out of the 
            use or inability to use the materials on Light of Light's website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Accuracy of Materials</h2>
          <p>
            The materials appearing on Light of Light's website could include technical, typographical, or 
            photographic errors. Light of Light does not warrant that any of the materials on its website are 
            accurate, complete or current. Light of Light may make changes to the materials contained on its 
            website at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Links</h2>
          <p>
            Light of Light has not reviewed all of the sites linked to its website and is not responsible for 
            the contents of any such linked site. The inclusion of any link does not imply endorsement by Light 
            of Light of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
          <p>
            Light of Light may revise these terms of service for its website at any time without notice. By using 
            this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and you 
            irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">Email:</p>
            <p className="text-amber-600">terms@light-of-light.vercel.app</p>
          </div>
        </section>
      </div>

      <div className="mt-8 pt-8 border-t">
        <Link
          href="/"
          className="text-amber-600 hover:text-amber-700 font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
} 