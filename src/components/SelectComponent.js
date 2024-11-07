import React from "react";
import { UserContext, UserDispatchContext } from "../Context/MyContext";
import { useContext } from "react";

import { Input, FormGroup } from "reactstrap";

const CustomSelect = ({ options, fieldtype, value1, inval, sh }) => {
  const [selectedOption, setSelectedOption] = React.useState(inval);
  React.useEffect(() => {
    setSelectedOption(inval);
  });
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const update = (e) => {
    if (e.target.value !== "select") {
      setSelectedOption(e.target.value);
      var index = e.nativeEvent.target.selectedIndex;
      const updateItem = {
        ...userDetails,
        [fieldtype]: e.target.value,
        [value1]: e.nativeEvent.target[index].text,
        [sh]: options[index - 1].shortcode,
      };
      setUserDetails(updateItem);
    }
  };

  return (
    <div>
      <FormGroup>
        <Input
          type="select"
          name="frequency"
          id="frequency"
          value={selectedOption}
          onChange={update}
        >
          <option>select</option>
          {options.length > 0 &&
            options.map((item, i) => {
              return (
                <option key={i} value={item.id} shortcode={item.shortcode}>
                  {item.location}
                </option>
              );
            }, this)}
        </Input>
      </FormGroup>
    </div>
  );
};
export default CustomSelect;
