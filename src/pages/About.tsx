
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">About x-MED</h1>
          <p className="text-lg text-gray-600">
            Your trusted partner in health and wellness since 2010. We are
            committed to providing quality medications and healthcare products
            with exceptional service.
          </p>
        </div>

        {/* Mission and vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-gray-700">
                To make quality healthcare accessible to everyone through reliable
                pharmaceutical services, ensuring that every customer receives the
                right medication with professional guidance and care.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-gray-700">
                To be the leading online pharmacy that transforms how people
                access healthcare products, making it easier, safer, and more
                personalized through innovative technology and professional
                expertise.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-700 mb-4">
              x-MED was founded in 2010 by a team of healthcare professionals who
              recognized the need for a more accessible and customer-friendly
              pharmacy experience. What started as a small local pharmacy has
              grown into a trusted online platform serving thousands of customers
              nationwide.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey began with a simple belief: that everyone deserves easy
              access to quality medications and professional healthcare advice. Over
              the years, we've expanded our product range and services while
              maintaining our core values of trust, quality, and customer care.
            </p>
            <p className="text-gray-700">
              Today, x-MED stands as a testament to our commitment to improving
              healthcare accessibility. We continue to innovate and grow, always
              keeping our customers' wellbeing at the heart of everything we do.
            </p>
          </div>
        </div>

        {/* Team section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member 1 */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Dr. Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-1">Dr. Sarah Johnson</h3>
                <p className="text-primary font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years of experience in pharmaceutical research and
                  healthcare management, Dr. Johnson leads our mission to make
                  healthcare more accessible.
                </p>
              </CardContent>
            </Card>

            {/* Team member 2 */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="David Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-1">David Chen</h3>
                <p className="text-primary font-medium mb-3">Head Pharmacist</p>
                <p className="text-gray-600 text-sm">
                  A board-certified pharmacist with expertise in medication
                  management and patient education, David ensures the highest
                  standards in our pharmaceutical services.
                </p>
              </CardContent>
            </Card>

            {/* Team member 3 */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Emily Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-1">Emily Rodriguez</h3>
                <p className="text-primary font-medium mb-3">Customer Experience Director</p>
                <p className="text-gray-600 text-sm">
                  With a background in healthcare administration and customer
                  service, Emily leads our efforts to create seamless and
                  supportive experiences for all our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Trust & Integrity</h3>
              </div>
              <p className="text-gray-600">
                We maintain the highest ethical standards in all our operations,
                ensuring that customers can trust the quality and authenticity of
                our products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Innovation</h3>
              </div>
              <p className="text-gray-600">
                We continuously seek new ways to improve our services and
                enhance the customer experience through technology and creative
                solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Customer Care</h3>
              </div>
              <p className="text-gray-600">
                We're dedicated to providing personalized service and support,
                treating each customer with empathy, respect, and individual
                attention.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Professional Excellence</h3>
              </div>
              <p className="text-gray-600">
                We uphold the highest professional standards in our work,
                constantly striving for excellence in every aspect of our
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
