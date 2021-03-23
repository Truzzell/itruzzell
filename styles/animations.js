// export const pageAnimation = {
//     hidden: {
//         opacity: 0,
//         y: 300,
        
//     },
//     show: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             delayChildren: 0.8,
//             duration: 0.3,
//             when: "beforeChildren",
//             staggerChildren: 0.8,
//         }
//     },
//     exit: {
//         opacity: 0,
//         y: 300,
//         transition: {
//             duration: 0.4,
//         }
//     }

// };

export const fade = {
    hide: {opacity: 0, y: -20},
    show: {
        y: 0,
        opacity: 1, 
        transition: {duration: 2, delayChildren: 0.6,  ease: "easeOut",
        staggerChildren: 0.8},
    }
};

export const titleAnimation = {
    hide: {y: -200},
    show: {
        y: 0,
        transition: {duration: 0.6,  ease: "easeOut",
        },
    }
};

export const fromLeft = {
    hide: { x: "-100vw" },
    show: { x: 0 }
}

export const fromRight = {
    hide: { x: "100vw" },
    show: { x: 0 }
}

export const imgAnimation = {
    hidden: { scale: 1.2, opacity: 0},
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
};

export const lineAnimation = {
    hidden: {width: "0%"},
    show: {
        width: "100%",
        transition: {duration: 1},
        
    }
};

export const scrollReveal = {
    hidden: { opacity: 0, scale: 1.1, transition: { duration: 0.5 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  

  export default null