import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    if (!cursor) return;

    const pointer = cursor.querySelector('.custom-cursor-pointer') as HTMLElement;
    const light = cursor.querySelector('.custom-cursor-light') as HTMLElement;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onMouseEnter = () => {
      cursor.classList.add('interactive-hover');
    };

    const onMouseLeave = () => {
      cursor.classList.remove('interactive-hover');
    };

    document.addEventListener('mousemove', onMouseMove);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, .quadrant-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <div className="custom-cursor">
      <div className="custom-cursor-light"></div>
      <div className="custom-cursor-pointer"></div>
    </div>
  );
};

export default CustomCursor;