import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}

export default Profile;
