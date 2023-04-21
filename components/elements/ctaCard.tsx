/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import PrimaryButton from "../buttons/primaryButton";

const CtaCard = () => {
  return (
    <div className="px-6 py-10 rounded-md overflow-hidden relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/30 z-10" />
      {/* Image */}
      <Image
        fill
        alt="Explore the world with me!"
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
      />
      {/* Content Container */}
      <div className="relative z-20">
        <div className="font-medium text-lg">#exploretheworld</div>
        <h2 className="text-4xl font-semibold mt-3">
          Explore the world with me!
        </h2>
        <p className="mt-2 mb-6 text-lg max-w-xl">
          Explore the world with me! I'm travelling around the 🌍. I've visited
          most of the great cities of 🇺🇸 and currently I'm travelling in 🇪🇺 Join
          me!
        </p>
        <PrimaryButton title="Follow" />
      </div>
    </div>
  );
};

export default CtaCard;
