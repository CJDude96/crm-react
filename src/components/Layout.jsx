import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-emerald-900 px-5 py-10">
        <h2 className="text-4xl font-bold text-center text-white">
          CRM - Clients
        </h2>

        <nav className="mt-10">
          <Link
            to={"/"}
            className={`text-2xl block font-medium
            hover:text-green-200 mt-2 transition
            ${location.pathname === "/" ? "text-green-400" : "text-white"}`}
          >
            Index
          </Link>
          <Link
            to={"/new"}
            className={`text-2xl block text-white font-medium
            hover:text-green-200 mt-2 transition
            ${location.pathname === "/new" ? "text-green-400" : "text-white"}`}
          >
            New Client
          </Link>
        </nav>
      </aside>

      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
