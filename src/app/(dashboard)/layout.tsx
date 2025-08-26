"use client"
import "../globals.css";
import Navbar from "@/components/organisms/Navbar";
import {useAuth} from "@/hooks/useAuth";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const user = useAuth();
    if (!user)
        return null;

    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}
