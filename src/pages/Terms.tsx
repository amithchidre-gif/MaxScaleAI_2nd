import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Operator Information</h2>
          <p className="text-gray-700 mb-4">
            GrowthIQX (the "Platform") is a service provided and operated by Sri Sai Vedh Infotech,
            a partnership firm registered in India. All terms, conditions, and services are offered
            by Sri Sai Vedh Infotech.
          </p>
          <p className="text-gray-700">
            <strong>Registered Address:</strong> [Insert your full registered address from your partnership deed here]
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using GrowthIQX, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not
              use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily access the services provided by GrowthIQX for
              personal, non-commercial transitory viewing only. This is the grant of a license,
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on GrowthIQX</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or mirror the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Description</h2>
            <p className="text-gray-700 mb-4">
              GrowthIQX provides AI-powered solutions designed to help businesses optimize operations,
              generate leads, and improve revenue. Services may include but are not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>AI automation and integration services</li>
              <li>Business process optimization</li>
              <li>Lead generation solutions</li>
              <li>Custom AI development</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The materials on GrowthIQX are provided on an 'as is' basis. Sri Sai Vedh Infotech
              makes no warranties, expressed or implied, and hereby disclaims and negates all other
              warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of intellectual
              property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitations</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Sri Sai Vedh Infotech or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the materials on GrowthIQX,
              even if Sri Sai Vedh Infotech or an authorized representative has been notified orally
              or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              Your use of GrowthIQX is also governed by our Privacy Policy. We are committed to
              protecting your personal information and respecting your privacy in accordance with
              applicable Indian data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws
              of India, and you irrevocably submit to the exclusive jurisdiction of the courts in
              Hyderabad, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications</h2>
            <p className="text-gray-700 mb-4">
              Sri Sai Vedh Infotech may revise these terms of service at any time without notice.
              By using GrowthIQX, you are agreeing to be bound by the then current version of these
              terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p className="text-gray-700">
              Email: info@maxscaleai.com<br />
              Phone: +91-906-3338206<br />
              Location: Hyderabad, India
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Last Updated: March 11, 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
