import Link from "next/link";


const Nav = () => (
  <div className="nav">
    <ul className="list-none">
      <div className="inline-block">
        <Link href="/">
          <li className="menu-item font-serif cursor-pointer">
            FOOD STORE
          </li>
        </Link>
      </div>

      <div className="inline-block">
        <Link href="/">
          <a className="menu-item">about</a>
        </Link>
      </div>

      <div className="inline-block">
        <Link href="/store">
          <a className="menu-item">store</a>
        </Link>
      </div>

    </ul>
  </div>
)

export default Nav;
