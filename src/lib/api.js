const BASE_ENDPOINT = "https://fakestoreapi.com";

export async function getAllProducts() {
  try {
    const res = await fetch(`${BASE_ENDPOINT}/products`);
    if (!res.ok) {
      throw new Error(`Unable to load products: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error("Product fetch error:", err);
    return [];
  }
}
