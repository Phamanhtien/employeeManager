
// function createPaging({onClick}) {
//     let numberOfPages = ~~(numberOfAllEmployees / 5)
//     if (numberOfAllEmployees % 5 === 0) {
//         numberOfPages -= 1;
//     }

//     let pageArray = []
//     for (let i = 0; i <= numberOfPages; i++) {
//         pageArray.push(
//             <li key={"page-item"+i} className={`page-item ${pageNumber === i? "disabled":""} `} onClick={()=>{setPageNumber(i);setLoadedStateToInitialLoading();}}>
//                 <a href='#' className="page-link">{i+1}</a>
//             </li>
//         );
//     }

//     return pageNumber, numberOfPages, pageArray, isLoaded
// }

// export default getNumberOfPages