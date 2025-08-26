"use client"

import LoginForm from "@/components/organisms/LoginForm";
import {fetchUser} from "@/services/api/auth";
import {useMutation} from "react-query";
import {validatePhone} from "@/lib/validators";
import {useState} from "react";
import {redirect} from "next/navigation";
import {storeUser} from "@/lib/storage";

export default function Login() {
    const [error, setError] = useState("");
    const mutation = useMutation({
        mutationKey: [`fetch-user`],
        mutationFn: async (formData: { mobile: string }) => {
            if (validatePhone(formData.mobile)) {
                setError("")
                return fetchUser();
            }
            setError("please enter valid number");
        },
        onSuccess: (data) => {
            if (data) {
                storeUser(data)
                // mutation.reset();
                // redirect("/")
            }
        },
    });
    return (<>
        <div className={"flex justify-center items-center w-full h-screen"}>
            <LoginForm
                error={error}
                loading={mutation.isLoading}
                submit={mutation.mutateAsync}
            />
        </div>
    </>)
}
