"use client";

import { useEffect, useRef } from "react";
import { store } from "./store";
import { setCartItems } from "./features/cart-slice";
import { setWishlistItems } from "./features/wishlist-slice";
import {
  loadCartFromStorage,
  loadWishlistFromStorage,
  saveCartToStorage,
  saveWishlistToStorage,
} from "./persist";

export function ReduxPersist() {
  const hydrated = useRef(false);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;

    const cart = loadCartFromStorage();
    const wishlist = loadWishlistFromStorage();

    if (Array.isArray(cart)) {
      store.dispatch(
        setCartItems(cart as ReturnType<typeof store.getState>["cartReducer"]["items"])
      );
    }
    if (Array.isArray(wishlist)) {
      store.dispatch(
        setWishlistItems(
          wishlist as ReturnType<typeof store.getState>["wishlistReducer"]["items"]
        )
      );
    }

    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      saveCartToStorage(state.cartReducer.items);
      saveWishlistToStorage(state.wishlistReducer.items);
    });

    return () => unsubscribe();
  }, []);

  return null;
}
