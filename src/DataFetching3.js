import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching3() {
  const [post, setPost] = useState();
  const [id, setId] = useState(1);
  const [idFromButtonClick,SetIdFromButtonClick]=useState(1)


  const handleClick=()=>{
    SetIdFromButtonClick(id)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input type='text' value={id} onChange={e => setId
        (e.target.value)} />

        <button type='button' onClick={handleClick}>Fetch Post</button>

      {post && (
        <div>
          {/* <div>{post.id}</div> */}
          <div>{post.title}</div>
        </div>
      )}
    </div>
  );
}

export default DataFetching3;
