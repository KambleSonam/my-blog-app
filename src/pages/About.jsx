import React from 'react';

const About = () => (
  <div className="bg-white rounded-lg shadow-md p-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">About This App</h2>
    <div className="prose max-w-none text-gray-600">
      <p className="mb-4">
        This is a demonstration of a React application with Server-Side Rendering (SSR). 
        In a real SSR setup, this content would be rendered on the server before being sent to the client.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Key SSR Benefits:</h3>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Improved initial page load performance</li>
        <li>Better SEO as search engines can crawl the fully rendered HTML</li>
        <li>Enhanced user experience on slower connections</li>
        <li>Faster time to first meaningful paint</li>
      </ul>
      <p>
        This demo simulates the SSR experience by showing how content would appear 
        when pre-rendered on the server, complete with styling and interactivity.
      </p>
    </div>
  </div>
);

export default About;