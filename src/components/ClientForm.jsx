import PropTypes from "prop-types";

const ClientForm = ({ client }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Insert name"
          name="name"
          defaultValue={client?.name}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="company">
          Company:
        </label>
        <input
          id="Company"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Insert company"
          name="company"
          defaultValue={client?.company}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="email">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Insert Email"
          name="email"
          defaultValue={client?.email}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="phone">
          Phone:
        </label>
        <input
          id="phone"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Insert phone number"
          name="phone"
          defaultValue={client?.phone}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="notes">
          Notes:
        </label>
        <textarea
          id="notes"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Insert Notes"
          name="notes"
          defaultValue={client?.notes}
        />
      </div>
    </>
  );
};

ClientForm.propTypes = {
  client: PropTypes.object,
};

export default ClientForm;
