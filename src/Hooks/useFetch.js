import {useState} from 'react';

export default function useFetch(baseurl) {
  const [isLoading, setIsLoading] = useState(true);

  const get = function (url) {
    setIsLoading(true);
    return new Promise((res, rej) => {
      fetch(baseurl + url)
      .then(response => response.json())
      .then(data => {
        if (!data) {
          setIsLoading(false);
          return rej("Error in resposne data");
        }
        return res(data);
      })
      .catch(err => rej(err))
      .finally(() => {
        setIsLoading(false);
      })
    });
  }

  const post = function(url, body) {
    setIsLoading(true);
    return new Promise((res, rej) => {
      fetch(baseurl + url, {
        method: 'post',
        headers: {
          'content-type': 'application-json'
        },
        body: body
      })
      .then(response => response.json())
      .then(data => {
        if (!data) {
          setIsLoading(false);
          rej("Error in response data");
        }
        res(data);
      })
      .catch(err => rej(err))
      .finally(() => {
        setIsLoading(false)
      })
    });
  }

  return { get, post, isLoading};
}