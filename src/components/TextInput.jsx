import React from "react";
import { Text, TextInput } from "@mantine/core";
import { Controller } from "react-hook-form";

const CustomTextInput = ({ name }) => {
  return (
    <Controller
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <React.Fragment>
          <TextInput
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            value={value}
            ref={ref}
          />
          {error && <Text>{JSON.stringify(error)}</Text>}
        </React.Fragment>
      )}
    />
  );
};

export default CustomTextInput;
