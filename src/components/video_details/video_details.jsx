/* eslint-disable jsx-a11y/iframe-has-title */
import styles from './video_details.module.css'
import React from 'react';

const VideoDetails = ({ video, video: {snippet} }) => {
    return (
        <>
            <section className={styles.details}>
                <iframe 
                className={styles.video} 
                type="text/html" 
                width="100%" 
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameborder="0" 
                allowfullscreen
                ></iframe>
            </section>
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <pre className={styles.description}>{snippet.description}</pre>
        </>
    );
};

export default VideoDetails;