"use client";

const users = [
  { name: "Manya Sharma", email: "manya@gmail.com", role: "Admin", created:"18/10/24 04:25", updated:"18/10/2024 04:27"},
  { name: "Sneha Verma", email: "sneha@gmail.com", role: "User", created:"18/10/24 04:25", updated:"18/10/2024 04:27"},
  { name: "Rahul Kumar", email: "rahul@gmail.com", role: "User", created:"18/10/24 04:25", updated:"18/10/2024 04:27"},
  { name: "Amit Sharma", email: "amit@gmail.com", role: "User", created:"18/10/24 04:25", updated:"18/10/2024 04:27"},
  { name: "Sneha Verma", email: "sneha@gmail.com", role: "User", created:"18/10/24 04:25", updated:"18/10/2024 04:27"},
  { name: "Rahul Kumar", email: "rahul@gmail.com", role: "User", created:"18/10/24 04:25", updated:"18/10/2024 04:27"},
  { name: "Amit Sharma", email: "amit@gmail.com", role: "User", created:"18/10/24 04:25", updated:"18/10/2024 04:27"},
  { name: "Sneha Verma", email: "sneha@gmail.com", role: "User", created:"18/10/24 04:25", updated:"18/10/2024 04:27"},
  { name: "Rahul Kumar", email: "rahul@gmail.com", role: "User", created:"18/10/24 04:25", updated:"18/10/2024 04:27"},
  { name: "Rahul Kumar", email: "rahul@gmail.com", role: "User", created:"18/10/24 04:25", updated:"18/10/2024 04:27"},

];

export default function UsersPage() {
  return (
    <div className="p-6">
      <h2 className="w-full text-3xl justify-between items-center bg-gray-200 border font-semibold mb-7 pt-17">Users</h2>

      <div className="bg-white shadow rounded-lg overflow-x:auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border text-left">Name</th>
              <th className="p-3 border text-left">Email</th>
              <th className="p-3 border text-left">Role</th>
              <th className="p-3 border text-left">Created at</th>
              <th className="p-3 border text-left">Updated at</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u,index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border">{u.name}</td>
                <td className="p-3 border">{u.email}</td>
                <td className="p-3 border">{u.role}</td>
                <td className="p-3 border">{u.created}</td>
                <td className="p-3 border">{u.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600 p-4">
      <p>Showing {users.length} of 10 results</p>
      <div className="flex gap-2">
         <button className="border rounded-md px-2 py-1 text-right">1</button>
         <button className="border rounded-md px-2 py-1 text-right">2</button>

      </div>
      </div>
    </div>
  );
}
