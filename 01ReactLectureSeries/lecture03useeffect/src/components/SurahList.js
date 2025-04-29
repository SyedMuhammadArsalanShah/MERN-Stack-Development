import React, { useState, useEffect } from "react";



function SurahList() {
    const [surahs, setSurah] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://api.alquran.cloud/v1/surah")
            .then((res) => res.json()).
            then((data) => {
                setSurah(data.data)
                setLoading(false)
            }).catch((err) => {

                console.error("API error karahi hai", err)
                setLoading(false)
            });



    }, [])

    if (loading) return <p>Surah is loading.....</p>

    return (
        <div>
            <h2> Surah Index Of the Quran</h2>
            {surahs.map((surah) => {
                return <div
                    key={surah.number}
                    style={{
                        border: "1px solid #000",
                        margin: "10px",
                        padding: "10px",
                    }}


                >
                    <h3>{surah.number} | {surah.englishName}</h3>
                    <p> Total ayahs :{surah.numberOfAyahs} </p>
                </div>



            })
            }

        </div>
    )

}

export default SurahList


