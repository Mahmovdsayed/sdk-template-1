import SectionLayout from "@/components/ui/SectionLayout";
import { HirelySkill } from "@hirely/sdk";

interface IProps {
    skills: HirelySkill[]
}

const Skills = ({ skills }: IProps) => {
    return <>
        <SectionLayout>
            <h2 className="font-semibold text-sm uppercase">Skills/Stack</h2>
            <div className="flex flex-wrap mt-6 items-center gap-2">
                {skills.map((skill: HirelySkill) => (
                    <span
                        key={skill._id}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                        {skill.name}
                    </span>
                ))}
            </div>
        </SectionLayout>
    </>;
};

export default Skills;