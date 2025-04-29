import React, { useEffect, useState } from "react";



function DetailSurah({ surahNumber, goBack }) {
    const [ayahs, setayahs] = useState([]);
    const [surahInfo, setSurahInfo] = useState(null);


    useEffect(() => {

        fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`).then((res) => res.json()).then((data) => {

            setSurahInfo(data.data)
            setayahs(data.data.ayahs)
        })
    }, [surahNumber])



    return (<div>
        <button onClick={goBack}> back to the surah </button>
        {
            surahInfo && (
                <div>

                    <h2>

                        {surahInfo.name
                        }
                    </h2>

                    <p>

                        {surahInfo.englishName
                        }
                    </p>

                </div>

            )

        }

        <div>

            {ayahs.map((ayah) => {

                return <div key={ayah.number}
                    style={{
                        border: "1px solid black",
                        margin: "10px",
                        padding: "10px",

                    }}
                >
                    <p> <strong> Ayah : {ayah.numberInSurah}</strong></p>
                    <p style={{ fontSize: "25px" }}> {ayah.text}</p>



                </div>



            })}


        </div>






    </div>)



}


export default DetailSurah;