"use client";

import { clearStoredUser } from "@/lib/storage";
import { useRouter } from "next/navigation";

export function useLogout() {
    const router = useRouter();

    function logout() {
        clearStoredUser();
        router.push("/login");
    }

    return logout;
}
