import { HirelyProfile } from "@hirely/sdk";
import About from "./About";
import SectionLayout from "@/components/ui/SectionLayout";

interface IProps {
    profile: HirelyProfile

}
const Info = ({ profile }: IProps) => {
    return <>
        <SectionLayout>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <img
                        className="rounded-xl size-17.5 object-center object-cover"
                        src={profile.avatar?.url}
                        draggable="false"
                        alt={profile.firstName}
                    />
                </div>
                <div className="my-4 text-center">
                    <h1 className="text-[28px] tracking-tighter font-semibold">{profile.firstName + " " + profile.lastName}</h1>
                    <p className="text-sm text-gray-500">{profile.positionName} based in {profile.city}, {profile.country}</p>
                </div>
            </div>
        </SectionLayout>

        <About about={profile.about || ""} />
    </>;
};

export default Info;