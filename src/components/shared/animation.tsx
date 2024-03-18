// AnimatedContent.js
import { useEffect } from 'react';

const AnimatedContent = () => {
  useEffect(() => {
    const content = document.querySelector('.content');
    if (content) {
      content.classList.add('animate');
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="content text-center">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <p className="text-lg mt-4">This is an example of a scroll animation on load using Next.js.</p>
      </div>
    </div>
  );
};

export default AnimatedContent;
