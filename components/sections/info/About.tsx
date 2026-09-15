import SectionLayout from "@/components/ui/SectionLayout";

interface IProps {
    about: string
}
const About = ({ about }: IProps) => {
    return <>
        <SectionLayout>
            <h2 className="font-semibold text-sm uppercase">About</h2>
            <p className="mt-4 text-gray-500 text-xs md:text-sm tracking-tight leading-relaxed">{about}</p>
        </SectionLayout>

    </>;
};

export default About;