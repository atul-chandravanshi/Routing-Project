import React, { useState } from "react";

const User = () => {
  // Sample user data - in real app, this would come from props/API/context
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Developer",
    joinDate: "January 2024",
    avatar:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrmoafjK3Fn_2Q6h6PrCFq9bFJIuVm69jc_clt3on7b0SXrp2jzrBZCiC2_BMbfNDVgQCZ5YcgAbDHuxAeTCaUUrPr6Sk5rkKZqb6MUK8tB1Jk0051yKGyDqWkBROum5DwdEhsM=s1360-w1360-h1020-rw",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...user });

  const handleSave = () => {
    setUser({ ...editForm });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({ ...user });
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto mt-10 p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">User Profile</h1>
        <p className="text-gray-600">
          Manage your account information and preferences
        </p>
      </header>

      {/* Profile Card */}
      <main className="space-y-8">
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              {!isEditing ? (
                <>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                    {user.name}
                  </h2>
                  <p className="text-lg text-blue-600 mb-2">{user.email}</p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Role:</span> {user.role}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Member since:</span>{" "}
                    {user.joinDate}
                  </p>
                </>
              ) : (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) =>
                      setEditForm({ ...editForm, email: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    value={editForm.role}
                    onChange={(e) =>
                      setEditForm({ ...editForm, role: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Role"
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSave}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* User Stats */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24</div>
            <div className="text-green-800 font-medium">Projects</div>
            <div className="text-sm text-green-600">Completed</div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
            <div className="text-purple-800 font-medium">Tasks</div>
            <div className="text-sm text-purple-600">Total</div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">89%</div>
            <div className="text-orange-800 font-medium">Success Rate</div>
            <div className="text-sm text-orange-600">Average</div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-semibold">P</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">
                  Completed Project Alpha
                </p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-semibold">T</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Updated task status</p>
                <p className="text-sm text-gray-600">1 day ago</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-600 font-semibold">M</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Joined team meeting</p>
                <p className="text-sm text-gray-600">3 days ago</p>
              </div>
            </div>
          </div>
        </section>

        {/* Settings */}
        <section className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Account Settings
          </h3>
          <p className="text-gray-600 mb-4">
            Manage your preferences, privacy settings, and account security
          </p>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Open Settings
          </button>
        </section>
      </main>
    </div>
  );
};

export default User;
