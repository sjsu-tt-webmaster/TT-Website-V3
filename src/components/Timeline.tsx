// /components/Timeline.tsx
import './Timeline.scss'; // Import the styles for Timeline

const Timeline = () => {
  return (
    <div className="timeline-container">
      <section id="timeline">
        <h1>A Flexbox Timeline</h1>
        <p className="leader">
          All cards must be the same height and width for space calculations on large screens.
        </p>
        <div className="demo-card-wrapper">
          {/* Timeline Cards */}
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className={`demo-card demo-card--step${step}`}>
              <div className="head">
                <div className="number-box">
                  <span>{step < 10 ? `0${step}` : step}</span>
                </div>
                <h2>
                  <span className="small">Subtitle</span> {`Step ${step}`}
                </h2>
              </div>
              <div className="body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis
                  deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
                </p>
                <img src="http://placehold.it/1000x500" alt={`Graphic for step ${step}`} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Timeline;
