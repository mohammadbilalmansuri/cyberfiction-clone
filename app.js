gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector("main").style.transform
    ? "transform"
    : "fixed",
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Selecting the canvas element from the HTML document
const canvas = document.querySelector("canvas");

// Getting the 2D rendering context of the canvas
const context = canvas.getContext("2d");

// Setting the initial width and height of the canvas to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Event listener to update canvas size when the window is resized
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Call the render function to redraw the image after resizing
  render();
});

// Function to retrieve file paths for the images
function files(index) {
  const data = `
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0001.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0002.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0003.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0004.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0005.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0006.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0007.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0008.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0009.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0010.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0011.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0012.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0013.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0014.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0015.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0016.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0017.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0018.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0019.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0020.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0021.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0022.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0023.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0024.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0025.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0026.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0027.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0028.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0029.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0030.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0031.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0032.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0033.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0034.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0035.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0036.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0037.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0038.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0039.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0040.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0041.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0042.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0043.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0044.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0045.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0046.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0047.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0048.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0049.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0050.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0051.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0052.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0053.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0054.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0055.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0056.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0057.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0058.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0059.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0060.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0061.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0062.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0063.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0064.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0065.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0066.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0067.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0068.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0069.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0070.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0071.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0072.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0073.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0074.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0075.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0076.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0077.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0078.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0079.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0080.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0081.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0082.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0083.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0084.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0085.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0086.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0087.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0088.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0089.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0090.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0091.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0092.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0093.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0094.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0095.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0096.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0097.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0098.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0099.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0100.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0101.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0102.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0103.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0104.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0105.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0106.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0107.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0108.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0109.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0110.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0111.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0112.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0113.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0114.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0115.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0116.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0117.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0118.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0119.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0120.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0121.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0122.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0123.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0124.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0125.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0126.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0127.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0128.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0129.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0130.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0131.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0132.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0133.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0134.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0135.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0136.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0137.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0138.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0139.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0140.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0141.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0142.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0143.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0144.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0145.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0146.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0147.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0148.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0149.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0150.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0151.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0152.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0153.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0154.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0155.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0156.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0157.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0158.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0159.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0160.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0161.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0162.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0163.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0164.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0165.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0166.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0167.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0168.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0169.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0170.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0171.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0172.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0173.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0174.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0175.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0176.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0177.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0178.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0179.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0180.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0181.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0182.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0183.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0184.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0185.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0186.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0187.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0188.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0189.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0190.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0191.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0192.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0193.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0194.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0195.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0196.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0197.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0198.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0199.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0200.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0201.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0202.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0203.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0204.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0205.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0206.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0207.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0208.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0209.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0210.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0211.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0212.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0213.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0214.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0215.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0216.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0217.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0218.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0219.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0220.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0221.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0222.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0223.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0224.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0225.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0226.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0227.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0228.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0229.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0230.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0231.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0232.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0233.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0234.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0235.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0236.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0237.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0238.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0239.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0240.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0241.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0242.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0243.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0244.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0245.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0246.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0247.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0248.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0249.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0250.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0251.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0252.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0253.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0254.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0255.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0256.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0257.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0258.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0259.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0260.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0261.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0262.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0263.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0264.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0265.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0266.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0267.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0268.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0269.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0270.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0271.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0272.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0273.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0274.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0275.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0276.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0277.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0278.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0279.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0280.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0281.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0282.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0283.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0284.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0285.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0286.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0287.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0288.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0289.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0290.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0291.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0292.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0293.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0294.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0295.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0296.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0297.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0298.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0299.webp
  https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1734923508/cyberfiction/male0300.webp
  `;
  // Splitting the data into an array of file paths and returning the one at the specified index
  return data.split("\n")[index];
}

// Total number of frames in the animation
const frameCount = 300;

// Array to hold Image objects for each frame
const images = [];

// Object to store the current frame index
const imageSeq = {
  frame: 1,
};

// Loop to preload all images into the 'images' array
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

// Using GSAP library to animate the sequence of frames based on scroll position
gsap.to(imageSeq, {
  // Set the last frame as the end point of the animation
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  // Configuring ScrollTrigger for the animation
  scrollTrigger: {
    scrub: 0.15,
    trigger: "#banner>canvas",
    start: "top top",
    end: "600% top",
    scroller: "main",
  },
  onUpdate: render, // Callback function to render each frame during animation
});

// Event handler to render the current frame
images[1].onload = render;

// Function to render the current frame on the canvas
function render() {
  scaleImage(images[imageSeq.frame], context);
}

// Function to scale and draw an image on the canvas
function scaleImage(img, ctx) {
  const canvas = ctx.canvas;
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const ratio = Math.max(hRatio, vRatio);
  const centerShift_x = (canvas.width - img.width * ratio) / 2;
  const centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height); // it clears scrolled image
  // it draw next image after scroll
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

// Creating a ScrollTrigger to pin the canvas element while scrolling
ScrollTrigger.create({
  trigger: "#banner>canvas",
  pin: true,
  // markers:true,
  scroller: "main",
  start: "top top",
  end: "600% top",
});

// we can also do same thing with gsap
// gsap.to("page>canvas", {
//   scrollTrigger: {
//     trigger: "#banner>canvas",
//     pin: true,
//     // markers:true,
//     scroller: "main",
//     start: "top top",
//     end: "600% top",
//   },
// });

// Using GSAP to pin each page section while scrolling

gsap.to("#section1", {
  scrollTrigger: {
    trigger: "#section1",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: "main",
  },
});

gsap.to("#section2", {
  scrollTrigger: {
    trigger: "#section2",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: "main",
  },
});

gsap.to("#section3", {
  scrollTrigger: {
    trigger: "#section3",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: "main",
  },
});

ScrollTrigger.refresh();
