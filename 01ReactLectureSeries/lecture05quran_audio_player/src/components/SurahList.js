import React, { useEffect, useState } from "react";



function SurahList({ onSelect }) {
    const [surahs, setSurahs] = useState([]);

    useEffect(() => {
        fetch("https://api.alquran.cloud/v1/surah")
            .then(res => res.json())
            .then(data => setSurahs(data.data))




    }, [])


    return (
        <div>

            <ul style={{ listStyle: 'none', padding: '0' }}>
                {
                    surahs.map((surah) => (

                        <li key={surah.number} style={{ marginBottom: "10px" }} >



                            <button onClick={() => onSelect(surah.number)}   >

                                {surah.name} |  {surah.englishName}


                            </button>


                        </li>




                    ))

                }






            </ul>



        </div>

    )


}


export default SurahList;