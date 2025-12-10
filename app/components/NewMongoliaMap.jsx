"use client";

import React, { useState } from "react";
import styles from "../styles/NewMap.module.css";
import { useRouter } from "next/navigation";

const MongoliaSVG = ({ onAimagHover, onAimagLeave, hoveredAimagId }) => {
  const router = useRouter();

  const handleOver = (e) => {
    const path = e.target.closest("path");
    if (path && path.id) onAimagHover(path.id);
  };

  const handleAimagClick = (aimagId) => {
    const aimagName = aimagId.toLowerCase().replace('mn', '');
    router.push(`/aimag/${aimagName}`);
  };

  return (
    <svg
      className={styles.mapContainer}
      viewBox="0 0 1000 481"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <style>{`
        #features path {
          fill: #f5f5f5;
          stroke: #ffffff;
          stroke-width: 0.8;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        #features path:hover {
          fill: #e0f2fe;
        }
        ${
          hoveredAimagId
            ? `#features path#${hoveredAimagId} {
                fill: #bae6fd;
                stroke: #7dd3fc;
                stroke-width: 1.2;
              }`
            : ""
        }
      `}</style>
      <g 
        id="features" 
        onMouseOver={handleOver} 
        onMouseOut={onAimagLeave}
        onClick={(e) => {
          const path = e.target.closest("path");
          if (path && path.id) handleAimagClick(path.id);
        }}
      >
      </g>
    </svg>
  );
};

const NewMongoliaMap = () => {
  const [hoveredAimagId, setHoveredAimagId] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  const router = useRouter();

  const reviews = [
    {
      name: 'Alex Johnson',
      location: 'Ulaanbaatar',
      rating: 5,
      comment: 'An unforgettable experience! The landscapes are breathtaking and the people are incredibly welcoming.',
      date: 'October 2023'
    },
    {
      name: 'Sarah Kim',
      location: 'Gobi Desert',
      rating: 4,
      comment: 'The Gobi Desert was absolutely stunning. The night sky there is something you have to see to believe!',
      date: 'August 2023'
    }
  ];

  const handleAimagHover = (aimagId) => {
    setHoveredAimagId(aimagId);
  };

  const handleAimagLeave = () => {
    setHoveredAimagId(null);
  };

  const handleAimagClick = (slug) => {
    router.push(`/aimag/${slug}`);
  };

  const handlePrevReview = () => {
    setCurrentReview(prev => prev === 0 ? reviews.length - 1 : prev - 1);
  };

  const handleNextReview = () => {
    setCurrentReview(prev => (prev + 1) % reviews.length);
  };

  const carduud = [
    { id: 1, title: 'Ulaanbaatar', slug: 'ulaanbaatar', img: '/images/ulaanbaatar.jpg' },
    { id: 2, title: 'Khovd', slug: 'khovd', img: '/images/khovd.jpg' },
    { id: 3, title: 'Khovsgol', slug: 'khovsgol', img: '/images/khovsgol.jpg' },
    { id: 4, title: 'Gobi', slug: 'gobi', img: '/images/gobi.jpg' },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBox}>
        <span>аймаг/хот: </span>
        <span className={styles.aimagName}>
          {hoveredAimagId ? hoveredAimagId.replace('MN', '') : 'Select a region'}
        </span>
      </div>

      <div className={styles.mapContainerBox}>
        <MongoliaSVG
          onAimagHover={handleAimagHover}
          onAimagLeave={handleAimagLeave}
          hoveredAimagId={hoveredAimagId}
        />
        
        <div className={styles.contentGrid}>
          {carduud.map((item) => (
            <div
              key={item.id}
              className={styles.gridItem}
              onClick={() => handleAimagClick(item.slug)}
            >
              <div className={styles.gridImageContainer}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.gridImage}
                />
              </div>
              <div className={styles.gridTitle}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.reviewSection}>
        <h2 className={styles.sectionTitle}>Traveler Reviews</h2>
        <div className={styles.reviewContainer}>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={handlePrevReview}
            aria-label="Previous review"
          >
            ‹
          </button>
          
          <div className={styles.reviewCard}>
            <div className={styles.reviewContent}>
              <div className={styles.reviewHeader}>
                <h3 className={styles.reviewAuthor}>{reviews[currentReview].name}</h3>
                <div className={styles.reviewRating}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < reviews[currentReview].rating ? styles.starFilled : styles.star}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className={styles.reviewLocation}>{reviews[currentReview].location}</p>
              <p className={styles.reviewText}>"{reviews[currentReview].comment}"</p>
              <p className={styles.reviewDate}>{reviews[currentReview].date}</p>
            </div>
          </div>
          
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={handleNextReview}
            aria-label="Next review"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewMongoliaMap;
