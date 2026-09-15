import SectionLayout from "@/components/ui/SectionLayout";
import { HirelyContact } from "@hirely/sdk";
import {
    FaGithub,
    FaLinkedinIn,
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaTiktok,
    FaSnapchat,
} from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

interface IProps {
    contacts: HirelyContact;
    email: string;
}

const socialIcons = {
    github: FaGithub,
    linkedIn: FaLinkedinIn,
    facebook: FaFacebookF,
    twitter: FaXTwitter,
    instagram: FaInstagram,
    tiktok: FaTiktok,
    snapchat: FaSnapchat,
};

const Contact = ({ contacts, email }: IProps) => {
    return (
        <SectionLayout>
            <h2 className="text-sm font-semibold uppercase">Contact</h2>
            <div className="mt-6 space-y-4">
                {email && (
                    <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-3 text-xs text-gray-500 transition-colors hover:text-foreground md:text-sm"
                    >
                        <LuMail className="size-4 shrink-0" />
                        <span>{email}</span>
                    </a>
                )}

                <div className="flex flex-wrap items-center gap-4">
                    {contacts.socialLinks?.map((social) => {
                        const Icon =
                            socialIcons[
                            social.platform as keyof typeof socialIcons
                            ];

                        if (!Icon) return null;

                        return (
                            <a
                                key={social.platform}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.platform}
                                className="text-gray-500 transition-colors hover:text-foreground"
                            >
                                <Icon className="size-4" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </SectionLayout>
    );
};

export default Contact;