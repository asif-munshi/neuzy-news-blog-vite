import { useNavigate } from 'react-router-dom';
import { Button, Img, Line, List, Text } from '../../components';

const TopicsSection = () => {
  const navigate = useNavigate();

  return (
    <List
      className="mx-auto flex w-full max-w-[1294px] flex-col items-center gap-[120px] md:px-5"
      orientation="vertical"
    >
      <div className="flex w-full flex-1 flex-col items-center justify-start gap-[49px]">
        <div className="rounded-1g flex w-full flex-col items-center justify-start gap-7">
          <div className="rounded-1g flex w-full flex-row items-start justify-between md:gap-10">
            <Text
              className="mb-0.5 text-4xl tracking-[-0.50px] text-black-900 md:text-[34px] sm:text-[32px]"
              size="txtInterSemiBold36Black900"
            >
              Entertaiment{' '}
            </Text>
            <Button
              className="common-pointer mt-[5px] min-w-[122px] cursor-pointer text-center text-sm font-semibold leading-[normal] tracking-[-0.50px]"
              onClick={() => navigate('/allblog')}
              shape="round"
              color="bluegray_900"
              size="lg"
            >
              View All
            </Button>
          </div>
          <Line className="h-px w-full bg-black-900_7f" />
        </div>
        <div className="grid w-full grid-cols-3 items-start justify-between gap-5 pb-[33px] md:grid-cols-2 sm:grid-cols-1">
          <div className="flex w-full flex-1 flex-col items-center justify-start">
            <div className="flex w-full flex-col items-start justify-start gap-[22px]">
              <div
                className="flex h-[246px] w-full flex-col items-center justify-end rounded-xl bg-cover bg-no-repeat drop-shadow-lg"
                style={{
                  backgroundImage: "url('images/img_group38_246X418.png')"
                }}
              >
                <div className="flex w-full flex-col justify-end gap-[162px] rounded-b-xl bg-gradient p-[17px] md:gap-10">
                  <Text
                    className="mr-[267px] text-xs tracking-[-0.50px] text-white-A700"
                    size="txtInterRegular12WhiteA700"
                  >
                    Ukraine, 24 april 2022
                  </Text>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start">
                <Text
                  className="w-full text-lg tracking-[-0.50px] text-black-900"
                  size="txtInterSemiBold18Black900"
                >
                  Zelensky accuses Russia of worst crimes since WW2{' '}
                </Text>
                <Text
                  className="w-full text-xs leading-[25.00px] tracking-[-0.50px] text-black-900_87"
                  size="txtPoppinsRegular12"
                >
                  The Ukrainian leader says Russia must face an international
                  trial as he calls for the country to be thrown off the UN
                  Security Council.
                </Text>
              </div>
              <Button
                className="common-pointer ml-[11px] flex min-w-[153px] cursor-pointer items-center justify-center md:ml-[0]"
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
          <div className="flex w-full flex-1 flex-col items-center justify-start">
            <div className="flex w-full flex-col items-start justify-start gap-[22px]">
              <div
                className="flex h-[246px] w-full flex-col items-center justify-end rounded-xl bg-cover bg-no-repeat drop-shadow-lg"
                style={{
                  backgroundImage: "url('images/img_group38_1.png')"
                }}
              >
                <div className="flex w-full flex-col justify-end gap-[162px] rounded-b-xl bg-gradient p-[17px] md:gap-10">
                  <Text
                    className="mr-[267px] text-xs tracking-[-0.50px] text-white-A700"
                    size="txtInterRegular12WhiteA700"
                  >
                    Ukraine, 24 april 2022
                  </Text>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start">
                <Text
                  className="w-full text-lg tracking-[-0.50px] text-black-900"
                  size="txtInterSemiBold18Black900"
                >
                  Zelensky accuses Russia of worst crimes since WW2{' '}
                </Text>
                <Text
                  className="w-full text-xs leading-[25.00px] tracking-[-0.50px] text-black-900_87"
                  size="txtPoppinsRegular12"
                >
                  The Ukrainian leader says Russia must face an international
                  trial as he calls for the country to be thrown off the UN
                  Security Council.
                </Text>
              </div>
              <Button
                className="common-pointer ml-[11px] flex min-w-[153px] cursor-pointer items-center justify-center md:ml-[0]"
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
        </div>
      </div>
    </List>
  );
};

export { TopicsSection };
