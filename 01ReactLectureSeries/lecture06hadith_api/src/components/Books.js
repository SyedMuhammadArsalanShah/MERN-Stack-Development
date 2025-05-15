import React, { useEffect, useState } from "react";

function AudioPlayer({ surah }) {
    const [audioUrl, setAudioUrl] = useState([]);

    useEffect(() => {
        fetch(`https://hadithapi.com/api/${surah}/chapters?apiKey=$2y$10$BylaBcXs5Lw7ZOtYmQ3PXO1x15zpp26oc1FeGktdmF6YeYoRd88e`)
            .then(res => res.json())
            .then(data => {
                setAudioUrl(data.chapters)
                console.log(data.chapters)


            })

    }, [surah])



    return (
        <div>
            <h1>Audio Surah</h1>
            {
                audioUrl.map((audioV) => (
                    <div key={audioV.chapterNumber}>
                        <h1>
                            {audioV.chapterNumber}
                        </h1>
                        <p style={{ direction: "rtl" }}>{audioV.chapterArabic}</p>
                        <p style={{ direction: "rtl" }}>{audioV.chapterUrdu}</p>
                        <p style={{ direction: "ltr" }}>{audioV.chapterEnglish}</p>

                        <button onClick={() => on(surah.bookSlug)}   >

                            Read Book

                        </button>

                    </div>
                ))
            }
        </div>
    );


}


export default AudioPlayer;