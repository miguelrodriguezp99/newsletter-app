import { socials } from "@/constants";
import { SocialIcon } from "react-social-icons";

function Socials() {
    return (
        <div className="flex items-center justify-center sm:gap-x-4 mt-28 md:w-[400px]">
            {socials.map((social) => (
                <a
                    key={social.id}
                    className="flex items-center justify-center flex-1 animate-fade-in-3 
                    cursor-pointer group md:hover:shadow-outline-gray rounded-[9px] 
                    p-5 md:p-7 transition duration-200 ease-out"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SocialIcon
                        url={social.url}
                        fgColor="#FFF"
                        bgColor="transparent"
                        className="!h-16 !w-16"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    <div className="text-xs sm:text-sm space-y-1 p-3">
                        <p className="text-[#ADB0B1] group-hover:text-white transition font-medium">
                            {social.name}
                        </p>
                        <p className="text-[#4B4C52]">{social.handle}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default Socials;