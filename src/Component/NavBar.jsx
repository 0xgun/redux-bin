import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function NavBar() {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>Redux Tut</span>
      <div>
        <Link
          className='navLink'
          style={{
            fontWeight: "bolder",
          }}
          to={"/"}
        >
          Home
        </Link>
        <Link
          className='navLink'
          style={{
            fontWeight: "bolder",
            marginRight: "7px",
          }}
          to={"/cart"}
        >
          Cart
        </Link>
        <span
          style={{
            fontWeight: "bolder",
          }}
        >
          Items:{items.length}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
