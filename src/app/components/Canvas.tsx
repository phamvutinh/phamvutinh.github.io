'use client';

import { MeshDistortMaterial, Shadow, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Model(props: any) {
  const group = useRef();
  const shadow = useRef();
  const { nodes } = useGLTF('/geo.min.glb', true);
  useFrame(({ clock }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2;
    if (!group.current || !shadow.current) return;
    group.current.position.y = t / 3;
    shadow.current.scale.y = shadow.current.scale.z = 1 + t;
    shadow.current.scale.x = (1 + t) * 1.25;
    group.current.rotation.x = group.current.rotation.z += 0.005;
  });

  return (
    <group {...props} dispose={null}>
      <group ref={group}>
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
        ref={shadow}
        opacity={0.3}
        rotation-x={-Math.PI / 2}
        position={[0, -1.51, 0]}
      />
    </group>
  );
}

const CanvasEl = () => {
  return (
    <div className="w-full h-screen">
      <Canvas>
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
