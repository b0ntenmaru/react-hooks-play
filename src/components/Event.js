import React from 'react';

const Event = (props) => {
  const id = props.event.id;
    const handleClickDeleteButton = () => {
      props.dispatch({type: 'DELETE_EVENT', id})
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
