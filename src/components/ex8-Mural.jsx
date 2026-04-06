import { useState } from 'react';

export default function Mural() {
    const [tweets, setTweets] = useState(['Estudando muito!']);
    const [novoTweet, setNovoTweet] = useState('React é show');

    const enviarTweet = () => {
        setTweets([...tweets, novoTweet]);

        setNovoTweet('');
    };

    return <div>
        <button onClick={enviarTweet}>Postar</button>

        <ul>
            {tweets.map((tweet, index) => (
                <li key={index}>{tweet}</li>
            ))}
        </ul>
    </div>
}
