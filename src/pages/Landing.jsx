import { useLoaderData } from "react-router-dom";
import Client from "../components/Client";
import { getClients } from "../api/clients";

export function loader() {
  return getClients();
}

const Landing = () => {
  const data = useLoaderData();

  return (
    <>
      <h1 className="text-4xl text-emerald-800 font-black">Clients</h1>

      {data.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-emerald-800 text-white">
            <tr>
              <th className="p-2">Client</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((obj) => (
              <Client key={obj.id} client={obj} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">{"There isn't clients yet"}</p>
      )}
    </>
  );
};

export default Landing;
