(() => {
  // ------------ Canvas Setup ------------
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  function setCanvasDimensions() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth < 1024 ? canvas.height : window.innerWidth;
  }

  setCanvasDimensions();

  function resizeCanvas() {
    setCanvasDimensions();
    render();
  }

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  window.addEventListener("resize", debounce(resizeCanvas, 100));

  const imagesUrls = Array.from(
    { length: 300 },
    (_, i) =>
      `https://res.cloudinary.com/mohammadbilalmansuri/image/upload/cyberfiction/male${String(
        i + 1
      ).padStart(4, "0")}.webp`
  );

  // Holds Image objects for each frame
  const images = new Map();

  const firstImage = new Image();
  firstImage.src = imagesUrls[0];
  firstImage.onload = function () {
    images.set(0, firstImage);
    requestAnimationFrame(render); // Start rendering after the first image is loaded
  };

  imagesUrls.slice(1).forEach((imageUrl, index) => {
    const img = new Image();
    img.src = imageUrl;
    images.set(index + 1, img);
  });

  // Object to store the current frame index
  const imageSeq = { frame: 0 };

  // Function to render the current frame on the canvas
  function render() {
    const img = images.get(imageSeq.frame) || firstImage;
    img && drawImageOnCanvas(img, context);
  }

  function drawImageOnCanvas(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  // ------------ Lenis with GSAP ------------

  const lenis = new Lenis();
  gsap.registerPlugin(ScrollTrigger);
  lenis.on("scroll", ScrollTrigger.update);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // ------------ Animations on scroll ------------

  gsap.to(imageSeq, {
    frame: images.size - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.15,
      trigger: "#banner",
      start: "top top",
      end: "600% top",
      scroller: "body",
    },
    onUpdate: render,
  });

  ["#section1", "#section2", "#section3"].forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        scroller: "body",
      },
    });
  });

  ScrollTrigger.refresh();
})();
