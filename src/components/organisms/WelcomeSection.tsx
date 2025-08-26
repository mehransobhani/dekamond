import {StoredUser} from "@/services/types/user";
import {CheckCircle2Icon} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

interface WelcomeSectionProps {
    user: StoredUser;
}

export default function WelcomeSection({user}: WelcomeSectionProps) {
    return (<div className={"flex flex-col gap-2 justify-center items-center w-full h-[80vh]"}>
        <Alert className={"w-fit"}>
            <CheckCircle2Icon/>
            <AlertTitle>Success! You have successfully logged in.
            </AlertTitle>
            <AlertDescription>
                Welcome, {user.name}!
            </AlertDescription>
        </Alert>
    </div>)
}
