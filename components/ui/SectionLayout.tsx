import React from "react";

interface IProps {
    children: React.ReactNode
}
const SectionLayout = ({ children }: IProps) => {
    return <>
        <section className="py-8 border border-gray-200 border-dashed">
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    </>;
};

export default SectionLayout;