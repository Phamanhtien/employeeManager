
function CreatePaging(pagingData) {
    
    function sendData (pageNumber) {
        pagingData.pagingCallback(pageNumber)
    }
    // caculate how many page
    let numberOfPages = ~~(pagingData.numberOfAllEmployees / 5)
    if (pagingData.numberOfAllEmployees % 5 === 0) {
        numberOfPages -= 1;
    }

    // create paging element
    let pageArray = []
    for (let i = 0; i <= numberOfPages; i++) {
        pageArray.push(
            <li key={"page-item"+i} className={`page-item ${pagingData.pageNumber === i? "disabled":""} `} onClick={()=>{sendData(i)}}>
                <a href='#' className="page-link">{i+1}</a>
            </li>
        );
    }

    return (
        <ul className="pagination pagination-sm">
        <li className={`page-item ${pagingData.pageNumber === 0? "disabled":""} `} onClick={()=>{sendData(0)}}>
            <a href='#' className="page-link">Previous</a>
        </li>
        {pageArray}
        <li className={`page-item ${pagingData.pageNumber === numberOfPages? "disabled":""} `} onClick={()=>{sendData(pagingData.pageNumber+1)}}>
            <a href='#' className="page-link" >Next</a>
        </li>
    </ul>
    )
}

export default CreatePaging