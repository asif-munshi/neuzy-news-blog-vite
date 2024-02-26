import { Button, Img, List, PagerIndicator, Text } from '../../components';

const MainSection = () => {
  return (
    <div className="sm: flex w-full flex-col items-center justify-start bg-black-900 p-[50px] px-5 md:px-10">
      <div className="mx-auto flex w-full max-w-[1291px] flex-col items-center justify-start">
        <div className="flex w-full flex-row items-center justify-between md:flex-col md:gap-[50px]">
          <div className="flex w-[62%] flex-col items-center justify-start md:w-full md:flex-1">
            <div
              className="flex h-[600px] w-full flex-col items-center justify-start rounded-xl bg-cover bg-no-repeat"
              style={{
                backgroundImage: "url('images/img_background.png')"
              }}
            >
              <div className="flex h-full w-full flex-col items-center justify-end gap-[55px] bg-gradient2 p-[45px] md:px-10 sm:px-5">
                <div className="mt-[225px] flex w-[51%] flex-col items-center justify-start gap-[50px] md:w-full">
                  <div className="flex w-full flex-col items-center justify-start gap-[13px]">
                    <div className="flex w-[43%] flex-row items-start justify-center gap-2.5 md:w-full">
                      <div className="mt-[3px] h-[15px] w-[15px] rounded-[50%] bg-bluegray-900"></div>
                      <Text
                        className="text-sm tracking-[-0.50px] text-white-A700"
                        size="txtInterRegular14"
                      >
                        Entertainment Topic
                      </Text>
                    </div>
                    <Text
                      className="w-full text-center text-4xl tracking-[-0.50px] text-white-A700 md:text-[34px] sm:text-[32px]"
                      size="txtInterSemiBold36"
                    >
                      Best Place for Vacation in Sydney
                    </Text>
                  </div>
                  <Button
                    className="min-w-[154px] cursor-pointer text-center text-lg font-semibold leading-[normal] tracking-[-0.50px]"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="outline"
                  >
                    Read Now
                  </Button>
                </div>
                <PagerIndicator
                  className="flex h-[15px] w-[115px] justify-center"
                  count={5}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700 w-[15px]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700_4f w-[15px]"
                  selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                  unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                />
              </div>
            </div>
          </div>
          <List
            className="flex w-[35%] flex-col gap-[45px]"
            orientation="vertical"
          >
            <div className="my-0 flex w-full flex-row items-center justify-between gap-6 sm:flex-col">
              <Img
                className="h-[84px] rounded object-cover md:h-auto"
                src="images/img_rectangle1479_84X121.png"
                alt="Rectangle1479 Three"
              />
              <div className="flex flex-col items-start justify-start gap-[25px]">
                <Text
                  className="text-1g w-full tracking-[-0.50px] text-white-A700"
                  size="txtInterBold18WhiteA700"
                >
                  How to maximize investment with mutual funds
                </Text>
                <div className="flex w-[78%] flex-row items-center justify-start gap-[7px] md:w-full">
                  <Text
                    className="text-xs tracking-[-0.50px] text-white-A700"
                    size="txtInterSemiBold12WhiteA700"
                  >
                    Sydney, 22 Agust 2022{' '}
                  </Text>
                  <Text
                    className="text-xs tracking-[-0.50px] text-white-A700_87"
                    size="txtInterRegular12WhiteA70087"
                  >
                    - 15 minutes ago
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </div>
  );
};

export { MainSection };
