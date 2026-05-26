const CART_STORAGE_KEY = "kitchenedge-cart";
const WISHLIST_STORAGE_KEY = "kitchenedge-wishlist";

export function loadCartFromStorage(): unknown[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCartToStorage(items: unknown[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function loadWishlistFromStorage(): unknown[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveWishlistToStorage(items: unknown[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
}
