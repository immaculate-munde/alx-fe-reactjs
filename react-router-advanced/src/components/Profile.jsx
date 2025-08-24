import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1 className="text-xl font-bold">Profile Page</h1>
      <nav className="space-x-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}
export default Profile;
