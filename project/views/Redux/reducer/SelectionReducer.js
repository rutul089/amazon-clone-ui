/**
 * Reducer always called with 2 args
 * 1.state : which was last state
 * 2.action : what to do ?
 */
export default (state = null, action) => {
  /**
   * This bellow code is kind of boilerplate which is mostly common in all reducer
   */
  switch (action.type) {
    case "select_library":
      return action.payload;
    default:
      return state;
  }
};
