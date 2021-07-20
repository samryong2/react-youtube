import { useEffect, useState } from 'react';
import './app.css';
import Search from './components/search/search';
import VideoList from './components/video_list/video_list';


function App() {
  const [videos, setVideos] = useState([]);

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
  return <>
          <Search/>
          <VideoList videos={videos}/>
        </>;
}

export default App;
