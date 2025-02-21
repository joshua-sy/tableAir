import { Search } from 'lucide-react';


export default function searchBar() {
  return(
    <>
    <div className="flex items-center border rounded-full p-2">
      <Search className="mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow p-1 border-none outline-none"
      />
    </div>
    </>
  )
}