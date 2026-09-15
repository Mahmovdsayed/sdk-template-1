import SectionLayout from "@/components/ui/SectionLayout";
import { HirelyWork } from "@hirely/sdk";

interface IProps {
    works: HirelyWork[]
}
const Work = ({ works }: IProps) => {
    return <>
        <SectionLayout>


            <h2 className="font-semibold text-sm uppercase">Experience</h2>
            <div className="mt-6">
                {works.map((work: HirelyWork) =>
                    <div className="flex my-6 flex-col" key={work._id}>
                        <div className="flex flex-row items-center gap-2">
                            <div>
                                <img
                                    className="rounded-full border border-gray-200 size-10 object-center object-cover"
                                    src={work.companyImage?.url}
                                    draggable="false"
                                />
                            </div>
                            <div className="text-start">
                                <h4 className="text-xs md:text-sm font-semibold tracking-tight">{work.position}</h4>
                                <p className="text-xs font-medium text-gray-500">
                                    {work.companyName} · {new Date(work.startDate!).getFullYear()}-{work.isCurrent ? "NOW" : new Date(work.endDate!).getFullYear()}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="my-4 text-gray-500 text-xs md:text-sm tracking-tight leading-relaxed">
                                {work.description}
                            </p>
                            <ul className="mt-4 space-y-1">
                                {work.responsibilities?.map((ach, index) => (
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

export default Work;