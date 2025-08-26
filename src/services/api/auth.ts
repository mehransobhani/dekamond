import {UserResponse} from "@/services/types/user";

export async function fetchUser(): Promise<UserResponse> {
    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");

    if (!res.ok) {
        throw new Error("Failed to fetch user");
    }

    const data = await res.json();

    const user = data.results[0];

    return user;
}
