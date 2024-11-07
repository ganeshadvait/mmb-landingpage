import React from "react";
import DatePicker from "react-datepicker";
// import Moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {
  UserContext,
  UserDispatchContext,
} from "../Context/MyContext";
import { useContext } from "react";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// main implementation. using selected and onChange as main props to get and change the selected date value
const Picker = ({ fieldtype }) => {
  // const [startDate, setStartDate] = useState();
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  const changeDate = (date) => {
    //let newdate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(date);
    // setStartDate(date);
    // let formatDate = Moment(date).format("DD/MM/YYYY");
    const updateItem = {
      ...userDetails,
      [fieldtype]: date,
    };
    setUserDetails(updateItem);
  };
  return (
    <DatePicker
      selected={userDetails.bookingDate}
      //   onChange={date => setStartDate(date)}
      onChange={changeDate}
      minDate={new Date()}
      dateFormat="MM/dd/yyyy"
    />
  );
};

export default Picker;
