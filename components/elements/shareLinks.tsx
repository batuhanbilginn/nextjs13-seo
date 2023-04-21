import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Platforms } from "./socialLink";
const platforms = [
  Platforms.Facebook,
  Platforms.Twitter,
  Platforms.Linkedin,
  Platforms.Whatsapp,
];

const ShareLinks = ({ url }: { url: string }) => {
  // To get full share URL
  const getShareURL = (platform: Platforms) => {
    switch (platform) {
      case Platforms.Facebook:
        return `https://www.facebook.com/sharer/sharer.php?u=${
          process.env.NEXT_PUBLIC_URL + "/post/" + url
        }`;
      case Platforms.Twitter:
        return `https://twitter.com/intent/tweet?url=${
          process.env.NEXT_PUBLIC_URL + "/post/" + url
        }`;
      case Platforms.Linkedin:
        return `https://www.linkedin.com/shareArticle?mini=true&url=${
          process.env.NEXT_PUBLIC_URL + "/post/" + url
        }`;
      case Platforms.Whatsapp:
        return `https://wa.me/?text=${
          process.env.NEXT_PUBLIC_URL + "/post/" + url
        }`;
    }
  };

  // Render Icon
  const renderIcons = (platform: Platforms) => {
    switch (platform) {
      case Platforms.Facebook:
        return <FaFacebook size="20" />;
      case Platforms.Twitter:
        return <FaTwitter size="20" />;
      case Platforms.Linkedin:
        return <FaLinkedin size="20" />;
      case Platforms.Whatsapp:
        return <FaWhatsapp size="20" />;
    }
  };

  return (
    <div className="gap-5 flex md:flex-col items-center justify-between">
      {platforms.map((platform: Platforms) => {
        return (
          <Link
            className="bg-neutral-100 w-full h-12 flex items-center justify-center rounded-md hover:bg-neutral-800 hover:text-neutral-50 duration-75 ease-out transition-colors"
            key={platform}
            href={getShareURL(platform) as string}
          >
            {renderIcons(platform)}
          </Link>
        );
      })}
    </div>
  );
};

export default ShareLinks;
