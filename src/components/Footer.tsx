'use client'
import React from 'react'
import Link from 'next/link'
import { Heart, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Light of Light</h3>
            <p className="text-gray-700 text-sm">
              A sanctuary for exploring divine wisdom, nature's signs, and holistic healing.
              Join us on this journey of spiritual growth and well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/verses" className="text-gray-700 hover:text-amber-700 text-sm">
                  Verses of Wisdom
                </Link>
              </li>
              <li>
                <Link href="/names-of-god" className="text-gray-700 hover:text-amber-700 text-sm">
                  Names of God
                </Link>
              </li>
              <li>
                <Link href="/nature-universe" className="text-gray-700 hover:text-amber-700 text-sm">
                  Nature's Signs
                </Link>
              </li>
              <li>
                <Link href="/healing-facts" className="text-gray-700 hover:text-amber-700 text-sm">
                  Holistic Healing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-700 hover:text-amber-700 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-700 hover:text-amber-700 text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 text-sm">
              © {new Date().getFullYear()} Light of Light. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <Link
                href="/support"
                className="text-gray-700 hover:text-amber-700 text-sm flex items-center"
                aria-label="Support us"
              >
                Support Us <Heart className="w-4 h-4 ml-1" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-amber-700 text-sm flex items-center"
                aria-label="Contact us"
              >
                Contact <ExternalLink className="w-4 h-4 ml-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 