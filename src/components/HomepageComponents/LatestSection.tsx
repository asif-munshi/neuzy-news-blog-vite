import { useNavigate } from 'react-router-dom';
import { Button, Img, List, Text } from '../../components';

const LatestSection = () => {
  const navigate = useNavigate();

  return (
    <div className="md: mx-auto flex w-full max-w-[1292px] flex-col items-center justify-start gap-[50px] px-5">
      <div className="flex w-full flex-row items-start justify-between rounded-lg md:gap-10 sm:flex-col">
        <Text
          className="mb-0.5 text-4xl tracking-[-0.50px] text-black-900 md:text-[34px] sm:text-[32px]"
          size="txtInterSemiBold36Black900"
        >
          Latest Release
        </Text>
        <Button
          className="common-pointer mt-[5px] min-w-[122px] cursor-pointer text-center text-sm font-semibold leading-[normal] tracking-[-0.50px] sm:mt-0"
          onClick={() => navigate('/allblog')}
          shape="round"
          color="bluegray_900"
          size="lg"
        >
          View All
        </Button>
      </div>
      <div className="flex w-full flex-row items-center justify-between md:flex-col md:gap-[50px]">
        <div className="flex w-[43%] flex-col items-start justify-start md:w-full md:flex-1">
          <div
            className="flex h-[270px] w-full flex-col items-center justify-start rounded-xl bg-cover bg-no-repeat drop-shadow-lg md:h-[420px]"
            style={{
              backgroundImage: "url('images/img_group38.png')"
            }}
          >
            <div className="flex w-full flex-col justify-end gap-[189px] rounded-xl bg-gradient p-[15px] md:h-full md:justify-between md:gap-10">
              <Button
                className="ml-auto mr-[9px] mt-[9px] min-w-[88px] cursor-pointer text-center text-xs font-bold leading-[normal] tracking-[0.12px]"
                shape="square"
                color="deep_orange_A400"
                size="xs"
              >
                Hot Topic
              </Button>
              <Text
                className="ml-2 mr-auto text-sm tracking-[-0.50px] text-white-A700 md:ml-[0]"
                size="txtInterRegular14"
              >
                Ukraine, 24 april 2022
              </Text>
            </div>
          </div>
          <div className="mt-[27px] flex w-full flex-col items-center justify-start gap-4">
            <Text
              className="w-full text-2xl tracking-[-0.50px] text-black-900 md:text-[22px] sm:text-xl"
              size="txtInterSemiBold24"
            >
              Zelensky accuses Russia of worst crimes since WW2{' '}
            </Text>
            <Text
              className="w-full text-sm leading-[35.00px] tracking-[-0.50px] text-black-900_87"
              size="txtInterRegular14Black90087"
            >
              The Ukrainian leader says Russia must face an international trial
              as he calls for the country to be thrown off the UN Security
              Council.
            </Text>
          </div>
          <Button
            className="common-pointer mt-[23px] flex h-11 min-w-[177px] cursor-pointer items-center justify-center"
            onClick={() => navigate('/sigleblog')}
            rightIcon={
              <Img
                className="ml-1 h-[18px] w-[18px]"
                src="images/img_upload.svg"
                alt="upload"
              />
            }
            shape="round"
          >
            <div className="text-left text-lg leading-[normal] tracking-[-0.50px]">
              Read More
            </div>
          </Button>
        </div>
        <List
          className="flex h-full w-[54%] flex-col justify-between gap-20 md:w-full"
          orientation="vertical"
        >
          <div className="my-0 flex w-full flex-row items-center justify-between gap-[22px] md:flex-col">
            <Img
              className="h-[229px] rounded-lg object-cover drop-shadow-lg md:h-auto"
              src="images/img_unsplashj5keq1.png"
              alt="unsplashj5kEQOne"
            />
            <div className="flex flex-col items-start justify-start gap-5 rounded-lg">
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <Text
                  className="text-sm tracking-[-0.50px] text-black-900"
                  size="txtInterRegular14Black900"
                >
                  New York, 19 april 2022
                </Text>
                <div className="flex w-full flex-col items-center justify-start gap-2.5 font-poppins">
                  <Text
                    className="w-full text-xl tracking-[-0.50px] text-black-900"
                    size="txtPoppinsSemiBold20"
                  >
                    Jhon Lorni has won 1st place in international match
                  </Text>
                  <Text
                    className="w-full text-xs leading-[25.00px] tracking-[-0.50px] text-black-900_87"
                    size="txtPoppinsRegular12"
                  >
                    this is his first victory in the international olympics, so
                    his name is quite explosive on the international scene
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer flex min-w-[153px] cursor-pointer items-center justify-center"
                onClick={() => navigate('/sigleblog')}
                rightIcon={
                  <Img
                    className="ml-1 h-[18px] w-[18px]"
                    src="images/img_upload.svg"
                    alt="upload"
                  />
                }
                shape="round"
              >
                <div className="text-left text-sm leading-[normal] tracking-[-0.50px]">
                  Read More
                </div>
              </Button>
            </div>
          </div>
          <div className="my-0 flex w-full flex-row items-center justify-between gap-[22px] md:flex-col">
            <Img
              className="h-[229px] rounded-lg object-cover drop-shadow-lg md:h-auto"
              src="images/img_unsplashl2p8f.png"
              alt="unsplashL2p8f"
            />
            <div className="flex flex-col items-start justify-start gap-5 rounded-lg">
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <Text
                  className="text-sm tracking-[-0.50px] text-black-900"
                  size="txtInterRegular14Black900"
                >
                  Amsterdam, 23 april 2022
                </Text>
                <div className="flex w-full flex-col items-center justify-start gap-2.5 font-poppins">
                  <Text
                    className="w-full text-xl tracking-[-0.50px] text-black-900"
                    size="txtPoppinsSemiBold20"
                  >
                    The extinction of the Arabian turtle made the government ...
                  </Text>
                  <Text
                    className="w-full text-xs leading-[25.00px] tracking-[-0.50px] text-black-900_87"
                    size="txtPoppinsRegular12"
                  >
                    The jalabiya turtle is a very unique species because it is
                    thought to have existed from ancient times, but has begun to
                    become ..
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer flex min-w-[153px] cursor-pointer items-center justify-center"
                onClick={() => navigate('/sigleblog')}
                rightIcon={
                  <Img
                    className="ml-1 h-[18px] w-[18px]"
                    src="images/img_upload.svg"
                    alt="upload"
                  />
                }
                shape="round"
              >
                <div className="text-left text-sm leading-[normal] tracking-[-0.50px]">
                  Read More
                </div>
              </Button>
            </div>
          </div>
        </List>
      </div>
    </div>
  );
};

export { LatestSection };
