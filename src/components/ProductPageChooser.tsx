
export const ProductPageChooser = ({currentPage, pages, setCurrentPage} : {currentPage: number, pages: number[], setCurrentPage: (arg0: number) => void}) => {

    return(
        <div className="h-10 flex justify-center items-center gap-2">
            {pages.map(p => 
                p == currentPage ?
                <div key={p} onClick={() => setCurrentPage(p)} className="w-[4vh] h-[4vh] border-2 bg-gray-400 border-gray-600 flex justify-center items-center">
                    {p}
                </div>
                :
                <div key={p} onClick={() => setCurrentPage(p)} className="w-[4vh] h-[4vh] border-2 border-gray-600 flex justify-center items-center">
                    {p}
                </div>
                )
            }
        </div>
    );
}