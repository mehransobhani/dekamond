"use client";

import * as React from "react";
import {Input} from "@/components/ui/input";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    loading?: boolean;
    label?: string;
    error?: string;
    id?: string;
}

export default function FormField({
                                      loading,
                                      label,
                                      error,
                                      id,
                                      ...props
                                  }: FormFieldProps) {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={inputId}
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}

            <Input
                id={inputId}
                aria-invalid={!!error}
                disabled={loading}
                aria-describedby={error ? errorId : undefined}
                {...props}
            />

            {error && (
                <p id={errorId} className="mt-1 text-xs text-red-600" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
