import Lottie, { Options } from "react-lottie";

interface LottieAnimationProps {
  animationData: object;
  loop: boolean;
  autoplay: boolean;
  height: number;
  width: number;
}

const LottieAnimation = ({
  animationData,
  autoplay,
  loop,
  height,
  width,
}: LottieAnimationProps) => {
  const defaultOptions: Options = {
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieAnimation;
