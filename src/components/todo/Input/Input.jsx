import React from 'react'
import PropTypes from 'prop-types';

const Input = (props) => {
  const { placeholder, onSubmit } = props;
  return <input
    placeholder={placeholder}
    onKeyDown={(e) => {
      if (e.keyCode == '13') {
        const value = e.target.value;
        if (value.length) {
          onSubmit(value);
          e.target.value = '';
        }
      }
    }}
         />
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
}

Input.defaultProps = {
  placeholder: '',
  onSubmit: () => {}
}

export default Input
