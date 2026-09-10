(async () => {
  //await loadConfettiPreset(tsParticles);

  await tsParticles.load("tsparticles", {
    particles: {
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400"
        },
        image: [
          {
            src: "Python.png",
            width: 300,
            height: 300
          },
          {
            src: "pandas.png",
            width: 500,
            height: 354
          },
          {
            src: "matplotlib.png",
            width: 500,
            height: 120
          },
          {
            src: "numpy.png",
            width: 1445,
            height: 650
          },
          {
            src: "jupyter.png",
            width: 2224,
            height: 600
          },
          {
            src: "sklearn.png",
            width: 292,
            height: 181
          },
          {
            src: "vscode.png",
            width: 300,
            height: 300
          },
          {
            src: "github.png",
            width: 294,
            height: 272
          }
        ],
        polygon: {
          nb_sides: 5
        },
        stroke: {
          color: "#000000",
          width: 0
        },
        type: "image"
      },
      life: {
        duration: {
          value: 0
        }
      },
      number: {
        value: 15,
        max: 0,
        density: {
          enable: true
        }
      },
      move: {
        enable: true,
        gravity: {
          enable: false
        },
        decay: 0,
        direction: "bottom",
        speed: 2,
        outModes: {
          default: "out",
          left: "out",
          right: "out",
          bottom: "out",
          top: "out"
        }
      },
      size: {
        value: 100
      },
      opacity: {
        value: 1,
        animation: {
          enable: false
        }
      }
    },
    background: {
      color: "#232323",
      opacity: 0
    },
    emitters: [],
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse"
        }
      }
    },
    preset: "confetti"
  });
})();
