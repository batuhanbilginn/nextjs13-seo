/* eslint-disable @next/next/no-img-element */
import getPostData from "@/lib/getPostData";
import getReadingTime from "@/lib/getReadingTime";
import getRelativeDate from "@/lib/getRelativeDate";
import { ImageResponse } from "next/server";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Expolorer | Blog";
export const contentType = "image/png";

export default async function og({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await getPostData(slug);

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1"
            src={post?.image + "&w=1200&h=630&auto=format&q=75"}
            alt={post?.title!!}
          />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-7xl font-bold">{post?.title}</div>
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
            <div
              tw={`font-medium ${
                post?.category.title === "Cities"
                  ? "text-emerald-600"
                  : "text-indigo-600"
              }`}
            >
              {post?.category.title}
            </div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
            <div>{post?.author.full_name}</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>{getReadingTime(post?.body!!)}</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>{getRelativeDate(post?.date_created!!)}</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
