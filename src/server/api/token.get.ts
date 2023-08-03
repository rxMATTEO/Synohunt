import {getToken} from '#auth';

export default eventHandler(event => {
  return getToken({event});
});