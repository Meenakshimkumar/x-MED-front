
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com", // Non-editable
    phone: "+1 (555) 123-4567",
    place: "New York, NY",
    avatar: "", // URL for uploaded image
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempProfile({ ...tempProfile, [name]: value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Update profile with temp changes
    const updatedProfile = { ...profile, ...tempProfile };
    
    // In a real app, this is where you'd upload the avatar
    if (previewUrl) {
      updatedProfile.avatar = previewUrl;
    }
    
    setProfile(updatedProfile);
    setIsEditing(false);
    setAvatarFile(null);
    
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setTempProfile({ ...profile });
    setIsEditing(false);
    setPreviewUrl(null);
    setAvatarFile(null);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">My Profile</h1>

          <Card className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar section */}
              <div className="flex flex-col items-center w-full md:w-1/3">
                <div className="mb-4 relative">
                  <Avatar className="w-32 h-32 border-2 border-primary">
                    <AvatarImage src={previewUrl || profile.avatar || undefined} />
                    <AvatarFallback className="text-4xl bg-primary text-white">
                      {profile.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <div className="absolute bottom-0 right-0">
                      <Label
                        htmlFor="avatar-upload"
                        className="cursor-pointer bg-primary text-white rounded-full p-2 shadow-md hover:bg-primary/90 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Label>
                      <Input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarChange}
                      />
                    </div>
                  )}
                </div>
                {!isEditing && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </Button>
                )}
              </div>

              {/* Profile details section */}
              <div className="flex-1 w-full">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={isEditing ? tempProfile.name : profile.name}
                      onChange={handleInputChange}
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-gray-50" : ""}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      readOnly
                      className="bg-gray-50"
                    />
                    <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={isEditing ? tempProfile.phone : profile.phone}
                      onChange={handleInputChange}
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-gray-50" : ""}
                    />
                  </div>

                  <div>
                    <Label htmlFor="place">Place</Label>
                    <Input
                      id="place"
                      name="place"
                      value={isEditing ? tempProfile.place : profile.place}
                      onChange={handleInputChange}
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-gray-50" : ""}
                    />
                  </div>

                  {isEditing && (
                    <div className="flex gap-2 mt-6">
                      <Button onClick={handleSave}>Save Changes</Button>
                      <Button variant="outline" onClick={handleCancel}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
