import { FormEvent, useRef } from "react";
import { User } from "../data/data";

type UserFormProps = {
    title: string,
    onSubmitUser: (user : User) => void
}

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    const nameRef = useRef<HTMLInputElement>(null);
    const mailRef = useRef<HTMLInputElement>(null);
    const activeRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser = {
            name: nameRef.current?.value ?? "",
            email: mailRef.current?.value ?? "",
            isActive: activeRef.current?.checked ?? false,
        }
        onSubmitUser(newUser);
    };


    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                First Name: <input name="name" ref={nameRef} />
                Email: <input name="email" ref={mailRef} />
                Active: <input type="checkbox" name="isActive" ref={activeRef} />
                <button type="submit">Add User</button>
            </form>
        </>
    );
}
