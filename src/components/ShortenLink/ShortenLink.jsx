import React, { useState, useEffect } from "react";
import styles from "./ShortenLink.module.css";

const ShortenLink = () => {
  const getLocalStorage = () => {
    const shortenedLinks = localStorage.getItem("shortenedLinks");
    return shortenedLinks ? JSON.parse(shortenedLinks) : [];
  };

  const [link, setLink] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState(getLocalStorage());
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  const shortenURL = async (longURL) => {
    const apiURL = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
      longURL
    )}`;
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const shortURL = await response.text();
      return shortURL;
    } catch {
      return null;
    }
  };

  const handleShortenLink = async () => {
    if (link.trim() === "") {
      setError("Please add a link");
      return;
    }

    setError("");

    const shortURL = await shortenURL(link);

    if (shortURL) {
      const newLink = { original: link, short: shortURL };
      setShortenedLinks([...shortenedLinks, newLink]);
      setLink("");
    } else {
      setError("Failed to shorten the link. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex(null);
      }, 5000);
    });
  };

  return (
    <section className={styles.shortenLink}>
      <div className={styles.bg}>
        <div>
          {error && <p className={styles.errorMessage}>Please add a link</p>}
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Shorten a link here..."
              value={link}
              onChange={handleInputChange}
              className={error ? styles.error : ""}
            />
            <button onClick={handleShortenLink}>Shorten It!</button>
          </div>
        </div>
      </div>
      <div className={styles.bg2}>
        <ul className={styles.linkList}>
          {shortenedLinks.map((item, index) => (
            <li key={index} className={styles.linkItem}>
              <span className={styles.linkOriginal}>{item.original}</span>
              <hr className={styles.horizontalLine} />
              <a href={item.short} target="_blank" rel="noopener noreferrer">
                {item.short}
              </a>
              <button
                onClick={() => copyToClipboard(item.short, index)}
                className={`${copiedIndex === index ? styles.copied : ""}`}
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ShortenLink;
