import { HirelyProfile } from "@hirely/sdk";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import LiveTime from "./LiveTime";

interface IProps {
    profile: HirelyProfile
}

const Header = ({ profile }: IProps) => {
    return <>
        <header className="flex h-16 items-center border-b border-r border-l border-dashed border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-1 text-xs md:text-sm">
                        <CiLocationOn />
                        <p className="uppercase">
                            {profile.city}, {profile.country}
                        </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs md:text-sm">
                        <CiClock2 />
                        <p className="uppercase">
                            <LiveTime timeZone="Africa/Cairo" />
                        </p>
                    </div>
                </div>
            </div>
        </header>
    </>;
};

export default Header;