import { useNavigate } from 'react-router-dom';
import { Button, Img, List, Text } from '../../components';

const LatestSection = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1292px] mx-auto md: px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                <Text
                    className="mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                >
                    Latest Release
                </Text>
                <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] sm:mt-0 mt-[5px] text-center text-sm tracking-[-0.50px]"
                    onClick={() => navigate("/allblog")}
                    shape="round"
                    color="bluegray_900"
                    size="lg"
                >
                    View All
                </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[43%] md:w-full">
                    <div
                        className="bg-cover bg-no-repeat flex flex-col h-[270px] items-center justify-start w-full rounded-xl"
                        style={{ backgroundImage: "url('images/img_group38.png')", height: "100%" }}
                    >
                        <div className="bg-gradient flex flex-col md:gap-10 gap-[189px] justify-end p-[15px] w-full rounded-xl">
                            <Button
                                className="cursor-pointer font-bold leading-[normal] min-w-[88px] md:ml-[0] ml-[423px] mr-[9px] mt-[9px] text-center text-xs tracking-[0.12px]"
                                shape="square"
                                color="deep_orange_A400"
                                size="xs"
                            >
                                Hot Topic
                            </Button>
                            <Text
                                className="ml-2 md:ml-[0] mr-[376px] text-sm text-white-A700 tracking-[-0.50px]"
                                size="txtInterRegular14"
                            >
                                Ukraine, 24 april 2022
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start mt-[27px] w-full">
                        <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                            size="txtInterSemiBold24"
                        >
                            Zelensky accuses Russia of worst crimes since WW2{" "}
                        </Text>
                        <Text
                            className="leading-[35.00px] text-black-900_87 text-sm tracking-[-0.50px] w-full"
                            size="txtInterRegular14Black90087"
                        >
                            The Ukrainian leader says Russia must face an international
                            trial as he calls for the country to be thrown off the UN
                            Security Council.
                        </Text>
                    </div>
                    <Button
                        className="common-pointer cursor-pointer flex items-center justify-center min-w-[177px] mt-[23px] h-11"
                        onClick={() => navigate("/sigleblog")}
                        rightIcon={
                            <Img
                                className="ml-1 h-[18px] w-[18px]"
                                src="images/img_upload.svg"
                                alt="upload"
                            />
                        }
                        shape="round"
                    >
                        <div className="leading-[normal] text-left text-lg tracking-[-0.50px]">
                            Read More
                        </div>
                    </Button>
                </div>
                <List
                    className="flex flex-col justify-between w-[54%] h-full gap-20"
                    orientation="vertical"
                >
                    <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                        <Img
                            className="h-[229px] md:h-auto object-cover rounded-lg"
                            src="images/img_unsplashj5keq1.png"
                            alt="unsplashj5kEQOne"
                        />
                        <div className="flex flex-col gap-5 items-start justify-start rounded-lg">
                            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                                <Text
                                    className="text-black-900 text-sm tracking-[-0.50px]"
                                    size="txtInterRegular14Black900"
                                >
                                    New York, 19 april 2022
                                </Text>
                                <div className="flex flex-col font-poppins gap-2.5 items-center justify-start w-full">
                                    <Text
                                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                                        size="txtPoppinsSemiBold20"
                                    >
                                        Jhon Lorni has won 1st place in international match
                                    </Text>
                                    <Text
                                        className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                                        size="txtPoppinsRegular12"
                                    >
                                        this is his first victory in the international
                                        olympics, so his name is quite explosive on the
                                        international scene
                                    </Text>
                                </div>
                            </div>
                            <Button
                                className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                                onClick={() => navigate("/sigleblog")}
                                rightIcon={
                                    <Img
                                        className="ml-1 h-[18px] w-[18px]"
                                        src="images/img_upload.svg"
                                        alt="upload"
                                    />
                                }
                                shape="round"
                            >
                                <div className="leading-[normal] text-left text-sm tracking-[-0.50px]">
                                    Read More
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                        <Img
                            className="h-[229px] md:h-auto object-cover rounded-lg"
                            src="images/img_unsplashl2p8f.png"
                            alt="unsplashL2p8f"
                        />
                        <div className="flex flex-col gap-5 items-start justify-start rounded-lg">
                            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                                <Text
                                    className="text-black-900 text-sm tracking-[-0.50px]"
                                    size="txtInterRegular14Black900"
                                >
                                    Amsterdam, 23 april 2022
                                </Text>
                                <div className="flex flex-col font-poppins gap-2.5 items-center justify-start w-full">
                                    <Text
                                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                                        size="txtPoppinsSemiBold20"
                                    >
                                        The extinction of the Arabian turtle made the
                                        government ...
                                    </Text>
                                    <Text
                                        className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                                        size="txtPoppinsRegular12"
                                    >
                                        The jalabiya turtle is a very unique species because
                                        it is thought to have existed from ancient times, but
                                        has begun to become ..
                                    </Text>

                                </div>
                            </div>
                            <Button
                                className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                                onClick={() => navigate("/sigleblog")}
                                rightIcon={
                                    <Img
                                        className="ml-1 h-[18px] w-[18px]"
                                        src="images/img_upload.svg"
                                        alt="upload"
                                    />
                                }
                                shape="round"
                            >
                                <div className="leading-[normal] text-left text-sm tracking-[-0.50px]">
                                    Read More
                                </div>
                            </Button>
                        </div>
                    </div>
                </List >
            </div >
        </div >
    )
}

export { LatestSection }