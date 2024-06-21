import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import { Section6 } from "./Section6";

export const Section1 = () => {

  // const [isVisibleOne, setIsVisibleOne] = useState(false);
  // const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  // const [isVisibleThree, setIsVisibleThree] = useState(false);
  // const [isVisibleFour, setIsVisibleFour] = useState(false);
  // const [isVisibleFive, setIsVisibleFive] = useState(false);
  // const [isVisibleSix, setIsVisibleSix] = useState(false);

  // const oneRef = useRef(null);
  // const twoRef = useRef(null);
  // const threeRef = useRef(null);
  // const fourRef = useRef(null);
  // const fiveRef = useRef(null);
  // const sixRef = useRef(null);

  // useEffect(() => {
  //     const observerOne = new IntersectionObserver(([entry]) => {
  //         if (entry.isIntersecting) {
  //             setIsVisibleOne(true);
  //             observerOne.disconnect();
  //         }
  //     });

  //     const observerTwo = new IntersectionObserver(([entry]) => {
  //         if (entry.isIntersecting) {
  //             setIsVisibleTwo(true);
  //             observerTwo.disconnect();
  //         }
  //     });

  //     const observerThree = new IntersectionObserver(([entry]) => {
  //       if (entry.isIntersecting) {
  //           setIsVisibleThree(true);
  //           observerThree.disconnect();
  //       }
  //     });

  //     const observerFour = new IntersectionObserver(([entry]) => {
  //       if (entry.isIntersecting) {
  //           setIsVisibleFour(true);
  //           observerFour.disconnect();
  //       }
  //     });

  //     const observerFive = new IntersectionObserver(([entry]) => {
  //       if (entry.isIntersecting) {
  //           setIsVisibleFive(true);
  //           observerFive.disconnect();
  //       }
  //     });

  //     const observerSix = new IntersectionObserver(([entry]) => {
  //       if (entry.isIntersecting) {
  //           setIsVisibleSix(true);
  //           observerSix.disconnect();
  //       }
  //     });

  //     if (oneRef.current) {
  //         observerOne.observe(oneRef.current);
  //     }

  //     if (twoRef.current) {
  //         observerTwo.observe(twoRef.current);
  //     }

  //     if (threeRef.current) {
  //       observerThree.observe(threeRef.current);
  //     }

  //     if (fourRef.current) {
  //       observerFour.observe(fourRef.current);
  //     }

  //     if (fiveRef.current) {
  //       observerFive.observe(fiveRef.current);
  //     }

  //     if (sixRef.current) {
  //       observerSix.observe(sixRef.current);
  //     }

  //     return () => {
  //         if (oneRef.current) {
  //             observerOne.unobserve(oneRef.current);
  //         }
  //         if (twoRef.current) {
  //             observerTwo.unobserve(twoRef.current);
  //         }
  //         if (threeRef.current) {
  //           observerThree.unobserve(threeRef.current);
  //         }
  //         if (fourRef.current) {
  //           observerFour.unobserve(fourRef.current);
  //         }
  //         if (fiveRef.current) {
  //           observerFive.unobserve(fiveRef.current);
  //         }
  //         if (sixRef.current) {
  //           observerSix.unobserve(sixRef.current);
  //         }
  //     };
  // }, []);

    return (
      <>
        <section className="one">
          <div className="navigation">
            <div className="navigation-left">
            
              </div>
            <div className="navigation-right">

            </div>
          </div>
          <div className="one-content" >
            <div className="one-content-left">
              <h1 className="headline" >Crafting Digital <br /> <span className="headline-purple" >Masterpieces</span></h1>
            </div>
            <div className="one-content-right">
              
            </div>
          </div>
        </section>
      </>
    )
}