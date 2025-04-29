import React, { useEffect, useState } from "react";




function MushafSurahList({ onSurahCLick }) {
    const [surahs, setSurahs] = useState([]);
    useEffect(() => {

        fetch("https://api.alquran.cloud/v1/surah")
            .then((res) => res.json()).then((data) => setSurahs(data.data))




    }, []);

    return <div>

        {
            surahs.map((surah) => {
                return <div
                    key={surah.number}
                    onClick={() => onSurahCLick(surah.number)}
                    style={{
                        border: "1px solid black",
                        margin: "10px",
                        padding: "10px",
                        cursor: "pointer"
                    }}

                >

                    <h3>{surah.number} | {surah.englishName}</h3>
                    <p> Total ayahs :{surah.numberOfAyahs} </p>


                </div>



            })
        }



    </div>

}


export default MushafSurahList;