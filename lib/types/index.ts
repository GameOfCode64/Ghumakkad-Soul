export interface TrekCard {
  _id: string;
  slug: {
    current: string;
  };
  trekName: string;
  backgroundImageUrl: string;
  duration: string;
  location: string;
  distance: string;
  bestTime: string[];
  rating: number;
}

export interface AboutProps {
  heading: string;
  description1: string;
  description2: string;
  aboutImage: string;
  cardHeader1: string;
  cardHeader2: string;
  cardHeader3: string;
  cardHeader4: string;
  cardDesc1: string;
  cardDesc2: string;
  cardDesc3: string;
  cardDesc4: string;
}
