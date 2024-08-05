import './Feature.scss';

interface FeatureProps {
  image: string;
  alt: string;
  featureName: string;
  title: string;
  description: string;
}

function Feature({ image, alt, featureName, title, description }: FeatureProps) {
  return (
    <div className='feature'>
      <img src={image} alt={alt} />
      <div>
        <h3>{featureName}</h3>
        <h2>{title}</h2>
        <p className='feature-description'>{description}</p>
      </div>
    </div>
  );
}

export default Feature;
