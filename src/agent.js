import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000';

const responseBody = (res) => ({
  body: res.body,
  headers: res.headers,
  status: res.status,
});

const requests = {
  get: (url) =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
};

const Post = {
  search: (q, page, perPage) =>
    requests.get(`/posts?q=`+ q + '&page=' + page + '&per_page=' + perPage),
};

export default {
  Post,
};
