/* eslint-disable no-case-declarations */
const initialData = {
  list: [],
};

 export const todoReducers = (state = initialData, action) => {
  switch (action.type) {
   case "ADD_TODO":
            const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
      default: return state;
    }

    
  }


export default todoReducers;
