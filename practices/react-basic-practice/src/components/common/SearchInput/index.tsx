// Import components
import { SearchIcon } from '@/components/common/Icons';

const SearchInput = () => {
  return (
    <div className="flex justify-center items-center px-3 py-3 border border-input gap-3 w-[200px] rounded-[15px]">
      <SearchIcon />
      <input
        className="w-full focus:outline-none text-dark"
        type="search"
        name="authorName"
        placeholder="Type here..."
      />
    </div>
  );
};

export default SearchInput;
