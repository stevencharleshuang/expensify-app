import React from 'react';

export default function EditExpensePage(props) {
  return (
    <div>
      Editing expense, id: {props.match.params.id}
    </div>
  );
}

