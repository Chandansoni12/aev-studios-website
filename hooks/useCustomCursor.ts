'use client';

import { useEffect, useRef } from 'react';

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px)';
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      follower.style.transform = 'translate(' + followerX + 'px, ' + followerY + 'px)';
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { cursorRef, followerRef };
}

export function CustomCursor() {
  const { cursorRef, followerRef } = useCustomCursor();
  
  return (
    <>
      <div ref={cursorRef} className='cursor-dot' />
      <div ref={followerRef} className='cursor-outline' />
    </>
  );
}
