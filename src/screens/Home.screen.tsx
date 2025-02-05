import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <Link to="/appointments">
        <button>Go to Appointments</button>
      </Link>
    </div>
  );
};
export default Home;
