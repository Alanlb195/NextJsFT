import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['About page', 'Alan', 'Information', '...']
};

export default function AboutPage() {
    return (
        <>
            <div className="flex flex-col items-center p-24">
                <span className="text-lg">Hello world</span>
                <span className=" text-7xl">About page</span>
            </div>
        </>
    )
}

