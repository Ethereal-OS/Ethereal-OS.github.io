particlesJS("fire-snow", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: ["#ff8c00", "#ff4500", "#ff0000"] }, // Fire-like colors
      shape: {
        type: "circle",
        stroke: { width: 0 },
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: { enable: true, speed: 0.5, opacity_min: 0.3, sync: false },
      },
      size: {
        value: 6,
        random: true,
        anim: { enable: true, speed: 2, size_min: 2, sync: false },
      },
      move: {
        enable: true,
        speed: 2, // Random floating effect
        direction: "none", // Now particles will flow in ALL directions
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      line_linked: { enable: false }, // No linking for floating particles
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Particles scatter away when hovered
        },
        onclick: {
          enable: true,
          mode: "bubble", // Fireburst effect on click
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 60, // Particles move away from cursor
          duration: 0.4,
        },
        bubble: {
          distance: 150,
          size: 10, // Temporary size increase on click
          duration: 0.3,
          opacity: 1,
        },
      },
    },
    retina_detect: true,
  });