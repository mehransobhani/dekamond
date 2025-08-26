import {StoredUser, UserResponse} from "@/services/types/user";

const LOCAL_STORAGE_KEY = "user";

export function storeUser(user: UserResponse) {
    const storedUser: StoredUser = {
        name: `${user.name.first} ${user.name.last}  `,
        email: user.email,
        picture: user.picture.large,
    };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedUser));
}

export function getStoredUser(): StoredUser | null {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) return null;
    try {
        return JSON.parse(data) as StoredUser;
    } catch {
        return null;
    }
}

export function clearStoredUser() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}
