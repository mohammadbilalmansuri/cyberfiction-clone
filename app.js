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
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0001.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0002.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0003.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0004.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0005.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0006.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0007.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0008.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0009.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0010.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0011.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0012.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0013.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0014.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0015.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0016.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0017.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0018.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0019.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0020.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0021.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0022.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0023.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0024.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0025.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0026.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0027.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0028.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0029.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0030.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0031.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0032.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0033.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0034.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0035.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0036.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0037.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0038.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0039.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0040.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0041.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0042.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0043.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0044.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0045.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0046.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0047.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0048.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0049.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0050.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0051.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0052.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0053.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0054.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0055.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0056.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0057.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0058.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0059.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0060.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0061.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0062.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0063.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0064.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0065.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0066.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0067.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0068.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0069.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0070.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0071.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0072.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0073.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0074.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0075.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0076.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0077.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0078.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0079.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0080.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0081.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0082.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0083.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0084.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0085.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0086.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0087.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0088.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0089.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0090.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0091.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0092.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0093.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0094.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0095.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0096.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0097.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0098.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0099.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0100.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0101.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0102.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0103.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0104.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0105.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0106.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0107.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0108.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0109.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0110.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0111.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0112.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0113.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0114.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0115.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0116.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0117.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0118.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0119.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0120.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0121.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0122.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0123.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0124.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0125.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0126.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0127.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0128.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0129.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0130.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0131.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0132.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0133.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0134.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0135.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0136.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0137.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0138.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0139.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0140.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0141.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0142.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0143.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0144.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0145.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0146.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0147.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0148.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0149.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0150.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0151.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0152.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0153.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0154.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0155.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0156.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0157.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0158.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0159.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0160.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0161.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0162.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0163.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0164.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0165.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0166.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0167.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0168.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0169.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0170.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0171.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0172.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0173.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0174.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0175.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0176.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0177.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0178.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0179.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0180.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0181.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0182.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0183.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0184.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0185.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0186.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0187.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0188.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0189.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0190.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0191.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0192.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0193.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0194.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0195.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0196.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0197.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0198.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0199.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0200.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0201.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0202.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0203.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0204.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0205.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0206.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0207.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0208.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0209.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0210.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0211.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0212.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0213.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0214.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0215.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0216.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0217.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0218.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0219.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0220.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0221.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0222.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0223.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0224.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0225.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0226.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0227.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0228.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0229.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0230.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0231.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0232.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0233.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0234.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0235.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0236.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0237.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0238.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0239.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0240.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0241.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0242.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0243.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0244.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0245.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0246.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0247.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0248.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0249.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0250.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0251.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0252.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0253.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0254.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0255.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0256.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0257.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0258.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0259.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0260.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0261.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0262.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0263.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0264.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0265.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0266.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0267.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0268.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0269.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0270.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0271.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0272.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0273.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0274.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0275.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0276.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0277.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0278.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0279.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0280.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0281.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0282.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0283.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0284.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0285.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0286.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0287.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0288.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0289.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0290.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0291.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0292.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0293.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0294.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0295.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0296.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0297.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0298.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0299.png
  https://res.cloudinary.com/samaxy50/image/upload/v1734403137/male0300.png
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
