export default function Table({ data }) {
  return (
    <table className="w-full border-collapse">
      <thead className="bg-gray-100 text-left">
        <tr>
          <th className="p-3 border">Name</th>
          <th className="p-3 border">Email</th>
          <th className="p-3 border">Role</th>
          <th className="p-3 border">Created at</th>
          <th className="p-3 border">Updated at</th>

        </tr>
      </thead>

      <tbody>
        {data.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="p-3 border">{user.name}</td>
            <td className="p-3 border">{user.email}</td>
            <td className="p-3 border">{user.role}</td>
            <td className="p-3 border">{user.Createdat}</td>
            <td className="p-3 border">{user.Updatedat}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}
