import React, { useRef,useEffect  } from 'react';
import { Animated,Text, View ,SafeAreaView,ScrollView, Image,TouchableOpacity } from 'react-native';
import Svg, { Rect, G, Path } from "react-native-svg";
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
	const StyledView = styled(View)
	const TransformView = (props) => {
		const transformAnim = useRef(new Animated.Value(0)).current
		useEffect(() => {
				setTimeout(() => {
					Animated.timing(
						transformAnim,
						{
							toValue: -10000,
							duration: 3000,
							useNativeDriver: true,
						}
					).start();
				}, 5000);
			
		}, [transformAnim])
	
		return (
		<Animated.View
			style={{
				...props.style,
				transform: [{ translateY: transformAnim }]
			}}
		>
			{props.children}
		</Animated.View>
		);
	}
	const OpacityView = (props) => {
		const opacityAnim = useRef(new Animated.Value(0)).current
		const scaleAnim = useRef(new Animated.Value(0)).current
		useEffect(() => {
				setTimeout(() => {
					Animated.timing(
						opacityAnim,
						{
							toValue: 1,
							duration: 2000,
							useNativeDriver: true,
						}
					).start();
				}, 1000);
				setTimeout(() => {
					Animated.timing(
						scaleAnim,
						{
							toValue: 1,
							duration: 2000,
							useNativeDriver: true,
						}
					).start();
				}, 1000);
		}, [opacityAnim,scaleAnim])
	
		return (
		<Animated.View
			style={{
				...props.style,
				opacity: opacityAnim,
				transform:[{scale:scaleAnim}],
			}}
		>
			{props.children}
		</Animated.View>
		);
	}
	const navigation = useNavigation();
	const handleSearchPress = () => {
		navigation.navigate('Search');
	};
	return (
		<SafeAreaView  className="bg-white">
			<ScrollView className="h-full overflow-hidden relative" showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]}>
				{/* Navbar */}
				<StyledView className="flex flex-row justify-between px-2">
					<Text className="text-2xl text-slate-800 p-2 font-bold">Good Evening</Text>
					<View className="p-3 pt-4 flex flex-row gap-4">
						<Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#1e293b" viewBox="0 0 16 16">
							<Path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
						</Svg>
						<Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#1e293b" viewBox="0 0 16 16">
							<Path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
							<Path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
							<Path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
						</Svg>
						<Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#1e293b" viewBox="0 0 16 16" >
							<Path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
							<Path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
						</Svg>
					</View>
				</StyledView>
				{/* Buttons Navbar */}
				<StyledView className="flex flex-row px-2 py-3  sticky top-0  w-full z-30 bg-[#ffffff]" style="">
					<StyledView className="rounded-full mx-2 px-4 py-2 bg-slate-800 shadow-xl"><Text className="text-white">Music</Text></StyledView>
					<StyledView className="rounded-full mx-2 px-4 py-2 bg-slate-800 shadow-xl"><Text className="text-white">Podcasts & Shows</Text></StyledView>
				</StyledView>
				{/* Trending Six Playlist */}
				<StyledView className="flex flex-col gap-y-1 mx-4">
					<StyledView className="flex flex-row w-full gap-2">
						<StyledView className="h-20 w-1/2 pr-20  rounded-lg overflow-hidden flex flex-row bg-slate-800 shadow-xl">
							<Image  className="w-20" source={{uri:"https://thisis-images.scdn.co/37i9dQZF1DZ06evO2dZjkJ-default.jpg"}} />
							<Text className="p-2 px-3 text-white text-xs font-bold">This Is Rahat Fateh Ali Khan</Text>
						</StyledView>
						<StyledView className="h-20 w-1/2 pr-20  rounded-lg overflow-hidden flex flex-row bg-slate-800 shadow-xl">
							<Image  className="w-20" source={{uri:"https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a"}} />
							<Text className="p-2 px-3 text-white text-xs font-bold">Evolve</Text>
						</StyledView>
					</StyledView>
					<StyledView className="flex flex-row w-full gap-2">
						<StyledView className="h-20 w-1/2 pr-20  rounded-lg overflow-hidden flex flex-row bg-slate-800 shadow-xl">
							<Image  className="w-20" source={{uri:"https://i.scdn.co/image/ab6761610000e5eb953f9dc50ed68470df840269"}} />
							<Text className="p-2 px-3 text-white text-xs font-bold">Maghushree</Text>
						</StyledView>
						<StyledView className="h-20 w-1/2 pr-20  rounded-lg overflow-hidden flex flex-row bg-slate-800 shadow-xl">
							<Image  className="w-20" source={{uri:"https://i.scdn.co/image/ab67706f000000028fc264b127557bdea3ea1961"}} />
							<Text className="p-2 px-3 text-white text-xs font-bold">Happy Vibes</Text>
						</StyledView>
					</StyledView>
					<StyledView className="flex flex-row w-full gap-2">
						<StyledView className="h-20 w-1/2 pr-20  rounded-lg overflow-hidden flex flex-row bg-slate-800 shadow-xl">
							<Image  className="w-20" source={{uri:"https://i.scdn.co/image/ab67706f000000026a925f84df005d8dabee6ae0"}} />
							<Text className="p-2 px-3 text-white text-xs font-bold">Bollywood Mush</Text>
						</StyledView>
						<StyledView className="h-20 w-1/2 pr-20  rounded-lg overflow-hidden flex flex-row bg-slate-800 shadow-xl">
							<Image  className="w-20" source={{uri:"https://i.scdn.co/image/ab67706f000000023ec51dd9c17a9add42c2e249"}} />
							<Text className="p-2 px-3 text-white text-xs font-bold">This Is Arijit Singh</Text>
						</StyledView>
					</StyledView>
				</StyledView>
				{/* Top Mix */}
				<StyledView className="">
					<Text className="text-2xl text-slate-800 p-2 px-3 font-bold">Your Top Mixes</Text>
					<ScrollView className="flex flex-row gap-2 mx-2"  horizontal={true} showsHorizontalScrollIndicator={false}>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/hindi/1wRPtKGflJrBx9BmLsSwlU/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Hindi Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/pop/7jVv8c5Fj3E9VhNjxT4snq/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/artist/04gDigrS5kc9YWfZHwBETP/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Maroon 5 Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/k_pop/3Nrfpe0tUJi4K4DXYWgMUX/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">K-Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/hindi/1wRPtKGflJrBx9BmLsSwlU/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Hindi Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/pop/7jVv8c5Fj3E9VhNjxT4snq/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/artist/04gDigrS5kc9YWfZHwBETP/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Maroon 5 Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/k_pop/3Nrfpe0tUJi4K4DXYWgMUX/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">K-Pop Mix</Text>
						</View>
					</ScrollView>
				</StyledView>
				{/* Happy 2023 */}
				<StyledView className="">
					<Text className="text-2xl text-slate-800 p-2 px-3 font-bold">Happy 2023</Text>
					<ScrollView className="flex flex-row gap-2 mx-2"  horizontal={true} showsHorizontalScrollIndicator={false}>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/hindi/1wRPtKGflJrBx9BmLsSwlU/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Hindi Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/pop/7jVv8c5Fj3E9VhNjxT4snq/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/artist/04gDigrS5kc9YWfZHwBETP/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Maroon 5 Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/k_pop/3Nrfpe0tUJi4K4DXYWgMUX/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">K-Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/hindi/1wRPtKGflJrBx9BmLsSwlU/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Hindi Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/pop/7jVv8c5Fj3E9VhNjxT4snq/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/artist/04gDigrS5kc9YWfZHwBETP/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Maroon 5 Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/k_pop/3Nrfpe0tUJi4K4DXYWgMUX/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">K-Pop Mix</Text>
						</View>
					</ScrollView>
				</StyledView>
				{/* Top Mix */}
				<StyledView className="">
					<Text className="text-2xl text-slate-800 p-2 px-3 font-bold">Your Top Mixes</Text>
					<ScrollView className="flex flex-row gap-2 mx-2"  horizontal={true} showsHorizontalScrollIndicator={false}>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/hindi/1wRPtKGflJrBx9BmLsSwlU/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Hindi Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/pop/7jVv8c5Fj3E9VhNjxT4snq/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/artist/04gDigrS5kc9YWfZHwBETP/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Maroon 5 Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/k_pop/3Nrfpe0tUJi4K4DXYWgMUX/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">K-Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/hindi/1wRPtKGflJrBx9BmLsSwlU/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Hindi Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/pop/7jVv8c5Fj3E9VhNjxT4snq/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/artist/04gDigrS5kc9YWfZHwBETP/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Maroon 5 Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/k_pop/3Nrfpe0tUJi4K4DXYWgMUX/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">K-Pop Mix</Text>
						</View>
					</ScrollView>
				</StyledView>
				{/* Happy 2023 */}
				<StyledView className="mb-20">
					<Text className="text-2xl text-slate-800 p-2 px-3 font-bold">Happy 2023</Text>
					<ScrollView className="flex flex-row gap-2 mx-2"  horizontal={true} showsHorizontalScrollIndicator={false}>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/hindi/1wRPtKGflJrBx9BmLsSwlU/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Hindi Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/pop/7jVv8c5Fj3E9VhNjxT4snq/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/artist/04gDigrS5kc9YWfZHwBETP/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Maroon 5 Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/k_pop/3Nrfpe0tUJi4K4DXYWgMUX/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">K-Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/hindi/1wRPtKGflJrBx9BmLsSwlU/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Hindi Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/pop/7jVv8c5Fj3E9VhNjxT4snq/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Pop Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/artist/04gDigrS5kc9YWfZHwBETP/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">Maroon 5 Mix</Text>
						</View>
						<View className="h-fit w-32 rounded-lg overflow-hidden flex flex-col bg-slate-800 shadow-xl transition-all duration-200">
							<Image  className="w-full h-32" source={{uri:"https://seed-mix-image.spotifycdn.com/v6/img/k_pop/3Nrfpe0tUJi4K4DXYWgMUX/en/default"}} />
							<Text className="p-2 h-10 text-white text-sm font-bold truncate">K-Pop Mix</Text>
						</View>
					</ScrollView>
				</StyledView>
			</ScrollView>
			{/* Bottom Navbar */}
			<StyledView className="flex flex-row w-full justify-between absolute bottom-0 left-0 bg-white z-40 ">
				<StyledView className="flex flex-col items-center p-7 pt-5 px-5 bg-slate-800">
					<Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#ffffff" viewBox="0 0 16 16" >
						<Path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
					</Svg>
					<Text className="text-white">Home</Text>
				</StyledView>
				<TouchableOpacity onPress={handleSearchPress}>
				<StyledView className="flex flex-col items-center p-7 pt-5 px-5">
					<Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#1e293b" viewBox="0 0 16 16" >
						<Path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
					</Svg>
					<Text className="text-slate-800">Search</Text>
				</StyledView>
				</TouchableOpacity>
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
			<TransformView style={{width: "100%", height: "100%", backgroundColor: 'white',position:"absolute",top:0,left:0,zIndex:999}}>
				<StyledView  className='flex flex-row w-full h-screen justify-between absolute top-0 left-0 bg-white z-50 transition-all duration-300'>
					<OpacityView style={{ display: "flex",  position: "absolute", top: 0, left: 0, zIndex: 50, backgroundColor: "#ffffff", transitionProperty: "all", transitionDuration: "300ms", flexDirection: "row", justifyContent: "space-between", width: "100%", height: "100%",  }}>
						<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 250" colorInterpolationFilters="sRGB" style={{ margin: "auto" }}>
							<Rect width="100%" height="100%" fill="none" className="background" />
							<G fill="#333" className="icon-text-wrapper icon-svg-group iconsvg">
							<G transform="translate(120 10)" className="iconsvg-imagesvg">
								<Svg width={120} height={120} className="image-svg-svg primary" style={{overflow:"visible" }} >
								<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
									<Path d="M70 35.24A35 35 0 0 1 35 70H0V43.72a17.49 17.49 0 0 1 17.49-17.49v26.24H35a17.5 17.5 0 0 0 17.46-17.83 17.75 17.75 0 0 0-17.88-17.15H17.49A17.49 17.49 0 0 1 0 0h34.36C53.74 0 70.09 15.86 70 35.24z" fill="#1e293b" />
									<Path d="M26.23 26.23H35A8.74 8.74 0 0 1 43.72 35 8.74 8.74 0 0 1 35 43.72h-8.77V26.23z" fill="#1e293b" />
								</Svg>
								</Svg>
							</G>
							<Path d="M84.285 169.575h-3.06v-.92q1.12-.51 2.61-.77v-18.87q-.73-.16-1.4-.36-.67-.21-1.21-.43v-.93h3.25q.54 0 1.27-.03t1.51-.08q.78-.05 1.5-.09.72-.05 1.19-.05 5.41 0 8.32 2.89 2.92 2.9 2.92 8.21 0 2.52-.72 4.67t-2.18 3.7q-1.46 1.56-3.71 2.46-2.24.89-5.3.89-.47 0-1.08-.05-.6-.05-1.27-.1-.67-.04-1.35-.09-.69-.05-1.29-.05Zm5.22-20.88q-.83 0-1.59.02-.77.01-1.21.11v19.29q.16.03.57.04.41.02.89.04.48.01.91.01h.62q2.19 0 3.72-.83 1.53-.82 2.5-2.21.97-1.38 1.42-3.2.44-1.81.44-3.82 0-1.55-.43-3.23-.43-1.67-1.4-3.05t-2.56-2.28q-1.59-.89-3.88-.89Zm25.33 7.35h-4.23q-.35.2-.88.78-.52.59-.94 1.74v9.45q.64.06 1.28.24.63.17 1.27.52v.8h-7.51v-.8q.57-.31 1.08-.47.51-.16 1.02-.29v-12.51l-2.1-.25v-.83q1.02-.44 2.1-.71 1.08-.28 2.07-.43h.79v3.37h.13q.29-.64.81-1.27.53-.64 1.21-1.15.69-.51 1.5-.78t1.67-.17q.22.41.4.9.17.5.33 1.04v.82Zm13.97 10.79.45.51q-.26.54-.8 1.02t-1.24.83q-.7.35-1.53.56-.83.2-1.68.2-1.88 0-3.31-.59-1.44-.59-2.39-1.68-.96-1.1-1.45-2.63-.49-1.53-.49-3.44 0-4.07 1.87-6.2 1.88-2.13 5.32-2.13 1.11 0 2.2.3 1.08.3 1.92 1 .84.7 1.37 1.86.52 1.16.52 2.88 0 .54-.04 1.1-.05.56-.18 1.19h-9.93q0 1.34.34 2.5.33 1.16 1 2.02.67.86 1.69 1.36 1.01.49 2.38.49 1.12 0 2.26-.32 1.15-.32 1.72-.83Zm-5.38-12.15q-1.81 0-2.77 1.22-.95 1.23-1.14 4.31h7q.03-.28.05-.55.01-.27.01-.53 0-2.04-.76-3.24-.76-1.21-2.39-1.21Zm20.69 10.72q0 .7.03 1.21t.06 1.08l2.2.32v.67q-.8.41-1.77.73t-1.86.48h-.79q-.32-.73-.39-1.61-.06-.87-.09-1.92h-.16q-.13.63-.49 1.28-.37.66-.96 1.17-.59.51-1.38.82-.8.32-1.82.32-1.94 0-3.16-1.18-1.23-1.17-1.23-3.08 0-1.47.59-2.41.59-.93 1.73-1.48 1.15-.54 2.84-.77 1.68-.24 3.91-.37.13-1.37.08-2.47t-.35-1.87q-.3-.78-.89-1.21-.59-.43-1.54-.43-.45 0-1.01.04-.55.05-1.09.27l-1.5 3.82h-.83q-.32-.95-.55-1.97-.24-1.02-.31-2 1.21-.74 2.69-1.15 1.48-.41 3.3-.41 1.62 0 2.59.46.97.46 1.48 1.19t.67 1.62q.16.89.16 1.79 0 1.91-.08 3.67-.08 1.77-.08 3.39Zm-6.14 2.58q.79 0 1.4-.32.6-.32 1.01-.76.42-.45.67-.91.26-.46.35-.78v-3.34q-1.84 0-3.02.19t-1.85.6q-.66.42-.92 1.04-.25.62-.25 1.41 0 1.37.7 2.12t1.91.75Zm26.6.79v.8h-6.81v-.8q.32-.19.78-.39.46-.21 1.1-.37v-7.35q0-1.27-.11-2.29t-.42-1.7q-.3-.69-.87-1.06-.57-.36-1.5-.36-.7 0-1.29.29-.58.28-1.05.76-.46.48-.79 1.08-.34.61-.53 1.27v9.36q.51.16.97.33.46.18.91.43v.8h-6.84v-.8q.44-.22.98-.41.55-.19 1.12-.35v-12.51l-2.1-.25v-.83q1.02-.44 2.08-.71 1.07-.28 2.09-.43h.79v3.59h.03q.51-1.49 1.74-2.54 1.22-1.05 3.04-1.05.76 0 1.46.15.7.16 1.31.59.6.43 1.02 1.2.41.76.6 1.97.57-1.75 1.85-2.83 1.27-1.08 3.18-1.08 1.18 0 2.05.3.88.3 1.45 1.06.57.77.84 2.07.27 1.31.27 3.31v7.99q1.09.19 2.1.76v.8h-6.84v-.8q.96-.5 1.88-.76v-7.92q0-1.15-.11-2.04-.11-.89-.43-1.51t-.89-.96q-.58-.33-1.53-.33-1.53 0-2.37 1.05-.85 1.05-1.23 2.67v9.04q1.12.32 2.07.76Zm24.35-.12v.92h-8.95v-.92q.7-.26 1.42-.45t1.54-.32v-18.93h-4.86l-1.69 4.55h-.8q-.09-.64-.16-1.45-.06-.81-.11-1.65-.05-.85-.08-1.66-.03-.81-.03-1.45h18.49q0 .64-.03 1.43-.03.8-.08 1.64-.05.85-.1 1.66-.04.81-.14 1.48h-.83l-1.65-4.55h-4.87v18.93q.83.16 1.54.32.72.16 1.39.45Zm6.87-5.38q0-2.01.1-3.93.09-1.93.09-3.84l-2.1-.25v-.83q1.02-.38 2.09-.67 1.06-.28 2.08-.47h.8q0 2.38-.1 4.74-.09 2.35-.09 4.68 0 1.24.14 2.22.14.99.51 1.66.36.67 1 1.03.64.37 1.62.37 1.44 0 2.41-1.04.97-1.03 1.51-2.68v-8.76l-2.07-.25v-.83q.99-.38 2.05-.67 1.07-.28 2.09-.47h.79v14.48l2.1.25v.67q-.92.41-1.86.73-.94.32-1.96.48h-.79l-.22-3.79h-.13q-.16.67-.56 1.35-.4.69-1.03 1.24-.64.56-1.45.91-.81.35-1.77.35-1.27 0-2.24-.3-.97-.3-1.64-1.07-.67-.76-1.02-2.05-.35-1.29-.35-3.26Zm34.18 5.5v.8h-6.84v-.8q.86-.44 1.88-.76v-7.54q0-2.42-.7-3.82t-2.55-1.4q-.8 0-1.48.29-.68.28-1.21.78-.52.49-.91 1.11-.38.62-.6 1.29v9.29q.99.19 1.91.76v.8h-6.88v-.8q.8-.41 2.11-.76v-12.51l-2.11-.25v-.83q.83-.35 1.91-.64 1.09-.28 2.26-.5h.8v3.56h.03q.67-1.46 1.93-2.51 1.25-1.05 3.04-1.05 1.27 0 2.27.3t1.67 1.06q.67.77 1.02 2.06t.35 3.26v8.05q1.27.22 2.1.76Zm14.29-1.94.45.51q-.26.54-.8 1.02t-1.24.83q-.7.35-1.53.56-.83.2-1.69.2-1.87 0-3.3-.59-1.44-.59-2.39-1.68-.96-1.1-1.45-2.63-.49-1.53-.49-3.44 0-4.07 1.87-6.2 1.88-2.13 5.32-2.13 1.11 0 2.2.3 1.08.3 1.92 1 .84.7 1.37 1.86.52 1.16.52 2.88 0 .54-.04 1.1-.05.56-.18 1.19h-9.93q0 1.34.34 2.5.33 1.16 1 2.02.67.86 1.69 1.36 1.01.49 2.38.49 1.12 0 2.26-.32 1.15-.32 1.72-.83Zm-5.38-12.15q-1.81 0-2.77 1.22-.95 1.23-1.14 4.31h7q.03-.28.05-.55.01-.27.01-.53 0-2.04-.76-3.24-.76-1.21-2.39-1.21Zm17.03 11.26q0-.89-.56-1.51t-1.41-1.16q-.86-.54-1.83-1.05-.98-.51-1.83-1.19-.86-.69-1.42-1.58-.56-.89-.56-2.2 0-.86.4-1.59.4-.73 1.07-1.25.66-.53 1.56-.83.89-.3 1.9-.3 1.72 0 2.82.19 1.1.19 2.12.54-.13 1.02-.3 2.05-.18 1.03-.5 2.12h-.79l-1.21-3.25q-.38-.16-.86-.21-.48-.04-.99-.04-.57 0-1 .2-.43.21-.73.53-.31.32-.46.73-.16.41-.16.83 0 .86.55 1.48.56.62 1.42 1.14.86.53 1.83 1.04.97.51 1.83 1.14.86.64 1.42 1.48.55.85.55 2.02 0 1.09-.46 1.94-.46.86-1.27 1.47-.81.6-1.88.94-1.07.33-2.28.33-1.36 0-2.51-.24-1.14-.24-2.39-.68.07-1.15.29-2.21.22-1.07.57-2.06h.8l1.4 3.47q.35.26.84.29.5.03.91.03 1.4 0 2.26-.76.86-.77.86-1.85Z" fill="#1e293b" data-gra="path-name" className="tp-name iconsvg-namesvg"/>
							</G>
						</Svg>
					</OpacityView>
				</StyledView>
			</TransformView>
		</SafeAreaView >
	);
}

export default Home;