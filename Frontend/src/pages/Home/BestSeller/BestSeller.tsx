import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchProducts } from "../../../store/productsSlice";
import "../../../App.css";
import type { ProductQueryRequest } from "../../../common/models/product";

// const BestSeller = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const dispatch = useAppDispatch();
//   const {
//     items: products,
//     loading,
//     error,
//   } = useAppSelector((state) => state.products);

//   useEffect(() => {
//     const params: ProductQueryRequest = {
//       rating: 1,
//     };
//     dispatch(fetchProducts({ params }));
//   }, [dispatch]);

//   const scroll = (direction: "left" | "right") => {
//     if (scrollRef.current) {
//       const { current } = scrollRef;
//       const scrollAmount = 300;
//       if (direction === "left") {
//         current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//       } else {
//         current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <div className="relative">
//       <h2 className="text-xl font-bold mb-2 text-center">Best Seller</h2>
//       <p className="mb-6 text-center">Check out our best-selling products!</p>
//       <button
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
//         onClick={() => scroll("left")}
//         aria-label="Previous"
//         style={{ height: 40 }}
//       >
//         <span className="material-symbols-outlined">chevron_left</span>
//       </button>
//       <button
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
//         onClick={() => scroll("right")}
//         aria-label="Next"
//         style={{ height: 40 }}
//       >
//         <span className="material-symbols-outlined">chevron_right</span>
//       </button>
//       <div
//         ref={scrollRef}
//         className="flex space-x-8 overflow-x-auto pb-2 mx-16 scrollbar-hide"
//         style={{ scrollBehavior: "smooth" }}
//       >
//         {loading && <div>Loading...</div>}
//         {error && <div className="text-red-500">{error}</div>}
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="min-w-[260px] bg-white rounded shadow p-4 flex flex-col items-center flex-shrink-0"
//           >
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-[160px] h-[240px] object-cover mb-3 rounded"
//             />
//             <div className="font-semibold text-center">{product.name}</div>
//             <div className="text-blue-600 font-bold">${product.price}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSeller;
