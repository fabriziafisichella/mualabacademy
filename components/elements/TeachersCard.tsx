
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";

interface SocialsProps {
    instagram: boolean,
    instagramUrl: string,
    twitter: boolean,
    twitterUrl: string,
    facebook: boolean,
    facebookUrl: string,
    linkedin: boolean,
    linkedinUrl: string,
    youtube: boolean,
    youtubeUrl: string,
    tiktok: boolean,
    tiktokUrl: string,
}

interface CardProps {
    details: {
        name: string,
        image: string,
        role: string,
        socials: SocialsProps
    }
}

export function TeachersCard({ details }: CardProps) {

    return (


        <li className="w-64 h-80 p-2 flex justify-center flex-col items-center shadow-xl">

            <img
                src={details.image}
                alt={details.name}
                className="h-[10rem] w-[10rem] rounded-full object-cover shadow-xl" />

            <div className="text-center" >
                <h2>{details.name}</h2>
                <p id="cardSubtitle" className="text-center">{details.role}</p>
            </div>

            <div className="flex gap-2 p-5">

                {(details.socials.instagram) &&
                    <a href={details.socials.instagramUrl} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="h-8 w-8" />
                    </a>
                }
                {(details.socials.twitter) &&
                    <a href={details.socials.twitterUrl} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="h-8 w-8" />
                    </a>
                }
                {(details.socials.facebook) &&
                    <a href={details.socials.facebookUrl} target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="h-8 w-8" />
                    </a>
                }
                {(details.socials.linkedin) &&
                    <a href={details.socials.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-8 w-8" />
                    </a>
                }
                {(details.socials.youtube) &&
                    <a href={details.socials.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="h-8 w-8" />
                    </a>
                }
                {(details.socials.tiktok) &&
                    <a href={details.socials.tiktokUrl} target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="h-8 w-8" />
                    </a>
                }
            </div>

        </li >

    )
}