import { useState } from "react";
import { BaseProps } from "../types";
const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;

type User = { id: number; name: string };

function fetchUser(userId: number, options?: object): Promise<User> {
    return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) => res.json());
}

export default function FetchDemo1({ title }: BaseProps) {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchNextUser = async () => {
        const nextUser = user?.id + 1 <= 15 ? user.id + 1 : 1;
        setLoading(true);
        const theUser = await fetchUser(nextUser);
        setLoading(false);
        setUser(theUser);
    };

    fetchUser(userId).then((response) => {
        setUser(response);
        console.log(response);
    });

    return (
        <>
            <h2>{title}</h2>
            {user && JSON.stringify(user)}
            <br />
            <button onClick={fetchNextUser}>Next User</button>
        </>
    );
}