"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const SearchParams = useSearchParams();

  const handlFilter = (valeu: string) => {
    const params = new URLSearchParams(SearchParams);
    params.set("sort", valeu);
    router.push(`${pathname}?category=${valeu}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <span>Sort by:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-md rounded-sm"
        onChange={(e) => handlFilter(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">oldest</option>
        <option value="asc">Price: high to low</option>
        <option value="desc">Price: low to high</option>
      </select>
    </div>
  );
};

export default Filter;
