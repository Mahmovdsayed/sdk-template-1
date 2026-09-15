'use client';

import SectionLayout from "@/components/ui/SectionLayout";
import { HirelyProject } from "@hirely/sdk";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

interface IProps {
    projects: HirelyProject[];
}

const Project = ({ projects }: IProps) => {
    const { push } = useRouter()

    return (
        <SectionLayout>
            <h2 className="text-sm font-semibold uppercase">
                Projects
            </h2>

            <div className="mt-6 space-y-8">
                {projects.map((project) => (
                    <div key={project._id}>
                        <div onClick={() => push(`https://hirely.cc/projects/${project.slug!}`)}>
                            <div className="flex items-center justify-between hover:underline hover:cursor-pointer">
                                <h3 className="text-sm font-semibold tracking-tight">
                                    {project.title}
                                </h3>
                                <FaArrowRightLong className="text-gray-500 text-xs md:text-sm hover:text-black" />
                            </div>
                        </div>
                        <p className="mt-1 text-xs font-medium text-gray-500">
                            {project.category} · {project.industry} · {project.duration}
                        </p>

                        <p className="mt-3 text-xs leading-relaxed tracking-tight text-gray-500 md:text-sm">
                            {project.shortDescription}
                        </p>
                    </div>
                ))}
            </div>
        </SectionLayout>

    );
};

export default Project;