import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Terms = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20 bg-gray-900 min-h-screen">
      {/* Hero Header Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-purple-600/20 w-20 h-20 rounded-full flex items-center justify-center">
                <Shield className="h-10 w-10 text-purple-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-900 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            {/* Operator Information Box */}
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-l-4 border-purple-500 rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Operator Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                GrowthIQX (the "Platform") is a service provided and operated by Sri Sai Vedh Infotech,
                a partnership firm registered in India. All terms, conditions, and services are offered
                by Sri Sai Vedh Infotech.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Registered Address:</strong> [Insert your full registered address from your partnership deed here]
              </p>
            </div>

            {/* Terms Content */}
            <div className="space-y-10">
              <div className="border-b border-gray-700 pb-8">
                <h2 className="text-3xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using GrowthIQX, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not
                  use this service.
                </p>
              </div>

              <div className="border-b border-gray-700 pb-8">
                <h2 className="text-3xl font-bold text-white mb-4">2. Use License</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Permission is granted to temporarily access the services provided by GrowthIQX for
                  personal, non-commercial transitory viewing only. This is the grant of a license,
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>Modify or copy the materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>Use the materials for any commercial purpose or for any public display</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>Attempt to reverse engineer any software contained on GrowthIQX</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>Remove any copyright or other proprietary notations from the materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>Transfer the materials to another person or mirror the materials on any other server</span>
                  </li>
                </ul>
              </div>

              <div className="border-b border-gray-700 pb-8">
                <h2 className="text-3xl font-bold text-white mb-4">3. Service Description</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  GrowthIQX provides AI-powered solutions designed to help businesses optimize operations,
                  generate leads, and improve revenue. Services may include but are not limited to:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>AI automation and integration services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Business process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Lead generation solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Custom AI development</span>
                  </li>
                </ul>
              </div>

              <div className="border-b border-gray-700 pb-8">
                <h2 className="text-3xl font-bold text-white mb-4">4. Disclaimer</h2>
                <p className="text-gray-300 leading-relaxed">
                  The materials on GrowthIQX are provided on an 'as is' basis. Sri Sai Vedh Infotech
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other
                  warranties including, without limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or non-infringement of intellectual
                  property or other violation of rights.
                </p>
              </div>

              <div className="border-b border-gray-700 pb-8">
                <h2 className="text-3xl font-bold text-white mb-4">5. Limitations</h2>
                <p className="text-gray-300 leading-relaxed">
                  In no event shall Sri Sai Vedh Infotech or its suppliers be liable for any damages
                  (including, without limitation, damages for loss of data or profit, or due to business
                  interruption) arising out of the use or inability to use the materials on GrowthIQX,
                  even if Sri Sai Vedh Infotech or an authorized representative has been notified orally
                  or in writing of the possibility of such damage.
                </p>
              </div>

              <div className="border-b border-gray-700 pb-8">
                <h2 className="text-3xl font-bold text-white mb-4">6. Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your use of GrowthIQX is also governed by our Privacy Policy. We are committed to
                  protecting your personal information and respecting your privacy in accordance with
                  applicable Indian data protection laws.
                </p>
              </div>

              <div className="border-b border-gray-700 pb-8">
                <h2 className="text-3xl font-bold text-white mb-4">7. Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws
                  of India, and you irrevocably submit to the exclusive jurisdiction of the courts in
                  Hyderabad, India.
                </p>
              </div>

              <div className="border-b border-gray-700 pb-8">
                <h2 className="text-3xl font-bold text-white mb-4">8. Modifications</h2>
                <p className="text-gray-300 leading-relaxed">
                  Sri Sai Vedh Infotech may revise these terms of service at any time without notice.
                  By using GrowthIQX, you are agreeing to be bound by the then current version of these
                  terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">9. Contact Information</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-900/50 rounded-xl p-6 space-y-2">
                  <p className="text-gray-300">
                    <strong className="text-white">Email:</strong> info@maxscaleai.com
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Phone:</strong> +91-906-3338206
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Location:</strong> Hyderabad, India
                  </p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-12 pt-8 border-t border-gray-700 text-center">
              <p className="text-sm text-gray-400">
                Last Updated: March 11, 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
