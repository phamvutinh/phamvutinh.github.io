'use client';

import {
  MeshDistortMaterial,
  Shadow,
  ShadowType,
  useGLTF
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import * as THREE from 'three';

const Model = () => {
  const group = useRef<THREE.Group>();
  const shadow = useRef<THREE.Object3D>();
  const { nodes } = useGLTF('/geo.min.glb', true);

  const pathname = usePathname();
  const { camera } = useThree();

  useEffect(() => {
    if (pathname === '/contact') {
      const CONTACT_TRANSITION = { x: -3, duration: 1.5 };
      if (group.current) gsap.to(group.current.position, CONTACT_TRANSITION);
      if (shadow.current) gsap.to(shadow.current.position, CONTACT_TRANSITION);
      gsap.to(camera.position, { z: 5, duration: 1.5 });
    } else {
      const HOME_TRANSITION = { x: 0, duration: 1.5 };
      if (group.current) gsap.to(group.current.position, HOME_TRANSITION);
      if (shadow.current) gsap.to(shadow.current.position, HOME_TRANSITION);
      gsap.to(camera.position, { z: 3, duration: 1.5 });
    }
  }, [pathname]);

  useFrame(({ clock }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2;
    if (!group.current || !shadow.current) return;
    group.current.position.y = t / 3;
    shadow.current.scale.y = shadow.current.scale.z = 1 + t;
    shadow.current.scale.x = (1 + t) * 1.25;
    group.current.rotation.x = group.current.rotation.z += 0.005;
  });

  return (
    <group dispose={null}>
      <group ref={group as React.RefObject<THREE.Group>}>
        <mesh
          geometry={(nodes.geo as THREE.Mesh).geometry}
          castShadow
          receiveShadow
        >
          <MeshDistortMaterial
            color="#ffffff"
            flatShading
            roughness={1}
            metalness={0.5}
            factor={15}
            speed={5}
          />
        </mesh>
        <mesh geometry={(nodes.geo as THREE.Mesh).geometry}>
          <meshBasicMaterial wireframe />
        </mesh>
      </group>

      <Shadow
        ref={shadow as React.RefObject<ShadowType>}
        opacity={0.3}
        rotation-x={-Math.PI / 2}
        position={[0, -1.51, 0]}
      />
    </group>
  );
};

const CanvasEl = () => {
  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ fov: 55, position: [0, 0, 3] }}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Model />
      </Canvas>
    </div>
  );
};

export default CanvasEl;
