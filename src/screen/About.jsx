import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from '@chakra-ui/react';
import FooterLinks from '../components/FooterLinks';
import { Context as AppContext } from '../context/appContext';
import Typography from '../components/about/Typography';
import Lens from '../components/about/Lens';

export default function About() {
  const [isMoreThan1200] = useMediaQuery('(min-width: 1200px)');

  const appContext = React.useContext(AppContext);
  const { showSideMenu } = appContext.state;

  return (
    <>
      <Canvas
        style={{
          cursor: `url(
            'https://res.cloudinary.com/geloski43/image/upload/b_rgb:454545,c_scale,co_rgb:ffffff,e_bgremoval,h_45,r_30,w_45/v1622636112/vr8mhfbrgpnsq0ns4bk8.jpg'
          ),
          auto`,
        }}
        camera={{
          position: [0, 0, 20],
          fov: isMoreThan1200 ? 55 : 115,
        }}
      >
        {showSideMenu ? null : (
          <Lens>
            <Typography />
          </Lens>
        )}
      </Canvas>
      <div style={{ position: 'absolute' }} className="footer">
        <FooterLinks />
      </div>
    </>
  );
}
