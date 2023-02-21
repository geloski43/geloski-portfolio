import React from 'react';
import { Html } from '@react-three/drei';
import { Text } from '../Text';
import Plane from '../Plane';
import { Block, useBlock } from '../../blocks';
import state from '../../store';
import { GoBrowser, GoDeviceMobile } from 'react-icons/go';
import { HStack, IconButton, VStack, useMediaQuery } from '@chakra-ui/react';
import { Context as AppContext } from '../../context/appContext';

export default function Project({
  image,
  index,
  offset,
  factor,
  header,
  aspect,
  description,
  projectPlatform,
  ...props
}) {
  const appContext = React.useContext(AppContext);
  const { showSideMenu } = appContext.state;

  const [isDesktop] = useMediaQuery('(min-width: 1000px)');
  const [isTablet] = useMediaQuery('(max-width: 820px)');
  const [isMobile] = useMediaQuery('(max-width: 400px)');

  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock();
  const size = aspect < 1 && !isMobile ? 0.65 : 1;
  const alignRight = (canvasWidth - w * size - margin) / 2;
  const pixelWidth = w * state.zoom * size;
  const left = !(index % 2);
  const color = projectPlatform === 'web' ? '#c70f46' : '#7fffd4'; // '#7fffd4', '#c70f46'

  const onClick = (url) => {
    // console.log(item[1].href);
    window.open(
      url,
      '_blank' // <- This is what makes it open in a new window.
    );
  };

  const mobilePlatform = props.platform === 'mobile';

  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, 0, 0]}>
        <Plane
          map={image}
          args={[1, 1, 32, 32]}
          shift={70}
          size={size}
          aspect={aspect}
          scale={[w * size, (w * size) / aspect, 1]}
          frustumCulled={false}
        />

        {showSideMenu ? null : (
          <>
            <Html
              style={{
                // width: pixelWidth / (!isDesktop ? 1 : 2),
                textAlign: left ? 'left' : 'right',
              }}
              position={[
                left || !isDesktop
                  ? (-w * size) / 2
                  : mobilePlatform
                  ? -3.5
                  : -5,
                isMobile
                  ? (-w * size) / 2 / aspect - 0.9
                  : (-w * size) / 2 / aspect - 0.4,
                1,
              ]}
            >
              <div
                tabIndex={index}
                style={{
                  fontSize: !isDesktop ? 20 : 24,
                  color: 'white',
                  width: pixelWidth / (!isDesktop ? 1 : 1),
                }}
              >
                {description}
              </div>
            </Html>

            <Html
              transform
              style={{
                width: pixelWidth / (mobile ? 1 : 2),
                textAlign: left ? 'left' : 'right',
                position: 'absolute',
              }}
              // position is x, y, z axis for array values
              position={
                projectPlatform === 'web'
                  ? left
                    ? [
                        isMobile ? size - 5.3 : size - 1.7,
                        isTablet ? -1.05 : -2.1,
                        1,
                      ]
                    : [
                        isMobile ? -w * size - 3.81 : -w * size + 0.5,
                        isTablet ? -1.05 : -2.1,
                        1,
                      ]
                  : // mobile apps positioning of views
                  left
                  ? [
                      isMobile ? size - 5.3 : size - 1.79,
                      isTablet ? -1.9 : -3.5,
                      1,
                    ]
                  : [
                      isMobile
                        ? -w * size - 3.3
                        : isTablet
                        ? -w * size + 0.63
                        : -w * size + 0.8,
                      isTablet ? -1.9 : -3.5,
                      1,
                    ]
              }
            >
              <VStack
                alignItems={
                  left ? (mobile ? 'center' : 'flex-start') : 'flex-end'
                }
              >
                <HStack justifyContent="space-evenly" alignItems="center">
                  <IconButton
                    pr="1"
                    h={!isDesktop ? '25px' : '25px'}
                    w={!isDesktop ? '25px' : '25px'}
                    bg={color}
                    _hover={{
                      transform: 'scale(1.3)',
                      transitionDuration: '0.3s',
                    }}
                    onClick={() => onClick(props.url.web)}
                    aria-label="Open in browser"
                    icon={
                      <GoBrowser
                        fontSize={!isDesktop ? '0.5rem' : '.8rem'}
                        color={projectPlatform === 'web' ? 'white' : 'black'}
                      />
                    }
                  />

                  {props.platform === 'mobile' ? (
                    <IconButton
                      pr="1"
                      h={!isDesktop ? '25px' : '25px'}
                      w={!isDesktop ? '25px' : '25px'}
                      bg={color}
                      _hover={{
                        transform: 'scale(1.3)',
                        transitionDuration: '0.3s',
                      }}
                      onClick={() => {
                        onClick(props.url.mobile);
                      }}
                      aria-label="Open with smartphone"
                      icon={
                        <GoDeviceMobile
                          fontSize={!isDesktop ? '0.5rem' : '0.8rem'}
                          color={projectPlatform === 'web' ? 'white' : 'black'}
                        />
                      }
                    />
                  ) : null}
                </HStack>
              </VStack>
            </Html>
          </>
        )}

        <Text
          left={left}
          right={!left}
          size={w * 0.04}
          top
          position={[
            ((left ? -w : w) * size) / 2,
            (w * size) / aspect / 2 + 0.5,
            -1,
          ]}
        >
          {header}
        </Text>
        <Block factor={0.2}>
          <Text
            opacity={0.5}
            size={w * 0.5}
            color="#1A1E2A"
            position={[
              ((left ? -w * 0.1 : -w * 0.5) / 2) * size,
              (w * size) / aspect / 1,
              -10,
            ]}
          >
            {'0' + (index + 1)}
          </Text>
        </Block>
      </group>
    </Block>
  );
}
