import readingTime from "reading-time";

const getReadingTime = (text: string) => {
  return readingTime(text).text;
};

export default getReadingTime;
