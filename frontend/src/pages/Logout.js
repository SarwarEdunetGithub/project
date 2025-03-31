import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove token and user data
    localStorage.removeItem("token");
    setUser(null);

    // Redirect to login page
    navigate("/login");
  }, [navigate, setUser]);

  return (
    <div className="container text-center mt-5">
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;
