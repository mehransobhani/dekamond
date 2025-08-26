"use client"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Button from "@/components/molecules/Button";
import FormField from "@/components/molecules/FormField";
import {useForm} from "react-hook-form";

interface loginFormProps {
    error: string;
    loading: boolean;
    submit: (formData: any) => Promise<any>;
}

export default function LoginForm({loading, submit, error}: loginFormProps) {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            mobile: "",
        },
    });
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                    Enter your mobile below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <FormField error={error} loading={loading} label={"mobile"} {...register("mobile")}/>
                        </div>
                        <Button loading={loading}>Login</Button>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
            </CardFooter>
        </Card>
    )
}
