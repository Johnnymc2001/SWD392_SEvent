import style from "./DisplayDateCalendar.module.scss"

const DisplayDateCalendar = (props) => {
    return <div className={style.displayDate_container}>
        <div className={style.displayDate_month}>Tháng 1</div>
        <div className={style.displayDate_date}>21</div>
        <div className={style.displayDate_day}>Thứ 6</div>
    </div>
}

export default DisplayDateCalendar;