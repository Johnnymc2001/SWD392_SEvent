import style from "./Paginate.module.scss";
import ReactPaginate from "react-paginate";

const Paginate = (props) => {
  return (
    <div className={style.paginate_container}>
      <ReactPaginate
        className={style.paginate}
        pageCount={props.pageCount}
        pageRangeDisplayed={props.pageRangeDisplayed}
        marginPagesDisplayed={props.marginPagesDisplayed}
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        onPageChange={props.onPageChange}
        forcePage={props.forcePage}
      />
    </div>
  );
};

export default Paginate;
