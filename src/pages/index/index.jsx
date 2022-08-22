import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";

function Index() {
  function goPage() {
    Taro.navigateTo({
      url: "/pages/user/index",
    });
  }
  return (
    <View>
      <Button onClick={goPage}>跳转User页面</Button>
    </View>
  );
}

export default Index;
