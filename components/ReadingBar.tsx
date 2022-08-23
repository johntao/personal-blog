import { useState, useEffect } from "react";
export default function ReadingBar() {
  const [width, setWidth] = useState(0);
  const updateWidthOnScroll = () => {
    // const de = document.documentElement
    const db = document.body
    //v1: const el = target.current;
    //v1: const curY = window.pageYOffset || de.scrollTop || db.scrollTop || 0;
    //v2: const curY = de.scrollTop || db.scrollTop;
    //v3: const curY = window.scrollY;
    const curY = window.scrollY;
    //v1: const totalY = el.clientHeight - el.offsetTop - window.innerHeight;
    //v2: const totalY = (de.scrollHeight || db.scrollHeight) - de.clientHeight;
    //v3: const totalY = db.scrollHeight - window.innerHeight;
    const totalY = db.scrollHeight - window.innerHeight;
    if(!curY || !totalY) return setWidth(0)
    //v3: setWidth(Number((curY / totalY).toFixed(2)) * 100);
    if (curY > totalY) return setWidth(100)
    setWidth((curY / totalY) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", updateWidthOnScroll);
    return () => window.removeEventListener("scroll", updateWidthOnScroll);
  }, []);
  return <div className="fixed h-1 z-50 bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: `${width}%` }} />;
}