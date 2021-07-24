import { useEffect, useState } from 'react';
import styles from'./app.module.css';
import SearchHeader from './components/search/search_header';
import VideoList from './components/video_list/video_list';


function App() {
  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCvA5YypBkHGWVDY1A7hF2IoytbDPRZTrY&part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCvA5YypBkHGWVDY1A7hF2IoytbDPRZTrY`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCvA5YypBkHGWVDY1A7hF2IoytbDPRZTrY&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCvA5YypBkHGWVDY1A7hF2IoytbDPRZTrY", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  return (
        <div className={styles.app}>
          <SearchHeader onSearch={search}/>
          <VideoList videos={videos}/>
        </div>
        );
}

export default App;
