import React, { useState } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENT } from '../actions/index';

 
const EventForm = ({dispatch, state}) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const unCreatable = title === '' || body === '';

  const unDeletable = state.length === 0;

  const addEvent = e => {
    e.preventDefault(); 
    dispatch({type:  CREATE_EVENT, title, body});

    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを削除して良いですか？')

    if (result) dispatch({type: DELETE_ALL_EVENT});
  }

  return (
    <React.Fragment>
    <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input 
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={e => setTitle(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea 
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>

        <button disabled={unCreatable} className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button disabled={unDeletable} className="btn btn-danger" onClick={deleteAllEvents}>全てのイベントを削除する</button>
      </form>
    </React.Fragment>
  );
};

export default EventForm;
