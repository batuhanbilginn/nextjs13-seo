import { HiHeart } from "react-icons/hi2";
import Logo from "../brand/logo";
import SocialLink, { Platforms } from "../elements/socialLink";
import PaddingContainer from "../layouts/paddingContainer";

const socialLinks = [
  {
    platform: Platforms.Twitter,
    href: "https://twitter.com",
  },
  { platform: Platforms.Facebook, href: "https://facebook.com" },
  { platform: Platforms.Instagram, href: "https://instagram.com" },
  { platform: Platforms.Youtube, href: "https://youtube.com" },
  { platform: Platforms.Linkedin, href: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t @container border-t-neutral-200">
      <PaddingContainer>
        {/* Footer Top Container */}
        <div>
          <Logo size="large" />
          <p className="mt-4 text-lg max-w-sm text-neutral-500">
            A minimal and lovely travel blog which shares experiences and
            citiest around the world!
          </p>
        </div>
        {/* Footer Middle Container */}
        <div className="mt-10 flex items-center justify-between">
          {/* Social Links */}
          <div>
            <div className="font-medium text-lg">#exploretheworld</div>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.href}
                  href={link.href}
                  platform={link.platform}
                />
              ))}
            </div>
          </div>
          {/* Location */}
          <div>
            <div className="text-neutral-500 text-sm">Currently at</div>
            <div className=" shadow-md rounded-md py-1 px-2 flex items-center gap-2 mt-2">
              <div className="bg-emerald-400 rounded-full w-2 h-2" />
              <div>Scotland</div>
            </div>
          </div>
        </div>
        {/* Bottom Container */}
        <div className="flex items-center justify-between flex-wrap gap-4  @md:flex-nowrap mt-10 pt-5 border-t border-t-neutral-100 text-sm">
          <div>
            All rights are reserved | Copyright {new Date().getFullYear()}
          </div>
          <div className="flex items-center whitespace-nowrap">
            <div>Made with</div>
            <HiHeart />
            <div>in Istanbul</div>
          </div>
        </div>
      </PaddingContainer>
    </footer>
  );
};

export default Footer;
