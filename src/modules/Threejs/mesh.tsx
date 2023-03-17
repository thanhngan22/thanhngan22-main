import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";

function MyScene() {
  const meshRef = useRef(null);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

function MeshScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MyScene />
    </Canvas>
  );
}

export default MeshScene;




// import React from 'react';
// import Typed from 'typed.js';

// import MeshScence from 'modules/Threejs';

// // create signup page same as signup page of github

// export default function SignUp() {
// 	// Create reference to store the DOM element containing the animation
// 	const el1 = React.useRef(null);

// 	React.useEffect(() => {
// 		const typed = new Typed(el1.current, {
// 			strings: ['Welcome to Suke ❤️',"Let's begin the adventure" ],
// 			typeSpeed: 50,
//             // backSpeed: 0,
// 		});

// 		return () => {
// 			// Destroy Typed instance during cleanup to stop animation
// 			typed.destroy();
// 		};
// 	}, []);

// 	return (
// 		<div className="register bg-indigo-400 min-h-screen">
// 			<span ref={el1} />
// 			<MeshScence />
// 		</div>
// 	);
// }
