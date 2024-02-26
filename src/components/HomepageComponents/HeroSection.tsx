import { Img, List, Text } from '../../components';

const HeroSection = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1292px] flex-col items-center justify-start md:px-5">
      <div className="flex w-full flex-col items-center justify-start gap-[50px]">
        <div className="flex w-full flex-row items-center justify-between gap-10 md:flex-col md:gap-[50px]">
          <Img
            className="h-[255px] rounded-lg object-cover drop-shadow-lg md:h-auto"
            src="images/img_rectangle5.png"
            alt="RectangleFive"
          />
          <div className="flex flex-col items-start justify-start gap-[45px]">
            <div className="flex w-full flex-col items-start justify-start">
              <div className="flex w-[16%] flex-row items-center justify-start gap-2.5 md:w-full">
                <div className="my-[3px] h-[15px] w-[15px] rounded-[50%] bg-bluegray-900"></div>
                <Text
                  className="text-lg tracking-[-0.50px] text-bluegray-900"
                  size="txtInterRegular18"
                >
                  Hot Topic
                </Text>
              </div>
              <Text
                className="mt-[23px] w-full text-4xl tracking-[-0.50px] text-black-900 md:text-[34px] sm:text-[32px]"
                size="txtInterBold36"
              >
                Miami Dolphins won the match and officially qualified for the
                final
              </Text>
              <div className="mt-[38px] flex w-[55%] flex-row items-center justify-start md:w-full">
                <Text
                  className="text-lg tracking-[-0.50px] text-black-900"
                  size="txtInterSemiBold18Black900"
                >
                  New York, 22 Agust 2022{' '}
                </Text>
                <Text
                  className="ml-1 text-lg tracking-[-0.50px] text-white-A700_87"
                  size="txtInterSemiBold18WhiteA70087"
                >
                  <span className="text-left font-inter font-semibold text-white-A700">
                    -{' '}
                  </span>
                  <span className="text-left font-inter font-normal text-white-A700">
                    10 minutes ago
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex w-[17%] flex-row items-end justify-start gap-[13px] md:w-full">
              <Text
                className="text-sm tracking-[-0.50px] text-bluegray-900"
                size="txtInterRegular14Bluegray900"
              >
                Read More
              </Text>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-between md:flex-col md:gap-[55px]">
          <List
            className="grid w-[66%] grid-cols-2 flex-row gap-[55px] md:w-full md:flex-1 md:grid-cols-1 sm:flex-col"
            orientation="horizontal"
          >
            <div className="flex w-full flex-row items-center justify-between gap-2.5 sm:ml-[0] sm:flex-col">
              <Img
                className="h-full w-[84px] rounded object-cover drop-shadow-lg md:h-auto"
                src="images/img_rectangle1479.png"
                alt="Rectangle1479"
              />
              <div className="flex flex-col items-start justify-start gap-[25px]">
                <Text
                  className="w-full text-lg tracking-[-0.50px] text-black-900"
                  size="txtInterBold18"
                >
                  How to maximize investment with mutual funds
                </Text>
                <div className="flex w-[78%] flex-row items-center justify-start gap-[7px] md:w-full">
                  <Text
                    className="text-xs tracking-[-0.50px] text-black-900"
                    size="txtInterSemiBold12"
                  >
                    Indonesia, 22 Agust 2022{' '}
                  </Text>
                  <Text
                    className="text-xs tracking-[-0.50px] text-black-900_87"
                    size="txtInterRegular12"
                  >
                    - 15 minutes ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-between gap-2.5 sm:ml-[0] sm:flex-col">
              <Img
                className="h-full w-[84px] rounded object-cover drop-shadow-lg md:h-auto"
                src="images/img_rectangle1479_84X84.png"
                alt="Rectangle1479 One"
              />
              <div className="flex flex-col items-start justify-start gap-[25px]">
                <Text
                  className="w-full text-lg tracking-[-0.50px] text-black-900"
                  size="txtInterBold18"
                >
                  john kennedy won 3rd oscar trophy at los angles
                </Text>
                <div className="flex w-4/5 flex-row items-center justify-start md:w-full">
                  <Text
                    className="text-xs tracking-[-0.50px] text-black-900"
                    size="txtInterSemiBold12"
                  >
                    Los Angles, 22 Agust 2022{' '}
                  </Text>
                  <Text
                    className="ml-1 text-xs tracking-[-0.50px] text-black-900_87"
                    size="txtInterRegular12"
                  >
                    - 22 minutes ago
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <div className="flex w-[31%] flex-row items-center justify-between gap-2.5 md:w-full md:flex-1 sm:flex-col">
            <Img
              className="h-[97px] w-[84px] rounded object-cover drop-shadow-lg md:h-auto"
              src="images/img_rectangle1479_1.png"
              alt="Rectangle1479 Two"
            />
            <div className="flex flex-col items-start justify-start gap-[25px]">
              <Text
                className="w-full text-lg tracking-[-0.50px] text-black-900"
                size="txtInterBold18"
              >
                Miami Dolphins won the match and officially qualified for the
                final
              </Text>
              <div className="flex w-[77%] flex-row items-center justify-start md:w-full">
                <Text
                  className="text-xs tracking-[-0.50px] text-black-900"
                  size="txtInterSemiBold12"
                >
                  New York, 22 Agust 2022{' '}
                </Text>
                <Text
                  className="ml-1 text-xs tracking-[-0.50px] text-black-900_87"
                  size="txtInterRegular12"
                >
                  - 10 minutes ago
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
