import React, { useEffect, useState } from "react";



function SurahList({ onSelect }) {
    const [surahs, setSurahs] = useState([]);

    useEffect(() => {
        fetch("https://hadithapi.com/api/books?apiKey=$2y$10$BylaBcXs5Lw7ZOtYmQ3PXO1x15zpp26oc1FeGktdmF6YeYoRd88e")
            .then(res => res.json())
            .then(data => setSurahs(data.books))




    }, [])


    return (
        <div>

            <ul style={{ listStyle: 'none', padding: '0' }}>
                {
                    surahs.map((surah, index) => (

                        <li key={index + 1} style={{ marginBottom: "10px" }} >
                            <h1>{surah.bookName} |  {surah.writerName}</h1>
                            <h3>{surah.hadiths_count} | {surah.chapters_count}</h3>
                            <button onClick={() => onSelect(surah.bookSlug)}   >

                                Read Book

                            </button>


                        </li>




                    ))

                }






            </ul>



        </div>

    )


}


export default SurahList;