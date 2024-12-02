export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
};

export const slideIn = (direction) => ({
    initial: { x: direction === "left" ? -50 : 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
});
