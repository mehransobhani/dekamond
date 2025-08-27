"use client"

import LoginForm from "@/components/organisms/LoginForm";
import {fetchUser} from "@/services/api/auth";
import {useMutation} from "react-query";
import {validateMobile} from "@/lib/validators";
import {useState} from "react";
import {redirect} from "next/navigation";
import {storeUser} from "@/lib/storage";

export default function Login() {
    const [error, setError] = useState("");
    const mutation = useMutation({
        mutationKey: [`fetch-user`],
        mutationFn: async (formData: { mobile: string }) => {
            //validate mobile number
            if (validateMobile(formData.mobile)) {
                //clear error
                setError("")
                return fetchUser();
            }
            //show error
            setError("please enter valid mobile number");
        },
        onSuccess: (data) => {
            if (data) {
                //add response to localstorage
                storeUser(data)
                //redirect to dashboard
                redirect("/")
            }
        },
    });
    return (<>
        <div className={"flex justify-center items-center w-full sm:min-h-screen p-1 sm:p-0"}>
            <LoginForm
                error={error}
                loading={mutation.isLoading}
                submit={mutation.mutateAsync}
            />
        </div>
    </>)
}
