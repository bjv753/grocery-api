import { useEffect, useState } from 'react'
import axios from 'axios'

const NewsFeed = () => {
    const [articles, setArticles] = useState(null)
    useEffect(() => {
      const options = {
        method: 'GET',
        url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
        headers: {
          'X-RapidAPI-Key': 'fcd535a229mshf5d34f4721c341ap16abeejsn0abce08872f6',
          'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
        }
      };
      // STORING RESULTS AS ARTICLES IN ARTICLES COMPONENT
      axios.request(options).then((response) => {
        console.log(response.data);
        setArticles(response.data)

      }).catch((error) => {
        console.error(error)
      })
  }, [])

      console.log(articles)

      const first7Articles = articles?.slice(0,7)
      
        return (
            <div className="news-feed">
              <h2>News Feed</h2>
              {first7Articles?.map( (article, _index) => ( 
                <div key={_index}> 
                    <a href={article.url}><p>{article.title}</p></a>
                </div>))}
            </div>
        )
      }
  
  export default NewsFeed