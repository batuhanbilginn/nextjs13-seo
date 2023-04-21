import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export enum Platforms {
  Facebook = "facebook",
  Instagram = "instagram",
  Twitter = "twitter",
  Youtube = "youtube",
  Linkedin = "linkedin",
  Whatsapp = "whatsapp",
}

interface SocialLinkProps {
  href: string;
  platform: Platforms;
}

const renderIcons = (platform: Platforms) => {
  switch (platform) {
    case Platforms.Facebook:
      return <FaFacebook size="18" />;
    case Platforms.Instagram:
      return <FaInstagram size="18" />;
    case Platforms.Twitter:
      return <FaTwitter size="18" />;
    case Platforms.Youtube:
      return <FaYoutube size="18" />;
    case Platforms.Linkedin:
      return <FaLinkedin size="18" />;
  }
};

const SocialLink = ({ href = "/", platform }: SocialLinkProps) => {
  return (
    <Link className="text-neutral-700 text-lg" href={href}>
      {renderIcons(platform)}
    </Link>
  );
};

export default SocialLink;
