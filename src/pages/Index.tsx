
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const featuredProducts = [
  {
    id: 1,
    name: "Advanced Pain Relief",
    description: "Fast-acting formula for headaches and body pain",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 12.99,
    category: "Pain Relief",
  },
  {
    id: 2,
    name: "Allergy Relief Tablets",
    description: "24-hour relief from seasonal allergies",
    image: "https://images.unsplash.com/photo-1587854680352-936b22b91030?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 15.49,
    category: "Allergy",
  },
  {
    id: 3,
    name: "Cold & Flu Syrup",
    description: "Multi-symptom relief for cold and flu",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 8.99,
    category: "Cold & Flu",
  },
  {
    id: 4,
    name: "Vitamin D3 Supplements",
    description: "Essential for bone health and immune function",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 19.99,
    category: "Vitamins",
  },
  {
    id: 5,
    name: "Digestive Health Probiotic",
    description: "Supports gut health and digestion",
    image: "https://www.shutterstock.com/image-photo/doctors-hand-holds-tablet-human-260nw-2466166723.jpg",
    price: 22.50,
    category: "Digestive Health",
  },
  {
    id: 6,
    name: "First Aid Antiseptic Spray",
    description: "Prevents infection in minor cuts and scrapes",
    image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 7.99,
    category: "First Aid",
  },
];

const HomePage = () => {
  const [bannerContent, setBannerContent] = useState({
    title: "Your Health, Our Priority",
    description:
      "Welcome to x-MED, your trusted online pharmacy for all your healthcare needs.",
    isAdmin: false, // Toggle this to show admin controls
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                {bannerContent.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8 animate-fade-in">
                {bannerContent.description}
              </p>
              <div className="space-x-4 animate-fade-in">
                <Button asChild>
                  <Link to="/products">Browse Products</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Pharmacy"
                className="rounded-lg shadow-xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admin-editable Banner */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold">
                {bannerContent.isAdmin ? (
                  <input
                    type="text"
                    value={bannerContent.title}
                    onChange={(e) =>
                      setBannerContent((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    className="bg-transparent border-b border-white outline-none w-full"
                  />
                ) : (
                  bannerContent.title
                )}
              </h2>
              <p className="text-blue-100">
                {bannerContent.isAdmin ? (
                  <textarea
                    value={bannerContent.description}
                    onChange={(e) =>
                      setBannerContent((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    className="bg-transparent border-b border-white outline-none w-full resize-none"
                    rows={2}
                  />
                ) : (
                  bannerContent.description
                )}
              </p>
            </div>
            {bannerContent.isAdmin ? (
              <Button variant="secondary" onClick={() => setBannerContent((prev) => ({ ...prev, isAdmin: false }))}>
                Save Changes
              </Button>
            ) : (
              bannerContent.isAdmin && (
                <Button variant="secondary" onClick={() => setBannerContent((prev) => ({ ...prev, isAdmin: true }))}>
                  Edit Banner
                </Button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <Badge variant="outline" className="animated-badge">{product.category}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                    <Button size="sm" asChild>
                      <Link to={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="mb-4 text-primary text-4xl flex justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12" 
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
              <h3 className="font-semibold text-lg">Trusted Quality</h3>
              <p className="text-gray-600 text-sm">Only genuine and authentic medicines</p>
            </div>
            <div className="p-6">
              <div className="mb-4 text-primary text-4xl flex justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Quick and reliable shipping</p>
            </div>
            <div className="p-6">
              <div className="mb-4 text-primary text-4xl flex justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" 
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Secure Payment</h3>
              <p className="text-gray-600 text-sm">Multiple secure payment options</p>
            </div>
            <div className="p-6">
              <div className="mb-4 text-primary text-4xl flex justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Always here to help you</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
