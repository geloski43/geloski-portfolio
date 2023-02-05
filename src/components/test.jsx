// import React from 'react';
// import { Html } from '@react-three/drei';
// import { Text } from '../Text';
// import Plane from '../Plane';
// import { Block, useBlock } from '../../blocks';
// import state from '../../store';
// import { GoBrowser, GoDeviceMobile } from 'react-icons/go';
// import { HStack, IconButton, VStack, useMediaQuery } from '@chakra-ui/react';

// export default function Project({
//   image,
//   index,
//   offset,
//   factor,
//   header,
//   aspect,
//   description,
//   projectPlatform,
//   ...props
// }) {
//   const [isDesktop] = useMediaQuery('(min-width: 1000px)');
//   const [isTablet] = useMediaQuery('(max-width: 820px)');
//   const [isMobile] = useMediaQuery('(max-width: 400px)');

//   const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock();
//   const size = aspect < 1 && !isMobile ? 0.65 : 1;
//   const alignRight = (canvasWidth - w * size - margin) / 2;
//   const pixelWidth = w * state.zoom * size;
//   const left = !(index % 2);
//   const color = projectPlatform === 'web' ? '#7fffd4' : '#c70f46'; // '#7fffd4', '#c70f46'

//   const onClick = (url) => {
//     // console.log(item[1].href);
//     window.open(
//       url,
//       '_blank' // <- This is what makes it open in a new window.
//     );
//   };

//   const mobilePlatform = props.platform === 'mobile';

//   // desktop views
//   const leftAndForWeb = React.useMemo(() => {
//     return [(-w * size) / pixelWidth - 1, -4.9, 1];
//   }, [props]);

//   const rigthAndForWeb = React.useMemo(() => {
//     return [-w * size + 1.3, -5.1, 1];
//   }, [size, w, pixelWidth]);

//   const rightAndForWebApp = React.useMemo(() => {
//     return [-w * size + pixelWidth * 0.0017, -8.1, 1];
//   }, [size, w, pixelWidth]);

//   // tablet views
//   const leftAndForTablet = [(-w * size) / pixelWidth - 0.65, -1, 1];
//   const rightAndForTablet = [-w * size + 0.5, -1.1, 1];
//   const rightAndForTabletApp = [-w * size + pixelWidth * 0.002, -1.95, 1];

//   // mobile views
//   const leftAndForMobile = [-w, -0.3, 1];
//   const rightAndForMobile = [-w * 1.9, -0.3, 1];
//   const rightAndForMobileApp = [-w * 1.79, -1.95, 1];

//   // const resetShowButton = React.useCallback(() => {
//   //   setShowButton(
//   //     Array.from(Array(!isEmpty(results) && results.length).keys()).map(
//   //       (v) => (v = { show: false })
//   //     )
//   //   );
//   // }, [results]);

//   const alignedLeftAndForWeb = React.useCallback(() => {
//     return isDesktop
//       ? leftAndForWeb
//       : isTablet
//       ? leftAndForTablet
//       : leftAndForMobile;
//   }, [size, w, pixelWidth]);

//   const alignedRightAndForWeb = React.useCallback(() => {
//     return isDesktop
//       ? rigthAndForWeb
//       : isTablet
//       ? rightAndForTablet
//       : rightAndForMobile;
//   }, [size, w, pixelWidth]);

//   const alignedRightAndForMobile = React.useCallback(() => {
//     return isDesktop
//       ? rightAndForWebApp
//       : isTablet
//       ? rightAndForTabletApp
//       : rightAndForMobileApp;
//   }, [size, w, pixelWidth]);

//   return (
//     <Block factor={factor} offset={offset}>
//       <group position={[left ? -alignRight : alignRight, 0, 0]}>
//         <Plane
//           map={image}
//           args={[1, 1, 32, 32]}
//           shift={300}
//           size={size}
//           aspect={aspect}
//           scale={[w * size, (w * size) / aspect, 1]}
//           frustumCulled={false}
//         />

//         {/* <div
//               style={{
//                 color: 'white',
//                 fontSize: isLessThan820 ? '1.8rem' : '3em',
//                 letterSpacing: 5,
//                 width: window.innerWidth * 2,
//               }}
//             > */}

//         <Html
//           transform
//           position={[0, projectPlatform === 'web' ? -6.1 : -9, 1]}
//           style={{
//             width: pixelWidth / (!isDesktop ? 1 : 2),
//             textAlign: left ? 'left' : 'right',
//           }}
//         >
//           <div
//             tabIndex={index}
//             style={{
//               fontSize: !isDesktop ? 20 : 16,
//               color: color,
//               width: pixelWidth / (!isDesktop ? 1 : 2),
//             }}
//           >
//             {description}
//           </div>
//         </Html>

//         <Html
//           transform
//           style={{
//             width: pixelWidth / (mobile ? 1 : 2),
//             textAlign: left ? 'left' : 'right',
//             position: 'absolute',
//           }}
//           // position is x, y, z axis for array values

//           position={
//             projectPlatform === 'web'
//               ? left
//                 ? [
//                     isMobile ? size - 5.3 : size - 1.7,
//                     isTablet ? -1.05 : -2.1,
//                     1,
//                   ]
//                 : [
//                     isMobile ? -w * size - 3.81 : -w * size + 0.5,
//                     isTablet ? -1.05 : -2.1,
//                     1,
//                   ]
//               : // mobile apps positioning of views
//               left
//               ? [
//                   isMobile ? size - 5.3 : size - 1.79,
//                   isTablet ? -1.05 : -4.3,
//                   1,
//                 ]
//               : [
//                   isMobile ? -w * size - 3.81 : -w * size + 0.8,
//                   isTablet ? -1.05 : -4.3,
//                   1,
//                 ]
//           }
//         >
//           <VStack
//             alignItems={left ? (mobile ? 'center' : 'flex-start') : 'flex-end'}
//           >
//             <HStack justifyContent="space-evenly" alignItems="center">
//               <IconButton
//                 h={!isDesktop ? '25px' : '25px'}
//                 w={!isDesktop ? '25px' : '25px'}
//                 bg={color}
//                 _hover={{ opacity: 0.9 }}
//                 onClick={() => onClick(props.url.web)}
//                 aria-label="Open in browser"
//                 icon={
//                   <GoBrowser
//                     fontSize={!isDesktop ? '0.5rem' : '1rem'}
//                     color="#2c5e8f"
//                   />
//                 }
//               />

//               {props.platform === 'mobile' ? (
//                 <IconButton
//                   h={!isDesktop ? '25px' : '25px'}
//                   w={!isDesktop ? '25px' : '25px'}
//                   bg={color}
//                   _hover={{ opacity: 0.9 }}
//                   onClick={() => {
//                     onClick(props.url.mobile);
//                   }}
//                   aria-label="Open with smartphone"
//                   icon={
//                     <GoDeviceMobile
//                       fontSize={!isDesktop ? '0.5rem' : '1rem'}
//                       color="#2c5e8f"
//                     />
//                   }
//                 />
//               ) : null}
//             </HStack>
//           </VStack>
//         </Html>

//         {/* <Html
//           position={[
//             left || mobile ? (-w * size) / 2 : 0,
//             (-w * size) / 2 / aspect - 0.4,
//             1,
//           ]}
//         >
//           <HStack spacing="-1px" w="100%">
//             <Icon color="#00a850" fontSize="1.7rem" as={GoBrowser} />
//             <Icon color="#00a850" fontSize="1.7rem" as={GoDeviceMobile} />
//           </HStack>
//         </Html> */}

//         <Text
//           left={left}
//           right={!left}
//           size={w * 0.04}
//           color={color}
//           top
//           position={[
//             ((left ? -w : w) * size) / 2,
//             (w * size) / aspect / 2 + 0.5,
//             -1,
//           ]}
//         >
//           {header}
//         </Text>
//         <Block factor={0.2}>
//           <Text
//             opacity={0.5}
//             size={w * 0.5}
//             color="#1A1E2A"
//             position={[
//               ((left ? w : -w) / 2) * size,
//               (w * size) / aspect / 1,
//               -10,
//             ]}
//           >
//             {'0' + (index + 1)}
//           </Text>
//         </Block>
//       </group>
//     </Block>
//   );
// }
