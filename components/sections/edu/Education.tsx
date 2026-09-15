import SectionLayout from "@/components/ui/SectionLayout";
import { HirelyEducation } from "@hirely/sdk";

interface IProps {
    education: HirelyEducation[]
}
const Education = ({ education }: IProps) => {
    return <>
        <SectionLayout>
            <h2 className="font-semibold text-sm uppercase">Education</h2>
            <div className="mt-6">
                {education.map((edu: HirelyEducation) =>
                    <div className="flex mb-6 flex-col" key={edu._id}>
                        <div className="flex flex-row items-center gap-2">
                            <div>
                                <img
                                    className="rounded-full border border-gray-200 size-10 object-center object-cover"
                                    src={edu.institutionImage?.url}
                                    draggable="false"
                                />
                            </div>
                            <div className="text-start">
                                <h4 className="text-xs md:text-sm font-semibold tracking-tight text-wrap">{edu.degree} in {edu.fieldOfStudy}</h4>
                                <p className="text-xs font-medium text-gray-500">
                                    {edu.institution} · {new Date(edu.startDate!).getFullYear()}-{edu.isCurrent ? "NOW" : new Date(edu.endDate!).getFullYear()}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="my-4 text-gray-500 text-xs md:text-sm tracking-tight leading-relaxed">
                                {edu.description}
                            </p>
                            <ul className="mt-4 space-y-1">
                                {edu.achievements?.map((ach, index) => (
                                    <li
                                        key={index}
                                        className="relative pl-4 text-xs leading-relaxed tracking-tight text-gray-500 md:text-sm"
                                    >
                                        <span className="absolute left-0 top-[0.55em] size-1 rounded-full bg-gray-400" />
                                        {ach}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </SectionLayout>

    </>;
};

export default Education;