import { useNavigate } from 'react-router-dom';

import { Img, Line, Text } from '../../components';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="flex w-full items-center justify-center md:px-5">
            <div className="flex w-full flex-row items-center justify-center bg-bluegray-900 p-[26px] sm:px-5">
                <div className="flex max-w-[1296px] ml-12 flex-row items-center justify-center md:flex-col md:gap-5">
                    <Text
                        className="text-4xl tracking-[-0.50px] text-white-A700 md:text-[34px] sm:text-[32px]"
                        size="txtInterSemiBold36"
                    >
                        Neuzy
                    </Text>
                    <div className="ml-[173px] flex w-[47%] flex-row items-center justify-center gap-6 md:ml-[0] md:w-full md:flex-col">
                        <Text
                            className="text-lg tracking-[-0.50px] text-white-A700"
                            size="txtInterSemiBold18"
                        >
                            Sport
                        </Text>
                        <Text
                            className="text-lg tracking-[-0.50px] text-white-A700"
                            size="txtInterSemiBold18"
                        >
                            Health
                        </Text>
                        <Text
                            className="text-lg tracking-[-0.50px] text-white-A700"
                            size="txtInterSemiBold18"
                        >
                            Political
                        </Text>
                        <Text
                            className="text-lg tracking-[-0.50px] text-white-A700"
                            size="txtInterSemiBold18"
                        >
                            Business
                        </Text>
                        <Text
                            className="text-lg tracking-[-0.50px] text-white-A700"
                            size="txtInterSemiBold18"
                        >
                            Finance
                        </Text>
                        <Text
                            className="text-lg tracking-[-0.50px] text-white-A700"
                            size="txtInterSemiBold18"
                        >
                            Life
                        </Text>
                        <Text
                            className="text-lg tracking-[-0.50px] text-white-A700"
                            size="txtInterSemiBold18"
                        >
                            Entertainment
                        </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full">
                        <Img
                            className="common-pointer h-6 w-6"
                            src="images/img_search.svg"
                            alt="search"
                            onClick={() => navigate("/search")}
                        />
                        <Line className="bg-white-A700 h-[26px] w-px" />
                        <div className="flex flex-row gap-5 items-center justify-between w-[56%]">
                            <Text
                                className="common-pointer text-sm text-white-A700 tracking-[-0.50px]"
                                size="txtInterRegular14"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </Text>
                            <Text
                                className="common-pointer text-sm text-white-A700 tracking-[-0.50px]"
                                size="txtInterRegular14"
                                onClick={() => navigate("/register")}
                            >
                                Register
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header }