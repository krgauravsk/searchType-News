import React from "react";
import { useGlobalContext } from "./Data/context";

const StoriesCards = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();
  if (isLoading) {
    return <div className="loading" />;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by
              <span> {author} | </span>
              {num_comments} comments
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
              <button
                className="remove-btn"
                onClick={() => removeStory(objectID)}
              >
                Remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default StoriesCards;
