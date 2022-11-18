import React from "react";

const TuitStats = ({ likeTuit, tuit }) => {
  return (
    <div className="row mt-2">
      <div className="col">
        <i className="far fa-message me-1"></i>
        {tuit.stats && tuit.stats.replies}
      </div>
      <div className="col">
        <i className="far fa-retweet me-1"></i>
        {tuit.stats && tuit.stats.retuits}
      </div>
      <div className="col" onClick={() => likeTuit(tuit)}>
        <i className="far fa-heart me-1"></i>
        {tuit.stats && tuit.stats.likes}
      </div>
      <div className="col">
        <i className="far fa-inbox-out"></i>
      </div>
    </div>
  );
};

export default TuitStats;