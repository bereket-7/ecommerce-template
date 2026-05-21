import { Menu } from "@/types/Menu";
import { shopCategories } from "@/lib/categories";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Shop",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Categories",
    newTab: false,
    path: "/shop-with-sidebar",
    submenu: shopCategories.map((c, i) => ({
      id: 30 + i,
      title: c.title,
      newTab: false,
      path: `/shop-with-sidebar?category=${c.slug}`,
    })),
  },
  {
    id: 4,
    title: "Blog",
    newTab: false,
    path: "/blogs/blog-grid-with-sidebar",
  },
  {
    id: 5,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  {
    id: 6,
    title: "Account",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Cart",
        newTab: false,
        path: "/cart",
      },
      {
        id: 62,
        title: "Wishlist",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 63,
        title: "Checkout",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 64,
        title: "Sign in",
        newTab: false,
        path: "/signin",
      },
      {
        id: 65,
        title: "Sign up",
        newTab: false,
        path: "/signup",
      },
      {
        id: 66,
        title: "My Account",
        newTab: false,
        path: "/my-account",
      },
    ],
  },
];
