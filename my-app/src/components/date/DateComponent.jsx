import './DateComponent.css';

function DateComponent(props) {
    return (
        <div className="date">
            <div className="month">
                {props.propsMonth}
            </div>
            <div className="day">
                {props.propsDay}
            </div>
            <div className="year">
                {props.propsYear}
            </div>
        </div>
    );
}

export default DateComponent;