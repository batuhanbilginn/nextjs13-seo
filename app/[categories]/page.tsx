import PaddingContainer from "@/components/layouts/paddingContainer";
import PostCardList from "@/components/post/postCardList";
import getAllCategories from "@/lib/getAllCategories";
import getCategoryData from "@/lib/getCategoryData";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: { categories },
}: {
  params: {
    categories: string;
  };
}) {
  try {
    const category = await getCategoryData(categories);
    if (!category)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    return {
      title: category.title,
      description: category.description,
      robots: {
        index: false,
        follow: true,
        nocache: true,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

export async function generateStaticParams() {
  const categories = await getAllCategories();

  if (!categories) return [];

  return categories.map((category) => ({
    categories: category.slug,
  }));
}

const CategoryPage = async ({
  params: { categories },
}: {
  params: {
    categories: string;
  };
}) => {
  const category = await getCategoryData(categories);
  if (!category) return notFound();

  return (
    <PaddingContainer>
      <div className="pb-10 space-y-10">
        {/* Hero */}
        <div>
          <h1 className="text-3xl font-semibold text-neutral-900">
            {category?.title}
          </h1>
          <p className="text-lg text-neutral-500">{category?.description}</p>
        </div>
      </div>
      {/* Posts */}
      <PostCardList posts={category.posts} />
    </PaddingContainer>
  );
};

export default CategoryPage;
