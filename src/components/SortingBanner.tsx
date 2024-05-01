import { CategoryType } from "../utils/types";

export const SortingBanner = ({setSearchInput, sortOptions, sortOption, setSortOption, ascending, setAscending} : {setSearchInput: (word: string) => void, sortOptions : CategoryType[], sortOption: number, setSortOption: (i: number) => void, ascending: number, setAscending: (i: number) => void}) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }

    const handleSearch = (e: any) => {
        setSearchInput(e.target.value)
    }

    const handleSort = (e: any) => {
        setSortOption(e.target.value);
    }

    const handleAsc = (e: any) => {
        setAscending(e.target.value)
    }

    return(
    <div className="sticky top-24 w-full h-10 bg-yellow flex items-center justify-center gap-10 ">
        <form onSubmit={handleSubmit}>
            <input placeholder="Search" onChange={handleSearch} className="pl-2">
            </input>
        </form>
        <select value={sortOption} onChange={handleSort} name="category">
            {
                sortOptions ?
                sortOptions.map((item, i) => 
                    <option 
                        key={i} 
                        value={i}
                        >
                            {item.label}
                    </option>)
                :
                <></>
            }
        </select>
        <select value={ascending} onChange={handleAsc} name="asc">
            <option value={0}>Ascending</option>
            <option value={1}>Descending</option>
        </select>
    </div>
    );
}