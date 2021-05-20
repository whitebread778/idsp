import SwiperStyle from "../../styles/home/swiper.module.css";
import { useState, useRef } from "react";

const Swiper = () => {
  const scroll = useRef(null);

  const rightButton = async event => {
    const start = scroll.current.scrollLeft;
    let goal = start;
    let int = setInterval(() => {
      scroll.current.scrollTo({
        left: goal + 20
      });
      goal += 20;
      if (goal >= start + 500) clearInterval(int);
    }, 10)
  }

  const leftButton = async event => {
    const start = scroll.current.scrollLeft;
    let goal = start;
    let int = setInterval(() => {
      scroll.current.scrollTo({
        left: goal - 20
      });
      goal -= 20;
      if (goal <= start - 500) clearInterval(int);
    }, 10)
  }

  return (
    <div className={SwiperStyle.box}>
      
      <div className={SwiperStyle.container} ref={element => scroll.current = element}>
        <div className={SwiperStyle.wrapper}>
          <div className={SwiperStyle.item}> item 1 </div>
          <div className={SwiperStyle.item}> item 2 </div>
          <div className={SwiperStyle.item}> item 3 </div>
          <div className={SwiperStyle.item}> item 4 </div>
          <div className={SwiperStyle.item}> item 5 </div>
          <div className={SwiperStyle.item}> item 1 </div>
          <div className={SwiperStyle.item}> item 2 </div>
          <div className={SwiperStyle.item}> item 3 </div>
          <div className={SwiperStyle.item}> item 4 </div>
          <div className={SwiperStyle.item}> item 5 </div>
          <div className={SwiperStyle.item}> item 1 </div>
          <div className={SwiperStyle.item}> item 2 </div>
          <div className={SwiperStyle.item}> item 3 </div>
          <div className={SwiperStyle.item}> item 4 </div>
          <div className={SwiperStyle.item}> item 5 </div>
        </div>
      </div>

      <div className={SwiperStyle.LRButtons} >
        <div className={SwiperStyle.right} onClick={leftButton}
        ><svg viewBox="0 0 24 24" width="30" height="30" className={SwiperStyle.SwipeButton}>
            <path d="M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z" transform="rotate(180 12 12)"></path>
          </svg></div>

        <div className={SwiperStyle.left} onClick={rightButton}
        ><svg viewBox="0 0 24 24" width="30" height="30" className={SwiperStyle.SwipeButton}>
            <path d="M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z"></path>
          </svg></div>
      </div>

    </div>
  )
}

export default Swiper
