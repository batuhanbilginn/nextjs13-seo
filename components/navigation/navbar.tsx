import Link from "next/link";
import Logo from "../brand/logo";
import PrimaryButton from "../buttons/primaryButton";
import PaddingContainer from "../layouts/paddingContainer";
import Popup from "../popups/popup";

const Navbar = () => {
  return (
    <>
      <Popup />
      <div className="fixed @container top-0 left-0 right-0 z-50 bg-white/70">
        <PaddingContainer>
          {/* Navbar Container */}
          <div className="flex justify-between items-center py-4 border-b border-b-white backdrop-blur-md">
            <Link href="/">
              <Logo size="medium" />
            </Link>
            <div className="flex gap-4 items-center">
              <Link
                className="text-neutral-600 hover:text-neutral-900 duration-75 transition-colors ease-out"
                href="/cities"
              >
                Cities
              </Link>
              <Link
                className="text-neutral-600 hover:text-neutral-900 duration-75 transition-colors ease-out"
                href="/experiences"
              >
                Experiences
              </Link>
              <div className="hidden @sm:block">
                <PrimaryButton title="Sign Up" />
              </div>
            </div>
          </div>
        </PaddingContainer>
      </div>
    </>
  );
};

export default Navbar;
