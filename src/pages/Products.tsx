
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { toast } from "sonner";

// Mock products data
const allProducts = [
  {
    id: 1,
    name: "Advanced Pain Relief",
    description: "Fast-acting formula for headaches and body pain",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 12.99,
    category: "Pain Relief",
    diagnosis: "Pain Management",
  },
  {
    id: 2,
    name: "Allergy Relief Tablets",
    description: "24-hour relief from seasonal allergies",
    image: "https://images.unsplash.com/photo-1587854680352-936b22b91030?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 15.49,
    category: "Allergy",
    diagnosis: "Allergy Treatment",
  },
  {
    id: 3,
    name: "Cold & Flu Syrup",
    description: "Multi-symptom relief for cold and flu",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 8.99,
    category: "Cold & Flu",
    diagnosis: "Respiratory Support",
  },
  {
    id: 4,
    name: "Vitamin D3 Supplements",
    description: "Essential for bone health and immune function",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 19.99,
    category: "Vitamins",
    diagnosis: "Nutritional Support",
  },
  {
    id: 5,
    name: "Digestive Health Probiotic",
    description: "Supports gut health and digestion",
    image: "https://www.shutterstock.com/image-photo/doctors-hand-holds-tablet-human-260nw-2466166723.jpg",
    price: 22.50,
    category: "Digestive Health",
    diagnosis: "Digestive Support",
  },
  {
    id: 6,
    name: "First Aid Antiseptic Spray",
    description: "Prevents infection in minor cuts and scrapes",
    image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 7.99,
    category: "First Aid",
    diagnosis: "Wound Care",
  },
  {
    id: 7,
    name: "Sleep Aid Tablets",
    description: "Helps you fall asleep faster and stay asleep longer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJU4LJtgPvxNy__hJO2WuQbFBb9U-JEDmwg8_v3JXue7B-aJyBaaAa3A7ka5waDnSNhM&usqp=CAU",
    price: 14.99,
    category: "Sleep & Relaxation",
    diagnosis: "Sleep Support",
  },
  {
    id: 8,
    name: "Blood Pressure Support",
    description: "Dietary supplement to support healthy blood pressure levels",
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 24.99,
    category: "Heart Health",
    diagnosis: "Cardiovascular Support",
  },
  {
    id: 9,
    name: "Multivitamin Complex",
    description: "Complete daily nutrition in one tablet",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 16.99,
    category: "Vitamins",
    diagnosis: "Nutritional Support",
  },
  {
    id: 10,
    name: "Hydrocortisone Cream",
    description: "Relieves itching, redness, and swelling",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/12/SQ/GF/SL/99449851/hydrocortisone1.jpg",
    price: 9.99,
    category: "Skin Care",
    diagnosis: "Dermatological Treatment",
  },
  {
    id: 11,
    name: "Omega-3 Fish Oil",
    description: "Supports heart, brain, and joint health",
    image: "https://www.shutterstock.com/image-illustration/gold-fish-oil-vitamins-omega-260nw-2411584831.jpg",
    price: 18.99,
    category: "Supplements",
    diagnosis: "Nutritional Support",
  },
  {
    id: 12,
    name: "Antacid Tablets",
    description: "Fast relief for heartburn and indigestion",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    price: 5.99,
    category: "Digestive Health",
    diagnosis: "Digestive Support",
  },
];

const categories = [
  "All Categories",
  "Pain Relief",
  "Allergy",
  "Cold & Flu",
  "Vitamins",
  "Digestive Health",
  "First Aid",
  "Sleep & Relaxation",
  "Heart Health",
  "Skin Care",
  "Supplements",
];

const diagnoses = [
  "All Diagnoses",
  "Pain Management",
  "Allergy Treatment",
  "Respiratory Support",
  "Nutritional Support",
  "Digestive Support",
  "Wound Care",
  "Sleep Support",
  "Cardiovascular Support",
  "Dermatological Treatment",
];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedDiagnosis, setSelectedDiagnosis] = useState("All Diagnoses");
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" || product.category === selectedCategory;
    const matchesDiagnosis =
      selectedDiagnosis === "All Diagnoses" || product.diagnosis === selectedDiagnosis;

    return matchesSearch && matchesCategory && matchesDiagnosis;
  });

  // Handle quantity change for a product
  const handleQuantityChange = (productId: number, value: string) => {
    const quantity = parseInt(value);
    setQuantities({ ...quantities, [productId]: quantity });
  };

  // Handle sharing product
  const handleShareProduct = (product: any) => {
    // In a real app, this would open a share dialog or create a shareable link
    toast.success(`Share link for ${product.name} copied to clipboard!`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Products
              </label>
              <Input
                id="search"
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Category
              </label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Diagnosis
              </label>
              <Select
                value={selectedDiagnosis}
                onValueChange={setSelectedDiagnosis}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select diagnosis" />
                </SelectTrigger>
                <SelectContent>
                  {diagnoses.map((diagnosis) => (
                    <SelectItem key={diagnosis} value={diagnosis}>
                      {diagnosis}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <Badge variant="outline" className="animated-badge">{product.category}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                    <Badge variant="secondary">{product.diagnosis}</Badge>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <label htmlFor={`quantity-${product.id}`} className="block text-sm text-gray-700">
                        Quantity:
                      </label>
                      <Select
                        value={String(quantities[product.id] || 1)}
                        onValueChange={(value) => handleQuantityChange(product.id, value)}
                      >
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={String(num)}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button className="flex-1">Add to Cart</Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleShareProduct(product)}
                        title="Share"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600">No products found matching your filters.</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filters.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Categories");
                setSelectedDiagnosis("All Diagnoses");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;
