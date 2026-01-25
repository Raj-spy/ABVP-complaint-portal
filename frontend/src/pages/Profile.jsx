import PageContainer from "../components/layout/PageContainer";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <PageContainer>
        <p className="text-center text-gray-500">
          Please login to view your profile.
        </p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="max-w-md mx-auto bg-white border rounded-xl p-6 shadow-sm">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">
            @{user.username}
          </h2>
          <p className="text-sm text-gray-500">
            Privacy-first user
          </p>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">User ID</span>
            <span>{user.id}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Communities</span>
            <span>{user.communities.length}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Friends</span>
            <span>{user.friends.length}</span>
          </div>
        </div>

        {/* Privacy message */}
        <div className="mt-6 p-3 bg-gray-50 rounded text-xs text-gray-600">
          Your profile data is visible only to you.
          You control what others can see.
        </div>
      </div>
    </PageContainer>
  );
}
