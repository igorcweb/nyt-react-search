import React from 'react';
import moment from 'moment';
import { List } from './List';

export const Article = props => (
  <div className="list-group my-4">
    <a
      href={props.url}
      className="bg-blue list-group-item list-group-item-action flex-column align-items-start active"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.title}</h5>
        <small>{moment(props.date).format('MMMM Do, YYYY')}</small>
      </div>
    </a>
    <List className="list-group-item">
      <div className=" w-75 d-inline-block">
        <h5 className="mb-1">{props.summary}</h5>
      </div>
      <div className="btn-group float-right" role="group">
        <button type="button" className="btn btn-blue" onClick={props.onClick}>
          {props.type}
        </button>
      </div>
    </List>
  </div>
);
