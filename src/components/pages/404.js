import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

const Page404 = () => {
  return (
    <div>
      <Spinner />
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>
        Page doesn't exist
      </p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginTop: "30px",
        }}
        to="/">
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
