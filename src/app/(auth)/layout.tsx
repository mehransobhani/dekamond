import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "dekamond test project",
    description: "dekamond test project",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
