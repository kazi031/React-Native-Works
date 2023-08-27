import { Button, SafeAreaView, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import TweetContent from "../../components/TweetContent";
import { useLayoutEffect } from "react";

export default function TweetDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { params } = route;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: params.tweet.author.name,
        });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1}}>
            {/* <Button title="Go Back" onPress={() => navigation.goBack()}/> */}
            <TweetContent tweet={params.tweet}/>
        </SafeAreaView>
    )
}