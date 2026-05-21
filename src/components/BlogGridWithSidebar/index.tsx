import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogItem from "../Blog/BlogItem";
import blogData from "../BlogGrid/blogData";
import SearchForm from "../Blog/SearchForm";
import LatestPosts from "../Blog/LatestPosts";
import LatestProducts from "../Blog/LatestProducts";
import Categories from "../Blog/Categories";
import shopData from "../Shop/shopData";

const blogCategories = [
  { name: "Knives", products: 2 },
  { name: "Cookware", products: 2 },
  { name: "Tips", products: 2 },
  { name: "Recipes", products: 1 },
  { name: "Storage", products: 1 },
];

const BlogGridWithSidebar = () => {
  return (
    <>
      <Breadcrumb title={"Kitchen Tips & Guides"} pages={["blog"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5">
            <div className="lg:max-w-[770px] w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-7.5">
                {blogData.map((blog, key) => (
                  <BlogItem blog={blog} key={key} />
                ))}
              </div>
            </div>

            <div className="lg:max-w-[370px] w-full">
              <SearchForm />
              <LatestPosts blogs={blogData.slice(0, 3)} />
              <LatestProducts products={shopData.slice(0, 3)} />
              <Categories categories={blogCategories} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridWithSidebar;
