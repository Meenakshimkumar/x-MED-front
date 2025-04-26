
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
          <p className="text-gray-600 text-center mb-10">
            We're here to help. Reach out to us through any of the channels below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Contact */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">
                    For general inquiries and support
                  </p>
                  <a
                    href="mailto:support@xmed.example"
                    className="text-primary hover:underline font-medium"
                  >
                    support@xmed.example
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Phone 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
                  <p className="text-gray-600 mb-4">
                    For orders and delivery inquiries
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="text-primary hover:underline font-medium"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Phone 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Medical Support</h3>
                  <p className="text-gray-600 mb-4">
                    For product and medical inquiries
                  </p>
                  <a
                    href="tel:+15559876543"
                    className="text-primary hover:underline font-medium"
                  >
                    +1 (555) 987-6543
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
            <div className="max-w-xs mx-auto">
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Monday - Friday</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Saturday</span>
                <span>10:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Map or Address */}
          <div className="mt-12 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Our Location</h2>
            <p className="text-center mb-4">
              123 Medical Plaza, Health City, CA 90210
            </p>
            <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              {/* In a real app, this would be a Google Maps embed */}
              <div className="text-gray-500 text-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>Google Maps would be embedded here in a production application.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
