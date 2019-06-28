import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { graphqlStore } from './graphql/graphql-store';

const App = observer(() => {
  const { data } = graphqlStore.comments({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');

  const handleLogin = async () => {
    await graphqlStore.emailLogin({ email, password });
    console.log('Login OK');
  }

  const createComment = async () => {
    await graphqlStore.createComment({
      input: { text }
    }, {
      refetchQueries: ['Comments'],
    });
    console.log('comment created');
    setText('');
  }

  if (!data) {
    return null;
  }

  return (
    <div className="App">
      <form>
        email: <input name="email" value={email} onChange={e => setEmail(e.target.value)} /> <br />
        password: <input name="password" value={password} onChange={e => setPassword(e.target.value)} type="password"/> <br />
        <button onClick={handleLogin} type="button">Login</button>
      </form>
      {data.comments.map(comment => (
        <p key={comment.id}>
          {comment.author.fullName} said {comment.text}
        </p>
      ))}
      <form>
        comment: <textarea name="text" value={text} onChange={e => setText(e.target.value)} /> <br />
        <button onClick={createComment} type="button">Submit</button>
      </form>
    </div>
  );
});

export default App;
