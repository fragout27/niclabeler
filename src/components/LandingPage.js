// components/LandingPage.js
import React from 'react';

const LandingPage = ({ onStartLabeling }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Welcome to <span className="text-indigo-600">Niclabeler</span>
      </h1>
      <p className="mt-6 text-xl text-gray-500">
        Easily add FDA-compliant nicotine warning labels to your product images for social media.
      </p>
      
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">How to use Niclabeler</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="ml-3 text-sm text-gray-700">Upload your product images (up to 50 at a time)</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="ml-3 text-sm text-gray-700">Customize label position (top/bottom) and style (inside/outside image)</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="ml-3 text-sm text-gray-700">Apply settings to all images or customize individually</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="ml-3 text-sm text-gray-700">Download your labeled images, ready for social media use</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Why use nicotine warning labels?</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="ml-3 text-sm text-gray-700">Comply with FDA regulations for nicotine product advertising</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="ml-3 text-sm text-gray-700">Increase consumer awareness about nicotine content</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="ml-3 text-sm text-gray-700">Demonstrate responsible marketing practices</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="ml-3 text-sm text-gray-700">Avoid potential legal issues and fines</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12">
        <button
          onClick={onStartLabeling}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Start Labeling
        </button>
      </div>
    </div>
  );
};

export default LandingPage;