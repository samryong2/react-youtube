import React from 'react';
import Video_item from '../video_item/video_item';
import styles from './video_list.module.css'

const VideoList = (props) => (
        <ul className={styles.videos}>
            {props.videos.map(video => <Video_item key={video.id} video={video} />)}
        </ul>
    );

export default VideoList;