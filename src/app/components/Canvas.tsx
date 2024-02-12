'use client';

import {
  MeshDistortMaterial,
  Shadow,
  ShadowType,
  useGLTF
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import * as THREE from 'three';
import { usePathname } from 'next/navigation';

const Model = forwardRef((props, ref) => {
  const group = useRef<THREE.Group>();
  const shadow = useRef<THREE.Object3D>();
  const { nodes } = useGLTF('/geo.min.glb', true);

  const pathname = usePathname();
  const { camera } = useThree();

  useEffect(() => {
    if (pathname === '/contact') {
      if (group.current) {
        gsap.to(group.current.position, {
          x: -3,
          duration: 1.5
        });
      }

      if (shadow.current) {
        gsap.to(shadow.current.position, {
          x: -3,
          duration: 1.5
        });
      }

      gsap.to(camera.position, {
        z: 5,
        duration: 1.5
      });
    }
  }, [pathname]);

  useImperativeHandle(
    ref,
    () => ({
      getGroup: () => group.current
    }),
    []
  );

  useFrame(({ clock }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2;
    if (!group.current || !shadow.current) return;
    (group.current as THREE.Group).position.y = t / 3;
    (shadow.current as THREE.Object3D).scale.y = (
      shadow.current as THREE.Object3D
    ).scale.z = 1 + t; // Fix the problem by adding type assertion
    (shadow.current as THREE.Object3D).scale.x = (1 + t) * 1.25; // Fix the problem by adding type assertion
    group.current.rotation.x = group.current.rotation.z += 0.005;
  });

  return (
    <group {...props} dispose={null}>
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
});
Model.displayName = 'Model_3D';

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
