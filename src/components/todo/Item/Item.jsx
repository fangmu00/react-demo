import React from 'react';
import propType from 'prop-types';

import './style.less';

const Item = (props) => {
  const { data, onDelete, onChange, defaultChecked } = props;
  return (
    <div className="todolist-item">
      <input className="item-checkbox" type="checkbox" defaultChecked={defaultChecked} onChange={onChange} />
      <div className="item-text">{ data }</div>
      <span className="item-delete" onClick={onDelete}>{ '删除' }</span>
    </div>
  )
}


Item.propTypes = {
  data: propType.string,
  onDelete: propType.func,
  onChange: propType.func,
  defaultChecked: propType.bool,
}

Item.defaultProps = {
  data: '',
  onDelete: () => {},
  onChange: () => {},
  defaultChecked: false
}

export default Item;
