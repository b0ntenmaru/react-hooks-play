import React from 'react';
import { DELETE_EVENT } from '../actions/index';

const Event = (props) => {
  const id = props.event.id;
    const handleClickDeleteButton = () => {
      const result = window.confirm(`id: ${id}のイベントを削除して良いですか？`)
      if (result) props.dispatch({type: DELETE_EVENT, id})
    };

    return (
      <tr>
        <td>{id}</td>
        <td>{props.event.title}</td>
        <td>{props.event.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
      </tr>
    )
}

export default Event;
