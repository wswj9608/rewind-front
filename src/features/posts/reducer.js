/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { LOAD, CREATE, DELETE, UPDATE } from './types';

const initialState = {
  byId: {},
  allIds: [],
};

/*
  const initialPostState = {
    postId: postId<Number>,
    title: title<String>,
    author: userEmail<String>,
    nickname: userNickname<String>,
    contents: contents<String>,
    insertDt: ISOString<String>
  };
*/

export default function postsReducer(state = initialState, action) {
  return produce(state, (draft) => {
    console.log(draft);
    switch (action.type) {
      case LOAD: {
        console.log('LOAD');
        console.log(action.payload);
        action.payload.forEach((document) => {
          draft.byId[document.id] = document;
          draft.allIds.push(document.id);
        });
        break;
      }
      case CREATE: {
        console.log('CREATE');
        console.log(action.payload);
        const { id } = action.payload;
        draft.byId[id] = action.payload;
        draft.allIds.unshift(id);
        break;
      }
      case UPDATE: {
        console.log('UPDATE');
        console.log(action.payload);
        const { postId, updatedData } = action.payload;
        // updatedData의 key를 배열로 만든다.
        // [id, title, contents]
        Object.keys(updatedData).forEach((key) => {
          draft.byId[postId][key] = updatedData[key];
        });
        break;
      }
      case DELETE: {
        console.log('DELETE');
        console.log(action.payload);
        break;
      }
      default:
        break;
    }
  });
}
