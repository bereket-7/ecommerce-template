import { shopCategories } from "@/lib/categories";

const categoryData = shopCategories.map((c) => ({
  title: c.title,
  id: c.id,
  img: c.img,
  slug: c.slug,
}));

export default categoryData;
