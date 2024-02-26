import { Img, List, Text } from '../../components';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-start max-w-[1292px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-10 md:gap-[50px] items-center justify-between w-full">
                    <Img
                        className="h-[255px] md:h-auto object-cover rounded-lg"
                        src="images/img_rectangle5.png"
                        alt="RectangleFive"
                    />
                    <div className="flex flex-col gap-[45px] items-start justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-[16%] md:w-full">
                                <div className="bg-bluegray-900 h-[15px] my-[3px] rounded-[50%] w-[15px]"></div>
                                <Text
                                    className="text-bluegray-900 text-lg tracking-[-0.50px]"
                                    size="txtInterRegular18"
                                >
                                    Hot Topic
                                </Text>
                            </div>
                            <Text
                                className="mt-[23px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px] w-full"
                                size="txtInterBold36"
                            >
                                Miami Dolphins won the match and officially qualified for
                                the final
                            </Text>
                            <div className="flex flex-row items-center justify-start mt-[38px] w-[55%] md:w-full">
                                <Text
                                    className="text-black-900 text-lg tracking-[-0.50px]"
                                    size="txtInterSemiBold18Black900"
                                >
                                    New York, 22 Agust 2022{" "}
                                </Text>
                                <Text
                                    className="ml-1 text-lg text-white-A700_87 tracking-[-0.50px]"
                                    size="txtInterSemiBold18WhiteA70087"
                                >
                                    <span className="text-white-A700 font-inter text-left font-semibold">
                                        -{" "}
                                    </span>
                                    <span className="text-white-A700 font-inter text-left font-normal">
                                        10 minutes ago
                                    </span>
                                </Text>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[13px] items-end justify-start w-[17%] md:w-full">
                            <Text
                                className="text-bluegray-900 text-sm tracking-[-0.50px]"
                                size="txtInterRegular14Bluegray900"
                            >
                                Read More
                            </Text>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[55px] items-center justify-between w-full">
                    <List
                        className="md:flex-1 sm:flex-col flex-row gap-[55px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                        orientation="horizontal"
                    >
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between sm:ml-[0] w-full">
                            <Img
                                className="md:h-auto h-full object-cover w-[84px] rounded"
                                src="images/img_rectangle1479.png"
                                alt="Rectangle1479"
                            />
                            <div className="flex flex-col gap-[25px] items-start justify-start">
                                <Text
                                    className="text-black-900 text-lg tracking-[-0.50px] w-full"
                                    size="txtInterBold18"
                                >
                                    How to maximize investment with mutual funds
                                </Text>
                                <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                                    <Text
                                        className="text-black-900 text-xs tracking-[-0.50px]"
                                        size="txtInterSemiBold12"
                                    >
                                        Indonesia, 22 Agust 2022{" "}
                                    </Text>
                                    <Text
                                        className="text-black-900_87 text-xs tracking-[-0.50px]"
                                        size="txtInterRegular12"
                                    >
                                        - 15 minutes ago
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between sm:ml-[0] w-full">
                            <Img
                                className="md:h-auto h-full object-cover w-[84px] rounded"
                                src="images/img_rectangle1479_84X84.png"
                                alt="Rectangle1479 One"
                            />
                            <div className="flex flex-col gap-[25px] items-start justify-start">
                                <Text
                                    className="text-black-900 text-lg tracking-[-0.50px] w-full"
                                    size="txtInterBold18"
                                >
                                    john kennedy won 3rd oscar trophy at los angles
                                </Text>
                                <div className="flex flex-row items-center justify-start w-4/5 md:w-full">
                                    <Text
                                        className="text-black-900 text-xs tracking-[-0.50px]"
                                        size="txtInterSemiBold12"
                                    >
                                        Los Angles, 22 Agust 2022{" "}
                                    </Text>
                                    <Text
                                        className="ml-1 text-black-900_87 text-xs tracking-[-0.50px]"
                                        size="txtInterRegular12"
                                    >
                                        - 22 minutes ago
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </List>
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-2.5 items-center justify-between w-[31%] md:w-full">
                        <Img
                            className="md:h-auto h-[97px] object-cover w-[84px] rounded"
                            src="images/img_rectangle1479_1.png"
                            alt="Rectangle1479 Two"
                        />
                        <div className="flex flex-col gap-[25px] items-start justify-start">
                            <Text
                                className="text-black-900 text-lg tracking-[-0.50px] w-full"
                                size="txtInterBold18"
                            >
                                Miami Dolphins won the match and officially qualified for
                                the final
                            </Text>
                            <div className="flex flex-row items-center justify-start w-[77%] md:w-full">
                                <Text
                                    className="text-black-900 text-xs tracking-[-0.50px]"
                                    size="txtInterSemiBold12"
                                >
                                    New York, 22 Agust 2022{" "}
                                </Text>
                                <Text
                                    className="ml-1 text-black-900_87 text-xs tracking-[-0.50px]"
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
    )
}

export { HeroSection }