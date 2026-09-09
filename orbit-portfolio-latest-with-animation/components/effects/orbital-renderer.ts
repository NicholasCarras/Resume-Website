import * as THREE from "three";

export type SceneOptions = {
  variant: "stars" | "rings" | "core";
  color?: string;
  interactive?: boolean;
  scrollDriven?: boolean;
  animate: boolean;
};

export function createOrbitalScene(host: HTMLElement, options: SceneOptions) {
  const {
    variant,
    color = "#b8a4ff",
    interactive = false,
    scrollDriven = false,
    animate,
  } = options;
  const compact = window.matchMedia("(max-width: 800px)").matches;
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: !compact,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, compact ? 1.25 : 1.75),
  );
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.z = variant === "stars" ? 6 : 6.6;
  const assembly = new THREE.Group();
  scene.add(assembly);
  const heroStage = scrollDriven
    ? host.closest<HTMLElement>(".hero-track")
    : null;
  let cameraDistance = camera.position.z;

  // Seeded stars keep the composition stable between page visits.
  let seed = 427;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const starCount = compact ? 160 : 370;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (random() - 0.5) * 18;
    positions[i + 1] = (random() - 0.5) * 12;
    positions[i + 2] = -random() * 8;
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3),
  );
  const stars = new THREE.Points(
    starGeometry,
    new THREE.PointsMaterial({
      color: "#c8c8e3",
      size: 0.012,
      transparent: true,
      opacity: variant === "stars" ? 0.6 : 0.35,
      depthWrite: false,
    }),
  );
  scene.add(stars);

  const orbitGroups: THREE.Group[] = [];
  if (variant !== "stars") {
    scene.add(new THREE.AmbientLight("#aaa6cb", 1.2));
    const key = new THREE.DirectionalLight("#e5e9ff", 5);
    key.position.set(3, 4, 4);
    scene.add(key);
    const rim = new THREE.PointLight(color, 28, 15);
    rim.position.set(-2, 1, 2);
    scene.add(rim);
    const ice = new THREE.PointLight("#91dfff", 18, 12);
    ice.position.set(3, -2, 1);
    scene.add(ice);

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: "#545666",
      metalness: 0.82,
      roughness: 0.3,
    });
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(variant === "core" ? 0.65 : 0.49, 1),
      coreMaterial,
    );
    core.rotation.set(0.3, 0.3, 0);
    assembly.add(core);
    const cage = new THREE.LineSegments(
      new THREE.EdgesGeometry(core.geometry),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.65 }),
    );
    cage.rotation.copy(core.rotation);
    cage.scale.setScalar(1.018);
    assembly.add(cage);

    const radiusList =
      variant === "core" ? [1.05, 1.4, 1.75] : [1.15, 1.55, 1.95];
    radiusList.forEach((radius, index) => {
      const orbit = new THREE.Group();
      orbit.rotation.set(0.65 + index * 0.55, index * 0.4, index * 0.7);
      const material = new THREE.MeshStandardMaterial({
        color: index === 1 ? "#cdd2e2" : color,
        metalness: 0.65,
        roughness: 0.28,
        emissive: color,
        emissiveIntensity: 0.06,
      });
      orbit.add(
        new THREE.Mesh(
          new THREE.TorusGeometry(
            radius,
            index === 1 ? 0.018 : 0.012,
            8,
            compact ? 90 : 160,
          ),
          material,
        ),
      );
      orbit.add(
        new THREE.Mesh(
          new THREE.TorusGeometry(radius + 0.07, 0.0025, 4, 100),
          new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: 0.22,
          }),
        ),
      );
      const satellite = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 12, 8),
        new THREE.MeshBasicMaterial({ color: "#e4dcff" }),
      );
      satellite.position.set(radius, 0, 0);
      orbit.add(satellite);
      assembly.add(orbit);
      orbitGroups.push(orbit);
    });
    assembly.rotation.set(0.15, -0.3, -0.15);
  }

  let frame = 0;
  let visible = true;
  let disposed = false;
  let time = 0;
  let lastTime = performance.now();
  let dragging = false;
  let lastX = 0;
  let targetX = 0;
  let targetY = 0;
  let rotationX = 0;
  let rotationY = 0;

  function draw(now = performance.now()) {
    frame = 0;
    if (disposed) return;
    time += Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    rotationX += (targetX - rotationX) * 0.065;
    rotationY += (targetY - rotationY) * 0.065;
    const scroll = animate
      ? Number(heroStage?.style.getPropertyValue("--hero-progress") || 0)
      : 0;
    assembly.rotation.y =
      -0.3 + rotationX + scroll * 4.5 + (animate ? time * 0.12 : 0);
    assembly.rotation.x = 0.15 + rotationY + scroll * 0.85;
    orbitGroups.forEach((orbit, i) => {
      orbit.rotation.z =
        i * 0.7 +
        scroll * (i + 1) * 0.7 +
        (animate ? time * 0.14 * (i % 2 ? -1 : 1) : 0);
    });
    stars.rotation.y = animate ? time * 0.006 : 0;
    if (variant === "stars") {
      camera.position.z = 6 - scroll * 1.8;
      camera.rotation.y = rotationX * 0.018;
    } else if (scrollDriven) {
      camera.position.z = cameraDistance - scroll * 1.8;
    }
    renderer.render(scene, camera);
    if (animate && visible && !document.hidden)
      frame = requestAnimationFrame(draw);
  }

  function start() {
    lastTime = performance.now();
    if (!frame && visible && !document.hidden && !disposed)
      frame = requestAnimationFrame(draw);
  }
  function resize() {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (variant !== "stars") {
      cameraDistance = camera.aspect < 1 ? 6.6 / camera.aspect : 6.6;
      camera.position.z = cameraDistance;
    }
    start();
  }
  function onPointerDown(event: PointerEvent) {
    if (!interactive) return;
    dragging = true;
    lastX = event.clientX;
    host.setPointerCapture(event.pointerId);
  }
  function onPointerMove(event: PointerEvent) {
    if (!animate && !interactive) return;
    if (dragging) {
      targetX += (event.clientX - lastX) * 0.012;
      lastX = event.clientX;
    } else if (event.pointerType !== "touch" && animate) {
      const rect = host.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.5;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.25;
    }
    if (!animate) {
      rotationX = targetX;
      rotationY = targetY;
    }
    start();
  }
  function onPointerUp() {
    dragging = false;
  }
  function onKeyDown(event: KeyboardEvent) {
    if (
      !interactive ||
      !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
    )
      return;
    event.preventDefault();
    if (event.key === "ArrowLeft") targetX -= 0.2;
    if (event.key === "ArrowRight") targetX += 0.2;
    if (event.key === "ArrowUp") targetY -= 0.2;
    if (event.key === "ArrowDown") targetY += 0.2;
    if (!animate) {
      rotationX = targetX;
      rotationY = targetY;
    }
    start();
  }
  function onVisibility() {
    cancelAnimationFrame(frame);
    frame = 0;
    if (!document.hidden) start();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
    else {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  });
  visibilityObserver.observe(host);
  const pointerTarget = variant === "stars" ? window : host;
  pointerTarget.addEventListener(
    "pointermove",
    onPointerMove as EventListener,
    { passive: true },
  );
  host.addEventListener("pointerdown", onPointerDown);
  host.addEventListener("pointerup", onPointerUp);
  host.addEventListener("pointercancel", onPointerUp);
  host.addEventListener("keydown", onKeyDown);
  document.addEventListener("visibilitychange", onVisibility);
  resize();

  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    visibilityObserver.disconnect();
    pointerTarget.removeEventListener(
      "pointermove",
      onPointerMove as EventListener,
    );
    host.removeEventListener("pointerdown", onPointerDown);
    host.removeEventListener("pointerup", onPointerUp);
    host.removeEventListener("pointercancel", onPointerUp);
    host.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("visibilitychange", onVisibility);
    scene.traverse((object) => {
      const mesh = object as THREE.Mesh;
      mesh.geometry?.dispose();
      if (mesh.material) {
        const materials = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        materials.forEach((material) => material.dispose());
      }
    });
    renderer.dispose();
    renderer.domElement.remove();
  };
}
