import React, { useEffect, useState } from "react";

function AudioPlayer({ surah }) {

  const [audioUrl, setAudioUrl] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      `https://hadithapi.com/api/${surah}/chapters?apiKey=$2y$10$BylaBcXs5Lw7ZOtYmQ3PXO1x15zpp26oc1FeGktdmF6YeYoRd88e`
    )
      .then((res) => res.json())
      .then((data) => {
        setAudioUrl(data.chapters);
      });
  }, [surah]);

  const fetchHadiths = (bookSlug, chapterNumber) => {
    setLoading(true);
    fetch(
      `https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$BylaBcXs5Lw7ZOtYmQ3PXO1x15zpp26oc1FeGktdmF6YeYoRd88e&book=${bookSlug}&chapter=${chapterNumber}&paginate=100000`
    )
      .then((res) => res.json())
      .then((data) => {
        setHadiths(data.hadiths.data);
        setSelectedChapter(`${bookSlug} - Chapter ${chapterNumber}`);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch hadiths", err);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Audio Surah Chapters</h1>
      {audioUrl.map((audioV) => (
        <div key={audioV.chapterNumber} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}>
          <h2>Chapter {audioV.chapterNumber}</h2>
          <p style={{ direction: "rtl" }}>{audioV.chapterArabic}</p>
          <p style={{ direction: "rtl" }}>{audioV.chapterUrdu}</p>
          <p style={{ direction: "ltr" }}>{audioV.chapterEnglish}</p>

     
          <button
            onClick={() => fetchHadiths(surah, audioV.chapterNumber)}
            style={{ padding: "6px 12px", margin: "10px 0", cursor: "pointer" }}
          >
            Show Hadiths
          </button>
        </div>
      ))}


      {loading && <p>Loading Hadiths...</p>}

      {selectedChapter && !loading && (
        <div style={{ backgroundColor: "#f5f5f5", padding: "10px", marginTop: "20px" }}>
          <h2>Hadiths for {selectedChapter}</h2>
          {hadiths.length > 0 ? (
            hadiths.map((hadith) => (
              <div key={hadith.id} style={{ marginBottom: "15px" }}>
                <p><strong>Arabic:</strong> <span style={{ direction: "rtl" }}>{hadith.hadithArabic}</span></p>
                <p><strong>Urdu:</strong> {hadith.hadithUrdu}</p>
                <p><strong>English:</strong> {hadith.hadithEnglish}</p>
              </div>
            ))
          ) : (
            <p>No hadiths found for this chapter.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AudioPlayer;
