"use client";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {StoredUser} from "@/services/types/user";
import {getStoredUser} from "@/lib/storage";

export function useAuth(redirectIfNoUser: boolean = true) {
    const [user, setUser] = useState<StoredUser | null>(null);
    const router = useRouter();

    useEffect(() => {
        const stored = getStoredUser();
        setUser(stored);

        if (!stored && redirectIfNoUser) {
            router.replace("/login");
        }
    }, [redirectIfNoUser, router]);

    return user;
}
