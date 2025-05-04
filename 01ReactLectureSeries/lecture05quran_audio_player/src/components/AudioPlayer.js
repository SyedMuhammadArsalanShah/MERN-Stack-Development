import React, { useEffect, useState } from "react";



function AudioPlayer({ surah }) {
    const [audioUrl, setAudioUrl] = useState([]);

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/surah/${surah}/ar.abdurrahmaansudais`)
            .then(res => res.json())
            .then(data => {
                setAudioUrl(data.data.ayahs)


                console.log(data.data.ayahs)
            })




    }, [surah])



    return (
        <div>
            <h1>Audio Surah</h1>
            {
                audioUrl.map((audioV) => (
                    <div key={audioV.number}>
                        <p style={{    direction:"rtl"}}>{audioV.text}</p>
                        <audio  controls src={audioV.audio} />
                    </div>
                ))
            }
        </div>
    );


}


export default AudioPlayer;