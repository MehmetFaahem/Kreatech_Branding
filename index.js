// Scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth - 20, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Icosahedron geometry and material
const geometry = new THREE.IcosahedronGeometry(3.5, 0);
const material = new THREE.MeshBasicMaterial({
  color: "#a4a5a6",
  wireframe: true,
});
const icosahedron = new THREE.Mesh(geometry, material);
icosahedron.position.set(3.5, 1.5, 0);
scene.add(icosahedron);

// Camera position
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  icosahedron.rotation.x += 0.002;
  icosahedron.rotation.y += 0.002;
  renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
