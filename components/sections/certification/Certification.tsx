'use client';

import SectionLayout from "@/components/ui/SectionLayout";
import { HirelyCertificate } from "@hirely/sdk";

interface IProps {
    certification: HirelyCertificate[]
}

const Certification = ({ certification }: IProps) => {
    return <>
        <SectionLayout>
            <h2 className="font-semibold text-sm uppercase">Certifications</h2>
            <div className="mt-6">
                {certification.map((certificate: HirelyCertificate) =>
                    <div className="flex flex-col my-6" key={certificate._id}>
                        <div onClick={() => window.open(certificate.credentialUrl!, "_blank")} className="text-start">
                            <h4 className="text-xs md:text-sm font-semibold tracking-tight">{certificate.name}</h4>
                            <p className="text-xs font-medium text-gray-500">
                                {certificate.issuer} · {new Date(certificate.issueDate!).getFullYear()}
                            </p>
                        </div>
                        <div>
                            <p className="mt-4 text-gray-500 text-xs md:text-sm tracking-tight leading-relaxed">
                                {certificate.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </SectionLayout>

    </>;
};

export default Certification;