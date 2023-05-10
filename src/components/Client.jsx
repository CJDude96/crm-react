import PropTypes from "prop-types";
import { useNavigate, Form, redirect } from "react-router-dom";
import { deleteClient } from "../api/clients";

export async function action({ params }) {
  await deleteClient(params.id);
  return redirect("/");
}

const Client = ({ client }) => {
  const navigate = useNavigate();
  const { name, email, phone, company, id } = client;

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{name}</p>
        <p>{company}</p>
      </td>

      <td className="p-6 text-center">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-semibold">Email: </span>
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-semibold">Phone: </span>
          {phone}
        </p>
      </td>

      <td className="p-6 gap-3 text-center space-x-3">
        <button
          type="button"
          className="text-green-600 hover:text-green-900 transition text-lg font-bold"
          onClick={() => navigate(`/clients/${id}/edit`)}
        >
          Update
        </button>
        <Form
          method="post"
          action={`/clients/${id}/delete`}
          onSubmit={(e) => {
            if (!confirm("Are you sure to delete this client?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-900 transition text-lg font-bold"
          >
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
};

Client.propTypes = {
  client: PropTypes.object,
};

export default Client;
