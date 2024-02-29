import {User} from "../data/data";

export default function UserTable({ users }: {users: User[]}) {
    <table>
        <thead>
            <tr><td>ID</td><td>Name</td><td>Email</td><td>Active</td></tr>
        </thead>
        <tbody>
            {
                users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.isActive ? "Active" : "Not Active"}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>

}