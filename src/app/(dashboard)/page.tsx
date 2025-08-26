"use client";

import WelcomeSection from "@/components/organisms/WelcomeSection";
import {useAuth} from "@/hooks/useAuth";

export default function Dashboard() {
    const user = useAuth(); 
    if (!user)
        return null;
    return (
        <div>
            <WelcomeSection user={user}/>
        </div>
    );
}
