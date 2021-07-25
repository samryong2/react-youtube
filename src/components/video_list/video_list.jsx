import React from 'react';
import Video_item from '../video_item/video_item';
import styles from './video_list.module.css'

const VideoList = ({videos, onVideoClick}) => {
    return  ( 
        <ul className={styles.videos}>
            {videos.map(video => {
                <Video_item key={video.id} video={video} onVideoClick={onVideoClick} />
            })}
        </ul>
    )};

export default VideoList;