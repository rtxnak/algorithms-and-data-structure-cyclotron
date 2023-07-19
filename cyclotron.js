// import { acceleratingElectron } from "./acceleratingElectron";
const acceleratingElectron = require('./acceleratingElectron.js');
const acceleratingNeutron = require('./acceleratingNeutron.js');
const emptyParticle = require('./emptyParticle.js');
const acceleratingProton = require('./acceleratingProton.js');

// import { acceleratingNeutron } from "./acceleratingNeutron"
// import { emptyParticle } from "./emptyParticle";

function cyclotron(particle, matrixSize) {
  const particles = ["e", "p", "n"];
  if (!particle || !particles.includes(particle)) {
    return emptyParticle(matrixSize);
  }

  if (particle === "e") {
    return acceleratingElectron(matrixSize);
  }

  if (particle === "p") {
    return acceleratingProton(matrixSize);
  }

  if (particle === "n") {
    return acceleratingNeutron(matrixSize);
  }
}

// Test cases
console.log("Cyclotron without particles:");
console.log(cyclotron("", 4)); // Empty Particle

console.log("\nAccelerating an electron (4x4):");
console.log(cyclotron("e", 4));

console.log("\nAccelerating a proton (4x4):");
console.log(cyclotron("p", 4));

console.log("\nAccelerating a proton (6x6):");
console.log(cyclotron("p", 6));

console.log("\nAccelerating a neutron (4x4):");
console.log(cyclotron("n", 4));

console.log("\nAccelerating an unknown particle (6x6):");
console.log(cyclotron("unknown", 6));
