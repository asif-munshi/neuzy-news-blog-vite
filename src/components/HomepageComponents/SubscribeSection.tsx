import { useNavigate } from 'react-router-dom';
import { Button, Text } from '../../components';

const SubscribeSection = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex w-full max-w-[1290px] flex-col items-center justify-start rounded-[20px] bg-gray-900 p-[37px] drop-shadow-lg md:px-5">
      <div className="mb-[5px] flex w-[54%] flex-col items-center justify-start gap-[30px] rounded-[50px] md:w-full">
        <div className="flex w-full flex-col items-center justify-start gap-[38px]">
          <Text
            className="w-full text-center text-5xl tracking-[-0.50px] text-white-A700 md:text-[44px] sm:text-[38px]"
            size="txtInterSemiBold48"
          >
            Get the Latest Notifications and Info from Us
          </Text>
          <Text
            className="w-full text-center text-base leading-[35.00px] tracking-[-0.50px] text-white-A700_b2"
            size="txtInterRegular16"
          >
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled.
            </>
          </Text>
        </div>
        <Button
          className="min-w-[196px] cursor-pointer rounded-[26px] border border-solid border-bluegray-900 text-center text-lg font-semibold leading-[normal] tracking-[-0.50px] !text-bluegray-900 drop-shadow-lg"
          color="white_A700"
          size="xl"
          onClick={() => navigate('/subscribe')}
        >
          Subscribe Now
        </Button>
      </div>
    </div>
  );
};

export { SubscribeSection };
