import React, { useRef,useEffect  } from 'react';
import { Animated,Text, View ,SafeAreaView,ScrollView, Image,TouchableOpacity,TextInput } from 'react-native';
import Svg, { Rect, G, Path } from "react-native-svg";
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
    const StyledView = styled(View)
    const navigation = useNavigation();
	const handleSearchPress = () => {
		navigation.navigate('Home');
	};
    return (
        <SafeAreaView className="bg-white">
            <ScrollView className="h-full overflow-hidden relative" showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]}>
                <StyledView className="category flex flex-row justify-between px-2">
                    <Text className="text-2xl text-slate-800 p-2 font-bold">Search</Text>
                    <StyledView className="p-3 pt-4 flex flex-row gap-5">
                    <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#1e293b" viewBox="0 0 16 16" >
                        <Path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                        <Path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </Svg>
                    </StyledView>
                </StyledView>
                <StyledView className="flex flex-col p-1 pb-2 sticky top-0 bg-white w-full z-30">
                    <StyledView className='relative'>
                        <Svg className="absolute top-2 left-5 opacity-50" xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#1e293b" viewBox="0 0 16 16" >
                            <Path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </Svg>
                        <StyledView className="flex flex-row  h-8 w-fit mx-3 pl-8 border-2 border-slate-200 rounded-full ">
                            <TextInput  placeholder="What do you want to listen to?"/>
                        </StyledView>
                    </StyledView>
                    <ScrollView className="overflow-x-scroll mx-1 flex flex-row px-1 pt-2 sticky top-0 bg-white w-full z-30" horizontal={true} showsHorizontalScrollIndicator={false}>
                        <StyledView className="flex-none rounded-full mx-1 px-4 py-1 bg-slate-800 text-white shadow-xl"><Text className="text-white">Top</Text></StyledView>
                        <StyledView className="flex-none rounded-full mx-1 px-4 py-1 bg-slate-800 text-white shadow-xl"><Text className="text-white">Songs</Text></StyledView>
                        <StyledView className="flex-none rounded-full mx-1 px-4 py-1 bg-slate-800 text-white shadow-xl"><Text className="text-white">Albums</Text></StyledView>
                        <StyledView className="flex-none rounded-full mx-1 px-4 py-1 bg-slate-800 text-white shadow-xl"><Text className="text-white">Playlists</Text></StyledView>
                        <StyledView className="flex-none rounded-full mx-1 px-4 py-1 bg-slate-800 text-white shadow-xl"><Text className="text-white">Artist</Text></StyledView>
                        <StyledView className="flex-none rounded-full mx-1 px-4 py-1 bg-slate-800 text-white shadow-xl"><Text className="text-white">Podcasts & Shows</Text></StyledView>
                        <StyledView className="flex-none rounded-full mx-1 px-4 py-1 bg-slate-800 text-white shadow-xl"><Text className="text-white">Profiles</Text></StyledView>
                    </ScrollView>
                </StyledView>
                <StyledView className="mb-16">
                    <Text className="text-2xl text-slate-800 p-3 font-bold">Browse All</Text>
                    <StyledView className="flex flex-col gap-4 p-3">
                        <StyledView className="relative h-32 bg-red-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://wrapped-images.spotifycdn.com/image/browse-card/wrapped-temp-card.jpg"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">2022 Wrapped</Text>
                        </StyledView>
                        <StyledView className="relative h-32 bg-blue-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">Podcasts</Text>
                        </StyledView>
                        <StyledView className="relative h-32 bg-orange-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">New Releases</Text>
                        </StyledView>
                        <StyledView className="relative h-32 bg-green-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://i.scdn.co/image/ab67fb8200005cafd6daeecb3d85e27295be6557"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">Hindi</Text>
                        </StyledView>
                        <StyledView className="relative h-32 bg-sky-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">Made For You</Text>
                        </StyledView>
                        <StyledView className="relative h-32 bg-yellow-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://i.scdn.co/image/ab67706f00000002461fda205f5f952eff8bae70"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">Punjabi</Text>
                        </StyledView>
                        <StyledView className="relative h-32 bg-red-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://wrapped-images.spotifycdn.com/image/browse-card/wrapped-temp-card.jpg"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">2022 Wrapped</Text>
                        </StyledView>
                        <StyledView className="relative h-32 bg-blue-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">Podcasts</Text>
                        </StyledView>
                        <StyledView className="relative h-32 bg-orange-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">New Releases</Text>
                        </StyledView>
                        <StyledView className="relative h-32 bg-green-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://i.scdn.co/image/ab67fb8200005cafd6daeecb3d85e27295be6557"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">Hindi</Text>
                        </StyledView>
                        <StyledView className="relative h-32 bg-sky-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">Made For You</Text>
                        </StyledView>
                        <StyledView className="relative h-32 bg-yellow-600 overflow-hidden rounded-xl p-3">
                            <Image className="absolute bottom-0 right-0 h-32 w-32 rounded-xl rotate-45 scale-125 translate-x-3 z-10" source={{uri:"https://i.scdn.co/image/ab67706f00000002461fda205f5f952eff8bae70"}}/>
                            <Text className="text-white text-xl font-bold w-2/3">Punjabi</Text>
                        </StyledView>
                    </StyledView>
                </StyledView>
            </ScrollView>
            {/* Bottom Navbar */}
			<StyledView className="flex flex-row w-full justify-between absolute bottom-0 left-0 bg-white z-40 ">
                <TouchableOpacity onPress={handleSearchPress}>
                    <StyledView className="flex flex-col items-center p-7 pt-5 px-5 ">
                        <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#1e293b" viewBox="0 0 16 16" >
                            <Path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                        </Svg>
                        <Text className="text-slate-800">Home</Text>
                    </StyledView>
				</TouchableOpacity>
				<StyledView className="flex flex-col items-center p-7 pt-5 px-5 bg-slate-800">
					<Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#ffffff" viewBox="0 0 16 16" >
						<Path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
					</Svg>
					<Text className="text-white">Search</Text>
				</StyledView>
				<StyledView className="flex flex-col items-center p-7 pt-5 px-5">
					<Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#1e293b" viewBox="0 0 16 16" >
						<Path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
					</Svg>
					<Text className="text-slate-800">Library</Text>
				</StyledView>
				<StyledView className="flex flex-col items-center p-7 pt-5 px-5">
					<Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#1e293b" viewBox="0 0 16 16" >
						<Path fillRule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z" />
						<Path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />
					</Svg>
					<Text className="text-slate-800">Coffee</Text>
				</StyledView>
			</StyledView>
        </SafeAreaView>
    )
}

export default Search