import moment from "moment";

interface UserProfileProps {
  user: {
    name: string;
    username: string;
    email: string;
    bio: string;
    profile: string;
    joinDate: Date;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="max-w-2xl mt-4 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            className="w-16 h-16 rounded-full border-2 border-gray-200"
            src={"./user.jpg"}
            alt={`${user.name}'s profile picture`}
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{user.bio}</p>
        <div className="text-gray-600">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Joined:</strong>{" "}
            {moment(user.joinDate).format("YYYY-MM-DD")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
