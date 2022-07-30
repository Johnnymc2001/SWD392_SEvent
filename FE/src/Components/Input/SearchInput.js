import style from "./SearchInput.module.scss";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchInput = (props) => {
    return (
        <div className={style.search_container}>
            <BiSearchAlt2 className={style.icon}/>
            <input type={props.type} 
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default SearchInput;