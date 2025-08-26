"use client";

import {Loader2} from "lucide-react";
import {Button as ShadcnButton} from "../ui/button";
import {cn} from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

export default function Button({
                                   children,
                                   className,
                                   loading = false,
                                   disabled,
                                   ...props
                               }: ButtonProps) {
    return (
        <ShadcnButton
            className={cn("relative cursor-pointer", className)}
            disabled={disabled || loading}
            {...props}
        >

            {loading && (
                <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                />
            )}
            {children}
        </ShadcnButton>
    );
}
